---
title: "Create invoice schedules on new orders"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-tutorials/invoice-schedules-creation/create-invoice-schedules-on-new-orders"
product: "zuora-billing"
scraped_at: "2025-12-24T18:33:54.114Z"
---

# Create invoice schedules on new orders

Learn how to create invoice schedules for new orders using the Zuora UI, including configuring schedule items and additional subscriptions.

To create an invoice schedule on a new order through the Zuora UI, perform the following steps:

1.  Create a subscription by creating an order where the subscription term is set to be one or more years.
2.  In the upper right of the order details page, click Create Invoice Schedule . The Create Invoice Schedule page is displayed.
3.  In the Additional Information section, configure more information about the invoice schedule:
    1.  From the Invoice Separately list, select an option to specify whether the invoice items created from the invoice schedule appear on a separate invoice when Zuora generates invoices. For more information, see Consolidate unbilled charges after switching from invoice schedules to standard billing process .
    2.  Optional: In the Notes text box, enter a comment on the invoice schedule.
    3.  If you have created custom fields on the Invoice Schedule object, configure the custom fields.
4.  Optional: In the Additional Subscriptions section, configure information about the subscriptions that are excluded from the order and that you want to bill in the invoice schedule. Note that the owner of additional subscriptions must be the same as the one who owns the subscriptions included in the order. Otherwise, the additional subscriptions will not be billed. If you add any additional subscription, the Target Date column appears in each row of the Schedule Items section. For more information about how to configure additional subscriptions and billing target dates, see Bill subscriptions early from standard billing process to billing schedules .
5.  In the Schedule Items section, configure information about schedule items contained in the invoice schedule:
    1.  Optional: In the Name field, specify the name of the invoice schedule item.
    2.  In the Run Date field, specify the date when the invoice is generated, or click the calendar icon to choose a date. Note that the date must be later than the current date. If you are uncertain about when to execute the invoice schedule item, you can leave the run date blank. For more information, see Specify blank invoicing dates for custom invoice schedules during milestone billing schedules .
    3.  In the Amount field, specify the amount of the invoice to be generated during the processing of the invoice schedule item.
    4.  In the Target Date field, configure the date in the tenant's time zone used by the invoice schedule to determine which fixed-period regular charges to be billed together with the invoice schedule item.
    5.  Click \+ Add , and then repeat steps 5.a and 5.d to add more invoice schedule items, until the total amount of all items equals the total amount of the order displayed in the Basic Information section.
6.  In the upper right of the Create Invoice Schedule page, click Create Invoice Schedule.
7.  In the displayed Confirmation dialog, click Yes to confirm invoice schedule creation.

A custom invoice schedule is created with the specified number of invoice schedule items for the order.
