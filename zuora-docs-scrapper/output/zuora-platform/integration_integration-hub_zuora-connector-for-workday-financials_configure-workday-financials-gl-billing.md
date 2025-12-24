---
title: "Configure Workday Financials GL (Billing)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-workday-financials/configure-workday-financials-gl-billing"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:57.518Z"
---

# Configure Workday Financials GL (Billing)

Provides a step-by-step guide to configuring Workday Financials GL (Billing), including authentication, field mapping, and initiating a dry run.

Configuring Workday Financials GL (Billing) involves the following tasks.

Complete the following steps to authenticate your Zuora and Workday environments:

After successful authentication, you can optionally extend the default field mappings between the source and the target fields. The source fields provide a list of fields from the Zuora journal entry, journal entry item, and accounting code objects. The target fields provide a list of fields from the Workday Standard Journal object.

Complete the following steps to map the fields:

By default, the connector posts and submits journals in Workday and does not create journals in draft mode. If you want to manually approve journal postings, you will need to create a constant with the value 'False' and map it to the Auto\_Complete target field.

Complete the following steps to specify constants:

Complete the following steps to create value mappings:

If you have a source field that may contain a null value, you may specify a default value to use instead. To configure default values to be used when a source field is null, complete the following steps:

If you have configured one or more custom fields in SAP, you may create field mappings for them by manually entering their names. To specify custom target fields, complete the following steps:

Use the dot operator to specify the custom field. For example, JournalEntries.{custom\_field\_name}.

Before attempting your first transfer to the accounting operation, you can initiate a dry run to verify if your settings and field mappings are configured as required. This process executes the field mappings and generates output for any journal entries for any journal runs awaiting transfer to accounting. This operation can result in more than one dry run job.

Complete the following steps to initiate a dry run:

1.  Navigate to Marketplace > Integration Hub .
2.  Search and select Workday Financials GL (Billing) .
3.  Click Settings .
4.  Enter appropriate values for the following fields in the Workday Connection Details section.

    -   Get Username: ISU\_Zuora\_Get@{tenant name}; For example, ISU\_Zuora\_Get@zuora\_dpt1

    -   Get Password

    -   Put Username: ISU\_Zuora\_Put@{tenant name}; For example, ISU\_Zuora\_Put@zuora\_dpt1

    -   Put Password

    -   Workday Environment URL


5.  Enter the Client ID and Client Secret for the Zuora client in the Zuora Connection Details section. For more information on how to generate Client ID and Client Secret, see Create an OAuth Client for a User .
6.  Click Test Connection to validate your authentication details.
7.  Click Save .
8.  Navigate to Marketplace > Integration Hub .
9.  Search and select Workday Financials GL (Billing) .
10.  Click Field Mapping .
11.  Click the Edit Mappings button.
12.  Click the + icon.
13.  Choose the applicable source field and map it to the corresponding target field of the Workday journal. You can map both standard and custom fields from source to target, such as work tags, cost centers, or custom work tags.
14.  Click the Refresh icon to dynamically refresh the list of fields in the source and target menus upon any field changes in the Zuora or Workday journal object.
15.  Navigate to Marketplace > Integration Hub .
16.  Search and select Workday for Billing.
17.  Click Field Mapping .
18.  Click the Edit Mappings button.
19.  Click the Open the Expressions Wizard icon.
20.  In the Expressions Wizard, select Constant .
21.  Enter a constant value.
22.  Click the Submit button.
23.  Click Save Mappings .
24.  Click Field Mapping .
25.  Click the Edit Mappings button.
26.  Click the Open the Expressions Wizard icon.
27.  In the Expressions Wizard, select Value Mapping .
28.  In the Expressions Wizard, select a source field and create your value mapping.
29.  Click the Submit button.
30.  Click Save Mappings .
31.  Click Field Mapping .
32.  Click the Edit Mappings button.
33.  Enter a default value in the Enter Default Value field.
34.  Click Save Mappings .
35.  Click Field Mapping .
36.  Click the Edit Mappings button.
37.  Enter the name of the target custom field.
38.  Specify a source field or a constant.
39.  Click Save Mappings .
40.  Click Field Mapping .
41.  Click the Initiate a Dry Run button.
42.  Click the Jobs tab.
43.  Click the View button for the Dry Run job, or jobs, you have created.
