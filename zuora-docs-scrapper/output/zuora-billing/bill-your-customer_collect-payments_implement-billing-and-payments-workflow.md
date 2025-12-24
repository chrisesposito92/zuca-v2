---
title: "Implement Billing and Payments workflow"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/collect-payments/implement-billing-and-payments-workflow"
product: "zuora-billing"
scraped_at: "2025-12-24T18:41:17.510Z"
---

# Implement Billing and Payments workflow

Learn how to implement a billing and payments workflow, including performing and posting bill runs, delivering invoices, and executing payment runs.

Follow these steps to implement a basic billing workflow:

1.  Perform the billing run . Schedule your billing run to complete early in the morning, allowing yourself time to spot-check your invoices. If applicable, confirm that usage was loaded and charges were applied as you expected. See Creating Bill Runs for more information.
2.  Post the bill run . Post the bill run (which will post all invoices contained in the bill run) after you check your invoices to confirm that they are correct. Once you have posted your invoices and sent them to the customer, changes to an invoice can only be made via an adjustment. Therefore, we recommend you check your invoices and make any necessary changes before posting and sending your invoice.
3.  Mail or email your invoices. Download the invoice PDFs to batch print and mail out, or batch email your invoices from the bill run. Alternatively, you can choose to perform this step after performing a payment run. See Invoice Delivery for more information.
4.  Perform the payment run. Execute either an ad hoc or scheduled payment run in the late morning or at a minimum several hours after your bill run completes. This will ensure that you have time to review invoices and subsequently post so that you can collect your electronic auto-pay payments. See Creating Payment Runs for more information.

    Note: Users executing the payment run should follow up on failed payments and retry payments as needed. When this process is complete, you can proceed to mail or email the invoices.
