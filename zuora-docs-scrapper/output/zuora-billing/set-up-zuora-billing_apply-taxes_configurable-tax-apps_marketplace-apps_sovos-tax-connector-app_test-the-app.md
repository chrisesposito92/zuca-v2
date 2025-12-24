---
title: "Test the app"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/sovos-tax-connector-app/test-the-app"
product: "zuora-billing"
scraped_at: "2025-12-24T05:09:00.725Z"
---

# Test the app

Follow these steps to test the Sovos Tax Connector app, including accessing billing settings, creating test products and subscriptions, defining billing rules, generating invoices, and verifying tax configurations.

After the Sovos Tax Connector app is configured, take the following steps to test the app:

1.  Access the app through Setup Tax Engine and Tax Date under Billing settings.
2.  Create a test product in your product catalog. See Create a Product in Product Catalog for more information on creating a product.
3.  Create a subscription on an account with only the test product. See Create Subscriptions for more information.
4.  Define billing rules. Navigate to in your Zuora tenant.
5.  Create a bill run for the test account and generate an invoice. See Creating Bill Runs for more information.
6.  Post the invoice. If the tax value is displayed on your invoice, your template was configured correctly and can be used for future bill runs. If you don't see any tax displayed on the invoice, troubleshoot and test your configurations using CURL requests. For more information see, System Health for tax log monitoring.
