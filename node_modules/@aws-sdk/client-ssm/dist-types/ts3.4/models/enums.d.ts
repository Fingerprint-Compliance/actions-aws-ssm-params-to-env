export declare const AccessRequestStatus: {
  readonly APPROVED: "Approved";
  readonly EXPIRED: "Expired";
  readonly PENDING: "Pending";
  readonly REJECTED: "Rejected";
  readonly REVOKED: "Revoked";
};
export type AccessRequestStatus =
  (typeof AccessRequestStatus)[keyof typeof AccessRequestStatus];
export declare const AccessType: {
  readonly JUSTINTIME: "JustInTime";
  readonly STANDARD: "Standard";
};
export type AccessType = (typeof AccessType)[keyof typeof AccessType];
export declare const ResourceTypeForTagging: {
  readonly ASSOCIATION: "Association";
  readonly AUTOMATION: "Automation";
  readonly DOCUMENT: "Document";
  readonly MAINTENANCE_WINDOW: "MaintenanceWindow";
  readonly MANAGED_INSTANCE: "ManagedInstance";
  readonly OPSMETADATA: "OpsMetadata";
  readonly OPS_ITEM: "OpsItem";
  readonly PARAMETER: "Parameter";
  readonly PATCH_BASELINE: "PatchBaseline";
};
export type ResourceTypeForTagging =
  (typeof ResourceTypeForTagging)[keyof typeof ResourceTypeForTagging];
export declare const ExternalAlarmState: {
  readonly ALARM: "ALARM";
  readonly UNKNOWN: "UNKNOWN";
};
export type ExternalAlarmState =
  (typeof ExternalAlarmState)[keyof typeof ExternalAlarmState];
export declare const AssociationComplianceSeverity: {
  readonly Critical: "CRITICAL";
  readonly High: "HIGH";
  readonly Low: "LOW";
  readonly Medium: "MEDIUM";
  readonly Unspecified: "UNSPECIFIED";
};
export type AssociationComplianceSeverity =
  (typeof AssociationComplianceSeverity)[keyof typeof AssociationComplianceSeverity];
export declare const AssociationSyncCompliance: {
  readonly Auto: "AUTO";
  readonly Manual: "MANUAL";
};
export type AssociationSyncCompliance =
  (typeof AssociationSyncCompliance)[keyof typeof AssociationSyncCompliance];
export declare const AssociationStatusName: {
  readonly Failed: "Failed";
  readonly Pending: "Pending";
  readonly Success: "Success";
};
export type AssociationStatusName =
  (typeof AssociationStatusName)[keyof typeof AssociationStatusName];
export declare const Fault: {
  readonly Client: "Client";
  readonly Server: "Server";
  readonly Unknown: "Unknown";
};
export type Fault = (typeof Fault)[keyof typeof Fault];
export declare const AttachmentsSourceKey: {
  readonly AttachmentReference: "AttachmentReference";
  readonly S3FileUrl: "S3FileUrl";
  readonly SourceUrl: "SourceUrl";
};
export type AttachmentsSourceKey =
  (typeof AttachmentsSourceKey)[keyof typeof AttachmentsSourceKey];
export declare const DocumentFormat: {
  readonly JSON: "JSON";
  readonly TEXT: "TEXT";
  readonly YAML: "YAML";
};
export type DocumentFormat =
  (typeof DocumentFormat)[keyof typeof DocumentFormat];
export declare const DocumentType: {
  readonly ApplicationConfiguration: "ApplicationConfiguration";
  readonly ApplicationConfigurationSchema: "ApplicationConfigurationSchema";
  readonly AutoApprovalPolicy: "AutoApprovalPolicy";
  readonly Automation: "Automation";
  readonly ChangeCalendar: "ChangeCalendar";
  readonly ChangeTemplate: "Automation.ChangeTemplate";
  readonly CloudFormation: "CloudFormation";
  readonly Command: "Command";
  readonly ConformancePackTemplate: "ConformancePackTemplate";
  readonly DeploymentStrategy: "DeploymentStrategy";
  readonly ManualApprovalPolicy: "ManualApprovalPolicy";
  readonly Package: "Package";
  readonly Policy: "Policy";
  readonly ProblemAnalysis: "ProblemAnalysis";
  readonly ProblemAnalysisTemplate: "ProblemAnalysisTemplate";
  readonly QuickSetup: "QuickSetup";
  readonly Session: "Session";
};
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];
export declare const DocumentHashType: {
  readonly SHA1: "Sha1";
  readonly SHA256: "Sha256";
};
export type DocumentHashType =
  (typeof DocumentHashType)[keyof typeof DocumentHashType];
export declare const DocumentParameterType: {
  readonly String: "String";
  readonly StringList: "StringList";
};
export type DocumentParameterType =
  (typeof DocumentParameterType)[keyof typeof DocumentParameterType];
