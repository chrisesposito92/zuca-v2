---
title: "Synchronize Zuora custom fields"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/work-with-zuora-360/synchronize-zuora-custom-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T18:38:38.308Z"
---

# Synchronize Zuora custom fields

Learn how to synchronize custom fields created in the Zuora application to Salesforce.

Define the corresponding field in Salesforce with the same API name. You must create the field in Salesforce before you can sync Zuora custom field data. You can synchronize custom fields up to 255 characters long. For the picklist type custom fields, each picklist option can be up to 255 characters long.

-   For example: Create a subscription custom field in Salesforce by going to Setup > App Setup > Create > Objects > Subscription > New Custom Fields & Relationships . Create the same custom field as you created in Zuora using the same field attributes, such as picklist, values, API Name.


Zuora 360+ supports fields of String, Date, and Picklist types. Custom fields are synchronized when the Zuora objects are synced to Salesforce.

In the Field Name field, you can enter a value, for example, MyCompanySKU, and Salesforce inserts the required `__c` custom field suffix automatically.

1.  In the Zuora application, navigate to .
2.  Add the custom field on the Salesforce related list by navigating to (where ## is the latest version).
3.  Choose the related list that applies.

    For example, if you are adding a subscription custom field, choose Edit the Related List for Subscriptions, and then add the custom field you created previously.

    The sync process will automatically sync the custom fields to Salesforce. Your Zuora 360+ sync will execute according to your sync settings in Zuora . See [Synchronize Data from Zuora about setting sync options](/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview/synchronize-data-from-zuora-to-salesforce).

4.  If you have configured custom fields but do not see them in Salesforce, update the object that you want to sync as follows:

    1.  Open the object for edit in Zuora.
    2.  Save the object without making changes.

    After you update the object, the custom fields are synced in the next incremental sync. However, if you are updating a large number of records, Zuora recommends that you perform a cleanup sync.

5.  After the sync is completed, refresh the Salesforce account page.

    The custom fields now show the value that came from Zuora.


When an object has already been synced before the custom fields were added in Salesforce, the sync does not complete as expected.

For example:

-   SubscriptionA exists in Zuora. It has custom fields and values. There are no custom fields defined in Salesforce.com.

-   When you run the sync, SubscriptionA syncs to Salesforce without custom fields.

-   Then you add the custom fields in Salesforce and sync again.


In this example, you would not see values for the custom fields because this is an incremental sync and SubscriptionA is not updated. Because of this, SubscriptionA will not sync to Salesforce.
