---
title: "Import the WSDL into Zuora 360+"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/configuration/import-the-wsdl-into-zuora-360"
product: "zuora-platform"
scraped_at: "2025-12-24T18:34:29.800Z"
---

# Import the WSDL into Zuora 360+

Explains how to download and import the Zuora WSDL into Salesforce, ensuring compatibility with Order Builder and Invoice PDFs.

This article describes the process of downloading a copy of Zuora WSDL and uploading it to {{SFDC}}.

The Zuora WSDL is used by Order Builder and Invoice PDFs.

## Download the Zuora WSDL

Before you download the Zuora WSDL, check your permissions and the version of the WSDL:

-   The WSDL you download is tailored to match the permissions of your tenant and user.


If you do not have permission for a feature, it may not be included in the WSDL. So if you have different permissions on the API Sandbox than on the Production environment, for instance, use the site where you have the desired features enabled.

-   Use a current or recent copy of the Zuora WSDL .


Zuora WSDLs are designed to be backward-compatible. When upgrading to the latest Zuora 360+, you should typically use the latest WSDL with it.

Download a copy of the Zuora WSDL as described in The Zuora WSDL . ​​

After you download Zuora WSDL, do not modify the WSDL file before you upload it to Salesforce.

## Clear the Schema Cache

Clearing schema cache removes all of the cached schema information from Salesforce. You must then re-import the Zuora WSDL into Salesforce and redefine any custom fields that you created.
