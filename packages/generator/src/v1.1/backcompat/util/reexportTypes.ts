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

export function reexportTypes(
  typesToExport: string[],
  genericArgsLeft = "",
  genericArgsRight = cleanup(genericArgsLeft),
) {
  return `
    import type { ${
    typesToExport.map(q => `${q} as OG_${q}`).join(", ")
  }} from "@osdk/legacy-client";
    
        ${
    typesToExport.map(q => `
      /** @deprecated submodule imports arent public api **/
      export type ${q}${genericArgsLeft} = OG_${q}${genericArgsRight};
    `).join("\n\n")
  }
    `;
}

const captureInBracketsRegex = /<(.*?)>/;
const captureGenericParamNameRegex = /^\s?(.+?)( extends .*?)?( = .*?)?\s?$/;
function cleanup(s: string) {
  if (s.length === 0) return "";
  const genericParameterNames = captureInBracketsRegex.exec(s)?.[1]?.split(",")
    ?.map(a => {
      return captureGenericParamNameRegex.exec(a)?.[1] ?? a;
    });
  return `<${genericParameterNames?.join(",")}>`;
}
