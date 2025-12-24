---
title: "Create standalone invoices through the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/standalone-invoices-creation/create-standalone-invoices-through-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T18:40:06.097Z"
---

# Create standalone invoices through the Zuora UI

Learn how to create a standalone invoice through the Zuora UI by following a step-by-step process, including navigating customer accounts, configuring invoice details, and adding charges.

To create a standalone invoice through the Zuora UI, perform the following steps:

1.  Navigate to .
2.  On the All Customer Accounts page, click the account that you want to create a standalone invoice for.
3.  On the account details page, click Create Invoice.

    The Create Invoice page is displayed.

4.  In the Basic Information area, configure the following information:
    1.  In the Invoice Date field, specify the date that is displayed on the invoice to be created. The default date is today.
    2.  Optional: In the Due Date field, specify the date when the payment for the invoice is due. If this field is left blank, Zuora calculates it for you by using the Invoice Date and the Payment Term on the account.
5.  Optional: In the Additional Information area, specify values for Invoice custom fields; in the Comments area, enter comments for this invoice.
6.  Scroll down to the Add Products and Charges area to add charges.

    -   If you already have the one-time charge in the Product Catalog, click Search Existing Products , and go to Step 7 and 8, and then Step 10. The Search Existing Products button is available only if you have the Create Standalone Invoice With Product Catalog billing permission. For more information, see Billing Roles .

    -   If no one-time charge exists in the Product Catalog, click Create New Charge , and go to Step 9 and then Step 10. The Create New Charge button is available only if you have the Create Standalone Invoice Without Product Catalog billing permission. For more information, see Billing Roles .


7.  In the Add a Charge to the Invoice window that opens, complete the following steps:
    1.  Search for and locate the product rate plan charge that you want to create the invoice for. You can use the drop-down list to select whether to search by product name or by product SKU. The displayed products dynamically change as you type in the search bar.
    2.  In the displayed products, browse by to find the product rate charge that you want to create the invoice for.
    3.  Click Add next to the name of the product rate plan charge.

        -   If the product rate plan charge uses flat fee or per unit charge model, the price and quantity are automatically populated. In case the selected charge has a price in multiple activated currencies, only the price in the currency that matches the corresponding account currency is populated. If no such match exists, you need to manually enter the price.


8.  In the Create a New Charge window that opens, configure the following information:
    1.  In the Basic Information area, configure the following information:

        -   In the Charge Date field, specify the date of the charge.

        -   Optional: In the Description field, enter a description of the charge.

        -   Optional: In the Purchase Order Number field, enter the number of the purchase order.


    2.  In the Service Period area, configure the following information:

        -   In the Start Date period, specify the start date of the service period for the item.

        -   Optional: In the End Date period, specify the end date of the service period for the item.


    3.  In the Pricing area, configure the following information:

        -   In the Price (Currency) field, enter the unit price of the service that you purchase.

        -   In the Quantity field, enter the quantity of the service that you purchase.


    4.  Optional: In the Finance area, configure the following information:

        -   From the Rev. Recognition Rule list, select a revenue recognition rule governing the revenue schedule.

        -   From the Recognized Rev. Acc. Code list, select an accounting code for the recognized revenue.

        -   From the Deferred Rev. Acc. Code list, select an accounting code for the deferred revenue.


    5.  Optional: In the Revenue area, select an option for each of the following accounting types:

        -   From the Contract Asset list, select an accounting code for contract assets.

        -   From the Adjustment Liability list, select an accounting code for adjustment liability.

        -   From the Contract Liability list, select an accounting code for contract liability.

        -   From the Recognized Revenue list, select a recognized revenue accounting code associated with the invoice item.

        -   From the Unbilled Receivables list, select an accounting code for unbilled receivables.

        -   From the Adjustment Revenue list, select an accounting code for adjustment revenue.


    6.  Optional: In the Additional Information area, specify values for Invoice Item custom fields.
    7.  Click Save to save the configurations.
9.  In the Create a New Charge window that opens, configure the following information:
    1.  In the Basic Information area, configure the following information:

        -   In the Charge Name field, specify the name of the charge.

        -   Optional: In the Charge Date field, specify the date of the charge. The default date is today.

        -   Optional: In the SKU field, enter the SKU number of the charge.

        -   Optional: In the UOM field, specify the unit of measures for the charge.

        -   Optional: In the Description field, enter a description of the charge.

        -   Optional: In the Purchase Order Number field, enter the number of the purchase order.


    2.  In the Service Period area, configure the following information:

        -   In the Start Date period, specify the start date of the service period for the item.

        -   Optional: In the End Date period, specify the end date of the service period for the item.


    3.  In the Pricing area, configure the following information:

        -   In the Price (Currency) field, enter the unit price of the item.

        -   In the Quantity field, enter the quantity of the item.


    4.  Optional: In the Tax area, specify whether a given line item is taxable. If taxable, select a corresponding tax code and a tax mode on the charge. Otherwise, leave both fields blank; Zuora calculates tax amounts when you submit the invoice creation request.

        -   From the Tax Mode list, select a tax mode for the item.

        -   From the Tax Code list, select a tax code for the item.


    5.  Optional: In the Finance area, configure the following information:

        -   From the Rev. Recognition Rule list, select a revenue recognition rule governing the revenue schedule.

        -   From the Recognized Rev. Acc. Code list, select an accounting code for the recognized revenue.

        -   From the Deferred Rev. Acc. Code list, select an accounting code for the deferred revenue.


    6.  In the Revenue area, select an option for each of the following accounting types:

        Note: You must configure default values under the Manage Non-Subscription Items setting to generate a revenue schedule for standalone invoices.

        -   From the Contract Asset list, select an accounting code for contract assets.

        -   From the Adjustment Liability list, select an accounting code for adjustment liability.

        -   From the Contract Liability list, select an accounting code for contract liability.

        -   From the Recognized Revenue list, select a recognized revenue accounting code associated with the invoice item.

        -   From the Unbilled Receivables list, select an accounting code for unbilled receivables.

        -   From the Adjustment Revenue list, select an accounting code for adjustment revenue.


    7.  Optional: In the Additional Information area, specify values for the Invoice Item custom fields.
    8.  Click Save to save the configurations.
10.  On the Create New Invoice page, click Create Invoice to complete invoice creation. If you want to post the invoice while creating it, click Create & Post Invoice .

A standalone invoice is created, and the invoice details page is displayed upon invoice creation.

You can add up to 20 line items to a standalone invoice, and Zuora calculates the invoice subtotal amount for you.
