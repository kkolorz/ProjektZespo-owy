using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AplikacjaSpamerska.Migrations
{
    public partial class DateToTimeSpan : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateToSend",
                table: "Emails");

            migrationBuilder.AddColumn<TimeSpan>(
                name: "TimeToSend",
                table: "Emails",
                nullable: false,
                defaultValue: new TimeSpan(0, 0, 0, 0, 0));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TimeToSend",
                table: "Emails");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateToSend",
                table: "Emails",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
