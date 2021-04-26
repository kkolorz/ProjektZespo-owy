using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AplikacjaSpamerska.Migrations
{
    public partial class DateToTimeSpanV4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "TimeToSend",
                table: "Emails",
                type: "TIMESTAMP",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "TimeToSend",
                table: "Emails",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "TIMESTAMP");
        }
    }
}
