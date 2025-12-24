---
title: "Group order line items"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/configure-to-display-order-line-item-information-on-invoices/group-order-line-items"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:05.736Z"
---

# Group order line items

Learn how to group order line items in HTML templates using the GroupBy function for debit memos.

You can use the `GroupBy` function to group order line items in HTML templates. For more information about the `GroupBy` function, see Use GroupBy function .

Assume that you want to display order line item information on debit memos and order line items grouped by their Sold To Contact.

To configure HTML templates to group order line items by their Sold To Contact on debit memos, perform the following steps:

1.  Create an HTML template where you choose the starter template called Basic from the debit memo template library.
2.  In the online HTML template editor, click the HTML block for the charge details table. The Content panel is displayed on the right of the template editor.
3.  In the HTML section, enter the HTML source code into the HTML editor, and modify the code as follows.

    {{#DebitMemo}} <!-- Group order line items by sold to contact --> {{#DebitMemoItems|Map(InvoiceItem)|Uniq|FilterByValue(SourceItemType,EQ,OrderLineItem)|GroupBy(OrderLineItem.SoldTo)}} {{Cmd\_Assign(ByOrderLineItemSoldTo,\_Group)}} <!-- Not display sold to contact and table header if the group is empty --> {{#ByOrderLineItemSoldTo|First(1)}} <!-- The merge field path is InvoiceItem.Invoice.Account --> {{#Invoice.Account.Contacts|FilterByRef(Id,EQ,OrderLineItem.SoldTo)}} <div style="background-color:grey;"\> <b>Shipped To: </b>{{FirstName}} {{LastName}}, {{Address1}} {{Address2}}, {{City}}, {{State}} {{PostalCode}} </div> {{/Invoice.Account.Contacts|FilterByRef(Id,EQ,OrderLineItem.SoldTo)}} <table class="table-grid u\_content\_custom\_generic\_table\_1"\> <thead><tr> <th style="width:auto; "\> SKU </th> <th style="width:auto; "\> ChargeName </th> <th style="width:auto; "\> Service Period </th> <th style="width:auto; "\> Backorder Qty </th> <th style="width:auto; "\> Shipped Qty </th> <th style="width:auto; "\> UOM </th> <th style="width:auto; "\> UnitPrice </th> <th style="width:auto; "\> ChargeAmount </th> </tr> </thead> <tbody> {{/ByOrderLineItemSoldTo|First(1)}} <!-- Loop the group --> {{#ByOrderLineItemSoldTo}} <tr> <td style=" "\>{{SKU}}</td> <td style=" "\>{{ChargeName}}</td> <td style=" "\>{{ServiceStartDate|Localise}} - {{ServiceEndDate|Localise}}</td> <td style=" "\>{{OrderLineItem.QuantityPendingFulfillment}}</td> <td style=" "\>{{OrderLineItem.QuantityFulfilled}}</td> <td style=" "\>{{UOM}}</td> <td style=" "\>{{UnitPrice}}</td> <td style="text-align:right; "\>{{ChargeAmount|Round(2)|Localise}}</td> </tr> {{/ByOrderLineItemSoldTo}} </tbody> </table> <br/> {{/DebitMemoItems|Map(InvoiceItem)|Uniq|FilterByValue(SourceItemType,EQ,OrderLineItem)|GroupBy(OrderLineItem.SoldTo)}} {{/DebitMemo}}

4.  In the HTML template editor, click Save to save the HTML template.
5.  Click Preview to switch to the Preview mode to preview a debit memo using the HTML template .

The displayed HTML template changes to an invoice PDF file with actual data for you to preview. If a debit memo item is generated from an order line item, information about the grouped order line item is displayed in the associated column of the corresponding debit memo item row.

If a debit memo item is not created from any order line item, information is displayed blank for the corresponding debit memo item.
