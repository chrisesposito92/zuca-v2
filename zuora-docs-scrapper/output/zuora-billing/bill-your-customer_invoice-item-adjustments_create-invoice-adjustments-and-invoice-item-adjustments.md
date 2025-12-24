---
title: "Create Invoice Adjustments and Invoice Item Adjustments"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-item-adjustments/create-invoice-adjustments-and-invoice-item-adjustments"
product: "zuora-billing"
scraped_at: "2025-12-24T08:38:05.968Z"
---

# Create Invoice Adjustments and Invoice Item Adjustments

Learn how to create invoice adjustments and invoice item adjustments in Zuora Billing from various pages, including customer account details and billing operations.

You can add invoice adjustments and invoice item adjustments ("adjustments") from different pages within Zuora Billing.

Note:

When creating an invoice item adjustment from the Zuora UI, only 500 invoice items are listed on the invoice item adjustment page. If the invoice item you want to adjust is not listed on the page, use the SOAP InvoiceItemAdjustment object to create the adjustment.

You can create adjustments from the following locations in the Zuora application:

-   On the customer account details page, scroll down to the Transactions section and use the buttons in the Invoice Adjustments or Invoice Item Adjustments tab.

-   Navigate to or Invoice Item Adjustments to use the appropriate button.

-   Open the details page of a posted invoice, click the three vertical dots icon to display more applicable actions, and then click Create Invoice Adjustment .


The details steps are described below using an example of creating an adjustment from the Invoice Item Adjustments page.

To create an adjustment from the Billing Operations page:

1.  Navigate to Billing > Invoice Item Adjustments .
2.  Click Create Item Adjustment .
3.  Enter the following basic information.

    -   Customer Account : This is a required field. Select the customer account from the drop-down list.

    -   Invoice : This field is only visible for Invoice Item Adjustment. Select the invoice with a balance from the drop-down list.

    -   Adjustment Date : The day the adjustment is to be applied. The default value is today's date.

    -   Reason Code : The reason code for the adjustment.

    -   Reference ID : This optional field can be used to enter an ID or code that helps identify the adjustment or the reason for the adjustment and is helpful when reporting on adjustments.

    -   Exclude Item Billing From Revenue : Check this option to exclude the invoice item adjustment from revenue accounting. Note that this option is available only if you have the Billing - Revenue Integration feature enabled.

    -   Comment : You can enter comments related to this adjustment. For example, the reason for the adjustment.


4.  In the Invoice Details section, adjust invoice items that are displayed. Click edit to display more options to change.
5.  After you finish editing the invoice details, click Adjust Invoice Items .
6.  In the popup dialog, click Yes to confirm the operation.

    Note: For each line item (charge) that is adjusted, Zuora creates a corresponding line item adjustment. If there are four invoice line items on an invoice and all four invoice line items are adjusted, Zuora Billing will create four separate invoice item adjustments.

    You can reverse a previously made invoice item adjustment by creating another adjustment that counters the effect of the previous adjustment, even in a closed accounting period.

    Note:

    This feature is in the Early Adopter phase. If you want to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

    See Reverse past invoice item adjustments for more information.
