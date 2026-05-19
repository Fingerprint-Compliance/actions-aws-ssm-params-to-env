import type { Paginator } from "@smithy/types";
import { ListOpsMetadataCommandInput, ListOpsMetadataCommandOutput } from "../commands/ListOpsMetadataCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListOpsMetadata: (config: SSMPaginationConfiguration, input: ListOpsMetadataCommandInput, ...rest: any[]) => Paginator<ListOpsMetadataCommandOutput>;
