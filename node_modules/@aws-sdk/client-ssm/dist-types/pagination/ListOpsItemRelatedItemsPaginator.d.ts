import type { Paginator } from "@smithy/types";
import { ListOpsItemRelatedItemsCommandInput, ListOpsItemRelatedItemsCommandOutput } from "../commands/ListOpsItemRelatedItemsCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListOpsItemRelatedItems: (config: SSMPaginationConfiguration, input: ListOpsItemRelatedItemsCommandInput, ...rest: any[]) => Paginator<ListOpsItemRelatedItemsCommandOutput>;
