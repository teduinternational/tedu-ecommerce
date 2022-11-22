BEGIN TRANSACTION;
GO

CREATE TABLE [AppInventories] (
    [Id] uniqueidentifier NOT NULL,
    [ProductId] uniqueidentifier NOT NULL,
    [SKU] varchar(50) NOT NULL,
    [StockQuantity] int NOT NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    [LastModificationTime] datetime2 NULL,
    [LastModifierId] uniqueidentifier NULL,
    CONSTRAINT [PK_AppInventories] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppInventoryTicketItems] (
    [Id] uniqueidentifier NOT NULL,
    [TicketId] uniqueidentifier NOT NULL,
    [ProductId] uniqueidentifier NOT NULL,
    [SKU] varchar(50) NOT NULL,
    [Quantity] int NOT NULL,
    [BatchNumber] varchar(50) NULL,
    [ExpiredDate] datetime2 NULL,
    CONSTRAINT [PK_AppInventoryTicketItems] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppInventoryTickets] (
    [Id] uniqueidentifier NOT NULL,
    [Code] varchar(50) NOT NULL,
    [TicketType] int NOT NULL,
    [IsApproved] bit NOT NULL,
    [ApproverId] uniqueidentifier NULL,
    [ApprovedDate] datetime2 NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    [LastModificationTime] datetime2 NULL,
    [LastModifierId] uniqueidentifier NULL,
    CONSTRAINT [PK_AppInventoryTickets] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppManufacturers] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(50) NOT NULL,
    [Code] varchar(50) NOT NULL,
    [Slug] varchar(50) NOT NULL,
    [CoverPicture] nvarchar(250) NULL,
    [Visibility] bit NOT NULL,
    [IsActive] bit NOT NULL,
    [Country] nvarchar(max) NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    CONSTRAINT [PK_AppManufacturers] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppOrderItems] (
    [OrderId] uniqueidentifier NOT NULL,
    [ProductId] uniqueidentifier NOT NULL,
    [SKU] varchar(50) NOT NULL,
    [Quantity] int NOT NULL,
    [Price] float NOT NULL,
    CONSTRAINT [PK_AppOrderItems] PRIMARY KEY ([ProductId], [OrderId])
);
GO

CREATE TABLE [AppOrders] (
    [Id] uniqueidentifier NOT NULL,
    [Code] varchar(50) NOT NULL,
    [Status] int NOT NULL,
    [PaymentMethod] int NOT NULL,
    [ShippingFee] float NOT NULL,
    [Tax] float NOT NULL,
    [Total] float NOT NULL,
    [Subtotal] float NOT NULL,
    [Discount] float NOT NULL,
    [GrandTotal] float NOT NULL,
    [CustomerName] nvarchar(50) NOT NULL,
    [CustomerPhoneNumber] nvarchar(50) NOT NULL,
    [CustomerAddress] nvarchar(250) NOT NULL,
    [CustomerUserId] uniqueidentifier NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    [LastModificationTime] datetime2 NULL,
    [LastModifierId] uniqueidentifier NULL,
    [IsDeleted] bit NOT NULL DEFAULT CAST(0 AS bit),
    [DeleterId] uniqueidentifier NULL,
    [DeletionTime] datetime2 NULL,
    CONSTRAINT [PK_AppOrders] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppOrderTransactions] (
    [Id] uniqueidentifier NOT NULL,
    [Code] varchar(50) NOT NULL,
    [OrderId] uniqueidentifier NOT NULL,
    [UserId] uniqueidentifier NULL,
    [TransactionType] int NOT NULL,
    [Note] nvarchar(max) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    CONSTRAINT [PK_AppOrderTransactions] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppProductAttributeDateTimes] (
    [Id] uniqueidentifier NOT NULL,
    [AttributeId] uniqueidentifier NOT NULL,
    [ProductId] uniqueidentifier NOT NULL,
    [Value] datetime2 NULL,
    CONSTRAINT [PK_AppProductAttributeDateTimes] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppProductAttributeDecimals] (
    [Id] uniqueidentifier NOT NULL,
    [AttributeId] uniqueidentifier NOT NULL,
    [ProductId] uniqueidentifier NOT NULL,
    [Value] decimal(18,2) NULL,
    CONSTRAINT [PK_AppProductAttributeDecimals] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppProductAttributeInts] (
    [Id] uniqueidentifier NOT NULL,
    [AttributeId] uniqueidentifier NOT NULL,
    [ProductId] uniqueidentifier NOT NULL,
    [Value] int NULL,
    CONSTRAINT [PK_AppProductAttributeInts] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppProductAttributes] (
    [Id] uniqueidentifier NOT NULL,
    [Code] varchar(50) NOT NULL,
    [DataType] int NOT NULL,
    [Label] nvarchar(50) NOT NULL,
    [SortOrder] int NOT NULL,
    [Visibility] bit NOT NULL,
    [IsActive] bit NOT NULL,
    [IsRequired] bit NOT NULL,
    [IsUnique] bit NOT NULL,
    [Note] nvarchar(max) NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    CONSTRAINT [PK_AppProductAttributes] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppProductAttributeTexts] (
    [Id] uniqueidentifier NOT NULL,
    [AttributeId] uniqueidentifier NOT NULL,
    [ProductId] uniqueidentifier NOT NULL,
    [Value] nvarchar(max) NULL,
    CONSTRAINT [PK_AppProductAttributeTexts] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppProductAttributeVarchars] (
    [Id] uniqueidentifier NOT NULL,
    [AttributeId] uniqueidentifier NOT NULL,
    [ProductId] uniqueidentifier NOT NULL,
    [Value] nvarchar(500) NULL,
    CONSTRAINT [PK_AppProductAttributeVarchars] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppProductCategories] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(50) NOT NULL,
    [Code] varchar(50) NOT NULL,
    [Slug] varchar(50) NOT NULL,
    [SortOrder] int NOT NULL,
    [CoverPicture] nvarchar(250) NULL,
    [Visibility] bit NOT NULL,
    [IsActive] bit NOT NULL,
    [ParentId] uniqueidentifier NULL,
    [SeoMetaDescription] nvarchar(250) NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    CONSTRAINT [PK_AppProductCategories] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppProductLinks] (
    [ProductId] uniqueidentifier NOT NULL,
    [LinkedProductId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_AppProductLinks] PRIMARY KEY ([ProductId], [LinkedProductId])
);
GO

