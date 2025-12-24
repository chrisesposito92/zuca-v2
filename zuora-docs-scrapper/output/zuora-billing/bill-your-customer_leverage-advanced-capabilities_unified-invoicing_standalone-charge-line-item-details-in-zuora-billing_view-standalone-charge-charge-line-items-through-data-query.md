---
title: "View standalone charge charge line items through Data Query"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/standalone-charge-line-item-details-in-zuora-billing/view-standalone-charge-charge-line-items-through-data-query"
product: "zuora-billing"
scraped_at: "2025-12-24T18:40:57.017Z"
---

# View standalone charge charge line items through Data Query

Learn how to view detailed information about standalone charge line items using Data Query after creating an invoice.

After a standalone invoice or consolidated invoice is created, you can view detailed information about standalone charge line items through the Data Query.

You can also use Data Query to view detailed information about standalone charge line items.

To view detailed information about standalone charge line items through Data Query , perform the following steps:

1.  Navigate to .
2.  On the Data Query page, click Create New Data Query.
3.  On the Create Data Query page, enter a SQL query into the text box.

    For example:SELECT \* FROM invoiceitem ii, invoice inv WHERE ii.invoiceid = inv.id AND inv.InvoiceNumber = 'INV00001508' AND inv.AccountId = '2c92c8fb7ae2ed67017ae5c126a361ea'

    After the sample data query request is submitted, the following query result is returned:

    { "accountid": \[ "2c92c8fb7ae2ed67017ae5c126a361ea", "2c92c8fb7ae2ed67017ae5c126a361ea" \], "accountingcode": "", "updateddate": \[ "2021-07-26T19:38:59-07:00", "2021-07-26T19:38:59-07:00" \], "itemtype": null, "invoicedetails\_text\_optional\_\_c": null, "productid": null, "chargeamount": 10, "taxamount": \[ 0, 0 \], "invoicedetails\_picklist\_optional\_\_c": null, "createdbyid": \[ "2c92c8fe78a9a0740178a9b0b06c007a", "2c92c8fe78a9a0740178a9b0b06c007a" \], "revrecstartdate": null, "revenuerecognitionrulename": "Recognize upon invoicing", "defaultpaymentmethodid": null, "taxmode": "TaxExclusive", "billtocontactsnapshotid": \[ null, null \], "amendmentid": null, "serviceenddate": null, "productrateplanid": null, "chargename": "Consulting service", "recognizedrevenueaccountingcodeid": null, "soldtocontactsnapshotid": \[ null, null \], "revrectriggercondition": null, "invoicedetails\_date\_required\_\_c": null, "rateplanid": null, "productrateplanchargeid": "2c92c8fb7ac2863a017ac2cef11c1bb2", "bookingreference": null, "createddate": \[ "2021-07-26T19:38:59-07:00", "2021-07-26T19:38:59-07:00" \], "invoicedetails\_text\_required\_default\_\_c": "Invoice Details Default Text", "id": \[ "2c92c8fb7ae2ed7b017ae5d464ac693c", "2c92c8fb7ae2ed7b017ae5d4647d693b" \], "balance": \[ 10, 10 \], "soldtocontactid": "2c92c8fb7ae2ed67017ae5c1270e61eb", "description": "", "invoicedetails\_picklist\_required\_default\_\_c": "invItem\_first", "invoiceid": "2c92c8fb7ae2ed7b017ae5d4647d693b", "subscriptionid": null, "taxcode": "", "servicestartdate": "2021-07-27", "taxexemptamount": \[ 0, 0 \], "journalentryid": null, "parentaccountid": null, "appliedtoinvoiceitemid": null, "purchaseordernumber": "", "rateplanchargeid": null, "revreccode": null, "updatedbyid": \[ "2c92c8fe78a9a0740178a9b0b06c007a", "2c92c8fe78a9a0740178a9b0b06c007a" \], "deferredrevenueaccountingcodeid": null, "quantity": 1, "billtocontactid": "2c92c8fb7ae2ed67017ae5c1270e61eb", "chargedate": "2021-07-27T00:00:00-07:00", "uom": "", "unitprice": 10, "processingtype": "0", "sku": "SKU-00000553", "invoicedetails\_date\_optional\_\_c": null, "accountreceivableaccountingcodeid": "2c92c8fb78cab6260178cf845e9d3d85", "includesrecurring": true, "invoice\_date\_required\_\_c": null, "sourceid": null, "transferredtoaccounting": null, "invoice\_picklist\_optional\_\_c": "inv\_first", "taxmessage": null, "paymentamount": 0, "source": "API", "postedby": null, "adjustmentamount": 0, "invoicedate": "2021-07-27", "invoicenumber": "INV00001508", "duedate": "2021-08-26", "syncdate\_\_ns": null, "lastemailsentdate": null, "status": "Draft", "invoice\_text\_required\_default\_\_c": "Invoice Default Text", "comments": "", "amount": 10, "includesusage": true, "integrationstatus\_\_ns": null, "refundamount": 0, "autopay": false, "invoice\_text\_optional\_\_c": null, "entity\_\_c": "STD", "invoicenumber\_\_c": null, "reversed": false, "targetdate": null, "includesonetime": true, "integrationid\_\_ns": null, "posteddate": null, "taxstatus": "Complete", "invoice\_picklist\_required\_default\_\_c": "inv\_first", "amountwithouttax": 10, "creditbalanceadjustmentamount": 0, "invoice\_date\_optional\_\_c": null }