export declare const PlatformType: {
  readonly LINUX: "Linux";
  readonly MACOS: "MacOS";
  readonly WINDOWS: "Windows";
};
export type PlatformType = (typeof PlatformType)[keyof typeof PlatformType];
export declare const ReviewStatus: {
  readonly APPROVED: "APPROVED";
  readonly NOT_REVIEWED: "NOT_REVIEWED";
  readonly PENDING: "PENDING";
  readonly REJECTED: "REJECTED";
};
export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus];
export declare const DocumentStatus: {
  readonly Active: "Active";
  readonly Creating: "Creating";
  readonly Deleting: "Deleting";
  readonly Failed: "Failed";
  readonly Updating: "Updating";
};
export type DocumentStatus =
  (typeof DocumentStatus)[keyof typeof DocumentStatus];
export declare const OpsItemDataType: {
  readonly SEARCHABLE_STRING: "SearchableString";
  readonly STRING: "String";
};
export type OpsItemDataType =
  (typeof OpsItemDataType)[keyof typeof OpsItemDataType];
export declare const PatchComplianceLevel: {
  readonly Critical: "CRITICAL";
  readonly High: "HIGH";
  readonly Informational: "INFORMATIONAL";
  readonly Low: "LOW";
  readonly Medium: "MEDIUM";
  readonly Unspecified: "UNSPECIFIED";
};
export type PatchComplianceLevel =
  (typeof PatchComplianceLevel)[keyof typeof PatchComplianceLevel];
export declare const PatchFilterKey: {
  readonly AdvisoryId: "ADVISORY_ID";
  readonly Arch: "ARCH";
  readonly BugzillaId: "BUGZILLA_ID";
  readonly CVEId: "CVE_ID";
  readonly Classification: "CLASSIFICATION";
  readonly Epoch: "EPOCH";
  readonly MsrcSeverity: "MSRC_SEVERITY";
  readonly Name: "NAME";
  readonly PatchId: "PATCH_ID";
  readonly PatchSet: "PATCH_SET";
  readonly Priority: "PRIORITY";
  readonly Product: "PRODUCT";
  readonly ProductFamily: "PRODUCT_FAMILY";
  readonly Release: "RELEASE";
  readonly Repository: "REPOSITORY";
  readonly Section: "SECTION";
  readonly Security: "SECURITY";
  readonly Severity: "SEVERITY";
  readonly Version: "VERSION";
};
export type PatchFilterKey =
  (typeof PatchFilterKey)[keyof typeof PatchFilterKey];
export declare const PatchComplianceStatus: {
  readonly Compliant: "COMPLIANT";
  readonly NonCompliant: "NON_COMPLIANT";
};
export type PatchComplianceStatus =
  (typeof PatchComplianceStatus)[keyof typeof PatchComplianceStatus];
export declare const OperatingSystem: {
  readonly AlmaLinux: "ALMA_LINUX";
  readonly AmazonLinux: "AMAZON_LINUX";
  readonly AmazonLinux2: "AMAZON_LINUX_2";
  readonly AmazonLinux2022: "AMAZON_LINUX_2022";
  readonly AmazonLinux2023: "AMAZON_LINUX_2023";
  readonly CentOS: "CENTOS";
  readonly Debian: "DEBIAN";
  readonly MacOS: "MACOS";
  readonly OracleLinux: "ORACLE_LINUX";
  readonly Raspbian: "RASPBIAN";
  readonly RedhatEnterpriseLinux: "REDHAT_ENTERPRISE_LINUX";
  readonly Rocky_Linux: "ROCKY_LINUX";
  readonly Suse: "SUSE";
  readonly Ubuntu: "UBUNTU";
  readonly Windows: "WINDOWS";
};
export type OperatingSystem =
  (typeof OperatingSystem)[keyof typeof OperatingSystem];
export declare const PatchAction: {
  readonly AllowAsDependency: "ALLOW_AS_DEPENDENCY";
  readonly Block: "BLOCK";
};
export type PatchAction = (typeof PatchAction)[keyof typeof PatchAction];
export declare const ResourceDataSyncS3Format: {
  readonly JSON_SERDE: "JsonSerDe";
};
export type ResourceDataSyncS3Format =
  (typeof ResourceDataSyncS3Format)[keyof typeof ResourceDataSyncS3Format];
export declare const InventorySchemaDeleteOption: {
  readonly DELETE_SCHEMA: "DeleteSchema";
  readonly DISABLE_SCHEMA: "DisableSchema";
};
export type InventorySchemaDeleteOption =
  (typeof InventorySchemaDeleteOption)[keyof typeof InventorySchemaDeleteOption];
export declare const DescribeActivationsFilterKeys: {
  readonly ACTIVATION_IDS: "ActivationIds";
  readonly DEFAULT_INSTANCE_NAME: "DefaultInstanceName";
  readonly IAM_ROLE: "IamRole";
};
export type DescribeActivationsFilterKeys =
  (typeof DescribeActivationsFilterKeys)[keyof typeof DescribeActivationsFilterKeys];
export declare const AssociationExecutionFilterKey: {
  readonly CreatedTime: "CreatedTime";
  readonly ExecutionId: "ExecutionId";
  readonly Status: "Status";
};
export type AssociationExecutionFilterKey =
  (typeof AssociationExecutionFilterKey)[keyof typeof AssociationExecutionFilterKey];
