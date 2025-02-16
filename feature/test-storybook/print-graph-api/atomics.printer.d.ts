import { GraphApiAnyDefinition, GraphApiComponentsKind, GraphApiListDefinition, GraphApiRef } from "../types";
import { Maybe } from "./declarations";
import { TypePrinter } from "./declarations";
export declare function typePrinter(componentKind: GraphApiComponentsKind): Maybe<TypePrinter>;
export declare function typeName(entity: GraphApiRef | GraphApiAnyDefinition): string | undefined;
export declare function printBlock(items: ReadonlyArray<string>): string;
export declare function printOriginalType(schema?: GraphApiRef | GraphApiListDefinition | GraphApiAnyDefinition, nullable?: boolean): string;
export declare function printDescription(value?: string, indent?: string, firstInBlock?: boolean): string;
export declare function printString(str: string): string;
export declare function printMultilineString(str: string): string;
//# sourceMappingURL=atomics.printer.d.ts.map