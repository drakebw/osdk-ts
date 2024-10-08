import type { PropertyDef as $PropertyDef, VersionBound as $VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type { InterfaceDefinition as $InterfaceDefinition } from '@osdk/api';
import type {
  AggregateOpts as $AggregateOpts,
  AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
  AggregationsResults as $AggregationsResults,
  Augments as $Augments,
  ConvertProps as $ConvertProps,
  DefaultToFalse as $DefaultToFalse,
  FetchPageArgs as $FetchPageArgs,
  IsAny as $IsAny,
  LinkedType as $LinkedType,
  LinkNames as $LinkNames,
  NullabilityAdherence as $NullabilityAdherence,
  NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PageResult as $PageResult,
  PropertyValueWireToClient as $PropType,
  Result as $Result,
  ValidToFrom as $ValidToFrom,
} from '@osdk/client.api';

export type OsdkObjectLinks$FooInterface = {};

export namespace FooInterface {
  export type PropertyKeys = 'name' | 'description';

  export interface Props {
    readonly description: $PropType['string'] | undefined;
    readonly name: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly description: $PropType['string'] | undefined;
    readonly name: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<FooInterface.Definition, FooInterface.ObjectSet> {
    readonly aggregate: <const AO extends $AggregateOpts<FooInterface.Definition>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<FooInterface.Definition, AO>,
    ) => Promise<$AggregationsResults<FooInterface.Definition, AO>>;

    readonly pivotTo: <const L extends $LinkNames<FooInterface.Definition>>(
      type: L,
    ) => $LinkedType<FooInterface.Definition, L>['objectSet'];

    readonly fetchPage: <
      const L extends FooInterface.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<FooInterface.Definition, L, R, A, S>,
    ) => Promise<
      $PageResult<
        FooInterface.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          $IsAny<L> extends true ? FooInterface.PropertyKeys : L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      const L extends FooInterface.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<FooInterface.Definition, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          FooInterface.OsdkObject<
            (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
            $IsAny<L> extends true ? FooInterface.PropertyKeys : L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<FooInterface.OsdkObject>;
  }

  export interface Definition
    extends $InterfaceDefinition<'FooInterface', FooInterface.Definition>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: FooInterface.ObjectSet;
    props: FooInterface.Props;
    linksType: OsdkObjectLinks$FooInterface;
    strictProps: FooInterface.StrictProps;
    description: 'Its a Foo.';
    displayName: 'Foo interface';
    links: {};
    properties: {
      /**
       *   display name: 'Description',
       *   description: Description of Description
       */
      description: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'Name',
       *   description: Name of Foo
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
    };
  }

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof FooInterface.Props = keyof FooInterface.Props,
  > = $Osdk<FooInterface.Definition, K | OPTIONS> &
    Pick<
      [OPTIONS] extends [never]
        ? FooInterface.StrictProps
        : OPTIONS extends '$notStrict'
          ? FooInterface.Props
          : FooInterface.StrictProps,
      K
    > & {
      readonly $link: OsdkObjectLinks$FooInterface;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: string | number;

      readonly $as: <NEW_Q extends $ValidToFrom<FooInterface.Definition>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<FooInterface.Definition, NEW_Q, K>>;
    } & $OsdkObject<'FooInterface'>;
}

/** @deprecated use FooInterface.Definition **/
export type FooInterface = FooInterface.Definition;

export const FooInterface: FooInterface.Definition = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
  apiName: 'FooInterface',
  description: 'Its a Foo.',
  displayName: 'Foo interface',
  links: {},
  properties: {
    description: {
      displayName: 'Description',
      multiplicity: false,
      description: 'Description of Description',
      type: 'string',
      nullable: true,
    },
    name: {
      displayName: 'Name',
      multiplicity: false,
      description: 'Name of Foo',
      type: 'string',
      nullable: true,
    },
  },
  type: 'interface',
};
