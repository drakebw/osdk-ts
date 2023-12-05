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

import type { InterfaceTypeLoadResponse } from "./InterfaceTypeLoadResponse.mjs";
import type { LinkTypeLoadResponse } from "./LinkTypeLoadResponse.mjs";
import type { ObjectTypeLoadResponse } from "./ObjectTypeLoadResponse.mjs";
import type { SharedPropertyTypeLoadResponse } from "./SharedPropertyTypeLoadResponse.mjs";
import type { TypeGroupLoadResponse } from "./TypeGroupLoadResponse.mjs";

export interface OntologyBulkLoadEntitiesResponse {
  objectTypes: Array<ObjectTypeLoadResponse | undefined>;
  linkTypes: Array<LinkTypeLoadResponse | undefined>;
  sharedPropertyTypes: Array<SharedPropertyTypeLoadResponse | undefined>;
  interfaceTypes: Array<InterfaceTypeLoadResponse | undefined>;
  typeGroups: Array<TypeGroupLoadResponse | undefined>;
}
