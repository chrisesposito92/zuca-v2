---
title: "Process large billing documents"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/avalara-avatax-for-communications-app/configure-tax-engine-settings-for-communications-app/process-large-billing-documents"
product: "zuora-billing"
scraped_at: "2026-02-19T03:10:21.334Z"
---

# Process large billing documents

Learn how to process large billing documents with Avalara AvaTax for Communications, supporting up to 15,000 taxable line items per invoice.

Zuora's Avalara AvaTax for Communications app can support a maximum of 15,000 taxable line items in a single invoice, credit memo, or debit memo.

To process a large billing document in a single tax calculation request:

1.  Go to ENGINE SETTINGS > Click Edit icon > System Configuration tab.
2.  In the NETREAD TIMEOUT(SECONDS) field, increase the timeout seconds up to 600. (Default is 60.)
3.  Click UPDATE to save the change.

    On the tax vendor side, the Avalara AvaTax for Communications can support a maximum of 10,000 taxable line items in a single tax call. If you have confirmed with the tax vendor that a higher number of items can be processed in a timely manner (within 120 seconds), submit a request at [Zuora Global Support](https://support.zuora.com/) and ask to test a higher limit.

    Note:

    We suggest that you post invoices and calculate tax via bill runs, as the asynchronous operations are not limited by the designated network timeout in Zuora Billing. If you use Zuora UI or synchronous API calls, it is better to check the result back in about 5 to 10 minutes, depending on the size of the invoice.
