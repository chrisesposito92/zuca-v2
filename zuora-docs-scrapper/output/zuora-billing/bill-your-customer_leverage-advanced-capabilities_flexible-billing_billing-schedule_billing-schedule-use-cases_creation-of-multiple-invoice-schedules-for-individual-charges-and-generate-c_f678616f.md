---
title: "Creation of multiple invoice schedules for individual charges and generate consolidated invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/creation-of-multiple-invoice-schedules-for-individual-charges-and-generate-consolidated-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:20.702Z"
---

# Creation of multiple invoice schedules for individual charges and generate consolidated invoices

Create multiple invoice schedules for individual charges and generate consolidated invoices to align with contract structures and billing requirements.

With the Billing Schedule feature, you can create multiple invoice schedules for distinct subscriptions or individual charges if your customers purchase various products and services through a single contract. Through this approach, you can easily track when each subscription or charge is triggered based on the predefined invoice schedule, ensuring a precise alignment with the contract structure.

If you create multiple invoice schedules to bill your customers, the mapping between orders or subscriptions and invoice schedules varies depending on actual situations.

-   For multiple invoice schedules created for separate subscriptions within the same order, the order is linked with the last created invoice schedule.

-   For multiple invoice schedules created for individual charges within the same subscription, the subscription is linked with the last created invoice schedule.


## Context

For a multiyear order containing various products and services, you can create distinct invoice schedules for each specific charge contained in the subscriptions based on business requirements.

Assume that your customer inks a two-year agreement that covers one order O-00000001, containing one subscription with three charges in the same term of 36 months. Your customer expects to receive invoices based on years and service types.

The following table lists information on subscription S-00000001 contained in order O-00000001.

| Charge name | Charge number | Charge start date | Term (Month) | Charge end date | Selling price | List price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Annual Platform Fee | C-00000001 | 12/01/2023 | 36 | 11/30/2024 | $50,000.00 annually | Annual | 36 months |
| First Time Verification Fee | C-00000002 | 12/01/2024 | 36 | 11/30/2025 | $2,000,000.00 every three years | 36 months | 36 months |
| Ongoing Verification Fee | C-00000003 | 12/01/2025 | 36 | 11/30/2026 | $1,000,000.00 every three years | 36 months | 36 months |

To bill your customer as needed, you can create three invoice schedules, one to bill the annual platform fee for three years, one for the first-time verification, and one for the ongoing verification. Expected to generate seven invoices on different dates for the subscription, you can create invoice schedules through the Zuora UI or REST API.