export declare const AssociationFilterOperatorType: {
  readonly Equal: "EQUAL";
  readonly GreaterThan: "GREATER_THAN";
  readonly LessThan: "LESS_THAN";
};
export type AssociationFilterOperatorType =
  (typeof AssociationFilterOperatorType)[keyof typeof AssociationFilterOperatorType];
export declare const AssociationExecutionTargetsFilterKey: {
  readonly ResourceId: "ResourceId";
  readonly ResourceType: "ResourceType";
  readonly Status: "Status";
};
export type AssociationExecutionTargetsFilterKey =
  (typeof AssociationExecutionTargetsFilterKey)[keyof typeof AssociationExecutionTargetsFilterKey];
export declare const AutomationExecutionFilterKey: {
  readonly AUTOMATION_SUBTYPE: "AutomationSubtype";
  readonly AUTOMATION_TYPE: "AutomationType";
  readonly CURRENT_ACTION: "CurrentAction";
  readonly DOCUMENT_NAME_PREFIX: "DocumentNamePrefix";
  readonly EXECUTION_ID: "ExecutionId";
  readonly EXECUTION_STATUS: "ExecutionStatus";
  readonly OPS_ITEM_ID: "OpsItemId";
  readonly PARENT_EXECUTION_ID: "ParentExecutionId";
  readonly START_TIME_AFTER: "StartTimeAfter";
  readonly START_TIME_BEFORE: "StartTimeBefore";
  readonly TAG_KEY: "TagKey";
  readonly TARGET_RESOURCE_GROUP: "TargetResourceGroup";
};
export type AutomationExecutionFilterKey =
  (typeof AutomationExecutionFilterKey)[keyof typeof AutomationExecutionFilterKey];
export declare const AutomationExecutionStatus: {
  readonly APPROVED: "Approved";
  readonly CANCELLED: "Cancelled";
  readonly CANCELLING: "Cancelling";
  readonly CHANGE_CALENDAR_OVERRIDE_APPROVED: "ChangeCalendarOverrideApproved";
  readonly CHANGE_CALENDAR_OVERRIDE_REJECTED: "ChangeCalendarOverrideRejected";
  readonly COMPLETED_WITH_FAILURE: "CompletedWithFailure";
  readonly COMPLETED_WITH_SUCCESS: "CompletedWithSuccess";
  readonly EXITED: "Exited";
  readonly FAILED: "Failed";
  readonly INPROGRESS: "InProgress";
  readonly PENDING: "Pending";
  readonly PENDING_APPROVAL: "PendingApproval";
  readonly PENDING_CHANGE_CALENDAR_OVERRIDE: "PendingChangeCalendarOverride";
  readonly REJECTED: "Rejected";
  readonly RUNBOOK_INPROGRESS: "RunbookInProgress";
  readonly SCHEDULED: "Scheduled";
  readonly SUCCESS: "Success";
  readonly TIMEDOUT: "TimedOut";
  readonly WAITING: "Waiting";
};
export type AutomationExecutionStatus =
  (typeof AutomationExecutionStatus)[keyof typeof AutomationExecutionStatus];
export declare const AutomationSubtype: {
  readonly AccessRequest: "AccessRequest";
  readonly ChangeRequest: "ChangeRequest";
};
export type AutomationSubtype =
  (typeof AutomationSubtype)[keyof typeof AutomationSubtype];
export declare const AutomationType: {
  readonly CrossAccount: "CrossAccount";
  readonly Local: "Local";
};
export type AutomationType =
  (typeof AutomationType)[keyof typeof AutomationType];
export declare const ExecutionMode: {
  readonly Auto: "Auto";
  readonly Interactive: "Interactive";
};
export type ExecutionMode = (typeof ExecutionMode)[keyof typeof ExecutionMode];
export declare const StepExecutionFilterKey: {
  readonly ACTION: "Action";
  readonly PARENT_STEP_EXECUTION_ID: "ParentStepExecutionId";
  readonly PARENT_STEP_ITERATION: "ParentStepIteration";
  readonly PARENT_STEP_ITERATOR_VALUE: "ParentStepIteratorValue";
  readonly START_TIME_AFTER: "StartTimeAfter";
  readonly START_TIME_BEFORE: "StartTimeBefore";
  readonly STEP_EXECUTION_ID: "StepExecutionId";
  readonly STEP_EXECUTION_STATUS: "StepExecutionStatus";
  readonly STEP_NAME: "StepName";
};
export type StepExecutionFilterKey =
  (typeof StepExecutionFilterKey)[keyof typeof StepExecutionFilterKey];
export declare const DocumentPermissionType: {
  readonly SHARE: "Share";
};
export type DocumentPermissionType =
  (typeof DocumentPermissionType)[keyof typeof DocumentPermissionType];
export declare const PatchDeploymentStatus: {
  readonly Approved: "APPROVED";
  readonly ExplicitApproved: "EXPLICIT_APPROVED";
  readonly ExplicitRejected: "EXPLICIT_REJECTED";
  readonly PendingApproval: "PENDING_APPROVAL";
};
export type PatchDeploymentStatus =
  (typeof PatchDeploymentStatus)[keyof typeof PatchDeploymentStatus];
