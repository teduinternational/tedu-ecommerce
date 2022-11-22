USE [TeduEcommerce]
GO

INSERT INTO [dbo].[AppProductCategories]
           ([Id]
           ,[Name]
           ,[Code]
           ,[Slug]
           ,[SortOrder]
           ,[CoverPicture]
           ,[Visibility]
           ,[IsActive]
           ,[ParentId]
           ,[SeoMetaDescription]
           ,[ExtraProperties]
           ,[ConcurrencyStamp]
           ,[CreationTime]
           ,[CreatorId])
     VALUES
           (newid()
           ,N'Điện thoại'
           ,'C1'
           ,'dien-thoai'
           ,1
           ,null
           ,1
           ,1
           ,null
           ,N'Danh mục điện thoại'
           ,null
           ,null
           ,getdate()
           ,null)
GO

INSERT INTO [dbo].[AppProductCategories]
           ([Id]
           ,[Name]
           ,[Code]
           ,[Slug]
           ,[SortOrder]
           ,[CoverPicture]
           ,[Visibility]
           ,[IsActive]
           ,[ParentId]
           ,[SeoMetaDescription]
           ,[ExtraProperties]
           ,[ConcurrencyStamp]
           ,[CreationTime]
           ,[CreatorId])
     VALUES
           (newid()
           ,N'Laptop'
           ,'C2'
           ,'laptop'
           ,1
           ,null
           ,1
           ,1
           ,null
           ,N'Máy tính xách tay'
           ,null
           ,null
           ,getdate()
           ,null)
GO





