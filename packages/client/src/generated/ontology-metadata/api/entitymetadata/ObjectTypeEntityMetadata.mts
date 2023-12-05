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

import type { ObjectTypeGothamMapping } from "../typemapping/ObjectTypeGothamMapping.mjs";
import type { ActionLogRequirednessMetadata } from "./ActionLogRequirednessMetadata.mjs";
import type { EditsResolutionStrategies } from "./EditsResolutionStrategies.mjs";
import type { EntityConfig } from "./EntityConfig.mjs";
import type { ObjectTypeAlias } from "./ObjectTypeAlias.mjs";
import type { EntityProvenance } from "./provenance/EntityProvenance.mjs";
import type { StorageBackend } from "./StorageBackend.mjs";

export interface ObjectTypeEntityMetadata {
  entityConfig: EntityConfig;
  arePatchesEnabled: boolean;
  targetStorageBackend: StorageBackend;
  redacted: boolean | undefined;
  actionLogRequirednessMetadata: ActionLogRequirednessMetadata | undefined;
  diffEdits: boolean;
  gothamMapping: ObjectTypeGothamMapping | undefined;
  provenance: EntityProvenance | undefined;
  editsResolutionStrategies: EditsResolutionStrategies;
  aliases: Array<ObjectTypeAlias>;
}
