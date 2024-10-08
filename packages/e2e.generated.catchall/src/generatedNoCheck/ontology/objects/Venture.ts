import type {
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
  PropertyDef as $PropertyDef,
  VersionBound as $VersionBound,
} from '@osdk/api';
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
  OsdkObjectPropertyType as $OsdkObjectPropertyType,
  PageResult as $PageResult,
  PropertyValueClientToWire as $PropertyValueClientToWire,
  PropertyValueWireToClient as $PropType,
  Result as $Result,
  SelectArg as $SelectArg,
  ValidToFrom as $ValidToFrom,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Employee } from './Employee.js';

export namespace Venture {
  export type PropertyKeys = 'ventureId' | 'ventureName' | 'ventureStart';

  export interface Links {
    readonly employees: Employee.ObjectSet;
  }

  export interface Props {
    readonly ventureId: $PropType['string'] | undefined;
    readonly ventureName: $PropType['string'] | undefined;
    readonly ventureStart: $PropType['datetime'] | undefined;
  }
  export interface StrictProps {
    readonly ventureId: $PropType['string'];
    readonly ventureName: $PropType['string'] | undefined;
    readonly ventureStart: $PropType['datetime'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<Venture.Definition, Venture.ObjectSet> {
    readonly aggregate: <const AO extends $AggregateOpts<Venture.Definition>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Venture.Definition, AO>,
    ) => Promise<$AggregationsResults<Venture.Definition, AO>>;

    readonly pivotTo: <const L extends $LinkNames<Venture.Definition>>(
      type: L,
    ) => $LinkedType<Venture.Definition, L>['objectSet'];

    readonly fetchOne: <
      const L extends Venture.PropertyKeys,
      const R extends boolean,
      const S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Venture.Definition['primaryKeyType']],
      options?: $SelectArg<Venture.Definition, L, R, S>,
    ) => Promise<
      Venture.OsdkObject<
        (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
        $IsAny<L> extends true ? Venture.PropertyKeys : L
      >
    >;

    readonly fetchOneWithErrors: <
      const L extends Venture.PropertyKeys,
      const R extends boolean,
      const S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Venture.Definition['primaryKeyType']],
      options?: $SelectArg<Venture.Definition, L, R, S>,
    ) => Promise<
      $Result<
        Venture.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          $IsAny<L> extends true ? Venture.PropertyKeys : L
        >
      >
    >;

    readonly fetchPage: <
      const L extends Venture.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Venture.Definition, L, R, A, S>,
    ) => Promise<
      $PageResult<
        Venture.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          $IsAny<L> extends true ? Venture.PropertyKeys : L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      const L extends Venture.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Venture.Definition, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          Venture.OsdkObject<
            (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
            $IsAny<L> extends true ? Venture.PropertyKeys : L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<Venture.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'Venture', Venture.Definition>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Venture.ObjectSet;
    props: Venture.Props;
    linksType: Venture.Links;
    strictProps: Venture.StrictProps;
    description: 'A venture';
    links: {
      employees: $ObjectTypeLinkDefinition<Employee, true>;
    };
    primaryKeyApiName: 'ventureId';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      ventureId: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      ventureName: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      ventureStart: $PropertyDef<'datetime', 'nullable', 'single'>;
    };
  }

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Venture.Props = keyof Venture.Props,
  > = $Osdk<Venture.Definition, K | OPTIONS> &
    Pick<
      [OPTIONS] extends [never]
        ? Venture.StrictProps
        : OPTIONS extends '$notStrict'
          ? Venture.Props
          : Venture.StrictProps,
      K
    > & {
      readonly $link: Venture.Links;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      readonly $as: <NEW_Q extends $ValidToFrom<Venture.Definition>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<Venture.Definition, NEW_Q, K>>;
    } & $OsdkObject<'Venture'>;
}

export type Venture = Venture.Definition;

export const Venture: Venture & $VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
  apiName: 'Venture',
  description: 'A venture',
  links: {
    employees: {
      multiplicity: true,
      targetType: 'Employee',
    },
  },
  primaryKeyApiName: 'ventureId',
  primaryKeyType: 'string',
  properties: {
    ventureId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    ventureName: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    ventureStart: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
  },
  type: 'object',
};
