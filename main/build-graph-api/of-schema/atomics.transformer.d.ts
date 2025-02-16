import { GraphQLEnumValue, GraphQLField, GraphQLInputField, GraphQLNamedType, GraphQLSchema } from "graphql";
import { GraphApiDefinition, GraphApiNamedDefinition } from "../../types";
export declare function transformBaseType(baseType: GraphQLSchema | GraphQLNamedType | GraphQLEnumValue | GraphQLField<any, any> | GraphQLInputField): GraphApiDefinition;
export declare function transformNamedType(baseType: GraphQLNamedType | GraphQLEnumValue | GraphQLField<any, any> | GraphQLInputField): GraphApiNamedDefinition;
//# sourceMappingURL=atomics.transformer.d.ts.map