export declare const InstanceInformationFilterKey: {
  readonly ACTIVATION_IDS: "ActivationIds";
  readonly AGENT_VERSION: "AgentVersion";
  readonly ASSOCIATION_STATUS: "AssociationStatus";
  readonly IAM_ROLE: "IamRole";
  readonly INSTANCE_IDS: "InstanceIds";
  readonly PING_STATUS: "PingStatus";
  readonly PLATFORM_TYPES: "PlatformTypes";
  readonly RESOURCE_TYPE: "ResourceType";
};
export type InstanceInformationFilterKey =
  (typeof InstanceInformationFilterKey)[keyof typeof InstanceInformationFilterKey];
export declare const PingStatus: {
  readonly CONNECTION_LOST: "ConnectionLost";
  readonly INACTIVE: "Inactive";
  readonly ONLINE: "Online";
};
export type PingStatus = (typeof PingStatus)[keyof typeof PingStatus];
export declare const ResourceType: {
  readonly EC2_INSTANCE: "EC2Instance";
  readonly MANAGED_INSTANCE: "ManagedInstance";
};
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];
export declare const SourceType: {
  readonly AWS_EC2_INSTANCE: "AWS::EC2::Instance";
  readonly AWS_IOT_THING: "AWS::IoT::Thing";
  readonly AWS_SSM_MANAGEDINSTANCE: "AWS::SSM::ManagedInstance";
};
export type SourceType = (typeof SourceType)[keyof typeof SourceType];
export declare const PatchComplianceDataState: {
  readonly AvailableSecurityUpdate: "AVAILABLE_SECURITY_UPDATE";
  readonly Failed: "FAILED";
  readonly Installed: "INSTALLED";
  readonly InstalledOther: "INSTALLED_OTHER";
  readonly InstalledPendingReboot: "INSTALLED_PENDING_REBOOT";
  readonly InstalledRejected: "INSTALLED_REJECTED";
  readonly Missing: "MISSING";
  readonly NotApplicable: "NOT_APPLICABLE";
};
export type PatchComplianceDataState =
  (typeof PatchComplianceDataState)[keyof typeof PatchComplianceDataState];
export declare const PatchOperationType: {
  readonly INSTALL: "Install";
  readonly SCAN: "Scan";
};
export type PatchOperationType =
  (typeof PatchOperationType)[keyof typeof PatchOperationType];
export declare const RebootOption: {
  readonly NO_REBOOT: "NoReboot";
  readonly REBOOT_IF_NEEDED: "RebootIfNeeded";
};
export type RebootOption = (typeof RebootOption)[keyof typeof RebootOption];
export declare const InstancePatchStateOperatorType: {
  readonly EQUAL: "Equal";
  readonly GREATER_THAN: "GreaterThan";
  readonly LESS_THAN: "LessThan";
  readonly NOT_EQUAL: "NotEqual";
};
export type InstancePatchStateOperatorType =
  (typeof InstancePatchStateOperatorType)[keyof typeof InstancePatchStateOperatorType];
export declare const InstancePropertyFilterOperator: {
  readonly BEGIN_WITH: "BeginWith";
  readonly EQUAL: "Equal";
  readonly GREATER_THAN: "GreaterThan";
  readonly LESS_THAN: "LessThan";
  readonly NOT_EQUAL: "NotEqual";
};
export type InstancePropertyFilterOperator =
  (typeof InstancePropertyFilterOperator)[keyof typeof InstancePropertyFilterOperator];
export declare const InstancePropertyFilterKey: {
  readonly ACTIVATION_IDS: "ActivationIds";
  readonly AGENT_VERSION: "AgentVersion";
  readonly ASSOCIATION_STATUS: "AssociationStatus";
  readonly DOCUMENT_NAME: "DocumentName";
  readonly IAM_ROLE: "IamRole";
  readonly INSTANCE_IDS: "InstanceIds";
  readonly PING_STATUS: "PingStatus";
  readonly PLATFORM_TYPES: "PlatformTypes";
  readonly RESOURCE_TYPE: "ResourceType";
};
export type InstancePropertyFilterKey =
  (typeof InstancePropertyFilterKey)[keyof typeof InstancePropertyFilterKey];
export declare const InventoryDeletionStatus: {
  readonly COMPLETE: "Complete";
  readonly IN_PROGRESS: "InProgress";
};
export type InventoryDeletionStatus =
  (typeof InventoryDeletionStatus)[keyof typeof InventoryDeletionStatus];
export declare const MaintenanceWindowExecutionStatus: {
  readonly Cancelled: "CANCELLED";
  readonly Cancelling: "CANCELLING";
  readonly Failed: "FAILED";
  readonly InProgress: "IN_PROGRESS";
  readonly Pending: "PENDING";
  readonly SkippedOverlapping: "SKIPPED_OVERLAPPING";
  readonly Success: "SUCCESS";
  readonly TimedOut: "TIMED_OUT";
};
export type MaintenanceWindowExecutionStatus =
  (typeof MaintenanceWindowExecutionStatus)[keyof typeof MaintenanceWindowExecutionStatus];
