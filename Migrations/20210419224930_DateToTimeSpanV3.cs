using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AplikacjaSpamerska.Migrations
{
    public partial class DateToTimeSpanV3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "TimeToSend",
                table: "Emails",
                rowVersion: true,
                nullable: true,
                oldClrType: typeof(TimeSpan));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<TimeSpan>(
                name: "TimeToSend",
                table: "Emails",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldRowVersion: true,
                oldNullable: true);
        }
    }
}
