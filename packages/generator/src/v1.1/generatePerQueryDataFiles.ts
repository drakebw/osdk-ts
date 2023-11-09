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

import path from "path";
import type { MinimalFs } from "../MinimalFs";
import { wireQueryTypeV2ToSdkQueryDefinition } from "../shared/wireQueryTypeV2ToSdkQueryDefinition";
import { formatTs } from "../util/test/formatTs";
import type { WireOntologyDefinition } from "../WireOntologyDefinition";

export async function generatePerQueryDataFiles(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
) {
  await fs.mkdir(outDir, { recursive: true });
  await Promise.all(ontology.queryTypes.map(async query => {
    await fs.writeFile(
      path.join(outDir, `${query.apiName}.ts`),
      await formatTs(`
        import { QueryDefinition } from "@osdk/api";

        export const ${query.apiName} = ${
        JSON.stringify(wireQueryTypeV2ToSdkQueryDefinition(query))
      } satisfies QueryDefinition<"${query.apiName}">;`),
    );
  }));

  await fs.writeFile(
    path.join(outDir, "index.ts"),
    await formatTs(`
  ${
      ontology.queryTypes.map(query => `export * from "./${query.apiName}";`)
        .join("\n")
    }
  `),
  );
}
