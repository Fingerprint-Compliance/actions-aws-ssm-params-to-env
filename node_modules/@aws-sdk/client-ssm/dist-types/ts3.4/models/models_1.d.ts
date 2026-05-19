import {
  AssociationComplianceSeverity,
  AssociationFilterKey,
  AssociationSyncCompliance,
  CommandFilterKey,
  CommandInvocationStatus,
  CommandPluginStatus,
  CommandStatus,
  ComplianceQueryOperatorType,
  ComplianceSeverity,
  ComplianceStatus,
  ComplianceUploadType,
  DocumentFilterKey,
  DocumentFormat,
  DocumentHashType,
  DocumentMetadataEnum,
  DocumentPermissionType,
  DocumentReviewAction,
  DocumentReviewCommentType,
  DocumentStatus,
  DocumentType,
  ExecutionMode,
  LastResourceDataSyncStatus,
  MaintenanceWindowResourceType,
  MaintenanceWindowTaskCutoffBehavior,
  MaintenanceWindowTaskType,
  ManagedStatus,
  NodeAggregatorType,
  NodeAttributeName,
  NodeFilterKey,
  NodeFilterOperatorType,
  NodeTypeName,
  OperatingSystem,
  OpsItemEventFilterKey,
  OpsItemEventFilterOperator,
  OpsItemRelatedItemsFilterKey,
  OpsItemRelatedItemsFilterOperator,
  OpsItemStatus,
  ParameterTier,
  ParameterType,
  PatchAction,
  PatchComplianceLevel,
  PatchComplianceStatus,
  PlatformType,
  ResourceType,
  ResourceTypeForTagging,
  ReviewStatus,
  SignalType,
  StopType,
} from "./enums";
import {
  AlarmConfiguration,
  AlarmStateInformation,
  AssociationDescription,
  AssociationOverview,
  AssociationStatus,
  AttachmentsSource,
  CloudWatchOutputConfig,
  DocumentDescription,
  DocumentRequires,
  InstanceAssociationOutputLocation,
  InventoryFilter,
  InventoryGroup,
  LoggingInfo,
  MaintenanceWindowTaskInvocationParameters,
  MaintenanceWindowTaskParameterValueExpression,
  MetadataValue,
  NotificationConfig,
  OpsFilter,
  OpsItemDataValue,
  OpsItemNotification,
  OpsResultAttribute,
  PatchFilterGroup,
  PatchRuleGroup,
  PatchSource,
  RelatedOpsItem,
  ResourceDataSyncAwsOrganizationsSource,
  ResourceDataSyncS3Destination,
  ResourceDataSyncSource,
  ResultAttribute,
  Runbook,
  Tag,
  Target,
  TargetLocation,
} from "./models_0";
export interface ServiceSetting {
  SettingId?: string | undefined;
  SettingValue?: string | undefined;
  LastModifiedDate?: Date | undefined;
  LastModifiedUser?: string | undefined;
  ARN?: string | undefined;
  Status?: string | undefined;
}
export interface GetServiceSettingResult {
  ServiceSetting?: ServiceSetting | undefined;
}
export interface LabelParameterVersionRequest {
  Name: string | undefined;
  ParameterVersion?: number | undefined;
  Labels: string[] | undefined;
}
export interface LabelParameterVersionResult {
  InvalidLabels?: string[] | undefined;
  ParameterVersion?: number | undefined;
}
export interface AssociationFilter {
  key: AssociationFilterKey | undefined;
  value: string | undefined;
}
export interface ListAssociationsRequest {
  AssociationFilterList?: AssociationFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface Association {
  Name?: string | undefined;
  InstanceId?: string | undefined;
  AssociationId?: string | undefined;
  AssociationVersion?: string | undefined;
  DocumentVersion?: string | undefined;
  Targets?: Target[] | undefined;
  LastExecutionDate?: Date | undefined;
  Overview?: AssociationOverview | undefined;
  ScheduleExpression?: string | undefined;
  AssociationName?: string | undefined;
  ScheduleOffset?: number | undefined;
  Duration?: number | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
}
export interface ListAssociationsResult {
  Associations?: Association[] | undefined;
  NextToken?: string | undefined;
}
export interface ListAssociationVersionsRequest {
  AssociationId: string | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface AssociationVersionInfo {
  AssociationId?: string | undefined;
  AssociationVersion?: string | undefined;
  CreatedDate?: Date | undefined;
  Name?: string | undefined;
  DocumentVersion?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
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
  AssociationDispatchAssumeRole?: string | undefined;
}
export interface ListAssociationVersionsResult {
  AssociationVersions?: AssociationVersionInfo[] | undefined;
  NextToken?: string | undefined;
}
export interface CommandFilter {
  key: CommandFilterKey | undefined;
  value: string | undefined;
}
export interface ListCommandInvocationsRequest {
  CommandId?: string | undefined;
  InstanceId?: string | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
  Filters?: CommandFilter[] | undefined;
  Details?: boolean | undefined;
}
export interface CommandPlugin {
  Name?: string | undefined;
  Status?: CommandPluginStatus | undefined;
  StatusDetails?: string | undefined;
  ResponseCode?: number | undefined;
  ResponseStartDateTime?: Date | undefined;
  ResponseFinishDateTime?: Date | undefined;
  Output?: string | undefined;
  StandardOutputUrl?: string | undefined;
  StandardErrorUrl?: string | undefined;
  OutputS3Region?: string | undefined;
  OutputS3BucketName?: string | undefined;
  OutputS3KeyPrefix?: string | undefined;
}
export interface CommandInvocation {
  CommandId?: string | undefined;
  InstanceId?: string | undefined;
  InstanceName?: string | undefined;
  Comment?: string | undefined;
  DocumentName?: string | undefined;
  DocumentVersion?: string | undefined;
  RequestedDateTime?: Date | undefined;
  Status?: CommandInvocationStatus | undefined;
  StatusDetails?: string | undefined;
  TraceOutput?: string | undefined;
  StandardOutputUrl?: string | undefined;
  StandardErrorUrl?: string | undefined;
  CommandPlugins?: CommandPlugin[] | undefined;
  ServiceRole?: string | undefined;
  NotificationConfig?: NotificationConfig | undefined;
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;
}
export interface ListCommandInvocationsResult {
  CommandInvocations?: CommandInvocation[] | undefined;
  NextToken?: string | undefined;
}
export interface ListCommandsRequest {
  CommandId?: string | undefined;
  InstanceId?: string | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
  Filters?: CommandFilter[] | undefined;
}
export interface Command {
  CommandId?: string | undefined;
  DocumentName?: string | undefined;
  DocumentVersion?: string | undefined;
  Comment?: string | undefined;
  ExpiresAfter?: Date | undefined;
  Parameters?: Record<string, string[]> | undefined;
  InstanceIds?: string[] | undefined;
  Targets?: Target[] | undefined;
  RequestedDateTime?: Date | undefined;
  Status?: CommandStatus | undefined;
  StatusDetails?: string | undefined;
  OutputS3Region?: string | undefined;
  OutputS3BucketName?: string | undefined;
  OutputS3KeyPrefix?: string | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  TargetCount?: number | undefined;
  CompletedCount?: number | undefined;
  ErrorCount?: number | undefined;
  DeliveryTimedOutCount?: number | undefined;
  ServiceRole?: string | undefined;
  NotificationConfig?: NotificationConfig | undefined;
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;
  TimeoutSeconds?: number | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
  TriggeredAlarms?: AlarmStateInformation[] | undefined;
}
export interface ListCommandsResult {
  Commands?: Command[] | undefined;
  NextToken?: string | undefined;
}
export interface ComplianceStringFilter {
  Key?: string | undefined;
  Values?: string[] | undefined;
  Type?: ComplianceQueryOperatorType | undefined;
}
export interface ListComplianceItemsRequest {
  Filters?: ComplianceStringFilter[] | undefined;
  ResourceIds?: string[] | undefined;
  ResourceTypes?: string[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface ComplianceExecutionSummary {
  ExecutionTime: Date | undefined;
  ExecutionId?: string | undefined;
  ExecutionType?: string | undefined;
}
export interface ComplianceItem {
  ComplianceType?: string | undefined;
  ResourceType?: string | undefined;
  ResourceId?: string | undefined;
  Id?: string | undefined;
  Title?: string | undefined;
  Status?: ComplianceStatus | undefined;
  Severity?: ComplianceSeverity | undefined;
  ExecutionSummary?: ComplianceExecutionSummary | undefined;
  Details?: Record<string, string> | undefined;
}
export interface ListComplianceItemsResult {
  ComplianceItems?: ComplianceItem[] | undefined;
  NextToken?: string | undefined;
}
export interface ListComplianceSummariesRequest {
  Filters?: ComplianceStringFilter[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface SeveritySummary {
  CriticalCount?: number | undefined;
  HighCount?: number | undefined;
  MediumCount?: number | undefined;
  LowCount?: number | undefined;
  InformationalCount?: number | undefined;
  UnspecifiedCount?: number | undefined;
}
export interface CompliantSummary {
  CompliantCount?: number | undefined;
  SeveritySummary?: SeveritySummary | undefined;
}
export interface NonCompliantSummary {
  NonCompliantCount?: number | undefined;
  SeveritySummary?: SeveritySummary | undefined;
}
export interface ComplianceSummaryItem {
  ComplianceType?: string | undefined;
  CompliantSummary?: CompliantSummary | undefined;
  NonCompliantSummary?: NonCompliantSummary | undefined;
}
export interface ListComplianceSummariesResult {
  ComplianceSummaryItems?: ComplianceSummaryItem[] | undefined;
  NextToken?: string | undefined;
}
export interface ListDocumentMetadataHistoryRequest {
  Name: string | undefined;
  DocumentVersion?: string | undefined;
  Metadata: DocumentMetadataEnum | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface DocumentReviewCommentSource {
  Type?: DocumentReviewCommentType | undefined;
  Content?: string | undefined;
}
export interface DocumentReviewerResponseSource {
  CreateTime?: Date | undefined;
  UpdatedTime?: Date | undefined;
  ReviewStatus?: ReviewStatus | undefined;
  Comment?: DocumentReviewCommentSource[] | undefined;
  Reviewer?: string | undefined;
}
export interface DocumentMetadataResponseInfo {
  ReviewerResponse?: DocumentReviewerResponseSource[] | undefined;
}
export interface ListDocumentMetadataHistoryResponse {
  Name?: string | undefined;
  DocumentVersion?: string | undefined;
  Author?: string | undefined;
  Metadata?: DocumentMetadataResponseInfo | undefined;
  NextToken?: string | undefined;
}
export interface DocumentFilter {
  key: DocumentFilterKey | undefined;
  value: string | undefined;
}
export interface DocumentKeyValuesFilter {
  Key?: string | undefined;
  Values?: string[] | undefined;
}
export interface ListDocumentsRequest {
  DocumentFilterList?: DocumentFilter[] | undefined;
  Filters?: DocumentKeyValuesFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface DocumentIdentifier {
  Name?: string | undefined;
  CreatedDate?: Date | undefined;
  DisplayName?: string | undefined;
  Owner?: string | undefined;
  VersionName?: string | undefined;
  PlatformTypes?: PlatformType[] | undefined;
  DocumentVersion?: string | undefined;
  DocumentType?: DocumentType | undefined;
  SchemaVersion?: string | undefined;
  DocumentFormat?: DocumentFormat | undefined;
  TargetType?: string | undefined;
  Tags?: Tag[] | undefined;
  Requires?: DocumentRequires[] | undefined;
  ReviewStatus?: ReviewStatus | undefined;
  Author?: string | undefined;
}
export interface ListDocumentsResult {
  DocumentIdentifiers?: DocumentIdentifier[] | undefined;
  NextToken?: string | undefined;
}
export interface ListDocumentVersionsRequest {
  Name: string | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface DocumentVersionInfo {
  Name?: string | undefined;
  DisplayName?: string | undefined;
  DocumentVersion?: string | undefined;
  VersionName?: string | undefined;
  CreatedDate?: Date | undefined;
  IsDefaultVersion?: boolean | undefined;
  DocumentFormat?: DocumentFormat | undefined;
  Status?: DocumentStatus | undefined;
  StatusInformation?: string | undefined;
  ReviewStatus?: ReviewStatus | undefined;
}
export interface ListDocumentVersionsResult {
  DocumentVersions?: DocumentVersionInfo[] | undefined;
  NextToken?: string | undefined;
}
export interface ListInventoryEntriesRequest {
  InstanceId: string | undefined;
  TypeName: string | undefined;
  Filters?: InventoryFilter[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface ListInventoryEntriesResult {
  TypeName?: string | undefined;
  InstanceId?: string | undefined;
  SchemaVersion?: string | undefined;
  CaptureTime?: string | undefined;
  Entries?: Record<string, string>[] | undefined;
  NextToken?: string | undefined;
}
export interface NodeFilter {
  Key: NodeFilterKey | undefined;
  Values: string[] | undefined;
  Type?: NodeFilterOperatorType | undefined;
}
export interface ListNodesRequest {
  SyncName?: string | undefined;
  Filters?: NodeFilter[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface InstanceInfo {
  AgentType?: string | undefined;
  AgentVersion?: string | undefined;
  ComputerName?: string | undefined;
  InstanceStatus?: string | undefined;
  IpAddress?: string | undefined;
  ManagedStatus?: ManagedStatus | undefined;
  PlatformType?: PlatformType | undefined;
  PlatformName?: string | undefined;
  PlatformVersion?: string | undefined;
  ResourceType?: ResourceType | undefined;
}
export type NodeType = NodeType.InstanceMember | NodeType.$UnknownMember;
export declare namespace NodeType {
  interface InstanceMember {
    Instance: InstanceInfo;
    $unknown?: never;
  }
  interface $UnknownMember {
    Instance?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    Instance: (value: InstanceInfo) => T;
    _: (name: string, value: any) => T;
  }
}
export interface NodeOwnerInfo {
  AccountId?: string | undefined;
  OrganizationalUnitId?: string | undefined;
  OrganizationalUnitPath?: string | undefined;
}
export interface Node {
  CaptureTime?: Date | undefined;
  Id?: string | undefined;
  Owner?: NodeOwnerInfo | undefined;
  Region?: string | undefined;
  NodeType?: NodeType | undefined;
}
export interface ListNodesResult {
  Nodes?: Node[] | undefined;
  NextToken?: string | undefined;
}
export interface ListNodesSummaryResult {
  Summary?: Record<string, string>[] | undefined;
  NextToken?: string | undefined;
}
export interface OpsItemEventFilter {
  Key: OpsItemEventFilterKey | undefined;
  Values: string[] | undefined;
  Operator: OpsItemEventFilterOperator | undefined;
}
export interface ListOpsItemEventsRequest {
  Filters?: OpsItemEventFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface OpsItemIdentity {
  Arn?: string | undefined;
}
export interface OpsItemEventSummary {
  OpsItemId?: string | undefined;
  EventId?: string | undefined;
  Source?: string | undefined;
  DetailType?: string | undefined;
  Detail?: string | undefined;
  CreatedBy?: OpsItemIdentity | undefined;
  CreatedTime?: Date | undefined;
}
export interface ListOpsItemEventsResponse {
  NextToken?: string | undefined;
  Summaries?: OpsItemEventSummary[] | undefined;
}
export interface OpsItemRelatedItemsFilter {
  Key: OpsItemRelatedItemsFilterKey | undefined;
  Values: string[] | undefined;
  Operator: OpsItemRelatedItemsFilterOperator | undefined;
}
export interface ListOpsItemRelatedItemsRequest {
  OpsItemId?: string | undefined;
  Filters?: OpsItemRelatedItemsFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface OpsItemRelatedItemSummary {
  OpsItemId?: string | undefined;
  AssociationId?: string | undefined;
  ResourceType?: string | undefined;
  AssociationType?: string | undefined;
  ResourceUri?: string | undefined;
  CreatedBy?: OpsItemIdentity | undefined;
  CreatedTime?: Date | undefined;
  LastModifiedBy?: OpsItemIdentity | undefined;
  LastModifiedTime?: Date | undefined;
}
export interface ListOpsItemRelatedItemsResponse {
  NextToken?: string | undefined;
  Summaries?: OpsItemRelatedItemSummary[] | undefined;
}
export interface OpsMetadataFilter {
  Key: string | undefined;
  Values: string[] | undefined;
}
export interface ListOpsMetadataRequest {
  Filters?: OpsMetadataFilter[] | undefined;
  MaxResults?: number | undefined;
  NextToken?: string | undefined;
}
export interface OpsMetadata {
  ResourceId?: string | undefined;
  OpsMetadataArn?: string | undefined;
  LastModifiedDate?: Date | undefined;
  LastModifiedUser?: string | undefined;
  CreationDate?: Date | undefined;
}
export interface ListOpsMetadataResult {
  OpsMetadataList?: OpsMetadata[] | undefined;
  NextToken?: string | undefined;
}
export interface ListResourceComplianceSummariesRequest {
  Filters?: ComplianceStringFilter[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface ResourceComplianceSummaryItem {
  ComplianceType?: string | undefined;
  ResourceType?: string | undefined;
  ResourceId?: string | undefined;
  Status?: ComplianceStatus | undefined;
  OverallSeverity?: ComplianceSeverity | undefined;
  ExecutionSummary?: ComplianceExecutionSummary | undefined;
  CompliantSummary?: CompliantSummary | undefined;
  NonCompliantSummary?: NonCompliantSummary | undefined;
}
export interface ListResourceComplianceSummariesResult {
  ResourceComplianceSummaryItems?: ResourceComplianceSummaryItem[] | undefined;
  NextToken?: string | undefined;
}
export interface ListResourceDataSyncRequest {
  SyncType?: string | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface ResourceDataSyncSourceWithState {
  SourceType?: string | undefined;
  AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource | undefined;
  SourceRegions?: string[] | undefined;
  IncludeFutureRegions?: boolean | undefined;
  State?: string | undefined;
  EnableAllOpsDataSources?: boolean | undefined;
}
export interface ResourceDataSyncItem {
  SyncName?: string | undefined;
  SyncType?: string | undefined;
  SyncSource?: ResourceDataSyncSourceWithState | undefined;
  S3Destination?: ResourceDataSyncS3Destination | undefined;
  LastSyncTime?: Date | undefined;
  LastSuccessfulSyncTime?: Date | undefined;
  SyncLastModifiedTime?: Date | undefined;
  LastStatus?: LastResourceDataSyncStatus | undefined;
  SyncCreatedTime?: Date | undefined;
  LastSyncStatusMessage?: string | undefined;
}
export interface ListResourceDataSyncResult {
  ResourceDataSyncItems?: ResourceDataSyncItem[] | undefined;
  NextToken?: string | undefined;
}
export interface ListTagsForResourceRequest {
  ResourceType: ResourceTypeForTagging | undefined;
  ResourceId: string | undefined;
}
export interface ListTagsForResourceResult {
  TagList?: Tag[] | undefined;
}
export interface ModifyDocumentPermissionRequest {
  Name: string | undefined;
  PermissionType: DocumentPermissionType | undefined;
  AccountIdsToAdd?: string[] | undefined;
  AccountIdsToRemove?: string[] | undefined;
  SharedDocumentVersion?: string | undefined;
}
export interface ModifyDocumentPermissionResponse {}
export interface ComplianceItemEntry {
  Id?: string | undefined;
  Title?: string | undefined;
  Severity: ComplianceSeverity | undefined;
  Status: ComplianceStatus | undefined;
  Details?: Record<string, string> | undefined;
}
export interface PutComplianceItemsRequest {
  ResourceId: string | undefined;
  ResourceType: string | undefined;
  ComplianceType: string | undefined;
  ExecutionSummary: ComplianceExecutionSummary | undefined;
  Items: ComplianceItemEntry[] | undefined;
  ItemContentHash?: string | undefined;
  UploadType?: ComplianceUploadType | undefined;
}
export interface PutComplianceItemsResult {}
export interface InventoryItem {
  TypeName: string | undefined;
  SchemaVersion: string | undefined;
  CaptureTime: string | undefined;
  ContentHash?: string | undefined;
  Content?: Record<string, string>[] | undefined;
  Context?: Record<string, string> | undefined;
}
export interface PutInventoryRequest {
  InstanceId: string | undefined;
  Items: InventoryItem[] | undefined;
}
export interface PutInventoryResult {
  Message?: string | undefined;
}
export interface PutParameterRequest {
  Name: string | undefined;
  Description?: string | undefined;
  Value: string | undefined;
  Type?: ParameterType | undefined;
  KeyId?: string | undefined;
  Overwrite?: boolean | undefined;
  AllowedPattern?: string | undefined;
  Tags?: Tag[] | undefined;
  Tier?: ParameterTier | undefined;
  Policies?: string | undefined;
  DataType?: string | undefined;
}
export interface PutParameterResult {
  Version?: number | undefined;
  Tier?: ParameterTier | undefined;
}
export interface PutResourcePolicyRequest {
  ResourceArn: string | undefined;
  Policy: string | undefined;
  PolicyId?: string | undefined;
  PolicyHash?: string | undefined;
}
export interface PutResourcePolicyResponse {
  PolicyId?: string | undefined;
  PolicyHash?: string | undefined;
}
export interface RegisterDefaultPatchBaselineRequest {
  BaselineId: string | undefined;
}
export interface RegisterDefaultPatchBaselineResult {
  BaselineId?: string | undefined;
}
export interface RegisterPatchBaselineForPatchGroupRequest {
  BaselineId: string | undefined;
  PatchGroup: string | undefined;
}
export interface RegisterPatchBaselineForPatchGroupResult {
  BaselineId?: string | undefined;
  PatchGroup?: string | undefined;
}
export interface RegisterTargetWithMaintenanceWindowRequest {
  WindowId: string | undefined;
  ResourceType: MaintenanceWindowResourceType | undefined;
  Targets: Target[] | undefined;
  OwnerInformation?: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  ClientToken?: string | undefined;
}
export interface RegisterTargetWithMaintenanceWindowResult {
  WindowTargetId?: string | undefined;
}
export interface RegisterTaskWithMaintenanceWindowRequest {
  WindowId: string | undefined;
  Targets?: Target[] | undefined;
  TaskArn: string | undefined;
  ServiceRoleArn?: string | undefined;
  TaskType: MaintenanceWindowTaskType | undefined;
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
  ClientToken?: string | undefined;
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
}
export interface RegisterTaskWithMaintenanceWindowResult {
  WindowTaskId?: string | undefined;
}
export interface RemoveTagsFromResourceRequest {
  ResourceType: ResourceTypeForTagging | undefined;
  ResourceId: string | undefined;
  TagKeys: string[] | undefined;
}
export interface RemoveTagsFromResourceResult {}
export interface ResetServiceSettingRequest {
  SettingId: string | undefined;
}
export interface ResetServiceSettingResult {
  ServiceSetting?: ServiceSetting | undefined;
}
export interface ResumeSessionRequest {
  SessionId: string | undefined;
}
export interface ResumeSessionResponse {
  SessionId?: string | undefined;
  TokenValue?: string | undefined;
  StreamUrl?: string | undefined;
}
export interface SendAutomationSignalRequest {
  AutomationExecutionId: string | undefined;
  SignalType: SignalType | undefined;
  Payload?: Record<string, string[]> | undefined;
}
export interface SendAutomationSignalResult {}
export interface SendCommandRequest {
  InstanceIds?: string[] | undefined;
  Targets?: Target[] | undefined;
  DocumentName: string | undefined;
  DocumentVersion?: string | undefined;
  DocumentHash?: string | undefined;
  DocumentHashType?: DocumentHashType | undefined;
  TimeoutSeconds?: number | undefined;
  Comment?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  OutputS3Region?: string | undefined;
  OutputS3BucketName?: string | undefined;
  OutputS3KeyPrefix?: string | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  ServiceRoleArn?: string | undefined;
  NotificationConfig?: NotificationConfig | undefined;
  CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
}
export interface SendCommandResult {
  Command?: Command | undefined;
}
export interface StartAccessRequestRequest {
  Reason: string | undefined;
  Targets: Target[] | undefined;
  Tags?: Tag[] | undefined;
}
export interface StartAccessRequestResponse {
  AccessRequestId?: string | undefined;
}
export interface StartAssociationsOnceRequest {
  AssociationIds: string[] | undefined;
}
export interface StartAssociationsOnceResult {}
export interface StartAutomationExecutionRequest {
  DocumentName: string | undefined;
  DocumentVersion?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  ClientToken?: string | undefined;
  Mode?: ExecutionMode | undefined;
  TargetParameterName?: string | undefined;
  Targets?: Target[] | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
  MaxConcurrency?: string | undefined;
  MaxErrors?: string | undefined;
  TargetLocations?: TargetLocation[] | undefined;
  Tags?: Tag[] | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
  TargetLocationsURL?: string | undefined;
}
export interface StartAutomationExecutionResult {
  AutomationExecutionId?: string | undefined;
}
export interface StartChangeRequestExecutionRequest {
  ScheduledTime?: Date | undefined;
  DocumentName: string | undefined;
  DocumentVersion?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  ChangeRequestName?: string | undefined;
  ClientToken?: string | undefined;
  AutoApprove?: boolean | undefined;
  Runbooks: Runbook[] | undefined;
  Tags?: Tag[] | undefined;
  ScheduledEndTime?: Date | undefined;
  ChangeDetails?: string | undefined;
}
export interface StartChangeRequestExecutionResult {
  AutomationExecutionId?: string | undefined;
}
export interface AutomationExecutionInputs {
  Parameters?: Record<string, string[]> | undefined;
  TargetParameterName?: string | undefined;
  Targets?: Target[] | undefined;
  TargetMaps?: Record<string, string[]>[] | undefined;
  TargetLocations?: TargetLocation[] | undefined;
  TargetLocationsURL?: string | undefined;
}
export type ExecutionInputs =
  | ExecutionInputs.AutomationMember
  | ExecutionInputs.$UnknownMember;
export declare namespace ExecutionInputs {
  interface AutomationMember {
    Automation: AutomationExecutionInputs;
    $unknown?: never;
  }
  interface $UnknownMember {
    Automation?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    Automation: (value: AutomationExecutionInputs) => T;
    _: (name: string, value: any) => T;
  }
}
export interface StartExecutionPreviewRequest {
  DocumentName: string | undefined;
  DocumentVersion?: string | undefined;
  ExecutionInputs?: ExecutionInputs | undefined;
}
export interface StartExecutionPreviewResponse {
  ExecutionPreviewId?: string | undefined;
}
export interface StartSessionRequest {
  Target: string | undefined;
  DocumentName?: string | undefined;
  Reason?: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
}
export interface StartSessionResponse {
  SessionId?: string | undefined;
  TokenValue?: string | undefined;
  StreamUrl?: string | undefined;
}
export interface StopAutomationExecutionRequest {
  AutomationExecutionId: string | undefined;
  Type?: StopType | undefined;
}
export interface StopAutomationExecutionResult {}
export interface TerminateSessionRequest {
  SessionId: string | undefined;
}
export interface TerminateSessionResponse {
  SessionId?: string | undefined;
}
export interface UnlabelParameterVersionRequest {
  Name: string | undefined;
  ParameterVersion: number | undefined;
  Labels: string[] | undefined;
}
export interface UnlabelParameterVersionResult {
  RemovedLabels?: string[] | undefined;
  InvalidLabels?: string[] | undefined;
}
export interface UpdateAssociationRequest {
  AssociationId: string | undefined;
  Parameters?: Record<string, string[]> | undefined;
  DocumentVersion?: string | undefined;
  ScheduleExpression?: string | undefined;
  OutputLocation?: InstanceAssociationOutputLocation | undefined;
  Name?: string | undefined;
  Targets?: Target[] | undefined;
  AssociationName?: string | undefined;
  AssociationVersion?: string | undefined;
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
  AlarmConfiguration?: AlarmConfiguration | undefined;
  AssociationDispatchAssumeRole?: string | undefined;
}
export interface UpdateAssociationResult {
  AssociationDescription?: AssociationDescription | undefined;
}
export interface UpdateAssociationStatusRequest {
  Name: string | undefined;
  InstanceId: string | undefined;
  AssociationStatus: AssociationStatus | undefined;
}
export interface UpdateAssociationStatusResult {
  AssociationDescription?: AssociationDescription | undefined;
}
export interface UpdateDocumentRequest {
  Content: string | undefined;
  Attachments?: AttachmentsSource[] | undefined;
  Name: string | undefined;
  DisplayName?: string | undefined;
  VersionName?: string | undefined;
  DocumentVersion?: string | undefined;
  DocumentFormat?: DocumentFormat | undefined;
  TargetType?: string | undefined;
}
export interface UpdateDocumentResult {
  DocumentDescription?: DocumentDescription | undefined;
}
export interface UpdateDocumentDefaultVersionRequest {
  Name: string | undefined;
  DocumentVersion: string | undefined;
}
export interface DocumentDefaultVersionDescription {
  Name?: string | undefined;
  DefaultVersion?: string | undefined;
  DefaultVersionName?: string | undefined;
}
export interface UpdateDocumentDefaultVersionResult {
  Description?: DocumentDefaultVersionDescription | undefined;
}
export interface DocumentReviews {
  Action: DocumentReviewAction | undefined;
  Comment?: DocumentReviewCommentSource[] | undefined;
}
export interface UpdateDocumentMetadataRequest {
  Name: string | undefined;
  DocumentVersion?: string | undefined;
  DocumentReviews: DocumentReviews | undefined;
}
export interface UpdateDocumentMetadataResponse {}
export interface UpdateMaintenanceWindowRequest {
  WindowId: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  StartDate?: string | undefined;
  EndDate?: string | undefined;
  Schedule?: string | undefined;
  ScheduleTimezone?: string | undefined;
  ScheduleOffset?: number | undefined;
  Duration?: number | undefined;
  Cutoff?: number | undefined;
  AllowUnassociatedTargets?: boolean | undefined;
  Enabled?: boolean | undefined;
  Replace?: boolean | undefined;
}
export interface UpdateMaintenanceWindowResult {
  WindowId?: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  StartDate?: string | undefined;
  EndDate?: string | undefined;
  Schedule?: string | undefined;
  ScheduleTimezone?: string | undefined;
  ScheduleOffset?: number | undefined;
  Duration?: number | undefined;
  Cutoff?: number | undefined;
  AllowUnassociatedTargets?: boolean | undefined;
  Enabled?: boolean | undefined;
}
export interface UpdateMaintenanceWindowTargetRequest {
  WindowId: string | undefined;
  WindowTargetId: string | undefined;
  Targets?: Target[] | undefined;
  OwnerInformation?: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  Replace?: boolean | undefined;
}
export interface UpdateMaintenanceWindowTargetResult {
  WindowId?: string | undefined;
  WindowTargetId?: string | undefined;
  Targets?: Target[] | undefined;
  OwnerInformation?: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
}
export interface UpdateMaintenanceWindowTaskRequest {
  WindowId: string | undefined;
  WindowTaskId: string | undefined;
  Targets?: Target[] | undefined;
  TaskArn?: string | undefined;
  ServiceRoleArn?: string | undefined;
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
  Replace?: boolean | undefined;
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior | undefined;
  AlarmConfiguration?: AlarmConfiguration | undefined;
}
export interface UpdateMaintenanceWindowTaskResult {
  WindowId?: string | undefined;
  WindowTaskId?: string | undefined;
  Targets?: Target[] | undefined;
  TaskArn?: string | undefined;
  ServiceRoleArn?: string | undefined;
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
export interface UpdateManagedInstanceRoleRequest {
  InstanceId: string | undefined;
  IamRole: string | undefined;
}
export interface UpdateManagedInstanceRoleResult {}
export interface UpdateOpsItemRequest {
  Description?: string | undefined;
  OperationalData?: Record<string, OpsItemDataValue> | undefined;
  OperationalDataToDelete?: string[] | undefined;
  Notifications?: OpsItemNotification[] | undefined;
  Priority?: number | undefined;
  RelatedOpsItems?: RelatedOpsItem[] | undefined;
  Status?: OpsItemStatus | undefined;
  OpsItemId: string | undefined;
  Title?: string | undefined;
  Category?: string | undefined;
  Severity?: string | undefined;
  ActualStartTime?: Date | undefined;
  ActualEndTime?: Date | undefined;
  PlannedStartTime?: Date | undefined;
  PlannedEndTime?: Date | undefined;
  OpsItemArn?: string | undefined;
}
export interface UpdateOpsItemResponse {}
export interface UpdateOpsMetadataRequest {
  OpsMetadataArn: string | undefined;
  MetadataToUpdate?: Record<string, MetadataValue> | undefined;
  KeysToDelete?: string[] | undefined;
}
export interface UpdateOpsMetadataResult {
  OpsMetadataArn?: string | undefined;
}
export interface UpdatePatchBaselineRequest {
  BaselineId: string | undefined;
  Name?: string | undefined;
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
  Replace?: boolean | undefined;
}
export interface UpdatePatchBaselineResult {
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
  CreatedDate?: Date | undefined;
  ModifiedDate?: Date | undefined;
  Description?: string | undefined;
  Sources?: PatchSource[] | undefined;
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus | undefined;
}
export interface UpdateResourceDataSyncRequest {
  SyncName: string | undefined;
  SyncType: string | undefined;
  SyncSource: ResourceDataSyncSource | undefined;
}
export interface UpdateResourceDataSyncResult {}
export interface UpdateServiceSettingRequest {
  SettingId: string | undefined;
  SettingValue: string | undefined;
}
export interface UpdateServiceSettingResult {}
export interface InventoryAggregator {
  Expression?: string | undefined;
  Aggregators?: InventoryAggregator[] | undefined;
  Groups?: InventoryGroup[] | undefined;
}
export interface NodeAggregator {
  AggregatorType: NodeAggregatorType | undefined;
  TypeName: NodeTypeName | undefined;
  AttributeName: NodeAttributeName | undefined;
  Aggregators?: NodeAggregator[] | undefined;
}
export interface OpsAggregator {
  AggregatorType?: string | undefined;
  TypeName?: string | undefined;
  AttributeName?: string | undefined;
  Values?: Record<string, string> | undefined;
  Filters?: OpsFilter[] | undefined;
  Aggregators?: OpsAggregator[] | undefined;
}
export interface GetInventoryRequest {
  Filters?: InventoryFilter[] | undefined;
  Aggregators?: InventoryAggregator[] | undefined;
  ResultAttributes?: ResultAttribute[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface GetOpsSummaryRequest {
  SyncName?: string | undefined;
  Filters?: OpsFilter[] | undefined;
  Aggregators?: OpsAggregator[] | undefined;
  ResultAttributes?: OpsResultAttribute[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
export interface ListNodesSummaryRequest {
  SyncName?: string | undefined;
  Filters?: NodeFilter[] | undefined;
  Aggregators: NodeAggregator[] | undefined;
  NextToken?: string | undefined;
  MaxResults?: number | undefined;
}
