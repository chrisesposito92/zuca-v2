---
title: "Enhanced Invoice Numbering"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/enhanced-invoice-numbering"
product: "zuora-platform"
scraped_at: "2026-02-20T21:10:05.825Z"
---

# Enhanced Invoice Numbering

The Enhanced Invoice Numbering app offers advanced control over invoice numbering rules, allowing customization of prefixes, lengths, and sequences for various business needs. Note: This app is no longer available for purchase, and its features are now part of Zuora Billing.

Note:

The Enhanced Invoice Numbering app is not available for purchase anymore. The information on this page is intended to be used by customers who have purchased the app previously.

The features this app supports are already included in the Zuora Billing product. For more details, see the following articles:

-   [Configure prefix and numbering for billing document](/zuora-billing/set-up-zuora-billing/billing-settings-configuration/billing-document-settings/configuration-of-prefix-and-numbering-for-billing-documents)

-   [Configure file name pattern for billing documents](/zuora-billing/set-up-zuora-billing/billing-settings-configuration/billing-document-settings/configuration-of-file-name-pattern-for-billing-documents)


The Enhanced Invoice Numbering app provides advanced control over invoice numbering rules. With this app, you can use different prefixes, lengths, and numbering sequences for different business units, product lines, or geographic regions.

After some initial configuration, invoices will be generated based on the rules you configure.

Note:

This app works with the [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) feature. However, if Invoice Settlement is used, the format and rules that you configure for invoice numbering will not be applied to debit and credit memos.

## Features

-   Group sequential invoice numbers by entity

-   Ability to number only positive or negative Invoices

-   Ability to customize the custom prefix (e.g. GB-#########) and invoice number length (GB-00000001 vs GB-001) for your invoice numbering

-   Ability to email customers PDFs with updated naming conventions


## Installation

You need to purchase the app in the Zuroa Marketplace before you can install it. The name for the app in the marketplace is "Enhanced Invoice Numbering - Enterprise". See [Purchase an App](/zuora-platform/integration/integration-hub/get-started-with-integration-hub/purchase-an-app-from-the-integration-hub) to learn about how to purchase an app.

Follow the instructions in [Install an App](/zuora-platform/integration/integration-hub/get-started-with-integration-hub/install-an-app-you-purchased-in-zuora) to install the app. If you install the app from Integration Hub, the app name from the dropdown list is Invoice Numbering V2 .

Use the following configuration details for the installation:

-   Name - Any name that you can easily identify later

-   Run Mode - Universal

-   Execution - External

-   Build Name \- Production

-   Target - Authentication details for your Zuora tenant. You must choose a Zuora login that uses basic authentication (username and password). This app does not support OAuth.


## Configuration

The configuration needs to be performed in Zuora and in the app instance. For details, see [Configure Settings for Enhanced Invoice NumberingNo Content found for /db/organizations/zuora/repositories/prod-sitemap/\_\_sandbox/documents/\_MT\_Content\_Migration/Zuora\_Platform/Integration/Integration\_Hub/Enhanced\_Invoice\_Numbering/Configure\_Enhanced\_Invoice\_Numbering/configure\_settings\_in\_the\_app.dita](/db/organizations/zuora/repositories/prod-sitemap/__sandbox/documents/_MT_Content_Migration/Zuora_Platform/Integration/Integration_Hub/Enhanced_Invoice_Numbering/Configure_Enhanced_Invoice_Numbering/configure_settings_in_the_app.dita) .
