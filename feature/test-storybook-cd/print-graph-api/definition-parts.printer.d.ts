import { GraphApiArgs, GraphApiArgument, GraphApiDirective, GraphApiInputObjectDefinition, GraphApiObjectDefinition, GraphApiObjectKind, GraphApiRef } from "../types";
export declare function printImplementedInterfaces(interfaces?: GraphApiRef[]): string;
export declare function printFields(object: GraphApiObjectDefinition<GraphApiObjectKind>): string;
export declare function printInputFields(object: GraphApiInputObjectDefinition): string;
export declare function printArgsDefinition(args?: GraphApiArgs, indentation?: string): string;
export declare function printArgDefinition(name: string, arg: GraphApiArgument, indent?: string, first?: boolean): string;
export declare function printUsedDirectiveArgs(argsMeta?: Record<string, any>): string;
export declare function printProvidedArgValue(value: any): string;
export declare function printUsedDirectives(directives?: Record<string, GraphApiDirective>): string;
//# sourceMappingURL=definition-parts.printer.d.ts.map