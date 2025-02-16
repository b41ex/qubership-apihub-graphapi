import { GraphQLField, GraphQLNamedType } from 'graphql';
import { GraphApiAnyDefinition, GraphApiOperation } from '../../types';
export declare function transformDefinition(gqlType: GraphQLNamedType): GraphApiAnyDefinition;
export declare function transformDefinitions(gqlTypeMap: Record<string, GraphQLNamedType>, skip?: string[]): Record<string, Record<string, GraphApiAnyDefinition>>;
export declare function transformOperations(fields: Record<string, GraphQLField<any, any>>): Record<string, GraphApiOperation>;
//# sourceMappingURL=root-level.transformer.d.ts.map