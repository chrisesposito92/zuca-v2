---
title: "Sync User Requirements"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/installation/set-up-sync-credentials-to-connect-to-salesforce/sync-user-requirements"
product: "zuora-platform"
scraped_at: "2026-02-20T21:14:29.063Z"
---

# Sync User Requirements

Learn the requirements and steps for configuring a sync user in Salesforce to perform 360 Sync operations with Zuora 360+.

Use the Salesforce admin user to perform 360 Sync operations as the sync user requires the read-write access to the objects and fields in Zuora 360+.

If you must use a non-admin user for 360 Sync, grant the sync user:

-   The Visible access to all the fields synchronized from Zuora to Salesforce. See Setting Field-Level Security in Salesforce for setting the field-level access for profiles.

-   The Customize Application System Permission.


To set up sync credentials :

1.  Navigate to Settings > Commerce > Synchronize Salesforce.com Data .
2.  In the Salesforce Credentials section, specify the login information as described below.
