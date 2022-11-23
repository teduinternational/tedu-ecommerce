using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TeduEcommerce.Migrations
{
    public partial class UpdateVisibilitySpellColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Visiblity",
                table: "AppProducts",
                newName: "Visibility");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Visibility",
                table: "AppProducts",
                newName: "Visiblity");
        }
    }
}
