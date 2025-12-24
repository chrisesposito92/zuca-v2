---
title: "Enhanced Audit Trail for Zuora Protect"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-protect/enhanced-audit-trail-for-zuora-protect"
product: "zuora-platform"
scraped_at: "2025-12-24T05:08:48.144Z"
---

# Enhanced Audit Trail for Zuora Protect

The Enhanced Audit Trail in Zuora Protect extends the OneID Audit Trail feature, capturing and logging activities such as user logins, data modifications, and system configuration changes within a billing tenant.

The Enhanced Audit Trail in Zuora Protect is an extension of the [OneID Audit Trail](https://knowledgecenter.zuora.com/Zuora_Platform/User_Management/Zuora_OneID/13_Manage_audit_logs_in_OneID) feature. It captures and logs various activities performed within a billing tenant, including user login events, data modifications to user profiles and settings, and system configuration changes.

Each recorded event provides information such as the tenant ID, the event type, the action performed, the user who initiated/performed the action, the date and time of the event, the affected field or data, and the affected object name and type.

Audit Logs in Zuora Protect are completely UI-based and do not require any code to query the data. OneID Admins can view and download Zuora Protect audit logs. The data retention period for these Audit logs is over 10 years. However, using the UI, you can generate logs for a maximum of 180 days. For audit logs older than 180 days, contact our support team at [support@zuora.com](mailto:support@zuora.com).

The following events support auditing changes in Zuora Protect:

-   Audit Login Events: Records every login for each user and allows you to monitor the login history for each user in a selected billing tenant.

-   Audit Settings Events: Records every configuration change and user management change, including group change or direct tenant access change, etc., in a selected billing tenant.

-   Audit Object Change Events: Records all the transaction changes, including all Update, Create, and Delete actions, that have taken place within the selected billing tenant.


Additionally, the Enhanced Audit Trail also supports auditing changes in OneID, including OneID Login Events and OneID Settings Events. See [Manage Audit logs in OneID](https://knowledgecenter.zuora.com/Zuora_Platform/User_Management/Zuora_OneID/13_Manage_audit_logs_in_OneID) for more information.
