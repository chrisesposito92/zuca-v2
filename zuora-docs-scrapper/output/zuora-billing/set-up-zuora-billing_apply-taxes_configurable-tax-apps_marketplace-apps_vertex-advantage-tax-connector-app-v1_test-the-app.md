---
title: "Test the app"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/vertex-advantage-tax-connector-app-v1/test-the-app"
product: "zuora-billing"
scraped_at: "2025-12-24T05:09:28.116Z"
---

# Test the app

Learn how to test the Vertex Advantage Tax Connector app by configuring settings, creating test accounts and products, and verifying tax calculations on invoices.

After the Vertex Advantage Tax Connector app is configured, perform the following steps to test the app:

1.  Access the app through Setup Tax Engine and Tax Date under Billing settings.
2.  Create a test Customer Account. Fill in the required evidence custom fields:

    1.  For example, if the customer is from the U.S: Taxamo billing country code = US
    2.  For example, if the business is from Ireland:

        -   Taxamo\_buyer\_ip = 127.0.0.1

        -   Taxamo billing country code = IE

        -   Taxamo buyer tax number = IE3184089FH


3.  Create a test product in your product catalog. See Create a Product in Product Catalog for more information on creating a product.
4.  Create a subscription on an account with only the test product. See Create Subscriptions for more information.
5.  Define billing rules. Navigate to in your Zuora tenant.
6.  Create a bill run for the test account and generate an invoice. See Creating Bill Runs for more information.
7.  Post the invoice. If the tax value is displayed on your invoice, your template was configured correctly and can be used for future bill runs. If you don't see any tax displayed on the invoice, troubleshoot and test your configurations using CURL requests. For more information see, System Health for tax log monitoring.
