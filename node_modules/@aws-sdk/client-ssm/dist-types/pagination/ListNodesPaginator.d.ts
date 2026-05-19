import type { Paginator } from "@smithy/types";
import { ListNodesCommandInput, ListNodesCommandOutput } from "../commands/ListNodesCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListNodes: (config: SSMPaginationConfiguration, input: ListNodesCommandInput, ...rest: any[]) => Paginator<ListNodesCommandOutput>;
