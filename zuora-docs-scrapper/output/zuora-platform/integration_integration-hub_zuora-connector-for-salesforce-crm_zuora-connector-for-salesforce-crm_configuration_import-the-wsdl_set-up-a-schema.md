---
title: "Set up a schema"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/configuration/import-the-wsdl/set-up-a-schema"
product: "zuora-platform"
scraped_at: "2025-12-24T08:32:13.872Z"
---

# Set up a schema

Learn how to import the Zuora WSDL into Salesforce using the zSchema Setup page, and manage custom fields and schema cache.

Use the zSchema Setup configuration page to import the WSDL into Salesforce.

The imported Zuora WSDL is to be used by Zuora CPQ Order Builder and viewing or downloading Invoice PDFs.

You can perform the following actions on the zSchema Setup page:

-   Import the Zuora WSDL that includes the objects and fields that you want to use into Salesforce.

-   Create custom fields in the cached schema to match any custom fields created in Zuora.

-   Edit or delete custom fields.

-   Clear the Schema cache.


![ZSchemaSetup.png](/db/organizations/zuora/repositories/prod-sitemap/__sandbox/documents/_MT_Content_Migration/Zuora_Platform/Integration/Integration_Hub/Zuora_360__and_Zuora_360/C_Configuring_Z-Force_360_plus/G_Setting_Up_the_WSDL_Schema/ZSchemaSetup.png)

To upload Zuora WSDL to Salesforce:

1.  In Salesforce, click the + tab and then click Schema Setup .
2.  On the zSchema Setup page, click Clear Schema Cache . You must clear cache before uploading a new WSDL file.
3.  Click Choose File , and select the WSDL file.
4.  Click Upload .

    Once you have imported the Zuora WSDL file into Salesforce, select any of the available objects to inspect it.

    You may need to modify your code if field definitions change in the new WSDL file uploaded.

    In your code, such as in Order Builder, you need to set the values to an API field according to the field type definition in the fields table. Otherwise the values will not be set. For example, for `fieldsToNull`, you need to set the value as a String array as below:

    zObject.setValue('fieldsToNull', new String\[\]{'TestField'});

5.  To add a new custom field:
    1.  In the Zuora Objects section, click the arrow for Zuora Objects field, and select the object to which you want to add a field.
    2.  Click Add New Field to define new custom fields. You can edit or delete any custom field.
    3.  Enter the information for the new field, and click Add.
6.  To edit or delete a custom field:
    1.  In the Zuora Objects section, click the arrow for Zuora Objects field, and select the object to which you want to edit.
    2.  For a field with the Is Zuora Custom Field field checked, click Edit or Delete to make changes.

        Note:

        You cannot undo the Delete operation.
