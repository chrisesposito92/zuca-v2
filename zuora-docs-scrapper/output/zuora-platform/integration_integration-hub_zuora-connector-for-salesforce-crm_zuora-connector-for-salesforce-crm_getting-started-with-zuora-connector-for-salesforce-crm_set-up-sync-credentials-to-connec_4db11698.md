---
title: "Sync user requirements"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/getting-started-with-zuora-connector-for-salesforce-crm/set-up-sync-credentials-to-connect-to-salesforce/sync-user-requirements"
product: "zuora-platform"
scraped_at: "2025-12-24T08:30:07.507Z"
---

# Sync user requirements

Guide to configuring sync operations in Zuora Connector for Salesforce CRM, including user permissions and setup steps.

Use the Salesforce admin user to perform Sync operations as the sync user requires the read-write access to the objects and fields in Zuora Connector for Salesforce CRM.

If you must use a non-admin user for Zuora Salesforce Connector, grant the sync user:

-   The Visible access to all the fields synchronized from Zuora to Salesforce. See Setting Field-Level Security in Salesforce for setting the field-level access for profiles.

-   The Customize Application System Permission.


To set up sync credentials :

1.  Navigate to .
2.  In the Salesforce Credentials section, specify the login information as mentioned in the next sections.
