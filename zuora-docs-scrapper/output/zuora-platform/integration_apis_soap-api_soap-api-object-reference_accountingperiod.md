---
title: "AccountingPeriod"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/accountingperiod"
product: "zuora-platform"
scraped_at: "2025-12-24T05:40:03.717Z"
---

# AccountingPeriod

This reference describes the SOAP API object including supported calls, required permissions, and field descriptions.

Use the AccountingPeriod object to create accounting periods. Examples are also provided.

## Accounting Periods

Accounting periods match your financial periods. Zuora aligns your transactions to your accounting periods, and shows you the history of how your business performs across multiple accounting periods. An accounting period holds the information you need to perform your company's bookkeeping activities, especially tracking and reporting financial activities such as earnings, expenses, and taxes. You create accounting periods in Z-Finance to encompass the financial transactions during your company's accounting period, then close the accounting period per your company's specified time. Closing an accounting period in Zuora is like closing the books.

You create accounting periods to close the books and report on financial activities.

## Supported Calls

You can use this object with the following calls:

-   create()

-   delete()

-   query()

-   update()


## Permissions

Access to Zuora Finance is required for all interactions.

You need the Create Accounting Period permission to update the following fields:

-   Name
-   StartDate
-   EndDate
-   Notes
-   FiscalYear
-   CustomFields

You need the Manage Close Process and Run Trial Balance permissions to update the Status field value from Open to Closed.

You need the Reopen Accounting Period permission to reopen an accounting period, which updates the Status field value from Closed to Open.

You need the Delete Accounting Period permission to delete an accounting code.

## Example: Create an accounting period

AccountingPeriod ap = new AccountingPeriod(); ap.setName(AP\_NAME); ap.setStartDate(startDate); ap.setEndDate(endDate); ap.setNotes(AP\_NOTES); ap.setFiscalYear(YEAR); create(ap);

## Example: Create an accounting period using a SOAP wrapper

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="http://api.zuora.com/" xmlns:obj="http://object.api.zuora.com/"\> <soapenv:Header> <api:SessionHeader> <api:session>{replace with your session}</api:session> </api:SessionHeader> <api:CallOptions> <!--Optional:--> <api:useSingleTransaction>?</api:useSingleTransaction> </api:CallOptions> </soapenv:Header> <soapenv:Body> <ns1:create xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:AccountingPeriod"\> <ns2:Name>apFromAPI16</ns2:Name> <ns2:StartDate>2011-08-10</ns2:StartDate> <ns2:EndDate>2011-08-10</ns2:EndDate> <ns2:Notes>ap notes from api</ns2:Notes> <ns2:FiscalYear>2011</ns2:FiscalYear> <ns2:FiscalQuarter>3</ns2FiscalQuarter> </ns1:zObjects> </ns1:create> </soapenv:Body> </soapenv:Envelope>

## Example: Query an accounting period

String zql = "select EndDate, Name, Notes, Status, StartDate, FiscalYear from AccountingPeriod where id = '402892a133d3ff8b0133d4bf63070022'"; AccountingPeriod ap = (AccountingPeriod) queryOne(zql);

## Example: Query an accounting period with a SOAP wrapper

<?xml version="1.0" encoding="http://schemas.xmlsoap.org/soap/envelope/" standalone="no"?> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Header> <ns1:SessionHeader xmlns:ns1="http://api.zuora.com/" soapenv:mustUnderstand="0"\> <ns1:session>{replace with your session}</ns1:session> </ns1:SessionHeader> </soapenv:Header> <soapenv:Body> <ns1:query xmlns:ns1="http://api.zuora.com/"\> <ns1:queryString> select id, CreatedById, CreatedDate, EndDate, Name, Notes, Status, StartDate, UpdatedById, UpdatedDate, FiscalYear, FiscalQuarter from AccountingPeriod where id = ' 4028929f33ca990b0133ca9ed8400002' </ns1:queryString> </ns1:query> </soapenv:Body> </soapenv:Envelope>

## Example: Updating an accounting period with a SOAP wrapper

<?xml version='1.0' encoding='UTF-8'?> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Header> <ns1:SessionHeader xmlns:ns1="http://api.zuora.com/" soapenv:mustUnderstand="0"\> <ns1:session>\[replace with your session\]</ns1:session> </ns1:SessionHeader> </soapenv:Header> <soapenv:Body> <ns1:update xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:AccountingPeriod"\> <ns2:Id>402892a837113da60137113ee28901a9</ns2:Id> <ns2:EndDate>2012-02-15</ns2:EndDate> <ns2:FiscalYear>2013</ns2:FiscalYear> <ns2:FiscalQuarter>1</ns2FiscalQuarter> <ns2:Name>update name</ns2:Name> <ns2:Notes>update notes</ns2:Notes> <ns2:StartDate>2012-01-15</ns2:StartDate> </ns1:zObjects> </ns1:update> </soapenv:Body> </soapenv:Envelope>

## Example: Closing an accounting period with a SOAP wrapper

<?xml version='1.0' encoding='UTF-8'?> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Header> <ns1:SessionHeader xmlns:ns1="http://api.zuora.com/" soapenv:mustUnderstand="0"\> <ns1:session>\[replace with your session\]</ns1:session> </ns1:SessionHeader> </soapenv:Header> <soapenv:Body> <ns1:update xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:AccountingPeriod"\> <ns2:Id>402892a83711418b01371142cc5801a9</ns2:Id> <ns2:Status>Closed</ns2:Status> </ns1:zObjects> </ns1:update> </soapenv:Body> </soapenv:Envelope>

## Example: Reopening an accounting period with a SOAP wrapper

<?xml version='1.0' encoding='UTF-8'?> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Header> <ns1:SessionHeader xmlns:ns1="http://api.zuora.com/" soapenv:mustUnderstand="0"\> <ns1:session>\[replace with your session\]</ns1:session> </ns1:SessionHeader> </soapenv:Header> <soapenv:Body> <ns1:update xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:AccountingPeriod"\> <ns2:Id>402892a83711442701371145625d01a9</ns2:Id> <ns2:Status>Open</ns2:Status> </ns1:zObjects> </ns1:update> </soapenv:Body> </soapenv:Envelope>
