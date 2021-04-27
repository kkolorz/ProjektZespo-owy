using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AplikacjaSpamerska.Migrations
{
    public partial class TimeEdited : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TimeToSend",
                table: "Emails");

            migrationBuilder.AddColumn<int>(
                name: "HourToSend",
                table: "Emails",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MinuteToSend",
                table: "Emails",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HourToSend",
                table: "Emails");

            migrationBuilder.DropColumn(
                name: "MinuteToSend",
                table: "Emails");

            migrationBuilder.AddColumn<DateTime>(
                name: "TimeToSend",
                table: "Emails",
                type: "TIMESTAMP",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