export declare const MaintenanceWindowTaskType: {
  readonly Automation: "AUTOMATION";
  readonly Lambda: "LAMBDA";
  readonly RunCommand: "RUN_COMMAND";
  readonly StepFunctions: "STEP_FUNCTIONS";
};
export type MaintenanceWindowTaskType =
  (typeof MaintenanceWindowTaskType)[keyof typeof MaintenanceWindowTaskType];
export declare const MaintenanceWindowResourceType: {
  readonly Instance: "INSTANCE";
  readonly ResourceGroup: "RESOURCE_GROUP";
};
export type MaintenanceWindowResourceType =
  (typeof MaintenanceWindowResourceType)[keyof typeof MaintenanceWindowResourceType];
export declare const MaintenanceWindowTaskCutoffBehavior: {
  readonly CancelTask: "CANCEL_TASK";
  readonly ContinueTask: "CONTINUE_TASK";
};
export type MaintenanceWindowTaskCutoffBehavior =
  (typeof MaintenanceWindowTaskCutoffBehavior)[keyof typeof MaintenanceWindowTaskCutoffBehavior];
export declare const OpsItemFilterKey: {
  readonly ACCESS_REQUEST_APPROVER_ARN: "AccessRequestByApproverArn";
  readonly ACCESS_REQUEST_APPROVER_ID: "AccessRequestByApproverId";
  readonly ACCESS_REQUEST_IS_REPLICA: "AccessRequestByIsReplica";
  readonly ACCESS_REQUEST_REQUESTER_ARN: "AccessRequestByRequesterArn";
  readonly ACCESS_REQUEST_REQUESTER_ID: "AccessRequestByRequesterId";
  readonly ACCESS_REQUEST_SOURCE_ACCOUNT_ID: "AccessRequestBySourceAccountId";
  readonly ACCESS_REQUEST_SOURCE_OPS_ITEM_ID: "AccessRequestBySourceOpsItemId";
  readonly ACCESS_REQUEST_SOURCE_REGION: "AccessRequestBySourceRegion";
  readonly ACCESS_REQUEST_TARGET_RESOURCE_ID: "AccessRequestByTargetResourceId";
  readonly ACCOUNT_ID: "AccountId";
  readonly ACTUAL_END_TIME: "ActualEndTime";
  readonly ACTUAL_START_TIME: "ActualStartTime";
  readonly AUTOMATION_ID: "AutomationId";
  readonly CATEGORY: "Category";
  readonly CHANGE_REQUEST_APPROVER_ARN: "ChangeRequestByApproverArn";
  readonly CHANGE_REQUEST_APPROVER_NAME: "ChangeRequestByApproverName";
  readonly CHANGE_REQUEST_REQUESTER_ARN: "ChangeRequestByRequesterArn";
  readonly CHANGE_REQUEST_REQUESTER_NAME: "ChangeRequestByRequesterName";
  readonly CHANGE_REQUEST_TARGETS_RESOURCE_GROUP: "ChangeRequestByTargetsResourceGroup";
  readonly CHANGE_REQUEST_TEMPLATE: "ChangeRequestByTemplate";
  readonly CREATED_BY: "CreatedBy";
  readonly CREATED_TIME: "CreatedTime";
  readonly INSIGHT_TYPE: "InsightByType";
  readonly LAST_MODIFIED_TIME: "LastModifiedTime";
  readonly OPERATIONAL_DATA: "OperationalData";
  readonly OPERATIONAL_DATA_KEY: "OperationalDataKey";
  readonly OPERATIONAL_DATA_VALUE: "OperationalDataValue";
  readonly OPSITEM_ID: "OpsItemId";
  readonly OPSITEM_TYPE: "OpsItemType";
  readonly PLANNED_END_TIME: "PlannedEndTime";
  readonly PLANNED_START_TIME: "PlannedStartTime";
  readonly PRIORITY: "Priority";
  readonly RESOURCE_ID: "ResourceId";
  readonly SEVERITY: "Severity";
  readonly SOURCE: "Source";
  readonly STATUS: "Status";
  readonly TITLE: "Title";
};
export type OpsItemFilterKey =
  (typeof OpsItemFilterKey)[keyof typeof OpsItemFilterKey];
export declare const OpsItemFilterOperator: {
  readonly CONTAINS: "Contains";
  readonly EQUAL: "Equal";
  readonly GREATER_THAN: "GreaterThan";
  readonly LESS_THAN: "LessThan";
};
export type OpsItemFilterOperator =
  (typeof OpsItemFilterOperator)[keyof typeof OpsItemFilterOperator];
