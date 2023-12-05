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

import type { DatasourceType } from "./DatasourceType.mjs";
import type { LinkTypeRid } from "./LinkTypeRid.mjs";
import type { ObjectTypeRid } from "./ObjectTypeRid.mjs";
import type { OntologyVersion } from "./OntologyVersion.mjs";

export interface OntologyLoadDatasourcesRequest {
  datasourceTypes: Array<DatasourceType>;
  manyToManyLinkTypes: Map<LinkTypeRid, OntologyVersion | undefined>;
  objectTypes: Map<ObjectTypeRid, OntologyVersion | undefined>;
  loadRedacted: boolean | undefined;
  includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
