---
title: "Create percentage-based invoice schedules during milestone billing through the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/creation-of-percentage-based-invoice-schedules-for-professional-services-during-project-milestone-billing/create-percentage-based-invoice-schedules-during-milestone-billing-through-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:05.503Z"
---

# Create percentage-based invoice schedules during milestone billing through the Zuora UI

Learn how to create percentage-based invoice schedules for professional services during milestone billing using the Zuora UI.

To create percentage-based invoice schedules for professional services during milestone billing through the Zuora UI, perform the following steps:

1.  In the upper right of the corresponding order details page, click Create Invoice Schedule . The Create Invoice Schedule page is displayed.
2.  In the Basic Information section, specify the charges you want to bill in the invoice schedule.
    1.  Click the "Select Subscriptions or Charges" link next to the order number displayed in the Order Number field.
    2.  In the Change Subscriptions dialog, expand the arrow next to subscription S-00000001, and then clear the checkbox next to the number of the charges you want to exclude from the invoice schedule. In this example, only select the checkbox next to the Software A Integration - Professional Service charge.
    3.  Click Done to save the charge number changes. The number of the selected charge is displayed under the Specific Order Subscriptions field. In this example, charge C-00000003 is displayed.
3.  In the Schedule Items section, configure information about schedule items contained in the invoice schedule:
    1.  Click Add Item With Percentage .
    2.  In the Add New Schedule Item dialog, configure schedule item information.

        1.  Optional: In the Name field, specify the name of the invoice schedule item, for example, HTD .

        2.  In the Run Date field, leave the value blank since the HTD date is unclear.

        3.  In the Percentage field, specify the percentage of the total amount to be billed during the processing of the invoice schedule item. In this example, enter 50 .

        4.  Click Save to save the invoice schedule item information.


    3.  Click Add Schedule Item , and then repeat step 3.b to add one more invoice schedule item that also has 50 as the value of the Percentage field.
4.  In the upper right of the Create Invoice Schedule page, click Create Invoice Schedule .
5.  In the displayed Confirmation dialog, click Yes to confirm invoice schedule creation.

    Invoice schedule IS-0000001 is created to bill charge C-00000003, containing two invoice schedule items, each covering 50% of the total charge amount.

    You can follow the preceding procedure to create invoice schedule IS-0000002 for charge C-00000004, with the following major differences:

    -   Charge selection: Select charge C-00000004 to bill in this invoice schedule.

    -   Schedule item configuration: Specify three invoice schedule items, covering 20%, 30%, and 50% of the total amount.


    The following table lists the information on the invoice schedules:

    | Invoice schedule | Invoice schedule item | Name | Run date | Percentage | Actual amount, automatically calculated |
    | --- | --- | --- | --- | --- | --- |
    | IS-0000001 | 1 | HTD |  | 50% | $33,000.00 |
    | 2 | GLD |  | 50% | $33,000.00 |  |
    | IS-0000002 | 1 | HTD |  | 20% | $54,000.00 |
    | 2 | RFU |  | 30% | $81,000.00 |  |
    | 3 | GLD |  | 50% | $135,000.00 |  |
