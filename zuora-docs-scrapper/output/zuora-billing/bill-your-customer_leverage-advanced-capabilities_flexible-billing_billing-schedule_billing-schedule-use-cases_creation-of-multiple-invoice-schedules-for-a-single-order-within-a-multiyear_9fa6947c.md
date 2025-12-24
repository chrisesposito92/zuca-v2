---
title: "Create multiple invoice schedules for a single order within a multiyear contract through the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/creation-of-multiple-invoice-schedules-for-a-single-order-within-a-multiyear-contract/create-multiple-invoice-schedules-for-a-single-order-within-a-multiyear-contract-through-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:13.011Z"
---

# Create multiple invoice schedules for a single order within a multiyear contract through the Zuora UI

Create percentage-based invoice schedules for professional services during milestone billing using the Zuora UI.

To create percentage-based invoice schedules for professional services during milestone billing through the Zuora UI, perform the following steps:

1.  In the upper right of the corresponding order details page, click Create Invoice Schedule . The Create Invoice Schedule page is displayed.
2.  In the Basic Information section, specify the subscriptions you want to bill in the invoice schedule.
    1.  Click the "Select Subscriptions or Charges" link next to the order number displayed in the Order Number field.
    2.  In the Change Subscriptions dialog, select the checkboxes next to the number of each subscription to bill in the invoice schedule, and then clear the checkbox next to the number of each subscription you want to exclude from the invoice schedule. In this example, only select the checkboxes next to subscriptions S-00000001 and S-00000002.
    3.  Click Done to save the subscription number changes. The number of each selected subscription is displayed under the Specific Order Subscriptions field. In this example, subscriptions S-00000001 and S-00000002 are displayed.
3.  In the Schedule Items section, configure information about schedule items contained in the invoice schedule:
    1.  Click Add Item With Amount .
    2.  In the Add New Schedule Item dialog, configure information about item schedule 1.

        1.  In the Run Date field, set the invoice date to 01/01/2023 .

        2.  In the Amount field, specify the amount to be billed during the processing of the invoice schedule item. In this example, enter 1000 .

        3.  Click Save to save the invoice schedule item information.


    3.  Click Add Schedule Item
    4.  In the Add New Schedule Item dialog, configure information about item schedule 2.

        1.  In the Run Date field, set the invoice date to 11/01/2023 .

        2.  In the Amount field, specify the amount to be billed during the processing of the invoice schedule item. In this example, enter 1400.

        3.  Click Save to save the invoice schedule item information.


4.  In the upper right of the Create Invoice Schedule page, click Create Invoice Schedule .
5.  In the displayed Confirmation dialog, click Yes to confirm invoice schedule creation.

Invoice schedule IS-00000001 is created to bill subscriptions S-00000001 and S-00000002, containing two invoice schedule items.

You can follow the preceding procedure to create invoice schedule IS-00000002 for subscriptions S-00000003 and S-00000004, with the following major differences:

-   Subscription selection: Select subscriptions S-00000003 and S-00000004 to bill in this invoice schedule for the second year.

-   Schedule item configuration: Specify two invoice schedule items, one with the billed amount of $500 on 1 January 2024 and the other with the billed amount of $1,300 on 1 October 2024.


The following table lists the information on the invoice schedules that are created:

| Invoice schedule | Invoice schedule item | Run date | Amount | Billed amount | Schedule item status | Billing document |
| --- | --- | --- | --- | --- | --- | --- |
| IS-00000001 | 1 | 01/01/2023 | $1,000.00 | - | Pending | - |
| 2 | 11/01/2023 | $14,000.00 | - | Pending | - |  |
| IS-00000002 | 1 | 01/01/2024 | $5,000.00 | - | Pending | - |
| 2 | 10/01/2024 | $13,000.00 | - | Pending | - |  |
