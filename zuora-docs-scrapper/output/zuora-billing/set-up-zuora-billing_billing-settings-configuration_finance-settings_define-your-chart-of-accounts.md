---
title: "Define your chart of accounts"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/finance-settings/define-your-chart-of-accounts"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:16.960Z"
---

# Define your chart of accounts

Learn how to define and configure your chart of accounts in Zuora to manage financial transactions and integrate with your accounting system.

Out of the box, Zuora can provide you with basic revenue data to use in your general ledger accounting system. If you later decide to use Zuora as a full-featured revenue sub-ledger system, you can access more powerful and complete features by integrating Zuora Billing with Zuora Revenue. In the meantime, you can immediately start applying accounting codes to your Zuora transactions, providing basic accounting information immediately and ensuring that valuable historical accounting data will be in place later.

To define the chart of accounts, the following steps are outlined.

1.  Review your chart of accounts

    Zuora uses a set of accounting codes (stored in a chart of accounts ) to identify different types of financial transactions within your Zuora data. This allows you to use your Zuora data for revenue accounting.

    To do this, you'll need to configure the Zuora chart of accounts to contain a subset of your primary accounting system's general ledger account codes. For new tenants, a standard set of codes is provided as a starting place, and that may be all you need.

    For detailed information, see Set up chart of accounts .

2.  Assign accounting codes to your financial transactions

    After you are sure that the chart of accounts is tailored to your needs, you can configure your system to automatically assign the correct accounting codes to the various types of transactions, such as invoices, payments, credits, and refunds. In some cases, you can override the automatically-assigned accounting code for an individual transaction. You'll find detailed explanations of all this in the instructions linked below.

    For detailed information, see Assign accounting codes .


After completing steps 1 and 2 above, begin to use accounting codes with all your transactions. Where Zuora wants you to provide or approve an accounting code, you'll see a drop-down list that lets you choose an appropriate code. As your data accumulates, you can draw basic reports and data exports that include this accounting data, which you can use to provide revenue data for your accounting system.
