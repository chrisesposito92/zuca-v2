---
title: "Create invoice schedules on specific subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-tutorials/invoice-schedules-creation/create-invoice-schedules-on-specific-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T18:33:58.889Z"
---

# Create invoice schedules on specific subscriptions

Create invoice schedules for specific subscriptions using the Billing Schedule feature, allowing flexibility in billing periods.

With the Billing Schedule feature, you have the flexibility to create invoice schedules for the subscriptions eligible for creating invoice schedules while billing the other subscriptions not eligible for creating invoice schedules.

For example, if an order contains several subscriptions with different billing periods, you can create an invoice schedule on specific subscriptions with the Annual billing period, and bill the subscription charges with the Quarter billing period in the normal quarterly schedule.

To create an invoice schedule on specific subscriptions through the Zuora UI, perform the following steps:

1.  In the left navigation section, navigate to Customers > Orders .
2.  On the Orders page, click the number of the order that you want to create an invoice schedule for.
3.  In the upper right of the order details page, click Create Invoice Schedule . The Create Invoice Schedule page is displayed.
4.  In the Basic Information section of the Create Invoice Schedule page, edit the orders and subscriptions that are associated with the invoice schedule.
    1.  Click the "Manage orders" link next to the order number displayed in the Order Number field.
    2.  In the displayed Change Orders dialog, enter the numbers of the orders that you want to associate the invoice schedule with in the Order Numbers (separated with comma) text box.
    3.  Click Done to save the order number changes.
    4.  Click the "Specify subscriptions" link next to the order number displayed in the Order Number field.
    5.  In the displayed Change Subscriptions dialog, expand the arrow next to the number of each order, and then clear the checkbox next to the number of the subscription that you want to exclude from the invoice schedule. By default, all subscriptions in each order are selected to associate with the invoice schedule.
    6.  Click Done to save the subscription number changes. The number of each selected order and each subscription is displayed under the Specific Order Subscriptions field.
5.  In the Additional Information section, configure more information about the invoice schedule:
    1.  From the Invoice Separately list, select an option to specify whether the invoice items created from the invoice schedule appear on a separate invoice when Zuora generates invoices. For more information, see Consolidate unbilled charges after switching from invoice schedules to standard billing process .
    2.  Optional: In the Notes text box, enter a comment on the invoice schedule.
    3.  If you have created custom fields on the Invoice Schedule object, configure the custom fields.
6.  Optional: In the Additional Subscriptions section, configure information about the subscriptions that are excluded from the order and that you want to bill in the invoice schedule. Note that the owner of additional subscriptions must be the same as the one who owns the subscriptions associated with the invoice schedule. Otherwise, the additional subscriptions will not be billed. If you add any additional subscription, the Target Date column appears in each row of the Schedule Items section. For more information about how to configure additional subscriptions and billing target dates, see Bill subscriptions early from standard billing process to billing schedules .
7.  In the Schedule Items section, configure information about schedule items contained in the invoice schedule:
    1.  Click Add Schedule Item or the "Click to add a schedule item" link. The Add New Schedule Item dialog is displayed.
    2.  Optional: In the Name field, specify the name of the invoice schedule item.
    3.  In the Run Date field, specify the date when the invoice is generated, or click the calendar icon to choose a date. Note that the date must be later than the current date. If you are uncertain about when to execute the invoice schedule item, you can leave the run date blank. For more information, see Specify blank invoicing dates for custom invoice schedules during milestone billing schedules .
    4.  In the Amount field, specify the amount of the invoice to be generated during the processing of the invoice schedule item.
    5.  In the Target Date field, configure the date in the tenant's time zone used by the invoice schedule to determine which fixed-period regular charges to be billed together with the invoice schedule item.
    6.  Click Save to save the configurations.
    7.  Click Add Schedule Item and repeat steps 7.b and 7.f to add more invoice schedule items, until the total amount of all items equals the total amount of the order displayed in the Basic Information section of the invoice schedule.
8.  In the upper right of the Create Invoice Schedule page, click Create Invoice Schedule .
9.  In the displayed Confirmation dialog, click Yes to confirm invoice schedule creation.

A custom invoice schedule is created with several invoice schedule items for the specified subscriptions of existing orders.

For details about a specific use case, see Use billing schedules and standard billing process for multiyear contracts .
