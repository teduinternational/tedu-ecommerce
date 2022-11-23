BEGIN TRANSACTION;
GO

EXEC sp_rename N'[AppProducts].[CreategorySlug]', N'CategorySlug', N'COLUMN';
GO

EXEC sp_rename N'[AppProducts].[CreategoryName]', N'CategoryName', N'COLUMN';
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20221123005716_RenameInvalidColumnProduct', N'6.0.5');
GO

COMMIT;
GO

