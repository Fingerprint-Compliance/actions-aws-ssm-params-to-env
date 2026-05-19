import { createPaginator } from "@smithy/core";
import { ListNodesCommand } from "../commands/ListNodesCommand";
import { SSMClient } from "../SSMClient";
export const paginateListNodes = createPaginator(SSMClient, ListNodesCommand, "NextToken", "NextToken", "MaxResults");
