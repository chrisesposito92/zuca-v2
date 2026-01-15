---
title: "Available exports"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-exports/available-exports"
product: "zuora-platform"
scraped_at: "2026-01-15T22:02:49.979Z"
---

# Available exports

Learn about the available exports

The following table lists the data exports that are available through Reporting > Exports.

Note:

With the exception of Invoice PDF and All Users List CSV, the data exports listed below are deprecated and may not be available in your Zuora tenant.

| Export Data | Data Source Object | Exported Data |
| --- | --- | --- |
| Payment CSV | Payments | The standalone Payment CSV Export capability has been replaced with the Data Source Export feature. Zuora strongly recommends that you use the Payment data source instead of the Payment CSV export. |
| Invoice CSV | Invoice | Exports invoice data based on any of the following selected filters and time frame:Invoice StatusBill Run NumberInvoice BalanceInvoice TotalCustomer IdThe invoice CSV export contains a column, Extended Price. This is the same as the Charge Amount field of the Invoice Item data source. See Invoice Item Data Source.As part of our ongoing platform enhancements, we have removed the ‘CustomerAccounts Zip’ option for new use.We recommend using Zuora Data Sources for more robust and flexible reporting and export capabilities.For more information, see Introduction to Data Sources and Generate a Data Source Export.Note:Zuora recommends that you use Zuora Data Sources for more robust and flexible reporting and export capabilities.For more information, see Introduction to Data Sources and Generate a Data Source Export. |
| Invoice PDF | Invoice | Exports invoice data based on any of the following selected filters and time frame:Invoice StatusDelivery PreferencesBill Run NumberInvoice BalanceInvoice TotalUse the invoice PDF export to aid your collections process. For example, you can export only invoice PDFs for invoices with a balance greater than zero. You can send these invoice PDFs to customers to remind them of their open balances. |
| Credit Memo PDF | Credit Memo | Exports credit memo data based on any of the following selected filters and time frame:Credit Memo StatusDelivery PreferencesAccount NumberBill Run NumberCredit Memo AmountCredit Memo Unapplied Amount |
| Debit Memo PDF | Debit Memo | Exports debit memo data based on any of the following selected filters and time frame:Debit Memo StatusDelivery PreferencesAccount NumberDebit Memo AmountDebit Memo Balance |
| CustomerAccounts Zip | Customer Accounts | Exports data: contact, customer account, and payment method. No filtering available.Note:As part of our ongoing platform enhancements, we have removed the ‘CustomerAccounts Zip’ option for new use.Zuora recommends that you use Zuora Data Sources for more robust and flexible reporting and export capabilities.For more information, see Introduction to Data Sources and Generate a Data Source Export. |
| ProductCatalog Sheet | Product | Exports data: product, product rate plan, price. No filtering available. |
| Subscriptions Zip | Subscriptions | Exports:Mass Order Entry (includes Subscriptions and Amendments data).SubscriptionsNo filtering available.Note:The Export Mass Order Entry export timeout limit is 120s. Use the Subscription data source and related data sources as an alternative. |
| Orders Zip | Subscriptions and Amendments | Exports: Orders including Subscriptions and Amendments.No filtering available. |
| All Users List CSV | Administration Settings | Exports user details, including ID, name, status, roles, and last login. This export is available to Zuora platform administrators only. See Manage Users for more information.No filtering available. |
| Object Sharing Exceptions | Objects Sharing Errors | Exports data about errors that occurred when synchronizing the shared objects to target entities. The export is based on a selected time frame and the Object Type filter:ProductProduct Rate PlanProduct Rate Plan ChargeAccountingPeriodNote: This is only available for Multi-entity. |
