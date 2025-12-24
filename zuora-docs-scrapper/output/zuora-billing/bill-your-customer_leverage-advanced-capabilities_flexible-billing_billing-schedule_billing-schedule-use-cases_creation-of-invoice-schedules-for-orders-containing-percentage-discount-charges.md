---
title: "Creation of invoice schedules for orders containing percentage discount charges"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/creation-of-invoice-schedules-for-orders-containing-percentage-discount-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T18:34:52.562Z"
---

# Creation of invoice schedules for orders containing percentage discount charges

Understand invoice schedules for professional service projects with percentage discounts in milestone billing, allowing automatic application of discount charges.

After enabling the Billing Schedule feature, you can create invoice schedules for professional service projects involving percentage discounts in milestone billing. When creating such an invoice schedule, you can select the specific charges to be billed and apply a specified percentage of discounts to regular charges rather than a fixed-amount discount. Discount charges will be applied automatically based on the configured scope and application details. No need to select discount charges during invoice schedule creation.

If you are uncertain about milestone dates, you can leave run dates blank for invoice schedule items during invoice schedule creation. When specifying run dates for invoice schedule items, keep the following notes in mind:

-   An invoice schedule item with a blank run date will not be executed.

-   You can only update the run date for an invoice schedule item in Pending status.

-   If the run date of an invoice schedule item is left empty, the dates of all subsequent invoice schedule items must also be blank.

-   You must specify run dates in chronological order for invoice schedule items.


## Context

In project milestone billing, you might want to deliver professional services to your customers with several major milestones, and bill your customers in several payments by achieving each of the following milestones:

-   Handover To Delivery (HTD) Upon the receipt of a purchase order from your customer, you can bill your customer for the first milestone with a specific date.

-   Ready for Use (RFU) When the user acceptance testing is approaching the end, you can bill your customer for the second milestone with a specific date.

-   Go-Live Date (GLD) Upon the signing of a handover document, you can bill your customer for the third milestone with a specific date.


For example, a 10/20/70 milestone billing plan indicates that you want to collect 10% payment on receiving a purchase order, 20% payment after the user acceptance testing is complete, and the remaining 70% payment on the date to go live.

When their contracts contain both professional services and recurring charges, you can create custom invoice schedules to bill professional services while leaving the recurring charges to be billed in regular frequencies.

## Use case 1: Update billing schedule run dates to align with billing milestones

In the following use case, you sell your customers different software, licenses, and professional services. Since the contracts contain both professional services and recurring charges, you want to create different invoice schedules to separately bill professional services while leaving the recurring charges to be billed annually.

To comply with the milestone billing plan, you create an order O-00000001 with one subscription S-00000001 containing four regular rate plan charges and two percentage discount charges as shown in the following table.

| Rate plan | Rate plan charge name | Rate plan charge number | Charge type | Price | Billing period |
| --- | --- | --- | --- | --- | --- |
| Rate plan A | Software Base Subscription | C-00000001 | Recurring | $14,000.00 per year | Annual |
| Software User License | C-00000002 | Recurring | $20,000.00 per year | Annual |  |
| Software A Integration - Professional Service | C-00000003 | One-time | $66,000.00 | CustomMilestone billing: 50/0/50 |  |
| Software B Implementation - Professional Service | C-00000004 | One-time | $27,000.00 | CustomMilestone billing: 10/20/70 |  |
| Percentage Discount 1 | C-00000005 | Recurring | 10% | N/A |  |
| Percentage Discount 2 | C-00000006 | Recurring | 10% | N/A |  |

Initially, you do not know any milestone date that depends on the project's progress, so you must specify blank run dates for each invoice schedule item during invoice schedule creation. To bill your customer for the Software B Implementation professional service in this project, you must create one invoice schedule containing multiple invoice schedule items, each corresponding to one project milestone in chronological order.

Invoice schedule IS-0000001 created for charge C-00000004 contains three invoice schedule items, covering 10%, 20%, and 70% of the total amount, respectively.

Later, when you know the exact date for one milestone, you can update the run date of the corresponding invoice schedule item to a specific date from blank to collect payment from your customer.

Regarding the discounts involved in the subscription, both rate plan level discounts and stacked discounts based on percentage discounts are applied. In the preceding scenario, a rate plan level discount of 20% off applies to charge C-00000004.

## Use case 2: Update subscription term start and service activation dates to align with GLD

The Billing Schedule feature supports the Terms And Conditions order action for subscriptions containing discount charges in some particular situations. This order action is permitted as long as the one-time charge and its associated discount charges do not affect the total amount of the billing schedule. For example, you can use this order action to adjust the subscription term start date and end date if the same discount charges are still applied to the one-time charge.

Note:

This order action is still not supported if a subscription only contains recurring charges.

In the following use case, you sell your customers software base subscription and implementation service and provide discounts for your customers.

You create an order O-00000001 with one subscription S-00000001 containing two rate plans A and B. Rate plan A contains a one-time implementation service and a percentage discount and rate plan B contains a recurring software base subscription and a percentage discount, as shown in the following table.

| Rate plan | Rate plan charge name | Rate plan charge number | Charge type | Price | Billing Period |
| --- | --- | --- | --- | --- | --- |
| Rate plan A | Implementation Service | C-00000001 | One time | $400.00 USD | CustomMilestone billing: 20/30/50 |
| Percentage Discount | C-00000002 | Recurring | -10.00% | N/A |  |
| Rate plan B | Software Base Subscription | C-00000003 | Recurring | $1200.00 per year | Annual |
| Percentage Discount | C-00000004 | Recurring | -10.00% | N/A |  |

You specify the following rate plan, subscription, and invoice schedule information:

Rate plans A and B:

-   Rate plan A: specify the Trigger Condition of the C-00000001 and C-00000002 to Upon contract effective.

-   Rate plan B: specify the Trigger Condition of the C-00000003 and C-00000004 to Upon service activation.


Subscription S-00000001:

-   Term start date: 2024-01-01

-   Term period: 12 months

-   Contract effective date: 2024-01-01

-   Service activation date : initially, you specify the date to a future date since you don’t know when the sold software can go live, for example, 2026-01-01


Invoice schedule IS-0000001:

To bill your customer for C-00000001, you create one invoice schedule containing multiple invoice schedule items, each corresponding to one project milestone in chronological order.

Invoice schedule IS-0000001 created for C-00000001 contains three invoice schedule items, covering 20% (HTD), 30%(RFU), and 50%(GLD) of the total amount, respectively. GLD milestone is reached on 2024-06-06. You specify the run date corresponding to the GLD milestone as 2024-06-06. Then, you can update the service activation and term start dates of S-00000001 to 2024-06-06 through the Terms And Conditions order action.

The result is as follows:

-   Rate plan A:

    -   C-00000001: Updating the term start date does not affect the one-time charge.

    -   C-00000002: For this recurring discount charge, the charge start date is the contract effective date: 2024-01-01. Since the term start date is changed to 2024-06-06 and the term period lasts 12 months, the subscription and charge end date is changed to 2025-06-06. The effective period of the charge is 2024-01-01 - 2025-06-06.

-   Rate plan B:

    -   C-00000003 and C-00000004: For the recurring discount charge and regular charge, the start date is the service activation date, it is changed to 2024-06-06. The term start date is also changed to 2024-06-06. The subscription and charge end date is changed to 2025-06-06. The effective period of the charge is 2024-06-06 - 2025-06-06.
