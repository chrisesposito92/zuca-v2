---
title: "AccountingCode"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/accountingcode"
product: "zuora-platform"
scraped_at: "2025-12-24T05:39:50.799Z"
---

# AccountingCode

Use the AccountingCode object to create and manage accounting codes for the Zuora Chart of Accounts.

## How accounting codes are used in Zuora

See "Assign accounting codes" for more information on how to manage accounting codes using the Zuora user interface. See "Set up chart of accounts" for additional information.

## Supported calls

You can use this object with the following calls:

-   create()

-   delete()

-   query()

-   update()


## Permissions

Permissions and use of certain fields depend on whether your tenant has access to Zuora Finance:

-   For tenants with access to Zuora Finance, you have access to all fields. Two user permissions are required and available by default to all Zuora Finance roles: Create Accounting Code and Manage Accounting Code.

-   For other tenants, you have access to the Chart of Accounts, but not to the GLAccountName and GLAccountNumber fields. User permissions to create or manage accounting codes are available only to tenants with Zuora Finance.


To delete an accounting code, you must have the Delete Unused Accounting Code permission.

Fields requiring Zuora Finance are noted in the following field descriptions table.

## Example: Create an accounting code using a SOAP wrapper

<?xml version="1.0" encoding="http://schemas.xmlsoap.org/soap/envelope/" standalone="no"?> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="http://api.zuora.com/" xmlns:obj="http://object.api.zuora.com/"\> <soapenv:Header> <api:SessionHeader> <api:session>\[replace with your session\]</api:session> </api:SessionHeader> <api:CallOptions> <api:useSingleTransaction>false</api:useSingleTransaction> </api:CallOptions> </soapenv:Header> <soapenv:Body> <api:create> <api:zObjects xsi:type\="ns381:AccountingCode" xmlns:ns381="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\> ​ <ns381:Name>012456789012345</ns381:Name> <ns381:Type>OtherLiabilities</ns381:Type> <ns381:GLAccountNumber>123</ns381:GLAccountNumber> <ns381:GLAccountName>123GLName</ns381:GLAccountName> <ns381:Notes>AnyNote</ns381:Notes> </api:zObjects> </api:create> </soapenv:Body> </soapenv:Envelope>

## Example: Update an accounting code with a SOAP wrapper

<?xml version="1.0" encoding="http://schemas.xmlsoap.org/soap/envelope/" standalone="no"?> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="http://api.zuora.com/" xmlns:obj="http://object.api.zuora.com/"\> <soapenv:Header> <api:SessionHeader> <api:session>\[replace with your session\]</api:session> </api:SessionHeader> </soapenv:Header> <soapenv:Body> <api:update> <api:zObjects xsi:type\="ns381:AccountingCode" xmlns:ns381="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\> <obj:Id>2c9081fb407eec5201407f4d187c0003</obj:Id> <ns381:Name>YourAccountingCodeName</ns381:Name> </api:zObjects> </api:update> </soapenv:Body> </soapenv:Envelope>

## Example: Query an accounting code with a SOAP wrapper

<?xml version='1.0' encoding='UTF-8'?> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="http://api.zuora.com/"\> <soapenv:Header> <api:SessionHeader> <api:session>\[replace with your session\]</api:session> </api:SessionHeader> </soapenv:Header> <soapenv:Body> <api:query> <api:queryString>select Id, UpdatedDate, Name from AccountingCode where status = 'Active'</api:queryString> </api:query> </soapenv:Body> </soapenv:Envelope>
