import { Paginator } from "@smithy/types";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListAliases(config: LambdaPaginationConfiguration, input: ListAliasesCommandInput, ...additionalArguments: any): Paginator<ListAliasesCommandOutput>;
