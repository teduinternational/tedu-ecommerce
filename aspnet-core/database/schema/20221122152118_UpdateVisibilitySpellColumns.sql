BEGIN TRANSACTION;
GO

EXEC sp_rename N'[AppProducts].[Visiblity]', N'Visibility', N'COLUMN';
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20221122152118_UpdateVisibilitySpellColumns', N'6.0.5');
GO

COMMIT;
GO

