import type { Paginator } from "@smithy/types";
import { ListNodesSummaryCommandInput, ListNodesSummaryCommandOutput } from "../commands/ListNodesSummaryCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListNodesSummary: (config: SSMPaginationConfiguration, input: ListNodesSummaryCommandInput, ...rest: any[]) => Paginator<ListNodesSummaryCommandOutput>;