export declare const OpsItemStatus: {
  readonly APPROVED: "Approved";
  readonly CANCELLED: "Cancelled";
  readonly CANCELLING: "Cancelling";
  readonly CHANGE_CALENDAR_OVERRIDE_APPROVED: "ChangeCalendarOverrideApproved";
  readonly CHANGE_CALENDAR_OVERRIDE_REJECTED: "ChangeCalendarOverrideRejected";
  readonly CLOSED: "Closed";
  readonly COMPLETED_WITH_FAILURE: "CompletedWithFailure";
  readonly COMPLETED_WITH_SUCCESS: "CompletedWithSuccess";
  readonly FAILED: "Failed";
  readonly IN_PROGRESS: "InProgress";
  readonly OPEN: "Open";
  readonly PENDING: "Pending";
  readonly PENDING_APPROVAL: "PendingApproval";
  readonly PENDING_CHANGE_CALENDAR_OVERRIDE: "PendingChangeCalendarOverride";
  readonly REJECTED: "Rejected";
  readonly RESOLVED: "Resolved";
  readonly REVOKED: "Revoked";
  readonly RUNBOOK_IN_PROGRESS: "RunbookInProgress";
  readonly SCHEDULED: "Scheduled";
  readonly TIMED_OUT: "TimedOut";
};
export type OpsItemStatus = (typeof OpsItemStatus)[keyof typeof OpsItemStatus];
export declare const ParametersFilterKey: {
  readonly KEY_ID: "KeyId";
  readonly NAME: "Name";
  readonly TYPE: "Type";
};
export type ParametersFilterKey =
  (typeof ParametersFilterKey)[keyof typeof ParametersFilterKey];
export declare const ParameterTier: {
  readonly ADVANCED: "Advanced";
  readonly INTELLIGENT_TIERING: "Intelligent-Tiering";
  readonly STANDARD: "Standard";
};
export type ParameterTier = (typeof ParameterTier)[keyof typeof ParameterTier];
export declare const ParameterType: {
  readonly SECURE_STRING: "SecureString";
  readonly STRING: "String";
  readonly STRING_LIST: "StringList";
};
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];
export declare const PatchSet: {
  readonly Application: "APPLICATION";
  readonly Os: "OS";
};
export type PatchSet = (typeof PatchSet)[keyof typeof PatchSet];
export declare const PatchProperty: {
  readonly PatchClassification: "CLASSIFICATION";
  readonly PatchMsrcSeverity: "MSRC_SEVERITY";
  readonly PatchPriority: "PRIORITY";
  readonly PatchProductFamily: "PRODUCT_FAMILY";
  readonly PatchSeverity: "SEVERITY";
  readonly Product: "PRODUCT";
};
export type PatchProperty = (typeof PatchProperty)[keyof typeof PatchProperty];
export declare const SessionFilterKey: {
  readonly ACCESS_TYPE: "AccessType";
  readonly INVOKED_AFTER: "InvokedAfter";
  readonly INVOKED_BEFORE: "InvokedBefore";
  readonly OWNER: "Owner";
  readonly SESSION_ID: "SessionId";
  readonly STATUS: "Status";
  readonly TARGET_ID: "Target";
};
export type SessionFilterKey =
  (typeof SessionFilterKey)[keyof typeof SessionFilterKey];
export declare const SessionState: {
  readonly ACTIVE: "Active";
  readonly HISTORY: "History";
};
export type SessionState = (typeof SessionState)[keyof typeof SessionState];
export declare const SessionStatus: {
  readonly CONNECTED: "Connected";
  readonly CONNECTING: "Connecting";
  readonly DISCONNECTED: "Disconnected";
  readonly FAILED: "Failed";
  readonly TERMINATED: "Terminated";
  readonly TERMINATING: "Terminating";
};
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus];
export declare const CalendarState: {
  readonly CLOSED: "CLOSED";
  readonly OPEN: "OPEN";
};
export type CalendarState = (typeof CalendarState)[keyof typeof CalendarState];
export declare const CommandInvocationStatus: {
  readonly CANCELLED: "Cancelled";
  readonly CANCELLING: "Cancelling";
  readonly DELAYED: "Delayed";
  readonly FAILED: "Failed";
  readonly IN_PROGRESS: "InProgress";
  readonly PENDING: "Pending";
  readonly SUCCESS: "Success";
  readonly TIMED_OUT: "TimedOut";
};
export type CommandInvocationStatus =
  (typeof CommandInvocationStatus)[keyof typeof CommandInvocationStatus];
export declare const ConnectionStatus: {
  readonly CONNECTED: "connected";
  readonly NOT_CONNECTED: "notconnected";
};
export type ConnectionStatus =
  (typeof ConnectionStatus)[keyof typeof ConnectionStatus];
export declare const AttachmentHashType: {
  readonly SHA256: "Sha256";
};
export type AttachmentHashType =
  (typeof AttachmentHashType)[keyof typeof AttachmentHashType];
export declare const ImpactType: {
  readonly MUTATING: "Mutating";
  readonly NON_MUTATING: "NonMutating";
  readonly UNDETERMINED: "Undetermined";
};
export type ImpactType = (typeof ImpactType)[keyof typeof ImpactType];
export declare const ExecutionPreviewStatus: {
  readonly FAILED: "Failed";
  readonly IN_PROGRESS: "InProgress";
  readonly PENDING: "Pending";
  readonly SUCCESS: "Success";
};
export type ExecutionPreviewStatus =
  (typeof ExecutionPreviewStatus)[keyof typeof ExecutionPreviewStatus];
export declare const InventoryQueryOperatorType: {
  readonly BEGIN_WITH: "BeginWith";
  readonly EQUAL: "Equal";
  readonly EXISTS: "Exists";
  readonly GREATER_THAN: "GreaterThan";
  readonly LESS_THAN: "LessThan";
  readonly NOT_EQUAL: "NotEqual";
};
export type InventoryQueryOperatorType =
  (typeof InventoryQueryOperatorType)[keyof typeof InventoryQueryOperatorType];
