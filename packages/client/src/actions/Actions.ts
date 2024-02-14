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

import type {
  ActionParameterDefinition,
  ObjectActionDataType,
  ObjectSetActionDataType,
  OntologyDefinition,
  WirePropertyTypes,
} from "@osdk/api";
import type {
  ActionResults,
  ValidateActionResponseV2,
} from "@osdk/gateway/types";
import type { ObjectSet } from "../index.js";
import type { Attachment } from "../object/Attachment.js";
import type {
  OsdkObjectFrom,
  OsdkObjectPrimaryKeyType,
} from "../OsdkObjectFrom.js";
import type { NOOP } from "../util/NOOP.js";
import type { NullableProps } from "../util/NullableProps.js";
import type { PartialByNotStrict } from "../util/PartialBy.js";
import type { ActionReturnTypeForOptions } from "./applyAction.js";

export type ApplyActionOptions =
  | { returnEdits?: true; validateOnly?: false }
  | {
    validateOnly?: true;
    returnEdits?: false;
  };

// we have to override the @osdk/api WirePropertyTypes to specify how we handle the Attachment types
interface OverrideWirePropertyTypes extends WirePropertyTypes {
  attachment: Attachment;
}

type BaseType<APD extends ActionParameterDefinition<any, any>> =
  APD["type"] extends ObjectActionDataType<any, infer TTargetType> ?
      | OsdkObjectFrom<TTargetType>
      | OsdkObjectPrimaryKeyType<TTargetType>
    : APD["type"] extends ObjectSetActionDataType<any, infer TTargetType>
      ? ObjectSet<TTargetType>
    : APD["type"] extends keyof OverrideWirePropertyTypes
      ? OverrideWirePropertyTypes[APD["type"]]
    : never;

type MaybeArrayType<APD extends ActionParameterDefinition<any, any>> =
  APD["multiplicity"] extends true ? Array<BaseType<APD>>
    : BaseType<APD>;

type NotOptionalParams<X extends ActionParametersDefinition> = {
  [P in keyof X]: MaybeArrayType<X[P]>;
};

export type OsdkActionParameters<
  X extends ActionParametersDefinition,
> = NullableProps<X> extends never ? NotOptionalParams<X>
  : PartialByNotStrict<NotOptionalParams<X>, NullableProps<X>>;

export type Actions<O extends OntologyDefinition<any>> = {
  [K in keyof O["actions"]]:
    NonNullable<O["actions"][K]["__OsdkActionType"]> extends never
      ? ActionSignature<O["actions"][K]["parameters"]>
      : NonNullable<O["actions"][K]["__OsdkActionType"]>;
};

type ActionParametersDefinition = Record<
  any,
  ActionParameterDefinition<any, any>
>;

export type ActionSignature<
  X extends Record<any, ActionParameterDefinition<any, any>>,
> = <
  OP extends ApplyActionOptions,
>(
  args: NOOP<OsdkActionParameters<X>>,
  options?: OP,
) => Promise<ActionReturnTypeForOptions<OP>>;

export type ActionEditResponse = ActionResults;
export type ActionValidationResponse = ValidateActionResponseV2;
