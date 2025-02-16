import type { IntrospectionDirective, IntrospectionEnumType, IntrospectionInputObjectType, IntrospectionInterfaceType, IntrospectionObjectType, IntrospectionScalarType, IntrospectionUnionType } from "graphql";
import type { GraphApiDirectiveDefinition, GraphApiEnumDefinition, GraphApiInputObjectDefinition, GraphApiObjectDefinition, GraphApiObjectKind, GraphApiScalarDefinition, GraphApiUnionDefinition } from "../../types";
export declare function transformScalarType2Definition(scalarType: IntrospectionScalarType): GraphApiScalarDefinition;
export declare function transformObjectType2Definition(objectType: IntrospectionObjectType | IntrospectionInterfaceType): GraphApiObjectDefinition<GraphApiObjectKind>;
export declare function transformUnionType2Definition(unionType: IntrospectionUnionType): GraphApiUnionDefinition;
export declare function transformEnumType2Definition(enumType: IntrospectionEnumType): GraphApiEnumDefinition;
export declare function transformInputObjectTypeType2Definition(inputObjectType: IntrospectionInputObjectType): GraphApiInputObjectDefinition;
export declare function directiveType2DefinitionReducer(result: Record<string, GraphApiDirectiveDefinition>, directive: IntrospectionDirective): Record<string, GraphApiDirectiveDefinition>;
//# sourceMappingURL=definitions.transformer.d.ts.map