export declare const InventoryAttributeDataType: {
  readonly NUMBER: "number";
  readonly STRING: "string";
};
export type InventoryAttributeDataType =
  (typeof InventoryAttributeDataType)[keyof typeof InventoryAttributeDataType];
export declare const NotificationEvent: {
  readonly ALL: "All";
  readonly CANCELLED: "Cancelled";
  readonly FAILED: "Failed";
  readonly IN_PROGRESS: "InProgress";
  readonly SUCCESS: "Success";
  readonly TIMED_OUT: "TimedOut";
};
export type NotificationEvent =
  (typeof NotificationEvent)[keyof typeof NotificationEvent];
export declare const NotificationType: {
  readonly Command: "Command";
  readonly Invocation: "Invocation";
};
export type NotificationType =
  (typeof NotificationType)[keyof typeof NotificationType];
export declare const OpsFilterOperatorType: {
  readonly BEGIN_WITH: "BeginWith";
  readonly EQUAL: "Equal";
  readonly EXISTS: "Exists";
  readonly GREATER_THAN: "GreaterThan";
  readonly LESS_THAN: "LessThan";
  readonly NOT_EQUAL: "NotEqual";
};
export type OpsFilterOperatorType =
  (typeof OpsFilterOperatorType)[keyof typeof OpsFilterOperatorType];
export declare const AssociationFilterKey: {
  readonly AssociationId: "AssociationId";
  readonly AssociationName: "AssociationName";
  readonly InstanceId: "InstanceId";
  readonly LastExecutedAfter: "LastExecutedAfter";
  readonly LastExecutedBefore: "LastExecutedBefore";
  readonly Name: "Name";
  readonly ResourceGroupName: "ResourceGroupName";
  readonly Status: "AssociationStatusName";
};
export type AssociationFilterKey =
  (typeof AssociationFilterKey)[keyof typeof AssociationFilterKey];
export declare const CommandFilterKey: {
  readonly DOCUMENT_NAME: "DocumentName";
  readonly EXECUTION_STAGE: "ExecutionStage";
  readonly INVOKED_AFTER: "InvokedAfter";
  readonly INVOKED_BEFORE: "InvokedBefore";
  readonly STATUS: "Status";
};
export type CommandFilterKey =
  (typeof CommandFilterKey)[keyof typeof CommandFilterKey];
export declare const CommandPluginStatus: {
  readonly CANCELLED: "Cancelled";
  readonly FAILED: "Failed";
  readonly IN_PROGRESS: "InProgress";
  readonly PENDING: "Pending";
  readonly SUCCESS: "Success";
  readonly TIMED_OUT: "TimedOut";
};
export type CommandPluginStatus =
  (typeof CommandPluginStatus)[keyof typeof CommandPluginStatus];
export declare const CommandStatus: {
  readonly CANCELLED: "Cancelled";
  readonly CANCELLING: "Cancelling";
  readonly FAILED: "Failed";
  readonly IN_PROGRESS: "InProgress";
  readonly PENDING: "Pending";
  readonly SUCCESS: "Success";
  readonly TIMED_OUT: "TimedOut";
};
export type CommandStatus = (typeof CommandStatus)[keyof typeof CommandStatus];
export declare const ComplianceQueryOperatorType: {
  readonly BeginWith: "BEGIN_WITH";
  readonly Equal: "EQUAL";
  readonly GreaterThan: "GREATER_THAN";
  readonly LessThan: "LESS_THAN";
  readonly NotEqual: "NOT_EQUAL";
};
export type ComplianceQueryOperatorType =
  (typeof ComplianceQueryOperatorType)[keyof typeof ComplianceQueryOperatorType];
export declare const ComplianceSeverity: {
  readonly Critical: "CRITICAL";
  readonly High: "HIGH";
  readonly Informational: "INFORMATIONAL";
  readonly Low: "LOW";
  readonly Medium: "MEDIUM";
  readonly Unspecified: "UNSPECIFIED";
};
export type ComplianceSeverity =
  (typeof ComplianceSeverity)[keyof typeof ComplianceSeverity];
export declare const ComplianceStatus: {
  readonly Compliant: "COMPLIANT";
  readonly NonCompliant: "NON_COMPLIANT";
};
export type ComplianceStatus =
  (typeof ComplianceStatus)[keyof typeof ComplianceStatus];
export declare const DocumentMetadataEnum: {
  readonly DocumentReviews: "DocumentReviews";
};
export type DocumentMetadataEnum =
  (typeof DocumentMetadataEnum)[keyof typeof DocumentMetadataEnum];
export declare const DocumentReviewCommentType: {
  readonly Comment: "Comment";
};
export type DocumentReviewCommentType =
  (typeof DocumentReviewCommentType)[keyof typeof DocumentReviewCommentType];
export declare const DocumentFilterKey: {
  readonly DocumentType: "DocumentType";
  readonly Name: "Name";
  readonly Owner: "Owner";
  readonly PlatformTypes: "PlatformTypes";
};
export type DocumentFilterKey =
  (typeof DocumentFilterKey)[keyof typeof DocumentFilterKey];
