---
title: "Configure Workday Financials"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-workday-financials/configure-workday-financials"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:34.336Z"
---

# Configure Workday Financials

Learn how to configure Workday Financials.

Before connecting to Workday Financials, you must configure your Workday connection settings.

Configuring Workday Financials involves the following tasks.

Complete the following steps to retrieve the URL containing your host and tenant name:

You will need the URL containing your host and tenant names to configure the Zuora Connector for Workday Financials. In this example the tenant name is "zuora\_dpt".

Complete the following steps to create a journal source for Zuora:

Integration System Users (ISUs) must be created and maintained in the Workday environment. This action allows the connector to work and authenticate.

Complete the following steps to create two ISUs for Zuora:

After creating the ISUs, you should assign the users to a Workday Security Group.

Complete the following steps to create a Workday Security Group and assign your ISU:

You must assign domain security policies after creating a Workday Security Group.

Complete the following steps to assign domain security permissions:

The permissions listed in [Security Permissions for Accounting Journal features](/zuora-platform/integration/integration-hub/zuora-connector-for-workday-financials/configure-workday-financials/security-permissions-for-accounting-journal-features) cover all of the standard Zuora fields.

If a customer requests an extended field from a Zuora-supported Workday data object through data mapping, appropriate permissions must be updated to enable Zuora to access the field.

1.  Log in and access your Workday console.
2.  Type “Public Web Services” in the search bar and press Enter .
3.  Scroll down or click on the applicable filters in the Web Service column to access Financial Management (Public) .
4.  Click the Related Actions ellipse icon next to Financial Management (Public) .
5.  Select Web Service > View WSDL .
6.  Search for the URL containing the host and tenant names in the WSDL file. For example, `<wsdl:service name="Financial_ManagementService">` `<wsdl:port name="Financial_Management" binding="wd-wsdl:Financial_ManagementBinding"> <soapbind:address location="https://wd2-impl-services1.workday.com/ccx/service/zuora_dpt1 /Financial_Management/v44.0"/> </wsdl:port> </wsdl:service>`
