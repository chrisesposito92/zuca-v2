---
title: "System merge fields"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/merge-fields-for-email-and-callout-templates/system-merge-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T05:26:34.155Z"
---

# System merge fields

Describes system merge fields used to include system-level information in email and callout templates.

When the corresponding data source merge field is available, you should use that data source merge field instead of the system merge field listed in this article. For more information, see [Data source merge fields for email and callout templates](/zuora-platform/extensibility/events-and-notifications/merge-fields-for-email-and-callout-templates/data-source-merge-fields).

## Account

| Field | Tag | Description |
| --- | --- | --- |
| Balance | <Account.Balance> | The current outstanding balance for the account.Related events: Account, Invoices Past Due Account Summary, Invoice, Invoice Posted, Manual Email For Invoice |
| Credit Balance | <Account.CreditBalance> | The total credit balance of the account. See Credit Balances for more information.Related events: Credit Balance Refund Processed, Payment Refund Processed |
| Currency | <Account.Currency> | The currency with which the account is being paid.Related events: Account,Invoices Past Due Account Summary, Invoice, Invoice Posted, Manual Email For Invoice, New Subscription Created, Manual Email For Payment, Payment Declined, Payment Processed |
| CurrencySymbol | <Account.CurrencySymbol> | The symbol associated with the currency.Related events: Account, Invoices Past Due Account Summary, Invoice, Invoice Posted, Manual Email For Invoice, New Subscription Created, Manual Email For Payment, Payment Declined, Payment Processed |
| ID | <Account.ID> | The ID of the customer account.Related events: Account, Invoices Past Due Account Summary, Amendment, AmendmentProcessed, Invoice, Invoice Posted, Manual Email For Invoice, Subscription, New Subscription Created, Upcoming Renewal, Manual Email For Payment, Payment Declined, Payment Processed, Payment Method, Payment Method Expiration |
| Name | <Account.Name> | The name of the account.Related events: Account, Invoices Past Due Account Summary, Amendment, AmendmentProcessed, Invoice, Invoice Posted, Manual Email For Invoice, Subscription, New Subscription Created, Upcoming Renewal, Manual Email For Payment, Payment Declined, Payment Processed, Payment Method, Payment Method Expiration |
| Number | <Account.Number> | The number of the customer account.Related events: Account, Invoices Past Due Account Summary, Amendment, AmendmentProcessed, Invoice, Invoice Posted, Manual Email For Invoice, Subscription, New Subscription Created, Upcoming Renewal, Manual Email For Payment, Payment Declined, Payment Processed, Payment Method, Payment Method Expiration |

## Accounting Period

| Field | Tag | Description |
| --- | --- | --- |
| Trial Balance Access URL | <AccountingPeriod.AccessURL> | URL pointing at the accounting period detail page, from which you can access the tabs for Summary, Balances, Action Needed, and Summary Journal Entry.Related events: Trial Balance Completion |
| Trial Balance End Date Time | <AccountingPeriod.TrialBalanceEndDateTime> | Date and time that the trial balance completed.Related events: Trial Balance Completion |
| Trial Balance Start Date Time | <AccountingPeriod.TrialBalanceStartDateTime> | Date and time that the trial balance started to run.Related events: Trial Balance Completion |
| Trial Balance Status | <AccountingPeriod.TrialBalanceStatus> | Displays Completed if the trial balance completed successfully; otherwise, displays Error.Related events: Trial Balance Completion |

## Amendment

| Field | Tag | Description |
| --- | --- | --- |
| Name | <Amendment.AmendmentName> | The name of the amendment.Related Events : Amendment, Amendment Processed |
| Cancellation Effective Date | <Amendment.CancellationEffectiveDate> | The date when the cancellation becomes effective.Related Events : Amendment, Amendment Processed |
| Contract Effective Date | <Amendment.ContractEffectiveDate> | The date on which the changes being made by the amendment become effective.Related Events : Amendment, Amendment Processed |
| Customer Acceptance Date | <Amendment.CustomerAcceptanceDate> | The date on which the customer will accept or accepted the amendment.Related Events : Amendment, Amendment Processed |
| ID | <Amendment.ID> | The Amendment ID value. This is an automatically generated Zuora ID.Related Events : Amendment, Amendment Processed |
| Service Activation Date | <Amendment.ServiceActivationDate> | The date on which the service is to be activated. Use this if you have configured Zuora to require Service Activation in Z-Billing.Related Events : Amendment, Amendment Processed |
| Code | <Amendment.code> | The amendment code. For example, A-AM00000001.Related Events : Amendment, Amendment Processed |
| History | <Amendment.history> | Maps the amendment description.Related Events : Amendment, Amendment Processed |
| Type | <Amendment.type> | The type of amendment that is being made. This can be one of the following: Cancellation, NewProduct, OwnerTransfer, RemoveProduct, Renewal, UpdateProduct, TermsAndConditionsRelated Events : Amendment, Amendment Processed |