export declare const NodeFilterKey: {
  readonly ACCOUNT_ID: "AccountId";
  readonly AGENT_TYPE: "AgentType";
  readonly AGENT_VERSION: "AgentVersion";
  readonly COMPUTER_NAME: "ComputerName";
  readonly INSTANCE_ID: "InstanceId";
  readonly INSTANCE_STATUS: "InstanceStatus";
  readonly IP_ADDRESS: "IpAddress";
  readonly MANAGED_STATUS: "ManagedStatus";
  readonly ORGANIZATIONAL_UNIT_ID: "OrganizationalUnitId";
  readonly ORGANIZATIONAL_UNIT_PATH: "OrganizationalUnitPath";
  readonly PLATFORM_NAME: "PlatformName";
  readonly PLATFORM_TYPE: "PlatformType";
  readonly PLATFORM_VERSION: "PlatformVersion";
  readonly REGION: "Region";
  readonly RESOURCE_TYPE: "ResourceType";
};
export type NodeFilterKey = (typeof NodeFilterKey)[keyof typeof NodeFilterKey];
export declare const NodeFilterOperatorType: {
  readonly BEGIN_WITH: "BeginWith";
  readonly EQUAL: "Equal";
  readonly NOT_EQUAL: "NotEqual";
};
export type NodeFilterOperatorType =
  (typeof NodeFilterOperatorType)[keyof typeof NodeFilterOperatorType];
export declare const ManagedStatus: {
  readonly ALL: "All";
  readonly MANAGED: "Managed";
  readonly UNMANAGED: "Unmanaged";
};
export type ManagedStatus = (typeof ManagedStatus)[keyof typeof ManagedStatus];
export declare const NodeAggregatorType: {
  readonly COUNT: "Count";
};
export type NodeAggregatorType =
  (typeof NodeAggregatorType)[keyof typeof NodeAggregatorType];
export declare const NodeAttributeName: {
  readonly AGENT_VERSION: "AgentVersion";
  readonly PLATFORM_NAME: "PlatformName";
  readonly PLATFORM_TYPE: "PlatformType";
  readonly PLATFORM_VERSION: "PlatformVersion";
  readonly REGION: "Region";
  readonly RESOURCE_TYPE: "ResourceType";
};
export type NodeAttributeName =
  (typeof NodeAttributeName)[keyof typeof NodeAttributeName];
export declare const NodeTypeName: {
  readonly INSTANCE: "Instance";
};
export type NodeTypeName = (typeof NodeTypeName)[keyof typeof NodeTypeName];
export declare const OpsItemEventFilterKey: {
  readonly OPSITEM_ID: "OpsItemId";
};
export type OpsItemEventFilterKey =
  (typeof OpsItemEventFilterKey)[keyof typeof OpsItemEventFilterKey];
export declare const OpsItemEventFilterOperator: {
  readonly EQUAL: "Equal";
};
export type OpsItemEventFilterOperator =
  (typeof OpsItemEventFilterOperator)[keyof typeof OpsItemEventFilterOperator];
export declare const OpsItemRelatedItemsFilterKey: {
  readonly ASSOCIATION_ID: "AssociationId";
  readonly RESOURCE_TYPE: "ResourceType";
  readonly RESOURCE_URI: "ResourceUri";
};
export type OpsItemRelatedItemsFilterKey =
  (typeof OpsItemRelatedItemsFilterKey)[keyof typeof OpsItemRelatedItemsFilterKey];
export declare const OpsItemRelatedItemsFilterOperator: {
  readonly EQUAL: "Equal";
};
export type OpsItemRelatedItemsFilterOperator =
  (typeof OpsItemRelatedItemsFilterOperator)[keyof typeof OpsItemRelatedItemsFilterOperator];
export declare const LastResourceDataSyncStatus: {
  readonly FAILED: "Failed";
  readonly INPROGRESS: "InProgress";
  readonly SUCCESSFUL: "Successful";
};
export type LastResourceDataSyncStatus =
  (typeof LastResourceDataSyncStatus)[keyof typeof LastResourceDataSyncStatus];
export declare const ComplianceUploadType: {
  readonly Complete: "COMPLETE";
  readonly Partial: "PARTIAL";
};
export type ComplianceUploadType =
  (typeof ComplianceUploadType)[keyof typeof ComplianceUploadType];
export declare const SignalType: {
  readonly APPROVE: "Approve";
  readonly REJECT: "Reject";
  readonly RESUME: "Resume";
  readonly REVOKE: "Revoke";
  readonly START_STEP: "StartStep";
  readonly STOP_STEP: "StopStep";
};
export type SignalType = (typeof SignalType)[keyof typeof SignalType];
export declare const StopType: {
  readonly CANCEL: "Cancel";
  readonly COMPLETE: "Complete";
};
export type StopType = (typeof StopType)[keyof typeof StopType];
export declare const DocumentReviewAction: {
  readonly Approve: "Approve";
  readonly Reject: "Reject";
  readonly SendForReview: "SendForReview";
  readonly UpdateReview: "UpdateReview";
};
export type DocumentReviewAction =
  (typeof DocumentReviewAction)[keyof typeof DocumentReviewAction];
