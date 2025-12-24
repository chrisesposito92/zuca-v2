---
title: "Synchronize a Custom Field"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/work-with-zuora-connector-for-salesforce-crm/synchronize-a-custom-field"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:15.025Z"
---

# Synchronize a Custom Field

This task topic explains how to synchronize custom fields between Zuora and Salesforce CRM, including defining fields and managing sync settings.

Zuora Connector for Salesforce CRM supports fields of String, Date, and Picklist types. Custom fields are synchronized when the Zuora objects are synced to Salesforce.

To synchronize a custom field:

In the Field Name field, you can enter a value, for example, MyCompanySKU, and Salesforce will insert the required `__c` custom field suffix automatically.

1.  In the Zuora application, navigate to Platform > Object Manager in the left navigation menu, and define the custom field as described in Manage Custom Fields .
2.  Define the corresponding field in Salesforce with the same API name. You must create the field in Salesforce before you can sync Zuora custom field data. You can synchronize custom fields up to 255 characters long. For the picklist type custom fields, each picklist option can be up to 255 characters long.

    -   For example: Create a subscription custom field in Salesforce by going to Setup > App Setup > Create > Objects > Subscription > New Custom Fields & Relationships . Create the same custom field as you created in Zuora using the same field attributes, such as picklist, values, API Name.


3.  Add the custom field on the Salesforce related list.

    -   For example, if you are adding a subscription custom field, go to Setup > App Setup > Customize > Accounts > Page Layouts > Account Z-Force 360 Layout v## (latest version) \> Edit the Related List for Subscriptions and add the custom field you created in the prior step.


4.  The sync process will automatically sync the custom fields to Salesforce. Your Zuora Connector for Salesforce CRM will execute according to your sync settings in Zuora . See Synchronize Data from Zuora about setting sync options.
5.  After the sync is completed, refresh the Salesforce account page. The custom fields will now show the value that came from Zuora.

Adding a custom field to Zuora or Salesforce can take up to an hour for the field to be operational.
