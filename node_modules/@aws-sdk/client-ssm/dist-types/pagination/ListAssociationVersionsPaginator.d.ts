import type { Paginator } from "@smithy/types";
import { ListAssociationVersionsCommandInput, ListAssociationVersionsCommandOutput } from "../commands/ListAssociationVersionsCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListAssociationVersions: (config: SSMPaginationConfiguration, input: ListAssociationVersionsCommandInput, ...rest: any[]) => Paginator<ListAssociationVersionsCommandOutput>;
