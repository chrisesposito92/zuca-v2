---
title: "Workflow with auto-post and auto-email"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/collect-payments/implement-billing-and-payments-workflow/workflow-with-auto-post-and-auto-email"
product: "zuora-billing"
scraped_at: "2025-12-24T18:41:22.622Z"
---

# Workflow with auto-post and auto-email

Outlines the workflow for billing and payment runs when auto-post and auto-email options are enabled, detailing the scheduling and execution process.

Your workflow will be different if you have enabled the auto-post and auto-email invoice options:

1.  Billing Run with Auto-Post and Auto-Email Selected

    -   Schedule your billing run with the auto-post and auto-email selected.
    -   Once the bill run completes, it will automatically be posted (all invoices contained in the bill run will also be posted), and invoices will be emailed to customers who have been set up to receive invoices via email. This means there is no confirmation step (spot-checking of invoices) before posting the bill run or emailing invoices.
2.  Payment Run

    Schedule your payment run to execute after your billing run completes and posts. Depending on how many customers you are processing in your bill run, you should plan accordingly to ensure your bill run has a sufficient amount of time to complete and be posted before the payment run executing. The payment run can only collect payment for posted invoices.


Note:

Users executing the payment run should follow up on failed payments and retry payments as needed. When this process is complete, you can mail or email the invoices.