CREATE TABLE [AppProductReviews] (
    [Id] uniqueidentifier NOT NULL,
    [ProductId] uniqueidentifier NOT NULL,
    [ParentId] uniqueidentifier NULL,
    [Title] nvarchar(250) NOT NULL,
    [Rating] float NOT NULL,
    [PublishedDate] datetime2 NULL,
    [Content] nvarchar(max) NULL,
    [OrderId] uniqueidentifier NOT NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    CONSTRAINT [PK_AppProductReviews] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppProducts] (
    [Id] uniqueidentifier NOT NULL,
    [ManufacturerId] uniqueidentifier NOT NULL,
    [Name] nvarchar(50) NOT NULL,
    [Code] varchar(50) NOT NULL,
    [Slug] varchar(50) NOT NULL,
    [ProductType] int NOT NULL,
    [SKU] varchar(50) NOT NULL,
    [SortOrder] int NOT NULL,
    [Visiblity] bit NOT NULL,
    [IsActive] bit NOT NULL,
    [CategoryId] uniqueidentifier NOT NULL,
    [SeoMetaDescription] nvarchar(250) NULL,
    [Description] nvarchar(max) NULL,
    [ThumbnailPicture] nvarchar(250) NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    [LastModificationTime] datetime2 NULL,
    [LastModifierId] uniqueidentifier NULL,
    CONSTRAINT [PK_AppProducts] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppProductTags] (
    [ProductId] uniqueidentifier NOT NULL,
    [TagId] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_AppProductTags] PRIMARY KEY ([ProductId], [TagId])
);
GO

CREATE TABLE [AppPromotionCategories] (
    [Id] uniqueidentifier NOT NULL,
    [CategoryId] uniqueidentifier NOT NULL,
    [PromotionId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_AppPromotionCategories] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppPromotionManufacturers] (
    [Id] uniqueidentifier NOT NULL,
    [ManufactureId] uniqueidentifier NOT NULL,
    [PromotionId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_AppPromotionManufacturers] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppPromotionProducts] (
    [Id] uniqueidentifier NOT NULL,
    [ProductId] uniqueidentifier NOT NULL,
    [PromotionId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_AppPromotionProducts] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppPromotions] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(50) NOT NULL,
    [CouponCode] varchar(50) NOT NULL,
    [RequireUseCouponCode] bit NOT NULL,
    [ValidDate] datetime2 NOT NULL,
    [ExpiredDate] datetime2 NULL,
    [DiscountAmount] float NOT NULL,
    [DiscountUnit] int NOT NULL,
    [LimitedUsageTimes] bit NOT NULL,
    [MaximumDiscountAmount] bigint NOT NULL,
    [IsActive] bit NOT NULL,
    [ExtraProperties] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(40) NULL,
    [CreationTime] datetime2 NOT NULL,
    [CreatorId] uniqueidentifier NULL,
    [LastModificationTime] datetime2 NULL,
    [LastModifierId] uniqueidentifier NULL,
    CONSTRAINT [PK_AppPromotions] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppPromotionUsageHistories] (
    [Id] uniqueidentifier NOT NULL,
    [PromotionId] uniqueidentifier NOT NULL,
    [OrderId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_AppPromotionUsageHistories] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppTags] (
    [Id] nvarchar(50) NOT NULL,
    [Name] nvarchar(50) NOT NULL,
    CONSTRAINT [PK_AppTags] PRIMARY KEY ([Id])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20221103003708_CreateBussinessEntities', N'6.0.5');
GO

COMMIT;
GO

