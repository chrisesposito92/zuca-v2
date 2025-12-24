---
title: "Create multiple invoice schedules for individual charges and generate consolidated invoices through the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/creation-of-multiple-invoice-schedules-for-individual-charges-and-generate-consolidated-invoices/create-multiple-invoice-schedules-for-individual-charges-and-generate-consolidated-invoices-through-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:23.145Z"
---

# Create multiple invoice schedules for individual charges and generate consolidated invoices through the Zuora UI

Create and manage multiple invoice schedules for specific charges using the Zuora UI to generate consolidated invoices.

To specify specific charges to be billed through invoice schedules through the Zuora UI to meet business requirements, perform the following steps:

1.  In the upper right of the corresponding order details page, click Create Invoice Schedule . The Create Invoice Schedule page is displayed.
2.  In the Basic Information section, specify the charges you want to bill in the invoice schedule.
    1.  Click the "Select Subscriptions or Charges" link next to the order number displayed in the Order Number field.
    2.  In the Change Subscriptions dialog, expand the arrow next to subscription S-00000001, and then clear the checkbox next to the number of the charges you want to exclude from the invoice schedule. For the first invoice schedule in this example, only select the checkbox next to the Annual Platform Fee charge.
    3.  Click Done to save the charge number changes. The number of the selected charge is displayed under the Specific Order Subscriptions field. In this example, charge C-00000001 is displayed.
3.  In the Additional Information section, select No from the Invoice Separately list to ensure that one consolidated invoice is generated during the processing of invoice schedule items with the same invoice date.
4.  In the Schedule Items section, configure information about schedule items contained in the invoice schedule:
    1.  Click Add Item With Amount .
    2.  In the Add New Schedule Item dialog, configure information about schedule item 1.

        1.  In the Name field, specify a name for the schedule item, for example, Annual Platform Fee | Year 1.

        2.  In the Run Date field, set the invoice date to 12 /01/2023 .

        3.  In the Amount field, specify the amount to be billed during the processing of the invoice schedule item. In this example, enter 50000 .

        4.  Click Save to save the invoice schedule item information.


    3.  Click Add Schedule Item .
    4.  In the Add New Schedule Item dialog, configure information about schedule item 2.

        1.  In the Name field, specify a name for the schedule item, for example, Annual Platform Fee | Year 2.

        2.  In the Run Date field, set the invoice date to 12/01/2024 .

        3.  In the Amount field, specify the amount to be billed during the processing of the invoice schedule item. In this example, enter 50000 .

        4.  Click Save to save the invoice schedule item information.


    5.  Click Add Schedule Item .
    6.  In the Add New Schedule Item dialog, configure information about schedule item 3.

        1.  In the Name field, specify a name for the schedule item, for example, Annual Platform Fee | Year 3.

        2.  In the Run Date field, set the invoice date to 12/01/2025 .

        3.  In the Amount field, specify the amount to be billed during the processing of the invoice schedule item. In this example, enter 50000 .

        4.  Click Save to save the invoice schedule item information.


5.  In the upper right of the Create Invoice Schedule page, click Create Invoice Schedule .
6.  In the displayed Confirmation dialog, click Yes to confirm invoice schedule creation.

Invoice schedule IS-0000001 is created to bill the three-year annual platform fee, containing three invoice schedule items, one for each year.

You can follow the preceding procedure to create invoice schedules for charges C-00000002 and C-00000003, with the following major differences:

-   Charge selection: Select charge C-00000002 for the second invoice schedule and C-00000003 for the third invoice schedule.

-   Schedule item configuration: Specify two invoice schedule items for the second invoice schedule and four for the third invoice schedule.


The following table lists the information on the invoice schedules that are created:

| Invoice schedule | Invoice schedule item | Name | Run date | Amount | Billed amount | Schedule item status | Billing document |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IS-00000001 | 1 | Annual Platform Fee \| Year 1 | 12/01/2023 | $50,000.00 | - | Pending | - |
| 2 | Annual Platform Fee \| Year 2 | 12/01/2024 | $50,000.00 | - | Pending | - |  |
| 3 | Annual Platform Fee \| Year 3 | 12/01/2025 | $50,000.00 | - | Pending | - |  |
| IS-00000002 | 1 | First Time Verification Fee \| Milestone 1 | 12/01/2023 | $1,000,000.00 | - | Pending | - |
| 2 | First Time Verification Fee \| Milestone 2 | 05/01/2024 | $1,000,000.00 | - | Pending | - |  |
| IS-00000003 | 1 | Ongoing Verification Fee \| Milestone 1 | 06/01/2024 | $250,000.00 | - | Pending | - |
| 2 | Ongoing Verification Fee \| Milestone 2 | 09/01/2024 | $250,000.00 | - | Pending | - |  |
| 3 | Ongoing Verification Fee \| Milestone 3 | 12/01/2024 | $250,000.00 | - | Pending | - |  |
| 4 | Ongoing Verification Fee \| Milestone 4 | 03/01/2025 | $250,000.00 | - | Pending | - |  |
