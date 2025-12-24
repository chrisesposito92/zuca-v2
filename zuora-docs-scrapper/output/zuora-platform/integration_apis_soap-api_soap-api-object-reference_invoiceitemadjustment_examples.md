---
title: "Examples"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoiceitemadjustment/examples"
product: "zuora-platform"
scraped_at: "2025-12-24T05:41:51.413Z"
---

# Examples

The following sections provide examples of working with InvoiceItemAdjustment.

## Create an InvoiceItemAdjustment

An InvoiceItemAdjustment is used when you want to adjust a line item from an invoice. The line item can be either an InvoiceItem.

To create a $2.00 credit InvoiceItemAdjustment for an invoice line item where the Invoice Number is specified:

<soapenv:Body> <ns1:create xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:InvoiceItemAdjustment"\> <ns2:AccountingCode>test-1</ns2:AccountingCode> <ns2:AdjustmentDate>2010-02-02T12:00:00.343+08:00</ns2:AdjustmentDate> <ns2:Amount>2.00</ns2:Amount> <ns2:Comment>test</ns2:Comment> <ns2:InvoiceNumber>INV-1278576579796</ns2:InvoiceNumber> <ns2:SourceId>2c92c0855b8b091b015b8e73b90070d9</ns2:SourceId> <ns2:SourceType>InvoiceDetail</ns2:SourceType> <ns2:Type>Credit</ns2:Type> </ns1:zObjects> </ns1:create> </soapenv:Body>

To create a $5.00 credit InvoiceItemAdjustment for an taxation line item where the InvoiceId is specified:

<soapenv:Body> <ns1:create xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:InvoiceItemAdjustment"\> <ns2:AccountingCode>Accountind Code-2</ns2:AccountingCode> <ns2:AdjustmentDate>2010-02-02T12:00:00.343+08:00</ns2:AdjustmentDate> <ns2:Amount>5.00</ns2:Amount> <ns2:Comment>Adjust taxation line item</ns2:Comment> <ns2:InvoiceId>2c92c0945ab26a4f015ac69b22ba374d</ns2:InvoiceId> <ns2:SourceId>2c92c0945e9da8ef015ea260b78e7b93</ns2:SourceId> <ns2:SourceType>Tax</ns2:SourceType> <ns2:Type>Credit</ns2:Type> </ns1:zObjects> </ns1:create> </soapenv:Body>

## Cancel an InvoiceItemAdjustment

You can cancel an InvoiceItemAdjustment programmatically by updating its status to `canceled` .

<ns1:update xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:InvoiceItemAdjustment"\> <ns2:Id>402892df29b11b9f0129b11c75150008</ns2:Id> <ns2:Status>Canceled</ns2:Status> </ns1:zObjects> </ns1:update>
