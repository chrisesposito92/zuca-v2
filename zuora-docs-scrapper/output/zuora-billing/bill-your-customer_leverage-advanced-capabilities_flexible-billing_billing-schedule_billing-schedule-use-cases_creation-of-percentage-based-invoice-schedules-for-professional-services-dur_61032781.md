---
title: "Creation of percentage-based invoice schedules for professional services during project milestone billing"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/creation-of-percentage-based-invoice-schedules-for-professional-services-during-project-milestone-billing"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:02.818Z"
---

# Creation of percentage-based invoice schedules for professional services during project milestone billing

Create percentage-based invoice schedules for professional services in milestone billing, allowing flexible billing based on project progress and specific charges.

The Billing Schedule feature allows you to create invoice schedules with percentage-based schedule items for professional service projects in milestone billing. When creating such an invoice schedule, you can select the specific charges to be billed and specify a percentage of the total amount for each invoice schedule item rather than a fixed amount.

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

In this use case, you sell your customers different software, licenses, and professional services. Since the contracts contain both professional services and recurring charges, you want to create different invoice schedules to separately bill professional services while leaving the recurring charges to be billed annually.

To comply with the milestone billing plan, you create an order O-00000001 with one subscription S-00000001 containing four rate plan charges as shown in the following table.

| Rate plan | Rate plan charge name | Rate plan charge number | Charge type | Price | Billing period |
| --- | --- | --- | --- | --- | --- |
| Rate plan A | Software Base Subscription | C-00000001 | Recurring | $14,000.00 per year | Annual |
| Software User License | C-00000002 | Recurring | $20,000.00 per year | Annual |  |
| Software A Integration - Professional Service | C-00000003 | One-time | $66,000.00 | CustomMilestone billing: 50/0/50 |  |
| Software B Implementation - Professional Service | C-00000004 | One-time | $27,000.00 | CustomMilestone billing: 20/30/50 |  |

Initially, you do not know any milestone date that depends on the project's progress, so you must specify blank run dates for each invoice schedule item during invoice schedule creation. To bill your customer for professional services in this project, you must create two invoice schedules containing multiple invoice schedule items, each corresponding to one project milestone in chronological order.

-   Invoice schedule IS-0000001 created for charge C-00000003 contains two invoice schedule items, each covering 50% of the total amount. A $0 schedule item is not allowed, so you can create only two schedule items for charge C-00000003.

-   Invoice schedule IS-0000002 created for charge C-00000004 contains three invoice schedule items, covering 20%, 30%, and 50% of the total amount, respectively.


Later, when you know the exact date for one milestone, you can update the run date of the corresponding invoice schedule item to a specific date from blank to collect payment from your customer.
