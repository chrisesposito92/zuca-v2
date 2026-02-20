---
title: "Create an event definition"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/events/create-an-event-definition"
product: "zuora-platform"
scraped_at: "2026-02-20T17:48:50.148Z"
---

# Create an event definition

Create and configure event definitions by importing files or manually specifying fields to structure event data.

An event definition is a data schema based on the business process and describes the structure for the event data. You can create an event definition from scratch or import a file and configure the definition.

1.  Click Event Definitions on the Meters home page.
    The list of existing event definitions is displayed.

2.  To import and external event definitions, for example from a .csv file, click Import Definition.
3.  To create an event definition, click Create New.
4.  Enter a name for the definition.
5.  To upload a sample data and use that as a template to derive the event definition, select Use Sample Data and upload the sample data file.
6.  Select Specify Fields to manually specify fields and build the event definition.
7.  For each field, enter the Field Name and select the Field Type.
8.  If this is a required field in the definition, that is the event data must contain data for this field, select the Required check box.
9.  Use \+ Add Field to include all the fields for the event definition.
10.  Under Specify Event Id, select the field that will uniquely identify each event when this event definition is used with an Event Store.

     When an event definition is attached to an Event Store, the selected Event Id field must uniquely identify each event to ensure correct storage and processing. For example, if an event payload includes a field such as `event_uuid` or `transaction_id`, that field can be used as the Event Id. The Event Store treats this value as the primary key and upserts records when multiple events share the same Event Id.

     If the event definition is not attached to an Event Store (for example, used only with a Count Meter), Mediation ignores this setting and does not enforce uniqueness.

11.  Under Specify Event Time, select one of the fields of type DateTime that will be used to indicate the time stamp for for each event.
     If a field is not selected, the ingestion time will be used.

12.  Click Create.