## Bill Run

| Field | Tag | Description |
| --- | --- | --- |
| Batch Included | <BillRun.Batch> | The batch number (1-50. A batch organizes your customer accounts into groups to optimize your billing and payment operations.Related events: BillRun, Bill Run Completion |
| Batch Or Account | <BillRun.BatchOrAccount> | Information about the filter that the bill run uses to determine the target accounts:If the bill run is for single account, it shows the account number or the message "The account has been deleted."If the bill run is for multiple accounts, it shows which batch and which billing cycle day were used as filter. For example, All Batches with All Bill Cycle Days or Batch1 with Bill Cycle Day 1.Related events: BillRun, Bill Run Completion |
| Bill Cycle Day Included | <BillRun.BillCycleDay> | Indicates the account's billing cycle day (BCD), which is when the bill runs generate invoices for the account.Related events: BillRun, Bill Run Completion |
| Bill Run AccessURL | <BillRun.BillRunAccessURL> | Use this URL to check the status of the bill run.Related events: BillRun>, Bill Run Completion |
| Bill Run Status | <BillRun.BillRunStatus> | The status of the entire bill run (completed, failed, deleted, etc.).Related events: BillRun, Bill Run Completion |
| Executed On | <BillRun.ExecutedOn> | The time that the bill run was executed.Related events: BillRun, Bill Run Completion |
| ID | <BillRun.ID> | This is an automatically generated Zuora ID.Related events: BillRun, Bill Run Completion |
| Number of Customer Accounts Processed | <BillRun.NumberofCustomerAccountsProcessed> | The number of customer accounts processed in this bill run.Related events: BillRun, Bill Run Completion |
| Number of Invoices Generated | <BillRun.NumberofInvoicesGenerated> | The number of invoices generated while processing the bill run.Related events: BillRun, Bill Run Completion |
| Customer Account Selected | <BillRun.SingleAccount> | In the case of a bill run for a single account, this is the information for that account.Related events: BillRun>, Bill Run Completion |
| Target Date | <BillRun.TargetDate> | The date you want the invoice generated on.Related events: BillRun, Bill Run Completion |

## Entity

The entity information. The Entity merge fields are only used for [Zuora Multi-entity](/zuora-platform/user-management/multi-entity/overview-of-multi-entity).

| Field | Tag | Description |
| --- | --- | --- |
| ID | <Entity.ID> | The Id of the entity.Related events:AQUAAQUA Data Export CompletionDataSourceDataSource Export CompletionBillingPreview RunBillingPreview Run CompletionImportImport ProcessedUpcoming RenewalGateway Reconciliation Job CompletionPayment Method ExpirationPayment Method UpdaterPayment Method Updater Batch CompletedPayment Method Updater Batch StartedPayment Run Completion |
| Name | <Entity.Name> | The name of the entity.Related events:AQUAAQUA Data Export CompletionDataSourceDataSource Export CompletionBillingPreview RunBillingPreview Run CompletionImportImport ProcessedUpcoming RenewalGateway Reconciliation Job CompletionPayment Method ExpirationPayment Method UpdaterPayment Method Updater Batch CompletedPayment Method Updater Batch StartedPayment Run Completion |

## Event

| Field | Tag | Description |
| --- | --- | --- |
| AutoRenewal | <Event.AutoRenewal> | Shows true or false to indicate whether the subscription is set to auto-renew.Related events: Upcoming Renewal |
| Category | <Event.Category> | The Event Category. For example, Invoice Posted, New Subscription Created, or Upcoming Renewal.This field applies to all event categories. |
| Date | <Event.Date> | Date, in tenant's time zone, on which the event occurred.This field applies to all event categories. |
| HowManyDaysBefore | <Event.HowManyDaysBefore> | Number of days before the subscription is due to be renewed.Related events: Upcoming Renewal |
| Timestamp | <Event.Timestamp> | Time and date when the event occurred, using the time zone set for your tenant.This field applies to all event categories. |

## Export

| Field | Tag | Description |
| --- | --- | --- |
| Created Date | <Export.CreatedDate> | The date when the export was created.Related events: DataSource, DataSource Export Completion |
| Encrypted | <Export.Encrypted> | Shows true or false to indicate whether the exported content is encrypted.Related events: DataSource, DataSource Export Completion |
| Error Message | <Export.ErrorMessage> | The error message returned if the export fails.Related events: DataSource, DataSource Export Completion |
| File ID | <Export.FileID> | The ID of the file generated by the export query. Zuora will populate this field once the export has been generated. Use this file ID when downloading the generated export.Related events: DataSource, DataSource Export Completion |
| Format | <Export.Format> | The format of the export file. Either csv (comma-separated value file) or html (HTML-formatted output).Related events: DataSource, DataSource Export Completion |
| Name | <Export.Name> | The name of the export file.Related events: DataSource, DataSource Export Completion |
| Size | <Export.Size> | The number of records (rows) exported.Related events: DataSource, DataSource Export Completion |
| Status | <Export.Status> | The status of the export.Related events: DataSource, DataSource Export Completion |
| Total Number | <Export.TotalNumber> | The total number of rows returned by the export.Related events: DataSource, DataSource Export Completion |
| Zip | <Export.Zip> | Specifies whether or not the resulting Export is compressed into a ZIP-formatted file.Related events: DataSource, DataSource Export Completion |

## Functions

| Field | Tag | Description |
| --- | --- | --- |
| Today | <Functions.Today> | Date, in tenant's time zone, on which the notification email is sent out.This field applies to all event categories. |

## Import

| Field | Tag | Description |
| --- | --- | --- |
| Complete Date | <Import.CompleteDate> | The date when the import process was completed.Related events: Import, Import Processed |
| ID | <Import.ID> | The Zuora internal ID of the import operation.Related events: Import, Import Processed |
| Import Type | <Import.ImportType> | The type of record that is loaded by the import. Zuora supports two types of imports: Usage and Payment.Related events: Import, Import Processed |
| Imported Count | <Import.ImportedCount> | The number of rows that were imported successfully.Related events: Import, Import Processed |
| Name | <Import.Name> | The original name input by the tenant or the imported file name if the import name is not explicitly set by the tenant.Related events: Import, Import Processed |
| Resource URL | <Import.ResourceUrl> | The URL reference to the original imported file. For example, https://www.zuora.com/apps/<wbr/>api/file/<wbr/>ff80808139bd3df90139bd8b729d00<wbr/>02Related events: Import, Import Processed |
| Result Resource URL | <Import.ResultResourceUrl> | The URL that allows you to check the status of the import process.Related events: Import, Import Processed |
| Status | <Import.Status> | The status of the import process (success, processing, pending, etc.).Related events: Import, Import Processed |
| Status Reason | <Import.StatusReason> | The reason code associated with statuses in Zuora.Related events: Import, Import Processed |
| Total Count | <Import.TotalCount> | The total number of rows imported.Related events: Import, Import Processed |

## Invoice

| Field | Tag | Description |
| --- | --- | --- |
| Balance | <Invoice.Balance> | The balance due on the invoice after the value for the Amount field is applied.Related events: Invoice, Invoice Posted, Manual Email For Invoice |
| Date | <Invoice.Date> | The generation date of the invoice.Related events: Invoice, Invoice Posted, Manual Email For Invoice |
| Due Date | <Invoice.DueDate> | The date by which the payment for this invoice is due.Related events: Invoice, Invoice Posted, Manual Email For Invoice |
| ID | <Invoice.ID> | The ID of the invoice.Related events: Invoice, Invoice Posted, Manual Email For Invoice |
| Number | <Invoice.Number> | The user-readable invoice number.Related events: Invoice, Invoice Posted, Manual Email For Invoice |
| Total Amount | <Invoice.TotalAmount> | The total amount of the invoice.Related events: Invoice, Invoice Posted, Manual Email For Invoice |

## Journal Run

| Field | Tag | Description |
| --- | --- | --- |
| Journal Entry Date | <JournalRun.JournalEntryDate> | Date of the journal entry.Related events: Journal Run Completion |
| Journal Run Access URL | <JournalRun.JournalRunAccessURL> | URL pointing to the journal run in Zuora, from which you can view all the journal entries.Related events: Journal Run Completion |
| Target Accounting Period Name | <JournalRun.TargetAccountingPeriodName> | Name of the accounting period for which you created the journal run.Related events: Journal Run Completion |
| Transaction Types Selected | <JournalRun.TransactionTypesSelected> | List of the transaction types included in the journal run.Related events: Journal Run Completion |

## Subscription (Related Events: Amendment, AmendmentProcessed)

| Field | Tag | Description |
| --- | --- | --- |
| AccountID | <Subscription.AccountID> | The identification number of a valid account.Related events: Amendment, AmendmentProcessed |
| CreateDate | <Subscription.CreateDate> | The date on which the current subscription object was created.Related events: Amendment, AmendmentProcessed |
| CreatorAccountID | <Subscription. CreatorAccountID> | The ID of the account that created the subscription.Related events: Amendment, AmendmentProcessed |
| CurrentOwner | <Subscription.CurrentOwner> | The company assigned as the subscription owner.Related events: Amendment, AmendmentProcessed |
| ID | <Subscription.ID> | This is an automatically generated Zuora ID.Related events: Amendment, AmendmentProcessed |
| OriginalID | <Subscription.OriginalID> | The ID for the first subscription created for this customer. Since subscriptions are renewed, you can think of subscription IDs as a "chain" of subscriptions that connect from the first subscription to the current subscription.Related events: Amendment, AmendmentProcessed |
| PreviousID | <Subscription.PreviousID> | The subscription ID immediately prior to the current one.Related events: Amendment, AmendmentProcessed |
| RenewalTerm | <Subscription.RenewalTerm> | The renewal term for the subscription in months (the number of months for which you want to renew the subscription).Related events: Amendment, AmendmentProcessed |
| Name | <Subscription. SubscriptionName> | The name of the subscription. This is a unique identifier.Related events: Amendment, AmendmentProcessed |

## Subscription (Related Events: Subscription, New Subscription Created, Upcoming Renewal, Order Action Processed)

| Field | Tag | Description |
| --- | --- | --- |
| Renewal Term | <Subscription.RenewalTerm> | The renewal term for the subscription, in months.Related events: Subscription, New Subscription Created, Upcoming Renewal |
| Term End Date | <Subscription.TermEndDate> | This is when the subscription term ends. It is NULL for an active subscription if it is of type (TermType) Evergreen. For an Evergreen subscription that has been canceled, it is set to the cancellation date.Related events: Subscription, New Subscription Created, Upcoming Renewal |
| Auto Renew | <Subscription.AutoRenew> | Whether the subscription will be automatically renewed, or whether it will expire and need to be manually renewed at the end of the term.Related events: New Subscription Created |
| CMRR | <Subscription.CMRR> | The contracted MRR for the subscription. See Monthly Recurring Revenue for more information.Related events: New Subscription Created |
| Contract Effective | <Subscription. ContractEffective> | This is the date on which the contract becomes effective, and will trigger charges that have their trigger event set to "Upon Contract Effective."Related events: New Subscription Created |
| Create Date | <Subscription.CreateDate> | The date which the current subscription object was created.Related events: New Subscription Created |
| Created By | <Subscription.CreatedBy> | The ID of the user who created the subscription.Related events: New Subscription Created |
| Customer Acceptance | <Subscription. CustomerAcceptance> | The customer acceptance date. See Subscription and Amendment Dates for more information.Related events: New Subscription Created |
| Initial Term | <Subscription.InitialTerm> | The initial term for the subscription, in months.Related events: New Subscription Created |
| Service Activation | <Subscription. ServiceActivation> | This is when the service was activated, and will trigger charges that have their trigger event set to "Upon Service Activation".Related events: New Subscription Created |
| Subscription Details | <Subscription. SubscriptionDetailTable> | The list of rate plan charges in the subscription.Related events: New Subscription Created, Order Action Processed |
| Name / Subscription Name | <Subscription. SubscriptionName> | The name of the subscription. This is a unique identifier.Related events: New Subscription Created, Upcoming Renewal |
| TCV | <Subscription.TCV> | TCV is the amount of revenue that a subscription generates in its first term, assuming the subscription is not yet renewed.Related events: New Subscription Created |
| Term Type | <Subscription.TermSetting> | Denotes whether a subscription is evergreen (has no end date or term length) or has a term.Related events: New Subscription Created |
| Term Start Date | <Subscription.TermStartDate> | The date on which the subscription term begins.Related events: New Subscription Created |

## Payment

| Field | Tag | Description |
| --- | --- | --- |
| Amount | <Payment.Amount> | The amount of the payment.Note that this merge field includes the currency symbol.Related events: Manual Email For Payment, Payment Declined, Payment Processed |
| Currency | <Payment.Currency> | The currency with which the payment is being made.Related events: Payment Refund, Credit Memo RefundNote:You can set a Currency value that can be different from the account currency. You must have the multiple currencies feature enabled to change the currency value. |
| Date | <Payment.Date> | The date that the creator of the payment wants to declare that the payment is made.Related events: Manual Email For Payment, Payment Declined, Payment Processed |
| ID | <Payment.ID> | This is an automatically generated Zuora ID.Related events: Manual Email For Payment, Payment Declined, Payment Processed |
| Error Message | <Payment.ErrorMessage> | The error message returned if the payment was not processed successfully.Related events: Payment Declined |
| Refund Amount | <Payment.RefundAmount> | The total amount of the refund.Related events: Payment Refund Processed |

## Payment Method

| Field | Tag | Description |
| --- | --- | --- |
| Ach Aba Code | <PaymentMethod. AchAbaCode> | The nine-digit routing number or ABA number used by banks.Related events: Payment Declined |
| Ach Account Name | <PaymentMethod. AchAccountName> | The name of the account holder (a person or a company).Related events: Payment Declined |
| Ach Account Number Mask | <PaymentMethod. AchAccountNumberMask> | This is a mask to help hide the account number. For example: XXXXXXXXX54321Related events: Payment Declined |
| Ach Bank Name | <PaymentMethod. AchBankName> | The name of the bank where the ACH payment account is held.Related events: Payment Declined |
| Card Holder Name | <PaymentMethod. CardHolderName> | The full name (first or personal and last or family) of the holder of the credit or debit card.Related events: Payment Declined |
| Credit Card Mask Number | <PaymentMethod. CreditCardMaskNumber> | A masked version of the credit or debit card number. This is a read-only field generated by Zuora from the credit/debit card number.Related events: Payment Declined, Payment Method, Payment Method Expiration |
| Credit Card Type | <PaymentMethod. CreditCardType> | The type of credit or debit card that is being billed. The values are case-sensitive and must be used exactly as shown here.Related events: Payment Declined |
| Expiration Date | <PaymentMethod. ExpirationDate> | The expiration date of the credit card.Related events: Payment Declined |
| Payment Method ID | <PaymentMethod.ID> | A valid PaymentMethod ID indicating the method being used to make the payment.Related events: Payment Declined, Payment Method, Payment Method Expiration |
| Payment Method Type | <PaymentMethod. PaymentMethodType> | The type of payment method being used.Possible values: ACH, Cash, Check, CreditCard, CreditCardReferenceTransaction, DebitCard, Other, PayPal, WireTransferRelated events: Payment Declined, Payment Method, Payment Method Expiration |
| Paypal Baid | <PaymentMethod.PaypalBaid> | The PayPal billing agreement ID. This is a contract established between two PayPal accounts. Typically, the selling party initiates a request to create a BAID and sends it to buying party for acceptance. After that, the seller can keep track of the BAID and use it for future charges against the buyer.Related events: Payment Declined |
| Paypal Email | <PaymentMethod.PaypalEmail> | The email address associated with the account holder's PayPal account (or of the PayPal account of the person paying for the service).Related events: Payment Declined |
| Credit Card Expiration Date | <PaymentMethod. CreditCardExpirationDate> | The expiration date of the credit card.Related events: Payment Method, Payment Method Expiration |

## Payment Run

| Field | Tag | Description |
| --- | --- | --- |
| ID | <PaymentRun.ID> | The Zuora internal ID of the payment run. A human-readable ID is provided in PaymentRun.PaymentRunID.Related events: Payment Run Completion |
| Number of Invoices Generated | <PaymentRun. NumberofInvoicesGenerated> | The number of invoices generated for the payment run.Related events: Payment Run Completion |
| Number of Payments Collected | <PaymentRun. NumberofPaymentsCollected> | The number of payments collected in the payment run.Related events: Payment Run Completion |
| Payment Run AccessURL | <PaymentRun. PaymentRunAccessURL> | A URL that you can use to check the status of the payment run.Related events: Payment Run Completion |
| PaymentRunID | <PaymentRun.PaymentRunID> | The user-readable ID for the payment run. For example, PR-00000002. The Zuora internal ID is provided in PaymentRun.ID.Related events: Payment Run Completion |
| Payment Run Status | <PaymentRun. PaymentRunStatus> | The status of the payment run (completed, pending, failure, etc.).Related events: Payment Run Completion |
| Target Date | <PaymentRun.TargetDate> | The target date of the payment run.Related events: Payment Run Completion |

## Payment Run Summary

| Field | Tag | Description |
| --- | --- | --- |
| Total Value of Invoices | <PaymentRunSummary. TotalValueofInvoices> | The total value of invoices generated for the payment run.Related events: Payment Run Completion |
| Total Value of Payments Applied | <PaymentRunSummary. TotalValueofPaymentsApplied> | The total value of the payments that were applied to the invoices during the payment run (and applied to the invoice total).Related events: Payment Run Completion |

## Refund

| Field | Tag | Description |
| --- | --- | --- |
| Amount | <Refund.Amount> | The total amount of the refund.Related events: Credit Balance Refund Processed, Payment Refund Processed |
| Date | <Refund.Date> | The date that the refund was created.Related events: Credit Balance Refund Processed, Payment Refund Processed |
| ID | <Refund.ID> | The ID of the refund.Related events: Credit Balance Refund Processed, Payment Refund Processed |
| Reason Code | <Refund.ReasonCode> | The reason code assigned to the refund. See Reason codes for payment operations for more information.Related events: Credit Balance Refund Processed, Payment Refund Processed |
| Type | <Refund.Type> | The type of the refund, External or Electronic, which is the type in which the original payment was made. See Refunds for more information.Related events: Credit Balance Refund Processed, Payment Refund Processed |

## Summary Statement

The following table lists merge fields for the Account Summary Statement feature. For more information, see [Account Summary Statement](/zuora-billing/bill-your-customer/zuora-billing-reporting/account-summary-statement).

| Field | Tag | Description |
| --- | --- | --- |
| Account ID | AccountId | The ID of the account that the statement belongs to.Related events : Summary Statement Generated |
| End Date | EndDate | The end date and time of the statement generated in the statement run.Related events : Summary Statement Generated |
| Start Date | StartDate | The start date and time of the statement generated in the statement run.Related events : Summary Statement Generated |
| Statement Date | StatementDate | The date when the corresponding statement run is triggered.Related events : Summary Statement Generated |
| Statement Number | StatementNumber | The number of the statement.Related events : Summary Statement Generated |

## Tenant

| Field | Tag | Description |
| --- | --- | --- |
| ID | <Tenant.ID> | The Id of the Zuora tenant.This field applies to all event categories. |
| Name | <Tenant.Name> | The name of the Zuora tenant.This field applies to all event categories. |

## Special field type - Merge Table Past Due Invoice

| Field | Tag | Description |
| --- | --- | --- |
| MergeTable PastDueInvoice | <MergeTable.PastDueInvoice> | This field is an aggregate of all past due invoices.Related events: Account, Invoices Past Due Account Summary |

## Special field type - Today's Date

| Field | Tag | Description |
| --- | --- | --- |
| MergeTable PastDueInvoice | <MergeTable.PastDueInvoice> | This field is an aggregate of all past due invoices.Related events: Account, Invoices Past Due Account Summary |
| Today's Date | <Today.Date> | The current date. Note that this is the system date in Zuora.Related events: Account, Invoices Past Due Account Summary |
