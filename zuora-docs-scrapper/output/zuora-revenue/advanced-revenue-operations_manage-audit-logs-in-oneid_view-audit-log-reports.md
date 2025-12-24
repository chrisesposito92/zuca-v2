---
title: "View audit log reports"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/manage-audit-logs-in-oneid/view-audit-log-reports"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:44:10.825Z"
---

# View audit log reports

Learn how to view and export audit log reports using the admin console, including selecting date ranges and understanding event types.

To view an audit log report:

1.  Click Audit Logs from the admin console.
2.  Select the Start Date and End Date .
3.  The Event Types consist of the following information in general.
    1.  Action: Expands to display the action that occurred as part of the event.
    2.  Timestamp: Indicates the date and time at which the event occurred.
    3.  Tenant ID: Tenant ID is not applicable for OneID global Audit events, as all the events are captured at the organizational level.
    4.  Environment: Defaults to GLOBAL as all events are captured at the global OneID level, irrespective of the environments.
    5.  Event Type: This can be either Global Login Events or Global Settings Change Events, depending on whether it's a login event or a settings change event.
    6.  Object Name: Identifies the entity linked to the event, ranging from user accounts to applications or any entity within the OneID system.
    7.  Object Type: Clarifies the nature of the event by specifying the category or classification of the mentioned object.
    8.  Namespace: Denotes the namespace or scope within which the event occurred.
    9.  Username: Identifies the user associated with the event, particularly relevant for actions related to user authentication, access control, and account management.
4.  (Optional): Click Export to access the data you need to export.

Ensure the dates you select are within 180 days from inference. Post 180 days until ten years of history can only be exported once you raise a request from support.
