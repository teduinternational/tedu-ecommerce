IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [AbpAuditLogs] (
    [Id] uniqueidentifier NOT NULL,
    [ApplicationName] nvarchar(96) NULL,
    [UserId] uniqueidentifier NULL,
    [UserName] nvarchar(256) NULL,
    [TenantId] uniqueidentifier NULL,
    [TenantName] nvarchar(64) NULL,
    [ImpersonatorUserId] uniqueidentifier NULL,
    [ImpersonatorUserName] nvarchar(256) NULL,
    [ImpersonatorTenantId] uniqueidentifier NULL,
    [ImpersonatorTenantName] nvarchar(64) NULL,
    [ExecutionTime] datetime2 NOT NULL,
    [ExecutionDuration] int NOT NULL,
    [ClientIpAddress] nvarchar(64) NULL,
    [ClientName] nvarchar(128) NULL,
    [ClientId] nvarchar(64) NULL,
    [CorrelationId] nvarchar(64) NULL,
    [BrowserInfo] nvarchar(512) NULL,
    [HttpMethod] nvarchar(16) NULL,
    [Url] nvarchar(256) NULL,
    [Exceptions] nvarchar(max) NULL,
    [Comments] nvarchar(256) NULL,
    [HttpStatusCode] int NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    CONSTRAINT [PK_AbpAuditLogs] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AbpBackgroundJobs] (
    [Id] uniqueidentifier NOT NULL,
    [JobName] nvarchar(128) NOT NULL,
    [JobArgs] nvarchar(max) NOT NULL,
    [TryCount] smallint NOT NULL DEFAULT CAST(0 AS smallint),
    [CreationTime] datetime2 NOT NULL,
    [NextTryTime] datetime2 NOT NULL,
    [LastTryTime] datetime2 NULL,
    [IsAbandoned] bit NOT NULL DEFAULT CAST(0 AS bit),
    [Priority] tinyint NOT NULL DEFAULT CAST(15 AS tinyint),
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    CONSTRAINT [PK_AbpBackgroundJobs] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AbpClaimTypes] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(256) NOT NULL,
    [Required] bit NOT NULL,
    [IsStatic] bit NOT NULL,
    [Regex] nvarchar(512) NULL,
    [RegexDescription] nvarchar(128) NULL,
    [Description] nvarchar(256) NULL,
    [ValueType] int NOT NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    CONSTRAINT [PK_AbpClaimTypes] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AbpFeatureValues] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(128) NOT NULL,
    [Value] nvarchar(128) NOT NULL,
    [ProviderName] nvarchar(64) NULL,
    [ProviderKey] nvarchar(64) NULL,
    CONSTRAINT [PK_AbpFeatureValues] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AbpLinkUsers] (
    [Id] uniqueidentifier NOT NULL,
    [SourceUserId] uniqueidentifier NOT NULL,
    [SourceTenantId] uniqueidentifier NULL,
    [TargetUserId] uniqueidentifier NOT NULL,
    [TargetTenantId] uniqueidentifier NULL,
    CONSTRAINT [PK_AbpLinkUsers] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AbpOrganizationUnits] (
    [Id] uniqueidentifier NOT NULL,
    [TenantId] uniqueidentifier NULL,
    [ParentId] uniqueidentifier NULL,
    [Code] nvarchar(95) NOT NULL,
    [DisplayName] nvarchar(128) NOT NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    [LastModificationTime] datetime2 NULL,
    [LastModifierId] uniqueidentifier NULL,
    [IsDeleted] bit NOT NULL DEFAULT CAST(0 AS bit),
    [DeleterId] uniqueidentifier NULL,
    [DeletionTime] datetime2 NULL,
    CONSTRAINT [PK_AbpOrganizationUnits] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AbpOrganizationUnits_AbpOrganizationUnits_ParentId] FOREIGN KEY ([ParentId]) REFERENCES [AbpOrganizationUnits] ([Id])
);
GO

