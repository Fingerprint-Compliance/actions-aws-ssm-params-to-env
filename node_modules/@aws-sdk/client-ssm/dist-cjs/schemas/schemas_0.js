"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidFilter$ = exports.InvalidDocumentVersion$ = exports.InvalidDocumentType$ = exports.InvalidDocumentSchemaVersion$ = exports.InvalidDocumentOperation$ = exports.InvalidDocumentContent$ = exports.InvalidDocument$ = exports.InvalidDeletionIdException$ = exports.InvalidDeleteInventoryParametersException$ = exports.InvalidCommandId$ = exports.InvalidAutomationStatusUpdateException$ = exports.InvalidAutomationSignalException$ = exports.InvalidAutomationExecutionParametersException$ = exports.InvalidAssociationVersion$ = exports.InvalidAssociation$ = exports.InvalidAllowedPatternException$ = exports.InvalidAggregatorException$ = exports.InvalidActivationId$ = exports.InvalidActivation$ = exports.InternalServerError$ = exports.IncompatiblePolicyException$ = exports.IdempotentParameterMismatch$ = exports.HierarchyTypeMismatchException$ = exports.HierarchyLevelLimitExceededException$ = exports.FeatureNotAvailableException$ = exports.DuplicateInstanceId$ = exports.DuplicateDocumentVersionName$ = exports.DuplicateDocumentContent$ = exports.DoesNotExistException$ = exports.DocumentVersionLimitExceeded$ = exports.DocumentPermissionLimit$ = exports.DocumentLimitExceeded$ = exports.DocumentAlreadyExists$ = exports.CustomSchemaCountLimitExceededException$ = exports.ComplianceTypeCountLimitExceededException$ = exports.AutomationStepNotFoundException$ = exports.AutomationExecutionNotFoundException$ = exports.AutomationExecutionLimitExceededException$ = exports.AutomationDefinitionVersionNotFoundException$ = exports.AutomationDefinitionNotFoundException$ = exports.AutomationDefinitionNotApprovedException$ = exports.AssociationVersionLimitExceeded$ = exports.AssociationLimitExceeded$ = exports.AssociationExecutionDoesNotExist$ = exports.AssociationDoesNotExist$ = exports.AssociationAlreadyExists$ = exports.AssociatedInstances$ = exports.AlreadyExistsException$ = exports.AccessDeniedException$ = exports.SSMServiceException$ = void 0;
exports.OpsMetadataNotFoundException$ = exports.OpsMetadataLimitExceededException$ = exports.OpsMetadataKeyLimitExceededException$ = exports.OpsMetadataInvalidArgumentException$ = exports.OpsMetadataAlreadyExistsException$ = exports.OpsItemRelatedItemAssociationNotFoundException$ = exports.OpsItemRelatedItemAlreadyExistsException$ = exports.OpsItemNotFoundException$ = exports.OpsItemLimitExceededException$ = exports.OpsItemInvalidParameterException$ = exports.OpsItemConflictException$ = exports.OpsItemAlreadyExistsException$ = exports.OpsItemAccessDeniedException$ = exports.NoLongerSupportedException$ = exports.MaxDocumentSizeExceeded$ = exports.MalformedResourcePolicyDocumentException$ = exports.ItemSizeLimitExceededException$ = exports.ItemContentMismatchException$ = exports.InvocationDoesNotExist$ = exports.InvalidUpdate$ = exports.InvalidTypeNameException$ = exports.InvalidTargetMaps$ = exports.InvalidTarget$ = exports.InvalidTag$ = exports.InvalidSchedule$ = exports.InvalidRole$ = exports.InvalidResultAttributeException$ = exports.InvalidResourceType$ = exports.InvalidResourceId$ = exports.InvalidPolicyTypeException$ = exports.InvalidPolicyAttributeException$ = exports.InvalidPluginName$ = exports.InvalidPermissionType$ = exports.InvalidParameters$ = exports.InvalidOutputLocation$ = exports.InvalidOutputFolder$ = exports.InvalidOptionException$ = exports.InvalidNotificationConfig$ = exports.InvalidNextToken$ = exports.InvalidKeyId$ = exports.InvalidItemContentException$ = exports.InvalidInventoryRequestException$ = exports.InvalidInventoryItemContextException$ = exports.InvalidInventoryGroupException$ = exports.InvalidInstancePropertyFilterValue$ = exports.InvalidInstanceInformationFilterValue$ = exports.InvalidInstanceId$ = exports.InvalidFilterValue$ = exports.InvalidFilterOption$ = exports.InvalidFilterKey$ = void 0;
exports.AssociateOpsItemRelatedItemResponse$ = exports.AssociateOpsItemRelatedItemRequest$ = exports.AlarmStateInformation$ = exports.AlarmConfiguration$ = exports.Alarm$ = exports.AddTagsToResourceResult$ = exports.AddTagsToResourceRequest$ = exports.Activation$ = exports.AccountSharingInfo$ = exports.errorTypeRegistries = exports.ValidationException$ = exports.UnsupportedPlatformType$ = exports.UnsupportedParameterType$ = exports.UnsupportedOperationException$ = exports.UnsupportedOperatingSystem$ = exports.UnsupportedInventorySchemaVersionException$ = exports.UnsupportedInventoryItemContextException$ = exports.UnsupportedFeatureRequiredException$ = exports.UnsupportedCalendarException$ = exports.TotalSizeLimitExceededException$ = exports.TooManyUpdates$ = exports.TooManyTagsError$ = exports.ThrottlingException$ = exports.TargetNotConnected$ = exports.TargetInUseException$ = exports.SubTypeCountLimitExceededException$ = exports.StatusUnchanged$ = exports.ServiceSettingNotFound$ = exports.ServiceQuotaExceededException$ = exports.ResourcePolicyNotFoundException$ = exports.ResourcePolicyLimitExceededException$ = exports.ResourcePolicyInvalidParameterException$ = exports.ResourcePolicyConflictException$ = exports.ResourceNotFoundException$ = exports.ResourceLimitExceededException$ = exports.ResourceInUseException$ = exports.ResourceDataSyncNotFoundException$ = exports.ResourceDataSyncInvalidConfigurationException$ = exports.ResourceDataSyncCountExceededException$ = exports.ResourceDataSyncConflictException$ = exports.ResourceDataSyncAlreadyExistsException$ = exports.PoliciesLimitExceededException$ = exports.ParameterVersionNotFound$ = exports.ParameterVersionLabelLimitExceeded$ = exports.ParameterPatternMismatchException$ = exports.ParameterNotFound$ = exports.ParameterMaxVersionLimitExceeded$ = exports.ParameterLimitExceeded$ = exports.ParameterAlreadyExists$ = exports.OpsMetadataTooManyUpdatesException$ = void 0;
exports.CreatePatchBaselineRequest$ = exports.CreateOpsMetadataResult$ = exports.CreateOpsMetadataRequest$ = exports.CreateOpsItemResponse$ = exports.CreateOpsItemRequest$ = exports.CreateMaintenanceWindowResult$ = exports.CreateMaintenanceWindowRequest$ = exports.CreateDocumentResult$ = exports.CreateDocumentRequest$ = exports.CreateAssociationResult$ = exports.CreateAssociationRequest$ = exports.CreateAssociationBatchResult$ = exports.CreateAssociationBatchRequestEntry$ = exports.CreateAssociationBatchRequest$ = exports.CreateActivationResult$ = exports.CreateActivationRequest$ = exports.CompliantSummary$ = exports.ComplianceSummaryItem$ = exports.ComplianceStringFilter$ = exports.ComplianceItemEntry$ = exports.ComplianceItem$ = exports.ComplianceExecutionSummary$ = exports.CommandPlugin$ = exports.CommandInvocation$ = exports.CommandFilter$ = exports.Command$ = exports.CloudWatchOutputConfig$ = exports.CancelMaintenanceWindowExecutionResult$ = exports.CancelMaintenanceWindowExecutionRequest$ = exports.CancelCommandResult$ = exports.CancelCommandRequest$ = exports.BaselineOverride$ = exports.AutomationExecutionPreview$ = exports.AutomationExecutionMetadata$ = exports.AutomationExecutionInputs$ = exports.AutomationExecutionFilter$ = exports.AutomationExecution$ = exports.AttachmentsSource$ = exports.AttachmentInformation$ = exports.AttachmentContent$ = exports.AssociationVersionInfo$ = exports.AssociationStatus$ = exports.AssociationOverview$ = exports.AssociationFilter$ = exports.AssociationExecutionTargetsFilter$ = exports.AssociationExecutionTarget$ = exports.AssociationExecutionFilter$ = exports.AssociationExecution$ = exports.AssociationDescription$ = exports.Association$ = void 0;
exports.DescribeAvailablePatchesRequest$ = exports.DescribeAutomationStepExecutionsResult$ = exports.DescribeAutomationStepExecutionsRequest$ = exports.DescribeAutomationExecutionsResult$ = exports.DescribeAutomationExecutionsRequest$ = exports.DescribeAssociationResult$ = exports.DescribeAssociationRequest$ = exports.DescribeAssociationExecutionTargetsResult$ = exports.DescribeAssociationExecutionTargetsRequest$ = exports.DescribeAssociationExecutionsResult$ = exports.DescribeAssociationExecutionsRequest$ = exports.DescribeActivationsResult$ = exports.DescribeActivationsRequest$ = exports.DescribeActivationsFilter$ = exports.DeregisterTaskFromMaintenanceWindowResult$ = exports.DeregisterTaskFromMaintenanceWindowRequest$ = exports.DeregisterTargetFromMaintenanceWindowResult$ = exports.DeregisterTargetFromMaintenanceWindowRequest$ = exports.DeregisterPatchBaselineForPatchGroupResult$ = exports.DeregisterPatchBaselineForPatchGroupRequest$ = exports.DeregisterManagedInstanceResult$ = exports.DeregisterManagedInstanceRequest$ = exports.DeleteResourcePolicyResponse$ = exports.DeleteResourcePolicyRequest$ = exports.DeleteResourceDataSyncResult$ = exports.DeleteResourceDataSyncRequest$ = exports.DeletePatchBaselineResult$ = exports.DeletePatchBaselineRequest$ = exports.DeleteParametersResult$ = exports.DeleteParametersRequest$ = exports.DeleteParameterResult$ = exports.DeleteParameterRequest$ = exports.DeleteOpsMetadataResult$ = exports.DeleteOpsMetadataRequest$ = exports.DeleteOpsItemResponse$ = exports.DeleteOpsItemRequest$ = exports.DeleteMaintenanceWindowResult$ = exports.DeleteMaintenanceWindowRequest$ = exports.DeleteInventoryResult$ = exports.DeleteInventoryRequest$ = exports.DeleteDocumentResult$ = exports.DeleteDocumentRequest$ = exports.DeleteAssociationResult$ = exports.DeleteAssociationRequest$ = exports.DeleteActivationResult$ = exports.DeleteActivationRequest$ = exports.Credentials$ = exports.CreateResourceDataSyncResult$ = exports.CreateResourceDataSyncRequest$ = exports.CreatePatchBaselineResult$ = void 0;
exports.DescribePatchPropertiesRequest$ = exports.DescribePatchGroupStateResult$ = exports.DescribePatchGroupStateRequest$ = exports.DescribePatchGroupsResult$ = exports.DescribePatchGroupsRequest$ = exports.DescribePatchBaselinesResult$ = exports.DescribePatchBaselinesRequest$ = exports.DescribeParametersResult$ = exports.DescribeParametersRequest$ = exports.DescribeOpsItemsResponse$ = exports.DescribeOpsItemsRequest$ = exports.DescribeMaintenanceWindowTasksResult$ = exports.DescribeMaintenanceWindowTasksRequest$ = exports.DescribeMaintenanceWindowTargetsResult$ = exports.DescribeMaintenanceWindowTargetsRequest$ = exports.DescribeMaintenanceWindowsResult$ = exports.DescribeMaintenanceWindowsRequest$ = exports.DescribeMaintenanceWindowsForTargetResult$ = exports.DescribeMaintenanceWindowsForTargetRequest$ = exports.DescribeMaintenanceWindowScheduleResult$ = exports.DescribeMaintenanceWindowScheduleRequest$ = exports.DescribeMaintenanceWindowExecutionTasksResult$ = exports.DescribeMaintenanceWindowExecutionTasksRequest$ = exports.DescribeMaintenanceWindowExecutionTaskInvocationsResult$ = exports.DescribeMaintenanceWindowExecutionTaskInvocationsRequest$ = exports.DescribeMaintenanceWindowExecutionsResult$ = exports.DescribeMaintenanceWindowExecutionsRequest$ = exports.DescribeInventoryDeletionsResult$ = exports.DescribeInventoryDeletionsRequest$ = exports.DescribeInstancePropertiesResult$ = exports.DescribeInstancePropertiesRequest$ = exports.DescribeInstancePatchStatesResult$ = exports.DescribeInstancePatchStatesRequest$ = exports.DescribeInstancePatchStatesForPatchGroupResult$ = exports.DescribeInstancePatchStatesForPatchGroupRequest$ = exports.DescribeInstancePatchesResult$ = exports.DescribeInstancePatchesRequest$ = exports.DescribeInstanceInformationResult$ = exports.DescribeInstanceInformationRequest$ = exports.DescribeInstanceAssociationsStatusResult$ = exports.DescribeInstanceAssociationsStatusRequest$ = exports.DescribeEffectivePatchesForPatchBaselineResult$ = exports.DescribeEffectivePatchesForPatchBaselineRequest$ = exports.DescribeEffectiveInstanceAssociationsResult$ = exports.DescribeEffectiveInstanceAssociationsRequest$ = exports.DescribeDocumentResult$ = exports.DescribeDocumentRequest$ = exports.DescribeDocumentPermissionResponse$ = exports.DescribeDocumentPermissionRequest$ = exports.DescribeAvailablePatchesResult$ = void 0;
exports.GetMaintenanceWindowResult$ = exports.GetMaintenanceWindowRequest$ = exports.GetMaintenanceWindowExecutionTaskResult$ = exports.GetMaintenanceWindowExecutionTaskRequest$ = exports.GetMaintenanceWindowExecutionTaskInvocationResult$ = exports.GetMaintenanceWindowExecutionTaskInvocationRequest$ = exports.GetMaintenanceWindowExecutionResult$ = exports.GetMaintenanceWindowExecutionRequest$ = exports.GetInventorySchemaResult$ = exports.GetInventorySchemaRequest$ = exports.GetInventoryResult$ = exports.GetInventoryRequest$ = exports.GetExecutionPreviewResponse$ = exports.GetExecutionPreviewRequest$ = exports.GetDocumentResult$ = exports.GetDocumentRequest$ = exports.GetDeployablePatchSnapshotForInstanceResult$ = exports.GetDeployablePatchSnapshotForInstanceRequest$ = exports.GetDefaultPatchBaselineResult$ = exports.GetDefaultPatchBaselineRequest$ = exports.GetConnectionStatusResponse$ = exports.GetConnectionStatusRequest$ = exports.GetCommandInvocationResult$ = exports.GetCommandInvocationRequest$ = exports.GetCalendarStateResponse$ = exports.GetCalendarStateRequest$ = exports.GetAutomationExecutionResult$ = exports.GetAutomationExecutionRequest$ = exports.GetAccessTokenResponse$ = exports.GetAccessTokenRequest$ = exports.FailureDetails$ = exports.FailedCreateAssociation$ = exports.EffectivePatch$ = exports.DocumentVersionInfo$ = exports.DocumentReviews$ = exports.DocumentReviewerResponseSource$ = exports.DocumentReviewCommentSource$ = exports.DocumentRequires$ = exports.DocumentParameter$ = exports.DocumentMetadataResponseInfo$ = exports.DocumentKeyValuesFilter$ = exports.DocumentIdentifier$ = exports.DocumentFilter$ = exports.DocumentDescription$ = exports.DocumentDefaultVersionDescription$ = exports.DisassociateOpsItemRelatedItemResponse$ = exports.DisassociateOpsItemRelatedItemRequest$ = exports.DescribeSessionsResponse$ = exports.DescribeSessionsRequest$ = exports.DescribePatchPropertiesResult$ = void 0;
exports.InventoryResultItem$ = exports.InventoryResultEntity$ = exports.InventoryItemSchema$ = exports.InventoryItemAttribute$ = exports.InventoryItem$ = exports.InventoryGroup$ = exports.InventoryFilter$ = exports.InventoryDeletionSummaryItem$ = exports.InventoryDeletionSummary$ = exports.InventoryDeletionStatusItem$ = exports.InventoryAggregator$ = exports.InstancePropertyStringFilter$ = exports.InstancePropertyFilter$ = exports.InstanceProperty$ = exports.InstancePatchStateFilter$ = exports.InstancePatchState$ = exports.InstanceInformationStringFilter$ = exports.InstanceInformationFilter$ = exports.InstanceInformation$ = exports.InstanceInfo$ = exports.InstanceAssociationStatusInfo$ = exports.InstanceAssociationOutputUrl$ = exports.InstanceAssociationOutputLocation$ = exports.InstanceAssociation$ = exports.InstanceAggregatedAssociationOverview$ = exports.GetServiceSettingResult$ = exports.GetServiceSettingRequest$ = exports.GetResourcePoliciesResponseEntry$ = exports.GetResourcePoliciesResponse$ = exports.GetResourcePoliciesRequest$ = exports.GetPatchBaselineResult$ = exports.GetPatchBaselineRequest$ = exports.GetPatchBaselineForPatchGroupResult$ = exports.GetPatchBaselineForPatchGroupRequest$ = exports.GetParametersResult$ = exports.GetParametersRequest$ = exports.GetParametersByPathResult$ = exports.GetParametersByPathRequest$ = exports.GetParameterResult$ = exports.GetParameterRequest$ = exports.GetParameterHistoryResult$ = exports.GetParameterHistoryRequest$ = exports.GetOpsSummaryResult$ = exports.GetOpsSummaryRequest$ = exports.GetOpsMetadataResult$ = exports.GetOpsMetadataRequest$ = exports.GetOpsItemResponse$ = exports.GetOpsItemRequest$ = exports.GetMaintenanceWindowTaskResult$ = exports.GetMaintenanceWindowTaskRequest$ = void 0;
exports.MaintenanceWindowTarget$ = exports.MaintenanceWindowStepFunctionsParameters$ = exports.MaintenanceWindowRunCommandParameters$ = exports.MaintenanceWindowLambdaParameters$ = exports.MaintenanceWindowIdentityForTarget$ = exports.MaintenanceWindowIdentity$ = exports.MaintenanceWindowFilter$ = exports.MaintenanceWindowExecutionTaskInvocationIdentity$ = exports.MaintenanceWindowExecutionTaskIdentity$ = exports.MaintenanceWindowExecution$ = exports.MaintenanceWindowAutomationParameters$ = exports.LoggingInfo$ = exports.ListTagsForResourceResult$ = exports.ListTagsForResourceRequest$ = exports.ListResourceDataSyncResult$ = exports.ListResourceDataSyncRequest$ = exports.ListResourceComplianceSummariesResult$ = exports.ListResourceComplianceSummariesRequest$ = exports.ListOpsMetadataResult$ = exports.ListOpsMetadataRequest$ = exports.ListOpsItemRelatedItemsResponse$ = exports.ListOpsItemRelatedItemsRequest$ = exports.ListOpsItemEventsResponse$ = exports.ListOpsItemEventsRequest$ = exports.ListNodesSummaryResult$ = exports.ListNodesSummaryRequest$ = exports.ListNodesResult$ = exports.ListNodesRequest$ = exports.ListInventoryEntriesResult$ = exports.ListInventoryEntriesRequest$ = exports.ListDocumentVersionsResult$ = exports.ListDocumentVersionsRequest$ = exports.ListDocumentsResult$ = exports.ListDocumentsRequest$ = exports.ListDocumentMetadataHistoryResponse$ = exports.ListDocumentMetadataHistoryRequest$ = exports.ListComplianceSummariesResult$ = exports.ListComplianceSummariesRequest$ = exports.ListComplianceItemsResult$ = exports.ListComplianceItemsRequest$ = exports.ListCommandsResult$ = exports.ListCommandsRequest$ = exports.ListCommandInvocationsResult$ = exports.ListCommandInvocationsRequest$ = exports.ListAssociationVersionsResult$ = exports.ListAssociationVersionsRequest$ = exports.ListAssociationsResult$ = exports.ListAssociationsRequest$ = exports.LabelParameterVersionResult$ = exports.LabelParameterVersionRequest$ = void 0;
exports.PutComplianceItemsRequest$ = exports.ProgressCounters$ = exports.PatchStatus$ = exports.PatchSource$ = exports.PatchRuleGroup$ = exports.PatchRule$ = exports.PatchOrchestratorFilter$ = exports.PatchGroupPatchBaselineMapping$ = exports.PatchFilterGroup$ = exports.PatchFilter$ = exports.PatchComplianceData$ = exports.PatchBaselineIdentity$ = exports.Patch$ = exports.ParentStepDetails$ = exports.ParameterStringFilter$ = exports.ParametersFilter$ = exports.ParameterMetadata$ = exports.ParameterInlinePolicy$ = exports.ParameterHistory$ = exports.Parameter$ = exports.OutputSource$ = exports.OpsResultAttribute$ = exports.OpsMetadataFilter$ = exports.OpsMetadata$ = exports.OpsItemSummary$ = exports.OpsItemRelatedItemSummary$ = exports.OpsItemRelatedItemsFilter$ = exports.OpsItemNotification$ = exports.OpsItemIdentity$ = exports.OpsItemFilter$ = exports.OpsItemEventSummary$ = exports.OpsItemEventFilter$ = exports.OpsItemDataValue$ = exports.OpsItem$ = exports.OpsFilter$ = exports.OpsEntityItem$ = exports.OpsEntity$ = exports.OpsAggregator$ = exports.NotificationConfig$ = exports.NonCompliantSummary$ = exports.NodeOwnerInfo$ = exports.NodeFilter$ = exports.NodeAggregator$ = exports.Node$ = exports.ModifyDocumentPermissionResponse$ = exports.ModifyDocumentPermissionRequest$ = exports.MetadataValue$ = exports.MaintenanceWindowTaskParameterValueExpression$ = exports.MaintenanceWindowTaskInvocationParameters$ = exports.MaintenanceWindowTask$ = void 0;
exports.StartAssociationsOnceRequest$ = exports.StartAccessRequestResponse$ = exports.StartAccessRequestRequest$ = exports.SeveritySummary$ = exports.SessionManagerOutputUrl$ = exports.SessionFilter$ = exports.Session$ = exports.ServiceSetting$ = exports.SendCommandResult$ = exports.SendCommandRequest$ = exports.SendAutomationSignalResult$ = exports.SendAutomationSignalRequest$ = exports.ScheduledWindowExecution$ = exports.S3OutputUrl$ = exports.S3OutputLocation$ = exports.Runbook$ = exports.ReviewInformation$ = exports.ResumeSessionResponse$ = exports.ResumeSessionRequest$ = exports.ResultAttribute$ = exports.ResourceDataSyncSourceWithState$ = exports.ResourceDataSyncSource$ = exports.ResourceDataSyncS3Destination$ = exports.ResourceDataSyncOrganizationalUnit$ = exports.ResourceDataSyncItem$ = exports.ResourceDataSyncDestinationDataSharing$ = exports.ResourceDataSyncAwsOrganizationsSource$ = exports.ResourceComplianceSummaryItem$ = exports.ResolvedTargets$ = exports.ResetServiceSettingResult$ = exports.ResetServiceSettingRequest$ = exports.RemoveTagsFromResourceResult$ = exports.RemoveTagsFromResourceRequest$ = exports.RelatedOpsItem$ = exports.RegistrationMetadataItem$ = exports.RegisterTaskWithMaintenanceWindowResult$ = exports.RegisterTaskWithMaintenanceWindowRequest$ = exports.RegisterTargetWithMaintenanceWindowResult$ = exports.RegisterTargetWithMaintenanceWindowRequest$ = exports.RegisterPatchBaselineForPatchGroupResult$ = exports.RegisterPatchBaselineForPatchGroupRequest$ = exports.RegisterDefaultPatchBaselineResult$ = exports.RegisterDefaultPatchBaselineRequest$ = exports.PutResourcePolicyResponse$ = exports.PutResourcePolicyRequest$ = exports.PutParameterResult$ = exports.PutParameterRequest$ = exports.PutInventoryResult$ = exports.PutInventoryRequest$ = exports.PutComplianceItemsResult$ = void 0;
exports.ExecutionInputs$ = exports.UpdateServiceSettingResult$ = exports.UpdateServiceSettingRequest$ = exports.UpdateResourceDataSyncResult$ = exports.UpdateResourceDataSyncRequest$ = exports.UpdatePatchBaselineResult$ = exports.UpdatePatchBaselineRequest$ = exports.UpdateOpsMetadataResult$ = exports.UpdateOpsMetadataRequest$ = exports.UpdateOpsItemResponse$ = exports.UpdateOpsItemRequest$ = exports.UpdateManagedInstanceRoleResult$ = exports.UpdateManagedInstanceRoleRequest$ = exports.UpdateMaintenanceWindowTaskResult$ = exports.UpdateMaintenanceWindowTaskRequest$ = exports.UpdateMaintenanceWindowTargetResult$ = exports.UpdateMaintenanceWindowTargetRequest$ = exports.UpdateMaintenanceWindowResult$ = exports.UpdateMaintenanceWindowRequest$ = exports.UpdateDocumentResult$ = exports.UpdateDocumentRequest$ = exports.UpdateDocumentMetadataResponse$ = exports.UpdateDocumentMetadataRequest$ = exports.UpdateDocumentDefaultVersionResult$ = exports.UpdateDocumentDefaultVersionRequest$ = exports.UpdateAssociationStatusResult$ = exports.UpdateAssociationStatusRequest$ = exports.UpdateAssociationResult$ = exports.UpdateAssociationRequest$ = exports.UnlabelParameterVersionResult$ = exports.UnlabelParameterVersionRequest$ = exports.TerminateSessionResponse$ = exports.TerminateSessionRequest$ = exports.TargetPreview$ = exports.TargetLocation$ = exports.Target$ = exports.Tag$ = exports.StopAutomationExecutionResult$ = exports.StopAutomationExecutionRequest$ = exports.StepExecutionFilter$ = exports.StepExecution$ = exports.StartSessionResponse$ = exports.StartSessionRequest$ = exports.StartExecutionPreviewResponse$ = exports.StartExecutionPreviewRequest$ = exports.StartChangeRequestExecutionResult$ = exports.StartChangeRequestExecutionRequest$ = exports.StartAutomationExecutionResult$ = exports.StartAutomationExecutionRequest$ = exports.StartAssociationsOnceResult$ = void 0;
exports.DescribeMaintenanceWindowExecutions$ = exports.DescribeInventoryDeletions$ = exports.DescribeInstanceProperties$ = exports.DescribeInstancePatchStatesForPatchGroup$ = exports.DescribeInstancePatchStates$ = exports.DescribeInstancePatches$ = exports.DescribeInstanceInformation$ = exports.DescribeInstanceAssociationsStatus$ = exports.DescribeEffectivePatchesForPatchBaseline$ = exports.DescribeEffectiveInstanceAssociations$ = exports.DescribeDocumentPermission$ = exports.DescribeDocument$ = exports.DescribeAvailablePatches$ = exports.DescribeAutomationStepExecutions$ = exports.DescribeAutomationExecutions$ = exports.DescribeAssociationExecutionTargets$ = exports.DescribeAssociationExecutions$ = exports.DescribeAssociation$ = exports.DescribeActivations$ = exports.DeregisterTaskFromMaintenanceWindow$ = exports.DeregisterTargetFromMaintenanceWindow$ = exports.DeregisterPatchBaselineForPatchGroup$ = exports.DeregisterManagedInstance$ = exports.DeleteResourcePolicy$ = exports.DeleteResourceDataSync$ = exports.DeletePatchBaseline$ = exports.DeleteParameters$ = exports.DeleteParameter$ = exports.DeleteOpsMetadata$ = exports.DeleteOpsItem$ = exports.DeleteMaintenanceWindow$ = exports.DeleteInventory$ = exports.DeleteDocument$ = exports.DeleteAssociation$ = exports.DeleteActivation$ = exports.CreateResourceDataSync$ = exports.CreatePatchBaseline$ = exports.CreateOpsMetadata$ = exports.CreateOpsItem$ = exports.CreateMaintenanceWindow$ = exports.CreateDocument$ = exports.CreateAssociationBatch$ = exports.CreateAssociation$ = exports.CreateActivation$ = exports.CancelMaintenanceWindowExecution$ = exports.CancelCommand$ = exports.AssociateOpsItemRelatedItem$ = exports.AddTagsToResource$ = exports.NodeType$ = exports.ExecutionPreview$ = void 0;
exports.ListDocumentMetadataHistory$ = exports.ListComplianceSummaries$ = exports.ListComplianceItems$ = exports.ListCommands$ = exports.ListCommandInvocations$ = exports.ListAssociationVersions$ = exports.ListAssociations$ = exports.LabelParameterVersion$ = exports.GetServiceSetting$ = exports.GetResourcePolicies$ = exports.GetPatchBaselineForPatchGroup$ = exports.GetPatchBaseline$ = exports.GetParametersByPath$ = exports.GetParameters$ = exports.GetParameterHistory$ = exports.GetParameter$ = exports.GetOpsSummary$ = exports.GetOpsMetadata$ = exports.GetOpsItem$ = exports.GetMaintenanceWindowTask$ = exports.GetMaintenanceWindowExecutionTaskInvocation$ = exports.GetMaintenanceWindowExecutionTask$ = exports.GetMaintenanceWindowExecution$ = exports.GetMaintenanceWindow$ = exports.GetInventorySchema$ = exports.GetInventory$ = exports.GetExecutionPreview$ = exports.GetDocument$ = exports.GetDeployablePatchSnapshotForInstance$ = exports.GetDefaultPatchBaseline$ = exports.GetConnectionStatus$ = exports.GetCommandInvocation$ = exports.GetCalendarState$ = exports.GetAutomationExecution$ = exports.GetAccessToken$ = exports.DisassociateOpsItemRelatedItem$ = exports.DescribeSessions$ = exports.DescribePatchProperties$ = exports.DescribePatchGroupState$ = exports.DescribePatchGroups$ = exports.DescribePatchBaselines$ = exports.DescribeParameters$ = exports.DescribeOpsItems$ = exports.DescribeMaintenanceWindowTasks$ = exports.DescribeMaintenanceWindowTargets$ = exports.DescribeMaintenanceWindowsForTarget$ = exports.DescribeMaintenanceWindowSchedule$ = exports.DescribeMaintenanceWindows$ = exports.DescribeMaintenanceWindowExecutionTasks$ = exports.DescribeMaintenanceWindowExecutionTaskInvocations$ = void 0;
exports.UpdateServiceSetting$ = exports.UpdateResourceDataSync$ = exports.UpdatePatchBaseline$ = exports.UpdateOpsMetadata$ = exports.UpdateOpsItem$ = exports.UpdateManagedInstanceRole$ = exports.UpdateMaintenanceWindowTask$ = exports.UpdateMaintenanceWindowTarget$ = exports.UpdateMaintenanceWindow$ = exports.UpdateDocumentMetadata$ = exports.UpdateDocumentDefaultVersion$ = exports.UpdateDocument$ = exports.UpdateAssociationStatus$ = exports.UpdateAssociation$ = exports.UnlabelParameterVersion$ = exports.TerminateSession$ = exports.StopAutomationExecution$ = exports.StartSession$ = exports.StartExecutionPreview$ = exports.StartChangeRequestExecution$ = exports.StartAutomationExecution$ = exports.StartAssociationsOnce$ = exports.StartAccessRequest$ = exports.SendCommand$ = exports.SendAutomationSignal$ = exports.ResumeSession$ = exports.ResetServiceSetting$ = exports.RemoveTagsFromResource$ = exports.RegisterTaskWithMaintenanceWindow$ = exports.RegisterTargetWithMaintenanceWindow$ = exports.RegisterPatchBaselineForPatchGroup$ = exports.RegisterDefaultPatchBaseline$ = exports.PutResourcePolicy$ = exports.PutParameter$ = exports.PutInventory$ = exports.PutComplianceItems$ = exports.ModifyDocumentPermission$ = exports.ListTagsForResource$ = exports.ListResourceDataSync$ = exports.ListResourceComplianceSummaries$ = exports.ListOpsMetadata$ = exports.ListOpsItemRelatedItems$ = exports.ListOpsItemEvents$ = exports.ListNodesSummary$ = exports.ListNodes$ = exports.ListInventoryEntries$ = exports.ListDocumentVersions$ = exports.ListDocuments$ = void 0;
const _A = "Activation";
const _AA = "AutoApprove";
const _AAD = "ApproveAfterDays";
const _AAE = "AssociationAlreadyExists";
const _AC = "AlarmConfiguration";
const _ACL = "AttachmentContentList";
const _ACc = "ActivationCode";
const _ACt = "AttachmentContent";
const _ACtt = "AttachmentsContent";
const _AD = "AssociationDescription";
const _ADAR = "AssociationDispatchAssumeRole";
const _ADE = "AccessDeniedException";
const _ADL = "AssociationDescriptionList";
const _ADNAE = "AutomationDefinitionNotApprovedException";
const _ADNE = "AssociationDoesNotExist";
const _ADNFE = "AutomationDefinitionNotFoundException";
const _ADVNFE = "AutomationDefinitionVersionNotFoundException";
const _ADp = "ApprovalDate";
const _AE = "AssociationExecution";
const _AEDNE = "AssociationExecutionDoesNotExist";
const _AEE = "AlreadyExistsException";
const _AEF = "AssociationExecutionFilter";
const _AEFL = "AssociationExecutionFilterList";
const _AEFLu = "AutomationExecutionFilterList";
const _AEFu = "AutomationExecutionFilter";
const _AEI = "AutomationExecutionId";
const _AEIu = "AutomationExecutionInputs";
const _AEL = "AssociationExecutionsList";
const _AELEE = "AutomationExecutionLimitExceededException";
const _AEM = "AutomationExecutionMetadata";
const _AEML = "AutomationExecutionMetadataList";
const _AENFE = "AutomationExecutionNotFoundException";
const _AEP = "AutomationExecutionPreview";
const _AES = "AutomationExecutionStatus";
const _AET = "AssociationExecutionTarget";
const _AETF = "AssociationExecutionTargetsFilter";
const _AETFL = "AssociationExecutionTargetsFilterList";
const _AETL = "AssociationExecutionTargetsList";
const _AETc = "ActualEndTime";
const _AETs = "AssociationExecutionTargets";
const _AEs = "AssociationExecutions";
const _AEu = "AutomationExecution";
const _AF = "AssociationFilter";
const _AFL = "AssociationFilterList";
const _AI = "AssociatedInstances";
const _AIL = "AccountIdList";
const _AILt = "AttachmentInformationList";
const _AITA = "AccountIdsToAdd";
const _AITR = "AccountIdsToRemove";
const _AIc = "AccountId";
const _AIcc = "AccountIds";
const _AIct = "ActivationId";
const _AId = "AdditionalInfo";
const _AIdv = "AdvisoryIds";
const _AIs = "AssociationId";
const _AIss = "AssociationIds";
const _AIt = "AttachmentInformation";
const _AItt = "AttachmentsInformation";
const _AKI = "AccessKeyId";
const _AKST = "AccessKeySecretType";
const _AL = "ActivationList";
const _ALE = "AssociationLimitExceeded";
const _ALl = "AlarmList";
const _ALs = "AssociationList";
const _AN = "AssociationName";
const _ANt = "AttributeName";
const _AO = "AssociationOverview";
const _AOACI = "ApplyOnlyAtCronInterval";
const _AOIRI = "AssociateOpsItemRelatedItem";
const _AOIRIR = "AssociateOpsItemRelatedItemRequest";
const _AOIRIRs = "AssociateOpsItemRelatedItemResponse";
const _AOS = "AwsOrganizationsSource";
const _AP = "ApprovedPatches";
const _APCL = "ApprovedPatchesComplianceLevel";
const _APENS = "ApprovedPatchesEnableNonSecurity";
const _APM = "AutomationParameterMap";
const _APl = "AllowedPattern";
const _AR = "ApprovalRules";
const _ARI = "AccessRequestId";
const _ARN = "ARN";
const _ARS = "AccessRequestStatus";
const _AS = "AssociationStatus";
const _ASAC = "AssociationStatusAggregatedCount";
const _ASI = "AccountSharingInfo";
const _ASIL = "AccountSharingInfoList";
const _ASILl = "AlarmStateInformationList";
const _ASIl = "AlarmStateInformation";
const _ASL = "AttachmentsSourceList";
const _ASNFE = "AutomationStepNotFoundException";
const _AST = "ActualStartTime";
const _ASUC = "AvailableSecurityUpdateCount";
const _ASUCS = "AvailableSecurityUpdatesComplianceStatus";
const _ASt = "AttachmentsSource";
const _ASu = "AutomationSubtype";
const _AT = "AssociationType";
const _ATPN = "AutomationTargetParameterName";
const _ATTR = "AddTagsToResource";
const _ATTRR = "AddTagsToResourceRequest";
const _ATTRRd = "AddTagsToResourceResult";
const _ATc = "AccessType";
const _ATg = "AgentType";
const _ATgg = "AggregatorType";
const _ATt = "AtTime";
const _ATu = "AutomationType";
const _AUD = "ApproveUntilDate";
const _AUT = "AllowUnassociatedTargets";
const _AV = "AssociationVersion";
const _AVI = "AssociationVersionInfo";
const _AVL = "AssociationVersionList";
const _AVLE = "AssociationVersionLimitExceeded";
const _AVg = "AgentVersion";
const _AVp = "ApprovedVersion";
const _AVs = "AssociationVersions";
const _AWSKMSKARN = "AWSKMSKeyARN";
const _Ac = "Action";
const _Acc = "Accounts";
const _Ag = "Aggregators";
const _Agg = "Aggregator";
const _Al = "Alarm";
const _Ala = "Alarms";
const _Ar = "Architecture";
const _Arc = "Arch";
const _Arn = "Arn";
const _As = "Association";
const _Ass = "Associations";
const _At = "Attachments";
const _Att = "Attributes";
const _Attr = "Attribute";
const _Au = "Author";
const _Aut = "Automation";
const _BD = "BaselineDescription";
const _BI = "BaselineId";
const _BIa = "BaselineIdentities";
const _BIas = "BaselineIdentity";
const _BIu = "BugzillaIds";
const _BN = "BaselineName";
const _BNu = "BucketName";
const _BO = "BaselineOverride";
const _C = "Command";
const _CA = "CurrentAction";
const _CAB = "CreateAssociationBatch";
const _CABR = "CreateAssociationBatchRequest";
const _CABRE = "CreateAssociationBatchRequestEntry";
const _CABREr = "CreateAssociationBatchRequestEntries";
const _CABRr = "CreateAssociationBatchResult";
const _CAR = "CreateActivationRequest";
const _CARr = "CreateActivationResult";
const _CARre = "CreateAssociationRequest";
const _CARrea = "CreateAssociationResult";
const _CAr = "CreateActivation";
const _CAre = "CreateAssociation";
const _CB = "CutoffBehavior";
const _CBr = "CreatedBy";
const _CC = "CompletedCount";
const _CCR = "CancelCommandRequest";
const _CCRa = "CancelCommandResult";
const _CCa = "CancelCommand";
const _CCl = "ClientContext";
const _CCo = "CompliantCount";
const _CCr = "CriticalCount";
const _CD = "CreatedDate";
const _CDR = "CreateDocumentRequest";
const _CDRr = "CreateDocumentResult";
const _CDh = "ChangeDetails";
const _CDr = "CreationDate";
const _CDre = "CreateDocument";
const _CE = "CategoryEnum";
const _CES = "ComplianceExecutionSummary";
const _CF = "CommandFilter";
const _CFL = "CommandFilterList";
const _CFo = "ComplianceFilter";
const _CH = "ContentHash";
const _CI = "CommandId";
const _CIE = "ComplianceItemEntry";
const _CIEL = "ComplianceItemEntryList";
const _CIL = "CommandInvocationList";
const _CILo = "ComplianceItemList";
const _CIo = "CommandInvocation";
const _CIom = "ComplianceItem";
const _CIomm = "CommandInvocations";
const _CIomp = "ComplianceItems";
const _CL = "ComplianceLevel";
const _CLo = "CommandList";
const _CMW = "CreateMaintenanceWindow";
const _CMWE = "CancelMaintenanceWindowExecution";
const _CMWER = "CancelMaintenanceWindowExecutionRequest";
const _CMWERa = "CancelMaintenanceWindowExecutionResult";
const _CMWR = "CreateMaintenanceWindowRequest";
const _CMWRr = "CreateMaintenanceWindowResult";
const _CN = "CalendarNames";
const _CNCC = "CriticalNonCompliantCount";
const _CNo = "ComputerName";
const _COI = "CreateOpsItem";
const _COIR = "CreateOpsItemRequest";
const _COIRr = "CreateOpsItemResponse";
const _COM = "CreateOpsMetadata";
const _COMR = "CreateOpsMetadataRequest";
const _COMRr = "CreateOpsMetadataResult";
const _CP = "CommandPlugins";
const _CPB = "CreatePatchBaseline";
const _CPBR = "CreatePatchBaselineRequest";
const _CPBRr = "CreatePatchBaselineResult";
const _CPL = "CommandPluginList";
const _CPo = "CommandPlugin";
const _CRDS = "CreateResourceDataSync";
const _CRDSR = "CreateResourceDataSyncRequest";
const _CRDSRr = "CreateResourceDataSyncResult";
const _CRN = "ChangeRequestName";
const _CS = "ComplianceSeverity";
const _CSCLEE = "CustomSchemaCountLimitExceededException";
const _CSF = "ComplianceStringFilter";
const _CSFL = "ComplianceStringFilterList";
const _CSFVL = "ComplianceStringFilterValueList";
const _CSI = "ComplianceSummaryItem";
const _CSIL = "ComplianceSummaryItemList";
const _CSIo = "ComplianceSummaryItems";
const _CSN = "CurrentStepName";
const _CSa = "CancelledSteps";
const _CSo = "CompliantSummary";
const _CT = "CreatedTime";
const _CTCLEE = "ComplianceTypeCountLimitExceededException";
const _CTa = "CaptureTime";
const _CTl = "ClientToken";
const _CTo = "ComplianceType";
const _CTr = "CreateTime";
const _CU = "ContentUrl";
const _CVEI = "CVEIds";
const _CWLGN = "CloudWatchLogGroupName";
const _CWOC = "CloudWatchOutputConfig";
const _CWOE = "CloudWatchOutputEnabled";
const _CWOU = "CloudWatchOutputUrl";
const _Ca = "Category";
const _Cl = "Classification";
const _Co = "Comment";
const _Com = "Commands";
const _Con = "Content";
const _Conf = "Configuration";
const _Cont = "Context";
const _Cou = "Count";
const _Cr = "Credentials";
const _Cu = "Cutoff";
const _D = "Description";
const _DA = "DeleteActivation";
const _DAE = "DocumentAlreadyExists";
const _DAER = "DescribeAssociationExecutionsRequest";
const _DAERe = "DescribeAssociationExecutionsResult";
const _DAERes = "DescribeAutomationExecutionsRequest";
const _DAEResc = "DescribeAutomationExecutionsResult";
const _DAET = "DescribeAssociationExecutionTargets";
const _DAETR = "DescribeAssociationExecutionTargetsRequest";
const _DAETRe = "DescribeAssociationExecutionTargetsResult";
const _DAEe = "DescribeAssociationExecutions";
const _DAEes = "DescribeAutomationExecutions";
const _DAF = "DescribeActivationsFilter";
const _DAFL = "DescribeActivationsFilterList";
const _DAP = "DescribeAvailablePatches";
const _DAPR = "DescribeAvailablePatchesRequest";
const _DAPRe = "DescribeAvailablePatchesResult";
const _DAR = "DeleteActivationRequest";
const _DARe = "DeleteActivationResult";
const _DARel = "DeleteAssociationRequest";
const _DARele = "DeleteAssociationResult";
const _DARes = "DescribeActivationsRequest";
const _DAResc = "DescribeActivationsResult";
const _DARescr = "DescribeAssociationRequest";
const _DARescri = "DescribeAssociationResult";
const _DASE = "DescribeAutomationStepExecutions";
const _DASER = "DescribeAutomationStepExecutionsRequest";
const _DASERe = "DescribeAutomationStepExecutionsResult";
const _DAe = "DeleteAssociation";
const _DAes = "DescribeActivations";
const _DAesc = "DescribeAssociation";
const _DB = "DefaultBaseline";
const _DD = "DocumentDescription";
const _DDC = "DuplicateDocumentContent";
const _DDP = "DescribeDocumentPermission";
const _DDPR = "DescribeDocumentPermissionRequest";
const _DDPRe = "DescribeDocumentPermissionResponse";
const _DDR = "DeleteDocumentRequest";
const _DDRe = "DeleteDocumentResult";
const _DDRes = "DescribeDocumentRequest";
const _DDResc = "DescribeDocumentResult";
const _DDS = "DestinationDataSharing";
const _DDST = "DestinationDataSharingType";
const _DDVD = "DocumentDefaultVersionDescription";
const _DDVN = "DuplicateDocumentVersionName";
const _DDe = "DeleteDocument";
const _DDes = "DescribeDocument";
const _DEIA = "DescribeEffectiveInstanceAssociations";
const _DEIAR = "DescribeEffectiveInstanceAssociationsRequest";
const _DEIARe = "DescribeEffectiveInstanceAssociationsResult";
const _DEPFPB = "DescribeEffectivePatchesForPatchBaseline";
const _DEPFPBR = "DescribeEffectivePatchesForPatchBaselineRequest";
const _DEPFPBRe = "DescribeEffectivePatchesForPatchBaselineResult";
const _DF = "DocumentFormat";
const _DFL = "DocumentFilterList";
const _DFo = "DocumentFilter";
const _DH = "DocumentHash";
const _DHT = "DocumentHashType";
const _DI = "DeletionId";
const _DIAS = "DescribeInstanceAssociationsStatus";
const _DIASR = "DescribeInstanceAssociationsStatusRequest";
const _DIASRe = "DescribeInstanceAssociationsStatusResult";
const _DID = "DescribeInventoryDeletions";
const _DIDR = "DescribeInventoryDeletionsRequest";
const _DIDRe = "DescribeInventoryDeletionsResult";
const _DII = "DuplicateInstanceId";
const _DIIR = "DescribeInstanceInformationRequest";
const _DIIRe = "DescribeInstanceInformationResult";
const _DIIe = "DescribeInstanceInformation";
const _DIL = "DocumentIdentifierList";
const _DIN = "DefaultInstanceName";
const _DIP = "DescribeInstancePatches";
const _DIPR = "DescribeInstancePatchesRequest";
const _DIPRe = "DescribeInstancePatchesResult";
const _DIPRes = "DescribeInstancePropertiesRequest";
const _DIPResc = "DescribeInstancePropertiesResult";
const _DIPS = "DescribeInstancePatchStates";
const _DIPSFPG = "DescribeInstancePatchStatesForPatchGroup";
const _DIPSFPGR = "DescribeInstancePatchStatesForPatchGroupRequest";
const _DIPSFPGRe = "DescribeInstancePatchStatesForPatchGroupResult";
const _DIPSR = "DescribeInstancePatchStatesRequest";
const _DIPSRe = "DescribeInstancePatchStatesResult";
const _DIPe = "DescribeInstanceProperties";
const _DIR = "DeleteInventoryRequest";
const _DIRe = "DeleteInventoryResult";
const _DIe = "DeleteInventory";
const _DIo = "DocumentIdentifier";
const _DIoc = "DocumentIdentifiers";
const _DKVF = "DocumentKeyValuesFilter";
const _DKVFL = "DocumentKeyValuesFilterList";
const _DLE = "DocumentLimitExceeded";
const _DMI = "DeregisterManagedInstance";
const _DMIR = "DeregisterManagedInstanceRequest";
const _DMIRe = "DeregisterManagedInstanceResult";
const _DMRI = "DocumentMetadataResponseInfo";
const _DMW = "DeleteMaintenanceWindow";
const _DMWE = "DescribeMaintenanceWindowExecutions";
const _DMWER = "DescribeMaintenanceWindowExecutionsRequest";
const _DMWERe = "DescribeMaintenanceWindowExecutionsResult";
const _DMWET = "DescribeMaintenanceWindowExecutionTasks";
const _DMWETI = "DescribeMaintenanceWindowExecutionTaskInvocations";
const _DMWETIR = "DescribeMaintenanceWindowExecutionTaskInvocationsRequest";
const _DMWETIRe = "DescribeMaintenanceWindowExecutionTaskInvocationsResult";
const _DMWETR = "DescribeMaintenanceWindowExecutionTasksRequest";
const _DMWETRe = "DescribeMaintenanceWindowExecutionTasksResult";
const _DMWFT = "DescribeMaintenanceWindowsForTarget";
const _DMWFTR = "DescribeMaintenanceWindowsForTargetRequest";
const _DMWFTRe = "DescribeMaintenanceWindowsForTargetResult";
const _DMWR = "DeleteMaintenanceWindowRequest";
const _DMWRe = "DeleteMaintenanceWindowResult";
const _DMWRes = "DescribeMaintenanceWindowsRequest";
const _DMWResc = "DescribeMaintenanceWindowsResult";
const _DMWS = "DescribeMaintenanceWindowSchedule";
const _DMWSR = "DescribeMaintenanceWindowScheduleRequest";
const _DMWSRe = "DescribeMaintenanceWindowScheduleResult";
const _DMWT = "DescribeMaintenanceWindowTargets";
const _DMWTR = "DescribeMaintenanceWindowTargetsRequest";
const _DMWTRe = "DescribeMaintenanceWindowTargetsResult";
const _DMWTRes = "DescribeMaintenanceWindowTasksRequest";
const _DMWTResc = "DescribeMaintenanceWindowTasksResult";
const _DMWTe = "DescribeMaintenanceWindowTasks";
const _DMWe = "DescribeMaintenanceWindows";
const _DN = "DocumentName";
const _DNEE = "DoesNotExistException";
const _DNi = "DisplayName";
const _DOI = "DeleteOpsItem";
const _DOIR = "DeleteOpsItemRequest";
const _DOIRI = "DisassociateOpsItemRelatedItem";
const _DOIRIR = "DisassociateOpsItemRelatedItemRequest";
const _DOIRIRi = "DisassociateOpsItemRelatedItemResponse";
const _DOIRe = "DeleteOpsItemResponse";
const _DOIRes = "DescribeOpsItemsRequest";
const _DOIResc = "DescribeOpsItemsResponse";
const _DOIe = "DescribeOpsItems";
const _DOM = "DeleteOpsMetadata";
const _DOMR = "DeleteOpsMetadataRequest";
const _DOMRe = "DeleteOpsMetadataResult";
const _DP = "DeletedParameters";
const _DPB = "DeletePatchBaseline";
const _DPBFPG = "DeregisterPatchBaselineForPatchGroup";
const _DPBFPGR = "DeregisterPatchBaselineForPatchGroupRequest";
const _DPBFPGRe = "DeregisterPatchBaselineForPatchGroupResult";
const _DPBR = "DeletePatchBaselineRequest";
const _DPBRe = "DeletePatchBaselineResult";
const _DPBRes = "DescribePatchBaselinesRequest";
const _DPBResc = "DescribePatchBaselinesResult";
const _DPBe = "DescribePatchBaselines";
const _DPG = "DescribePatchGroups";
const _DPGR = "DescribePatchGroupsRequest";
const _DPGRe = "DescribePatchGroupsResult";
const _DPGS = "DescribePatchGroupState";
const _DPGSR = "DescribePatchGroupStateRequest";
const _DPGSRe = "DescribePatchGroupStateResult";
const _DPL = "DocumentPermissionLimit";
const _DPLo = "DocumentParameterList";
const _DPP = "DescribePatchProperties";
const _DPPR = "DescribePatchPropertiesRequest";
const _DPPRe = "DescribePatchPropertiesResult";
const _DPR = "DeleteParameterRequest";
const _DPRe = "DeleteParameterResult";
const _DPRel = "DeleteParametersRequest";
const _DPRele = "DeleteParametersResult";
const _DPRes = "DescribeParametersRequest";
const _DPResc = "DescribeParametersResult";
const _DPe = "DeleteParameter";
const _DPel = "DeleteParameters";
const _DPes = "DescribeParameters";
const _DPo = "DocumentParameter";
const _DR = "DryRun";
const _DRCL = "DocumentReviewCommentList";
const _DRCS = "DocumentReviewCommentSource";
const _DRDS = "DeleteResourceDataSync";
const _DRDSR = "DeleteResourceDataSyncRequest";
const _DRDSRe = "DeleteResourceDataSyncResult";
const _DRL = "DocumentRequiresList";
const _DRP = "DeleteResourcePolicy";
const _DRPR = "DeleteResourcePolicyRequest";
const _DRPRe = "DeleteResourcePolicyResponse";
const _DRRL = "DocumentReviewerResponseList";
const _DRRS = "DocumentReviewerResponseSource";
const _DRo = "DocumentRequires";
const _DRoc = "DocumentReviews";
const _DS = "DetailedStatus";
const _DSR = "DescribeSessionsRequest";
const _DSRe = "DescribeSessionsResponse";
const _DST = "DeletionStartTime";
const _DSe = "DeletionSummary";
const _DSep = "DeploymentStatus";
const _DSes = "DescribeSessions";
const _DT = "DocumentType";
const _DTFMW = "DeregisterTargetFromMaintenanceWindow";
const _DTFMWR = "DeregisterTargetFromMaintenanceWindowRequest";
const _DTFMWRe = "DeregisterTargetFromMaintenanceWindowResult";
const _DTFMWRer = "DeregisterTaskFromMaintenanceWindowRequest";
const _DTFMWRere = "DeregisterTaskFromMaintenanceWindowResult";
const _DTFMWe = "DeregisterTaskFromMaintenanceWindow";
const _DTOC = "DeliveryTimedOutCount";
const _DTa = "DataType";
const _DTe = "DetailType";
const _DV = "DocumentVersion";
const _DVI = "DocumentVersionInfo";
const _DVL = "DocumentVersionList";
const _DVLE = "DocumentVersionLimitExceeded";
const _DVN = "DefaultVersionName";
const _DVe = "DefaultVersion";
const _DVef = "DefaultValue";
const _DVo = "DocumentVersions";
const _Da = "Date";
const _Dat = "Data";
const _De = "Details";
const _Det = "Detail";
const _Do = "Document";
const _Du = "Duration";
const _E = "Expired";
const _EA = "ExpiresAfter";
const _EAODS = "EnableAllOpsDataSources";
const _EAn = "EndedAt";
const _EAx = "ExcludeAccounts";
const _EB = "ExecutedBy";
const _EC = "ErrorCount";
const _ECr = "ErrorCode";
const _ED = "ExpirationDate";
const _EDn = "EndDate";
const _EDx = "ExecutionDate";
const _EEDT = "ExecutionEndDateTime";
const _EET = "ExecutionEndTime";
const _EETx = "ExecutionElapsedTime";
const _EI = "ExecutionId";
const _EIv = "EventId";
const _EIx = "ExecutionInputs";
const _ENS = "EnableNonSecurity";
const _EP = "EffectivePatches";
const _EPI = "ExecutionPreviewId";
const _EPL = "EffectivePatchList";
const _EPf = "EffectivePatch";
const _EPx = "ExecutionPreview";
const _ERN = "ExecutionRoleName";
const _ES = "ExecutionSummary";
const _ESDT = "ExecutionStartDateTime";
const _EST = "ExecutionStartTime";
const _ET = "ExecutionTime";
const _ETn = "EndTime";
const _ETx = "ExecutionType";
const _ETxp = "ExpirationTime";
const _En = "Entries";
const _Ena = "Enabled";
const _Ent = "Entry";
const _Enti = "Entities";
const _Entit = "Entity";
const _Ep = "Epoch";
const _Ex = "Expression";
const _F = "Failed";
const _FC = "FailedCount";
const _FCA = "FailedCreateAssociation";
const _FCAE = "FailedCreateAssociationEntry";
const _FCAL = "FailedCreateAssociationList";
const _FD = "FailureDetails";
const _FK = "FilterKey";
const _FM = "FailureMessage";
const _FNAE = "FeatureNotAvailableException";
const _FS = "FailureStage";
const _FSa = "FailedSteps";
const _FT = "FailureType";
const _FV = "FilterValues";
const _FVi = "FilterValue";
const _FWO = "FiltersWithOperator";
const _Fa = "Fault";
const _Fi = "Filters";
const _Fo = "Force";
const _G = "Groups";
const _GAE = "GetAutomationExecution";
const _GAER = "GetAutomationExecutionRequest";
const _GAERe = "GetAutomationExecutionResult";
const _GAT = "GetAccessToken";
const _GATR = "GetAccessTokenRequest";
const _GATRe = "GetAccessTokenResponse";
const _GCI = "GetCommandInvocation";
const _GCIR = "GetCommandInvocationRequest";
const _GCIRe = "GetCommandInvocationResult";
const _GCS = "GetCalendarState";
const _GCSR = "GetCalendarStateRequest";
const _GCSRe = "GetCalendarStateResponse";
const _GCSRet = "GetConnectionStatusRequest";
const _GCSReto = "GetConnectionStatusResponse";
const _GCSe = "GetConnectionStatus";
const _GD = "GetDocument";
const _GDPB = "GetDefaultPatchBaseline";
const _GDPBR = "GetDefaultPatchBaselineRequest";
const _GDPBRe = "GetDefaultPatchBaselineResult";
const _GDPSFI = "GetDeployablePatchSnapshotForInstance";
const _GDPSFIR = "GetDeployablePatchSnapshotForInstanceRequest";
const _GDPSFIRe = "GetDeployablePatchSnapshotForInstanceResult";
const _GDR = "GetDocumentRequest";
const _GDRe = "GetDocumentResult";
const _GEP = "GetExecutionPreview";
const _GEPR = "GetExecutionPreviewRequest";
const _GEPRe = "GetExecutionPreviewResponse";
const _GF = "GlobalFilters";
const _GI = "GetInventory";
const _GIR = "GetInventoryRequest";
const _GIRe = "GetInventoryResult";
const _GIS = "GetInventorySchema";
const _GISR = "GetInventorySchemaRequest";
const _GISRe = "GetInventorySchemaResult";
const _GMW = "GetMaintenanceWindow";
const _GMWE = "GetMaintenanceWindowExecution";
const _GMWER = "GetMaintenanceWindowExecutionRequest";
const _GMWERe = "GetMaintenanceWindowExecutionResult";
const _GMWET = "GetMaintenanceWindowExecutionTask";
const _GMWETI = "GetMaintenanceWindowExecutionTaskInvocation";
const _GMWETIR = "GetMaintenanceWindowExecutionTaskInvocationRequest";
const _GMWETIRe = "GetMaintenanceWindowExecutionTaskInvocationResult";
const _GMWETR = "GetMaintenanceWindowExecutionTaskRequest";
const _GMWETRe = "GetMaintenanceWindowExecutionTaskResult";
const _GMWR = "GetMaintenanceWindowRequest";
const _GMWRe = "GetMaintenanceWindowResult";
const _GMWT = "GetMaintenanceWindowTask";
const _GMWTR = "GetMaintenanceWindowTaskRequest";
const _GMWTRe = "GetMaintenanceWindowTaskResult";
const _GOI = "GetOpsItem";
const _GOIR = "GetOpsItemRequest";
const _GOIRe = "GetOpsItemResponse";
const _GOM = "GetOpsMetadata";
const _GOMR = "GetOpsMetadataRequest";
const _GOMRe = "GetOpsMetadataResult";
const _GOS = "GetOpsSummary";
const _GOSR = "GetOpsSummaryRequest";
const _GOSRe = "GetOpsSummaryResult";
const _GP = "GetParameter";
const _GPB = "GetPatchBaseline";
const _GPBFPG = "GetPatchBaselineForPatchGroup";
const _GPBFPGR = "GetPatchBaselineForPatchGroupRequest";
const _GPBFPGRe = "GetPatchBaselineForPatchGroupResult";
const _GPBP = "GetParametersByPath";
const _GPBPR = "GetParametersByPathRequest";
const _GPBPRe = "GetParametersByPathResult";
const _GPBR = "GetPatchBaselineRequest";
const _GPBRe = "GetPatchBaselineResult";
const _GPH = "GetParameterHistory";
const _GPHR = "GetParameterHistoryRequest";
const _GPHRe = "GetParameterHistoryResult";
const _GPR = "GetParameterRequest";
const _GPRe = "GetParameterResult";
const _GPRet = "GetParametersRequest";
const _GPReta = "GetParametersResult";
const _GPe = "GetParameters";
const _GRP = "GetResourcePolicies";
const _GRPR = "GetResourcePoliciesRequest";
const _GRPRE = "GetResourcePoliciesResponseEntry";
const _GRPREe = "GetResourcePoliciesResponseEntries";
const _GRPRe = "GetResourcePoliciesResponse";
const _GSS = "GetServiceSetting";
const _GSSR = "GetServiceSettingRequest";
const _GSSRe = "GetServiceSettingResult";
const _H = "Hash";
const _HC = "HighCount";
const _HLLEE = "HierarchyLevelLimitExceededException";
const _HT = "HashType";
const _HTME = "HierarchyTypeMismatchException";
const _I = "Id";
const _IA = "InvalidActivation";
const _IAAO = "InstanceAggregatedAssociationOverview";
const _IAE = "InvalidAggregatorException";
const _IAEPE = "InvalidAutomationExecutionParametersException";
const _IAI = "InvalidActivationId";
const _IAL = "InstanceAssociationList";
const _IALn = "InventoryAggregatorList";
const _IAOL = "InstanceAssociationOutputLocation";
const _IAOU = "InstanceAssociationOutputUrl";
const _IAPE = "InvalidAllowedPatternException";
const _IASAC = "InstanceAssociationStatusAggregatedCount";
const _IASE = "InvalidAutomationSignalException";
const _IASI = "InstanceAssociationStatusInfos";
const _IASIn = "InstanceAssociationStatusInfo";
const _IASUE = "InvalidAutomationStatusUpdateException";
const _IAV = "InvalidAssociationVersion";
const _IAn = "InvalidAssociation";
const _IAns = "InstanceAssociation";
const _IAnv = "InventoryAggregator";
const _IAp = "IpAddress";
const _IC = "InstalledCount";
const _ICH = "ItemContentHash";
const _ICI = "InvalidCommandId";
const _ICME = "ItemContentMismatchException";
const _ICOU = "IncludeChildOrganizationUnits";
const _ICn = "InformationalCount";
const _ICs = "IsCritical";
const _ID = "InvalidDocument";
const _IDC = "InvalidDocumentContent";
const _IDIE = "InvalidDeletionIdException";
const _IDIPE = "InvalidDeleteInventoryParametersException";
const _IDL = "InventoryDeletionsList";
const _IDNE = "InvocationDoesNotExist";
const _IDO = "InvalidDocumentOperation";
const _IDS = "InventoryDeletionSummary";
const _IDSI = "InventoryDeletionStatusItem";
const _IDSIn = "InventoryDeletionSummaryItem";
const _IDSInv = "InventoryDeletionSummaryItems";
const _IDSV = "InvalidDocumentSchemaVersion";
const _IDT = "InvalidDocumentType";
const _IDV = "InvalidDocumentVersion";
const _IDVs = "IsDefaultVersion";
const _IDn = "InventoryDeletions";
const _IE = "IsEnd";
const _IF = "InvalidFilter";
const _IFK = "InvalidFilterKey";
const _IFL = "InventoryFilterList";
const _IFO = "InvalidFilterOption";
const _IFR = "IncludeFutureRegions";
const _IFV = "InvalidFilterValue";
const _IFVL = "InventoryFilterValueList";
const _IFn = "InventoryFilter";
const _IG = "InventoryGroup";
const _IGL = "InventoryGroupList";
const _II = "InstanceId";
const _IIA = "InventoryItemAttribute";
const _IIAL = "InventoryItemAttributeList";
const _IICE = "InvalidItemContentException";
const _IIEL = "InventoryItemEntryList";
const _IIF = "InstanceInformationFilter";
const _IIFL = "InstanceInformationFilterList";
const _IIFV = "InstanceInformationFilterValue";
const _IIFVS = "InstanceInformationFilterValueSet";
const _IIGE = "InvalidInventoryGroupException";
const _III = "InvalidInstanceId";
const _IIICE = "InvalidInventoryItemContextException";
const _IIIFV = "InvalidInstanceInformationFilterValue";
const _IIL = "InstanceInformationList";
const _IILn = "InventoryItemList";
const _IIPFV = "InvalidInstancePropertyFilterValue";
const _IIRE = "InvalidInventoryRequestException";
const _IIS = "InventoryItemSchema";
const _IISF = "InstanceInformationStringFilter";
const _IISFL = "InstanceInformationStringFilterList";
const _IISRL = "InventoryItemSchemaResultList";
const _IIn = "InstanceIds";
const _IIns = "InstanceInfo";
const _IInst = "InstanceInformation";
const _IInv = "InvocationId";
const _IInve = "InventoryItem";
const _IKI = "InvalidKeyId";
const _IL = "InvalidLabels";
const _ILV = "IsLatestVersion";
const _IN = "InstanceName";
const _INC = "InvalidNotificationConfig";
const _INT = "InvalidNextToken";
const _IOC = "InstalledOtherCount";
const _IOE = "InvalidOptionException";
const _IOF = "InvalidOutputFolder";
const _IOL = "InvalidOutputLocation";
const _IOLn = "InstallOverrideList";
const _IP = "InvalidParameters";
const _IPA = "IPAddress";
const _IPAE = "InvalidPolicyAttributeException";
const _IPAF = "IgnorePollAlarmFailure";
const _IPE = "IncompatiblePolicyException";
const _IPF = "InstancePropertyFilter";
const _IPFL = "InstancePropertyFilterList";
const _IPFV = "InstancePropertyFilterValue";
const _IPFVS = "InstancePropertyFilterValueSet";
const _IPM = "IdempotentParameterMismatch";
const _IPN = "InvalidPluginName";
const _IPRC = "InstalledPendingRebootCount";
const _IPS = "InstancePatchStates";
const _IPSF = "InstancePatchStateFilter";
const _IPSFL = "InstancePatchStateFilterList";
const _IPSFLn = "InstancePropertyStringFilterList";
const _IPSFn = "InstancePropertyStringFilter";
const _IPSL = "InstancePatchStateList";
const _IPSLn = "InstancePatchStatesList";
const _IPSn = "InstancePatchState";
const _IPT = "InvalidPermissionType";
const _IPTE = "InvalidPolicyTypeException";
const _IPn = "InstanceProperties";
const _IPns = "InstanceProperty";
const _IR = "InvalidRole";
const _IRAE = "InvalidResultAttributeException";
const _IRC = "InstalledRejectedCount";
const _IRE = "InventoryResultEntity";
const _IREL = "InventoryResultEntityList";
const _IRI = "InvalidResourceId";
const _IRIM = "InventoryResultItemMap";
const _IRIn = "InventoryResultItem";
const _IRT = "InvalidResourceType";
const _IRa = "IamRole";
const _IRn = "InstanceRole";
const _IS = "InvalidSchedule";
const _ISE = "InternalServerError";
const _ISLEE = "ItemSizeLimitExceededException";
const _ISn = "InstanceStatus";
const _ISns = "InstanceState";
const _IT = "InvalidTag";
const _ITM = "InvalidTargetMaps";
const _ITNE = "InvalidTypeNameException";
const _ITn = "InvalidTarget";
const _ITns = "InstanceType";
const _ITnst = "InstalledTime";
const _IU = "InvalidUpdate";
const _IV = "IteratorValue";
const _IWASU = "InstancesWithAvailableSecurityUpdates";
const _IWCNCP = "InstancesWithCriticalNonCompliantPatches";
const _IWFP = "InstancesWithFailedPatches";
const _IWIOP = "InstancesWithInstalledOtherPatches";
const _IWIP = "InstancesWithInstalledPatches";
const _IWIPRP = "InstancesWithInstalledPendingRebootPatches";
const _IWIRP = "InstancesWithInstalledRejectedPatches";
const _IWMP = "InstancesWithMissingPatches";
const _IWNAP = "InstancesWithNotApplicablePatches";
const _IWONCP = "InstancesWithOtherNonCompliantPatches";
const _IWSNCP = "InstancesWithSecurityNonCompliantPatches";
const _IWUNAP = "InstancesWithUnreportedNotApplicablePatches";
const _In = "Instances";
const _Inp = "Input";
const _Inpu = "Inputs";
const _Ins = "Instance";
const _It = "Iteration";
const _Ite = "Items";
const _Item = "Item";
const _K = "Key";
const _KBI = "KBId";
const _KI = "KeyId";
const _KN = "KeyName";
const _KNb = "KbNumber";
const _KTD = "KeysToDelete";
const _L = "Limit";
const _LA = "ListAssociations";
const _LAED = "LastAssociationExecutionDate";
const _LAR = "ListAssociationsRequest";
const _LARi = "ListAssociationsResult";
const _LAV = "ListAssociationVersions";
const _LAVR = "ListAssociationVersionsRequest";
const _LAVRi = "ListAssociationVersionsResult";
const _LC = "LowCount";
const _LCI = "ListCommandInvocations";
const _LCIR = "ListCommandInvocationsRequest";
const _LCIRi = "ListCommandInvocationsResult";
const _LCIRis = "ListComplianceItemsRequest";
const _LCIRist = "ListComplianceItemsResult";
const _LCIi = "ListComplianceItems";
const _LCR = "ListCommandsRequest";
const _LCRi = "ListCommandsResult";
const _LCS = "ListComplianceSummaries";
const _LCSR = "ListComplianceSummariesRequest";
const _LCSRi = "ListComplianceSummariesResult";
const _LCi = "ListCommands";
const _LD = "ListDocuments";
const _LDMH = "ListDocumentMetadataHistory";
const _LDMHR = "ListDocumentMetadataHistoryRequest";
const _LDMHRi = "ListDocumentMetadataHistoryResponse";
const _LDR = "ListDocumentsRequest";
const _LDRi = "ListDocumentsResult";
const _LDV = "ListDocumentVersions";
const _LDVR = "ListDocumentVersionsRequest";
const _LDVRi = "ListDocumentVersionsResult";
const _LED = "LastExecutionDate";
const _LF = "LogFile";
const _LI = "LoggingInfo";
const _LIE = "ListInventoryEntries";
const _LIER = "ListInventoryEntriesRequest";
const _LIERi = "ListInventoryEntriesResult";
const _LMB = "LastModifiedBy";
const _LMD = "LastModifiedDate";
const _LMT = "LastModifiedTime";
const _LMU = "LastModifiedUser";
const _LN = "ListNodes";
const _LNR = "ListNodesRequest";
const _LNRIOT = "LastNoRebootInstallOperationTime";
const _LNRi = "ListNodesResult";
const _LNS = "ListNodesSummary";
const _LNSR = "ListNodesSummaryRequest";
const _LNSRi = "ListNodesSummaryResult";
const _LOIE = "ListOpsItemEvents";
const _LOIER = "ListOpsItemEventsRequest";
const _LOIERi = "ListOpsItemEventsResponse";
const _LOIRI = "ListOpsItemRelatedItems";
const _LOIRIR = "ListOpsItemRelatedItemsRequest";
const _LOIRIRi = "ListOpsItemRelatedItemsResponse";
const _LOM = "ListOpsMetadata";
const _LOMR = "ListOpsMetadataRequest";
const _LOMRi = "ListOpsMetadataResult";
const _LPDT = "LastPingDateTime";
const _LPV = "LabelParameterVersion";
const _LPVR = "LabelParameterVersionRequest";
const _LPVRa = "LabelParameterVersionResult";
const _LRCS = "ListResourceComplianceSummaries";
const _LRCSR = "ListResourceComplianceSummariesRequest";
const _LRCSRi = "ListResourceComplianceSummariesResult";
const _LRDS = "ListResourceDataSync";
const _LRDSR = "ListResourceDataSyncRequest";
const _LRDSRi = "ListResourceDataSyncResult";
const _LS = "LastStatus";
const _LSAED = "LastSuccessfulAssociationExecutionDate";
const _LSED = "LastSuccessfulExecutionDate";
const _LSM = "LastStatusMessage";
const _LSSM = "LastSyncStatusMessage";
const _LSST = "LastSuccessfulSyncTime";
const _LST = "LastSyncTime";
const _LSUT = "LastStatusUpdateTime";
const _LT = "LimitType";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResult";
const _LTa = "LaunchTime";
const _LUAD = "LastUpdateAssociationDate";
const _LV = "LatestVersion";
const _La = "Labels";
const _Lam = "Lambda";
const _Lan = "Language";
const _M = "Message";
const _MA = "MaxAttempts";
const _MC = "MaxConcurrency";
const _MCe = "MediumCount";
const _MCi = "MissingCount";
const _MD = "ModifiedDate";
const _MDP = "ModifyDocumentPermission";
const _MDPR = "ModifyDocumentPermissionRequest";
const _MDPRo = "ModifyDocumentPermissionResponse";
const _MDSE = "MaxDocumentSizeExceeded";
const _ME = "MaxErrors";
const _MM = "MetadataMap";
const _MN = "MsrcNumber";
const _MR = "MaxResults";
const _MRPDE = "MalformedResourcePolicyDocumentException";
const _MS = "ManagedStatus";
const _MSD = "MaxSessionDuration";
const _MSs = "MsrcSeverity";
const _MTU = "MetadataToUpdate";
const _MV = "MetadataValue";
const _MWAP = "MaintenanceWindowAutomationParameters";
const _MWD = "MaintenanceWindowDescription";
const _MWE = "MaintenanceWindowExecution";
const _MWEL = "MaintenanceWindowExecutionList";
const _MWETI = "MaintenanceWindowExecutionTaskIdentity";
const _MWETII = "MaintenanceWindowExecutionTaskInvocationIdentity";
const _MWETIIL = "MaintenanceWindowExecutionTaskInvocationIdentityList";
const _MWETIL = "MaintenanceWindowExecutionTaskIdentityList";
const _MWETIP = "MaintenanceWindowExecutionTaskInvocationParameters";
const _MWF = "MaintenanceWindowFilter";
const _MWFL = "MaintenanceWindowFilterList";
const _MWFTL = "MaintenanceWindowsForTargetList";
const _MWI = "MaintenanceWindowIdentity";
const _MWIFT = "MaintenanceWindowIdentityForTarget";
const _MWIL = "MaintenanceWindowIdentityList";
const _MWLP = "MaintenanceWindowLambdaPayload";
const _MWLPa = "MaintenanceWindowLambdaParameters";
const _MWRCP = "MaintenanceWindowRunCommandParameters";
const _MWSFI = "MaintenanceWindowStepFunctionsInput";
const _MWSFP = "MaintenanceWindowStepFunctionsParameters";
const _MWT = "MaintenanceWindowTarget";
const _MWTIP = "MaintenanceWindowTaskInvocationParameters";
const _MWTL = "MaintenanceWindowTargetList";
const _MWTLa = "MaintenanceWindowTaskList";
const _MWTP = "MaintenanceWindowTaskParameters";
const _MWTPL = "MaintenanceWindowTaskParametersList";
const _MWTPV = "MaintenanceWindowTaskParameterValue";
const _MWTPVE = "MaintenanceWindowTaskParameterValueExpression";
const _MWTPVL = "MaintenanceWindowTaskParameterValueList";
const _MWTa = "MaintenanceWindowTask";
const _Ma = "Mappings";
const _Me = "Metadata";
const _Mo = "Mode";
const _N = "Name";
const _NA = "NodeAggregator";
const _NAC = "NotApplicableCount";
const _NAL = "NodeAggregatorList";
const _NAo = "NotificationArn";
const _NC = "NotificationConfig";
const _NCC = "NonCompliantCount";
const _NCS = "NonCompliantSummary";
const _NE = "NotificationEvents";
const _NET = "NextExecutionTime";
const _NF = "NodeFilter";
const _NFL = "NodeFilterList";
const _NFVL = "NodeFilterValueList";
const _NL = "NodeList";
const _NLSE = "NoLongerSupportedException";
const _NOI = "NodeOwnerInfo";
const _NS = "NextStep";
const _NSL = "NodeSummaryList";
const _NT = "NextToken";
const _NTT = "NextTransitionTime";
const _NTo = "NodeType";
const _NTot = "NotificationType";
const _Na = "Names";
const _No = "Notifications";
const _Nod = "Nodes";
const _Node = "Node";
const _O = "Overview";
const _OA = "OpsAggregator";
const _OAL = "OpsAggregatorList";
const _OD = "OperationalData";
const _ODTD = "OperationalDataToDelete";
const _OE = "OpsEntity";
const _OEI = "OpsEntityItem";
const _OEIEL = "OpsEntityItemEntryList";
const _OEIM = "OpsEntityItemMap";
const _OEL = "OpsEntityList";
const _OET = "OperationEndTime";
const _OF = "OpsFilter";
const _OFL = "OpsFilterList";
const _OFVL = "OpsFilterValueList";
const _OFn = "OnFailure";
const _OI = "OwnerInformation";
const _OIA = "OpsItemArn";
const _OIADE = "OpsItemAccessDeniedException";
const _OIAEE = "OpsItemAlreadyExistsException";
const _OICE = "OpsItemConflictException";
const _OIDV = "OpsItemDataValue";
const _OIEF = "OpsItemEventFilter";
const _OIEFp = "OpsItemEventFilters";
const _OIES = "OpsItemEventSummary";
const _OIESp = "OpsItemEventSummaries";
const _OIF = "OpsItemFilters";
const _OIFp = "OpsItemFilter";
const _OII = "OpsItemId";
const _OIIPE = "OpsItemInvalidParameterException";
const _OIIp = "OpsItemIdentity";
const _OILEE = "OpsItemLimitExceededException";
const _OIN = "OpsItemNotification";
const _OINFE = "OpsItemNotFoundException";
const _OINp = "OpsItemNotifications";
const _OIOD = "OpsItemOperationalData";
const _OIRIAEE = "OpsItemRelatedItemAlreadyExistsException";
const _OIRIANFE = "OpsItemRelatedItemAssociationNotFoundException";
const _OIRIF = "OpsItemRelatedItemsFilter";
const _OIRIFp = "OpsItemRelatedItemsFilters";
const _OIRIS = "OpsItemRelatedItemSummary";
const _OIRISp = "OpsItemRelatedItemSummaries";
const _OIS = "OpsItemSummaries";
const _OISp = "OpsItemSummary";
const _OIT = "OpsItemType";
const _OIp = "OpsItem";
const _OL = "OutputLocation";
const _OM = "OpsMetadata";
const _OMA = "OpsMetadataArn";
const _OMAEE = "OpsMetadataAlreadyExistsException";
const _OMF = "OpsMetadataFilter";
const _OMFL = "OpsMetadataFilterList";
const _OMIAE = "OpsMetadataInvalidArgumentException";
const _OMKLEE = "OpsMetadataKeyLimitExceededException";
const _OML = "OpsMetadataList";
const _OMLEE = "OpsMetadataLimitExceededException";
const _OMNFE = "OpsMetadataNotFoundException";
const _OMTMUE = "OpsMetadataTooManyUpdatesException";
const _ONCC = "OtherNonCompliantCount";
const _OP = "OverriddenParameters";
const _ORA = "OpsResultAttribute";
const _ORAL = "OpsResultAttributeList";
const _OS = "OutputSource";
const _OSBN = "OutputS3BucketName";
const _OSI = "OutputSourceId";
const _OSKP = "OutputS3KeyPrefix";
const _OSR = "OutputS3Region";
const _OST = "OperationStartTime";
const _OSTr = "OrganizationSourceType";
const _OSTu = "OutputSourceType";
const _OSp = "OperatingSystem";
const _OSv = "OverallSeverity";
const _OU = "OutputUrl";
const _OUI = "OrganizationalUnitId";
const _OUP = "OrganizationalUnitPath";
const _OUr = "OrganizationalUnits";
const _Op = "Operation";
const _Ope = "Operator";
const _Opt = "Option";
const _Ou = "Outputs";
const _Out = "Output";
const _Ov = "Overwrite";
const _Ow = "Owner";
const _P = "Parameters";
const _PAE = "ParameterAlreadyExists";
const _PAEI = "ParentAutomationExecutionId";
const _PBI = "PatchBaselineIdentity";
const _PBIL = "PatchBaselineIdentityList";
const _PC = "ProgressCounters";
const _PCD = "PatchComplianceData";
const _PCDL = "PatchComplianceDataList";
const _PCI = "PutComplianceItems";
const _PCIR = "PutComplianceItemsRequest";
const _PCIRu = "PutComplianceItemsResult";
const _PET = "PlannedEndTime";
const _PF = "ParameterFilters";
const _PFG = "PatchFilterGroup";
const _PFL = "ParametersFilterList";
const _PFLa = "PatchFilterList";
const _PFa = "ParametersFilter";
const _PFat = "PatchFilter";
const _PFatc = "PatchFilters";
const _PFr = "ProductFamily";
const _PG = "PatchGroup";
const _PGPBM = "PatchGroupPatchBaselineMapping";
const _PGPBML = "PatchGroupPatchBaselineMappingList";
const _PGa = "PatchGroups";
const _PH = "PolicyHash";
const _PHL = "ParameterHistoryList";
const _PHa = "ParameterHistory";
const _PI = "PolicyId";
const _PIP = "ParameterInlinePolicy";
const _PIR = "PutInventoryRequest";
const _PIRu = "PutInventoryResult";
const _PIu = "PutInventory";
const _PL = "ParameterList";
const _PLE = "ParameterLimitExceeded";
const _PLEE = "PoliciesLimitExceededException";
const _PLa = "PatchList";
const _PM = "ParameterMetadata";
const _PML = "ParameterMetadataList";
const _PMVLE = "ParameterMaxVersionLimitExceeded";
const _PN = "ParameterNames";
const _PNF = "ParameterNotFound";
const _PNl = "PluginName";
const _PNla = "PlatformName";
const _POF = "PatchOrchestratorFilter";
const _POFL = "PatchOrchestratorFilterList";
const _PP = "PutParameter";
const _PPL = "PatchPropertiesList";
const _PPLa = "ParameterPolicyList";
const _PPME = "ParameterPatternMismatchException";
const _PPR = "PutParameterRequest";
const _PPRu = "PutParameterResult";
const _PR = "PatchRule";
const _PRG = "PatchRuleGroup";
const _PRL = "PatchRuleList";
const _PRP = "PutResourcePolicy";
const _PRPR = "PutResourcePolicyRequest";
const _PRPRu = "PutResourcePolicyResponse";
const _PRV = "PendingReviewVersion";
const _PRa = "PatchRules";
const _PS = "PatchSet";
const _PSC = "PatchSourceConfiguration";
const _PSD = "ParentStepDetails";
const _PSF = "ParameterStringFilter";
const _PSFL = "ParameterStringFilterList";
const _PSL = "PatchSourceList";
const _PSPV = "PSParameterValue";
const _PST = "PlannedStartTime";
const _PSa = "PatchStatus";
const _PSat = "PatchSource";
const _PSi = "PingStatus";
const _PSo = "PolicyStatus";
const _PT = "PermissionType";
const _PTL = "PlatformTypeList";
const _PTl = "PlatformTypes";
const _PTla = "PlatformType";
const _PTo = "PolicyText";
const _PTol = "PolicyType";
const _PV = "PlatformVersion";
const _PVLLE = "ParameterVersionLabelLimitExceeded";
const _PVNF = "ParameterVersionNotFound";
const _PVa = "ParameterVersion";
const _PVar = "ParameterValues";
const _Pa = "Patches";
const _Par = "Parameter";
const _Pat = "Patch";
const _Path = "Path";
const _Pay = "Payload";
const _Po = "Policies";
const _Pol = "Policy";
const _Pr = "Priority";
const _Pre = "Prefix";
const _Pro = "Property";
const _Prod = "Product";
const _Produ = "Products";
const _Prop = "Properties";
const _Q = "Qualifier";
const _QC = "QuotaCode";
const _R = "Runbooks";
const _RA = "ResourceArn";
const _RAL = "ResultAttributeList";
const _RAe = "ResultAttributes";
const _RAes = "ResultAttribute";
const _RC = "ReasonCode";
const _RCBS = "ResourceCountByStatus";
const _RCSI = "ResourceComplianceSummaryItems";
const _RCSIL = "ResourceComplianceSummaryItemList";
const _RCSIe = "ResourceComplianceSummaryItem";
const _RCe = "RegistrationsCount";
const _RCem = "RemainingCount";
const _RCes = "ResponseCode";
const _RCu = "RunCommand";
const _RD = "RegistrationDate";
const _RDPB = "RegisterDefaultPatchBaseline";
const _RDPBR = "RegisterDefaultPatchBaselineRequest";
const _RDPBRe = "RegisterDefaultPatchBaselineResult";
const _RDSAEE = "ResourceDataSyncAlreadyExistsException";
const _RDSAOS = "ResourceDataSyncAwsOrganizationsSource";
const _RDSCE = "ResourceDataSyncConflictException";
const _RDSCEE = "ResourceDataSyncCountExceededException";
const _RDSDDS = "ResourceDataSyncDestinationDataSharing";
const _RDSI = "ResourceDataSyncItems";
const _RDSICE = "ResourceDataSyncInvalidConfigurationException";
const _RDSIL = "ResourceDataSyncItemList";
const _RDSIe = "ResourceDataSyncItem";
const _RDSNFE = "ResourceDataSyncNotFoundException";
const _RDSOU = "ResourceDataSyncOrganizationalUnit";
const _RDSOUL = "ResourceDataSyncOrganizationalUnitList";
const _RDSS = "ResourceDataSyncSource";
const _RDSSD = "ResourceDataSyncS3Destination";
const _RDSSWS = "ResourceDataSyncSourceWithState";
const _RDT = "RequestedDateTime";
const _RDe = "ReleaseDate";
const _RFDT = "ResponseFinishDateTime";
const _RI = "ResourceId";
const _RIL = "ReviewInformationList";
const _RIUE = "ResourceInUseException";
const _RIe = "ReviewInformation";
const _RIes = "ResourceIds";
const _RL = "RegistrationLimit";
const _RLEE = "ResourceLimitExceededException";
const _RLe = "RemovedLabels";
const _RM = "RegistrationMetadata";
const _RMI = "RegistrationMetadataItem";
const _RML = "RegistrationMetadataList";
const _RNFE = "ResourceNotFoundException";
const _RO = "ReverseOrder";
const _ROI = "RelatedOpsItems";
const _ROIe = "RelatedOpsItem";
const _ROe = "RebootOption";
const _RP = "RejectedPatches";
const _RPA = "RejectedPatchesAction";
const _RPBFPG = "RegisterPatchBaselineForPatchGroup";
const _RPBFPGR = "RegisterPatchBaselineForPatchGroupRequest";
const _RPBFPGRe = "RegisterPatchBaselineForPatchGroupResult";
const _RPCE = "ResourcePolicyConflictException";
const _RPIPE = "ResourcePolicyInvalidParameterException";
const _RPLEE = "ResourcePolicyLimitExceededException";
const _RPNFE = "ResourcePolicyNotFoundException";
const _RR = "ReviewerResponse";
const _RS = "ReviewStatus";
const _RSDT = "ResponseStartDateTime";
const _RSR = "ResumeSessionRequest";
const _RSRe = "ResumeSessionResponse";
const _RSS = "ResetServiceSetting";
const _RSSR = "ResetServiceSettingRequest";
const _RSSRe = "ResetServiceSettingResult";
const _RSe = "ResumeSession";
const _RT = "ResourceTypes";
const _RTFR = "RemoveTagsFromResource";
const _RTFRR = "RemoveTagsFromResourceRequest";
const _RTFRRe = "RemoveTagsFromResourceResult";
const _RTWMW = "RegisterTargetWithMaintenanceWindow";
const _RTWMWR = "RegisterTargetWithMaintenanceWindowRequest";
const _RTWMWRe = "RegisterTargetWithMaintenanceWindowResult";
const _RTWMWReg = "RegisterTaskWithMaintenanceWindowRequest";
const _RTWMWRegi = "RegisterTaskWithMaintenanceWindowResult";
const _RTWMWe = "RegisterTaskWithMaintenanceWindow";
const _RTe = "ResourceType";
const _RTeq = "RequireType";
const _RTes = "ResolvedTargets";
const _RTev = "ReviewedTime";
const _RU = "ResourceUri";
const _Re = "Regions";
const _Rea = "Reason";
const _Rec = "Recursive";
const _Reg = "Region";
const _Rel = "Release";
const _Rep = "Repository";
const _Repl = "Replace";
const _Req = "Requires";
const _Res = "Response";
const _Rev = "Reviewer";
const _Ru = "Runbook";
const _S = "State";
const _SAE = "StartAutomationExecution";
const _SAER = "StartAutomationExecutionRequest";
const _SAERt = "StartAutomationExecutionResult";
const _SAERto = "StopAutomationExecutionRequest";
const _SAERtop = "StopAutomationExecutionResult";
const _SAEt = "StopAutomationExecution";
const _SAK = "SecretAccessKey";
const _SAO = "StartAssociationsOnce";
const _SAOR = "StartAssociationsOnceRequest";
const _SAORt = "StartAssociationsOnceResult";
const _SAR = "StartAccessRequest";
const _SARR = "StartAccessRequestRequest";
const _SARRt = "StartAccessRequestResponse";
const _SAS = "SendAutomationSignal";
const _SASR = "SendAutomationSignalRequest";
const _SASRe = "SendAutomationSignalResult";
const _SBN = "S3BucketName";
const _SC = "ServiceCode";
const _SCR = "SendCommandRequest";
const _SCRE = "StartChangeRequestExecution";
const _SCRER = "StartChangeRequestExecutionRequest";
const _SCRERt = "StartChangeRequestExecutionResult";
const _SCRe = "SendCommandResult";
const _SCT = "SyncCreatedTime";
const _SCe = "SendCommand";
const _SCy = "SyncCompliance";
const _SD = "StatusDetails";
const _SDO = "SchemaDeleteOption";
const _SDU = "SnapshotDownloadUrl";
const _SDV = "SharedDocumentVersion";
const _SDe = "S3Destination";
const _SDt = "StartDate";
const _SE = "ScheduleExpression";
const _SEC = "StandardErrorContent";
const _SEF = "StepExecutionFilter";
const _SEFL = "StepExecutionFilterList";
const _SEI = "StepExecutionId";
const _SEL = "StepExecutionList";
const _SEP = "StartExecutionPreview";
const _SEPR = "StartExecutionPreviewRequest";
const _SEPRt = "StartExecutionPreviewResponse";
const _SET = "StepExecutionsTruncated";
const _SETc = "ScheduledEndTime";
const _SEU = "StandardErrorUrl";
const _SEt = "StepExecutions";
const _SEte = "StepExecution";
const _SF = "StepFunctions";
const _SFL = "SessionFilterList";
const _SFe = "SessionFilter";
const _SFy = "SyncFormat";
const _SI = "StatusInformation";
const _SIe = "SettingId";
const _SIes = "SessionId";
const _SIn = "SnapshotId";
const _SIo = "SourceId";
const _SIu = "SummaryItems";
const _SKP = "S3KeyPrefix";
const _SL = "S3Location";
const _SLMT = "SyncLastModifiedTime";
const _SLe = "SessionList";
const _SM = "StatusMessage";
const _SMOU = "SessionManagerOutputUrl";
const _SMP = "SessionManagerParameters";
const _SN = "SyncName";
const _SNCC = "SecurityNonCompliantCount";
const _SNt = "StepName";
const _SO = "ScheduleOffset";
const _SOC = "StandardOutputContent";
const _SOL = "S3OutputLocation";
const _SOU = "StandardOutputUrl";
const _SOUu = "S3OutputUrl";
const _SP = "StepPreviews";
const _SQEE = "ServiceQuotaExceededException";
const _SR = "ServiceRole";
const _SRA = "ServiceRoleArn";
const _SRe = "S3Region";
const _SRo = "SourceResult";
const _SRou = "SourceRegions";
const _SS = "SeveritySummary";
const _SSNF = "ServiceSettingNotFound";
const _SSR = "StartSessionRequest";
const _SSRt = "StartSessionResponse";
const _SSe = "ServiceSetting";
const _SSt = "StepStatus";
const _SSta = "StartSession";
const _SSu = "SuccessSteps";
const _SSy = "SyncSource";
const _ST = "SyncType";
const _STCLEE = "SubTypeCountLimitExceededException";
const _STT = "SessionTokenType";
const _STc = "ScheduledTime";
const _STch = "ScheduleTimezone";
const _STe = "SessionToken";
const _STi = "SignalType";
const _STo = "SourceType";
const _STt = "StartTime";
const _STu = "SubType";
const _SU = "StatusUnchanged";
const _SUt = "StreamUrl";
const _SV = "SchemaVersion";
const _SVe = "SettingValue";
const _SWE = "ScheduledWindowExecutions";
const _SWEL = "ScheduledWindowExecutionList";
const _SWEc = "ScheduledWindowExecution";
const _Sa = "Safe";
const _Sc = "Schedule";
const _Sch = "Schemas";
const _Se = "Severity";
const _Sel = "Selector";
const _Ses = "Sessions";
const _Sess = "Session";
const _Sh = "Shared";
const _Sha = "Sha1";
const _Si = "Size";
const _So = "Sources";
const _Sou = "Source";
const _St = "Status";
const _Su = "Successful";
const _Sum = "Summary";
const _Summ = "Summaries";
const _T = "Tags";
const _TA = "TriggeredAlarms";
const _TAa = "TaskArn";
const _TAo = "TotalAccounts";
const _TC = "TargetCount";
const _TCo = "TotalCount";
const _TE = "ThrottlingException";
const _TEI = "TaskExecutionId";
const _TI = "TaskId";
const _TIP = "TaskInvocationParameters";
const _TIUE = "TargetInUseException";
const _TIa = "TaskIds";
const _TK = "TagKeys";
const _TL = "TargetLocations";
const _TLAC = "TargetLocationAlarmConfiguration";
const _TLMC = "TargetLocationMaxConcurrency";
const _TLME = "TargetLocationMaxErrors";
const _TLURL = "TargetLocationsURL";
const _TLa = "TagList";
const _TLar = "TargetLocation";
const _TM = "TargetMaps";
const _TMC = "TargetsMaxConcurrency";
const _TME = "TargetsMaxErrors";
const _TMTE = "TooManyTagsError";
const _TMU = "TooManyUpdates";
const _TMa = "TargetMap";
const _TN = "TypeName";
const _TNC = "TargetNotConnected";
const _TO = "TraceOutput";
const _TOS = "TimedOutSteps";
const _TP = "TargetPreviews";
const _TPL = "TargetPreviewList";
const _TPN = "TargetParameterName";
const _TPa = "TaskParameters";
const _TPar = "TargetPreview";
const _TS = "TimeoutSeconds";
const _TSLEE = "TotalSizeLimitExceededException";
const _TSR = "TerminateSessionRequest";
const _TSRe = "TerminateSessionResponse";
const _TSe = "TerminateSession";
const _TSo = "TotalSteps";
const _TT = "TargetType";
const _TTa = "TaskType";
const _TV = "TokenValue";
const _Ta = "Targets";
const _Tag = "Tag";
const _Tar = "Target";
const _Tas = "Tasks";
const _Ti = "Title";
const _Tie = "Tier";
const _Tr = "Truncated";
const _Ty = "Type";
const _U = "Url";
const _UA = "UpdateAssociation";
const _UAR = "UpdateAssociationRequest";
const _UARp = "UpdateAssociationResult";
const _UAS = "UpdateAssociationStatus";
const _UASR = "UpdateAssociationStatusRequest";
const _UASRp = "UpdateAssociationStatusResult";
const _UC = "UnspecifiedCount";
const _UCE = "UnsupportedCalendarException";
const _UD = "UpdateDocument";
const _UDDV = "UpdateDocumentDefaultVersion";
const _UDDVR = "UpdateDocumentDefaultVersionRequest";
const _UDDVRp = "UpdateDocumentDefaultVersionResult";
const _UDM = "UpdateDocumentMetadata";
const _UDMR = "UpdateDocumentMetadataRequest";
const _UDMRp = "UpdateDocumentMetadataResponse";
const _UDR = "UpdateDocumentRequest";
const _UDRp = "UpdateDocumentResult";
const _UFRE = "UnsupportedFeatureRequiredException";
const _UIICE = "UnsupportedInventoryItemContextException";
const _UISVE = "UnsupportedInventorySchemaVersionException";
const _UMIR = "UpdateManagedInstanceRole";
const _UMIRR = "UpdateManagedInstanceRoleRequest";
const _UMIRRp = "UpdateManagedInstanceRoleResult";
const _UMW = "UpdateMaintenanceWindow";
const _UMWR = "UpdateMaintenanceWindowRequest";
const _UMWRp = "UpdateMaintenanceWindowResult";
const _UMWT = "UpdateMaintenanceWindowTarget";
const _UMWTR = "UpdateMaintenanceWindowTargetRequest";
const _UMWTRp = "UpdateMaintenanceWindowTargetResult";
const _UMWTRpd = "UpdateMaintenanceWindowTaskRequest";
const _UMWTRpda = "UpdateMaintenanceWindowTaskResult";
const _UMWTp = "UpdateMaintenanceWindowTask";
const _UNAC = "UnreportedNotApplicableCount";
const _UOE = "UnsupportedOperationException";
const _UOI = "UpdateOpsItem";
const _UOIR = "UpdateOpsItemRequest";
const _UOIRp = "UpdateOpsItemResponse";
const _UOM = "UpdateOpsMetadata";
const _UOMR = "UpdateOpsMetadataRequest";
const _UOMRp = "UpdateOpsMetadataResult";
const _UOS = "UnsupportedOperatingSystem";
const _UPB = "UpdatePatchBaseline";
const _UPBR = "UpdatePatchBaselineRequest";
const _UPBRp = "UpdatePatchBaselineResult";
const _UPT = "UnsupportedParameterType";
const _UPTn = "UnsupportedPlatformType";
const _UPV = "UnlabelParameterVersion";
const _UPVR = "UnlabelParameterVersionRequest";
const _UPVRn = "UnlabelParameterVersionResult";
const _URDS = "UpdateResourceDataSync";
const _URDSR = "UpdateResourceDataSyncRequest";
const _URDSRp = "UpdateResourceDataSyncResult";
const _USDSE = "UseS3DualStackEndpoint";
const _USS = "UpdateServiceSetting";
const _USSR = "UpdateServiceSettingRequest";
const _USSRp = "UpdateServiceSettingResult";
const _UT = "UpdatedTime";
const _UTp = "UploadType";
const _V = "Value";
const _VE = "ValidationException";
const _VN = "VersionName";
const _VNS = "ValidNextSteps";
const _Va = "Values";
const _Var = "Variables";
const _Ve = "Version";
const _Ven = "Vendor";
const _WD = "WithDecryption";
const _WE = "WindowExecutions";
const _WEI = "WindowExecutionId";
const _WETI = "WindowExecutionTaskIdentities";
const _WETII = "WindowExecutionTaskInvocationIdentities";
const _WI = "WindowId";
const _WIi = "WindowIdentities";
const _WTI = "WindowTargetId";
const _WTIi = "WindowTaskId";
const _aQE = "awsQueryError";
const _c = "client";
const _e = "error";
const _en = "entries";
const _k = "key";
const _m = "message";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.ssm";
const _se = "server";
const _v = "value";
const _vS = "valueSet";
const _xN = "xmlName";
const n0 = "com.amazonaws.ssm";
const schema_1 = require("@smithy/core/schema");
const errors_1 = require("../models/errors");
const SSMServiceException_1 = require("../models/SSMServiceException");
const _s_registry = schema_1.TypeRegistry.for(_s);
exports.SSMServiceException$ = [-3, _s, "SSMServiceException", 0, [], []];
_s_registry.registerError(exports.SSMServiceException$, SSMServiceException_1.SSMServiceException);
const n0_registry = schema_1.TypeRegistry.for(n0);
exports.AccessDeniedException$ = [-3, n0, _ADE,
    { [_e]: _c },
    [_M],
    [0], 1
];
n0_registry.registerError(exports.AccessDeniedException$, errors_1.AccessDeniedException);
exports.AlreadyExistsException$ = [-3, n0, _AEE,
    { [_aQE]: [`AlreadyExistsException`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.AlreadyExistsException$, errors_1.AlreadyExistsException);
exports.AssociatedInstances$ = [-3, n0, _AI,
    { [_aQE]: [`AssociatedInstances`, 400], [_e]: _c },
    [],
    []
];
n0_registry.registerError(exports.AssociatedInstances$, errors_1.AssociatedInstances);
exports.AssociationAlreadyExists$ = [-3, n0, _AAE,
    { [_aQE]: [`AssociationAlreadyExists`, 400], [_e]: _c },
    [],
    []
];
n0_registry.registerError(exports.AssociationAlreadyExists$, errors_1.AssociationAlreadyExists);
exports.AssociationDoesNotExist$ = [-3, n0, _ADNE,
    { [_aQE]: [`AssociationDoesNotExist`, 404], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.AssociationDoesNotExist$, errors_1.AssociationDoesNotExist);
exports.AssociationExecutionDoesNotExist$ = [-3, n0, _AEDNE,
    { [_aQE]: [`AssociationExecutionDoesNotExist`, 404], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.AssociationExecutionDoesNotExist$, errors_1.AssociationExecutionDoesNotExist);
exports.AssociationLimitExceeded$ = [-3, n0, _ALE,
    { [_aQE]: [`AssociationLimitExceeded`, 400], [_e]: _c },
    [],
    []
];
n0_registry.registerError(exports.AssociationLimitExceeded$, errors_1.AssociationLimitExceeded);
exports.AssociationVersionLimitExceeded$ = [-3, n0, _AVLE,
    { [_aQE]: [`AssociationVersionLimitExceeded`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.AssociationVersionLimitExceeded$, errors_1.AssociationVersionLimitExceeded);
exports.AutomationDefinitionNotApprovedException$ = [-3, n0, _ADNAE,
    { [_aQE]: [`AutomationDefinitionNotApproved`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.AutomationDefinitionNotApprovedException$, errors_1.AutomationDefinitionNotApprovedException);
exports.AutomationDefinitionNotFoundException$ = [-3, n0, _ADNFE,
    { [_aQE]: [`AutomationDefinitionNotFound`, 404], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.AutomationDefinitionNotFoundException$, errors_1.AutomationDefinitionNotFoundException);
exports.AutomationDefinitionVersionNotFoundException$ = [-3, n0, _ADVNFE,
    { [_aQE]: [`AutomationDefinitionVersionNotFound`, 404], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.AutomationDefinitionVersionNotFoundException$, errors_1.AutomationDefinitionVersionNotFoundException);
exports.AutomationExecutionLimitExceededException$ = [-3, n0, _AELEE,
    { [_aQE]: [`AutomationExecutionLimitExceeded`, 429], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.AutomationExecutionLimitExceededException$, errors_1.AutomationExecutionLimitExceededException);
exports.AutomationExecutionNotFoundException$ = [-3, n0, _AENFE,
    { [_aQE]: [`AutomationExecutionNotFound`, 404], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.AutomationExecutionNotFoundException$, errors_1.AutomationExecutionNotFoundException);
exports.AutomationStepNotFoundException$ = [-3, n0, _ASNFE,
    { [_aQE]: [`AutomationStepNotFoundException`, 404], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.AutomationStepNotFoundException$, errors_1.AutomationStepNotFoundException);
exports.ComplianceTypeCountLimitExceededException$ = [-3, n0, _CTCLEE,
    { [_aQE]: [`ComplianceTypeCountLimitExceeded`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.ComplianceTypeCountLimitExceededException$, errors_1.ComplianceTypeCountLimitExceededException);
exports.CustomSchemaCountLimitExceededException$ = [-3, n0, _CSCLEE,
    { [_aQE]: [`CustomSchemaCountLimitExceeded`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.CustomSchemaCountLimitExceededException$, errors_1.CustomSchemaCountLimitExceededException);
exports.DocumentAlreadyExists$ = [-3, n0, _DAE,
    { [_aQE]: [`DocumentAlreadyExists`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.DocumentAlreadyExists$, errors_1.DocumentAlreadyExists);
exports.DocumentLimitExceeded$ = [-3, n0, _DLE,
    { [_aQE]: [`DocumentLimitExceeded`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.DocumentLimitExceeded$, errors_1.DocumentLimitExceeded);
exports.DocumentPermissionLimit$ = [-3, n0, _DPL,
    { [_aQE]: [`DocumentPermissionLimit`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.DocumentPermissionLimit$, errors_1.DocumentPermissionLimit);
exports.DocumentVersionLimitExceeded$ = [-3, n0, _DVLE,
    { [_aQE]: [`DocumentVersionLimitExceeded`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.DocumentVersionLimitExceeded$, errors_1.DocumentVersionLimitExceeded);
exports.DoesNotExistException$ = [-3, n0, _DNEE,
    { [_aQE]: [`DoesNotExistException`, 404], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.DoesNotExistException$, errors_1.DoesNotExistException);
exports.DuplicateDocumentContent$ = [-3, n0, _DDC,
    { [_aQE]: [`DuplicateDocumentContent`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.DuplicateDocumentContent$, errors_1.DuplicateDocumentContent);
exports.DuplicateDocumentVersionName$ = [-3, n0, _DDVN,
    { [_aQE]: [`DuplicateDocumentVersionName`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.DuplicateDocumentVersionName$, errors_1.DuplicateDocumentVersionName);
exports.DuplicateInstanceId$ = [-3, n0, _DII,
    { [_aQE]: [`DuplicateInstanceId`, 404], [_e]: _c },
    [],
    []
];
n0_registry.registerError(exports.DuplicateInstanceId$, errors_1.DuplicateInstanceId);
exports.FeatureNotAvailableException$ = [-3, n0, _FNAE,
    { [_aQE]: [`FeatureNotAvailableException`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.FeatureNotAvailableException$, errors_1.FeatureNotAvailableException);
exports.HierarchyLevelLimitExceededException$ = [-3, n0, _HLLEE,
    { [_aQE]: [`HierarchyLevelLimitExceededException`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.HierarchyLevelLimitExceededException$, errors_1.HierarchyLevelLimitExceededException);
exports.HierarchyTypeMismatchException$ = [-3, n0, _HTME,
    { [_aQE]: [`HierarchyTypeMismatchException`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.HierarchyTypeMismatchException$, errors_1.HierarchyTypeMismatchException);
exports.IdempotentParameterMismatch$ = [-3, n0, _IPM,
    { [_aQE]: [`IdempotentParameterMismatch`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.IdempotentParameterMismatch$, errors_1.IdempotentParameterMismatch);
exports.IncompatiblePolicyException$ = [-3, n0, _IPE,
    { [_aQE]: [`IncompatiblePolicyException`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.IncompatiblePolicyException$, errors_1.IncompatiblePolicyException);
exports.InternalServerError$ = [-3, n0, _ISE,
    { [_aQE]: [`InternalServerError`, 500], [_e]: _se },
    [_M],
    [0]
];
n0_registry.registerError(exports.InternalServerError$, errors_1.InternalServerError);
exports.InvalidActivation$ = [-3, n0, _IA,
    { [_aQE]: [`InvalidActivation`, 404], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidActivation$, errors_1.InvalidActivation);
exports.InvalidActivationId$ = [-3, n0, _IAI,
    { [_aQE]: [`InvalidActivationId`, 404], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidActivationId$, errors_1.InvalidActivationId);
exports.InvalidAggregatorException$ = [-3, n0, _IAE,
    { [_aQE]: [`InvalidAggregator`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidAggregatorException$, errors_1.InvalidAggregatorException);
exports.InvalidAllowedPatternException$ = [-3, n0, _IAPE,
    { [_aQE]: [`InvalidAllowedPatternException`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidAllowedPatternException$, errors_1.InvalidAllowedPatternException);
exports.InvalidAssociation$ = [-3, n0, _IAn,
    { [_aQE]: [`InvalidAssociation`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidAssociation$, errors_1.InvalidAssociation);
exports.InvalidAssociationVersion$ = [-3, n0, _IAV,
    { [_aQE]: [`InvalidAssociationVersion`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidAssociationVersion$, errors_1.InvalidAssociationVersion);
exports.InvalidAutomationExecutionParametersException$ = [-3, n0, _IAEPE,
    { [_aQE]: [`InvalidAutomationExecutionParameters`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidAutomationExecutionParametersException$, errors_1.InvalidAutomationExecutionParametersException);
exports.InvalidAutomationSignalException$ = [-3, n0, _IASE,
    { [_aQE]: [`InvalidAutomationSignalException`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidAutomationSignalException$, errors_1.InvalidAutomationSignalException);
exports.InvalidAutomationStatusUpdateException$ = [-3, n0, _IASUE,
    { [_aQE]: [`InvalidAutomationStatusUpdateException`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidAutomationStatusUpdateException$, errors_1.InvalidAutomationStatusUpdateException);
exports.InvalidCommandId$ = [-3, n0, _ICI,
    { [_aQE]: [`InvalidCommandId`, 404], [_e]: _c },
    [],
    []
];
n0_registry.registerError(exports.InvalidCommandId$, errors_1.InvalidCommandId);
exports.InvalidDeleteInventoryParametersException$ = [-3, n0, _IDIPE,
    { [_aQE]: [`InvalidDeleteInventoryParameters`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidDeleteInventoryParametersException$, errors_1.InvalidDeleteInventoryParametersException);
exports.InvalidDeletionIdException$ = [-3, n0, _IDIE,
    { [_aQE]: [`InvalidDeletionId`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidDeletionIdException$, errors_1.InvalidDeletionIdException);
exports.InvalidDocument$ = [-3, n0, _ID,
    { [_aQE]: [`InvalidDocument`, 404], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidDocument$, errors_1.InvalidDocument);
exports.InvalidDocumentContent$ = [-3, n0, _IDC,
    { [_aQE]: [`InvalidDocumentContent`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidDocumentContent$, errors_1.InvalidDocumentContent);
exports.InvalidDocumentOperation$ = [-3, n0, _IDO,
    { [_aQE]: [`InvalidDocumentOperation`, 403], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidDocumentOperation$, errors_1.InvalidDocumentOperation);
exports.InvalidDocumentSchemaVersion$ = [-3, n0, _IDSV,
    { [_aQE]: [`InvalidDocumentSchemaVersion`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidDocumentSchemaVersion$, errors_1.InvalidDocumentSchemaVersion);
exports.InvalidDocumentType$ = [-3, n0, _IDT,
    { [_aQE]: [`InvalidDocumentType`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidDocumentType$, errors_1.InvalidDocumentType);
exports.InvalidDocumentVersion$ = [-3, n0, _IDV,
    { [_aQE]: [`InvalidDocumentVersion`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidDocumentVersion$, errors_1.InvalidDocumentVersion);
exports.InvalidFilter$ = [-3, n0, _IF,
    { [_aQE]: [`InvalidFilter`, 441], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidFilter$, errors_1.InvalidFilter);
exports.InvalidFilterKey$ = [-3, n0, _IFK,
    { [_aQE]: [`InvalidFilterKey`, 400], [_e]: _c },
    [],
    []
];
n0_registry.registerError(exports.InvalidFilterKey$, errors_1.InvalidFilterKey);
exports.InvalidFilterOption$ = [-3, n0, _IFO,
    { [_aQE]: [`InvalidFilterOption`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidFilterOption$, errors_1.InvalidFilterOption);
exports.InvalidFilterValue$ = [-3, n0, _IFV,
    { [_aQE]: [`InvalidFilterValue`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidFilterValue$, errors_1.InvalidFilterValue);
exports.InvalidInstanceId$ = [-3, n0, _III,
    { [_aQE]: [`InvalidInstanceId`, 404], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidInstanceId$, errors_1.InvalidInstanceId);
exports.InvalidInstanceInformationFilterValue$ = [-3, n0, _IIIFV,
    { [_aQE]: [`InvalidInstanceInformationFilterValue`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidInstanceInformationFilterValue$, errors_1.InvalidInstanceInformationFilterValue);
exports.InvalidInstancePropertyFilterValue$ = [-3, n0, _IIPFV,
    { [_aQE]: [`InvalidInstancePropertyFilterValue`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidInstancePropertyFilterValue$, errors_1.InvalidInstancePropertyFilterValue);
exports.InvalidInventoryGroupException$ = [-3, n0, _IIGE,
    { [_aQE]: [`InvalidInventoryGroup`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidInventoryGroupException$, errors_1.InvalidInventoryGroupException);
exports.InvalidInventoryItemContextException$ = [-3, n0, _IIICE,
    { [_aQE]: [`InvalidInventoryItemContext`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidInventoryItemContextException$, errors_1.InvalidInventoryItemContextException);
exports.InvalidInventoryRequestException$ = [-3, n0, _IIRE,
    { [_aQE]: [`InvalidInventoryRequest`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidInventoryRequestException$, errors_1.InvalidInventoryRequestException);
exports.InvalidItemContentException$ = [-3, n0, _IICE,
    { [_aQE]: [`InvalidItemContent`, 400], [_e]: _c },
    [_TN, _M],
    [0, 0]
];
n0_registry.registerError(exports.InvalidItemContentException$, errors_1.InvalidItemContentException);
exports.InvalidKeyId$ = [-3, n0, _IKI,
    { [_aQE]: [`InvalidKeyId`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidKeyId$, errors_1.InvalidKeyId);
exports.InvalidNextToken$ = [-3, n0, _INT,
    { [_aQE]: [`InvalidNextToken`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidNextToken$, errors_1.InvalidNextToken);
exports.InvalidNotificationConfig$ = [-3, n0, _INC,
    { [_aQE]: [`InvalidNotificationConfig`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidNotificationConfig$, errors_1.InvalidNotificationConfig);
exports.InvalidOptionException$ = [-3, n0, _IOE,
    { [_aQE]: [`InvalidOption`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidOptionException$, errors_1.InvalidOptionException);
exports.InvalidOutputFolder$ = [-3, n0, _IOF,
    { [_aQE]: [`InvalidOutputFolder`, 400], [_e]: _c },
    [],
    []
];
n0_registry.registerError(exports.InvalidOutputFolder$, errors_1.InvalidOutputFolder);
exports.InvalidOutputLocation$ = [-3, n0, _IOL,
    { [_aQE]: [`InvalidOutputLocation`, 400], [_e]: _c },
    [],
    []
];
n0_registry.registerError(exports.InvalidOutputLocation$, errors_1.InvalidOutputLocation);
exports.InvalidParameters$ = [-3, n0, _IP,
    { [_aQE]: [`InvalidParameters`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidParameters$, errors_1.InvalidParameters);
exports.InvalidPermissionType$ = [-3, n0, _IPT,
    { [_aQE]: [`InvalidPermissionType`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidPermissionType$, errors_1.InvalidPermissionType);
exports.InvalidPluginName$ = [-3, n0, _IPN,
    { [_aQE]: [`InvalidPluginName`, 404], [_e]: _c },
    [],
    []
];
n0_registry.registerError(exports.InvalidPluginName$, errors_1.InvalidPluginName);
exports.InvalidPolicyAttributeException$ = [-3, n0, _IPAE,
    { [_aQE]: [`InvalidPolicyAttributeException`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidPolicyAttributeException$, errors_1.InvalidPolicyAttributeException);
exports.InvalidPolicyTypeException$ = [-3, n0, _IPTE,
    { [_aQE]: [`InvalidPolicyTypeException`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidPolicyTypeException$, errors_1.InvalidPolicyTypeException);
exports.InvalidResourceId$ = [-3, n0, _IRI,
    { [_aQE]: [`InvalidResourceId`, 400], [_e]: _c },
    [],
    []
];
n0_registry.registerError(exports.InvalidResourceId$, errors_1.InvalidResourceId);
exports.InvalidResourceType$ = [-3, n0, _IRT,
    { [_aQE]: [`InvalidResourceType`, 400], [_e]: _c },
    [],
    []
];
n0_registry.registerError(exports.InvalidResourceType$, errors_1.InvalidResourceType);
exports.InvalidResultAttributeException$ = [-3, n0, _IRAE,
    { [_aQE]: [`InvalidResultAttribute`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidResultAttributeException$, errors_1.InvalidResultAttributeException);
exports.InvalidRole$ = [-3, n0, _IR,
    { [_aQE]: [`InvalidRole`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidRole$, errors_1.InvalidRole);
exports.InvalidSchedule$ = [-3, n0, _IS,
    { [_aQE]: [`InvalidSchedule`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidSchedule$, errors_1.InvalidSchedule);
exports.InvalidTag$ = [-3, n0, _IT,
    { [_aQE]: [`InvalidTag`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidTag$, errors_1.InvalidTag);
exports.InvalidTarget$ = [-3, n0, _ITn,
    { [_aQE]: [`InvalidTarget`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidTarget$, errors_1.InvalidTarget);
exports.InvalidTargetMaps$ = [-3, n0, _ITM,
    { [_aQE]: [`InvalidTargetMaps`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidTargetMaps$, errors_1.InvalidTargetMaps);
exports.InvalidTypeNameException$ = [-3, n0, _ITNE,
    { [_aQE]: [`InvalidTypeName`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidTypeNameException$, errors_1.InvalidTypeNameException);
exports.InvalidUpdate$ = [-3, n0, _IU,
    { [_aQE]: [`InvalidUpdate`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.InvalidUpdate$, errors_1.InvalidUpdate);
exports.InvocationDoesNotExist$ = [-3, n0, _IDNE,
    { [_aQE]: [`InvocationDoesNotExist`, 400], [_e]: _c },
    [],
    []
];
n0_registry.registerError(exports.InvocationDoesNotExist$, errors_1.InvocationDoesNotExist);
exports.ItemContentMismatchException$ = [-3, n0, _ICME,
    { [_aQE]: [`ItemContentMismatch`, 400], [_e]: _c },
    [_TN, _M],
    [0, 0]
];
n0_registry.registerError(exports.ItemContentMismatchException$, errors_1.ItemContentMismatchException);
exports.ItemSizeLimitExceededException$ = [-3, n0, _ISLEE,
    { [_aQE]: [`ItemSizeLimitExceeded`, 400], [_e]: _c },
    [_TN, _M],
    [0, 0]
];
n0_registry.registerError(exports.ItemSizeLimitExceededException$, errors_1.ItemSizeLimitExceededException);
exports.MalformedResourcePolicyDocumentException$ = [-3, n0, _MRPDE,
    { [_aQE]: [`MalformedResourcePolicyDocumentException`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.MalformedResourcePolicyDocumentException$, errors_1.MalformedResourcePolicyDocumentException);
exports.MaxDocumentSizeExceeded$ = [-3, n0, _MDSE,
    { [_aQE]: [`MaxDocumentSizeExceeded`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.MaxDocumentSizeExceeded$, errors_1.MaxDocumentSizeExceeded);
exports.NoLongerSupportedException$ = [-3, n0, _NLSE,
    { [_aQE]: [`NoLongerSupported`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.NoLongerSupportedException$, errors_1.NoLongerSupportedException);
exports.OpsItemAccessDeniedException$ = [-3, n0, _OIADE,
    { [_aQE]: [`OpsItemAccessDeniedException`, 403], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.OpsItemAccessDeniedException$, errors_1.OpsItemAccessDeniedException);
exports.OpsItemAlreadyExistsException$ = [-3, n0, _OIAEE,
    { [_aQE]: [`OpsItemAlreadyExistsException`, 400], [_e]: _c },
    [_M, _OII],
    [0, 0]
];
n0_registry.registerError(exports.OpsItemAlreadyExistsException$, errors_1.OpsItemAlreadyExistsException);
exports.OpsItemConflictException$ = [-3, n0, _OICE,
    { [_aQE]: [`OpsItemConflictException`, 409], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.OpsItemConflictException$, errors_1.OpsItemConflictException);
exports.OpsItemInvalidParameterException$ = [-3, n0, _OIIPE,
    { [_aQE]: [`OpsItemInvalidParameterException`, 400], [_e]: _c },
    [_PN, _M],
    [64 | 0, 0]
];
n0_registry.registerError(exports.OpsItemInvalidParameterException$, errors_1.OpsItemInvalidParameterException);
exports.OpsItemLimitExceededException$ = [-3, n0, _OILEE,
    { [_aQE]: [`OpsItemLimitExceededException`, 400], [_e]: _c },
    [_RT, _L, _LT, _M],
    [64 | 0, 1, 0, 0]
];
n0_registry.registerError(exports.OpsItemLimitExceededException$, errors_1.OpsItemLimitExceededException);
exports.OpsItemNotFoundException$ = [-3, n0, _OINFE,
    { [_aQE]: [`OpsItemNotFoundException`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.OpsItemNotFoundException$, errors_1.OpsItemNotFoundException);
exports.OpsItemRelatedItemAlreadyExistsException$ = [-3, n0, _OIRIAEE,
    { [_aQE]: [`OpsItemRelatedItemAlreadyExistsException`, 400], [_e]: _c },
    [_M, _RU, _OII],
    [0, 0, 0]
];
n0_registry.registerError(exports.OpsItemRelatedItemAlreadyExistsException$, errors_1.OpsItemRelatedItemAlreadyExistsException);
exports.OpsItemRelatedItemAssociationNotFoundException$ = [-3, n0, _OIRIANFE,
    { [_aQE]: [`OpsItemRelatedItemAssociationNotFoundException`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.OpsItemRelatedItemAssociationNotFoundException$, errors_1.OpsItemRelatedItemAssociationNotFoundException);
exports.OpsMetadataAlreadyExistsException$ = [-3, n0, _OMAEE,
    { [_aQE]: [`OpsMetadataAlreadyExistsException`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.OpsMetadataAlreadyExistsException$, errors_1.OpsMetadataAlreadyExistsException);
exports.OpsMetadataInvalidArgumentException$ = [-3, n0, _OMIAE,
    { [_aQE]: [`OpsMetadataInvalidArgumentException`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.OpsMetadataInvalidArgumentException$, errors_1.OpsMetadataInvalidArgumentException);
exports.OpsMetadataKeyLimitExceededException$ = [-3, n0, _OMKLEE,
    { [_aQE]: [`OpsMetadataKeyLimitExceededException`, 429], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.OpsMetadataKeyLimitExceededException$, errors_1.OpsMetadataKeyLimitExceededException);
exports.OpsMetadataLimitExceededException$ = [-3, n0, _OMLEE,
    { [_aQE]: [`OpsMetadataLimitExceededException`, 429], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.OpsMetadataLimitExceededException$, errors_1.OpsMetadataLimitExceededException);
exports.OpsMetadataNotFoundException$ = [-3, n0, _OMNFE,
    { [_aQE]: [`OpsMetadataNotFoundException`, 404], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.OpsMetadataNotFoundException$, errors_1.OpsMetadataNotFoundException);
exports.OpsMetadataTooManyUpdatesException$ = [-3, n0, _OMTMUE,
    { [_aQE]: [`OpsMetadataTooManyUpdatesException`, 429], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.OpsMetadataTooManyUpdatesException$, errors_1.OpsMetadataTooManyUpdatesException);
exports.ParameterAlreadyExists$ = [-3, n0, _PAE,
    { [_aQE]: [`ParameterAlreadyExists`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ParameterAlreadyExists$, errors_1.ParameterAlreadyExists);
exports.ParameterLimitExceeded$ = [-3, n0, _PLE,
    { [_aQE]: [`ParameterLimitExceeded`, 429], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ParameterLimitExceeded$, errors_1.ParameterLimitExceeded);
exports.ParameterMaxVersionLimitExceeded$ = [-3, n0, _PMVLE,
    { [_aQE]: [`ParameterMaxVersionLimitExceeded`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ParameterMaxVersionLimitExceeded$, errors_1.ParameterMaxVersionLimitExceeded);
exports.ParameterNotFound$ = [-3, n0, _PNF,
    { [_aQE]: [`ParameterNotFound`, 404], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ParameterNotFound$, errors_1.ParameterNotFound);
exports.ParameterPatternMismatchException$ = [-3, n0, _PPME,
    { [_aQE]: [`ParameterPatternMismatchException`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ParameterPatternMismatchException$, errors_1.ParameterPatternMismatchException);
exports.ParameterVersionLabelLimitExceeded$ = [-3, n0, _PVLLE,
    { [_aQE]: [`ParameterVersionLabelLimitExceeded`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ParameterVersionLabelLimitExceeded$, errors_1.ParameterVersionLabelLimitExceeded);
exports.ParameterVersionNotFound$ = [-3, n0, _PVNF,
    { [_aQE]: [`ParameterVersionNotFound`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.ParameterVersionNotFound$, errors_1.ParameterVersionNotFound);
exports.PoliciesLimitExceededException$ = [-3, n0, _PLEE,
    { [_aQE]: [`PoliciesLimitExceededException`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.PoliciesLimitExceededException$, errors_1.PoliciesLimitExceededException);
exports.ResourceDataSyncAlreadyExistsException$ = [-3, n0, _RDSAEE,
    { [_aQE]: [`ResourceDataSyncAlreadyExists`, 400], [_e]: _c },
    [_SN],
    [0]
];
n0_registry.registerError(exports.ResourceDataSyncAlreadyExistsException$, errors_1.ResourceDataSyncAlreadyExistsException);
exports.ResourceDataSyncConflictException$ = [-3, n0, _RDSCE,
    { [_aQE]: [`ResourceDataSyncConflictException`, 409], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.ResourceDataSyncConflictException$, errors_1.ResourceDataSyncConflictException);
exports.ResourceDataSyncCountExceededException$ = [-3, n0, _RDSCEE,
    { [_aQE]: [`ResourceDataSyncCountExceeded`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.ResourceDataSyncCountExceededException$, errors_1.ResourceDataSyncCountExceededException);
exports.ResourceDataSyncInvalidConfigurationException$ = [-3, n0, _RDSICE,
    { [_aQE]: [`ResourceDataSyncInvalidConfiguration`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.ResourceDataSyncInvalidConfigurationException$, errors_1.ResourceDataSyncInvalidConfigurationException);
exports.ResourceDataSyncNotFoundException$ = [-3, n0, _RDSNFE,
    { [_aQE]: [`ResourceDataSyncNotFound`, 404], [_e]: _c },
    [_SN, _ST, _M],
    [0, 0, 0]
];
n0_registry.registerError(exports.ResourceDataSyncNotFoundException$, errors_1.ResourceDataSyncNotFoundException);
exports.ResourceInUseException$ = [-3, n0, _RIUE,
    { [_aQE]: [`ResourceInUseException`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.ResourceInUseException$, errors_1.ResourceInUseException);
exports.ResourceLimitExceededException$ = [-3, n0, _RLEE,
    { [_aQE]: [`ResourceLimitExceededException`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.ResourceLimitExceededException$, errors_1.ResourceLimitExceededException);
exports.ResourceNotFoundException$ = [-3, n0, _RNFE,
    { [_aQE]: [`ResourceNotFoundException`, 404], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.ResourceNotFoundException$, errors_1.ResourceNotFoundException);
exports.ResourcePolicyConflictException$ = [-3, n0, _RPCE,
    { [_aQE]: [`ResourcePolicyConflictException`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.ResourcePolicyConflictException$, errors_1.ResourcePolicyConflictException);
exports.ResourcePolicyInvalidParameterException$ = [-3, n0, _RPIPE,
    { [_aQE]: [`ResourcePolicyInvalidParameterException`, 400], [_e]: _c },
    [_PN, _M],
    [64 | 0, 0]
];
n0_registry.registerError(exports.ResourcePolicyInvalidParameterException$, errors_1.ResourcePolicyInvalidParameterException);
exports.ResourcePolicyLimitExceededException$ = [-3, n0, _RPLEE,
    { [_aQE]: [`ResourcePolicyLimitExceededException`, 400], [_e]: _c },
    [_L, _LT, _M],
    [1, 0, 0]
];
n0_registry.registerError(exports.ResourcePolicyLimitExceededException$, errors_1.ResourcePolicyLimitExceededException);
exports.ResourcePolicyNotFoundException$ = [-3, n0, _RPNFE,
    { [_aQE]: [`ResourcePolicyNotFoundException`, 404], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.ResourcePolicyNotFoundException$, errors_1.ResourcePolicyNotFoundException);
exports.ServiceQuotaExceededException$ = [-3, n0, _SQEE,
    { [_e]: _c },
    [_M, _QC, _SC, _RI, _RTe],
    [0, 0, 0, 0, 0], 3
];
n0_registry.registerError(exports.ServiceQuotaExceededException$, errors_1.ServiceQuotaExceededException);
exports.ServiceSettingNotFound$ = [-3, n0, _SSNF,
    { [_aQE]: [`ServiceSettingNotFound`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.ServiceSettingNotFound$, errors_1.ServiceSettingNotFound);
exports.StatusUnchanged$ = [-3, n0, _SU,
    { [_aQE]: [`StatusUnchanged`, 400], [_e]: _c },
    [],
    []
];
n0_registry.registerError(exports.StatusUnchanged$, errors_1.StatusUnchanged);
exports.SubTypeCountLimitExceededException$ = [-3, n0, _STCLEE,
    { [_aQE]: [`SubTypeCountLimitExceeded`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.SubTypeCountLimitExceededException$, errors_1.SubTypeCountLimitExceededException);
exports.TargetInUseException$ = [-3, n0, _TIUE,
    { [_aQE]: [`TargetInUseException`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.TargetInUseException$, errors_1.TargetInUseException);
exports.TargetNotConnected$ = [-3, n0, _TNC,
    { [_aQE]: [`TargetNotConnected`, 430], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.TargetNotConnected$, errors_1.TargetNotConnected);
exports.ThrottlingException$ = [-3, n0, _TE,
    { [_e]: _c },
    [_M, _QC, _SC],
    [0, 0, 0], 1
];
n0_registry.registerError(exports.ThrottlingException$, errors_1.ThrottlingException);
exports.TooManyTagsError$ = [-3, n0, _TMTE,
    { [_aQE]: [`TooManyTagsError`, 400], [_e]: _c },
    [],
    []
];
n0_registry.registerError(exports.TooManyTagsError$, errors_1.TooManyTagsError);
exports.TooManyUpdates$ = [-3, n0, _TMU,
    { [_aQE]: [`TooManyUpdates`, 429], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.TooManyUpdates$, errors_1.TooManyUpdates);
exports.TotalSizeLimitExceededException$ = [-3, n0, _TSLEE,
    { [_aQE]: [`TotalSizeLimitExceeded`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.TotalSizeLimitExceededException$, errors_1.TotalSizeLimitExceededException);
exports.UnsupportedCalendarException$ = [-3, n0, _UCE,
    { [_aQE]: [`UnsupportedCalendarException`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.UnsupportedCalendarException$, errors_1.UnsupportedCalendarException);
exports.UnsupportedFeatureRequiredException$ = [-3, n0, _UFRE,
    { [_aQE]: [`UnsupportedFeatureRequiredException`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.UnsupportedFeatureRequiredException$, errors_1.UnsupportedFeatureRequiredException);
exports.UnsupportedInventoryItemContextException$ = [-3, n0, _UIICE,
    { [_aQE]: [`UnsupportedInventoryItemContext`, 400], [_e]: _c },
    [_TN, _M],
    [0, 0]
];
n0_registry.registerError(exports.UnsupportedInventoryItemContextException$, errors_1.UnsupportedInventoryItemContextException);
exports.UnsupportedInventorySchemaVersionException$ = [-3, n0, _UISVE,
    { [_aQE]: [`UnsupportedInventorySchemaVersion`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.UnsupportedInventorySchemaVersionException$, errors_1.UnsupportedInventorySchemaVersionException);
exports.UnsupportedOperatingSystem$ = [-3, n0, _UOS,
    { [_aQE]: [`UnsupportedOperatingSystem`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.UnsupportedOperatingSystem$, errors_1.UnsupportedOperatingSystem);
exports.UnsupportedOperationException$ = [-3, n0, _UOE,
    { [_aQE]: [`UnsupportedOperation`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.UnsupportedOperationException$, errors_1.UnsupportedOperationException);
exports.UnsupportedParameterType$ = [-3, n0, _UPT,
    { [_aQE]: [`UnsupportedParameterType`, 400], [_e]: _c },
    [_m],
    [0]
];
n0_registry.registerError(exports.UnsupportedParameterType$, errors_1.UnsupportedParameterType);
exports.UnsupportedPlatformType$ = [-3, n0, _UPTn,
    { [_aQE]: [`UnsupportedPlatformType`, 400], [_e]: _c },
    [_M],
    [0]
];
n0_registry.registerError(exports.UnsupportedPlatformType$, errors_1.UnsupportedPlatformType);
exports.ValidationException$ = [-3, n0, _VE,
    { [_aQE]: [`ValidationException`, 400], [_e]: _c },
    [_M, _RC],
    [0, 0]
];
n0_registry.registerError(exports.ValidationException$, errors_1.ValidationException);
exports.errorTypeRegistries = [
    _s_registry,
    n0_registry,
];
var AccessKeySecretType = [0, n0, _AKST, 8, 0];
var IPAddress = [0, n0, _IPA, 8, 0];
var MaintenanceWindowDescription = [0, n0, _MWD, 8, 0];
var MaintenanceWindowExecutionTaskInvocationParameters = [0, n0, _MWETIP, 8, 0];
var MaintenanceWindowLambdaPayload = [0, n0, _MWLP, 8, 21];
var MaintenanceWindowStepFunctionsInput = [0, n0, _MWSFI, 8, 0];
var MaintenanceWindowTaskParameterValue = [0, n0, _MWTPV, 8, 0];
var OwnerInformation = [0, n0, _OI, 8, 0];
var PatchSourceConfiguration = [0, n0, _PSC, 8, 0];
var PSParameterValue = [0, n0, _PSPV, 8, 0];
var SessionTokenType = [0, n0, _STT, 8, 0];
exports.AccountSharingInfo$ = [3, n0, _ASI,
    0,
    [_AIc, _SDV],
    [0, 0]
];
exports.Activation$ = [3, n0, _A,
    0,
    [_AIct, _D, _DIN, _IRa, _RL, _RCe, _ED, _E, _CD, _T],
    [0, 0, 0, 0, 1, 1, 4, 2, 4, () => TagList]
];
exports.AddTagsToResourceRequest$ = [3, n0, _ATTRR,
    0,
    [_RTe, _RI, _T],
    [0, 0, () => TagList], 3
];
exports.AddTagsToResourceResult$ = [3, n0, _ATTRRd,
    0,
    [],
    []
];
exports.Alarm$ = [3, n0, _Al,
    0,
    [_N],
    [0], 1
];
exports.AlarmConfiguration$ = [3, n0, _AC,
    0,
    [_Ala, _IPAF],
    [() => AlarmList, 2], 1
];
exports.AlarmStateInformation$ = [3, n0, _ASIl,
    0,
    [_N, _S],
    [0, 0], 2
];
exports.AssociateOpsItemRelatedItemRequest$ = [3, n0, _AOIRIR,
    0,
    [_OII, _AT, _RTe, _RU],
    [0, 0, 0, 0], 4
];
exports.AssociateOpsItemRelatedItemResponse$ = [3, n0, _AOIRIRs,
    0,
    [_AIs],
    [0]
];
exports.Association$ = [3, n0, _As,
    0,
    [_N, _II, _AIs, _AV, _DV, _Ta, _LED, _O, _SE, _AN, _SO, _Du, _TM],
    [0, 0, 0, 0, 0, () => Targets, 4, () => exports.AssociationOverview$, 0, 0, 1, 1, [1, n0, _TM, 0, [2, n0, _TMa, 0, 0, 64 | 0]]]
];
exports.AssociationDescription$ = [3, n0, _AD,
    0,
    [_N, _II, _AV, _Da, _LUAD, _St, _O, _DV, _ATPN, _P, _AIs, _Ta, _SE, _OL, _LED, _LSED, _AN, _ME, _MC, _CS, _SCy, _AOACI, _CN, _TL, _SO, _Du, _TM, _AC, _TA, _ADAR],
    [0, 0, 0, 4, 4, () => exports.AssociationStatus$, () => exports.AssociationOverview$, 0, 0, [() => _Parameters, 0], 0, () => Targets, 0, () => exports.InstanceAssociationOutputLocation$, 4, 4, 0, 0, 0, 0, 0, 2, 64 | 0, () => TargetLocations, 1, 1, [1, n0, _TM, 0, [2, n0, _TMa, 0, 0, 64 | 0]], () => exports.AlarmConfiguration$, () => AlarmStateInformationList, 0]
];
exports.AssociationExecution$ = [3, n0, _AE,
    0,
    [_AIs, _AV, _EI, _St, _DS, _CT, _LED, _RCBS, _AC, _TA],
    [0, 0, 0, 0, 0, 4, 4, 0, () => exports.AlarmConfiguration$, () => AlarmStateInformationList]
];
exports.AssociationExecutionFilter$ = [3, n0, _AEF,
    0,
    [_K, _V, _Ty],
    [0, 0, 0], 3
];
exports.AssociationExecutionTarget$ = [3, n0, _AET,
    0,
    [_AIs, _AV, _EI, _RI, _RTe, _St, _DS, _LED, _OS],
    [0, 0, 0, 0, 0, 0, 0, 4, () => exports.OutputSource$]
];
exports.AssociationExecutionTargetsFilter$ = [3, n0, _AETF,
    0,
    [_K, _V],
    [0, 0], 2
];
exports.AssociationFilter$ = [3, n0, _AF,
    0,
    [_k, _v],
    [0, 0], 2
];
exports.AssociationOverview$ = [3, n0, _AO,
    0,
    [_St, _DS, _ASAC],
    [0, 0, 128 | 1]
];
exports.AssociationStatus$ = [3, n0, _AS,
    0,
    [_Da, _N, _M, _AId],
    [4, 0, 0, 0], 3
];
exports.AssociationVersionInfo$ = [3, n0, _AVI,
    0,
    [_AIs, _AV, _CD, _N, _DV, _P, _Ta, _SE, _OL, _AN, _ME, _MC, _CS, _SCy, _AOACI, _CN, _TL, _SO, _Du, _TM, _ADAR],
    [0, 0, 4, 0, 0, [() => _Parameters, 0], () => Targets, 0, () => exports.InstanceAssociationOutputLocation$, 0, 0, 0, 0, 0, 2, 64 | 0, () => TargetLocations, 1, 1, [1, n0, _TM, 0, [2, n0, _TMa, 0, 0, 64 | 0]], 0]
];
exports.AttachmentContent$ = [3, n0, _ACt,
    0,
    [_N, _Si, _H, _HT, _U],
    [0, 1, 0, 0, 0]
];
exports.AttachmentInformation$ = [3, n0, _AIt,
    0,
    [_N],
    [0]
];
exports.AttachmentsSource$ = [3, n0, _ASt,
    0,
    [_K, _Va, _N],
    [0, 64 | 0, 0]
];
exports.AutomationExecution$ = [3, n0, _AEu,
    0,
    [_AEI, _DN, _DV, _EST, _EET, _AES, _SEt, _SET, _P, _Ou, _FM, _Mo, _PAEI, _EB, _CSN, _CA, _TPN, _Ta, _TM, _RTes, _MC, _ME, _Tar, _TL, _PC, _AC, _TA, _TLURL, _ASu, _STc, _R, _OII, _AIs, _CRN, _Var],
    [0, 0, 0, 4, 4, 0, () => StepExecutionList, 2, [2, n0, _APM, 0, 0, 64 | 0], [2, n0, _APM, 0, 0, 64 | 0], 0, 0, 0, 0, 0, 0, 0, () => Targets, [1, n0, _TM, 0, [2, n0, _TMa, 0, 0, 64 | 0]], () => exports.ResolvedTargets$, 0, 0, 0, () => TargetLocations, () => exports.ProgressCounters$, () => exports.AlarmConfiguration$, () => AlarmStateInformationList, 0, 0, 4, () => Runbooks, 0, 0, 0, [2, n0, _APM, 0, 0, 64 | 0]]
];
exports.AutomationExecutionFilter$ = [3, n0, _AEFu,
    0,
    [_K, _Va],
    [0, 64 | 0], 2
];
exports.AutomationExecutionInputs$ = [3, n0, _AEIu,
    0,
    [_P, _TPN, _Ta, _TM, _TL, _TLURL],
    [[2, n0, _APM, 0, 0, 64 | 0], 0, () => Targets, [1, n0, _TM, 0, [2, n0, _TMa, 0, 0, 64 | 0]], () => TargetLocations, 0]
];
exports.AutomationExecutionMetadata$ = [3, n0, _AEM,
    0,
    [_AEI, _DN, _DV, _AES, _EST, _EET, _EB, _LF, _Ou, _Mo, _PAEI, _CSN, _CA, _FM, _TPN, _Ta, _TM, _RTes, _MC, _ME, _Tar, _ATu, _AC, _TA, _TLURL, _ASu, _STc, _R, _OII, _AIs, _CRN],
    [0, 0, 0, 0, 4, 4, 0, 0, [2, n0, _APM, 0, 0, 64 | 0], 0, 0, 0, 0, 0, 0, () => Targets, [1, n0, _TM, 0, [2, n0, _TMa, 0, 0, 64 | 0]], () => exports.ResolvedTargets$, 0, 0, 0, 0, () => exports.AlarmConfiguration$, () => AlarmStateInformationList, 0, 0, 4, () => Runbooks, 0, 0, 0]
];
exports.AutomationExecutionPreview$ = [3, n0, _AEP,
    0,
    [_SP, _Re, _TP, _TAo],
    [128 | 1, 64 | 0, () => TargetPreviewList, 1]
];
exports.BaselineOverride$ = [3, n0, _BO,
    0,
    [_OSp, _GF, _AR, _AP, _APCL, _RP, _RPA, _APENS, _So, _ASUCS],
    [0, () => exports.PatchFilterGroup$, () => exports.PatchRuleGroup$, 64 | 0, 0, 64 | 0, 0, 2, [() => PatchSourceList, 0], 0]
];
exports.CancelCommandRequest$ = [3, n0, _CCR,
    0,
    [_CI, _IIn],
    [0, 64 | 0], 1
];
exports.CancelCommandResult$ = [3, n0, _CCRa,
    0,
    [],
    []
];
exports.CancelMaintenanceWindowExecutionRequest$ = [3, n0, _CMWER,
    0,
    [_WEI],
    [0], 1
];
exports.CancelMaintenanceWindowExecutionResult$ = [3, n0, _CMWERa,
    0,
    [_WEI],
    [0]
];
exports.CloudWatchOutputConfig$ = [3, n0, _CWOC,
    0,
    [_CWLGN, _CWOE],
    [0, 2]
];
exports.Command$ = [3, n0, _C,
    0,
    [_CI, _DN, _DV, _Co, _EA, _P, _IIn, _Ta, _RDT, _St, _SD, _OSR, _OSBN, _OSKP, _MC, _ME, _TC, _CC, _EC, _DTOC, _SR, _NC, _CWOC, _TS, _AC, _TA],
    [0, 0, 0, 0, 4, [() => _Parameters, 0], 64 | 0, () => Targets, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, () => exports.NotificationConfig$, () => exports.CloudWatchOutputConfig$, 1, () => exports.AlarmConfiguration$, () => AlarmStateInformationList]
];
exports.CommandFilter$ = [3, n0, _CF,
    0,
    [_k, _v],
    [0, 0], 2
];
exports.CommandInvocation$ = [3, n0, _CIo,
    0,
    [_CI, _II, _IN, _Co, _DN, _DV, _RDT, _St, _SD, _TO, _SOU, _SEU, _CP, _SR, _NC, _CWOC],
    [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, () => CommandPluginList, 0, () => exports.NotificationConfig$, () => exports.CloudWatchOutputConfig$]
];
exports.CommandPlugin$ = [3, n0, _CPo,
    0,
    [_N, _St, _SD, _RCes, _RSDT, _RFDT, _Out, _SOU, _SEU, _OSR, _OSBN, _OSKP],
    [0, 0, 0, 1, 4, 4, 0, 0, 0, 0, 0, 0]
];
exports.ComplianceExecutionSummary$ = [3, n0, _CES,
    0,
    [_ET, _EI, _ETx],
    [4, 0, 0], 1
];
exports.ComplianceItem$ = [3, n0, _CIom,
    0,
    [_CTo, _RTe, _RI, _I, _Ti, _St, _Se, _ES, _De],
    [0, 0, 0, 0, 0, 0, 0, () => exports.ComplianceExecutionSummary$, 128 | 0]
];
exports.ComplianceItemEntry$ = [3, n0, _CIE,
    0,
    [_Se, _St, _I, _Ti, _De],
    [0, 0, 0, 0, 128 | 0], 2
];
exports.ComplianceStringFilter$ = [3, n0, _CSF,
    0,
    [_K, _Va, _Ty],
    [0, [() => ComplianceStringFilterValueList, 0], 0]
];
exports.ComplianceSummaryItem$ = [3, n0, _CSI,
    0,
    [_CTo, _CSo, _NCS],
    [0, () => exports.CompliantSummary$, () => exports.NonCompliantSummary$]
];
exports.CompliantSummary$ = [3, n0, _CSo,
    0,
    [_CCo, _SS],
    [1, () => exports.SeveritySummary$]
];
exports.CreateActivationRequest$ = [3, n0, _CAR,
    0,
    [_IRa, _D, _DIN, _RL, _ED, _T, _RM],
    [0, 0, 0, 1, 4, () => TagList, () => RegistrationMetadataList], 1
];
exports.CreateActivationResult$ = [3, n0, _CARr,
    0,
    [_AIct, _ACc],
    [0, 0]
];
exports.CreateAssociationBatchRequest$ = [3, n0, _CABR,
    0,
    [_En, _ADAR],
    [[() => CreateAssociationBatchRequestEntries, 0], 0], 1
];
exports.CreateAssociationBatchRequestEntry$ = [3, n0, _CABRE,
    0,
    [_N, _II, _P, _ATPN, _DV, _Ta, _SE, _OL, _AN, _ME, _MC, _CS, _SCy, _AOACI, _CN, _TL, _SO, _Du, _TM, _AC],
    [0, 0, [() => _Parameters, 0], 0, 0, () => Targets, 0, () => exports.InstanceAssociationOutputLocation$, 0, 0, 0, 0, 0, 2, 64 | 0, () => TargetLocations, 1, 1, [1, n0, _TM, 0, [2, n0, _TMa, 0, 0, 64 | 0]], () => exports.AlarmConfiguration$], 1
];
exports.CreateAssociationBatchResult$ = [3, n0, _CABRr,
    0,
    [_Su, _F],
    [[() => AssociationDescriptionList, 0], [() => FailedCreateAssociationList, 0]]
];
exports.CreateAssociationRequest$ = [3, n0, _CARre,
    0,
    [_N, _DV, _II, _P, _Ta, _SE, _OL, _AN, _ATPN, _ME, _MC, _CS, _SCy, _AOACI, _CN, _TL, _SO, _Du, _TM, _T, _AC, _ADAR],
    [0, 0, 0, [() => _Parameters, 0], () => Targets, 0, () => exports.InstanceAssociationOutputLocation$, 0, 0, 0, 0, 0, 0, 2, 64 | 0, () => TargetLocations, 1, 1, [1, n0, _TM, 0, [2, n0, _TMa, 0, 0, 64 | 0]], () => TagList, () => exports.AlarmConfiguration$, 0], 1
];
exports.CreateAssociationResult$ = [3, n0, _CARrea,
    0,
    [_AD],
    [[() => exports.AssociationDescription$, 0]]
];
exports.CreateDocumentRequest$ = [3, n0, _CDR,
    0,
    [_Con, _N, _Req, _At, _DNi, _VN, _DT, _DF, _TT, _T],
    [0, 0, () => DocumentRequiresList, () => AttachmentsSourceList, 0, 0, 0, 0, 0, () => TagList], 2
];
exports.CreateDocumentResult$ = [3, n0, _CDRr,
    0,
    [_DD],
    [[() => exports.DocumentDescription$, 0]]
];
exports.CreateMaintenanceWindowRequest$ = [3, n0, _CMWR,
    0,
    [_N, _Sc, _Du, _Cu, _AUT, _D, _SDt, _EDn, _STch, _SO, _CTl, _T],
    [0, 0, 1, 1, 2, [() => MaintenanceWindowDescription, 0], 0, 0, 0, 1, [0, 4], () => TagList], 5
];
exports.CreateMaintenanceWindowResult$ = [3, n0, _CMWRr,
    0,
    [_WI],
    [0]
];
exports.CreateOpsItemRequest$ = [3, n0, _COIR,
    0,
    [_D, _Sou, _Ti, _OIT, _OD, _No, _Pr, _ROI, _T, _Ca, _Se, _AST, _AETc, _PST, _PET, _AIc],
    [0, 0, 0, 0, () => OpsItemOperationalData, () => OpsItemNotifications, 1, () => RelatedOpsItems, () => TagList, 0, 0, 4, 4, 4, 4, 0], 3
];
exports.CreateOpsItemResponse$ = [3, n0, _COIRr,
    0,
    [_OII, _OIA],
    [0, 0]
];
exports.CreateOpsMetadataRequest$ = [3, n0, _COMR,
    0,
    [_RI, _Me, _T],
    [0, () => MetadataMap, () => TagList], 1
];
exports.CreateOpsMetadataResult$ = [3, n0, _COMRr,
    0,
    [_OMA],
    [0]
];
exports.CreatePatchBaselineRequest$ = [3, n0, _CPBR,
    0,
    [_N, _OSp, _GF, _AR, _AP, _APCL, _APENS, _RP, _RPA, _D, _So, _ASUCS, _CTl, _T],
    [0, 0, () => exports.PatchFilterGroup$, () => exports.PatchRuleGroup$, 64 | 0, 0, 2, 64 | 0, 0, 0, [() => PatchSourceList, 0], 0, [0, 4], () => TagList], 1
];
exports.CreatePatchBaselineResult$ = [3, n0, _CPBRr,
    0,
    [_BI],
    [0]
];
exports.CreateResourceDataSyncRequest$ = [3, n0, _CRDSR,
    0,
    [_SN, _SDe, _ST, _SSy],
    [0, () => exports.ResourceDataSyncS3Destination$, 0, () => exports.ResourceDataSyncSource$], 1
];
exports.CreateResourceDataSyncResult$ = [3, n0, _CRDSRr,
    0,
    [],
    []
];
exports.Credentials$ = [3, n0, _Cr,
    0,
    [_AKI, _SAK, _STe, _ETxp],
    [0, [() => AccessKeySecretType, 0], [() => SessionTokenType, 0], 4], 4
];
exports.DeleteActivationRequest$ = [3, n0, _DAR,
    0,
    [_AIct],
    [0], 1
];
exports.DeleteActivationResult$ = [3, n0, _DARe,
    0,
    [],
    []
];
exports.DeleteAssociationRequest$ = [3, n0, _DARel,
    0,
    [_N, _II, _AIs],
    [0, 0, 0]
];
exports.DeleteAssociationResult$ = [3, n0, _DARele,
    0,
    [],
    []
];
exports.DeleteDocumentRequest$ = [3, n0, _DDR,
    0,
    [_N, _DV, _VN, _Fo],
    [0, 0, 0, 2], 1
];
exports.DeleteDocumentResult$ = [3, n0, _DDRe,
    0,
    [],
    []
];
exports.DeleteInventoryRequest$ = [3, n0, _DIR,
    0,
    [_TN, _SDO, _DR, _CTl],
    [0, 0, 2, [0, 4]], 1
];
exports.DeleteInventoryResult$ = [3, n0, _DIRe,
    0,
    [_DI, _TN, _DSe],
    [0, 0, () => exports.InventoryDeletionSummary$]
];
exports.DeleteMaintenanceWindowRequest$ = [3, n0, _DMWR,
    0,
    [_WI],
    [0], 1
];
exports.DeleteMaintenanceWindowResult$ = [3, n0, _DMWRe,
    0,
    [_WI],
    [0]
];
exports.DeleteOpsItemRequest$ = [3, n0, _DOIR,
    0,
    [_OII],
    [0], 1
];
exports.DeleteOpsItemResponse$ = [3, n0, _DOIRe,
    0,
    [],
    []
];
exports.DeleteOpsMetadataRequest$ = [3, n0, _DOMR,
    0,
    [_OMA],
    [0], 1
];
exports.DeleteOpsMetadataResult$ = [3, n0, _DOMRe,
    0,
    [],
    []
];
exports.DeleteParameterRequest$ = [3, n0, _DPR,
    0,
    [_N],
    [0], 1
];
exports.DeleteParameterResult$ = [3, n0, _DPRe,
    0,
    [],
    []
];
exports.DeleteParametersRequest$ = [3, n0, _DPRel,
    0,
    [_Na],
    [64 | 0], 1
];
exports.DeleteParametersResult$ = [3, n0, _DPRele,
    0,
    [_DP, _IP],
    [64 | 0, 64 | 0]
];
exports.DeletePatchBaselineRequest$ = [3, n0, _DPBR,
    0,
    [_BI],
    [0], 1
];
exports.DeletePatchBaselineResult$ = [3, n0, _DPBRe,
    0,
    [_BI],
    [0]
];
exports.DeleteResourceDataSyncRequest$ = [3, n0, _DRDSR,
    0,
    [_SN, _ST],
    [0, 0], 1
];
exports.DeleteResourceDataSyncResult$ = [3, n0, _DRDSRe,
    0,
    [],
    []
];
exports.DeleteResourcePolicyRequest$ = [3, n0, _DRPR,
    0,
    [_RA, _PI, _PH],
    [0, 0, 0], 3
];
exports.DeleteResourcePolicyResponse$ = [3, n0, _DRPRe,
    0,
    [],
    []
];
exports.DeregisterManagedInstanceRequest$ = [3, n0, _DMIR,
    0,
    [_II],
    [0], 1
];
exports.DeregisterManagedInstanceResult$ = [3, n0, _DMIRe,
    0,
    [],
    []
];
exports.DeregisterPatchBaselineForPatchGroupRequest$ = [3, n0, _DPBFPGR,
    0,
    [_BI, _PG],
    [0, 0], 2
];
exports.DeregisterPatchBaselineForPatchGroupResult$ = [3, n0, _DPBFPGRe,
    0,
    [_BI, _PG],
    [0, 0]
];
exports.DeregisterTargetFromMaintenanceWindowRequest$ = [3, n0, _DTFMWR,
    0,
    [_WI, _WTI, _Sa],
    [0, 0, 2], 2
];
exports.DeregisterTargetFromMaintenanceWindowResult$ = [3, n0, _DTFMWRe,
    0,
    [_WI, _WTI],
    [0, 0]
];
exports.DeregisterTaskFromMaintenanceWindowRequest$ = [3, n0, _DTFMWRer,
    0,
    [_WI, _WTIi],
    [0, 0], 2
];
exports.DeregisterTaskFromMaintenanceWindowResult$ = [3, n0, _DTFMWRere,
    0,
    [_WI, _WTIi],
    [0, 0]
];
exports.DescribeActivationsFilter$ = [3, n0, _DAF,
    0,
    [_FK, _FV],
    [0, 64 | 0]
];
exports.DescribeActivationsRequest$ = [3, n0, _DARes,
    0,
    [_Fi, _MR, _NT],
    [() => DescribeActivationsFilterList, 1, 0]
];
exports.DescribeActivationsResult$ = [3, n0, _DAResc,
    0,
    [_AL, _NT],
    [() => ActivationList, 0]
];
exports.DescribeAssociationExecutionsRequest$ = [3, n0, _DAER,
    0,
    [_AIs, _Fi, _MR, _NT],
    [0, [() => AssociationExecutionFilterList, 0], 1, 0], 1
];
exports.DescribeAssociationExecutionsResult$ = [3, n0, _DAERe,
    0,
    [_AEs, _NT],
    [[() => AssociationExecutionsList, 0], 0]
];
exports.DescribeAssociationExecutionTargetsRequest$ = [3, n0, _DAETR,
    0,
    [_AIs, _EI, _Fi, _MR, _NT],
    [0, 0, [() => AssociationExecutionTargetsFilterList, 0], 1, 0], 2
];
exports.DescribeAssociationExecutionTargetsResult$ = [3, n0, _DAETRe,
    0,
    [_AETs, _NT],
    [[() => AssociationExecutionTargetsList, 0], 0]
];
exports.DescribeAssociationRequest$ = [3, n0, _DARescr,
    0,
    [_N, _II, _AIs, _AV],
    [0, 0, 0, 0]
];
exports.DescribeAssociationResult$ = [3, n0, _DARescri,
    0,
    [_AD],
    [[() => exports.AssociationDescription$, 0]]
];
exports.DescribeAutomationExecutionsRequest$ = [3, n0, _DAERes,
    0,
    [_Fi, _MR, _NT],
    [() => AutomationExecutionFilterList, 1, 0]
];
exports.DescribeAutomationExecutionsResult$ = [3, n0, _DAEResc,
    0,
    [_AEML, _NT],
    [() => AutomationExecutionMetadataList, 0]
];
exports.DescribeAutomationStepExecutionsRequest$ = [3, n0, _DASER,
    0,
    [_AEI, _Fi, _NT, _MR, _RO],
    [0, () => StepExecutionFilterList, 0, 1, 2], 1
];
exports.DescribeAutomationStepExecutionsResult$ = [3, n0, _DASERe,
    0,
    [_SEt, _NT],
    [() => StepExecutionList, 0]
];
exports.DescribeAvailablePatchesRequest$ = [3, n0, _DAPR,
    0,
    [_Fi, _MR, _NT],
    [() => PatchOrchestratorFilterList, 1, 0]
];
exports.DescribeAvailablePatchesResult$ = [3, n0, _DAPRe,
    0,
    [_Pa, _NT],
    [() => PatchList, 0]
];
exports.DescribeDocumentPermissionRequest$ = [3, n0, _DDPR,
    0,
    [_N, _PT, _MR, _NT],
    [0, 0, 1, 0], 2
];
exports.DescribeDocumentPermissionResponse$ = [3, n0, _DDPRe,
    0,
    [_AIcc, _ASIL, _NT],
    [[() => AccountIdList, 0], [() => AccountSharingInfoList, 0], 0]
];
exports.DescribeDocumentRequest$ = [3, n0, _DDRes,
    0,
    [_N, _DV, _VN],
    [0, 0, 0], 1
];
exports.DescribeDocumentResult$ = [3, n0, _DDResc,
    0,
    [_Do],
    [[() => exports.DocumentDescription$, 0]]
];
exports.DescribeEffectiveInstanceAssociationsRequest$ = [3, n0, _DEIAR,
    0,
    [_II, _MR, _NT],
    [0, 1, 0], 1
];
exports.DescribeEffectiveInstanceAssociationsResult$ = [3, n0, _DEIARe,
    0,
    [_Ass, _NT],
    [() => InstanceAssociationList, 0]
];
exports.DescribeEffectivePatchesForPatchBaselineRequest$ = [3, n0, _DEPFPBR,
    0,
    [_BI, _MR, _NT],
    [0, 1, 0], 1
];
exports.DescribeEffectivePatchesForPatchBaselineResult$ = [3, n0, _DEPFPBRe,
    0,
    [_EP, _NT],
    [() => EffectivePatchList, 0]
];
exports.DescribeInstanceAssociationsStatusRequest$ = [3, n0, _DIASR,
    0,
    [_II, _MR, _NT],
    [0, 1, 0], 1
];
exports.DescribeInstanceAssociationsStatusResult$ = [3, n0, _DIASRe,
    0,
    [_IASI, _NT],
    [() => InstanceAssociationStatusInfos, 0]
];
exports.DescribeInstanceInformationRequest$ = [3, n0, _DIIR,
    0,
    [_IIFL, _Fi, _MR, _NT],
    [[() => InstanceInformationFilterList, 0], [() => InstanceInformationStringFilterList, 0], 1, 0]
];
exports.DescribeInstanceInformationResult$ = [3, n0, _DIIRe,
    0,
    [_IIL, _NT],
    [[() => InstanceInformationList, 0], 0]
];
exports.DescribeInstancePatchesRequest$ = [3, n0, _DIPR,
    0,
    [_II, _Fi, _NT, _MR],
    [0, () => PatchOrchestratorFilterList, 0, 1], 1
];
exports.DescribeInstancePatchesResult$ = [3, n0, _DIPRe,
    0,
    [_Pa, _NT],
    [() => PatchComplianceDataList, 0]
];
exports.DescribeInstancePatchStatesForPatchGroupRequest$ = [3, n0, _DIPSFPGR,
    0,
    [_PG, _Fi, _NT, _MR],
    [0, () => InstancePatchStateFilterList, 0, 1], 1
];
exports.DescribeInstancePatchStatesForPatchGroupResult$ = [3, n0, _DIPSFPGRe,
    0,
    [_IPS, _NT],
    [[() => InstancePatchStatesList, 0], 0]
];
exports.DescribeInstancePatchStatesRequest$ = [3, n0, _DIPSR,
    0,
    [_IIn, _NT, _MR],
    [64 | 0, 0, 1], 1
];
exports.DescribeInstancePatchStatesResult$ = [3, n0, _DIPSRe,
    0,
    [_IPS, _NT],
    [[() => InstancePatchStateList, 0], 0]
];
exports.DescribeInstancePropertiesRequest$ = [3, n0, _DIPRes,
    0,
    [_IPFL, _FWO, _MR, _NT],
    [[() => InstancePropertyFilterList, 0], [() => InstancePropertyStringFilterList, 0], 1, 0]
];
exports.DescribeInstancePropertiesResult$ = [3, n0, _DIPResc,
    0,
    [_IPn, _NT],
    [[() => InstanceProperties, 0], 0]
];
exports.DescribeInventoryDeletionsRequest$ = [3, n0, _DIDR,
    0,
    [_DI, _NT, _MR],
    [0, 0, 1]
];
exports.DescribeInventoryDeletionsResult$ = [3, n0, _DIDRe,
    0,
    [_IDn, _NT],
    [() => InventoryDeletionsList, 0]
];
exports.DescribeMaintenanceWindowExecutionsRequest$ = [3, n0, _DMWER,
    0,
    [_WI, _Fi, _MR, _NT],
    [0, () => MaintenanceWindowFilterList, 1, 0], 1
];
exports.DescribeMaintenanceWindowExecutionsResult$ = [3, n0, _DMWERe,
    0,
    [_WE, _NT],
    [() => MaintenanceWindowExecutionList, 0]
];
exports.DescribeMaintenanceWindowExecutionTaskInvocationsRequest$ = [3, n0, _DMWETIR,
    0,
    [_WEI, _TI, _Fi, _MR, _NT],
    [0, 0, () => MaintenanceWindowFilterList, 1, 0], 2
];
exports.DescribeMaintenanceWindowExecutionTaskInvocationsResult$ = [3, n0, _DMWETIRe,
    0,
    [_WETII, _NT],
    [[() => MaintenanceWindowExecutionTaskInvocationIdentityList, 0], 0]
];
exports.DescribeMaintenanceWindowExecutionTasksRequest$ = [3, n0, _DMWETR,
    0,
    [_WEI, _Fi, _MR, _NT],
    [0, () => MaintenanceWindowFilterList, 1, 0], 1
];
exports.DescribeMaintenanceWindowExecutionTasksResult$ = [3, n0, _DMWETRe,
    0,
    [_WETI, _NT],
    [() => MaintenanceWindowExecutionTaskIdentityList, 0]
];
exports.DescribeMaintenanceWindowScheduleRequest$ = [3, n0, _DMWSR,
    0,
    [_WI, _Ta, _RTe, _Fi, _MR, _NT],
    [0, () => Targets, 0, () => PatchOrchestratorFilterList, 1, 0]
];
exports.DescribeMaintenanceWindowScheduleResult$ = [3, n0, _DMWSRe,
    0,
    [_SWE, _NT],
    [() => ScheduledWindowExecutionList, 0]
];
exports.DescribeMaintenanceWindowsForTargetRequest$ = [3, n0, _DMWFTR,
    0,
    [_Ta, _RTe, _MR, _NT],
    [() => Targets, 0, 1, 0], 2
];
exports.DescribeMaintenanceWindowsForTargetResult$ = [3, n0, _DMWFTRe,
    0,
    [_WIi, _NT],
    [() => MaintenanceWindowsForTargetList, 0]
];
exports.DescribeMaintenanceWindowsRequest$ = [3, n0, _DMWRes,
    0,
    [_Fi, _MR, _NT],
    [() => MaintenanceWindowFilterList, 1, 0]
];
exports.DescribeMaintenanceWindowsResult$ = [3, n0, _DMWResc,
    0,
    [_WIi, _NT],
    [[() => MaintenanceWindowIdentityList, 0], 0]
];
exports.DescribeMaintenanceWindowTargetsRequest$ = [3, n0, _DMWTR,
    0,
    [_WI, _Fi, _MR, _NT],
    [0, () => MaintenanceWindowFilterList, 1, 0], 1
];
exports.DescribeMaintenanceWindowTargetsResult$ = [3, n0, _DMWTRe,
    0,
    [_Ta, _NT],
    [[() => MaintenanceWindowTargetList, 0], 0]
];
exports.DescribeMaintenanceWindowTasksRequest$ = [3, n0, _DMWTRes,
    0,
    [_WI, _Fi, _MR, _NT],
    [0, () => MaintenanceWindowFilterList, 1, 0], 1
];
exports.DescribeMaintenanceWindowTasksResult$ = [3, n0, _DMWTResc,
    0,
    [_Tas, _NT],
    [[() => MaintenanceWindowTaskList, 0], 0]
];
exports.DescribeOpsItemsRequest$ = [3, n0, _DOIRes,
    0,
    [_OIF, _MR, _NT],
    [() => OpsItemFilters, 1, 0]
];
exports.DescribeOpsItemsResponse$ = [3, n0, _DOIResc,
    0,
    [_NT, _OIS],
    [0, () => OpsItemSummaries]
];
exports.DescribeParametersRequest$ = [3, n0, _DPRes,
    0,
    [_Fi, _PF, _MR, _NT, _Sh],
    [() => ParametersFilterList, () => ParameterStringFilterList, 1, 0, 2]
];
exports.DescribeParametersResult$ = [3, n0, _DPResc,
    0,
    [_P, _NT],
    [() => ParameterMetadataList, 0]
];
exports.DescribePatchBaselinesRequest$ = [3, n0, _DPBRes,
    0,
    [_Fi, _MR, _NT],
    [() => PatchOrchestratorFilterList, 1, 0]
];
exports.DescribePatchBaselinesResult$ = [3, n0, _DPBResc,
    0,
    [_BIa, _NT],
    [() => PatchBaselineIdentityList, 0]
];
exports.DescribePatchGroupsRequest$ = [3, n0, _DPGR,
    0,
    [_MR, _Fi, _NT],
    [1, () => PatchOrchestratorFilterList, 0]
];
exports.DescribePatchGroupsResult$ = [3, n0, _DPGRe,
    0,
    [_Ma, _NT],
    [() => PatchGroupPatchBaselineMappingList, 0]
];
exports.DescribePatchGroupStateRequest$ = [3, n0, _DPGSR,
    0,
    [_PG],
    [0], 1
];
exports.DescribePatchGroupStateResult$ = [3, n0, _DPGSRe,
    0,
    [_In, _IWIP, _IWIOP, _IWIPRP, _IWIRP, _IWMP, _IWFP, _IWNAP, _IWUNAP, _IWCNCP, _IWSNCP, _IWONCP, _IWASU],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
exports.DescribePatchPropertiesRequest$ = [3, n0, _DPPR,
    0,
    [_OSp, _Pro, _PS, _MR, _NT],
    [0, 0, 0, 1, 0], 2
];
exports.DescribePatchPropertiesResult$ = [3, n0, _DPPRe,
    0,
    [_Prop, _NT],
    [[1, n0, _PPL, 0, 128 | 0], 0]
];
exports.DescribeSessionsRequest$ = [3, n0, _DSR,
    0,
    [_S, _MR, _NT, _Fi],
    [0, 1, 0, () => SessionFilterList], 1
];
exports.DescribeSessionsResponse$ = [3, n0, _DSRe,
    0,
    [_Ses, _NT],
    [() => SessionList, 0]
];
exports.DisassociateOpsItemRelatedItemRequest$ = [3, n0, _DOIRIR,
    0,
    [_OII, _AIs],
    [0, 0], 2
];
exports.DisassociateOpsItemRelatedItemResponse$ = [3, n0, _DOIRIRi,
    0,
    [],
    []
];
exports.DocumentDefaultVersionDescription$ = [3, n0, _DDVD,
    0,
    [_N, _DVe, _DVN],
    [0, 0, 0]
];
exports.DocumentDescription$ = [3, n0, _DD,
    0,
    [_Sha, _H, _HT, _N, _DNi, _VN, _Ow, _CD, _St, _SI, _DV, _D, _P, _PTl, _DT, _SV, _LV, _DVe, _DF, _TT, _T, _AItt, _Req, _Au, _RIe, _AVp, _PRV, _RS, _Ca, _CE],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, [() => DocumentParameterList, 0], [() => PlatformTypeList, 0], 0, 0, 0, 0, 0, 0, () => TagList, [() => AttachmentInformationList, 0], () => DocumentRequiresList, 0, [() => ReviewInformationList, 0], 0, 0, 0, 64 | 0, 64 | 0]
];
exports.DocumentFilter$ = [3, n0, _DFo,
    0,
    [_k, _v],
    [0, 0], 2
];
exports.DocumentIdentifier$ = [3, n0, _DIo,
    0,
    [_N, _CD, _DNi, _Ow, _VN, _PTl, _DV, _DT, _SV, _DF, _TT, _T, _Req, _RS, _Au],
    [0, 4, 0, 0, 0, [() => PlatformTypeList, 0], 0, 0, 0, 0, 0, () => TagList, () => DocumentRequiresList, 0, 0]
];
exports.DocumentKeyValuesFilter$ = [3, n0, _DKVF,
    0,
    [_K, _Va],
    [0, 64 | 0]
];
exports.DocumentMetadataResponseInfo$ = [3, n0, _DMRI,
    0,
    [_RR],
    [() => DocumentReviewerResponseList]
];
exports.DocumentParameter$ = [3, n0, _DPo,
    0,
    [_N, _Ty, _D, _DVef],
    [0, 0, 0, 0]
];
exports.DocumentRequires$ = [3, n0, _DRo,
    0,
    [_N, _Ve, _RTeq, _VN],
    [0, 0, 0, 0], 1
];
exports.DocumentReviewCommentSource$ = [3, n0, _DRCS,
    0,
    [_Ty, _Con],
    [0, 0]
];
exports.DocumentReviewerResponseSource$ = [3, n0, _DRRS,
    0,
    [_CTr, _UT, _RS, _Co, _Rev],
    [4, 4, 0, () => DocumentReviewCommentList, 0]
];
exports.DocumentReviews$ = [3, n0, _DRoc,
    0,
    [_Ac, _Co],
    [0, () => DocumentReviewCommentList], 1
];
exports.DocumentVersionInfo$ = [3, n0, _DVI,
    0,
    [_N, _DNi, _DV, _VN, _CD, _IDVs, _DF, _St, _SI, _RS],
    [0, 0, 0, 0, 4, 2, 0, 0, 0, 0]
];
exports.EffectivePatch$ = [3, n0, _EPf,
    0,
    [_Pat, _PSa],
    [() => exports.Patch$, () => exports.PatchStatus$]
];
exports.FailedCreateAssociation$ = [3, n0, _FCA,
    0,
    [_Ent, _M, _Fa],
    [[() => exports.CreateAssociationBatchRequestEntry$, 0], 0, 0]
];
exports.FailureDetails$ = [3, n0, _FD,
    0,
    [_FS, _FT, _De],
    [0, 0, [2, n0, _APM, 0, 0, 64 | 0]]
];
exports.GetAccessTokenRequest$ = [3, n0, _GATR,
    0,
    [_ARI],
    [0], 1
];
exports.GetAccessTokenResponse$ = [3, n0, _GATRe,
    0,
    [_Cr, _ARS],
    [[() => exports.Credentials$, 0], 0]
];
exports.GetAutomationExecutionRequest$ = [3, n0, _GAER,
    0,
    [_AEI],
    [0], 1
];
exports.GetAutomationExecutionResult$ = [3, n0, _GAERe,
    0,
    [_AEu],
    [() => exports.AutomationExecution$]
];
exports.GetCalendarStateRequest$ = [3, n0, _GCSR,
    0,
    [_CN, _ATt],
    [64 | 0, 0], 1
];
exports.GetCalendarStateResponse$ = [3, n0, _GCSRe,
    0,
    [_S, _ATt, _NTT],
    [0, 0, 0]
];
exports.GetCommandInvocationRequest$ = [3, n0, _GCIR,
    0,
    [_CI, _II, _PNl],
    [0, 0, 0], 2
];
exports.GetCommandInvocationResult$ = [3, n0, _GCIRe,
    0,
    [_CI, _II, _Co, _DN, _DV, _PNl, _RCes, _ESDT, _EETx, _EEDT, _St, _SD, _SOC, _SOU, _SEC, _SEU, _CWOC],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => exports.CloudWatchOutputConfig$]
];
exports.GetConnectionStatusRequest$ = [3, n0, _GCSRet,
    0,
    [_Tar],
    [0], 1
];
exports.GetConnectionStatusResponse$ = [3, n0, _GCSReto,
    0,
    [_Tar, _St],
    [0, 0]
];
exports.GetDefaultPatchBaselineRequest$ = [3, n0, _GDPBR,
    0,
    [_OSp],
    [0]
];
exports.GetDefaultPatchBaselineResult$ = [3, n0, _GDPBRe,
    0,
    [_BI, _OSp],
    [0, 0]
];
exports.GetDeployablePatchSnapshotForInstanceRequest$ = [3, n0, _GDPSFIR,
    0,
    [_II, _SIn, _BO, _USDSE],
    [0, 0, [() => exports.BaselineOverride$, 0], 2], 2
];
exports.GetDeployablePatchSnapshotForInstanceResult$ = [3, n0, _GDPSFIRe,
    0,
    [_II, _SIn, _SDU, _Prod],
    [0, 0, 0, 0]
];
exports.GetDocumentRequest$ = [3, n0, _GDR,
    0,
    [_N, _VN, _DV, _DF],
    [0, 0, 0, 0], 1
];
exports.GetDocumentResult$ = [3, n0, _GDRe,
    0,
    [_N, _CD, _DNi, _VN, _DV, _St, _SI, _Con, _DT, _DF, _Req, _ACtt, _RS],
    [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, () => DocumentRequiresList, [() => AttachmentContentList, 0], 0]
];
exports.GetExecutionPreviewRequest$ = [3, n0, _GEPR,
    0,
    [_EPI],
    [0], 1
];
exports.GetExecutionPreviewResponse$ = [3, n0, _GEPRe,
    0,
    [_EPI, _EAn, _St, _SM, _EPx],
    [0, 4, 0, 0, () => exports.ExecutionPreview$]
];
exports.GetInventoryRequest$ = [3, n0, _GIR,
    0,
    [_Fi, _Ag, _RAe, _NT, _MR],
    [[() => InventoryFilterList, 0], [() => InventoryAggregatorList, 0], [() => ResultAttributeList, 0], 0, 1]
];
exports.GetInventoryResult$ = [3, n0, _GIRe,
    0,
    [_Enti, _NT],
    [[() => InventoryResultEntityList, 0], 0]
];
exports.GetInventorySchemaRequest$ = [3, n0, _GISR,
    0,
    [_TN, _NT, _MR, _Agg, _STu],
    [0, 0, 1, 2, 2]
];
exports.GetInventorySchemaResult$ = [3, n0, _GISRe,
    0,
    [_Sch, _NT],
    [[() => InventoryItemSchemaResultList, 0], 0]
];
exports.GetMaintenanceWindowExecutionRequest$ = [3, n0, _GMWER,
    0,
    [_WEI],
    [0], 1
];
exports.GetMaintenanceWindowExecutionResult$ = [3, n0, _GMWERe,
    0,
    [_WEI, _TIa, _St, _SD, _STt, _ETn],
    [0, 64 | 0, 0, 0, 4, 4]
];
exports.GetMaintenanceWindowExecutionTaskInvocationRequest$ = [3, n0, _GMWETIR,
    0,
    [_WEI, _TI, _IInv],
    [0, 0, 0], 3
];
exports.GetMaintenanceWindowExecutionTaskInvocationResult$ = [3, n0, _GMWETIRe,
    0,
    [_WEI, _TEI, _IInv, _EI, _TTa, _P, _St, _SD, _STt, _ETn, _OI, _WTI],
    [0, 0, 0, 0, 0, [() => MaintenanceWindowExecutionTaskInvocationParameters, 0], 0, 0, 4, 4, [() => OwnerInformation, 0], 0]
];
exports.GetMaintenanceWindowExecutionTaskRequest$ = [3, n0, _GMWETR,
    0,
    [_WEI, _TI],
    [0, 0], 2
];
exports.GetMaintenanceWindowExecutionTaskResult$ = [3, n0, _GMWETRe,
    0,
    [_WEI, _TEI, _TAa, _SR, _Ty, _TPa, _Pr, _MC, _ME, _St, _SD, _STt, _ETn, _AC, _TA],
    [0, 0, 0, 0, 0, [() => MaintenanceWindowTaskParametersList, 0], 1, 0, 0, 0, 0, 4, 4, () => exports.AlarmConfiguration$, () => AlarmStateInformationList]
];
exports.GetMaintenanceWindowRequest$ = [3, n0, _GMWR,
    0,
    [_WI],
    [0], 1
];
exports.GetMaintenanceWindowResult$ = [3, n0, _GMWRe,
    0,
    [_WI, _N, _D, _SDt, _EDn, _Sc, _STch, _SO, _NET, _Du, _Cu, _AUT, _Ena, _CD, _MD],
    [0, 0, [() => MaintenanceWindowDescription, 0], 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 4, 4]
];
exports.GetMaintenanceWindowTaskRequest$ = [3, n0, _GMWTR,
    0,
    [_WI, _WTIi],
    [0, 0], 2
];
exports.GetMaintenanceWindowTaskResult$ = [3, n0, _GMWTRe,
    0,
    [_WI, _WTIi, _Ta, _TAa, _SRA, _TTa, _TPa, _TIP, _Pr, _MC, _ME, _LI, _N, _D, _CB, _AC],
    [0, 0, () => Targets, 0, 0, 0, [() => MaintenanceWindowTaskParameters, 0], [() => exports.MaintenanceWindowTaskInvocationParameters$, 0], 1, 0, 0, () => exports.LoggingInfo$, 0, [() => MaintenanceWindowDescription, 0], 0, () => exports.AlarmConfiguration$]
];
exports.GetOpsItemRequest$ = [3, n0, _GOIR,
    0,
    [_OII, _OIA],
    [0, 0], 1
];
exports.GetOpsItemResponse$ = [3, n0, _GOIRe,
    0,
    [_OIp],
    [() => exports.OpsItem$]
];
exports.GetOpsMetadataRequest$ = [3, n0, _GOMR,
    0,
    [_OMA, _MR, _NT],
    [0, 1, 0], 1
];
exports.GetOpsMetadataResult$ = [3, n0, _GOMRe,
    0,
    [_RI, _Me, _NT],
    [0, () => MetadataMap, 0]
];
exports.GetOpsSummaryRequest$ = [3, n0, _GOSR,
    0,
    [_SN, _Fi, _Ag, _RAe, _NT, _MR],
    [0, [() => OpsFilterList, 0], [() => OpsAggregatorList, 0], [() => OpsResultAttributeList, 0], 0, 1]
];
exports.GetOpsSummaryResult$ = [3, n0, _GOSRe,
    0,
    [_Enti, _NT],
    [[() => OpsEntityList, 0], 0]
];
exports.GetParameterHistoryRequest$ = [3, n0, _GPHR,
    0,
    [_N, _WD, _MR, _NT],
    [0, 2, 1, 0], 1
];
exports.GetParameterHistoryResult$ = [3, n0, _GPHRe,
    0,
    [_P, _NT],
    [[() => ParameterHistoryList, 0], 0]
];
exports.GetParameterRequest$ = [3, n0, _GPR,
    0,
    [_N, _WD],
    [0, 2], 1
];
exports.GetParameterResult$ = [3, n0, _GPRe,
    0,
    [_Par],
    [[() => exports.Parameter$, 0]]
];
exports.GetParametersByPathRequest$ = [3, n0, _GPBPR,
    0,
    [_Path, _Rec, _PF, _WD, _MR, _NT],
    [0, 2, () => ParameterStringFilterList, 2, 1, 0], 1
];
exports.GetParametersByPathResult$ = [3, n0, _GPBPRe,
    0,
    [_P, _NT],
    [[() => ParameterList, 0], 0]
];
exports.GetParametersRequest$ = [3, n0, _GPRet,
    0,
    [_Na, _WD],
    [64 | 0, 2], 1
];
exports.GetParametersResult$ = [3, n0, _GPReta,
    0,
    [_P, _IP],
    [[() => ParameterList, 0], 64 | 0]
];
exports.GetPatchBaselineForPatchGroupRequest$ = [3, n0, _GPBFPGR,
    0,
    [_PG, _OSp],
    [0, 0], 1
];
exports.GetPatchBaselineForPatchGroupResult$ = [3, n0, _GPBFPGRe,
    0,
    [_BI, _PG, _OSp],
    [0, 0, 0]
];
exports.GetPatchBaselineRequest$ = [3, n0, _GPBR,
    0,
    [_BI],
    [0], 1
];
exports.GetPatchBaselineResult$ = [3, n0, _GPBRe,
    0,
    [_BI, _N, _OSp, _GF, _AR, _AP, _APCL, _APENS, _RP, _RPA, _PGa, _CD, _MD, _D, _So, _ASUCS],
    [0, 0, 0, () => exports.PatchFilterGroup$, () => exports.PatchRuleGroup$, 64 | 0, 0, 2, 64 | 0, 0, 64 | 0, 4, 4, 0, [() => PatchSourceList, 0], 0]
];
exports.GetResourcePoliciesRequest$ = [3, n0, _GRPR,
    0,
    [_RA, _NT, _MR],
    [0, 0, 1], 1
];
exports.GetResourcePoliciesResponse$ = [3, n0, _GRPRe,
    0,
    [_NT, _Po],
    [0, () => GetResourcePoliciesResponseEntries]
];
exports.GetResourcePoliciesResponseEntry$ = [3, n0, _GRPRE,
    0,
    [_PI, _PH, _Pol],
    [0, 0, 0]
];
exports.GetServiceSettingRequest$ = [3, n0, _GSSR,
    0,
    [_SIe],
    [0], 1
];
exports.GetServiceSettingResult$ = [3, n0, _GSSRe,
    0,
    [_SSe],
    [() => exports.ServiceSetting$]
];
exports.InstanceAggregatedAssociationOverview$ = [3, n0, _IAAO,
    0,
    [_DS, _IASAC],
    [0, 128 | 1]
];
exports.InstanceAssociation$ = [3, n0, _IAns,
    0,
    [_AIs, _II, _Con, _AV],
    [0, 0, 0, 0]
];
exports.InstanceAssociationOutputLocation$ = [3, n0, _IAOL,
    0,
    [_SL],
    [() => exports.S3OutputLocation$]
];
exports.InstanceAssociationOutputUrl$ = [3, n0, _IAOU,
    0,
    [_SOUu],
    [() => exports.S3OutputUrl$]
];
exports.InstanceAssociationStatusInfo$ = [3, n0, _IASIn,
    0,
    [_AIs, _N, _DV, _AV, _II, _EDx, _St, _DS, _ES, _ECr, _OU, _AN],
    [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, () => exports.InstanceAssociationOutputUrl$, 0]
];
exports.InstanceInfo$ = [3, n0, _IIns,
    0,
    [_ATg, _AVg, _CNo, _ISn, _IAp, _MS, _PTla, _PNla, _PV, _RTe],
    [0, 0, 0, 0, [() => IPAddress, 0], 0, 0, 0, 0, 0]
];
exports.InstanceInformation$ = [3, n0, _IInst,
    0,
    [_II, _PSi, _LPDT, _AVg, _ILV, _PTla, _PNla, _PV, _AIct, _IRa, _RD, _RTe, _N, _IPA, _CNo, _AS, _LAED, _LSAED, _AO, _SIo, _STo],
    [0, 0, 4, 0, 2, 0, 0, 0, 0, 0, 4, 0, 0, [() => IPAddress, 0], 0, 0, 4, 4, () => exports.InstanceAggregatedAssociationOverview$, 0, 0]
];
exports.InstanceInformationFilter$ = [3, n0, _IIF,
    0,
    [_k, _vS],
    [0, [() => InstanceInformationFilterValueSet, 0]], 2
];
exports.InstanceInformationStringFilter$ = [3, n0, _IISF,
    0,
    [_K, _Va],
    [0, [() => InstanceInformationFilterValueSet, 0]], 2
];
exports.InstancePatchState$ = [3, n0, _IPSn,
    0,
    [_II, _PG, _BI, _OST, _OET, _Op, _SIn, _IOLn, _OI, _IC, _IOC, _IPRC, _IRC, _MCi, _FC, _UNAC, _NAC, _ASUC, _LNRIOT, _ROe, _CNCC, _SNCC, _ONCC],
    [0, 0, 0, 4, 4, 0, 0, 0, [() => OwnerInformation, 0], 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 1, 1, 1], 6
];
exports.InstancePatchStateFilter$ = [3, n0, _IPSF,
    0,
    [_K, _Va, _Ty],
    [0, 64 | 0, 0], 3
];
exports.InstanceProperty$ = [3, n0, _IPns,
    0,
    [_N, _II, _ITns, _IRn, _KN, _ISns, _Ar, _IPA, _LTa, _PSi, _LPDT, _AVg, _PTla, _PNla, _PV, _AIct, _IRa, _RD, _RTe, _CNo, _AS, _LAED, _LSAED, _AO, _SIo, _STo],
    [0, 0, 0, 0, 0, 0, 0, [() => IPAddress, 0], 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 4, () => exports.InstanceAggregatedAssociationOverview$, 0, 0]
];
exports.InstancePropertyFilter$ = [3, n0, _IPF,
    0,
    [_k, _vS],
    [0, [() => InstancePropertyFilterValueSet, 0]], 2
];
exports.InstancePropertyStringFilter$ = [3, n0, _IPSFn,
    0,
    [_K, _Va, _Ope],
    [0, [() => InstancePropertyFilterValueSet, 0], 0], 2
];
exports.InventoryAggregator$ = [3, n0, _IAnv,
    0,
    [_Ex, _Ag, _G],
    [0, [() => InventoryAggregatorList, 0], [() => InventoryGroupList, 0]]
];
exports.InventoryDeletionStatusItem$ = [3, n0, _IDSI,
    0,
    [_DI, _TN, _DST, _LS, _LSM, _DSe, _LSUT],
    [0, 0, 4, 0, 0, () => exports.InventoryDeletionSummary$, 4]
];
exports.InventoryDeletionSummary$ = [3, n0, _IDS,
    0,
    [_TCo, _RCem, _SIu],
    [1, 1, () => InventoryDeletionSummaryItems]
];
exports.InventoryDeletionSummaryItem$ = [3, n0, _IDSIn,
    0,
    [_Ve, _Cou, _RCem],
    [0, 1, 1]
];
exports.InventoryFilter$ = [3, n0, _IFn,
    0,
    [_K, _Va, _Ty],
    [0, [() => InventoryFilterValueList, 0], 0], 2
];
exports.InventoryGroup$ = [3, n0, _IG,
    0,
    [_N, _Fi],
    [0, [() => InventoryFilterList, 0]], 2
];
exports.InventoryItem$ = [3, n0, _IInve,
    0,
    [_TN, _SV, _CTa, _CH, _Con, _Cont],
    [0, 0, 0, 0, [1, n0, _IIEL, 0, 128 | 0], 128 | 0], 3
];
exports.InventoryItemAttribute$ = [3, n0, _IIA,
    0,
    [_N, _DTa],
    [0, 0], 2
];
exports.InventoryItemSchema$ = [3, n0, _IIS,
    0,
    [_TN, _Att, _Ve, _DNi],
    [0, [() => InventoryItemAttributeList, 0], 0, 0], 2
];
exports.InventoryResultEntity$ = [3, n0, _IRE,
    0,
    [_I, _Dat],
    [0, () => InventoryResultItemMap]
];
exports.InventoryResultItem$ = [3, n0, _IRIn,
    0,
    [_TN, _SV, _Con, _CTa, _CH],
    [0, 0, [1, n0, _IIEL, 0, 128 | 0], 0, 0], 3
];
exports.LabelParameterVersionRequest$ = [3, n0, _LPVR,
    0,
    [_N, _La, _PVa],
    [0, 64 | 0, 1], 2
];
exports.LabelParameterVersionResult$ = [3, n0, _LPVRa,
    0,
    [_IL, _PVa],
    [64 | 0, 1]
];
exports.ListAssociationsRequest$ = [3, n0, _LAR,
    0,
    [_AFL, _MR, _NT],
    [[() => AssociationFilterList, 0], 1, 0]
];
exports.ListAssociationsResult$ = [3, n0, _LARi,
    0,
    [_Ass, _NT],
    [[() => AssociationList, 0], 0]
];
exports.ListAssociationVersionsRequest$ = [3, n0, _LAVR,
    0,
    [_AIs, _MR, _NT],
    [0, 1, 0], 1
];
exports.ListAssociationVersionsResult$ = [3, n0, _LAVRi,
    0,
    [_AVs, _NT],
    [[() => AssociationVersionList, 0], 0]
];
exports.ListCommandInvocationsRequest$ = [3, n0, _LCIR,
    0,
    [_CI, _II, _MR, _NT, _Fi, _De],
    [0, 0, 1, 0, () => CommandFilterList, 2]
];
exports.ListCommandInvocationsResult$ = [3, n0, _LCIRi,
    0,
    [_CIomm, _NT],
    [() => CommandInvocationList, 0]
];
exports.ListCommandsRequest$ = [3, n0, _LCR,
    0,
    [_CI, _II, _MR, _NT, _Fi],
    [0, 0, 1, 0, () => CommandFilterList]
];
exports.ListCommandsResult$ = [3, n0, _LCRi,
    0,
    [_Com, _NT],
    [[() => CommandList, 0], 0]
];
exports.ListComplianceItemsRequest$ = [3, n0, _LCIRis,
    0,
    [_Fi, _RIes, _RT, _NT, _MR],
    [[() => ComplianceStringFilterList, 0], 64 | 0, 64 | 0, 0, 1]
];
exports.ListComplianceItemsResult$ = [3, n0, _LCIRist,
    0,
    [_CIomp, _NT],
    [[() => ComplianceItemList, 0], 0]
];
exports.ListComplianceSummariesRequest$ = [3, n0, _LCSR,
    0,
    [_Fi, _NT, _MR],
    [[() => ComplianceStringFilterList, 0], 0, 1]
];
exports.ListComplianceSummariesResult$ = [3, n0, _LCSRi,
    0,
    [_CSIo, _NT],
    [[() => ComplianceSummaryItemList, 0], 0]
];
exports.ListDocumentMetadataHistoryRequest$ = [3, n0, _LDMHR,
    0,
    [_N, _Me, _DV, _NT, _MR],
    [0, 0, 0, 0, 1], 2
];
exports.ListDocumentMetadataHistoryResponse$ = [3, n0, _LDMHRi,
    0,
    [_N, _DV, _Au, _Me, _NT],
    [0, 0, 0, () => exports.DocumentMetadataResponseInfo$, 0]
];
exports.ListDocumentsRequest$ = [3, n0, _LDR,
    0,
    [_DFL, _Fi, _MR, _NT],
    [[() => DocumentFilterList, 0], () => DocumentKeyValuesFilterList, 1, 0]
];
exports.ListDocumentsResult$ = [3, n0, _LDRi,
    0,
    [_DIoc, _NT],
    [[() => DocumentIdentifierList, 0], 0]
];
exports.ListDocumentVersionsRequest$ = [3, n0, _LDVR,
    0,
    [_N, _MR, _NT],
    [0, 1, 0], 1
];
exports.ListDocumentVersionsResult$ = [3, n0, _LDVRi,
    0,
    [_DVo, _NT],
    [() => DocumentVersionList, 0]
];
exports.ListInventoryEntriesRequest$ = [3, n0, _LIER,
    0,
    [_II, _TN, _Fi, _NT, _MR],
    [0, 0, [() => InventoryFilterList, 0], 0, 1], 2
];
exports.ListInventoryEntriesResult$ = [3, n0, _LIERi,
    0,
    [_TN, _II, _SV, _CTa, _En, _NT],
    [0, 0, 0, 0, [1, n0, _IIEL, 0, 128 | 0], 0]
];
exports.ListNodesRequest$ = [3, n0, _LNR,
    0,
    [_SN, _Fi, _NT, _MR],
    [0, [() => NodeFilterList, 0], 0, 1]
];
exports.ListNodesResult$ = [3, n0, _LNRi,
    0,
    [_Nod, _NT],
    [[() => NodeList, 0], 0]
];
exports.ListNodesSummaryRequest$ = [3, n0, _LNSR,
    0,
    [_Ag, _SN, _Fi, _NT, _MR],
    [[() => NodeAggregatorList, 0], 0, [() => NodeFilterList, 0], 0, 1], 1
];
exports.ListNodesSummaryResult$ = [3, n0, _LNSRi,
    0,
    [_Sum, _NT],
    [[1, n0, _NSL, 0, 128 | 0], 0]
];
exports.ListOpsItemEventsRequest$ = [3, n0, _LOIER,
    0,
    [_Fi, _MR, _NT],
    [() => OpsItemEventFilters, 1, 0]
];
exports.ListOpsItemEventsResponse$ = [3, n0, _LOIERi,
    0,
    [_NT, _Summ],
    [0, () => OpsItemEventSummaries]
];
exports.ListOpsItemRelatedItemsRequest$ = [3, n0, _LOIRIR,
    0,
    [_OII, _Fi, _MR, _NT],
    [0, () => OpsItemRelatedItemsFilters, 1, 0]
];
exports.ListOpsItemRelatedItemsResponse$ = [3, n0, _LOIRIRi,
    0,
    [_NT, _Summ],
    [0, () => OpsItemRelatedItemSummaries]
];
exports.ListOpsMetadataRequest$ = [3, n0, _LOMR,
    0,
    [_Fi, _MR, _NT],
    [() => OpsMetadataFilterList, 1, 0]
];
exports.ListOpsMetadataResult$ = [3, n0, _LOMRi,
    0,
    [_OML, _NT],
    [() => OpsMetadataList, 0]
];
exports.ListResourceComplianceSummariesRequest$ = [3, n0, _LRCSR,
    0,
    [_Fi, _NT, _MR],
    [[() => ComplianceStringFilterList, 0], 0, 1]
];
exports.ListResourceComplianceSummariesResult$ = [3, n0, _LRCSRi,
    0,
    [_RCSI, _NT],
    [[() => ResourceComplianceSummaryItemList, 0], 0]
];
exports.ListResourceDataSyncRequest$ = [3, n0, _LRDSR,
    0,
    [_ST, _NT, _MR],
    [0, 0, 1]
];
exports.ListResourceDataSyncResult$ = [3, n0, _LRDSRi,
    0,
    [_RDSI, _NT],
    [() => ResourceDataSyncItemList, 0]
];
exports.ListTagsForResourceRequest$ = [3, n0, _LTFRR,
    0,
    [_RTe, _RI],
    [0, 0], 2
];
exports.ListTagsForResourceResult$ = [3, n0, _LTFRRi,
    0,
    [_TLa],
    [() => TagList]
];
exports.LoggingInfo$ = [3, n0, _LI,
    0,
    [_SBN, _SRe, _SKP],
    [0, 0, 0], 2
];
exports.MaintenanceWindowAutomationParameters$ = [3, n0, _MWAP,
    0,
    [_DV, _P],
    [0, [2, n0, _APM, 0, 0, 64 | 0]]
];
exports.MaintenanceWindowExecution$ = [3, n0, _MWE,
    0,
    [_WI, _WEI, _St, _SD, _STt, _ETn],
    [0, 0, 0, 0, 4, 4]
];
exports.MaintenanceWindowExecutionTaskIdentity$ = [3, n0, _MWETI,
    0,
    [_WEI, _TEI, _St, _SD, _STt, _ETn, _TAa, _TTa, _AC, _TA],
    [0, 0, 0, 0, 4, 4, 0, 0, () => exports.AlarmConfiguration$, () => AlarmStateInformationList]
];
exports.MaintenanceWindowExecutionTaskInvocationIdentity$ = [3, n0, _MWETII,
    0,
    [_WEI, _TEI, _IInv, _EI, _TTa, _P, _St, _SD, _STt, _ETn, _OI, _WTI],
    [0, 0, 0, 0, 0, [() => MaintenanceWindowExecutionTaskInvocationParameters, 0], 0, 0, 4, 4, [() => OwnerInformation, 0], 0]
];
exports.MaintenanceWindowFilter$ = [3, n0, _MWF,
    0,
    [_K, _Va],
    [0, 64 | 0]
];
exports.MaintenanceWindowIdentity$ = [3, n0, _MWI,
    0,
    [_WI, _N, _D, _Ena, _Du, _Cu, _Sc, _STch, _SO, _EDn, _SDt, _NET],
    [0, 0, [() => MaintenanceWindowDescription, 0], 2, 1, 1, 0, 0, 1, 0, 0, 0]
];
exports.MaintenanceWindowIdentityForTarget$ = [3, n0, _MWIFT,
    0,
    [_WI, _N],
    [0, 0]
];
exports.MaintenanceWindowLambdaParameters$ = [3, n0, _MWLPa,
    0,
    [_CCl, _Q, _Pay],
    [0, 0, [() => MaintenanceWindowLambdaPayload, 0]]
];
exports.MaintenanceWindowRunCommandParameters$ = [3, n0, _MWRCP,
    0,
    [_Co, _CWOC, _DH, _DHT, _DV, _NC, _OSBN, _OSKP, _P, _SRA, _TS],
    [0, () => exports.CloudWatchOutputConfig$, 0, 0, 0, () => exports.NotificationConfig$, 0, 0, [() => _Parameters, 0], 0, 1]
];
exports.MaintenanceWindowStepFunctionsParameters$ = [3, n0, _MWSFP,
    0,
    [_Inp, _N],
    [[() => MaintenanceWindowStepFunctionsInput, 0], 0]
];
exports.MaintenanceWindowTarget$ = [3, n0, _MWT,
    0,
    [_WI, _WTI, _RTe, _Ta, _OI, _N, _D],
    [0, 0, 0, () => Targets, [() => OwnerInformation, 0], 0, [() => MaintenanceWindowDescription, 0]]
];
exports.MaintenanceWindowTask$ = [3, n0, _MWTa,
    0,
    [_WI, _WTIi, _TAa, _Ty, _Ta, _TPa, _Pr, _LI, _SRA, _MC, _ME, _N, _D, _CB, _AC],
    [0, 0, 0, 0, () => Targets, [() => MaintenanceWindowTaskParameters, 0], 1, () => exports.LoggingInfo$, 0, 0, 0, 0, [() => MaintenanceWindowDescription, 0], 0, () => exports.AlarmConfiguration$]
];
exports.MaintenanceWindowTaskInvocationParameters$ = [3, n0, _MWTIP,
    0,
    [_RCu, _Aut, _SF, _Lam],
    [[() => exports.MaintenanceWindowRunCommandParameters$, 0], () => exports.MaintenanceWindowAutomationParameters$, [() => exports.MaintenanceWindowStepFunctionsParameters$, 0], [() => exports.MaintenanceWindowLambdaParameters$, 0]]
];
exports.MaintenanceWindowTaskParameterValueExpression$ = [3, n0, _MWTPVE,
    8,
    [_Va],
    [[() => MaintenanceWindowTaskParameterValueList, 0]]
];
exports.MetadataValue$ = [3, n0, _MV,
    0,
    [_V],
    [0]
];
exports.ModifyDocumentPermissionRequest$ = [3, n0, _MDPR,
    0,
    [_N, _PT, _AITA, _AITR, _SDV],
    [0, 0, [() => AccountIdList, 0], [() => AccountIdList, 0], 0], 2
];
exports.ModifyDocumentPermissionResponse$ = [3, n0, _MDPRo,
    0,
    [],
    []
];
exports.Node$ = [3, n0, _Node,
    0,
    [_CTa, _I, _Ow, _Reg, _NTo],
    [4, 0, () => exports.NodeOwnerInfo$, 0, [() => exports.NodeType$, 0]]
];
exports.NodeAggregator$ = [3, n0, _NA,
    0,
    [_ATgg, _TN, _ANt, _Ag],
    [0, 0, 0, [() => NodeAggregatorList, 0]], 3
];
exports.NodeFilter$ = [3, n0, _NF,
    0,
    [_K, _Va, _Ty],
    [0, [() => NodeFilterValueList, 0], 0], 2
];
exports.NodeOwnerInfo$ = [3, n0, _NOI,
    0,
    [_AIc, _OUI, _OUP],
    [0, 0, 0]
];
exports.NonCompliantSummary$ = [3, n0, _NCS,
    0,
    [_NCC, _SS],
    [1, () => exports.SeveritySummary$]
];
exports.NotificationConfig$ = [3, n0, _NC,
    0,
    [_NAo, _NE, _NTot],
    [0, 64 | 0, 0]
];
exports.OpsAggregator$ = [3, n0, _OA,
    0,
    [_ATgg, _TN, _ANt, _Va, _Fi, _Ag],
    [0, 0, 0, 128 | 0, [() => OpsFilterList, 0], [() => OpsAggregatorList, 0]]
];
exports.OpsEntity$ = [3, n0, _OE,
    0,
    [_I, _Dat],
    [0, () => OpsEntityItemMap]
];
exports.OpsEntityItem$ = [3, n0, _OEI,
    0,
    [_CTa, _Con],
    [0, [1, n0, _OEIEL, 0, 128 | 0]]
];
exports.OpsFilter$ = [3, n0, _OF,
    0,
    [_K, _Va, _Ty],
    [0, [() => OpsFilterValueList, 0], 0], 2
];
exports.OpsItem$ = [3, n0, _OIp,
    0,
    [_CBr, _OIT, _CT, _D, _LMB, _LMT, _No, _Pr, _ROI, _St, _OII, _Ve, _Ti, _Sou, _OD, _Ca, _Se, _AST, _AETc, _PST, _PET, _OIA],
    [0, 0, 4, 0, 0, 4, () => OpsItemNotifications, 1, () => RelatedOpsItems, 0, 0, 0, 0, 0, () => OpsItemOperationalData, 0, 0, 4, 4, 4, 4, 0]
];
exports.OpsItemDataValue$ = [3, n0, _OIDV,
    0,
    [_V, _Ty],
    [0, 0]
];
exports.OpsItemEventFilter$ = [3, n0, _OIEF,
    0,
    [_K, _Va, _Ope],
    [0, 64 | 0, 0], 3
];
exports.OpsItemEventSummary$ = [3, n0, _OIES,
    0,
    [_OII, _EIv, _Sou, _DTe, _Det, _CBr, _CT],
    [0, 0, 0, 0, 0, () => exports.OpsItemIdentity$, 4]
];
exports.OpsItemFilter$ = [3, n0, _OIFp,
    0,
    [_K, _Va, _Ope],
    [0, 64 | 0, 0], 3
];
exports.OpsItemIdentity$ = [3, n0, _OIIp,
    0,
    [_Arn],
    [0]
];
exports.OpsItemNotification$ = [3, n0, _OIN,
    0,
    [_Arn],
    [0]
];
exports.OpsItemRelatedItemsFilter$ = [3, n0, _OIRIF,
    0,
    [_K, _Va, _Ope],
    [0, 64 | 0, 0], 3
];
exports.OpsItemRelatedItemSummary$ = [3, n0, _OIRIS,
    0,
    [_OII, _AIs, _RTe, _AT, _RU, _CBr, _CT, _LMB, _LMT],
    [0, 0, 0, 0, 0, () => exports.OpsItemIdentity$, 4, () => exports.OpsItemIdentity$, 4]
];
exports.OpsItemSummary$ = [3, n0, _OISp,
    0,
    [_CBr, _CT, _LMB, _LMT, _Pr, _Sou, _St, _OII, _Ti, _OD, _Ca, _Se, _OIT, _AST, _AETc, _PST, _PET],
    [0, 4, 0, 4, 1, 0, 0, 0, 0, () => OpsItemOperationalData, 0, 0, 0, 4, 4, 4, 4]
];
exports.OpsMetadata$ = [3, n0, _OM,
    0,
    [_RI, _OMA, _LMD, _LMU, _CDr],
    [0, 0, 4, 0, 4]
];
exports.OpsMetadataFilter$ = [3, n0, _OMF,
    0,
    [_K, _Va],
    [0, 64 | 0], 2
];
exports.OpsResultAttribute$ = [3, n0, _ORA,
    0,
    [_TN],
    [0], 1
];
exports.OutputSource$ = [3, n0, _OS,
    0,
    [_OSI, _OSTu],
    [0, 0]
];
exports.Parameter$ = [3, n0, _Par,
    0,
    [_N, _Ty, _V, _Ve, _Sel, _SRo, _LMD, _ARN, _DTa],
    [0, 0, [() => PSParameterValue, 0], 1, 0, 0, 4, 0, 0]
];
exports.ParameterHistory$ = [3, n0, _PHa,
    0,
    [_N, _Ty, _KI, _LMD, _LMU, _D, _V, _APl, _Ve, _La, _Tie, _Po, _DTa],
    [0, 0, 0, 4, 0, 0, [() => PSParameterValue, 0], 0, 1, 64 | 0, 0, () => ParameterPolicyList, 0]
];
exports.ParameterInlinePolicy$ = [3, n0, _PIP,
    0,
    [_PTo, _PTol, _PSo],
    [0, 0, 0]
];
exports.ParameterMetadata$ = [3, n0, _PM,
    0,
    [_N, _ARN, _Ty, _KI, _LMD, _LMU, _D, _APl, _Ve, _Tie, _Po, _DTa],
    [0, 0, 0, 0, 4, 0, 0, 0, 1, 0, () => ParameterPolicyList, 0]
];
exports.ParametersFilter$ = [3, n0, _PFa,
    0,
    [_K, _Va],
    [0, 64 | 0], 2
];
exports.ParameterStringFilter$ = [3, n0, _PSF,
    0,
    [_K, _Opt, _Va],
    [0, 0, 64 | 0], 1
];
exports.ParentStepDetails$ = [3, n0, _PSD,
    0,
    [_SEI, _SNt, _Ac, _It, _IV],
    [0, 0, 0, 1, 0]
];
exports.Patch$ = [3, n0, _Pat,
    0,
    [_I, _RDe, _Ti, _D, _CU, _Ven, _PFr, _Prod, _Cl, _MSs, _KNb, _MN, _Lan, _AIdv, _BIu, _CVEI, _N, _Ep, _Ve, _Rel, _Arc, _Se, _Rep],
    [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, 64 | 0, 64 | 0, 0, 1, 0, 0, 0, 0, 0]
];
exports.PatchBaselineIdentity$ = [3, n0, _PBI,
    0,
    [_BI, _BN, _OSp, _BD, _DB],
    [0, 0, 0, 0, 2]
];
exports.PatchComplianceData$ = [3, n0, _PCD,
    0,
    [_Ti, _KBI, _Cl, _Se, _S, _ITnst, _CVEI],
    [0, 0, 0, 0, 0, 4, 0], 6
];
exports.PatchFilter$ = [3, n0, _PFat,
    0,
    [_K, _Va],
    [0, 64 | 0], 2
];
exports.PatchFilterGroup$ = [3, n0, _PFG,
    0,
    [_PFatc],
    [() => PatchFilterList], 1
];
exports.PatchGroupPatchBaselineMapping$ = [3, n0, _PGPBM,
    0,
    [_PG, _BIas],
    [0, () => exports.PatchBaselineIdentity$]
];
exports.PatchOrchestratorFilter$ = [3, n0, _POF,
    0,
    [_K, _Va],
    [0, 64 | 0]
];
exports.PatchRule$ = [3, n0, _PR,
    0,
    [_PFG, _CL, _AAD, _AUD, _ENS],
    [() => exports.PatchFilterGroup$, 0, 1, 0, 2], 1
];
exports.PatchRuleGroup$ = [3, n0, _PRG,
    0,
    [_PRa],
    [() => PatchRuleList], 1
];
exports.PatchSource$ = [3, n0, _PSat,
    0,
    [_N, _Produ, _Conf],
    [0, 64 | 0, [() => PatchSourceConfiguration, 0]], 3
];
exports.PatchStatus$ = [3, n0, _PSa,
    0,
    [_DSep, _CL, _ADp],
    [0, 0, 4]
];
exports.ProgressCounters$ = [3, n0, _PC,
    0,
    [_TSo, _SSu, _FSa, _CSa, _TOS],
    [1, 1, 1, 1, 1]
];
exports.PutComplianceItemsRequest$ = [3, n0, _PCIR,
    0,
    [_RI, _RTe, _CTo, _ES, _Ite, _ICH, _UTp],
    [0, 0, 0, () => exports.ComplianceExecutionSummary$, () => ComplianceItemEntryList, 0, 0], 5
];
exports.PutComplianceItemsResult$ = [3, n0, _PCIRu,
    0,
    [],
    []
];
exports.PutInventoryRequest$ = [3, n0, _PIR,
    0,
    [_II, _Ite],
    [0, [() => InventoryItemList, 0]], 2
];
exports.PutInventoryResult$ = [3, n0, _PIRu,
    0,
    [_M],
    [0]
];
exports.PutParameterRequest$ = [3, n0, _PPR,
    0,
    [_N, _V, _D, _Ty, _KI, _Ov, _APl, _T, _Tie, _Po, _DTa],
    [0, [() => PSParameterValue, 0], 0, 0, 0, 2, 0, () => TagList, 0, 0, 0], 2
];
exports.PutParameterResult$ = [3, n0, _PPRu,
    0,
    [_Ve, _Tie],
    [1, 0]
];
exports.PutResourcePolicyRequest$ = [3, n0, _PRPR,
    0,
    [_RA, _Pol, _PI, _PH],
    [0, 0, 0, 0], 2
];
exports.PutResourcePolicyResponse$ = [3, n0, _PRPRu,
    0,
    [_PI, _PH],
    [0, 0]
];
exports.RegisterDefaultPatchBaselineRequest$ = [3, n0, _RDPBR,
    0,
    [_BI],
    [0], 1
];
exports.RegisterDefaultPatchBaselineResult$ = [3, n0, _RDPBRe,
    0,
    [_BI],
    [0]
];
exports.RegisterPatchBaselineForPatchGroupRequest$ = [3, n0, _RPBFPGR,
    0,
    [_BI, _PG],
    [0, 0], 2
];
exports.RegisterPatchBaselineForPatchGroupResult$ = [3, n0, _RPBFPGRe,
    0,
    [_BI, _PG],
    [0, 0]
];
exports.RegisterTargetWithMaintenanceWindowRequest$ = [3, n0, _RTWMWR,
    0,
    [_WI, _RTe, _Ta, _OI, _N, _D, _CTl],
    [0, 0, () => Targets, [() => OwnerInformation, 0], 0, [() => MaintenanceWindowDescription, 0], [0, 4]], 3
];
exports.RegisterTargetWithMaintenanceWindowResult$ = [3, n0, _RTWMWRe,
    0,
    [_WTI],
    [0]
];
exports.RegisterTaskWithMaintenanceWindowRequest$ = [3, n0, _RTWMWReg,
    0,
    [_WI, _TAa, _TTa, _Ta, _SRA, _TPa, _TIP, _Pr, _MC, _ME, _LI, _N, _D, _CTl, _CB, _AC],
    [0, 0, 0, () => Targets, 0, [() => MaintenanceWindowTaskParameters, 0], [() => exports.MaintenanceWindowTaskInvocationParameters$, 0], 1, 0, 0, () => exports.LoggingInfo$, 0, [() => MaintenanceWindowDescription, 0], [0, 4], 0, () => exports.AlarmConfiguration$], 3
];
exports.RegisterTaskWithMaintenanceWindowResult$ = [3, n0, _RTWMWRegi,
    0,
    [_WTIi],
    [0]
];
exports.RegistrationMetadataItem$ = [3, n0, _RMI,
    0,
    [_K, _V],
    [0, 0], 2
];
exports.RelatedOpsItem$ = [3, n0, _ROIe,
    0,
    [_OII],
    [0], 1
];
exports.RemoveTagsFromResourceRequest$ = [3, n0, _RTFRR,
    0,
    [_RTe, _RI, _TK],
    [0, 0, 64 | 0], 3
];
exports.RemoveTagsFromResourceResult$ = [3, n0, _RTFRRe,
    0,
    [],
    []
];
exports.ResetServiceSettingRequest$ = [3, n0, _RSSR,
    0,
    [_SIe],
    [0], 1
];
exports.ResetServiceSettingResult$ = [3, n0, _RSSRe,
    0,
    [_SSe],
    [() => exports.ServiceSetting$]
];
exports.ResolvedTargets$ = [3, n0, _RTes,
    0,
    [_PVar, _Tr],
    [64 | 0, 2]
];
exports.ResourceComplianceSummaryItem$ = [3, n0, _RCSIe,
    0,
    [_CTo, _RTe, _RI, _St, _OSv, _ES, _CSo, _NCS],
    [0, 0, 0, 0, 0, () => exports.ComplianceExecutionSummary$, () => exports.CompliantSummary$, () => exports.NonCompliantSummary$]
];
exports.ResourceDataSyncAwsOrganizationsSource$ = [3, n0, _RDSAOS,
    0,
    [_OSTr, _OUr],
    [0, () => ResourceDataSyncOrganizationalUnitList], 1
];
exports.ResourceDataSyncDestinationDataSharing$ = [3, n0, _RDSDDS,
    0,
    [_DDST],
    [0]
];
exports.ResourceDataSyncItem$ = [3, n0, _RDSIe,
    0,
    [_SN, _ST, _SSy, _SDe, _LST, _LSST, _SLMT, _LS, _SCT, _LSSM],
    [0, 0, () => exports.ResourceDataSyncSourceWithState$, () => exports.ResourceDataSyncS3Destination$, 4, 4, 4, 0, 4, 0]
];
exports.ResourceDataSyncOrganizationalUnit$ = [3, n0, _RDSOU,
    0,
    [_OUI],
    [0]
];
exports.ResourceDataSyncS3Destination$ = [3, n0, _RDSSD,
    0,
    [_BNu, _SFy, _Reg, _Pre, _AWSKMSKARN, _DDS],
    [0, 0, 0, 0, 0, () => exports.ResourceDataSyncDestinationDataSharing$], 3
];
exports.ResourceDataSyncSource$ = [3, n0, _RDSS,
    0,
    [_STo, _SRou, _AOS, _IFR, _EAODS],
    [0, 64 | 0, () => exports.ResourceDataSyncAwsOrganizationsSource$, 2, 2], 2
];
exports.ResourceDataSyncSourceWithState$ = [3, n0, _RDSSWS,
    0,
    [_STo, _AOS, _SRou, _IFR, _S, _EAODS],
    [0, () => exports.ResourceDataSyncAwsOrganizationsSource$, 64 | 0, 2, 0, 2]
];
exports.ResultAttribute$ = [3, n0, _RAes,
    0,
    [_TN],
    [0], 1
];
exports.ResumeSessionRequest$ = [3, n0, _RSR,
    0,
    [_SIes],
    [0], 1
];
exports.ResumeSessionResponse$ = [3, n0, _RSRe,
    0,
    [_SIes, _TV, _SUt],
    [0, 0, 0]
];
exports.ReviewInformation$ = [3, n0, _RIe,
    0,
    [_RTev, _St, _Rev],
    [4, 0, 0]
];
exports.Runbook$ = [3, n0, _Ru,
    0,
    [_DN, _DV, _P, _TPN, _Ta, _TM, _MC, _ME, _TL],
    [0, 0, [2, n0, _APM, 0, 0, 64 | 0], 0, () => Targets, [1, n0, _TM, 0, [2, n0, _TMa, 0, 0, 64 | 0]], 0, 0, () => TargetLocations], 1
];
exports.S3OutputLocation$ = [3, n0, _SOL,
    0,
    [_OSR, _OSBN, _OSKP],
    [0, 0, 0]
];
exports.S3OutputUrl$ = [3, n0, _SOUu,
    0,
    [_OU],
    [0]
];
exports.ScheduledWindowExecution$ = [3, n0, _SWEc,
    0,
    [_WI, _N, _ET],
    [0, 0, 0]
];
exports.SendAutomationSignalRequest$ = [3, n0, _SASR,
    0,
    [_AEI, _STi, _Pay],
    [0, 0, [2, n0, _APM, 0, 0, 64 | 0]], 2
];
exports.SendAutomationSignalResult$ = [3, n0, _SASRe,
    0,
    [],
    []
];
exports.SendCommandRequest$ = [3, n0, _SCR,
    0,
    [_DN, _IIn, _Ta, _DV, _DH, _DHT, _TS, _Co, _P, _OSR, _OSBN, _OSKP, _MC, _ME, _SRA, _NC, _CWOC, _AC],
    [0, 64 | 0, () => Targets, 0, 0, 0, 1, 0, [() => _Parameters, 0], 0, 0, 0, 0, 0, 0, () => exports.NotificationConfig$, () => exports.CloudWatchOutputConfig$, () => exports.AlarmConfiguration$], 1
];
exports.SendCommandResult$ = [3, n0, _SCRe,
    0,
    [_C],
    [[() => exports.Command$, 0]]
];
exports.ServiceSetting$ = [3, n0, _SSe,
    0,
    [_SIe, _SVe, _LMD, _LMU, _ARN, _St],
    [0, 0, 4, 0, 0, 0]
];
exports.Session$ = [3, n0, _Sess,
    0,
    [_SIes, _Tar, _St, _SDt, _EDn, _DN, _Ow, _Rea, _De, _OU, _MSD, _ATc],
    [0, 0, 0, 4, 4, 0, 0, 0, 0, () => exports.SessionManagerOutputUrl$, 0, 0]
];
exports.SessionFilter$ = [3, n0, _SFe,
    0,
    [_k, _v],
    [0, 0], 2
];
exports.SessionManagerOutputUrl$ = [3, n0, _SMOU,
    0,
    [_SOUu, _CWOU],
    [0, 0]
];
exports.SeveritySummary$ = [3, n0, _SS,
    0,
    [_CCr, _HC, _MCe, _LC, _ICn, _UC],
    [1, 1, 1, 1, 1, 1]
];
exports.StartAccessRequestRequest$ = [3, n0, _SARR,
    0,
    [_Rea, _Ta, _T],
    [0, () => Targets, () => TagList], 2
];
exports.StartAccessRequestResponse$ = [3, n0, _SARRt,
    0,
    [_ARI],
    [0]
];
exports.StartAssociationsOnceRequest$ = [3, n0, _SAOR,
    0,
    [_AIss],
    [64 | 0], 1
];
exports.StartAssociationsOnceResult$ = [3, n0, _SAORt,
    0,
    [],
    []
];
exports.StartAutomationExecutionRequest$ = [3, n0, _SAER,
    0,
    [_DN, _DV, _P, _CTl, _Mo, _TPN, _Ta, _TM, _MC, _ME, _TL, _T, _AC, _TLURL],
    [0, 0, [2, n0, _APM, 0, 0, 64 | 0], 0, 0, 0, () => Targets, [1, n0, _TM, 0, [2, n0, _TMa, 0, 0, 64 | 0]], 0, 0, () => TargetLocations, () => TagList, () => exports.AlarmConfiguration$, 0], 1
];
exports.StartAutomationExecutionResult$ = [3, n0, _SAERt,
    0,
    [_AEI],
    [0]
];
exports.StartChangeRequestExecutionRequest$ = [3, n0, _SCRER,
    0,
    [_DN, _R, _STc, _DV, _P, _CRN, _CTl, _AA, _T, _SETc, _CDh],
    [0, () => Runbooks, 4, 0, [2, n0, _APM, 0, 0, 64 | 0], 0, 0, 2, () => TagList, 4, 0], 2
];
exports.StartChangeRequestExecutionResult$ = [3, n0, _SCRERt,
    0,
    [_AEI],
    [0]
];
exports.StartExecutionPreviewRequest$ = [3, n0, _SEPR,
    0,
    [_DN, _DV, _EIx],
    [0, 0, () => exports.ExecutionInputs$], 1
];
exports.StartExecutionPreviewResponse$ = [3, n0, _SEPRt,
    0,
    [_EPI],
    [0]
];
exports.StartSessionRequest$ = [3, n0, _SSR,
    0,
    [_Tar, _DN, _Rea, _P],
    [0, 0, 0, [2, n0, _SMP, 0, 0, 64 | 0]], 1
];
exports.StartSessionResponse$ = [3, n0, _SSRt,
    0,
    [_SIes, _TV, _SUt],
    [0, 0, 0]
];
exports.StepExecution$ = [3, n0, _SEte,
    0,
    [_SNt, _Ac, _TS, _OFn, _MA, _EST, _EET, _SSt, _RCes, _Inpu, _Ou, _Res, _FM, _FD, _SEI, _OP, _IE, _NS, _ICs, _VNS, _Ta, _TLar, _TA, _PSD],
    [0, 0, 1, 0, 1, 4, 4, 0, 0, 128 | 0, [2, n0, _APM, 0, 0, 64 | 0], 0, 0, () => exports.FailureDetails$, 0, [2, n0, _APM, 0, 0, 64 | 0], 2, 0, 2, 64 | 0, () => Targets, () => exports.TargetLocation$, () => AlarmStateInformationList, () => exports.ParentStepDetails$]
];
exports.StepExecutionFilter$ = [3, n0, _SEF,
    0,
    [_K, _Va],
    [0, 64 | 0], 2
];
exports.StopAutomationExecutionRequest$ = [3, n0, _SAERto,
    0,
    [_AEI, _Ty],
    [0, 0], 1
];
exports.StopAutomationExecutionResult$ = [3, n0, _SAERtop,
    0,
    [],
    []
];
exports.Tag$ = [3, n0, _Tag,
    0,
    [_K, _V],
    [0, 0], 2
];
exports.Target$ = [3, n0, _Tar,
    0,
    [_K, _Va],
    [0, 64 | 0]
];
exports.TargetLocation$ = [3, n0, _TLar,
    0,
    [_Acc, _Re, _TLMC, _TLME, _ERN, _TLAC, _ICOU, _EAx, _Ta, _TMC, _TME],
    [64 | 0, 64 | 0, 0, 0, 0, () => exports.AlarmConfiguration$, 2, 64 | 0, () => Targets, 0, 0]
];
exports.TargetPreview$ = [3, n0, _TPar,
    0,
    [_Cou, _TT],
    [1, 0]
];
exports.TerminateSessionRequest$ = [3, n0, _TSR,
    0,
    [_SIes],
    [0], 1
];
exports.TerminateSessionResponse$ = [3, n0, _TSRe,
    0,
    [_SIes],
    [0]
];
exports.UnlabelParameterVersionRequest$ = [3, n0, _UPVR,
    0,
    [_N, _PVa, _La],
    [0, 1, 64 | 0], 3
];
exports.UnlabelParameterVersionResult$ = [3, n0, _UPVRn,
    0,
    [_RLe, _IL],
    [64 | 0, 64 | 0]
];
exports.UpdateAssociationRequest$ = [3, n0, _UAR,
    0,
    [_AIs, _P, _DV, _SE, _OL, _N, _Ta, _AN, _AV, _ATPN, _ME, _MC, _CS, _SCy, _AOACI, _CN, _TL, _SO, _Du, _TM, _AC, _ADAR],
    [0, [() => _Parameters, 0], 0, 0, () => exports.InstanceAssociationOutputLocation$, 0, () => Targets, 0, 0, 0, 0, 0, 0, 0, 2, 64 | 0, () => TargetLocations, 1, 1, [1, n0, _TM, 0, [2, n0, _TMa, 0, 0, 64 | 0]], () => exports.AlarmConfiguration$, 0], 1
];
exports.UpdateAssociationResult$ = [3, n0, _UARp,
    0,
    [_AD],
    [[() => exports.AssociationDescription$, 0]]
];
exports.UpdateAssociationStatusRequest$ = [3, n0, _UASR,
    0,
    [_N, _II, _AS],
    [0, 0, () => exports.AssociationStatus$], 3
];
exports.UpdateAssociationStatusResult$ = [3, n0, _UASRp,
    0,
    [_AD],
    [[() => exports.AssociationDescription$, 0]]
];
exports.UpdateDocumentDefaultVersionRequest$ = [3, n0, _UDDVR,
    0,
    [_N, _DV],
    [0, 0], 2
];
exports.UpdateDocumentDefaultVersionResult$ = [3, n0, _UDDVRp,
    0,
    [_D],
    [() => exports.DocumentDefaultVersionDescription$]
];
exports.UpdateDocumentMetadataRequest$ = [3, n0, _UDMR,
    0,
    [_N, _DRoc, _DV],
    [0, () => exports.DocumentReviews$, 0], 2
];
exports.UpdateDocumentMetadataResponse$ = [3, n0, _UDMRp,
    0,
    [],
    []
];
exports.UpdateDocumentRequest$ = [3, n0, _UDR,
    0,
    [_Con, _N, _At, _DNi, _VN, _DV, _DF, _TT],
    [0, 0, () => AttachmentsSourceList, 0, 0, 0, 0, 0], 2
];
exports.UpdateDocumentResult$ = [3, n0, _UDRp,
    0,
    [_DD],
    [[() => exports.DocumentDescription$, 0]]
];
exports.UpdateMaintenanceWindowRequest$ = [3, n0, _UMWR,
    0,
    [_WI, _N, _D, _SDt, _EDn, _Sc, _STch, _SO, _Du, _Cu, _AUT, _Ena, _Repl],
    [0, 0, [() => MaintenanceWindowDescription, 0], 0, 0, 0, 0, 1, 1, 1, 2, 2, 2], 1
];
exports.UpdateMaintenanceWindowResult$ = [3, n0, _UMWRp,
    0,
    [_WI, _N, _D, _SDt, _EDn, _Sc, _STch, _SO, _Du, _Cu, _AUT, _Ena],
    [0, 0, [() => MaintenanceWindowDescription, 0], 0, 0, 0, 0, 1, 1, 1, 2, 2]
];
exports.UpdateMaintenanceWindowTargetRequest$ = [3, n0, _UMWTR,
    0,
    [_WI, _WTI, _Ta, _OI, _N, _D, _Repl],
    [0, 0, () => Targets, [() => OwnerInformation, 0], 0, [() => MaintenanceWindowDescription, 0], 2], 2
];
exports.UpdateMaintenanceWindowTargetResult$ = [3, n0, _UMWTRp,
    0,
    [_WI, _WTI, _Ta, _OI, _N, _D],
    [0, 0, () => Targets, [() => OwnerInformation, 0], 0, [() => MaintenanceWindowDescription, 0]]
];
exports.UpdateMaintenanceWindowTaskRequest$ = [3, n0, _UMWTRpd,
    0,
    [_WI, _WTIi, _Ta, _TAa, _SRA, _TPa, _TIP, _Pr, _MC, _ME, _LI, _N, _D, _Repl, _CB, _AC],
    [0, 0, () => Targets, 0, 0, [() => MaintenanceWindowTaskParameters, 0], [() => exports.MaintenanceWindowTaskInvocationParameters$, 0], 1, 0, 0, () => exports.LoggingInfo$, 0, [() => MaintenanceWindowDescription, 0], 2, 0, () => exports.AlarmConfiguration$], 2
];
exports.UpdateMaintenanceWindowTaskResult$ = [3, n0, _UMWTRpda,
    0,
    [_WI, _WTIi, _Ta, _TAa, _SRA, _TPa, _TIP, _Pr, _MC, _ME, _LI, _N, _D, _CB, _AC],
    [0, 0, () => Targets, 0, 0, [() => MaintenanceWindowTaskParameters, 0], [() => exports.MaintenanceWindowTaskInvocationParameters$, 0], 1, 0, 0, () => exports.LoggingInfo$, 0, [() => MaintenanceWindowDescription, 0], 0, () => exports.AlarmConfiguration$]
];
exports.UpdateManagedInstanceRoleRequest$ = [3, n0, _UMIRR,
    0,
    [_II, _IRa],
    [0, 0], 2
];
exports.UpdateManagedInstanceRoleResult$ = [3, n0, _UMIRRp,
    0,
    [],
    []
];
exports.UpdateOpsItemRequest$ = [3, n0, _UOIR,
    0,
    [_OII, _D, _OD, _ODTD, _No, _Pr, _ROI, _St, _Ti, _Ca, _Se, _AST, _AETc, _PST, _PET, _OIA],
    [0, 0, () => OpsItemOperationalData, 64 | 0, () => OpsItemNotifications, 1, () => RelatedOpsItems, 0, 0, 0, 0, 4, 4, 4, 4, 0], 1
];
exports.UpdateOpsItemResponse$ = [3, n0, _UOIRp,
    0,
    [],
    []
];
exports.UpdateOpsMetadataRequest$ = [3, n0, _UOMR,
    0,
    [_OMA, _MTU, _KTD],
    [0, () => MetadataMap, 64 | 0], 1
];
exports.UpdateOpsMetadataResult$ = [3, n0, _UOMRp,
    0,
    [_OMA],
    [0]
];
exports.UpdatePatchBaselineRequest$ = [3, n0, _UPBR,
    0,
    [_BI, _N, _GF, _AR, _AP, _APCL, _APENS, _RP, _RPA, _D, _So, _ASUCS, _Repl],
    [0, 0, () => exports.PatchFilterGroup$, () => exports.PatchRuleGroup$, 64 | 0, 0, 2, 64 | 0, 0, 0, [() => PatchSourceList, 0], 0, 2], 1
];
exports.UpdatePatchBaselineResult$ = [3, n0, _UPBRp,
    0,
    [_BI, _N, _OSp, _GF, _AR, _AP, _APCL, _APENS, _RP, _RPA, _CD, _MD, _D, _So, _ASUCS],
    [0, 0, 0, () => exports.PatchFilterGroup$, () => exports.PatchRuleGroup$, 64 | 0, 0, 2, 64 | 0, 0, 4, 4, 0, [() => PatchSourceList, 0], 0]
];
exports.UpdateResourceDataSyncRequest$ = [3, n0, _URDSR,
    0,
    [_SN, _ST, _SSy],
    [0, 0, () => exports.ResourceDataSyncSource$], 3
];
exports.UpdateResourceDataSyncResult$ = [3, n0, _URDSRp,
    0,
    [],
    []
];
exports.UpdateServiceSettingRequest$ = [3, n0, _USSR,
    0,
    [_SIe, _SVe],
    [0, 0], 2
];
exports.UpdateServiceSettingResult$ = [3, n0, _USSRp,
    0,
    [],
    []
];
var AccountIdList = [1, n0, _AIL,
    0, [0,
        { [_xN]: _AIc }]
];
var Accounts = 64 | 0;
var AccountSharingInfoList = [1, n0, _ASIL,
    0, [() => exports.AccountSharingInfo$,
        { [_xN]: _ASI }]
];
var ActivationList = [1, n0, _AL,
    0, () => exports.Activation$
];
var AlarmList = [1, n0, _ALl,
    0, () => exports.Alarm$
];
var AlarmStateInformationList = [1, n0, _ASILl,
    0, () => exports.AlarmStateInformation$
];
var AssociationDescriptionList = [1, n0, _ADL,
    0, [() => exports.AssociationDescription$,
        { [_xN]: _AD }]
];
var AssociationExecutionFilterList = [1, n0, _AEFL,
    0, [() => exports.AssociationExecutionFilter$,
        { [_xN]: _AEF }]
];
var AssociationExecutionsList = [1, n0, _AEL,
    0, [() => exports.AssociationExecution$,
        { [_xN]: _AE }]
];
var AssociationExecutionTargetsFilterList = [1, n0, _AETFL,
    0, [() => exports.AssociationExecutionTargetsFilter$,
        { [_xN]: _AETF }]
];
var AssociationExecutionTargetsList = [1, n0, _AETL,
    0, [() => exports.AssociationExecutionTarget$,
        { [_xN]: _AET }]
];
var AssociationFilterList = [1, n0, _AFL,
    0, [() => exports.AssociationFilter$,
        { [_xN]: _AF }]
];
var AssociationIdList = 64 | 0;
var AssociationList = [1, n0, _ALs,
    0, [() => exports.Association$,
        { [_xN]: _As }]
];
var AssociationVersionList = [1, n0, _AVL,
    0, [() => exports.AssociationVersionInfo$,
        0]
];
var AttachmentContentList = [1, n0, _ACL,
    0, [() => exports.AttachmentContent$,
        { [_xN]: _ACt }]
];
var AttachmentInformationList = [1, n0, _AILt,
    0, [() => exports.AttachmentInformation$,
        { [_xN]: _AIt }]
];
var AttachmentsSourceList = [1, n0, _ASL,
    0, () => exports.AttachmentsSource$
];
var AttachmentsSourceValues = 64 | 0;
var AutomationExecutionFilterList = [1, n0, _AEFLu,
    0, () => exports.AutomationExecutionFilter$
];
var AutomationExecutionFilterValueList = 64 | 0;
var AutomationExecutionMetadataList = [1, n0, _AEML,
    0, () => exports.AutomationExecutionMetadata$
];
var AutomationParameterValueList = 64 | 0;
var CalendarNameOrARNList = 64 | 0;
var CategoryEnumList = 64 | 0;
var CategoryList = 64 | 0;
var CommandFilterList = [1, n0, _CFL,
    0, () => exports.CommandFilter$
];
var CommandInvocationList = [1, n0, _CIL,
    0, () => exports.CommandInvocation$
];
var CommandList = [1, n0, _CLo,
    0, [() => exports.Command$,
        0]
];
var CommandPluginList = [1, n0, _CPL,
    0, () => exports.CommandPlugin$
];
var ComplianceItemEntryList = [1, n0, _CIEL,
    0, () => exports.ComplianceItemEntry$
];
var ComplianceItemList = [1, n0, _CILo,
    0, [() => exports.ComplianceItem$,
        { [_xN]: _Item }]
];
var ComplianceResourceIdList = 64 | 0;
var ComplianceResourceTypeList = 64 | 0;
var ComplianceStringFilterList = [1, n0, _CSFL,
    0, [() => exports.ComplianceStringFilter$,
        { [_xN]: _CFo }]
];
var ComplianceStringFilterValueList = [1, n0, _CSFVL,
    0, [0,
        { [_xN]: _FVi }]
];
var ComplianceSummaryItemList = [1, n0, _CSIL,
    0, [() => exports.ComplianceSummaryItem$,
        { [_xN]: _Item }]
];
var CreateAssociationBatchRequestEntries = [1, n0, _CABREr,
    0, [() => exports.CreateAssociationBatchRequestEntry$,
        { [_xN]: _en }]
];
var DescribeActivationsFilterList = [1, n0, _DAFL,
    0, () => exports.DescribeActivationsFilter$
];
var DocumentFilterList = [1, n0, _DFL,
    0, [() => exports.DocumentFilter$,
        { [_xN]: _DFo }]
];
var DocumentIdentifierList = [1, n0, _DIL,
    0, [() => exports.DocumentIdentifier$,
        { [_xN]: _DIo }]
];
var DocumentKeyValuesFilterList = [1, n0, _DKVFL,
    0, () => exports.DocumentKeyValuesFilter$
];
var DocumentKeyValuesFilterValues = 64 | 0;
var DocumentParameterList = [1, n0, _DPLo,
    0, [() => exports.DocumentParameter$,
        { [_xN]: _DPo }]
];
var DocumentRequiresList = [1, n0, _DRL,
    0, () => exports.DocumentRequires$
];
var DocumentReviewCommentList = [1, n0, _DRCL,
    0, () => exports.DocumentReviewCommentSource$
];
var DocumentReviewerResponseList = [1, n0, _DRRL,
    0, () => exports.DocumentReviewerResponseSource$
];
var DocumentVersionList = [1, n0, _DVL,
    0, () => exports.DocumentVersionInfo$
];
var EffectivePatchList = [1, n0, _EPL,
    0, () => exports.EffectivePatch$
];
var ExcludeAccounts = 64 | 0;
var FailedCreateAssociationList = [1, n0, _FCAL,
    0, [() => exports.FailedCreateAssociation$,
        { [_xN]: _FCAE }]
];
var GetResourcePoliciesResponseEntries = [1, n0, _GRPREe,
    0, () => exports.GetResourcePoliciesResponseEntry$
];
var InstanceAssociationList = [1, n0, _IAL,
    0, () => exports.InstanceAssociation$
];
var InstanceAssociationStatusInfos = [1, n0, _IASI,
    0, () => exports.InstanceAssociationStatusInfo$
];
var InstanceIdList = 64 | 0;
var InstanceInformationFilterList = [1, n0, _IIFL,
    0, [() => exports.InstanceInformationFilter$,
        { [_xN]: _IIF }]
];
var InstanceInformationFilterValueSet = [1, n0, _IIFVS,
    0, [0,
        { [_xN]: _IIFV }]
];
var InstanceInformationList = [1, n0, _IIL,
    0, [() => exports.InstanceInformation$,
        { [_xN]: _IInst }]
];
var InstanceInformationStringFilterList = [1, n0, _IISFL,
    0, [() => exports.InstanceInformationStringFilter$,
        { [_xN]: _IISF }]
];
var InstancePatchStateFilterList = [1, n0, _IPSFL,
    0, () => exports.InstancePatchStateFilter$
];
var InstancePatchStateFilterValues = 64 | 0;
var InstancePatchStateList = [1, n0, _IPSL,
    0, [() => exports.InstancePatchState$,
        0]
];
var InstancePatchStatesList = [1, n0, _IPSLn,
    0, [() => exports.InstancePatchState$,
        0]
];
var InstanceProperties = [1, n0, _IPn,
    0, [() => exports.InstanceProperty$,
        { [_xN]: _IPns }]
];
var InstancePropertyFilterList = [1, n0, _IPFL,
    0, [() => exports.InstancePropertyFilter$,
        { [_xN]: _IPF }]
];
var InstancePropertyFilterValueSet = [1, n0, _IPFVS,
    0, [0,
        { [_xN]: _IPFV }]
];
var InstancePropertyStringFilterList = [1, n0, _IPSFLn,
    0, [() => exports.InstancePropertyStringFilter$,
        { [_xN]: _IPSFn }]
];
var InventoryAggregatorList = [1, n0, _IALn,
    0, [() => exports.InventoryAggregator$,
        { [_xN]: _Agg }]
];
var InventoryDeletionsList = [1, n0, _IDL,
    0, () => exports.InventoryDeletionStatusItem$
];
var InventoryDeletionSummaryItems = [1, n0, _IDSInv,
    0, () => exports.InventoryDeletionSummaryItem$
];
var InventoryFilterList = [1, n0, _IFL,
    0, [() => exports.InventoryFilter$,
        { [_xN]: _IFn }]
];
var InventoryFilterValueList = [1, n0, _IFVL,
    0, [0,
        { [_xN]: _FVi }]
];
var InventoryGroupList = [1, n0, _IGL,
    0, [() => exports.InventoryGroup$,
        { [_xN]: _IG }]
];
var InventoryItemAttributeList = [1, n0, _IIAL,
    0, [() => exports.InventoryItemAttribute$,
        { [_xN]: _Attr }]
];
var InventoryItemEntryList = [1, n0, _IIEL,
    0, 128 | 0
];
var InventoryItemList = [1, n0, _IILn,
    0, [() => exports.InventoryItem$,
        { [_xN]: _Item }]
];
var InventoryItemSchemaResultList = [1, n0, _IISRL,
    0, [() => exports.InventoryItemSchema$,
        0]
];
var InventoryResultEntityList = [1, n0, _IREL,
    0, [() => exports.InventoryResultEntity$,
        { [_xN]: _Entit }]
];
var KeyList = 64 | 0;
var MaintenanceWindowExecutionList = [1, n0, _MWEL,
    0, () => exports.MaintenanceWindowExecution$
];
var MaintenanceWindowExecutionTaskIdentityList = [1, n0, _MWETIL,
    0, () => exports.MaintenanceWindowExecutionTaskIdentity$
];
var MaintenanceWindowExecutionTaskIdList = 64 | 0;
var MaintenanceWindowExecutionTaskInvocationIdentityList = [1, n0, _MWETIIL,
    0, [() => exports.MaintenanceWindowExecutionTaskInvocationIdentity$,
        0]
];
var MaintenanceWindowFilterList = [1, n0, _MWFL,
    0, () => exports.MaintenanceWindowFilter$
];
var MaintenanceWindowFilterValues = 64 | 0;
var MaintenanceWindowIdentityList = [1, n0, _MWIL,
    0, [() => exports.MaintenanceWindowIdentity$,
        0]
];
var MaintenanceWindowsForTargetList = [1, n0, _MWFTL,
    0, () => exports.MaintenanceWindowIdentityForTarget$
];
var MaintenanceWindowTargetList = [1, n0, _MWTL,
    0, [() => exports.MaintenanceWindowTarget$,
        0]
];
var MaintenanceWindowTaskList = [1, n0, _MWTLa,
    0, [() => exports.MaintenanceWindowTask$,
        0]
];
var MaintenanceWindowTaskParametersList = [1, n0, _MWTPL,
    8, [() => MaintenanceWindowTaskParameters,
        0]
];
var MaintenanceWindowTaskParameterValueList = [1, n0, _MWTPVL,
    8, [() => MaintenanceWindowTaskParameterValue,
        0]
];
var MetadataKeysToDeleteList = 64 | 0;
var NodeAggregatorList = [1, n0, _NAL,
    0, [() => exports.NodeAggregator$,
        { [_xN]: _NA }]
];
var NodeFilterList = [1, n0, _NFL,
    0, [() => exports.NodeFilter$,
        { [_xN]: _NF }]
];
var NodeFilterValueList = [1, n0, _NFVL,
    0, [0,
        { [_xN]: _FVi }]
];
var NodeList = [1, n0, _NL,
    0, [() => exports.Node$,
        0]
];
var NodeSummaryList = [1, n0, _NSL,
    0, 128 | 0
];
var NotificationEventList = 64 | 0;
var OpsAggregatorList = [1, n0, _OAL,
    0, [() => exports.OpsAggregator$,
        { [_xN]: _Agg }]
];
var OpsEntityItemEntryList = [1, n0, _OEIEL,
    0, 128 | 0
];
var OpsEntityList = [1, n0, _OEL,
    0, [() => exports.OpsEntity$,
        { [_xN]: _Entit }]
];
var OpsFilterList = [1, n0, _OFL,
    0, [() => exports.OpsFilter$,
        { [_xN]: _OF }]
];
var OpsFilterValueList = [1, n0, _OFVL,
    0, [0,
        { [_xN]: _FVi }]
];
var OpsItemEventFilters = [1, n0, _OIEFp,
    0, () => exports.OpsItemEventFilter$
];
var OpsItemEventFilterValues = 64 | 0;
var OpsItemEventSummaries = [1, n0, _OIESp,
    0, () => exports.OpsItemEventSummary$
];
var OpsItemFilters = [1, n0, _OIF,
    0, () => exports.OpsItemFilter$
];
var OpsItemFilterValues = 64 | 0;
var OpsItemNotifications = [1, n0, _OINp,
    0, () => exports.OpsItemNotification$
];
var OpsItemOpsDataKeysList = 64 | 0;
var OpsItemParameterNamesList = 64 | 0;
var OpsItemRelatedItemsFilters = [1, n0, _OIRIFp,
    0, () => exports.OpsItemRelatedItemsFilter$
];
var OpsItemRelatedItemsFilterValues = 64 | 0;
var OpsItemRelatedItemSummaries = [1, n0, _OIRISp,
    0, () => exports.OpsItemRelatedItemSummary$
];
var OpsItemSummaries = [1, n0, _OIS,
    0, () => exports.OpsItemSummary$
];
var OpsMetadataFilterList = [1, n0, _OMFL,
    0, () => exports.OpsMetadataFilter$
];
var OpsMetadataFilterValueList = 64 | 0;
var OpsMetadataList = [1, n0, _OML,
    0, () => exports.OpsMetadata$
];
var OpsResultAttributeList = [1, n0, _ORAL,
    0, [() => exports.OpsResultAttribute$,
        { [_xN]: _ORA }]
];
var ParameterHistoryList = [1, n0, _PHL,
    0, [() => exports.ParameterHistory$,
        0]
];
var ParameterLabelList = 64 | 0;
var ParameterList = [1, n0, _PL,
    0, [() => exports.Parameter$,
        0]
];
var ParameterMetadataList = [1, n0, _PML,
    0, () => exports.ParameterMetadata$
];
var ParameterNameList = 64 | 0;
var ParameterPolicyList = [1, n0, _PPLa,
    0, () => exports.ParameterInlinePolicy$
];
var ParametersFilterList = [1, n0, _PFL,
    0, () => exports.ParametersFilter$
];
var ParametersFilterValueList = 64 | 0;
var ParameterStringFilterList = [1, n0, _PSFL,
    0, () => exports.ParameterStringFilter$
];
var ParameterStringFilterValueList = 64 | 0;
var ParameterValueList = 64 | 0;
var PatchAdvisoryIdList = 64 | 0;
var PatchBaselineIdentityList = [1, n0, _PBIL,
    0, () => exports.PatchBaselineIdentity$
];
var PatchBugzillaIdList = 64 | 0;
var PatchComplianceDataList = [1, n0, _PCDL,
    0, () => exports.PatchComplianceData$
];
var PatchCVEIdList = 64 | 0;
var PatchFilterList = [1, n0, _PFLa,
    0, () => exports.PatchFilter$
];
var PatchFilterValueList = 64 | 0;
var PatchGroupList = 64 | 0;
var PatchGroupPatchBaselineMappingList = [1, n0, _PGPBML,
    0, () => exports.PatchGroupPatchBaselineMapping$
];
var PatchIdList = 64 | 0;
var PatchList = [1, n0, _PLa,
    0, () => exports.Patch$
];
var PatchOrchestratorFilterList = [1, n0, _POFL,
    0, () => exports.PatchOrchestratorFilter$
];
var PatchOrchestratorFilterValues = 64 | 0;
var PatchPropertiesList = [1, n0, _PPL,
    0, 128 | 0
];
var PatchRuleList = [1, n0, _PRL,
    0, () => exports.PatchRule$
];
var PatchSourceList = [1, n0, _PSL,
    0, [() => exports.PatchSource$,
        0]
];
var PatchSourceProductList = 64 | 0;
var PlatformTypeList = [1, n0, _PTL,
    0, [0,
        { [_xN]: _PTla }]
];
var RegionList = 64 | 0;
var Regions = 64 | 0;
var RegistrationMetadataList = [1, n0, _RML,
    0, () => exports.RegistrationMetadataItem$
];
var RelatedOpsItems = [1, n0, _ROI,
    0, () => exports.RelatedOpsItem$
];
var ResourceComplianceSummaryItemList = [1, n0, _RCSIL,
    0, [() => exports.ResourceComplianceSummaryItem$,
        { [_xN]: _Item }]
];
var ResourceDataSyncItemList = [1, n0, _RDSIL,
    0, () => exports.ResourceDataSyncItem$
];
var ResourceDataSyncOrganizationalUnitList = [1, n0, _RDSOUL,
    0, () => exports.ResourceDataSyncOrganizationalUnit$
];
var ResourceDataSyncSourceRegionList = 64 | 0;
var ResourcePolicyParameterNamesList = 64 | 0;
var ResultAttributeList = [1, n0, _RAL,
    0, [() => exports.ResultAttribute$,
        { [_xN]: _RAes }]
];
var ReviewInformationList = [1, n0, _RIL,
    0, [() => exports.ReviewInformation$,
        { [_xN]: _RIe }]
];
var Runbooks = [1, n0, _R,
    0, () => exports.Runbook$
];
var ScheduledWindowExecutionList = [1, n0, _SWEL,
    0, () => exports.ScheduledWindowExecution$
];
var SessionFilterList = [1, n0, _SFL,
    0, () => exports.SessionFilter$
];
var SessionList = [1, n0, _SLe,
    0, () => exports.Session$
];
var SessionManagerParameterValueList = 64 | 0;
var StepExecutionFilterList = [1, n0, _SEFL,
    0, () => exports.StepExecutionFilter$
];
var StepExecutionFilterValueList = 64 | 0;
var StepExecutionList = [1, n0, _SEL,
    0, () => exports.StepExecution$
];
var StringList = 64 | 0;
var TagList = [1, n0, _TLa,
    0, () => exports.Tag$
];
var TargetLocations = [1, n0, _TL,
    0, () => exports.TargetLocation$
];
var TargetMaps = [1, n0, _TM,
    0, [2, n0, _TMa, 0, 0, 64 | 0]
];
var TargetMapValueList = 64 | 0;
var TargetParameterList = 64 | 0;
var TargetPreviewList = [1, n0, _TPL,
    0, () => exports.TargetPreview$
];
var Targets = [1, n0, _Ta,
    0, () => exports.Target$
];
var TargetValues = 64 | 0;
var ValidNextStepList = 64 | 0;
var AssociationStatusAggregatedCount = 128 | 1;
var AutomationParameterMap = [2, n0, _APM,
    0, 0, 64 | 0
];
var ComplianceItemDetails = 128 | 0;
var InstanceAssociationStatusAggregatedCount = 128 | 1;
var InventoryItemContentContext = 128 | 0;
var InventoryItemEntry = 128 | 0;
var InventoryResultItemMap = [2, n0, _IRIM,
    0, 0, () => exports.InventoryResultItem$
];
var MaintenanceWindowTaskParameters = [2, n0, _MWTP,
    8, [0,
        0],
    [() => exports.MaintenanceWindowTaskParameterValueExpression$,
        0]
];
var MetadataMap = [2, n0, _MM,
    0, 0, () => exports.MetadataValue$
];
var NodeSummary = 128 | 0;
var NormalStringMap = 128 | 0;
var OpsAggregatorValueMap = 128 | 0;
var OpsEntityItemEntry = 128 | 0;
var OpsEntityItemMap = [2, n0, _OEIM,
    0, 0, () => exports.OpsEntityItem$
];
var OpsItemOperationalData = [2, n0, _OIOD,
    0, 0, () => exports.OpsItemDataValue$
];
var _Parameters = [2, n0, _P,
    8, 0, 64 | 0
];
var PatchPropertyEntry = 128 | 0;
var SessionManagerParameters = [2, n0, _SMP,
    0, 0, 64 | 0
];
var StepPreviewMap = 128 | 1;
var TargetMap = [2, n0, _TMa,
    0, 0, 64 | 0
];
exports.ExecutionInputs$ = [4, n0, _EIx,
    0,
    [_Aut],
    [() => exports.AutomationExecutionInputs$]
];
exports.ExecutionPreview$ = [4, n0, _EPx,
    0,
    [_Aut],
    [() => exports.AutomationExecutionPreview$]
];
exports.NodeType$ = [4, n0, _NTo,
    0,
    [_Ins],
    [[() => exports.InstanceInfo$, 0]]
];
exports.AddTagsToResource$ = [9, n0, _ATTR,
    0, () => exports.AddTagsToResourceRequest$, () => exports.AddTagsToResourceResult$
];
exports.AssociateOpsItemRelatedItem$ = [9, n0, _AOIRI,
    0, () => exports.AssociateOpsItemRelatedItemRequest$, () => exports.AssociateOpsItemRelatedItemResponse$
];
exports.CancelCommand$ = [9, n0, _CCa,
    0, () => exports.CancelCommandRequest$, () => exports.CancelCommandResult$
];
exports.CancelMaintenanceWindowExecution$ = [9, n0, _CMWE,
    0, () => exports.CancelMaintenanceWindowExecutionRequest$, () => exports.CancelMaintenanceWindowExecutionResult$
];
exports.CreateActivation$ = [9, n0, _CAr,
    0, () => exports.CreateActivationRequest$, () => exports.CreateActivationResult$
];
exports.CreateAssociation$ = [9, n0, _CAre,
    0, () => exports.CreateAssociationRequest$, () => exports.CreateAssociationResult$
];
exports.CreateAssociationBatch$ = [9, n0, _CAB,
    0, () => exports.CreateAssociationBatchRequest$, () => exports.CreateAssociationBatchResult$
];
exports.CreateDocument$ = [9, n0, _CDre,
    0, () => exports.CreateDocumentRequest$, () => exports.CreateDocumentResult$
];
exports.CreateMaintenanceWindow$ = [9, n0, _CMW,
    0, () => exports.CreateMaintenanceWindowRequest$, () => exports.CreateMaintenanceWindowResult$
];
exports.CreateOpsItem$ = [9, n0, _COI,
    0, () => exports.CreateOpsItemRequest$, () => exports.CreateOpsItemResponse$
];
exports.CreateOpsMetadata$ = [9, n0, _COM,
    0, () => exports.CreateOpsMetadataRequest$, () => exports.CreateOpsMetadataResult$
];
exports.CreatePatchBaseline$ = [9, n0, _CPB,
    0, () => exports.CreatePatchBaselineRequest$, () => exports.CreatePatchBaselineResult$
];
exports.CreateResourceDataSync$ = [9, n0, _CRDS,
    0, () => exports.CreateResourceDataSyncRequest$, () => exports.CreateResourceDataSyncResult$
];
exports.DeleteActivation$ = [9, n0, _DA,
    0, () => exports.DeleteActivationRequest$, () => exports.DeleteActivationResult$
];
exports.DeleteAssociation$ = [9, n0, _DAe,
    0, () => exports.DeleteAssociationRequest$, () => exports.DeleteAssociationResult$
];
exports.DeleteDocument$ = [9, n0, _DDe,
    0, () => exports.DeleteDocumentRequest$, () => exports.DeleteDocumentResult$
];
exports.DeleteInventory$ = [9, n0, _DIe,
    0, () => exports.DeleteInventoryRequest$, () => exports.DeleteInventoryResult$
];
exports.DeleteMaintenanceWindow$ = [9, n0, _DMW,
    0, () => exports.DeleteMaintenanceWindowRequest$, () => exports.DeleteMaintenanceWindowResult$
];
exports.DeleteOpsItem$ = [9, n0, _DOI,
    0, () => exports.DeleteOpsItemRequest$, () => exports.DeleteOpsItemResponse$
];
exports.DeleteOpsMetadata$ = [9, n0, _DOM,
    0, () => exports.DeleteOpsMetadataRequest$, () => exports.DeleteOpsMetadataResult$
];
exports.DeleteParameter$ = [9, n0, _DPe,
    0, () => exports.DeleteParameterRequest$, () => exports.DeleteParameterResult$
];
exports.DeleteParameters$ = [9, n0, _DPel,
    0, () => exports.DeleteParametersRequest$, () => exports.DeleteParametersResult$
];
exports.DeletePatchBaseline$ = [9, n0, _DPB,
    0, () => exports.DeletePatchBaselineRequest$, () => exports.DeletePatchBaselineResult$
];
exports.DeleteResourceDataSync$ = [9, n0, _DRDS,
    0, () => exports.DeleteResourceDataSyncRequest$, () => exports.DeleteResourceDataSyncResult$
];
exports.DeleteResourcePolicy$ = [9, n0, _DRP,
    0, () => exports.DeleteResourcePolicyRequest$, () => exports.DeleteResourcePolicyResponse$
];
exports.DeregisterManagedInstance$ = [9, n0, _DMI,
    0, () => exports.DeregisterManagedInstanceRequest$, () => exports.DeregisterManagedInstanceResult$
];
exports.DeregisterPatchBaselineForPatchGroup$ = [9, n0, _DPBFPG,
    0, () => exports.DeregisterPatchBaselineForPatchGroupRequest$, () => exports.DeregisterPatchBaselineForPatchGroupResult$
];
exports.DeregisterTargetFromMaintenanceWindow$ = [9, n0, _DTFMW,
    0, () => exports.DeregisterTargetFromMaintenanceWindowRequest$, () => exports.DeregisterTargetFromMaintenanceWindowResult$
];
exports.DeregisterTaskFromMaintenanceWindow$ = [9, n0, _DTFMWe,
    0, () => exports.DeregisterTaskFromMaintenanceWindowRequest$, () => exports.DeregisterTaskFromMaintenanceWindowResult$
];
exports.DescribeActivations$ = [9, n0, _DAes,
    0, () => exports.DescribeActivationsRequest$, () => exports.DescribeActivationsResult$
];
exports.DescribeAssociation$ = [9, n0, _DAesc,
    0, () => exports.DescribeAssociationRequest$, () => exports.DescribeAssociationResult$
];
exports.DescribeAssociationExecutions$ = [9, n0, _DAEe,
    0, () => exports.DescribeAssociationExecutionsRequest$, () => exports.DescribeAssociationExecutionsResult$
];
exports.DescribeAssociationExecutionTargets$ = [9, n0, _DAET,
    0, () => exports.DescribeAssociationExecutionTargetsRequest$, () => exports.DescribeAssociationExecutionTargetsResult$
];
exports.DescribeAutomationExecutions$ = [9, n0, _DAEes,
    0, () => exports.DescribeAutomationExecutionsRequest$, () => exports.DescribeAutomationExecutionsResult$
];
exports.DescribeAutomationStepExecutions$ = [9, n0, _DASE,
    0, () => exports.DescribeAutomationStepExecutionsRequest$, () => exports.DescribeAutomationStepExecutionsResult$
];
exports.DescribeAvailablePatches$ = [9, n0, _DAP,
    0, () => exports.DescribeAvailablePatchesRequest$, () => exports.DescribeAvailablePatchesResult$
];
exports.DescribeDocument$ = [9, n0, _DDes,
    0, () => exports.DescribeDocumentRequest$, () => exports.DescribeDocumentResult$
];
exports.DescribeDocumentPermission$ = [9, n0, _DDP,
    0, () => exports.DescribeDocumentPermissionRequest$, () => exports.DescribeDocumentPermissionResponse$
];
exports.DescribeEffectiveInstanceAssociations$ = [9, n0, _DEIA,
    0, () => exports.DescribeEffectiveInstanceAssociationsRequest$, () => exports.DescribeEffectiveInstanceAssociationsResult$
];
exports.DescribeEffectivePatchesForPatchBaseline$ = [9, n0, _DEPFPB,
    0, () => exports.DescribeEffectivePatchesForPatchBaselineRequest$, () => exports.DescribeEffectivePatchesForPatchBaselineResult$
];
exports.DescribeInstanceAssociationsStatus$ = [9, n0, _DIAS,
    0, () => exports.DescribeInstanceAssociationsStatusRequest$, () => exports.DescribeInstanceAssociationsStatusResult$
];
exports.DescribeInstanceInformation$ = [9, n0, _DIIe,
    0, () => exports.DescribeInstanceInformationRequest$, () => exports.DescribeInstanceInformationResult$
];
exports.DescribeInstancePatches$ = [9, n0, _DIP,
    0, () => exports.DescribeInstancePatchesRequest$, () => exports.DescribeInstancePatchesResult$
];
exports.DescribeInstancePatchStates$ = [9, n0, _DIPS,
    0, () => exports.DescribeInstancePatchStatesRequest$, () => exports.DescribeInstancePatchStatesResult$
];
exports.DescribeInstancePatchStatesForPatchGroup$ = [9, n0, _DIPSFPG,
    0, () => exports.DescribeInstancePatchStatesForPatchGroupRequest$, () => exports.DescribeInstancePatchStatesForPatchGroupResult$
];
exports.DescribeInstanceProperties$ = [9, n0, _DIPe,
    0, () => exports.DescribeInstancePropertiesRequest$, () => exports.DescribeInstancePropertiesResult$
];
exports.DescribeInventoryDeletions$ = [9, n0, _DID,
    0, () => exports.DescribeInventoryDeletionsRequest$, () => exports.DescribeInventoryDeletionsResult$
];
exports.DescribeMaintenanceWindowExecutions$ = [9, n0, _DMWE,
    0, () => exports.DescribeMaintenanceWindowExecutionsRequest$, () => exports.DescribeMaintenanceWindowExecutionsResult$
];
exports.DescribeMaintenanceWindowExecutionTaskInvocations$ = [9, n0, _DMWETI,
    0, () => exports.DescribeMaintenanceWindowExecutionTaskInvocationsRequest$, () => exports.DescribeMaintenanceWindowExecutionTaskInvocationsResult$
];
exports.DescribeMaintenanceWindowExecutionTasks$ = [9, n0, _DMWET,
    0, () => exports.DescribeMaintenanceWindowExecutionTasksRequest$, () => exports.DescribeMaintenanceWindowExecutionTasksResult$
];
exports.DescribeMaintenanceWindows$ = [9, n0, _DMWe,
    0, () => exports.DescribeMaintenanceWindowsRequest$, () => exports.DescribeMaintenanceWindowsResult$
];
exports.DescribeMaintenanceWindowSchedule$ = [9, n0, _DMWS,
    0, () => exports.DescribeMaintenanceWindowScheduleRequest$, () => exports.DescribeMaintenanceWindowScheduleResult$
];
exports.DescribeMaintenanceWindowsForTarget$ = [9, n0, _DMWFT,
    0, () => exports.DescribeMaintenanceWindowsForTargetRequest$, () => exports.DescribeMaintenanceWindowsForTargetResult$
];
exports.DescribeMaintenanceWindowTargets$ = [9, n0, _DMWT,
    0, () => exports.DescribeMaintenanceWindowTargetsRequest$, () => exports.DescribeMaintenanceWindowTargetsResult$
];
exports.DescribeMaintenanceWindowTasks$ = [9, n0, _DMWTe,
    0, () => exports.DescribeMaintenanceWindowTasksRequest$, () => exports.DescribeMaintenanceWindowTasksResult$
];
exports.DescribeOpsItems$ = [9, n0, _DOIe,
    0, () => exports.DescribeOpsItemsRequest$, () => exports.DescribeOpsItemsResponse$
];
exports.DescribeParameters$ = [9, n0, _DPes,
    0, () => exports.DescribeParametersRequest$, () => exports.DescribeParametersResult$
];
exports.DescribePatchBaselines$ = [9, n0, _DPBe,
    0, () => exports.DescribePatchBaselinesRequest$, () => exports.DescribePatchBaselinesResult$
];
exports.DescribePatchGroups$ = [9, n0, _DPG,
    0, () => exports.DescribePatchGroupsRequest$, () => exports.DescribePatchGroupsResult$
];
exports.DescribePatchGroupState$ = [9, n0, _DPGS,
    0, () => exports.DescribePatchGroupStateRequest$, () => exports.DescribePatchGroupStateResult$
];
exports.DescribePatchProperties$ = [9, n0, _DPP,
    0, () => exports.DescribePatchPropertiesRequest$, () => exports.DescribePatchPropertiesResult$
];
exports.DescribeSessions$ = [9, n0, _DSes,
    0, () => exports.DescribeSessionsRequest$, () => exports.DescribeSessionsResponse$
];
exports.DisassociateOpsItemRelatedItem$ = [9, n0, _DOIRI,
    0, () => exports.DisassociateOpsItemRelatedItemRequest$, () => exports.DisassociateOpsItemRelatedItemResponse$
];
exports.GetAccessToken$ = [9, n0, _GAT,
    0, () => exports.GetAccessTokenRequest$, () => exports.GetAccessTokenResponse$
];
exports.GetAutomationExecution$ = [9, n0, _GAE,
    0, () => exports.GetAutomationExecutionRequest$, () => exports.GetAutomationExecutionResult$
];
exports.GetCalendarState$ = [9, n0, _GCS,
    0, () => exports.GetCalendarStateRequest$, () => exports.GetCalendarStateResponse$
];
exports.GetCommandInvocation$ = [9, n0, _GCI,
    0, () => exports.GetCommandInvocationRequest$, () => exports.GetCommandInvocationResult$
];
exports.GetConnectionStatus$ = [9, n0, _GCSe,
    0, () => exports.GetConnectionStatusRequest$, () => exports.GetConnectionStatusResponse$
];
exports.GetDefaultPatchBaseline$ = [9, n0, _GDPB,
    0, () => exports.GetDefaultPatchBaselineRequest$, () => exports.GetDefaultPatchBaselineResult$
];
exports.GetDeployablePatchSnapshotForInstance$ = [9, n0, _GDPSFI,
    0, () => exports.GetDeployablePatchSnapshotForInstanceRequest$, () => exports.GetDeployablePatchSnapshotForInstanceResult$
];
exports.GetDocument$ = [9, n0, _GD,
    0, () => exports.GetDocumentRequest$, () => exports.GetDocumentResult$
];
exports.GetExecutionPreview$ = [9, n0, _GEP,
    0, () => exports.GetExecutionPreviewRequest$, () => exports.GetExecutionPreviewResponse$
];
exports.GetInventory$ = [9, n0, _GI,
    0, () => exports.GetInventoryRequest$, () => exports.GetInventoryResult$
];
exports.GetInventorySchema$ = [9, n0, _GIS,
    0, () => exports.GetInventorySchemaRequest$, () => exports.GetInventorySchemaResult$
];
exports.GetMaintenanceWindow$ = [9, n0, _GMW,
    0, () => exports.GetMaintenanceWindowRequest$, () => exports.GetMaintenanceWindowResult$
];
exports.GetMaintenanceWindowExecution$ = [9, n0, _GMWE,
    0, () => exports.GetMaintenanceWindowExecutionRequest$, () => exports.GetMaintenanceWindowExecutionResult$
];
exports.GetMaintenanceWindowExecutionTask$ = [9, n0, _GMWET,
    0, () => exports.GetMaintenanceWindowExecutionTaskRequest$, () => exports.GetMaintenanceWindowExecutionTaskResult$
];
exports.GetMaintenanceWindowExecutionTaskInvocation$ = [9, n0, _GMWETI,
    0, () => exports.GetMaintenanceWindowExecutionTaskInvocationRequest$, () => exports.GetMaintenanceWindowExecutionTaskInvocationResult$
];
exports.GetMaintenanceWindowTask$ = [9, n0, _GMWT,
    0, () => exports.GetMaintenanceWindowTaskRequest$, () => exports.GetMaintenanceWindowTaskResult$
];
exports.GetOpsItem$ = [9, n0, _GOI,
    0, () => exports.GetOpsItemRequest$, () => exports.GetOpsItemResponse$
];
exports.GetOpsMetadata$ = [9, n0, _GOM,
    0, () => exports.GetOpsMetadataRequest$, () => exports.GetOpsMetadataResult$
];
exports.GetOpsSummary$ = [9, n0, _GOS,
    0, () => exports.GetOpsSummaryRequest$, () => exports.GetOpsSummaryResult$
];
exports.GetParameter$ = [9, n0, _GP,
    0, () => exports.GetParameterRequest$, () => exports.GetParameterResult$
];
exports.GetParameterHistory$ = [9, n0, _GPH,
    0, () => exports.GetParameterHistoryRequest$, () => exports.GetParameterHistoryResult$
];
exports.GetParameters$ = [9, n0, _GPe,
    0, () => exports.GetParametersRequest$, () => exports.GetParametersResult$
];
exports.GetParametersByPath$ = [9, n0, _GPBP,
    0, () => exports.GetParametersByPathRequest$, () => exports.GetParametersByPathResult$
];
exports.GetPatchBaseline$ = [9, n0, _GPB,
    0, () => exports.GetPatchBaselineRequest$, () => exports.GetPatchBaselineResult$
];
exports.GetPatchBaselineForPatchGroup$ = [9, n0, _GPBFPG,
    0, () => exports.GetPatchBaselineForPatchGroupRequest$, () => exports.GetPatchBaselineForPatchGroupResult$
];
exports.GetResourcePolicies$ = [9, n0, _GRP,
    0, () => exports.GetResourcePoliciesRequest$, () => exports.GetResourcePoliciesResponse$
];
exports.GetServiceSetting$ = [9, n0, _GSS,
    0, () => exports.GetServiceSettingRequest$, () => exports.GetServiceSettingResult$
];
exports.LabelParameterVersion$ = [9, n0, _LPV,
    0, () => exports.LabelParameterVersionRequest$, () => exports.LabelParameterVersionResult$
];
exports.ListAssociations$ = [9, n0, _LA,
    0, () => exports.ListAssociationsRequest$, () => exports.ListAssociationsResult$
];
exports.ListAssociationVersions$ = [9, n0, _LAV,
    0, () => exports.ListAssociationVersionsRequest$, () => exports.ListAssociationVersionsResult$
];
exports.ListCommandInvocations$ = [9, n0, _LCI,
    0, () => exports.ListCommandInvocationsRequest$, () => exports.ListCommandInvocationsResult$
];
exports.ListCommands$ = [9, n0, _LCi,
    0, () => exports.ListCommandsRequest$, () => exports.ListCommandsResult$
];
exports.ListComplianceItems$ = [9, n0, _LCIi,
    0, () => exports.ListComplianceItemsRequest$, () => exports.ListComplianceItemsResult$
];
exports.ListComplianceSummaries$ = [9, n0, _LCS,
    0, () => exports.ListComplianceSummariesRequest$, () => exports.ListComplianceSummariesResult$
];
exports.ListDocumentMetadataHistory$ = [9, n0, _LDMH,
    0, () => exports.ListDocumentMetadataHistoryRequest$, () => exports.ListDocumentMetadataHistoryResponse$
];
exports.ListDocuments$ = [9, n0, _LD,
    0, () => exports.ListDocumentsRequest$, () => exports.ListDocumentsResult$
];
exports.ListDocumentVersions$ = [9, n0, _LDV,
    0, () => exports.ListDocumentVersionsRequest$, () => exports.ListDocumentVersionsResult$
];
exports.ListInventoryEntries$ = [9, n0, _LIE,
    0, () => exports.ListInventoryEntriesRequest$, () => exports.ListInventoryEntriesResult$
];
exports.ListNodes$ = [9, n0, _LN,
    0, () => exports.ListNodesRequest$, () => exports.ListNodesResult$
];
exports.ListNodesSummary$ = [9, n0, _LNS,
    0, () => exports.ListNodesSummaryRequest$, () => exports.ListNodesSummaryResult$
];
exports.ListOpsItemEvents$ = [9, n0, _LOIE,
    0, () => exports.ListOpsItemEventsRequest$, () => exports.ListOpsItemEventsResponse$
];
exports.ListOpsItemRelatedItems$ = [9, n0, _LOIRI,
    0, () => exports.ListOpsItemRelatedItemsRequest$, () => exports.ListOpsItemRelatedItemsResponse$
];
exports.ListOpsMetadata$ = [9, n0, _LOM,
    0, () => exports.ListOpsMetadataRequest$, () => exports.ListOpsMetadataResult$
];
exports.ListResourceComplianceSummaries$ = [9, n0, _LRCS,
    0, () => exports.ListResourceComplianceSummariesRequest$, () => exports.ListResourceComplianceSummariesResult$
];
exports.ListResourceDataSync$ = [9, n0, _LRDS,
    0, () => exports.ListResourceDataSyncRequest$, () => exports.ListResourceDataSyncResult$
];
exports.ListTagsForResource$ = [9, n0, _LTFR,
    0, () => exports.ListTagsForResourceRequest$, () => exports.ListTagsForResourceResult$
];
exports.ModifyDocumentPermission$ = [9, n0, _MDP,
    0, () => exports.ModifyDocumentPermissionRequest$, () => exports.ModifyDocumentPermissionResponse$
];
exports.PutComplianceItems$ = [9, n0, _PCI,
    0, () => exports.PutComplianceItemsRequest$, () => exports.PutComplianceItemsResult$
];
exports.PutInventory$ = [9, n0, _PIu,
    0, () => exports.PutInventoryRequest$, () => exports.PutInventoryResult$
];
exports.PutParameter$ = [9, n0, _PP,
    0, () => exports.PutParameterRequest$, () => exports.PutParameterResult$
];
exports.PutResourcePolicy$ = [9, n0, _PRP,
    0, () => exports.PutResourcePolicyRequest$, () => exports.PutResourcePolicyResponse$
];
exports.RegisterDefaultPatchBaseline$ = [9, n0, _RDPB,
    0, () => exports.RegisterDefaultPatchBaselineRequest$, () => exports.RegisterDefaultPatchBaselineResult$
];
exports.RegisterPatchBaselineForPatchGroup$ = [9, n0, _RPBFPG,
    0, () => exports.RegisterPatchBaselineForPatchGroupRequest$, () => exports.RegisterPatchBaselineForPatchGroupResult$
];
exports.RegisterTargetWithMaintenanceWindow$ = [9, n0, _RTWMW,
    0, () => exports.RegisterTargetWithMaintenanceWindowRequest$, () => exports.RegisterTargetWithMaintenanceWindowResult$
];
exports.RegisterTaskWithMaintenanceWindow$ = [9, n0, _RTWMWe,
    0, () => exports.RegisterTaskWithMaintenanceWindowRequest$, () => exports.RegisterTaskWithMaintenanceWindowResult$
];
exports.RemoveTagsFromResource$ = [9, n0, _RTFR,
    0, () => exports.RemoveTagsFromResourceRequest$, () => exports.RemoveTagsFromResourceResult$
];
exports.ResetServiceSetting$ = [9, n0, _RSS,
    0, () => exports.ResetServiceSettingRequest$, () => exports.ResetServiceSettingResult$
];
exports.ResumeSession$ = [9, n0, _RSe,
    0, () => exports.ResumeSessionRequest$, () => exports.ResumeSessionResponse$
];
exports.SendAutomationSignal$ = [9, n0, _SAS,
    0, () => exports.SendAutomationSignalRequest$, () => exports.SendAutomationSignalResult$
];
exports.SendCommand$ = [9, n0, _SCe,
    0, () => exports.SendCommandRequest$, () => exports.SendCommandResult$
];
exports.StartAccessRequest$ = [9, n0, _SAR,
    0, () => exports.StartAccessRequestRequest$, () => exports.StartAccessRequestResponse$
];
exports.StartAssociationsOnce$ = [9, n0, _SAO,
    0, () => exports.StartAssociationsOnceRequest$, () => exports.StartAssociationsOnceResult$
];
exports.StartAutomationExecution$ = [9, n0, _SAE,
    0, () => exports.StartAutomationExecutionRequest$, () => exports.StartAutomationExecutionResult$
];
exports.StartChangeRequestExecution$ = [9, n0, _SCRE,
    0, () => exports.StartChangeRequestExecutionRequest$, () => exports.StartChangeRequestExecutionResult$
];
exports.StartExecutionPreview$ = [9, n0, _SEP,
    0, () => exports.StartExecutionPreviewRequest$, () => exports.StartExecutionPreviewResponse$
];
exports.StartSession$ = [9, n0, _SSta,
    0, () => exports.StartSessionRequest$, () => exports.StartSessionResponse$
];
exports.StopAutomationExecution$ = [9, n0, _SAEt,
    0, () => exports.StopAutomationExecutionRequest$, () => exports.StopAutomationExecutionResult$
];
exports.TerminateSession$ = [9, n0, _TSe,
    0, () => exports.TerminateSessionRequest$, () => exports.TerminateSessionResponse$
];
exports.UnlabelParameterVersion$ = [9, n0, _UPV,
    0, () => exports.UnlabelParameterVersionRequest$, () => exports.UnlabelParameterVersionResult$
];
exports.UpdateAssociation$ = [9, n0, _UA,
    0, () => exports.UpdateAssociationRequest$, () => exports.UpdateAssociationResult$
];
exports.UpdateAssociationStatus$ = [9, n0, _UAS,
    0, () => exports.UpdateAssociationStatusRequest$, () => exports.UpdateAssociationStatusResult$
];
exports.UpdateDocument$ = [9, n0, _UD,
    0, () => exports.UpdateDocumentRequest$, () => exports.UpdateDocumentResult$
];
exports.UpdateDocumentDefaultVersion$ = [9, n0, _UDDV,
    0, () => exports.UpdateDocumentDefaultVersionRequest$, () => exports.UpdateDocumentDefaultVersionResult$
];
exports.UpdateDocumentMetadata$ = [9, n0, _UDM,
    0, () => exports.UpdateDocumentMetadataRequest$, () => exports.UpdateDocumentMetadataResponse$
];
exports.UpdateMaintenanceWindow$ = [9, n0, _UMW,
    0, () => exports.UpdateMaintenanceWindowRequest$, () => exports.UpdateMaintenanceWindowResult$
];
exports.UpdateMaintenanceWindowTarget$ = [9, n0, _UMWT,
    0, () => exports.UpdateMaintenanceWindowTargetRequest$, () => exports.UpdateMaintenanceWindowTargetResult$
];
exports.UpdateMaintenanceWindowTask$ = [9, n0, _UMWTp,
    0, () => exports.UpdateMaintenanceWindowTaskRequest$, () => exports.UpdateMaintenanceWindowTaskResult$
];
exports.UpdateManagedInstanceRole$ = [9, n0, _UMIR,
    0, () => exports.UpdateManagedInstanceRoleRequest$, () => exports.UpdateManagedInstanceRoleResult$
];
exports.UpdateOpsItem$ = [9, n0, _UOI,
    0, () => exports.UpdateOpsItemRequest$, () => exports.UpdateOpsItemResponse$
];
exports.UpdateOpsMetadata$ = [9, n0, _UOM,
    0, () => exports.UpdateOpsMetadataRequest$, () => exports.UpdateOpsMetadataResult$
];
exports.UpdatePatchBaseline$ = [9, n0, _UPB,
    0, () => exports.UpdatePatchBaselineRequest$, () => exports.UpdatePatchBaselineResult$
];
exports.UpdateResourceDataSync$ = [9, n0, _URDS,
    0, () => exports.UpdateResourceDataSyncRequest$, () => exports.UpdateResourceDataSyncResult$
];
exports.UpdateServiceSetting$ = [9, n0, _USS,
    0, () => exports.UpdateServiceSettingRequest$, () => exports.UpdateServiceSettingResult$
];
