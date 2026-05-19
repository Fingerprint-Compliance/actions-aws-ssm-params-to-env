export const AccessRequestStatus = {
    APPROVED: "Approved",
    EXPIRED: "Expired",
    PENDING: "Pending",
    REJECTED: "Rejected",
    REVOKED: "Revoked",
};
export const AccessType = {
    JUSTINTIME: "JustInTime",
    STANDARD: "Standard",
};
export const ResourceTypeForTagging = {
    ASSOCIATION: "Association",
    AUTOMATION: "Automation",
    DOCUMENT: "Document",
    MAINTENANCE_WINDOW: "MaintenanceWindow",
    MANAGED_INSTANCE: "ManagedInstance",
    OPSMETADATA: "OpsMetadata",
    OPS_ITEM: "OpsItem",
    PARAMETER: "Parameter",
    PATCH_BASELINE: "PatchBaseline",
};
export const ExternalAlarmState = {
    ALARM: "ALARM",
    UNKNOWN: "UNKNOWN",
};
export const AssociationComplianceSeverity = {
    Critical: "CRITICAL",
    High: "HIGH",
    Low: "LOW",
    Medium: "MEDIUM",
    Unspecified: "UNSPECIFIED",
};
export const AssociationSyncCompliance = {
    Auto: "AUTO",
    Manual: "MANUAL",
};
export const AssociationStatusName = {
    Failed: "Failed",
    Pending: "Pending",
    Success: "Success",
};
export const Fault = {
    Client: "Client",
    Server: "Server",
    Unknown: "Unknown",
};
export const AttachmentsSourceKey = {
    AttachmentReference: "AttachmentReference",
    S3FileUrl: "S3FileUrl",
    SourceUrl: "SourceUrl",
};
export const DocumentFormat = {
    JSON: "JSON",
    TEXT: "TEXT",
    YAML: "YAML",
};
export const DocumentType = {
    ApplicationConfiguration: "ApplicationConfiguration",
    ApplicationConfigurationSchema: "ApplicationConfigurationSchema",
    AutoApprovalPolicy: "AutoApprovalPolicy",
    Automation: "Automation",
    ChangeCalendar: "ChangeCalendar",
    ChangeTemplate: "Automation.ChangeTemplate",
    CloudFormation: "CloudFormation",
    Command: "Command",
    ConformancePackTemplate: "ConformancePackTemplate",
    DeploymentStrategy: "DeploymentStrategy",
    ManualApprovalPolicy: "ManualApprovalPolicy",
    Package: "Package",
    Policy: "Policy",
    ProblemAnalysis: "ProblemAnalysis",
    ProblemAnalysisTemplate: "ProblemAnalysisTemplate",
    QuickSetup: "QuickSetup",
    Session: "Session",
};
export const DocumentHashType = {
    SHA1: "Sha1",
    SHA256: "Sha256",
};
export const DocumentParameterType = {
    String: "String",
    StringList: "StringList",
};
export const PlatformType = {
    LINUX: "Linux",
    MACOS: "MacOS",
    WINDOWS: "Windows",
};
export const ReviewStatus = {
    APPROVED: "APPROVED",
    NOT_REVIEWED: "NOT_REVIEWED",
    PENDING: "PENDING",
    REJECTED: "REJECTED",
};
export const DocumentStatus = {
    Active: "Active",
    Creating: "Creating",
    Deleting: "Deleting",
    Failed: "Failed",
    Updating: "Updating",
};
export const OpsItemDataType = {
    SEARCHABLE_STRING: "SearchableString",
    STRING: "String",
};
export const PatchComplianceLevel = {
    Critical: "CRITICAL",
    High: "HIGH",
    Informational: "INFORMATIONAL",
    Low: "LOW",
    Medium: "MEDIUM",
    Unspecified: "UNSPECIFIED",
};
export const PatchFilterKey = {
    AdvisoryId: "ADVISORY_ID",
    Arch: "ARCH",
    BugzillaId: "BUGZILLA_ID",
    CVEId: "CVE_ID",
    Classification: "CLASSIFICATION",
    Epoch: "EPOCH",
    MsrcSeverity: "MSRC_SEVERITY",
    Name: "NAME",
    PatchId: "PATCH_ID",
    PatchSet: "PATCH_SET",
    Priority: "PRIORITY",
    Product: "PRODUCT",
    ProductFamily: "PRODUCT_FAMILY",
    Release: "RELEASE",
    Repository: "REPOSITORY",
    Section: "SECTION",
    Security: "SECURITY",
    Severity: "SEVERITY",
    Version: "VERSION",
};
export const PatchComplianceStatus = {
    Compliant: "COMPLIANT",
    NonCompliant: "NON_COMPLIANT",
};
export const OperatingSystem = {
    AlmaLinux: "ALMA_LINUX",
    AmazonLinux: "AMAZON_LINUX",
    AmazonLinux2: "AMAZON_LINUX_2",
    AmazonLinux2022: "AMAZON_LINUX_2022",
    AmazonLinux2023: "AMAZON_LINUX_2023",
    CentOS: "CENTOS",
    Debian: "DEBIAN",
    MacOS: "MACOS",
    OracleLinux: "ORACLE_LINUX",
    Raspbian: "RASPBIAN",
    RedhatEnterpriseLinux: "REDHAT_ENTERPRISE_LINUX",
    Rocky_Linux: "ROCKY_LINUX",
    Suse: "SUSE",
    Ubuntu: "UBUNTU",
    Windows: "WINDOWS",
};
export const PatchAction = {
    AllowAsDependency: "ALLOW_AS_DEPENDENCY",
    Block: "BLOCK",
};
export const ResourceDataSyncS3Format = {
    JSON_SERDE: "JsonSerDe",
};
export const InventorySchemaDeleteOption = {
    DELETE_SCHEMA: "DeleteSchema",
    DISABLE_SCHEMA: "DisableSchema",
};
export const DescribeActivationsFilterKeys = {
    ACTIVATION_IDS: "ActivationIds",
    DEFAULT_INSTANCE_NAME: "DefaultInstanceName",
    IAM_ROLE: "IamRole",
};
export const AssociationExecutionFilterKey = {
    CreatedTime: "CreatedTime",
    ExecutionId: "ExecutionId",
    Status: "Status",
};
export const AssociationFilterOperatorType = {
    Equal: "EQUAL",
    GreaterThan: "GREATER_THAN",
    LessThan: "LESS_THAN",
};
export const AssociationExecutionTargetsFilterKey = {
    ResourceId: "ResourceId",
    ResourceType: "ResourceType",
    Status: "Status",
};
export const AutomationExecutionFilterKey = {
    AUTOMATION_SUBTYPE: "AutomationSubtype",
    AUTOMATION_TYPE: "AutomationType",
    CURRENT_ACTION: "CurrentAction",
    DOCUMENT_NAME_PREFIX: "DocumentNamePrefix",
    EXECUTION_ID: "ExecutionId",
    EXECUTION_STATUS: "ExecutionStatus",
    OPS_ITEM_ID: "OpsItemId",
    PARENT_EXECUTION_ID: "ParentExecutionId",
    START_TIME_AFTER: "StartTimeAfter",
    START_TIME_BEFORE: "StartTimeBefore",
    TAG_KEY: "TagKey",
    TARGET_RESOURCE_GROUP: "TargetResourceGroup",
};
export const AutomationExecutionStatus = {
    APPROVED: "Approved",
    CANCELLED: "Cancelled",
    CANCELLING: "Cancelling",
    CHANGE_CALENDAR_OVERRIDE_APPROVED: "ChangeCalendarOverrideApproved",
    CHANGE_CALENDAR_OVERRIDE_REJECTED: "ChangeCalendarOverrideRejected",
    COMPLETED_WITH_FAILURE: "CompletedWithFailure",
    COMPLETED_WITH_SUCCESS: "CompletedWithSuccess",
    EXITED: "Exited",
    FAILED: "Failed",
    INPROGRESS: "InProgress",
    PENDING: "Pending",
    PENDING_APPROVAL: "PendingApproval",
    PENDING_CHANGE_CALENDAR_OVERRIDE: "PendingChangeCalendarOverride",
    REJECTED: "Rejected",
    RUNBOOK_INPROGRESS: "RunbookInProgress",
    SCHEDULED: "Scheduled",
    SUCCESS: "Success",
    TIMEDOUT: "TimedOut",
    WAITING: "Waiting",
};
export const AutomationSubtype = {
    AccessRequest: "AccessRequest",
    ChangeRequest: "ChangeRequest",
};
export const AutomationType = {
    CrossAccount: "CrossAccount",
    Local: "Local",
};
export const ExecutionMode = {
    Auto: "Auto",
    Interactive: "Interactive",
};
export const StepExecutionFilterKey = {
    ACTION: "Action",
    PARENT_STEP_EXECUTION_ID: "ParentStepExecutionId",
    PARENT_STEP_ITERATION: "ParentStepIteration",
    PARENT_STEP_ITERATOR_VALUE: "ParentStepIteratorValue",
    START_TIME_AFTER: "StartTimeAfter",
    START_TIME_BEFORE: "StartTimeBefore",
    STEP_EXECUTION_ID: "StepExecutionId",
    STEP_EXECUTION_STATUS: "StepExecutionStatus",
    STEP_NAME: "StepName",
};
export const DocumentPermissionType = {
    SHARE: "Share",
};
export const PatchDeploymentStatus = {
    Approved: "APPROVED",
    ExplicitApproved: "EXPLICIT_APPROVED",
    ExplicitRejected: "EXPLICIT_REJECTED",
    PendingApproval: "PENDING_APPROVAL",
};
export const InstanceInformationFilterKey = {
    ACTIVATION_IDS: "ActivationIds",
    AGENT_VERSION: "AgentVersion",
    ASSOCIATION_STATUS: "AssociationStatus",
    IAM_ROLE: "IamRole",
    INSTANCE_IDS: "InstanceIds",
    PING_STATUS: "PingStatus",
    PLATFORM_TYPES: "PlatformTypes",
    RESOURCE_TYPE: "ResourceType",
};
export const PingStatus = {
    CONNECTION_LOST: "ConnectionLost",
    INACTIVE: "Inactive",
    ONLINE: "Online",
};
export const ResourceType = {
    EC2_INSTANCE: "EC2Instance",
    MANAGED_INSTANCE: "ManagedInstance",
};
export const SourceType = {
    AWS_EC2_INSTANCE: "AWS::EC2::Instance",
    AWS_IOT_THING: "AWS::IoT::Thing",
    AWS_SSM_MANAGEDINSTANCE: "AWS::SSM::ManagedInstance",
};
export const PatchComplianceDataState = {
    AvailableSecurityUpdate: "AVAILABLE_SECURITY_UPDATE",
    Failed: "FAILED",
    Installed: "INSTALLED",
    InstalledOther: "INSTALLED_OTHER",
    InstalledPendingReboot: "INSTALLED_PENDING_REBOOT",
    InstalledRejected: "INSTALLED_REJECTED",
    Missing: "MISSING",
    NotApplicable: "NOT_APPLICABLE",
};
export const PatchOperationType = {
    INSTALL: "Install",
    SCAN: "Scan",
};
export const RebootOption = {
    NO_REBOOT: "NoReboot",
    REBOOT_IF_NEEDED: "RebootIfNeeded",
};
export const InstancePatchStateOperatorType = {
    EQUAL: "Equal",
    GREATER_THAN: "GreaterThan",
    LESS_THAN: "LessThan",
    NOT_EQUAL: "NotEqual",
};
export const InstancePropertyFilterOperator = {
    BEGIN_WITH: "BeginWith",
    EQUAL: "Equal",
    GREATER_THAN: "GreaterThan",
    LESS_THAN: "LessThan",
    NOT_EQUAL: "NotEqual",
};
export const InstancePropertyFilterKey = {
    ACTIVATION_IDS: "ActivationIds",
    AGENT_VERSION: "AgentVersion",
    ASSOCIATION_STATUS: "AssociationStatus",
    DOCUMENT_NAME: "DocumentName",
    IAM_ROLE: "IamRole",
    INSTANCE_IDS: "InstanceIds",
    PING_STATUS: "PingStatus",
    PLATFORM_TYPES: "PlatformTypes",
    RESOURCE_TYPE: "ResourceType",
};
export const InventoryDeletionStatus = {
    COMPLETE: "Complete",
    IN_PROGRESS: "InProgress",
};
export const MaintenanceWindowExecutionStatus = {
    Cancelled: "CANCELLED",
    Cancelling: "CANCELLING",
    Failed: "FAILED",
    InProgress: "IN_PROGRESS",
    Pending: "PENDING",
    SkippedOverlapping: "SKIPPED_OVERLAPPING",
    Success: "SUCCESS",
    TimedOut: "TIMED_OUT",
};
export const MaintenanceWindowTaskType = {
    Automation: "AUTOMATION",
    Lambda: "LAMBDA",
    RunCommand: "RUN_COMMAND",
    StepFunctions: "STEP_FUNCTIONS",
};
export const MaintenanceWindowResourceType = {
    Instance: "INSTANCE",
    ResourceGroup: "RESOURCE_GROUP",
};
export const MaintenanceWindowTaskCutoffBehavior = {
    CancelTask: "CANCEL_TASK",
    ContinueTask: "CONTINUE_TASK",
};
export const OpsItemFilterKey = {
    ACCESS_REQUEST_APPROVER_ARN: "AccessRequestByApproverArn",
    ACCESS_REQUEST_APPROVER_ID: "AccessRequestByApproverId",
    ACCESS_REQUEST_IS_REPLICA: "AccessRequestByIsReplica",
    ACCESS_REQUEST_REQUESTER_ARN: "AccessRequestByRequesterArn",
    ACCESS_REQUEST_REQUESTER_ID: "AccessRequestByRequesterId",
    ACCESS_REQUEST_SOURCE_ACCOUNT_ID: "AccessRequestBySourceAccountId",
    ACCESS_REQUEST_SOURCE_OPS_ITEM_ID: "AccessRequestBySourceOpsItemId",
    ACCESS_REQUEST_SOURCE_REGION: "AccessRequestBySourceRegion",
    ACCESS_REQUEST_TARGET_RESOURCE_ID: "AccessRequestByTargetResourceId",
    ACCOUNT_ID: "AccountId",
    ACTUAL_END_TIME: "ActualEndTime",
    ACTUAL_START_TIME: "ActualStartTime",
    AUTOMATION_ID: "AutomationId",
    CATEGORY: "Category",
    CHANGE_REQUEST_APPROVER_ARN: "ChangeRequestByApproverArn",
    CHANGE_REQUEST_APPROVER_NAME: "ChangeRequestByApproverName",
    CHANGE_REQUEST_REQUESTER_ARN: "ChangeRequestByRequesterArn",
    CHANGE_REQUEST_REQUESTER_NAME: "ChangeRequestByRequesterName",
    CHANGE_REQUEST_TARGETS_RESOURCE_GROUP: "ChangeRequestByTargetsResourceGroup",
    CHANGE_REQUEST_TEMPLATE: "ChangeRequestByTemplate",
    CREATED_BY: "CreatedBy",
    CREATED_TIME: "CreatedTime",
    INSIGHT_TYPE: "InsightByType",
    LAST_MODIFIED_TIME: "LastModifiedTime",
    OPERATIONAL_DATA: "OperationalData",
    OPERATIONAL_DATA_KEY: "OperationalDataKey",
    OPERATIONAL_DATA_VALUE: "OperationalDataValue",
    OPSITEM_ID: "OpsItemId",
    OPSITEM_TYPE: "OpsItemType",
    PLANNED_END_TIME: "PlannedEndTime",
    PLANNED_START_TIME: "PlannedStartTime",
    PRIORITY: "Priority",
    RESOURCE_ID: "ResourceId",
    SEVERITY: "Severity",
    SOURCE: "Source",
    STATUS: "Status",
    TITLE: "Title",
};
export const OpsItemFilterOperator = {
    CONTAINS: "Contains",
    EQUAL: "Equal",
    GREATER_THAN: "GreaterThan",
    LESS_THAN: "LessThan",
};
export const OpsItemStatus = {
    APPROVED: "Approved",
    CANCELLED: "Cancelled",
    CANCELLING: "Cancelling",
    CHANGE_CALENDAR_OVERRIDE_APPROVED: "ChangeCalendarOverrideApproved",
    CHANGE_CALENDAR_OVERRIDE_REJECTED: "ChangeCalendarOverrideRejected",
    CLOSED: "Closed",
    COMPLETED_WITH_FAILURE: "CompletedWithFailure",
    COMPLETED_WITH_SUCCESS: "CompletedWithSuccess",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    OPEN: "Open",
    PENDING: "Pending",
    PENDING_APPROVAL: "PendingApproval",
    PENDING_CHANGE_CALENDAR_OVERRIDE: "PendingChangeCalendarOverride",
    REJECTED: "Rejected",
    RESOLVED: "Resolved",
    REVOKED: "Revoked",
    RUNBOOK_IN_PROGRESS: "RunbookInProgress",
    SCHEDULED: "Scheduled",
    TIMED_OUT: "TimedOut",
};
export const ParametersFilterKey = {
    KEY_ID: "KeyId",
    NAME: "Name",
    TYPE: "Type",
};
export const ParameterTier = {
    ADVANCED: "Advanced",
    INTELLIGENT_TIERING: "Intelligent-Tiering",
    STANDARD: "Standard",
};
export const ParameterType = {
    SECURE_STRING: "SecureString",
    STRING: "String",
    STRING_LIST: "StringList",
};
export const PatchSet = {
    Application: "APPLICATION",
    Os: "OS",
};
export const PatchProperty = {
    PatchClassification: "CLASSIFICATION",
    PatchMsrcSeverity: "MSRC_SEVERITY",
    PatchPriority: "PRIORITY",
    PatchProductFamily: "PRODUCT_FAMILY",
    PatchSeverity: "SEVERITY",
    Product: "PRODUCT",
};
export const SessionFilterKey = {
    ACCESS_TYPE: "AccessType",
    INVOKED_AFTER: "InvokedAfter",
    INVOKED_BEFORE: "InvokedBefore",
    OWNER: "Owner",
    SESSION_ID: "SessionId",
    STATUS: "Status",
    TARGET_ID: "Target",
};
export const SessionState = {
    ACTIVE: "Active",
    HISTORY: "History",
};
export const SessionStatus = {
    CONNECTED: "Connected",
    CONNECTING: "Connecting",
    DISCONNECTED: "Disconnected",
    FAILED: "Failed",
    TERMINATED: "Terminated",
    TERMINATING: "Terminating",
};
export const CalendarState = {
    CLOSED: "CLOSED",
    OPEN: "OPEN",
};
export const CommandInvocationStatus = {
    CANCELLED: "Cancelled",
    CANCELLING: "Cancelling",
    DELAYED: "Delayed",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    PENDING: "Pending",
    SUCCESS: "Success",
    TIMED_OUT: "TimedOut",
};
export const ConnectionStatus = {
    CONNECTED: "connected",
    NOT_CONNECTED: "notconnected",
};
export const AttachmentHashType = {
    SHA256: "Sha256",
};
export const ImpactType = {
    MUTATING: "Mutating",
    NON_MUTATING: "NonMutating",
    UNDETERMINED: "Undetermined",
};
export const ExecutionPreviewStatus = {
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    PENDING: "Pending",
    SUCCESS: "Success",
};
export const InventoryQueryOperatorType = {
    BEGIN_WITH: "BeginWith",
    EQUAL: "Equal",
    EXISTS: "Exists",
    GREATER_THAN: "GreaterThan",
    LESS_THAN: "LessThan",
    NOT_EQUAL: "NotEqual",
};
export const InventoryAttributeDataType = {
    NUMBER: "number",
    STRING: "string",
};
export const NotificationEvent = {
    ALL: "All",
    CANCELLED: "Cancelled",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    SUCCESS: "Success",
    TIMED_OUT: "TimedOut",
};
export const NotificationType = {
    Command: "Command",
    Invocation: "Invocation",
};
export const OpsFilterOperatorType = {
    BEGIN_WITH: "BeginWith",
    EQUAL: "Equal",
    EXISTS: "Exists",
    GREATER_THAN: "GreaterThan",
    LESS_THAN: "LessThan",
    NOT_EQUAL: "NotEqual",
};
export const AssociationFilterKey = {
    AssociationId: "AssociationId",
    AssociationName: "AssociationName",
    InstanceId: "InstanceId",
    LastExecutedAfter: "LastExecutedAfter",
    LastExecutedBefore: "LastExecutedBefore",
    Name: "Name",
    ResourceGroupName: "ResourceGroupName",
    Status: "AssociationStatusName",
};
export const CommandFilterKey = {
    DOCUMENT_NAME: "DocumentName",
    EXECUTION_STAGE: "ExecutionStage",
    INVOKED_AFTER: "InvokedAfter",
    INVOKED_BEFORE: "InvokedBefore",
    STATUS: "Status",
};
export const CommandPluginStatus = {
    CANCELLED: "Cancelled",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    PENDING: "Pending",
    SUCCESS: "Success",
    TIMED_OUT: "TimedOut",
};
export const CommandStatus = {
    CANCELLED: "Cancelled",
    CANCELLING: "Cancelling",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    PENDING: "Pending",
    SUCCESS: "Success",
    TIMED_OUT: "TimedOut",
};
export const ComplianceQueryOperatorType = {
    BeginWith: "BEGIN_WITH",
    Equal: "EQUAL",
    GreaterThan: "GREATER_THAN",
    LessThan: "LESS_THAN",
    NotEqual: "NOT_EQUAL",
};
export const ComplianceSeverity = {
    Critical: "CRITICAL",
    High: "HIGH",
    Informational: "INFORMATIONAL",
    Low: "LOW",
    Medium: "MEDIUM",
    Unspecified: "UNSPECIFIED",
};
export const ComplianceStatus = {
    Compliant: "COMPLIANT",
    NonCompliant: "NON_COMPLIANT",
};
export const DocumentMetadataEnum = {
    DocumentReviews: "DocumentReviews",
};
export const DocumentReviewCommentType = {
    Comment: "Comment",
};
export const DocumentFilterKey = {
    DocumentType: "DocumentType",
    Name: "Name",
    Owner: "Owner",
    PlatformTypes: "PlatformTypes",
};
export const NodeFilterKey = {
    ACCOUNT_ID: "AccountId",
    AGENT_TYPE: "AgentType",
    AGENT_VERSION: "AgentVersion",
    COMPUTER_NAME: "ComputerName",
    INSTANCE_ID: "InstanceId",
    INSTANCE_STATUS: "InstanceStatus",
    IP_ADDRESS: "IpAddress",
    MANAGED_STATUS: "ManagedStatus",
    ORGANIZATIONAL_UNIT_ID: "OrganizationalUnitId",
    ORGANIZATIONAL_UNIT_PATH: "OrganizationalUnitPath",
    PLATFORM_NAME: "PlatformName",
    PLATFORM_TYPE: "PlatformType",
    PLATFORM_VERSION: "PlatformVersion",
    REGION: "Region",
    RESOURCE_TYPE: "ResourceType",
};
export const NodeFilterOperatorType = {
    BEGIN_WITH: "BeginWith",
    EQUAL: "Equal",
    NOT_EQUAL: "NotEqual",
};
export const ManagedStatus = {
    ALL: "All",
    MANAGED: "Managed",
    UNMANAGED: "Unmanaged",
};
export const NodeAggregatorType = {
    COUNT: "Count",
};
export const NodeAttributeName = {
    AGENT_VERSION: "AgentVersion",
    PLATFORM_NAME: "PlatformName",
    PLATFORM_TYPE: "PlatformType",
    PLATFORM_VERSION: "PlatformVersion",
    REGION: "Region",
    RESOURCE_TYPE: "ResourceType",
};
export const NodeTypeName = {
    INSTANCE: "Instance",
};
export const OpsItemEventFilterKey = {
    OPSITEM_ID: "OpsItemId",
};
export const OpsItemEventFilterOperator = {
    EQUAL: "Equal",
};
export const OpsItemRelatedItemsFilterKey = {
    ASSOCIATION_ID: "AssociationId",
    RESOURCE_TYPE: "ResourceType",
    RESOURCE_URI: "ResourceUri",
};
export const OpsItemRelatedItemsFilterOperator = {
    EQUAL: "Equal",
};
export const LastResourceDataSyncStatus = {
    FAILED: "Failed",
    INPROGRESS: "InProgress",
    SUCCESSFUL: "Successful",
};
export const ComplianceUploadType = {
    Complete: "COMPLETE",
    Partial: "PARTIAL",
};
export const SignalType = {
    APPROVE: "Approve",
    REJECT: "Reject",
    RESUME: "Resume",
    REVOKE: "Revoke",
    START_STEP: "StartStep",
    STOP_STEP: "StopStep",
};
export const StopType = {
    CANCEL: "Cancel",
    COMPLETE: "Complete",
};
export const DocumentReviewAction = {
    Approve: "Approve",
    Reject: "Reject",
    SendForReview: "SendForReview",
    UpdateReview: "UpdateReview",
};
