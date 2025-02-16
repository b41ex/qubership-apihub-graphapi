import { GraphQLNullableType, SchemaDefinitionNode, ScalarTypeDefinitionNode, ObjectTypeDefinitionNode, InterfaceTypeDefinitionNode, InputObjectTypeDefinitionNode, EnumTypeDefinitionNode, UnionTypeDefinitionNode, FieldDefinitionNode, EnumValueDefinitionNode, InputValueDefinitionNode, ConstDirectiveNode, ConstValueNode, GraphQLArgument } from "graphql";
import { GraphApiRef, GraphApiScalarDefinition, GraphApiListDefinition, GraphApiUsage, GraphApiDirective, GraphApiArgs } from "../../types";
export declare function transformType2Definition(gqlType: GraphQLNullableType): GraphApiRef | GraphApiScalarDefinition | GraphApiListDefinition;
export declare function transformType2Usage(gqlType: GraphQLNullableType, notNullable?: boolean, defaultValue?: unknown): GraphApiUsage;
export declare function transformUsedDirectives(astNode?: SchemaDefinitionNode | ScalarTypeDefinitionNode | ObjectTypeDefinitionNode | InterfaceTypeDefinitionNode | InputObjectTypeDefinitionNode | EnumTypeDefinitionNode | UnionTypeDefinitionNode | FieldDefinitionNode | EnumValueDefinitionNode | InputValueDefinitionNode | null): {
    directives: Record<string, GraphApiDirective>;
} | {
    directives?: undefined;
};
export declare function transformUsedDirective(node: ConstDirectiveNode): any;
export declare function transformUsedDirectiveArgValue(arg: ConstValueNode): any;
export declare function transformArgs(args: ReadonlyArray<GraphQLArgument>): GraphApiArgs;
//# sourceMappingURL=definition-parts.transformer.d.ts.map