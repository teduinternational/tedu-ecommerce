using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TeduEcommerce.Migrations
{
    public partial class AddCategoryFieldInProduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CreategoryName",
                table: "AppProducts",
                type: "nvarchar(250)",
                maxLength: 250,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CreategorySlug",
                table: "AppProducts",
                type: "nvarchar(250)",
                maxLength: 250,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreategoryName",
                table: "AppProducts");

            migrationBuilder.DropColumn(
                name: "CreategorySlug",
                table: "AppProducts");
        }
    }
}
