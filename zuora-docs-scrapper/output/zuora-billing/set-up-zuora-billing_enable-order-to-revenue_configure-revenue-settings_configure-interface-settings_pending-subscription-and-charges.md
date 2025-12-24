---
title: "Pending Subscription and Charges"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/configure-revenue-settings/configure-interface-settings/pending-subscription-and-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T05:13:40.910Z"
---

# Pending Subscription and Charges

Settings configuration for booking transactions related to pending subscriptions and charges.

In this interface setting section, you can configure the following settings:

| Setting | Option | Is this option the default value? | Generation behavior and logic |
| --- | --- | --- | --- |
| Booking transaction object generation for pending subscription and charges | Generate all charges | No | For a pending subscription, booking transactions are generated for the charges with start dates and those without start dates. For the charges without start dates, null values are set on the date, charge contract value (CCV), and extended list price (ELP) fields of the booking transaction. |
| Generate active charges | No | Booking transactions are generated for only active charges under the pending subscription. |  |
| Do not generate | Default value | Booking transactions are not generated for pending subscriptions. |  |

## How OTR works

-   Navigate to Revenue Interface Settings once the OTR is enabled.

-   Select the Generate all charges option against the Booking transaction object generation subscription and charges field.

-   OTR will handle the below fields mapping OOTB.


| Booking TRX fields | Revenue Fields | Description |
| --- | --- | --- |
| Charge Status | Subscription Status | For the new feature, the charge status will override the subscription status and mapping to revenue subscription status. If the charge status is null, then use the subscription status to mapping to revenue subscription status. |
| Estimated Start Date | Revenue Start Date | If the current start date is null, then use the estimated start date mapping to revenue start date. |
| Estimated End Date | Revenue End Date | If the current end date is null, then use the estimated end date mapping to revenue end date. |

Note:

On the revenue side, an OOTB template is on hold based on the subscription status. The data process works only when pending subscription process feature is enabled.
