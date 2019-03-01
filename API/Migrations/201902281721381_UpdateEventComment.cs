namespace API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateEventComment : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Event", "Longitude", c => c.Double(nullable: false));
            AddColumn("dbo.Event", "Latitude", c => c.Double(nullable: false));
            AddColumn("dbo.Event", "ImageURL", c => c.String());
            AddColumn("dbo.Account", "Bday", c => c.String());
            AddColumn("dbo.Account", "Avatar", c => c.String());
            AddColumn("dbo.EventVolunteer", "Checked", c => c.Boolean());
            AddColumn("dbo.Organization", "Avatar", c => c.String());
            AddColumn("dbo.Organization", "Background", c => c.String());
            AddColumn("dbo.Organization", "Longitude", c => c.Double());
            AddColumn("dbo.Organization", "Latitude", c => c.Double());
            AlterColumn("dbo.Activity", "Status", c => c.Boolean());
            AlterColumn("dbo.EventVolunteer", "Status", c => c.Boolean());
            DropColumn("dbo.Event", "Location");
            DropColumn("dbo.Event", "TimeCreated");
            DropColumn("dbo.EventVolunteer", "TimeCreated");
            DropColumn("dbo.NewsComment", "TimeCreated");
            DropColumn("dbo.News", "TimeCreated");
            DropColumn("dbo.OrganizationMember", "TimeCreated");
            DropColumn("dbo.Organization", "TimeCreate");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Organization", "TimeCreate", c => c.DateTime());
            AddColumn("dbo.OrganizationMember", "TimeCreated", c => c.DateTime());
            AddColumn("dbo.News", "TimeCreated", c => c.DateTime());
            AddColumn("dbo.NewsComment", "TimeCreated", c => c.DateTime());
            AddColumn("dbo.EventVolunteer", "TimeCreated", c => c.DateTime());
            AddColumn("dbo.Event", "TimeCreated", c => c.DateTime());
            AddColumn("dbo.Event", "Location", c => c.String());
            AlterColumn("dbo.EventVolunteer", "Status", c => c.String(maxLength: 10, fixedLength: true));
            AlterColumn("dbo.Activity", "Status", c => c.String(maxLength: 10, fixedLength: true));
            DropColumn("dbo.Organization", "Latitude");
            DropColumn("dbo.Organization", "Longitude");
            DropColumn("dbo.Organization", "Background");
            DropColumn("dbo.Organization", "Avatar");
            DropColumn("dbo.EventVolunteer", "Checked");
            DropColumn("dbo.Account", "Avatar");
            DropColumn("dbo.Account", "Bday");
            DropColumn("dbo.Event", "ImageURL");
            DropColumn("dbo.Event", "Latitude");
            DropColumn("dbo.Event", "Longitude");
        }
    }
}
