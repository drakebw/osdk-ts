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

import type { ObjectTypeAlias } from "../entitymetadata/ObjectTypeAlias.mjs";
import type { ObjectTypeGothamMappingModification } from "../typemapping/ObjectTypeGothamMappingModification.mjs";
import type { ActionLogRequirednessModification } from "./ActionLogRequirednessModification.mjs";
import type { EditsResolutionStrategyModification } from "./EditsResolutionStrategyModification.mjs";
import type { EntityConfigModification } from "./EntityConfigModification.mjs";
import type { EntityProvenanceModification } from "./EntityProvenanceModification.mjs";
import type { StorageBackendModification } from "./StorageBackendModification.mjs";

export interface ObjectTypeEntityMetadataModifyRequest {
  entityConfig: EntityConfigModification;
  arePatchesEnabled: boolean | undefined;
  targetStorageBackend: StorageBackendModification | undefined;
  actionLogRequiredness: ActionLogRequirednessModification | undefined;
  diffEdits: boolean | undefined;
  gothamMapping: ObjectTypeGothamMappingModification | undefined;
  provenance: EntityProvenanceModification | undefined;
  editsResolutionStrategies: EditsResolutionStrategyModification | undefined;
  aliases: Array<ObjectTypeAlias> | undefined;
}
