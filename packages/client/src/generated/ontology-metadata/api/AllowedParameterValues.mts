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

import type { ParameterAttachmentOrEmpty } from "./ParameterAttachmentOrEmpty.mjs";
import type { ParameterBooleanOrEmpty } from "./ParameterBooleanOrEmpty.mjs";
import type { ParameterCbacMarkingOrEmpty } from "./ParameterCbacMarkingOrEmpty.mjs";
import type { ParameterDateTimeRangeOrEmpty } from "./ParameterDateTimeRangeOrEmpty.mjs";
import type { ParameterFreeTextOrEmpty } from "./ParameterFreeTextOrEmpty.mjs";
import type { ParameterMandatoryMarkingOrEmpty } from "./ParameterMandatoryMarkingOrEmpty.mjs";
import type { ParameterMultipassGroupOrEmpty } from "./ParameterMultipassGroupOrEmpty.mjs";
import type { ParameterMultipassUserOrEmpty } from "./ParameterMultipassUserOrEmpty.mjs";
import type { ParameterObjectListOrEmpty } from "./ParameterObjectListOrEmpty.mjs";
import type { ParameterObjectPropertyValueOrEmpty } from "./ParameterObjectPropertyValueOrEmpty.mjs";
import type { ParameterObjectQueryOrEmpty } from "./ParameterObjectQueryOrEmpty.mjs";
import type { ParameterObjectSetRidOrEmpty } from "./ParameterObjectSetRidOrEmpty.mjs";
import type { ParameterRangeOrEmpty } from "./ParameterRangeOrEmpty.mjs";
import type { ParameterValueOneOfOrEmpty } from "./ParameterValueOneOfOrEmpty.mjs";
import type { Redacted } from "./Redacted.mjs";
export interface AllowedParameterValues_oneOf {
  type: "oneOf";
  oneOf: ParameterValueOneOfOrEmpty;
}

export interface AllowedParameterValues_range {
  type: "range";
  range: ParameterRangeOrEmpty;
}

export interface AllowedParameterValues_objectQuery {
  type: "objectQuery";
  objectQuery: ParameterObjectQueryOrEmpty;
}

export interface AllowedParameterValues_objectPropertyValue {
  type: "objectPropertyValue";
  objectPropertyValue: ParameterObjectPropertyValueOrEmpty;
}

export interface AllowedParameterValues_objectList {
  type: "objectList";
  objectList: ParameterObjectListOrEmpty;
}

export interface AllowedParameterValues_user {
  type: "user";
  user: ParameterMultipassUserOrEmpty;
}

export interface AllowedParameterValues_multipassGroup {
  type: "multipassGroup";
  multipassGroup: ParameterMultipassGroupOrEmpty;
}

export interface AllowedParameterValues_text {
  type: "text";
  text: ParameterFreeTextOrEmpty;
}

export interface AllowedParameterValues_datetime {
  type: "datetime";
  datetime: ParameterDateTimeRangeOrEmpty;
}

export interface AllowedParameterValues_boolean {
  type: "boolean";
  boolean: ParameterBooleanOrEmpty;
}

export interface AllowedParameterValues_objectSetRid {
  type: "objectSetRid";
  objectSetRid: ParameterObjectSetRidOrEmpty;
}

export interface AllowedParameterValues_attachment {
  type: "attachment";
  attachment: ParameterAttachmentOrEmpty;
}

export interface AllowedParameterValues_cbacMarking {
  type: "cbacMarking";
  cbacMarking: ParameterCbacMarkingOrEmpty;
}

export interface AllowedParameterValues_mandatoryMarking {
  type: "mandatoryMarking";
  mandatoryMarking: ParameterMandatoryMarkingOrEmpty;
}

export interface AllowedParameterValues_redacted {
  type: "redacted";
  redacted: Redacted;
}

export type AllowedParameterValues =
  | AllowedParameterValues_oneOf
  | AllowedParameterValues_range
  | AllowedParameterValues_objectQuery
  | AllowedParameterValues_objectPropertyValue
  | AllowedParameterValues_objectList
  | AllowedParameterValues_user
  | AllowedParameterValues_multipassGroup
  | AllowedParameterValues_text
  | AllowedParameterValues_datetime
  | AllowedParameterValues_boolean
  | AllowedParameterValues_objectSetRid
  | AllowedParameterValues_attachment
  | AllowedParameterValues_cbacMarking
  | AllowedParameterValues_mandatoryMarking
  | AllowedParameterValues_redacted;
