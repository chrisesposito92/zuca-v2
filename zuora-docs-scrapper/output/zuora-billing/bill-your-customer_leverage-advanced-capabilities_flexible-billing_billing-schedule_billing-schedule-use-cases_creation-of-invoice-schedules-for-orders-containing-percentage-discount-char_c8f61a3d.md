---
title: "Create percentage-based invoice schedules for orders containing percentage discount charges through the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/creation-of-invoice-schedules-for-orders-containing-percentage-discount-charges/create-percentage-based-invoice-schedules-for-orders-containing-percentage-discount-charges-through-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T18:34:55.223Z"
---

# Create percentage-based invoice schedules for orders containing percentage discount charges through the Zuora UI

Create percentage-based invoice schedules for orders with discount charges using the Zuora UI.

To create percentage-based invoice schedules for orders containing percentage discount charges during milestone billing through the Zuora UI, perform the following steps. The following steps use data from Use Case 1.

1.  In the upper right of the corresponding order details page, click Create Invoice Schedule . The Create Invoice Schedule page is displayed.
2.  In the Basic Information section, specify the charges you want to bill in the invoice schedule.
    1.  Click the "Select Subscriptions or Charges" link next to the order number displayed in the Order Number field.
    2.  In the Change Subscriptions dialog, expand the arrow next to subscription S-00000001, and clear the checkbox next to the number of the charges you want to exclude from the invoice schedule. In this example, only select the checkbox next to the Software B Implementation - Professional Service charge.
    3.  Click Done to save the charge number changes. The number of the selected charge is displayed under the Specific Order Subscriptions field. In this example, charge C-00000004 is displayed.
3.  In the Schedule Items section, configure information about schedule items contained in the invoice schedule:
    1.  Click Add Item With Percentage .
    2.  In the Add New Schedule Item dialog, configure schedule item information.

        1.  Optional: In the Name field, specify the name of the invoice schedule item, for example, HTD .

        2.  In the Run Date field, leave the value blank since the HTD date is unclear.

        3.  In the Percentage field, specify the percentage of the total amount to be billed during the processing of the invoice schedule item. In this example, enter 10 .

        4.  Click Save to save the invoice schedule item information.


    3.  Click Add Schedule Item , and then repeat step 3.b to add two more invoice schedule items that respectively have 20 and 70 as the value of the Percentage field.
4.  In the upper right of the Create Invoice Schedule page, click Create Invoice Schedule .
5.  In the displayed Confirmation dialog, click Yes to confirm invoice schedule creation.

    Invoice schedule IS-0000001 is created to bill charge C-00000004, containing three invoice schedule items, respectively covering 10%, 20%, and 70% of the total amount.

    The total amount involved in invoice schedule IS-0000001 is calculated based on the following formula:

    Billed charge amount × (1 - Discount percentage)

    Therefore, the actual amount involved in invoice schedule IS-0000001 is $21,600.00, the calculation result of $27,000.00 × (1 - 20%).

    The following table lists the information on the invoice schedules.

    | Invoice schedule | Invoice schedule item | Name | Run date | Percentage | Amount | Discount amount | Actual amount, automatically calculated |
    | --- | --- | --- | --- | --- | --- | --- | --- |
    | IS-0000001 | 1 | HTD | - | 10% | $2,160.00 |  | $2,160.00 |
    | 2 | RFU | - | 20% | $4,320.00 |  | $4,320.00 |  |
    | 3 | GLD | - | 70% | $15,120.00 |  | $15,120.00 |  |
    | Total Amount: $21,600.00 |  |  |  |  |  |  |  |
