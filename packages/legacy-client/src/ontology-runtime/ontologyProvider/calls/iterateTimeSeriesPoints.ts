/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  createOpenApiRequest,
  type OntologyDefinition,
  type ThinClient,
} from "@osdk/api";
import { streamPoints } from "@osdk/gateway/requests";
import type { StreamTimeSeriesPointsRequest } from "@osdk/gateway/types";
import type { TimeSeriesPoint } from "../../baseTypes";
import { Timestamp } from "../../baseTypes";
import {
  handleTimeSeriesError,
  TimeSeriesErrorHandler,
} from "../ErrorHandlers";
import type { TimeSeriesError } from "../Errors";
import { iterateReadableStream } from "../parseStreamedResponse";
import type { Result } from "../Result";
import { wrapIterator } from "./util/wrapIterator";

export async function* iterateTimeSeriesPoints<T extends string | number>(
  client: ThinClient<OntologyDefinition<any>>,
  apiName: string,
  primaryKey: any,
  propertyName: string,
  body: StreamTimeSeriesPointsRequest,
): AsyncGenerator<Result<TimeSeriesPoint<T>, TimeSeriesError>, any, unknown> {
  yield* wrapIterator(
    async function*() {
      const streamPointsResponse = await streamPoints(
        createOpenApiRequest(client.stack, client.fetch, undefined, true),
        client.ontology.metadata.ontologyApiName,
        apiName,
        primaryKey,
        propertyName,
        body,
      );
      const reader = streamPointsResponse.getReader();
      const streamPointsIterator = iterateReadableStream(reader);
      const firstChunk = await streamPointsIterator.next();

      const remainingChunksPromise: Promise<any[]> = new Promise(
        (resolve, _reject) => {
          const remainingPoints = processStream(streamPointsIterator);
          resolve(remainingPoints);
        },
      );

      yield {
        time: Timestamp.fromISOString((firstChunk.value as any).time),
        value: (firstChunk.value as any).value as T,
      };
      const remainingChunks = await remainingChunksPromise;
      for (const point of remainingChunks) {
        yield {
          time: Timestamp.fromISOString(point.time),
          value: point.value as T,
        };
      }
    },
    e => handleTimeSeriesError(new TimeSeriesErrorHandler(), e, e.parameters),
  );
}

async function processStream<T extends string | number>(
  streamIterator: AsyncGenerator<any, any, unknown>,
): Promise<any[]> {
  const allPoints: Array<TimeSeriesPoint<T>> = [];
  for await (const points of streamIterator) {
    Array.prototype.push.apply(allPoints, points);
  }
  return allPoints;
}
