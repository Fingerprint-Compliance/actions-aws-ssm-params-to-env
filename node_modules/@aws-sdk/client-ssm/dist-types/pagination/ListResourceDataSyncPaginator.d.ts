import type { Paginator } from "@smithy/types";
import { ListResourceDataSyncCommandInput, ListResourceDataSyncCommandOutput } from "../commands/ListResourceDataSyncCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListResourceDataSync: (config: SSMPaginationConfiguration, input: ListResourceDataSyncCommandInput, ...rest: any[]) => Paginator<ListResourceDataSyncCommandOutput>;
