---
title: "Standard events for Zuora Payments"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/standard-events/standard-events-for-zuora-payments"
product: "zuora-platform"
scraped_at: "2026-02-19T03:25:54.115Z"
---

# Standard events for Zuora Payments

Describes the standard events supported by Zuora Payments.

Payment notifications (processed and declined) are for electronic payments only, whether the payment was created by API or UI. External payments will not trigger these notifications.

| Name | Related Event | Description |
| --- | --- | --- |
| Credit Balance Refund Processed | Credit Balance Refund Processed | A credit balance refund was processed successfully. |
| Gateway Reconciliation Job Completion | Gateway Reconciliation Job Completion | The gateway reconciliation job has completed.Note:This feature is in the Early Availability phase. If you want to have access to the feature, submit a request at Zuora Global Support. |
| Manual Email For Payment | Manual Email For Payment | Send email notification manually from payment detail page. |
| First Attempt | Payment Declined | The payment was declined by the payment gateway upon the first attempt by using a payment method.For this standard event, the Sequence of failed attempt setting is available for configuring when the notification is triggered. When the value of Sequence of failed attempt equals the value of the NumConsecutiveFailures field of a payment method, the notification is triggered. The NumConsecutiveFailures field is a counter that is stored on a payment method to record the number of consecutive failed payments for this payment method of a customer account.By default, Sequence of failed attempt is set to 1 , so the notification is triggered upon the first failed payment on a payment method. |
| 15 Day Warning | Payment Method Expiration | The credit card set as the default payment method on the account is due to expire in 15 days. The expiration date of a credit card is the last day of the specified expiration month.This notification is triggered by a scheduled job at 5:15 am UTC time for tenants in EU Cloud Data Center and US Cloud Data Center 1, or 5:15 am Los Angeles time (UTC-07:00 or UTC-08:00 depending on the time of the year) for tenants in US Cloud Data Center 2. For more information about data centers, see Zuora data centers.Note:This notification is sent even if the payment method has been closed. Zuora recommends not leaving a closed payment method as the default on an account. |
| 30 Day Warning | Payment Method Expiration | The credit card set as the default payment method on the account is due to expire in 30 days. The expiration date of a credit card is the last day of the specified expiration month.This notification is triggered by a scheduled job at 5:15 am UTC time for tenants in EU Cloud Data Center and US Cloud Data Center 1, or 5:15 am Los Angeles time (UTC-07:00 or UTC-08:00 depending on the time of the year) for tenants in US Cloud Data Center 2. For more information about data centers, see Zuora data centers.Note:This notification is sent even if the payment method has been closed. Zuora recommends not leaving a closed payment method as the default on an account. |
| Payment Method Updated - System User Change (formerly known as Manually) | Payment Method Updated | The payment method was updated by a system user.A notification is sent only when the default payment method is updated, not other payment methods. |
| Payment Method Updated (formerly known as API) | Payment Method Updated | The payment method was updated by a system user.A notification is sent only when the default payment method is updated, not other payment methods. |
| Payment Method Updated - Payment Method Updater (formerly known as Payment Method Updater) | Payment Method Updated | The payment method was updated by the Payment Method Updater.A notification is sent only when the default payment method is updated, not other payment methods. |
| Payment Method Closed - System User Change (formerly known as Manually) | Payment Method Closed | The payment method was closed by a system user. |
| Payment Method Closed (formerly known as API) | Payment Method Closed | The payment method was closed by a system user. |
| Payment Method Closed - Payment Method Updater (formerly known as Payment Method Updater) | Payment Method Closed | The payment method was closed by the Payment Method Updater |
| Payment Method Updater Batch Started | Payment Method Updater Batch Started | A payment method updater batch was started. |
| Payment Method Updater Batch Completed | Payment Method Updater Batch Completed | A payment method updater batch was completed. |
| Payment Processed | Payment Processed | The payment was processed successfully. |
| Payment Refund Processed | Payment Refund Processed | A payment refund was processed successfully. |
| Payment Run Completion - Success (formerly known as Completed Status) | Payment Run Completion | Payment run is completed successfully. |
| Payment Run Completion - Error (formerly known as Error Status) | Payment Run Completion | Payment run is completed with error. |
| External Credit Balance Refund Processed | Credit Balance Refund Processed | The external credit balance refund was processed successfully. |
| External Payment Refund Processed | Payment Refund Processed | The external payment refund was processed successfully. |
| External Payment Processed | Payment Processed | The external payment was processed successfully. |
| Credit memo and debit memo events |  |  |
| Credit Memo Created Manually from Invoice | Credit Memo Created | Trigger the notification when a credit memo is created from an invoice through the Zuora UI. |
| Credit Memo Created Manually from Product Rate Plan Charge | Credit Memo Created | Trigger the notification when a credit memo is created from product rate plan charges through the Zuora UI. |
| Credit Memo Posted Manually | Credit Memo Posted | Trigger the notification when a credit memo is posted from the credit memo detail page or the credit memo list page in the Zuora UI. |
| Credit Memo Posted via API | Credit Memo Posted | Trigger the notification when a credit memo is posted through the Zuora REST API. |
| Credit Memo Posted within a Bill Run of Auto-Post | Credit Memo Posted | Trigger the notification when a credit memo is posted within a bill run and the bill run has auto-post. This is to support the existing email notification behavior from within a bill run. |
| Credit Memo Refund Processed | Credit Memo Refund Processed | Trigger the notification when a credit memo is refunded successfully. |
| External Credit Memo Refund Processed | Credit Memo Refund Processed | Trigger the notification when an external credit memo is refunded successfully. |
| Debit Memo Created Manually from Invoice | Debit Memo Created | Trigger the notification when a debit memo is created from an invoice through the Zuora UI. |
| Debit Memo Created Manually from Product Rate Plan Charge | Debit Memo Created | Trigger the notification when a debit memo is created from product rate plan charges through the Zuora UI. |
| Debit Memo Posted Manually | Debit Memo Posted | Trigger the notification when a debit memo is posted from the debit memo detail page or the debit memo list page in the Zuora UI. |
| Debit Memo Posted via API | Debit Memo Posted | Trigger the notification when a debit memo is posted through the Zuora REST API. |
| Manually email Credit Memo | Email Credit Memo | Send email notification and credit memo PDF from the credit memo detail page in the Zuora UI. |
| Manually email Debit Memo | Email Debit Memo | Send email notification and credit memo PDF manually from the debit memo detail page in the Zuora UI. |
