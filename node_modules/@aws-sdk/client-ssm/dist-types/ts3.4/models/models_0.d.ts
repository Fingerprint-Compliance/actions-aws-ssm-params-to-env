import {
  AccessRequestStatus,
  AccessType,
  AssociationComplianceSeverity,
  AssociationExecutionFilterKey,
  AssociationExecutionTargetsFilterKey,
  AssociationFilterOperatorType,
  AssociationStatusName,
  AssociationSyncCompliance,
  AttachmentHashType,
  AttachmentsSourceKey,
  AutomationExecutionFilterKey,
  AutomationExecutionStatus,
  AutomationSubtype,
  AutomationType,
  CalendarState,
  CommandInvocationStatus,
  ConnectionStatus,
  DescribeActivationsFilterKeys,
  DocumentFormat,
  DocumentHashType,
  DocumentParameterType,
  DocumentPermissionType,
  DocumentStatus,
  DocumentType,
  ExecutionMode,
  ExecutionPreviewStatus,
  ExternalAlarmState,
  Fault,
  ImpactType,
  InstanceInformationFilterKey,
  InstancePatchStateOperatorType,
  InstancePropertyFilterKey,
  InstancePropertyFilterOperator,
  InventoryAttributeDataType,
  InventoryDeletionStatus,
  InventoryQueryOperatorType,
  InventorySchemaDeleteOption,
  MaintenanceWindowExecutionStatus,
  MaintenanceWindowResourceType,
  MaintenanceWindowTaskCutoffBehavior,
  MaintenanceWindowTaskType,
  NotificationEvent,
  NotificationType,
  OperatingSystem,
  OpsFilterOperatorType,
  OpsItemDataType,
  OpsItemFilterKey,
  OpsItemFilterOperator,
  OpsItemStatus,
  ParametersFilterKey,
  ParameterTier,
  ParameterType,
  PatchAction,
  PatchComplianceDataState,
  PatchComplianceLevel,
  PatchComplianceStatus,
  PatchDeploymentStatus,
  PatchFilterKey,
  PatchOperationType,
  PatchProperty,
  PatchSet,
  PingStatus,
  PlatformType,
  RebootOption,
  ResourceDataSyncS3Format,
  ResourceType,
  ResourceTypeForTagging,
  ReviewStatus,
  SessionFilterKey,
  SessionState,
  SessionStatus,
  SourceType,
  StepExecutionFilterKey,
} from "./enums";
export interface AccountSharingInfo {
  AccountId?: string | undefined;
  SharedDocumentVersion?: string | undefined;
}
export interface Tag {
  Key: string | undefined;
  Value: string | undefined;
}
export interface Activation {
  ActivationId?: string | undefined;
  Description?: string | undefined;
  DefaultInstanceName?: string | undefined;
  IamRole?: string | undefined;
  RegistrationLimit?: number | undefined;
  RegistrationsCount?: number | undefined;
  ExpirationDate?: Date | undefined;
  Expired?: boolean | undefined;
  CreatedDate?: Date | undefined;
  Tags?: Tag[] | undefined;
}
export interface AddTagsToResourceRequest {
  ResourceType: ResourceTypeForTagging | undefined;
  ResourceId: string | undefined;
  Tags: Tag[] | undefined;
}
export interface AddTagsToResourceResult {}
export interface Alarm {
  Name: string | undefined;
}
export interface AlarmConfiguration {
  IgnorePollAlarmFailure?: boolean | undefined;
  Alarms: Alarm[] | undefined;
}
export interface AlarmStateInformation {
  Name: string | undefined;
  State: ExternalAlarmState | undefined;
}
export interface AssociateOpsItemRelatedItemRequest {
  OpsItemId: string | undefined;
  AssociationType: string | undefined;
  ResourceType: string | undefined;
  ResourceUri: string | undefined;
}
export interface AssociateOpsItemRelatedItemResponse {
  AssociationId?: string | undefined;
}
export interface CancelCommandRequest {
  CommandId: string | undefined;
  InstanceIds?: string[] | undefined;
}
export interface CancelCommandResult {}
export interface CancelMaintenanceWindowExecutionRequest {
  WindowExecutionId: string | undefined;
}
export interface CancelMaintenanceWindowExecutionResult {
  WindowExecutionId?: string | undefined;
}
export interface RegistrationMetadataItem {
  Key: string | undefined;
  Value: string | undefined;
}
export interface CreateActivationRequest {
  Description?: string | undefined;
  DefaultInstanceName?: string | undefined;
  IamRole: string | undefined;
  RegistrationLimit?: number | undefined;
  ExpirationDate?: Date | undefined;
  Tags?: Tag[] | undefined;
  RegistrationMetadata?: RegistrationMetadataItem[] | undefined;
}
export interface CreateActivationResult {
  ActivationId?: string | undefined;
  ActivationCode?: string | undefined;
}
export interface S3OutputLocation {
  OutputS3Region?: string | undefined;
  OutputS3BucketName?: string | undefined;
  OutputS3KeyPrefix?: string | undefined;
}
export interface InstanceAssociationOutputLocation {
  S3Location?: S3OutputLocation | undefined;
}
export interface Target {
  Key?: string | undefined;
  Values?: string[] | undefined;
}
export interface TargetLocation {
  Accounts?: string[] | undefined;
  Regions?: string[] | undefined;
  TargetLocationMaxConcurrency?: string | undefined;
  TargetLocationMaxErrors?: string | undefined;
  ExecutionRoleName?: string | undefined;
  TargetLocationAlarmConfiguration?: AlarmConfiguration | undefined;
  IncludeChildOrganizationUnits?: boolean | undefined;
  ExcludeAccounts?: string[] | undefined;
  Targets?: Target[] | undefined;
  TargetsMaxConcurrency?: string | undefined;
  TargetsMaxErrors?: string | undefined;
}
export interface CreateAssociationRequest {
  Name: string | undefined;
  DocumentVersion?: string | undefined;
  InstanceId?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  Targets?: Target[] | undefined;
  ScheduleExpression?: string | undefined;
  OutputLocation?: InstanceAssociationOutputLocation | undefined;
  AssociationName?: string | undefined;
  AutomationTargetParameterName?: string | undefined;
  MaxErrors?: string | undefined;
  MaxConcurrency?: string | undefined;
  ComplianceSeverity?: AssociationComplianceSeverity | undefined;
  SyncCompliance?: AssociationSyncCompliance | undefined;
  ApplyOnlyAtCronInterval?: boolean | undefined;
  CalendarNames?: string[] | undefined;
  TargetLocations?: TargetLocation[] | undefined;
  ScheduleOffset?: number | undefined;
  Duration?: number | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
  Tags?: Tag[] | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
  AssociationDispatchAssumeRole?: string | undefined;
}
export interface AssociationOverview {
  Status?: string | undefined;
  DetailedStatus?: string | undefined;
  AssociationStatusAggregatedCount?: Record<string, number> | undefined;
}
export interface AssociationStatus {
  Date: Date | undefined;
  Name: AssociationStatusName | undefined;
  Message: string | undefined;
  AdditionalInfo?: string | undefined;
}
export interface AssociationDescription {
  Name?: string | undefined;
  InstanceId?: string | undefined;
  AssociationVersion?: string | undefined;
  Date?: Date | undefined;
  LastUpdateAssociationDate?: Date | undefined;
  Status?: AssociationStatus | undefined;
  Overview?: AssociationOverview | undefined;
  DocumentVersion?: string | undefined;
  AutomationTargetParameterName?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  AssociationId?: string | undefined;
  Targets?: Target[] | undefined;
  ScheduleExpression?: string | undefined;
  OutputLocation?: InstanceAssociationOutputLocation | undefined;
  LastExecutionDate?: Date | undefined;
  LastSuccessfulExecutionDate?: Date | undefined;
  AssociationName?: string | undefined;
  MaxErrors?: string | undefined;
  MaxConcurrency?: string | undefined;
  ComplianceSeverity?: AssociationComplianceSeverity | undefined;
  SyncCompliance?: AssociationSyncCompliance | undefined;
  ApplyOnlyAtCronInterval?: boolean | undefined;
  CalendarNames?: string[] | undefined;
  TargetLocations?: TargetLocation[] | undefined;
  ScheduleOffset?: number | undefined;
  Duration?: number | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
  AssociationDispatchAssumeRole?: string | undefined;
}
export interface CreateAssociationResult {
  AssociationDescription?: AssociationDescription | undefined;
}
export interface CreateAssociationBatchRequestEntry {
  Name: string | undefined;
  InstanceId?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  AutomationTargetParameterName?: string | undefined;
  DocumentVersion?: string | undefined;
  Targets?: Target[] | undefined;
  ScheduleExpression?: string | undefined;
  OutputLocation?: InstanceAssociationOutputLocation | undefined;
  AssociationName?: string | undefined;
  MaxErrors?: string | undefined;
  MaxConcurrency?: string | undefined;
  ComplianceSeverity?: AssociationComplianceSeverity | undefined;
  SyncCompliance?: AssociationSyncCompliance | undefined;
  ApplyOnlyAtCronInterval?: boolean | undefined;
  CalendarNames?: string[] | undefined;
  TargetLocations?: TargetLocation[] | undefined;
  ScheduleOffset?: number | undefined;
  Duration?: number | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
}
export interface CreateAssociationBatchRequest {
  Entries: CreateAssociationBatchRequestEntry[] | undefined;
  AssociationDispatchAssumeRole?: string | undefined;
}
export interface FailedCreateAssociation {
  Entry?: CreateAssociationBatchRequestEntry | undefined;
  Message?: string | undefined;
  Fault?: Fault | undefined;
}
export interface CreateAssociationBatchResult {
  Successful?: AssociationDescription[] | undefined;
  Failed?: FailedCreateAssociation[] | undefined;
}
export interface AttachmentsSource {
  Key?: AttachmentsSourceKey | undefined;
  Values?: string[] | undefined;
  Name?: string | undefined;
}
export interface DocumentRequires {
  Name: string | undefined;
  Version?: string | undefined;
  RequireType?: string | undefined;
  VersionName?: string | undefined;
}
export interface CreateDocumentRequest {
  Content: string | undefined;
  Requires?: DocumentRequires[] | undefined;
  Attachments?: AttachmentsSource[] | undefined;
  Name: string | undefined;
  DisplayName?: string | undefined;
  VersionName?: string | undefined;
  DocumentType?: DocumentType | undefined;
  DocumentFormat?: DocumentFormat | undefined;
  TargetType?: string | undefined;
  Tags?: Tag[] | undefined;
}
export interface AttachmentInformation {
  Name?: string | undefined;
}
export interface DocumentParameter {
  Name?: string | undefined;
  Type?: DocumentParameterType | undefined;
  Description?: string | undefined;
  DefaultValue?: string | undefined;
}
export interface ReviewInformation {
  ReviewedTime?: Date | undefined;
  Status?: ReviewStatus | undefined;
  Reviewer?: string | undefined;
}
export interface DocumentDescription {
  Sha1?: string | undefined;
  Hash?: string | undefined;
  HashType?: DocumentHashType | undefined;
  Name?: string | undefined;
  DisplayName?: string | undefined;
  VersionName?: string | undefined;
  Owner?: string | undefined;
  CreatedDate?: Date | undefined;
  Status?: DocumentStatus | undefined;
  StatusInformation?: string | undefined;
  DocumentVersion?: string | undefined;
  Description?: string | undefined;
  Parameters?: DocumentParameter[] | undefined;
  PlatformTypes?: PlatformType[] | undefined;
  DocumentType?: DocumentType | undefined;
  SchemaVersion?: string | undefined;
  LatestVersion?: string | undefined;
  DefaultVersion?: string | undefined;
  DocumentFormat?: DocumentFormat | undefined;
  TargetType?: string | undefined;
  Tags?: Tag[] | undefined;
  AttachmentsInformation?: AttachmentInformation[] | undefined;
  Requires?: DocumentRequires[] | undefined;
  Author?: string | undefined;
  ReviewInformation?: ReviewInformation[] | undefined;
  ApprovedVersion?: string | undefined;
  PendingReviewVersion?: string | undefined;
  ReviewStatus?: ReviewStatus | undefined;
  Category?: string[] | undefined;
  CategoryEnum?: string[] | undefined;
}
export interface CreateDocumentResult {
  DocumentDescription?: DocumentDescription | undefined;
}
export interface CreateMaintenanceWindowRequest {
  Name: string | undefined;
  Description?: string | undefined;
  StartDate?: string | undefined;
  EndDate?: string | undefined;
  Schedule: string | undefined;
  ScheduleTimezone?: string | undefined;
  ScheduleOffset?: number | undefined;
  Duration: number | undefined;
  Cutoff: number | undefined;
  AllowUnassociatedTargets: boolean | undefined;
  ClientToken?: string | undefined;
  Tags?: Tag[] | undefined;
}
export interface CreateMaintenanceWindowResult {
  WindowId?: string | undefined;
}
export interface OpsItemNotification {
  Arn?: string | undefined;
}
export interface OpsItemDataValue {
  Value?: string | undefined;
  Type?: OpsItemDataType | undefined;
}
export interface RelatedOpsItem {
  OpsItemId: string | undefined;
}
export interface CreateOpsItemRequest {
  Description: string | undefined;
  OpsItemType?: string | undefined;
  OperationalData?: Record<string, OpsItemDataValue> | undefined;
  Notifications?: OpsItemNotification[] | undefined;
  Priority?: number | undefined;
  RelatedOpsItems?: RelatedOpsItem[] | undefined;
  Source: string | undefined;
  Title: string | undefined;
  Tags?: Tag[] | undefined;
  Category?: string | undefined;
  Severity?: string | undefined;
  ActualStartTime?: Date | undefined;
  ActualEndTime?: Date | undefined;
  PlannedStartTime?: Date | undefined;
  PlannedEndTime?: Date | undefined;
  AccountId?: string | undefined;
}
export interface CreateOpsItemResponse {
  OpsItemId?: string | undefined;
  OpsItemArn?: string | undefined;
}
export interface MetadataValue {
  Value?: string | undefined;
}
export interface CreateOpsMetadataRequest {
  ResourceId: string | undefined;
  Metadata?: Record<string, MetadataValue> | undefined;
  Tags?: Tag[] | undefined;
}
export interface CreateOpsMetadataResult {
  OpsMetadataArn?: string | undefined;
}
export interface PatchFilter {
  Key: PatchFilterKey | undefined;
  Values: string[] | undefined;
}
export interface PatchFilterGroup {
  PatchFilters: PatchFilter[] | undefined;
}
export interface PatchRule {
  PatchFilterGroup: PatchFilterGroup | undefined;
  ComplianceLevel?: PatchComplianceLevel | undefined;
  ApproveAfterDays?: number | undefined;
  ApproveUntilDate?: string | undefined;
  EnableNonSecurity?: boolean | undefined;
}
export interface PatchRuleGroup {
  PatchRules: PatchRule[] | undefined;
}
export interface PatchSource {
  Name: string | undefined;
  Products: string[] | undefined;
  Configuration: string | undefined;
}
export interface CreatePatchBaselineRequest {
  OperatingSystem?: OperatingSystem | undefined;
  Name: string | undefined;
  GlobalFilters?: PatchFilterGroup | undefined;
  ApprovalRules?: PatchRuleGroup | undefined;
  ApprovedPatches?: string[] | undefined;
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;
  RejectedPatches?: string[] | undefined;
  RejectedPatchesAction?: PatchAction | undefined;
  Description?: string | undefined;
  Sources?: PatchSource[] | undefined;
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;
  ClientToken?: string | undefined;
  Tags?: Tag[] | undefined;
}
export interface CreatePatchBaselineResult {
  BaselineId?: string | undefined;
}
export interface ResourceDataSyncDestinationDataSharing {
  DestinationDataSharingType?: string | undefined;
}
export interface ResourceDataSyncS3Destination {
  BucketName: string | undefined;
  Prefix?: string | undefined;
  SyncFormat: ResourceDataSyncS3Format | undefined;
  Region: string | undefined;
  AWSKMSKeyARN?: string | undefined;
  DestinationDataSharing?: ResourceDataSyncDestinationDataSharing | undefined;
}
export interface ResourceDataSyncOrganizationalUnit {
  OrganizationalUnitId?: string | undefined;
}
export interface ResourceDataSyncAwsOrganizationsSource {
  OrganizationSourceType: string | undefined;
  OrganizationalUnits?: ResourceDataSyncOrganizationalUnit[] | undefined;
}
export interface ResourceDataSyncSource {
  SourceType: string | undefined;
  AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource | undefined;
  SourceRegions: string[] | undefined;
  IncludeFutureRegions?: boolean | undefined;
  EnableAllOpsDataSources?: boolean | undefined;
}
export interface CreateResourceDataSyncRequest {
  SyncName: string | undefined;
  S3Destination?: ResourceDataSyncS3Destination | undefined;
  SyncType?: string | undefined;
  SyncSource?: ResourceDataSyncSource | undefined;
}
export interface CreateResourceDataSyncResult {}
export interface DeleteActivationRequest {
  ActivationId: string | undefined;
}
export interface DeleteActivationResult {}
export interface DeleteAssociationRequest {
  Name?: string | undefined;
  InstanceId?: string | undefined;
  AssociationId?: string | undefined;
}
export interface DeleteAssociationResult {}
export interface DeleteDocumentRequest {
  Name: string | undefined;
  DocumentVersion?: string | undefined;
  VersionName?: string | undefined;
  Force?: boolean | undefined;
}
export interface DeleteDocumentResult {}
export interface DeleteInventoryRequest {
  TypeName: string | undefined;
  SchemaDeleteOption?: InventorySchemaDeleteOption | undefined;
  DryRun?: boolean | undefined;
  ClientToken?: string | undefined;
}
export interface InventoryDeletionSummaryItem {
  Version?: string | undefined;
  Count?: number | undefined;
  RemainingCount?: number | undefined;
}
export interface InventoryDeletionSummary {
  TotalCount?: number | undefined;
  RemainingCount?: number | undefined;
  SummaryItems?: InventoryDeletionSummaryItem[] | undefined;
}
export interface DeleteInventoryResult {
  DeletionId?: string | undefined;
  TypeName?: string | undefined;
  DeletionSummary?: InventoryDeletionSummary | undefined;
}
export interface DeleteMaintenanceWindowRequest {
  WindowId: string | undefined;
}
export interface DeleteMaintenanceWindowResult {
  WindowId?: string | undefined;
}
export interface DeleteOpsItemRequest {
  OpsItemId: string | undefined;
}
export interface DeleteOpsItemResponse {}
export interface DeleteOpsMetadataRequest {
  OpsMetadataArn: string | undefined;
}
export interface DeleteOpsMetadataResult {}
export interface DeleteParameterRequest {
  Name: string | undefined;
}
export interface DeleteParameterResult {}
export interface DeleteParametersRequest {
  Names: string[] | undefined;
}
export interface DeleteParametersResult {
  DeletedParameters?: string[] | undefined;
  InvalidParameters?: string[] | undefined;
}
export interface DeletePatchBaselineRequest {
  BaselineId: string | undefined;
}
export interface DeletePatchBaselineResult {
  BaselineId?: string | undefined;
}
export interface DeleteResourceDataSyncRequest {
  SyncName: string | undefined;
  SyncType?: string | undefined;
}
export interface DeleteResourceDataSyncResult {}
export interface DeleteResourcePolicyRequest {
  ResourceArn: string | undefined;
  PolicyId: string | undefined;
  PolicyHash: string | undefined;
}
export interface DeleteResourcePolicyResponse {}
export interface DeregisterManagedInstanceRequest {
  InstanceId: string | undefined;
}
export interface DeregisterManagedInstanceResult {}
export interface DeregisterPatchBaselineForPatchGroupRequest {
  BaselineId: string | undefined;
  PatchGroup: string | undefined;
}
export interface DeregisterPatchBaselineForPatchGroupResult {
  BaselineId?: string | undefined;
  PatchGroup?: string | undefined;
}
export interface DeregisterTargetFromMaintenanceWindowRequest {
  WindowId: string | undefined;
  WindowTargetId: string | undefined;
  Safe?: boolean | undefined;
}
export interface DeregisterTargetFromMaintenanceWindowResult {
  WindowId?: string | undefined;
  WindowTargetId?: string | undefined;
}
export interface DeregisterTaskFromMaintenanceWindowRequest {
  WindowId: string | undefined;
  WindowTaskId: string | undefined;
}
export interface DeregisterTaskFromMaintenanceWindowResult {
  WindowId?: string | undefined;
  WindowTaskId?: string | undefined;
}
export interface DescribeActivationsFilter {
  FilterKey?: DescribeActivationsFilterKeys | undefined;
  FilterValues?: string[] | undefined;
}
export interface DescribeActivationsRequest {
  Filters?: DescribeActivationsFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface DescribeActivationsResult {
  ActivationList?: Activation[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeAssociationRequest {
  Name?: string | undefined;
  InstanceId?: string | undefined;
  AssociationId?: string | undefined;
  AssociationVersion?: string | undefined;
}
export interface DescribeAssociationResult {
  AssociationDescription?: AssociationDescription | undefined;
}
export interface AssociationExecutionFilter {
  Key: AssociationExecutionFilterKey | undefined;
  Value: string | undefined;
  Type: AssociationFilterOperatorType | undefined;
}
export interface DescribeAssociationExecutionsRequest {
  AssociationId: string | undefined;
  Filters?: AssociationExecutionFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface AssociationExecution {
  AssociationId?: string | undefined;
  AssociationVersion?: string | undefined;
  ExecutionId?: string | undefined;
  Status?: string | undefined;
  DetailedStatus?: string | undefined;
  CreatedTime?: Date | undefined;
  LastExecutionDate?: Date | undefined;
  ResourceCountByStatus?: string | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}
export interface DescribeAssociationExecutionsResult {
  AssociationExecutions?: AssociationExecution[] | undefined;
  NextToken?: string | undefined;
}
export interface AssociationExecutionTargetsFilter {
  Key: AssociationExecutionTargetsFilterKey | undefined;
  Value: string | undefined;
}
export interface DescribeAssociationExecutionTargetsRequest {
  AssociationId: string | undefined;
  ExecutionId: string | undefined;
  Filters?: AssociationExecutionTargetsFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface OutputSource {
  OutputSourceId?: string | undefined;
  OutputSourceType?: string | undefined;
}
export interface AssociationExecutionTarget {
  AssociationId?: string | undefined;
  AssociationVersion?: string | undefined;
  ExecutionId?: string | undefined;
  ResourceId?: string | undefined;
  ResourceType?: string | undefined;
  Status?: string | undefined;
  DetailedStatus?: string | undefined;
  LastExecutionDate?: Date | undefined;
  OutputSource?: OutputSource | undefined;
}
export interface DescribeAssociationExecutionTargetsResult {
  AssociationExecutionTargets?: AssociationExecutionTarget[] | undefined;
  NextToken?: string | undefined;
}
export interface AutomationExecutionFilter {
  Key: AutomationExecutionFilterKey | undefined;
  Values: string[] | undefined;
}
export interface DescribeAutomationExecutionsRequest {
  Filters?: AutomationExecutionFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface ResolvedTargets {
  ParameterValues?: string[] | undefined;
  Truncated?: boolean | undefined;
}
export interface Runbook {
  DocumentName: string | undefined;
  DocumentVersion?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  TargetParameterName?: string | undefined;
  Targets?: Target[] | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  TargetLocations?: TargetLocation[] | undefined;
}
export interface AutomationExecutionMetadata {
  AutomationExecutionId?: string | undefined;
  DocumentName?: string | undefined;
  DocumentVersion?: string | undefined;
  AutomationExecutionStatus?: AutomationExecutionStatus | undefined;
  ExecutionStartTime?: Date | undefined;
  ExecutionEndTime?: Date | undefined;
  ExecutedBy?: string | undefined;
  LogFile?: string | undefined;
  Outputs?: Record<string, string[]> | undefined;
  Mode?: ExecutionMode | undefined;
  ParentAutomationExecutionId?: string | undefined;
  CurrentStepName?: string | undefined;
  CurrentAction?: string | undefined;
  FailureMessage?: string | undefined;
  TargetParameterName?: string | undefined;
  Targets?: Target[] | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
  ResolvedTargets?: ResolvedTargets | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  Target?: string | undefined;
  AutomationType?: AutomationType | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
  TargetLocationsURL?: string | undefined;
  AutomationSubtype?: AutomationSubtype | undefined;
  ScheduledTime?: Date | undefined;
  Runbooks?: Runbook[] | undefined;
  OpsItemId?: string | undefined;
  AssociationId?: string | undefined;
  ChangeRequestName?: string | undefined;
}
export interface DescribeAutomationExecutionsResult {
  AutomationExecutionMetadataList?: AutomationExecutionMetadata[] | undefined;
  NextToken?: string | undefined;
}
export interface StepExecutionFilter {
  Key: StepExecutionFilterKey | undefined;
  Values: string[] | undefined;
}
export interface DescribeAutomationStepExecutionsRequest {
  AutomationExecutionId: string | undefined;
  Filters?: StepExecutionFilter[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
  ReverseOrder?: boolean | undefined;
}
export interface FailureDetails {
  FailureStage?: string | undefined;
  FailureType?: string | undefined;
  Details?: Record<string, string[]> | undefined;
}
export interface ParentStepDetails {
  StepExecutionId?: string | undefined;
  StepName?: string | undefined;
  Action?: string | undefined;
  Iteration?: number | undefined;
  IteratorValue?: string | undefined;
}
export interface StepExecution {
  StepName?: string | undefined;
  Action?: string | undefined;
  TimeoutSeconds?: number | undefined;
  OnFailure?: string | undefined;
  MaxAttempts?: number | undefined;
  ExecutionStartTime?: Date | undefined;
  ExecutionEndTime?: Date | undefined;
  StepStatus?: AutomationExecutionStatus | undefined;
  ResponseCode?: string | undefined;
  Inputs?: Record<string, string> | undefined;
  Outputs?: Record<string, string[]> | undefined;
  Response?: string | undefined;
  FailureMessage?: string | undefined;
  FailureDetails?: FailureDetails | undefined;
  StepExecutionId?: string | undefined;
  OverriddenParameters?: Record<string, string[]> | undefined;
  IsEnd?: boolean | undefined;
  NextStep?: string | undefined;
  IsCritical?: boolean | undefined;
  ValidNextSteps?: string[] | undefined;
  Targets?: Target[] | undefined;
  TargetLocation?: TargetLocation | undefined;
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
  ParentStepDetails?: ParentStepDetails | undefined;
}
export interface DescribeAutomationStepExecutionsResult {
  StepExecutions?: StepExecution[] | undefined;
  NextToken?: string | undefined;
}
export interface PatchOrchestratorFilter {
  Key?: string | undefined;
  Values?: string[] | undefined;
}
export interface DescribeAvailablePatchesRequest {
  Filters?: PatchOrchestratorFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface Patch {
  Id?: string | undefined;
  ReleaseDate?: Date | undefined;
  Title?: string | undefined;
  Description?: string | undefined;
  ContentUrl?: string | undefined;
  Vendor?: string | undefined;
  ProductFamily?: string | undefined;
  Product?: string | undefined;
  Classification?: string | undefined;
  MsrcSeverity?: string | undefined;
  KbNumber?: string | undefined;
  MsrcNumber?: string | undefined;
  Language?: string | undefined;
  AdvisoryIds?: string[] | undefined;
  BugzillaIds?: string[] | undefined;
  CVEIds?: string[] | undefined;
  Name?: string | undefined;
  Epoch?: number | undefined;
  Version?: string | undefined;
  Release?: string | undefined;
  Arch?: string | undefined;
  Severity?: string | undefined;
  Repository?: string | undefined;
}
export interface DescribeAvailablePatchesResult {
  Patches?: Patch[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeDocumentRequest {
  Name: string | undefined;
  DocumentVersion?: string | undefined;
  VersionName?: string | undefined;
}
export interface DescribeDocumentResult {
  Document?: DocumentDescription | undefined;
}
export interface DescribeDocumentPermissionRequest {
  Name: string | undefined;
  PermissionType: DocumentPermissionType | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface DescribeDocumentPermissionResponse {
  AccountIds?: string[] | undefined;
  AccountSharingInfoList?: AccountSharingInfo[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeEffectiveInstanceAssociationsRequest {
  InstanceId: string | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface InstanceAssociation {
  AssociationId?: string | undefined;
  InstanceId?: string | undefined;
  Content?: string | undefined;
  AssociationVersion?: string | undefined;
}
export interface DescribeEffectiveInstanceAssociationsResult {
  Associations?: InstanceAssociation[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeEffectivePatchesForPatchBaselineRequest {
  BaselineId: string | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface PatchStatus {
  DeploymentStatus?: PatchDeploymentStatus | undefined;
  ComplianceLevel?: PatchComplianceLevel | undefined;
  ApprovalDate?: Date | undefined;
}
export interface EffectivePatch {
  Patch?: Patch | undefined;
  PatchStatus?: PatchStatus | undefined;
}
export interface DescribeEffectivePatchesForPatchBaselineResult {
  EffectivePatches?: EffectivePatch[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeInstanceAssociationsStatusRequest {
  InstanceId: string | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface S3OutputUrl {
  OutputUrl?: string | undefined;
}
export interface InstanceAssociationOutputUrl {
  S3OutputUrl?: S3OutputUrl | undefined;
}
export interface InstanceAssociationStatusInfo {
  AssociationId?: string | undefined;
  Name?: string | undefined;
  DocumentVersion?: string | undefined;
  AssociationVersion?: string | undefined;
  InstanceId?: string | undefined;
  ExecutionDate?: Date | undefined;
  Status?: string | undefined;
  DetailedStatus?: string | undefined;
  ExecutionSummary?: string | undefined;
  ErrorCode?: string | undefined;
  OutputUrl?: InstanceAssociationOutputUrl | undefined;
  AssociationName?: string | undefined;
}
export interface DescribeInstanceAssociationsStatusResult {
  InstanceAssociationStatusInfos?: InstanceAssociationStatusInfo[] | undefined;
  NextToken?: string | undefined;
}
export interface InstanceInformationStringFilter {
  Key: string | undefined;
  Values: string[] | undefined;
}
export interface InstanceInformationFilter {
  key: InstanceInformationFilterKey | undefined;
  valueSet: string[] | undefined;
}
export interface DescribeInstanceInformationRequest {
  InstanceInformationFilterList?: InstanceInformationFilter[] | undefined;
  Filters?: InstanceInformationStringFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface InstanceAggregatedAssociationOverview {
  DetailedStatus?: string | undefined;
  InstanceAssociationStatusAggregatedCount?: Record<string, number> | undefined;
}
export interface InstanceInformation {
  InstanceId?: string | undefined;
  PingStatus?: PingStatus | undefined;
  LastPingDateTime?: Date | undefined;
  AgentVersion?: string | undefined;
  IsLatestVersion?: boolean | undefined;
  PlatformType?: PlatformType | undefined;
  PlatformName?: string | undefined;
  PlatformVersion?: string | undefined;
  ActivationId?: string | undefined;
  IamRole?: string | undefined;
  RegistrationDate?: Date | undefined;
  ResourceType?: ResourceType | undefined;
  Name?: string | undefined;
  IPAddress?: string | undefined;
  ComputerName?: string | undefined;
  AssociationStatus?: string | undefined;
  LastAssociationExecutionDate?: Date | undefined;
  LastSuccessfulAssociationExecutionDate?: Date | undefined;
  AssociationOverview?: InstanceAggregatedAssociationOverview | undefined;
  SourceId?: string | undefined;
  SourceType?: SourceType | undefined;
}
export interface DescribeInstanceInformationResult {
  InstanceInformationList?: InstanceInformation[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeInstancePatchesRequest {
  InstanceId: string | undefined;
  Filters?: PatchOrchestratorFilter[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface PatchComplianceData {
  Title: string | undefined;
  KBId: string | undefined;
  Classification: string | undefined;
  Severity: string | undefined;
  State: PatchComplianceDataState | undefined;
  InstalledTime: Date | undefined;
  CVEIds?: string | undefined;
}
export interface DescribeInstancePatchesResult {
  Patches?: PatchComplianceData[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeInstancePatchStatesRequest {
  InstanceIds: string[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface InstancePatchState {
  InstanceId: string | undefined;
  PatchGroup: string | undefined;
  BaselineId: string | undefined;
  SnapshotId?: string | undefined;
  InstallOverrideList?: string | undefined;
  OwnerInformation?: string | undefined;
  InstalledCount?: number | undefined;
  InstalledOtherCount?: number | undefined;
  InstalledPendingRebootCount?: number | undefined;
  InstalledRejectedCount?: number | undefined;
  MissingCount?: number | undefined;
  FailedCount?: number | undefined;
  UnreportedNotApplicableCount?: number | undefined;
  NotApplicableCount?: number | undefined;
  AvailableSecurityUpdateCount?: number | undefined;
  OperationStartTime: Date | undefined;
  OperationEndTime: Date | undefined;
  Operation: PatchOperationType | undefined;
  LastNoRebootInstallOperationTime?: Date | undefined;
  RebootOption?: RebootOption | undefined;
  CriticalNonCompliantCount?: number | undefined;
  SecurityNonCompliantCount?: number | undefined;
  OtherNonCompliantCount?: number | undefined;
}
export interface DescribeInstancePatchStatesResult {
  InstancePatchStates?: InstancePatchState[] | undefined;
  NextToken?: string | undefined;
}
export interface InstancePatchStateFilter {
  Key: string | undefined;
  Values: string[] | undefined;
  Type: InstancePatchStateOperatorType | undefined;
}
export interface DescribeInstancePatchStatesForPatchGroupRequest {
  PatchGroup: string | undefined;
  Filters?: InstancePatchStateFilter[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface DescribeInstancePatchStatesForPatchGroupResult {
  InstancePatchStates?: InstancePatchState[] | undefined;
  NextToken?: string | undefined;
}
export interface InstancePropertyStringFilter {
  Key: string | undefined;
  Values: string[] | undefined;
  Operator?: InstancePropertyFilterOperator | undefined;
}
export interface InstancePropertyFilter {
  key: InstancePropertyFilterKey | undefined;
  valueSet: string[] | undefined;
}
export interface DescribeInstancePropertiesRequest {
  InstancePropertyFilterList?: InstancePropertyFilter[] | undefined;
  FiltersWithOperator?: InstancePropertyStringFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface InstanceProperty {
  Name?: string | undefined;
  InstanceId?: string | undefined;
  InstanceType?: string | undefined;
  InstanceRole?: string | undefined;
  KeyName?: string | undefined;
  InstanceState?: string | undefined;
  Architecture?: string | undefined;
  IPAddress?: string | undefined;
  LaunchTime?: Date | undefined;
  PingStatus?: PingStatus | undefined;
  LastPingDateTime?: Date | undefined;
  AgentVersion?: string | undefined;
  PlatformType?: PlatformType | undefined;
  PlatformName?: string | undefined;
  PlatformVersion?: string | undefined;
  ActivationId?: string | undefined;
  IamRole?: string | undefined;
  RegistrationDate?: Date | undefined;
  ResourceType?: string | undefined;
  ComputerName?: string | undefined;
  AssociationStatus?: string | undefined;
  LastAssociationExecutionDate?: Date | undefined;
  LastSuccessfulAssociationExecutionDate?: Date | undefined;
  AssociationOverview?: InstanceAggregatedAssociationOverview | undefined;
  SourceId?: string | undefined;
  SourceType?: SourceType | undefined;
}
export interface DescribeInstancePropertiesResult {
  InstanceProperties?: InstanceProperty[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeInventoryDeletionsRequest {
  DeletionId?: string | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface InventoryDeletionStatusItem {
  DeletionId?: string | undefined;
  TypeName?: string | undefined;
  DeletionStartTime?: Date | undefined;
  LastStatus?: InventoryDeletionStatus | undefined;
  LastStatusMessage?: string | undefined;
  DeletionSummary?: InventoryDeletionSummary | undefined;
  LastStatusUpdateTime?: Date | undefined;
}
export interface DescribeInventoryDeletionsResult {
  InventoryDeletions?: InventoryDeletionStatusItem[] | undefined;
  NextToken?: string | undefined;
}
export interface MaintenanceWindowFilter {
  Key?: string | undefined;
  Values?: string[] | undefined;
}
export interface DescribeMaintenanceWindowExecutionsRequest {
  WindowId: string | undefined;
  Filters?: MaintenanceWindowFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface MaintenanceWindowExecution {
  WindowId?: string | undefined;
  WindowExecutionId?: string | undefined;
  Status?: MaintenanceWindowExecutionStatus | undefined;
  StatusDetails?: string | undefined;
  StartTime?: Date | undefined;
  EndTime?: Date | undefined;
}
export interface DescribeMaintenanceWindowExecutionsResult {
  WindowExecutions?: MaintenanceWindowExecution[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
  WindowExecutionId: string | undefined;
  TaskId: string | undefined;
  Filters?: MaintenanceWindowFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface MaintenanceWindowExecutionTaskInvocationIdentity {
  WindowExecutionId?: string | undefined;
  TaskExecutionId?: string | undefined;
  InvocationId?: string | undefined;
  ExecutionId?: string | undefined;
  TaskType?: MaintenanceWindowTaskType | undefined;
  Parameters?: string | undefined;
  Status?: MaintenanceWindowExecutionStatus | undefined;
  StatusDetails?: string | undefined;
  StartTime?: Date | undefined;
  EndTime?: Date | undefined;
  OwnerInformation?: string | undefined;
  WindowTargetId?: string | undefined;
}
export interface DescribeMaintenanceWindowExecutionTaskInvocationsResult {
  WindowExecutionTaskInvocationIdentities?:
    | MaintenanceWindowExecutionTaskInvocationIdentity[]
    | undefined;
  NextToken?: string | undefined;
}
export interface DescribeMaintenanceWindowExecutionTasksRequest {
  WindowExecutionId: string | undefined;
  Filters?: MaintenanceWindowFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface MaintenanceWindowExecutionTaskIdentity {
  WindowExecutionId?: string | undefined;
  TaskExecutionId?: string | undefined;
  Status?: MaintenanceWindowExecutionStatus | undefined;
  StatusDetails?: string | undefined;
  StartTime?: Date | undefined;
  EndTime?: Date | undefined;
  TaskArn?: string | undefined;
  TaskType?: MaintenanceWindowTaskType | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}
export interface DescribeMaintenanceWindowExecutionTasksResult {
  WindowExecutionTaskIdentities?:
    | MaintenanceWindowExecutionTaskIdentity[]
    | undefined;
  NextToken?: string | undefined;
}
export interface DescribeMaintenanceWindowsRequest {
  Filters?: MaintenanceWindowFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface MaintenanceWindowIdentity {
  WindowId?: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  Enabled?: boolean | undefined;
  Duration?: number | undefined;
  Cutoff?: number | undefined;
  Schedule?: string | undefined;
  ScheduleTimezone?: string | undefined;
  ScheduleOffset?: number | undefined;
  EndDate?: string | undefined;
  StartDate?: string | undefined;
  NextExecutionTime?: string | undefined;
}
export interface DescribeMaintenanceWindowsResult {
  WindowIdentities?: MaintenanceWindowIdentity[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeMaintenanceWindowScheduleRequest {
  WindowId?: string | undefined;
  Targets?: Target[] | undefined;
  ResourceType?: MaintenanceWindowResourceType | undefined;
  Filters?: PatchOrchestratorFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface ScheduledWindowExecution {
  WindowId?: string | undefined;
  Name?: string | undefined;
  ExecutionTime?: string | undefined;
}
export interface DescribeMaintenanceWindowScheduleResult {
  ScheduledWindowExecutions?: ScheduledWindowExecution[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeMaintenanceWindowsForTargetRequest {
  Targets: Target[] | undefined;
  ResourceType: MaintenanceWindowResourceType | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface MaintenanceWindowIdentityForTarget {
  WindowId?: string | undefined;
  Name?: string | undefined;
}
export interface DescribeMaintenanceWindowsForTargetResult {
  WindowIdentities?: MaintenanceWindowIdentityForTarget[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeMaintenanceWindowTargetsRequest {
  WindowId: string | undefined;
  Filters?: MaintenanceWindowFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface MaintenanceWindowTarget {
  WindowId?: string | undefined;
  WindowTargetId?: string | undefined;
  ResourceType?: MaintenanceWindowResourceType | undefined;
  Targets?: Target[] | undefined;
  OwnerInformation?: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
}
export interface DescribeMaintenanceWindowTargetsResult {
  Targets?: MaintenanceWindowTarget[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribeMaintenanceWindowTasksRequest {
  WindowId: string | undefined;
  Filters?: MaintenanceWindowFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface LoggingInfo {
  S3BucketName: string | undefined;
  S3KeyPrefix?: string | undefined;
  S3Region: string | undefined;
}
export interface MaintenanceWindowTaskParameterValueExpression {
  Values?: string[] | undefined;
}
export interface MaintenanceWindowTask {
  WindowId?: string | undefined;
  WindowTaskId?: string | undefined;
  TaskArn?: string | undefined;
  Type?: MaintenanceWindowTaskType | undefined;
  Targets?: Target[] | undefined;
  TaskParameters?:
    | Record<string, MaintenanceWindowTaskParameterValueExpression>
    | undefined;
  Priority?: number | undefined;
  LoggingInfo?: LoggingInfo | undefined;
  ServiceRoleArn?: string | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
}
export interface DescribeMaintenanceWindowTasksResult {
  Tasks?: MaintenanceWindowTask[] | undefined;
  NextToken?: string | undefined;
}
export interface OpsItemFilter {
  Key: OpsItemFilterKey | undefined;
  Values: string[] | undefined;
  Operator: OpsItemFilterOperator | undefined;
}
export interface DescribeOpsItemsRequest {
  OpsItemFilters?: OpsItemFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface OpsItemSummary {
  CreatedBy?: string | undefined;
  CreatedTime?: Date | undefined;
  LastModifiedBy?: string | undefined;
  LastModifiedTime?: Date | undefined;
  Priority?: number | undefined;
  Source?: string | undefined;
  Status?: OpsItemStatus | undefined;
  OpsItemId?: string | undefined;
  Title?: string | undefined;
  OperationalData?: Record<string, OpsItemDataValue> | undefined;
  Category?: string | undefined;
  Severity?: string | undefined;
  OpsItemType?: string | undefined;
  ActualStartTime?: Date | undefined;
  ActualEndTime?: Date | undefined;
  PlannedStartTime?: Date | undefined;
  PlannedEndTime?: Date | undefined;
}
export interface DescribeOpsItemsResponse {
  NextToken?: string | undefined;
  OpsItemSummaries?: OpsItemSummary[] | undefined;
}
export interface ParametersFilter {
  Key: ParametersFilterKey | undefined;
  Values: string[] | undefined;
}
export interface ParameterStringFilter {
  Key: string | undefined;
  Option?: string | undefined;
  Values?: string[] | undefined;
}
export interface DescribeParametersRequest {
  Filters?: ParametersFilter[] | undefined;
  ParameterFilters?: ParameterStringFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
  Shared?: boolean | undefined;
}
export interface ParameterInlinePolicy {
  PolicyText?: string | undefined;
  PolicyType?: string | undefined;
  PolicyStatus?: string | undefined;
}
export interface ParameterMetadata {
  Name?: string | undefined;
  ARN?: string | undefined;
  Type?: ParameterType | undefined;
  KeyId?: string | undefined;
  LastModifiedDate?: Date | undefined;
  LastModifiedUser?: string | undefined;
  Description?: string | undefined;
  AllowedPattern?: string | undefined;
  Version?: number | undefined;
  Tier?: ParameterTier | undefined;
  Policies?: ParameterInlinePolicy[] | undefined;
  DataType?: string | undefined;
}
export interface DescribeParametersResult {
  Parameters?: ParameterMetadata[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribePatchBaselinesRequest {
  Filters?: PatchOrchestratorFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface PatchBaselineIdentity {
  BaselineId?: string | undefined;
  BaselineName?: string | undefined;
  OperatingSystem?: OperatingSystem | undefined;
  BaselineDescription?: string | undefined;
  DefaultBaseline?: boolean | undefined;
}
export interface DescribePatchBaselinesResult {
  BaselineIdentities?: PatchBaselineIdentity[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribePatchGroupsRequest {
  MaxResults?: number | undefined;
  Filters?: PatchOrchestratorFilter[] | undefined;
  NextToken?: string | undefined;
}
export interface PatchGroupPatchBaselineMapping {
  PatchGroup?: string | undefined;
  BaselineIdentity?: PatchBaselineIdentity | undefined;
}
export interface DescribePatchGroupsResult {
  Mappings?: PatchGroupPatchBaselineMapping[] | undefined;
  NextToken?: string | undefined;
}
export interface DescribePatchGroupStateRequest {
  PatchGroup: string | undefined;
}
export interface DescribePatchGroupStateResult {
  Instances?: number | undefined;
  InstancesWithInstalledPatches?: number | undefined;
  InstancesWithInstalledOtherPatches?: number | undefined;
  InstancesWithInstalledPendingRebootPatches?: number | undefined;
  InstancesWithInstalledRejectedPatches?: number | undefined;
  InstancesWithMissingPatches?: number | undefined;
  InstancesWithFailedPatches?: number | undefined;
  InstancesWithNotApplicablePatches?: number | undefined;
  InstancesWithUnreportedNotApplicablePatches?: number | undefined;
  InstancesWithCriticalNonCompliantPatches?: number | undefined;
  InstancesWithSecurityNonCompliantPatches?: number | undefined;
  InstancesWithOtherNonCompliantPatches?: number | undefined;
  InstancesWithAvailableSecurityUpdates?: number | undefined;
}
export interface DescribePatchPropertiesRequest {
  OperatingSystem: OperatingSystem | undefined;
  Property: PatchProperty | undefined;
  PatchSet?: PatchSet | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface DescribePatchPropertiesResult {
  Properties?: Record<string, string>[] | undefined;
  NextToken?: string | undefined;
}
export interface SessionFilter {
  key: SessionFilterKey | undefined;
  value: string | undefined;
}
export interface DescribeSessionsRequest {
  State: SessionState | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
  Filters?: SessionFilter[] | undefined;
}
export interface SessionManagerOutputUrl {
  S3OutputUrl?: string | undefined;
  CloudWatchOutputUrl?: string | undefined;
}
export interface Session {
  SessionId?: string | undefined;
  Target?: string | undefined;
  Status?: SessionStatus | undefined;
  StartDate?: Date | undefined;
  EndDate?: Date | undefined;
  DocumentName?: string | undefined;
  Owner?: string | undefined;
  Reason?: string | undefined;
  Details?: string | undefined;
  OutputUrl?: SessionManagerOutputUrl | undefined;
  MaxSessionDuration?: string | undefined;
  AccessType?: AccessType | undefined;
}
export interface DescribeSessionsResponse {
  Sessions?: Session[] | undefined;
  NextToken?: string | undefined;
}
export interface DisassociateOpsItemRelatedItemRequest {
  OpsItemId: string | undefined;
  AssociationId: string | undefined;
}
export interface DisassociateOpsItemRelatedItemResponse {}
export interface GetAccessTokenRequest {
  AccessRequestId: string | undefined;
}
export interface Credentials {
  AccessKeyId: string | undefined;
  SecretAccessKey: string | undefined;
  SessionToken: string | undefined;
  ExpirationTime: Date | undefined;
}
export interface GetAccessTokenResponse {
  Credentials?: Credentials | undefined;
  AccessRequestStatus?: AccessRequestStatus | undefined;
}
export interface GetAutomationExecutionRequest {
  AutomationExecutionId: string | undefined;
}
export interface ProgressCounters {
  TotalSteps?: number | undefined;
  SuccessSteps?: number | undefined;
  FailedSteps?: number | undefined;
  CancelledSteps?: number | undefined;
  TimedOutSteps?: number | undefined;
}
export interface AutomationExecution {
  AutomationExecutionId?: string | undefined;
  DocumentName?: string | undefined;
  DocumentVersion?: string | undefined;
  ExecutionStartTime?: Date | undefined;
  ExecutionEndTime?: Date | undefined;
  AutomationExecutionStatus?: AutomationExecutionStatus | undefined;
  StepExecutions?: StepExecution[] | undefined;
  StepExecutionsTruncated?: boolean | undefined;
  Parameters?: Record<string, string[]> | undefined;
  Outputs?: Record<string, string[]> | undefined;
  FailureMessage?: string | undefined;
  Mode?: ExecutionMode | undefined;
  ParentAutomationExecutionId?: string | undefined;
  ExecutedBy?: string | undefined;
  CurrentStepName?: string | undefined;
  CurrentAction?: string | undefined;
  TargetParameterName?: string | undefined;
  Targets?: Target[] | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
  ResolvedTargets?: ResolvedTargets | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  Target?: string | undefined;
  TargetLocations?: TargetLocation[] | undefined;
  ProgressCounters?: ProgressCounters | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
  TargetLocationsURL?: string | undefined;
  AutomationSubtype?: AutomationSubtype | undefined;
  ScheduledTime?: Date | undefined;
  Runbooks?: Runbook[] | undefined;
  OpsItemId?: string | undefined;
  AssociationId?: string | undefined;
  ChangeRequestName?: string | undefined;
  Variables?: Record<string, string[]> | undefined;
}
export interface GetAutomationExecutionResult {
  AutomationExecution?: AutomationExecution | undefined;
}
export interface GetCalendarStateRequest {
  CalendarNames: string[] | undefined;
  AtTime?: string | undefined;
}
export interface GetCalendarStateResponse {
  State?: CalendarState | undefined;
  AtTime?: string | undefined;
  NextTransitionTime?: string | undefined;
}
export interface GetCommandInvocationRequest {
  CommandId: string | undefined;
  InstanceId: string | undefined;
  PluginName?: string | undefined;
}
export interface CloudWatchOutputConfig {
  CloudWatchLogGroupName?: string | undefined;
  CloudWatchOutputEnabled?: boolean | undefined;
}
export interface GetCommandInvocationResult {
  CommandId?: string | undefined;
  InstanceId?: string | undefined;
  Comment?: string | undefined;
  DocumentName?: string | undefined;
  DocumentVersion?: string | undefined;
  PluginName?: string | undefined;
  ResponseCode?: number | undefined;
  ExecutionStartDateTime?: string | undefined;
  ExecutionElapsedTime?: string | undefined;
  ExecutionEndDateTime?: string | undefined;
  Status?: CommandInvocationStatus | undefined;
  StatusDetails?: string | undefined;
  StandardOutputContent?: string | undefined;
  StandardOutputUrl?: string | undefined;
  StandardErrorContent?: string | undefined;
  StandardErrorUrl?: string | undefined;
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;
}
export interface GetConnectionStatusRequest {
  Target: string | undefined;
}
export interface GetConnectionStatusResponse {
  Target?: string | undefined;
  Status?: ConnectionStatus | undefined;
}
export interface GetDefaultPatchBaselineRequest {
  OperatingSystem?: OperatingSystem | undefined;
}
export interface GetDefaultPatchBaselineResult {
  BaselineId?: string | undefined;
  OperatingSystem?: OperatingSystem | undefined;
}
export interface BaselineOverride {
  OperatingSystem?: OperatingSystem | undefined;
  GlobalFilters?: PatchFilterGroup | undefined;
  ApprovalRules?: PatchRuleGroup | undefined;
  ApprovedPatches?: string[] | undefined;
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;
  RejectedPatches?: string[] | undefined;
  RejectedPatchesAction?: PatchAction | undefined;
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;
  Sources?: PatchSource[] | undefined;
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;
}
export interface GetDeployablePatchSnapshotForInstanceRequest {
  InstanceId: string | undefined;
  SnapshotId: string | undefined;
  BaselineOverride?: BaselineOverride | undefined;
  UseS3DualStackEndpoint?: boolean | undefined;
}
export interface GetDeployablePatchSnapshotForInstanceResult {
  InstanceId?: string | undefined;
  SnapshotId?: string | undefined;
  SnapshotDownloadUrl?: string | undefined;
  Product?: string | undefined;
}
export interface GetDocumentRequest {
  Name: string | undefined;
  VersionName?: string | undefined;
  DocumentVersion?: string | undefined;
  DocumentFormat?: DocumentFormat | undefined;
}
export interface AttachmentContent {
  Name?: string | undefined;
  Size?: number | undefined;
  Hash?: string | undefined;
  HashType?: AttachmentHashType | undefined;
  Url?: string | undefined;
}
export interface GetDocumentResult {
  Name?: string | undefined;
  CreatedDate?: Date | undefined;
  DisplayName?: string | undefined;
  VersionName?: string | undefined;
  DocumentVersion?: string | undefined;
  Status?: DocumentStatus | undefined;
  StatusInformation?: string | undefined;
  Content?: string | undefined;
  DocumentType?: DocumentType | undefined;
  DocumentFormat?: DocumentFormat | undefined;
  Requires?: DocumentRequires[] | undefined;
  AttachmentsContent?: AttachmentContent[] | undefined;
  ReviewStatus?: ReviewStatus | undefined;
}
export interface GetExecutionPreviewRequest {
  ExecutionPreviewId: string | undefined;
}
export interface TargetPreview {
  Count?: number | undefined;
  TargetType?: string | undefined;
}
export interface AutomationExecutionPreview {
  StepPreviews?: Partial<Record<ImpactType, number>> | undefined;
  Regions?: string[] | undefined;
  TargetPreviews?: TargetPreview[] | undefined;
  TotalAccounts?: number | undefined;
}
export type ExecutionPreview =
  | ExecutionPreview.AutomationMember
  | ExecutionPreview.$UnknownMember;
export declare namespace ExecutionPreview {
  interface AutomationMember {
    Automation: AutomationExecutionPreview;
    $unknown?: never;
  }
  interface $UnknownMember {
    Automation?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    Automation: (value: AutomationExecutionPreview) => T;
    _: (name: string, value: any) => T;
  }
}
export interface GetExecutionPreviewResponse {
  ExecutionPreviewId?: string | undefined;
  EndedAt?: Date | undefined;
  Status?: ExecutionPreviewStatus | undefined;
  StatusMessage?: string | undefined;
  ExecutionPreview?: ExecutionPreview | undefined;
}
export interface InventoryFilter {
  Key: string | undefined;
  Values: string[] | undefined;
  Type?: InventoryQueryOperatorType | undefined;
}
export interface InventoryGroup {
  Name: string | undefined;
  Filters: InventoryFilter[] | undefined;
}
export interface ResultAttribute {
  TypeName: string | undefined;
}
export interface InventoryResultItem {
  TypeName: string | undefined;
  SchemaVersion: string | undefined;
  CaptureTime?: string | undefined;
  ContentHash?: string | undefined;
  Content: Record<string, string>[] | undefined;
}
export interface InventoryResultEntity {
  Id?: string | undefined;
  Data?: Record<string, InventoryResultItem> | undefined;
}
export interface GetInventoryResult {
  Entities?: InventoryResultEntity[] | undefined;
  NextToken?: string | undefined;
}
export interface GetInventorySchemaRequest {
  TypeName?: string | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
  Aggregator?: boolean | undefined;
  SubType?: boolean | undefined;
}
export interface InventoryItemAttribute {
  Name: string | undefined;
  DataType: InventoryAttributeDataType | undefined;
}
export interface InventoryItemSchema {
  TypeName: string | undefined;
  Version?: string | undefined;
  Attributes: InventoryItemAttribute[] | undefined;
  DisplayName?: string | undefined;
}
export interface GetInventorySchemaResult {
  Schemas?: InventoryItemSchema[] | undefined;
  NextToken?: string | undefined;
}
export interface GetMaintenanceWindowRequest {
  WindowId: string | undefined;
}
export interface GetMaintenanceWindowResult {
  WindowId?: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  StartDate?: string | undefined;
  EndDate?: string | undefined;
  Schedule?: string | undefined;
  ScheduleTimezone?: string | undefined;
  ScheduleOffset?: number | undefined;
  NextExecutionTime?: string | undefined;
  Duration?: number | undefined;
  Cutoff?: number | undefined;
  AllowUnassociatedTargets?: boolean | undefined;
  Enabled?: boolean | undefined;
  CreatedDate?: Date | undefined;
  ModifiedDate?: Date | undefined;
}
export interface GetMaintenanceWindowExecutionRequest {
  WindowExecutionId: string | undefined;
}
export interface GetMaintenanceWindowExecutionResult {
  WindowExecutionId?: string | undefined;
  TaskIds?: string[] | undefined;
  Status?: MaintenanceWindowExecutionStatus | undefined;
  StatusDetails?: string | undefined;
  StartTime?: Date | undefined;
  EndTime?: Date | undefined;
}
export interface GetMaintenanceWindowExecutionTaskRequest {
  WindowExecutionId: string | undefined;
  TaskId: string | undefined;
}
export interface GetMaintenanceWindowExecutionTaskResult {
  WindowExecutionId?: string | undefined;
  TaskExecutionId?: string | undefined;
  TaskArn?: string | undefined;
  ServiceRole?: string | undefined;
  Type?: MaintenanceWindowTaskType | undefined;
  TaskParameters?:
    | Record<string, MaintenanceWindowTaskParameterValueExpression>[]
    | undefined;
  Priority?: number | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  Status?: MaintenanceWindowExecutionStatus | undefined;
  StatusDetails?: string | undefined;
  StartTime?: Date | undefined;
  EndTime?: Date | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}
export interface GetMaintenanceWindowExecutionTaskInvocationRequest {
  WindowExecutionId: string | undefined;
  TaskId: string | undefined;
  InvocationId: string | undefined;
}
export interface GetMaintenanceWindowExecutionTaskInvocationResult {
  WindowExecutionId?: string | undefined;
  TaskExecutionId?: string | undefined;
  InvocationId?: string | undefined;
  ExecutionId?: string | undefined;
  TaskType?: MaintenanceWindowTaskType | undefined;
  Parameters?: string | undefined;
  Status?: MaintenanceWindowExecutionStatus | undefined;
  StatusDetails?: string | undefined;
  StartTime?: Date | undefined;
  EndTime?: Date | undefined;
  OwnerInformation?: string | undefined;
  WindowTargetId?: string | undefined;
}
export interface GetMaintenanceWindowTaskRequest {
  WindowId: string | undefined;
  WindowTaskId: string | undefined;
}
export interface MaintenanceWindowAutomationParameters {
  DocumentVersion?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
}
export interface MaintenanceWindowLambdaParameters {
  ClientContext?: string | undefined;
  Qualifier?: string | undefined;
  Payload?: Uint8Array | undefined;
}
export interface NotificationConfig {
  NotificationArn?: string | undefined;
  NotificationEvents?: NotificationEvent[] | undefined;
  NotificationType?: NotificationType | undefined;
}
export interface MaintenanceWindowRunCommandParameters {
  Comment?: string | undefined;
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;
  DocumentHash?: string | undefined;
  DocumentHashType?: DocumentHashType | undefined;
  DocumentVersion?: string | undefined;
  NotificationConfig?: NotificationConfig | undefined;
  OutputS3BucketName?: string | undefined;
  OutputS3KeyPrefix?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  ServiceRoleArn?: string | undefined;
  TimeoutSeconds?: number | undefined;
}
export interface MaintenanceWindowStepFunctionsParameters {
  Input?: string | undefined;
  Name?: string | undefined;
}
export interface MaintenanceWindowTaskInvocationParameters {
  RunCommand?: MaintenanceWindowRunCommandParameters | undefined;
  Automation?: MaintenanceWindowAutomationParameters | undefined;
  StepFunctions?: MaintenanceWindowStepFunctionsParameters | undefined;
  Lambda?: MaintenanceWindowLambdaParameters | undefined;
}
export interface GetMaintenanceWindowTaskResult {
  WindowId?: string | undefined;
  WindowTaskId?: string | undefined;
  Targets?: Target[] | undefined;
  TaskArn?: string | undefined;
  ServiceRoleArn?: string | undefined;
  TaskType?: MaintenanceWindowTaskType | undefined;
  TaskParameters?:
    | Record<string, MaintenanceWindowTaskParameterValueExpression>
    | undefined;
  TaskInvocationParameters?:
    | MaintenanceWindowTaskInvocationParameters
    | undefined;
  Priority?: number | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  LoggingInfo?: LoggingInfo | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
}
export interface GetOpsItemRequest {
  OpsItemId: string | undefined;
  OpsItemArn?: string | undefined;
}
export interface OpsItem {
  CreatedBy?: string | undefined;
  OpsItemType?: string | undefined;
  CreatedTime?: Date | undefined;
  Description?: string | undefined;
  LastModifiedBy?: string | undefined;
  LastModifiedTime?: Date | undefined;
  Notifications?: OpsItemNotification[] | undefined;
  Priority?: number | undefined;
  RelatedOpsItems?: RelatedOpsItem[] | undefined;
  Status?: OpsItemStatus | undefined;
  OpsItemId?: string | undefined;
  Version?: string | undefined;
  Title?: string | undefined;
  Source?: string | undefined;
  OperationalData?: Record<string, OpsItemDataValue> | undefined;
  Category?: string | undefined;
  Severity?: string | undefined;
  ActualStartTime?: Date | undefined;
  ActualEndTime?: Date | undefined;
  PlannedStartTime?: Date | undefined;
  PlannedEndTime?: Date | undefined;
  OpsItemArn?: string | undefined;
}
export interface GetOpsItemResponse {
  OpsItem?: OpsItem | undefined;
}
export interface GetOpsMetadataRequest {
  OpsMetadataArn: string | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface GetOpsMetadataResult {
  ResourceId?: string | undefined;
  Metadata?: Record<string, MetadataValue> | undefined;
  NextToken?: string | undefined;
}
export interface OpsFilter {
  Key: string | undefined;
  Values: string[] | undefined;
  Type?: OpsFilterOperatorType | undefined;
}
export interface OpsResultAttribute {
  TypeName: string | undefined;
}
export interface OpsEntityItem {
  CaptureTime?: string | undefined;
  Content?: Record<string, string>[] | undefined;
}
export interface OpsEntity {
  Id?: string | undefined;
  Data?: Record<string, OpsEntityItem> | undefined;
}
export interface GetOpsSummaryResult {
  Entities?: OpsEntity[] | undefined;
  NextToken?: string | undefined;
}
export interface GetParameterRequest {
  Name: string | undefined;
  WithDecryption?: boolean | undefined;
}
export interface Parameter {
  Name?: string | undefined;
  Type?: ParameterType | undefined;
  Value?: string | undefined;
  Version?: number | undefined;
  Selector?: string | undefined;
  SourceResult?: string | undefined;
  LastModifiedDate?: Date | undefined;
  ARN?: string | undefined;
  DataType?: string | undefined;
}
export interface GetParameterResult {
  Parameter?: Parameter | undefined;
}
export interface GetParameterHistoryRequest {
  Name: string | undefined;
  WithDecryption?: boolean | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface ParameterHistory {
  Name?: string | undefined;
  Type?: ParameterType | undefined;
  KeyId?: string | undefined;
  LastModifiedDate?: Date | undefined;
  LastModifiedUser?: string | undefined;
  Description?: string | undefined;
  Value?: string | undefined;
  AllowedPattern?: string | undefined;
  Version?: number | undefined;
  Labels?: string[] | undefined;
  Tier?: ParameterTier | undefined;
  Policies?: ParameterInlinePolicy[] | undefined;
  DataType?: string | undefined;
}
export interface GetParameterHistoryResult {
  Parameters?: ParameterHistory[] | undefined;
  NextToken?: string | undefined;
}
export interface GetParametersRequest {
  Names: string[] | undefined;
  WithDecryption?: boolean | undefined;
}
export interface GetParametersResult {
  Parameters?: Parameter[] | undefined;
  InvalidParameters?: string[] | undefined;
}
export interface GetParametersByPathRequest {
  Path: string | undefined;
  Recursive?: boolean | undefined;
  ParameterFilters?: ParameterStringFilter[] | undefined;
  WithDecryption?: boolean | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface GetParametersByPathResult {
  Parameters?: Parameter[] | undefined;
  NextToken?: string | undefined;
}
export interface GetPatchBaselineRequest {
  BaselineId: string | undefined;
}
export interface GetPatchBaselineResult {
  BaselineId?: string | undefined;
  Name?: string | undefined;
  OperatingSystem?: OperatingSystem | undefined;
  GlobalFilters?: PatchFilterGroup | undefined;
  ApprovalRules?: PatchRuleGroup | undefined;
  ApprovedPatches?: string[] | undefined;
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel | undefined;
  ApprovedPatchesEnableNonSecurity?: boolean | undefined;
  RejectedPatches?: string[] | undefined;
  RejectedPatchesAction?: PatchAction | undefined;
  PatchGroups?: string[] | undefined;
  CreatedDate?: Date | undefined;
  ModifiedDate?: Date | undefined;
  Description?: string | undefined;
  Sources?: PatchSource[] | undefined;
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;
}
export interface GetPatchBaselineForPatchGroupRequest {
  PatchGroup: string | undefined;
  OperatingSystem?: OperatingSystem | undefined;
}
export interface GetPatchBaselineForPatchGroupResult {
  BaselineId?: string | undefined;
  PatchGroup?: string | undefined;
  OperatingSystem?: OperatingSystem | undefined;
}
export interface GetResourcePoliciesRequest {
  ResourceArn: string | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface GetResourcePoliciesResponseEntry {
  PolicyId?: string | undefined;
  PolicyHash?: string | undefined;
  Policy?: string | undefined;
}
export interface GetResourcePoliciesResponse {
  NextToken?: string | undefined;
  Policies?: GetResourcePoliciesResponseEntry[] | undefined;
}
export interface GetServiceSettingRequest {
  SettingId: string | undefined;
}
