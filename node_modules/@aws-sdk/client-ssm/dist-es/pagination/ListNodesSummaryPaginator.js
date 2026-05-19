import { createPaginator } from "@smithy/core";
import { ListNodesSummaryCommand, } from "../commands/ListNodesSummaryCommand";
import { SSMClient } from "../SSMClient";
export const paginateListNodesSummary = createPaginator(SSMClient, ListNodesSummaryCommand, "NextToken", "NextToken", "MaxResults");
