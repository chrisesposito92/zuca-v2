---
title: "Considerations when editing custom fields"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/custom-fields-in-soap-objects/considerations-when-editing-custom-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:50.669Z"
---

# Considerations when editing custom fields

Use this reference to understand considerations when editing custom fields.

You can use the Zuora user interface to modify custom field definitions. See [Manage custom fields](/zuora-platform/extensibility/object-manager/schema-visualizer/schema-visualizer-tutorials/custom-field-management/update-a-custom-field) for more information.

If you modify a custom field definition, you must make the corresponding change to your WSDL and your integration client. Changing the custom field definition can break existing clients if you do not make the corresponding offline change in your integration client.

Keep track of your custom fields so that you can verify your custom fields after updating your WSDL.

The following example describes some of the considerations to keep in mind while editing and deploying custom fields.

In the first example, Company A created a custom text field for the [Account object](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/account) with the following attributes:

-   Field label: `CF_Name`

-   API Name: `CF_Name__c`

-   Length: `200`


Company A can then edit their WSDL to include the custom field `CF_Name__c` as one of the API fields of the Account object, and write business logic in their integration client (their own web site or a similar client) to collect information from their end-user for `CF_Name__c` and issue an API call to Zuora.

If Company A then changes the API Name to `CF_Nick_Name__c` without informing their customers, the existing customer clients will continue to send the name `CF_Name__c` to Zuora, rather than the updated name. In this case, the old name will not be recognized and will cause an error.

Similarly, if Company A changes the field length from `200` to `10` without notifying their customers, a client that sends the value "Jennifer Smith" as `CF_Name__c` to Zuora in the create call will receive an "Invalid\_value" error.