CREATE TABLE [AbpPermissionGrants] (
    [Id] uniqueidentifier NOT NULL,
    [TenantId] uniqueidentifier NULL,
    [Name] nvarchar(128) NOT NULL,
    [ProviderName] nvarchar(64) NOT NULL,
    [ProviderKey] nvarchar(64) NOT NULL,
    CONSTRAINT [PK_AbpPermissionGrants] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AbpRoles] (
    [Id] uniqueidentifier NOT NULL,
    [TenantId] uniqueidentifier NULL,
    [Name] nvarchar(256) NOT NULL,
    [NormalizedName] nvarchar(256) NOT NULL,
    [IsDefault] bit NOT NULL,
    [IsStatic] bit NOT NULL,
    [IsPublic] bit NOT NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    CONSTRAINT [PK_AbpRoles] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AbpSecurityLogs] (
    [Id] uniqueidentifier NOT NULL,
    [TenantId] uniqueidentifier NULL,
    [ApplicationName] nvarchar(96) NULL,
    [Identity] nvarchar(96) NULL,
    [Action] nvarchar(96) NULL,
    [UserId] uniqueidentifier NULL,
    [UserName] nvarchar(256) NULL,
    [TenantName] nvarchar(64) NULL,
    [ClientId] nvarchar(64) NULL,
    [CorrelationId] nvarchar(64) NULL,
    [ClientIpAddress] nvarchar(64) NULL,
    [BrowserInfo] nvarchar(512) NULL,
    [CreationTime] datetime2 NOT NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    CONSTRAINT [PK_AbpSecurityLogs] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AbpSettings] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(128) NOT NULL,
    [Value] nvarchar(2048) NOT NULL,
    [ProviderName] nvarchar(64) NULL,
    [ProviderKey] nvarchar(64) NULL,
    CONSTRAINT [PK_AbpSettings] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AbpTenants] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(64) NOT NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    [LastModificationTime] datetime2 NULL,
    [LastModifierId] uniqueidentifier NULL,
    [IsDeleted] bit NOT NULL DEFAULT CAST(0 AS bit),
    [DeleterId] uniqueidentifier NULL,
    [DeletionTime] datetime2 NULL,
    CONSTRAINT [PK_AbpTenants] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AbpUsers] (
    [Id] uniqueidentifier NOT NULL,
    [TenantId] uniqueidentifier NULL,
    [UserName] nvarchar(256) NOT NULL,
    [NormalizedUserName] nvarchar(256) NOT NULL,
    [Name] nvarchar(64) NULL,
    [Surname] nvarchar(64) NULL,
    [Email] nvarchar(256) NOT NULL,
    [NormalizedEmail] nvarchar(256) NOT NULL,
    [EmailConfirmed] bit NOT NULL DEFAULT CAST(0 AS bit),
    [PasswordHash] nvarchar(256) NULL,
    [SecurityStamp] nvarchar(256) NOT NULL,
    [IsExternal] bit NOT NULL DEFAULT CAST(0 AS bit),
    [PhoneNumber] nvarchar(16) NULL,
    [PhoneNumberConfirmed] bit NOT NULL DEFAULT CAST(0 AS bit),
    [IsActive] bit NOT NULL,
    [TwoFactorEnabled] bit NOT NULL DEFAULT CAST(0 AS bit),
    [LockoutEnd] datetimeoffset NULL,
    [LockoutEnabled] bit NOT NULL DEFAULT CAST(0 AS bit),
    [AccessFailedCount] int NOT NULL DEFAULT 0,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    [LastModificationTime] datetime2 NULL,
    [LastModifierId] uniqueidentifier NULL,
    [IsDeleted] bit NOT NULL DEFAULT CAST(0 AS bit),
    [DeleterId] uniqueidentifier NULL,
    [DeletionTime] datetime2 NULL,
    CONSTRAINT [PK_AbpUsers] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [OpenIddictApplications] (
    [Id] uniqueidentifier NOT NULL,
    [ClientId] nvarchar(100) NULL,
    [ClientSecret] nvarchar(max) NULL,
    [ConsentType] nvarchar(50) NULL,
    [DisplayName] nvarchar(max) NULL,
    [DisplayNames] nvarchar(max) NULL,
    [Permissions] nvarchar(max) NULL,
    [PostLogoutRedirectUris] nvarchar(max) NULL,
    [Properties] nvarchar(max) NULL,
    [RedirectUris] nvarchar(max) NULL,
    [Requirements] nvarchar(max) NULL,
    [Type] nvarchar(50) NULL,
    [ClientUri] nvarchar(max) NULL,
    [LogoUri] nvarchar(max) NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    [LastModificationTime] datetime2 NULL,
    [LastModifierId] uniqueidentifier NULL,
    [IsDeleted] bit NOT NULL DEFAULT CAST(0 AS bit),
    [DeleterId] uniqueidentifier NULL,
    [DeletionTime] datetime2 NULL,
    CONSTRAINT [PK_OpenIddictApplications] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [OpenIddictScopes] (
    [Id] uniqueidentifier NOT NULL,
    [Description] nvarchar(max) NULL,
    [Descriptions] nvarchar(max) NULL,
    [DisplayName] nvarchar(max) NULL,
    [DisplayNames] nvarchar(max) NULL,
    [Name] nvarchar(200) NULL,
    [Properties] nvarchar(max) NULL,
    [Resources] nvarchar(max) NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    [LastModificationTime] datetime2 NULL,
    [LastModifierId] uniqueidentifier NULL,
    [IsDeleted] bit NOT NULL DEFAULT CAST(0 AS bit),
    [DeleterId] uniqueidentifier NULL,
    [DeletionTime] datetime2 NULL,
    CONSTRAINT [PK_OpenIddictScopes] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AbpAuditLogActions] (
    [Id] uniqueidentifier NOT NULL,
    [TenantId] uniqueidentifier NULL,
    [AuditLogId] uniqueidentifier NOT NULL,
    [ServiceName] nvarchar(256) NULL,
    [MethodName] nvarchar(128) NULL,
    [Parameters] nvarchar(2000) NULL,
    [ExecutionTime] datetime2 NOT NULL,
    [ExecutionDuration] int NOT NULL,
    [ExtraProperties] nvarchar(max) NULL,
    CONSTRAINT [PK_AbpAuditLogActions] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AbpAuditLogActions_AbpAuditLogs_AuditLogId] FOREIGN KEY ([AuditLogId]) REFERENCES [AbpAuditLogs] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [AbpEntityChanges] (
    [Id] uniqueidentifier NOT NULL,
    [AuditLogId] uniqueidentifier NOT NULL,
    [TenantId] uniqueidentifier NULL,
    [ChangeTime] datetime2 NOT NULL,
    [ChangeType] tinyint NOT NULL,
    [EntityTenantId] uniqueidentifier NULL,
    [EntityId] nvarchar(128) NOT NULL,
    [EntityTypeFullName] nvarchar(128) NOT NULL,
    [ExtraProperties] nvarchar(max) NULL,
    CONSTRAINT [PK_AbpEntityChanges] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AbpEntityChanges_AbpAuditLogs_AuditLogId] FOREIGN KEY ([AuditLogId]) REFERENCES [AbpAuditLogs] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [AbpOrganizationUnitRoles] (
    [RoleId] uniqueidentifier NOT NULL,
    [OrganizationUnitId] uniqueidentifier NOT NULL,
    [TenantId] uniqueidentifier NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    CONSTRAINT [PK_AbpOrganizationUnitRoles] PRIMARY KEY ([OrganizationUnitId], [RoleId]),
    CONSTRAINT [FK_AbpOrganizationUnitRoles_AbpOrganizationUnits_OrganizationUnitId] FOREIGN KEY ([OrganizationUnitId]) REFERENCES [AbpOrganizationUnits] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_AbpOrganizationUnitRoles_AbpRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AbpRoles] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [AbpRoleClaims] (
    [Id] uniqueidentifier NOT NULL,
    [RoleId] uniqueidentifier NOT NULL,
    [TenantId] uniqueidentifier NULL,
    [ClaimType] nvarchar(256) NOT NULL,
    [ClaimValue] nvarchar(1024) NULL,
    CONSTRAINT [PK_AbpRoleClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AbpRoleClaims_AbpRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AbpRoles] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [AbpTenantConnectionStrings] (
    [TenantId] uniqueidentifier NOT NULL,
    [Name] nvarchar(64) NOT NULL,
    [Value] nvarchar(1024) NOT NULL,
    CONSTRAINT [PK_AbpTenantConnectionStrings] PRIMARY KEY ([TenantId], [Name]),
    CONSTRAINT [FK_AbpTenantConnectionStrings_AbpTenants_TenantId] FOREIGN KEY ([TenantId]) REFERENCES [AbpTenants] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [AbpUserClaims] (
    [Id] uniqueidentifier NOT NULL,
    [UserId] uniqueidentifier NOT NULL,
    [TenantId] uniqueidentifier NULL,
    [ClaimType] nvarchar(256) NOT NULL,
    [ClaimValue] nvarchar(1024) NULL,
    CONSTRAINT [PK_AbpUserClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AbpUserClaims_AbpUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AbpUsers] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [AbpUserLogins] (
    [UserId] uniqueidentifier NOT NULL,
    [LoginProvider] nvarchar(64) NOT NULL,
    [TenantId] uniqueidentifier NULL,
    [ProviderKey] nvarchar(196) NOT NULL,
    [ProviderDisplayName] nvarchar(128) NULL,
    CONSTRAINT [PK_AbpUserLogins] PRIMARY KEY ([UserId], [LoginProvider]),
    CONSTRAINT [FK_AbpUserLogins_AbpUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AbpUsers] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [AbpUserOrganizationUnits] (
    [UserId] uniqueidentifier NOT NULL,
    [OrganizationUnitId] uniqueidentifier NOT NULL,
    [TenantId] uniqueidentifier NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    CONSTRAINT [PK_AbpUserOrganizationUnits] PRIMARY KEY ([OrganizationUnitId], [UserId]),
    CONSTRAINT [FK_AbpUserOrganizationUnits_AbpOrganizationUnits_OrganizationUnitId] FOREIGN KEY ([OrganizationUnitId]) REFERENCES [AbpOrganizationUnits] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_AbpUserOrganizationUnits_AbpUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AbpUsers] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [AbpUserRoles] (
    [UserId] uniqueidentifier NOT NULL,
    [RoleId] uniqueidentifier NOT NULL,
    [TenantId] uniqueidentifier NULL,
    CONSTRAINT [PK_AbpUserRoles] PRIMARY KEY ([UserId], [RoleId]),
    CONSTRAINT [FK_AbpUserRoles_AbpRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AbpRoles] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_AbpUserRoles_AbpUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AbpUsers] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [AbpUserTokens] (
    [UserId] uniqueidentifier NOT NULL,
    [LoginProvider] nvarchar(64) NOT NULL,
    [Name] nvarchar(128) NOT NULL,
    [TenantId] uniqueidentifier NULL,
    [Value] nvarchar(max) NULL,
    CONSTRAINT [PK_AbpUserTokens] PRIMARY KEY ([UserId], [LoginProvider], [Name]),
    CONSTRAINT [FK_AbpUserTokens_AbpUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AbpUsers] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [OpenIddictAuthorizations] (
    [Id] uniqueidentifier NOT NULL,
    [ApplicationId] uniqueidentifier NULL,
    [CreationDate] datetime2 NULL,
    [Properties] nvarchar(max) NULL,
    [Scopes] nvarchar(max) NULL,
    [Status] nvarchar(50) NULL,
    [Subject] nvarchar(400) NULL,
    [Type] nvarchar(50) NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    [LastModificationTime] datetime2 NULL,
    [LastModifierId] uniqueidentifier NULL,
    [IsDeleted] bit NOT NULL DEFAULT CAST(0 AS bit),
    [DeleterId] uniqueidentifier NULL,
    [DeletionTime] datetime2 NULL,
    CONSTRAINT [PK_OpenIddictAuthorizations] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_OpenIddictAuthorizations_OpenIddictApplications_ApplicationId] FOREIGN KEY ([ApplicationId]) REFERENCES [OpenIddictApplications] ([Id])
);
GO

CREATE TABLE [AbpEntityPropertyChanges] (
    [Id] uniqueidentifier NOT NULL,
    [TenantId] uniqueidentifier NULL,
    [EntityChangeId] uniqueidentifier NOT NULL,
    [NewValue] nvarchar(512) NULL,
    [OriginalValue] nvarchar(512) NULL,
    [PropertyName] nvarchar(128) NOT NULL,
    [PropertyTypeFullName] nvarchar(64) NOT NULL,
    CONSTRAINT [PK_AbpEntityPropertyChanges] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AbpEntityPropertyChanges_AbpEntityChanges_EntityChangeId] FOREIGN KEY ([EntityChangeId]) REFERENCES [AbpEntityChanges] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [OpenIddictTokens] (
    [Id] uniqueidentifier NOT NULL,
    [ApplicationId] uniqueidentifier NULL,
    [AuthorizationId] uniqueidentifier NULL,
    [CreationDate] datetime2 NULL,
    [ExpirationDate] datetime2 NULL,
    [Payload] nvarchar(max) NULL,
    [Properties] nvarchar(max) NULL,
    [RedemptionDate] datetime2 NULL,
    [ReferenceId] nvarchar(100) NULL,
    [Status] nvarchar(50) NULL,
    [Subject] nvarchar(400) NULL,
    [Type] nvarchar(50) NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    [LastModificationTime] datetime2 NULL,
    [LastModifierId] uniqueidentifier NULL,
    [IsDeleted] bit NOT NULL DEFAULT CAST(0 AS bit),
    [DeleterId] uniqueidentifier NULL,
    [DeletionTime] datetime2 NULL,
    CONSTRAINT [PK_OpenIddictTokens] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_OpenIddictTokens_OpenIddictApplications_ApplicationId] FOREIGN KEY ([ApplicationId]) REFERENCES [OpenIddictApplications] ([Id]),
    CONSTRAINT [FK_OpenIddictTokens_OpenIddictAuthorizations_AuthorizationId] FOREIGN KEY ([AuthorizationId]) REFERENCES [OpenIddictAuthorizations] ([Id])
);
GO

CREATE INDEX [IX_AbpAuditLogActions_AuditLogId] ON [AbpAuditLogActions] ([AuditLogId]);
GO

CREATE INDEX [IX_AbpAuditLogActions_TenantId_ServiceName_MethodName_ExecutionTime] ON [AbpAuditLogActions] ([TenantId], [ServiceName], [MethodName], [ExecutionTime]);
GO

CREATE INDEX [IX_AbpAuditLogs_TenantId_ExecutionTime] ON [AbpAuditLogs] ([TenantId], [ExecutionTime]);
GO

CREATE INDEX [IX_AbpAuditLogs_TenantId_UserId_ExecutionTime] ON [AbpAuditLogs] ([TenantId], [UserId], [ExecutionTime]);
GO

CREATE INDEX [IX_AbpBackgroundJobs_IsAbandoned_NextTryTime] ON [AbpBackgroundJobs] ([IsAbandoned], [NextTryTime]);
GO

CREATE INDEX [IX_AbpEntityChanges_AuditLogId] ON [AbpEntityChanges] ([AuditLogId]);
GO

CREATE INDEX [IX_AbpEntityChanges_TenantId_EntityTypeFullName_EntityId] ON [AbpEntityChanges] ([TenantId], [EntityTypeFullName], [EntityId]);
GO

CREATE INDEX [IX_AbpEntityPropertyChanges_EntityChangeId] ON [AbpEntityPropertyChanges] ([EntityChangeId]);
GO

CREATE UNIQUE INDEX [IX_AbpFeatureValues_Name_ProviderName_ProviderKey] ON [AbpFeatureValues] ([Name], [ProviderName], [ProviderKey]) WHERE [ProviderName] IS NOT NULL AND [ProviderKey] IS NOT NULL;
GO

CREATE UNIQUE INDEX [IX_AbpLinkUsers_SourceUserId_SourceTenantId_TargetUserId_TargetTenantId] ON [AbpLinkUsers] ([SourceUserId], [SourceTenantId], [TargetUserId], [TargetTenantId]) WHERE [SourceTenantId] IS NOT NULL AND [TargetTenantId] IS NOT NULL;
GO

CREATE INDEX [IX_AbpOrganizationUnitRoles_RoleId_OrganizationUnitId] ON [AbpOrganizationUnitRoles] ([RoleId], [OrganizationUnitId]);
GO

CREATE INDEX [IX_AbpOrganizationUnits_Code] ON [AbpOrganizationUnits] ([Code]);
GO

CREATE INDEX [IX_AbpOrganizationUnits_ParentId] ON [AbpOrganizationUnits] ([ParentId]);
GO

CREATE UNIQUE INDEX [IX_AbpPermissionGrants_TenantId_Name_ProviderName_ProviderKey] ON [AbpPermissionGrants] ([TenantId], [Name], [ProviderName], [ProviderKey]) WHERE [TenantId] IS NOT NULL;
GO

CREATE INDEX [IX_AbpRoleClaims_RoleId] ON [AbpRoleClaims] ([RoleId]);
GO

CREATE INDEX [IX_AbpRoles_NormalizedName] ON [AbpRoles] ([NormalizedName]);
GO

CREATE INDEX [IX_AbpSecurityLogs_TenantId_Action] ON [AbpSecurityLogs] ([TenantId], [Action]);
GO

CREATE INDEX [IX_AbpSecurityLogs_TenantId_ApplicationName] ON [AbpSecurityLogs] ([TenantId], [ApplicationName]);
GO

CREATE INDEX [IX_AbpSecurityLogs_TenantId_Identity] ON [AbpSecurityLogs] ([TenantId], [Identity]);
GO

CREATE INDEX [IX_AbpSecurityLogs_TenantId_UserId] ON [AbpSecurityLogs] ([TenantId], [UserId]);
GO

CREATE UNIQUE INDEX [IX_AbpSettings_Name_ProviderName_ProviderKey] ON [AbpSettings] ([Name], [ProviderName], [ProviderKey]) WHERE [ProviderName] IS NOT NULL AND [ProviderKey] IS NOT NULL;
GO

CREATE INDEX [IX_AbpTenants_Name] ON [AbpTenants] ([Name]);
GO

CREATE INDEX [IX_AbpUserClaims_UserId] ON [AbpUserClaims] ([UserId]);
GO

CREATE INDEX [IX_AbpUserLogins_LoginProvider_ProviderKey] ON [AbpUserLogins] ([LoginProvider], [ProviderKey]);
GO

CREATE INDEX [IX_AbpUserOrganizationUnits_UserId_OrganizationUnitId] ON [AbpUserOrganizationUnits] ([UserId], [OrganizationUnitId]);
GO

CREATE INDEX [IX_AbpUserRoles_RoleId_UserId] ON [AbpUserRoles] ([RoleId], [UserId]);
GO

CREATE INDEX [IX_AbpUsers_Email] ON [AbpUsers] ([Email]);
GO

CREATE INDEX [IX_AbpUsers_NormalizedEmail] ON [AbpUsers] ([NormalizedEmail]);
GO

CREATE INDEX [IX_AbpUsers_NormalizedUserName] ON [AbpUsers] ([NormalizedUserName]);
GO

CREATE INDEX [IX_AbpUsers_UserName] ON [AbpUsers] ([UserName]);
GO

CREATE INDEX [IX_OpenIddictApplications_ClientId] ON [OpenIddictApplications] ([ClientId]);
GO

CREATE INDEX [IX_OpenIddictAuthorizations_ApplicationId_Status_Subject_Type] ON [OpenIddictAuthorizations] ([ApplicationId], [Status], [Subject], [Type]);
GO

CREATE INDEX [IX_OpenIddictScopes_Name] ON [OpenIddictScopes] ([Name]);
GO

CREATE INDEX [IX_OpenIddictTokens_ApplicationId_Status_Subject_Type] ON [OpenIddictTokens] ([ApplicationId], [Status], [Subject], [Type]);
GO

CREATE INDEX [IX_OpenIddictTokens_AuthorizationId] ON [OpenIddictTokens] ([AuthorizationId]);
GO

CREATE INDEX [IX_OpenIddictTokens_ReferenceId] ON [OpenIddictTokens] ([ReferenceId]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20221025002001_Initial', N'6.0.5');
GO

COMMIT;
GO

