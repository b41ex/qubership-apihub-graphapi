import { GraphQLDirective, GraphQLEnumType, GraphQLInputObjectType, GraphQLInterfaceType, GraphQLObjectType, GraphQLScalarType, GraphQLUnionType } from 'graphql';
import { GraphApiDirectiveDefinition, GraphApiEnumDefinition, GraphApiInputObjectDefinition, GraphApiObjectDefinition, GraphApiObjectKind, GraphApiScalarDefinition, GraphApiUnionDefinition } from '../../types';
export declare function transformDirectiveType2Definition(directive: GraphQLDirective): GraphApiDirectiveDefinition;
export declare function directiveType2DefinitionReducer(result: Record<string, GraphApiDirectiveDefinition>, directive: GraphQLDirective): Record<string, GraphApiDirectiveDefinition>;
export declare function transformDirectiveTypes2Definitions(directives: ReadonlyArray<GraphQLDirective>): {
    directives: Record<string, GraphApiDirectiveDefinition>;
} | {
    directives?: undefined;
};
export declare function transformScalarType2Definition(scalarType: GraphQLScalarType): GraphApiScalarDefinition;
export declare function isGraphQLInterfaceType(objectType: GraphQLObjectType | GraphQLInterfaceType): objectType is GraphQLInterfaceType;
export declare function transformObjectType2Definition(objectType: GraphQLObjectType | GraphQLInterfaceType): GraphApiObjectDefinition<GraphApiObjectKind>;
export declare function transformInputObjectType2Definition(inputObjectType: GraphQLInputObjectType): GraphApiInputObjectDefinition;
export declare function transformUnionType2Definition(unionType: GraphQLUnionType): GraphApiUnionDefinition;
export declare function transformEnumType2Definition(enumType: GraphQLEnumType): GraphApiEnumDefinition;
//# sourceMappingURL=definitions.transformer.d.ts.map