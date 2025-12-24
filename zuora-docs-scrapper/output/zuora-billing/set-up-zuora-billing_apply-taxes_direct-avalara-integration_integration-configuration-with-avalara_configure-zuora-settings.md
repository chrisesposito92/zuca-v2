---
title: "Configure Zuora settings"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/direct-avalara-integration/integration-configuration-with-avalara/configure-zuora-settings"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:21.603Z"
---

# Configure Zuora settings

This task topic explains how to configure Zuora settings to integrate with Avalara, including setting up connections, configuring tax codes, and managing tenant profiles.

At a high level, configuring Zuora to work with Avalara involves the following steps:

1.  Set up Connection to Avalara : Add Avalara as a tax engine in your tenant, and set up the connection.
2.  Configure Avalara Tax Codes in Zuora Billing : Create tax codes in Zuora and associate them with your tax codes in Avalara.
3.  Associate Tax Codes to Product Charges : Set the Taxable flag on the charge in order for it to display the Tax Codes. Choose the applicable Tax Code to use for that product.
4.  Configure your Tenant Profile and Permissions : Set your origin address in Zuora and verify this address for compatibility in Avalara. Add Company Codes and additional origin addresses. Disable the Cancel Posted Invoice permission.
5.  Create Tax Exemptions : Specify whether each customer account is tax exempt or not tax exempt.
