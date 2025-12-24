---
title: "Configure Zuora Connector for Salesforce CPQ"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-cpq/configure-zuora-connector-for-salesforce-cpq"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:50.265Z"
---

# Configure Zuora Connector for Salesforce CPQ

This task guides you through configuring the Zuora Connector for Salesforce CPQ, including installing required packages, setting up connections, and configuring custom fields and settings.

Note:

We do not recommend you install Zuora Connector for Salesforce CPQ and Zuora Quotes in the same org. The configuration has not been certified.

1.  Install the following required packages:

    -   Zuora CPQ 360, Version 5.2+
    -   Salesforce CPQ, Version 214.12.10+
    -   Salesforce CPQ to Zuora Connector

2.  In the Connection Setup tab, set up the connection information to your Zuora tenant.

    Your connection endpoint must include the Zuora WSDL, Version 75 or later. For example, https://zforsf.zuora.com/apps/services/a/75.0

3.  [In Zuora, add the required custom fields](/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-cpq/configure-zuora-connector-for-salesforce-cpq/add-required-custom-fields-in-zuora).
4.  [Configure any additional custom fields you want to synchronize from Salesforce to Zuora](/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-cpq/configure-zuora-connector-for-salesforce-cpq/configure-additional-custom-fields-to-be-synchronized).
5.  In the Schema Setup tab, upload the Zuora WSDL. Include all the correct fields, such as tax fields and custom fields
6.  After uploading the WSDL in Schema Setup, perform the following:
    1.  Select Account and check to see if the TaxExemptCertificateID and TaxExemptStatus fields are included. If not, click Add New Fields and add the two fields.
    2.  Select Product and check to see if the AllowFeatureChanges field is included. If not, click Add New Fields and add the field.
7.  Install the Zuora Connector for Salesforce CPQ package.
8.  [Add any custom accounting codes](/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-cpq/configure-zuora-connector-for-salesforce-cpq/add-custom-accounting-codes).
9.  [Configure the Salesforce CPQ package for Zuora Connector for Salesforce CPQ](/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-cpq/configure-zuora-connector-for-salesforce-cpq/configure-salesforce-cpq-for-connector).
10.  Update the page layout assignments for the following objects:

     -   [Product](/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-cpq/configure-zuora-connector-for-salesforce-cpq/update-product-page-layout-assignment)
     -   [Contract](/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-cpq/configure-zuora-connector-for-salesforce-cpq/update-contract-page-layout-assignment)
     -   [Salesforce CPQ Quote (SBQQ\_\_Quote\_\_c)](/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-cpq/configure-zuora-connector-for-salesforce-cpq/update-salesforce-cpq-quote-page-layout-assignment)

11.  [Add users to the Connector permission sets](/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-cpq/configure-zuora-connector-for-salesforce-cpq/add-users-to-permission-sets).
12.  Configure the Connector settings in the Zuora Connector Settings tab.

     Particularly, if you have the Taxation or the Zuora Finance enabled in your Zuora tenant, you need to select the corresponding setting in the Zuora Connector Settings tab.

13.  Perform a sync of Accounts and Related objects from Zuora.
