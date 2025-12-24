---
title: "Example: Create an export"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/export/example-create-an-export"
product: "zuora-platform"
scraped_at: "2025-12-24T05:41:02.514Z"
---

# Example: Create an export

Demonstrates how to use the Zuora Export object to conveniently query and access data that is joined with other objects.

When you export data from Zuora, each exported file is available for download for 7 days. Export objects older than 90 days are automatically deleted.

## Create an example

1.  Use create() to create an Export object, specifying which fields are to be in the Export.

2.  Specify the fields to be included with Export ZOQL (which differs slightly from the Z-Commerce API ZOQL):<ns1:create xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:Export"\> <ns2:format>csv</ns2:format> <ns2:name>My Export</ns2:name> <ns2:query>SELECT Account.Name, BillToContact.WorkEmail FROM Account</ns2:query> <ns2:zip>True</ns2:zip> </ns1:zObjects> </ns1:create>

3.  This will return the `Export.Id` . Using this value, query for the status of the of the created Export: `SELECT status, fileId, Query, size FROM Export WHERE Id='4028e6992a38e24d012a434cb5586050'` Zuora returns the following values: <ns1:records xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:Export"\> <ns2:Id>4028e6992a38e24d012a434cb5586050</ns2:Id> <ns2:FileId>4028e6992a38e24d012a434cb8cd6052</ns2:FileId> <ns2:Query>SELECT Account.Name, BillToContact.WorkEmail FROM Account</ns2:Query> <ns2:Size>1000</ns2:Size> <ns2:Status>Completed</ns2:Status> </ns1:records>

4.  Once `Status=Completed` , use the REST API to retrieve the file based on `Export.fileId`.

5.  Use HTTP GET to the URL `https://www.zuora.com/apps/api/file/FILE_ID` (Zuora REST API on the Zuora Production environment) or `https://apisandbox.zuora.com/apps/api/file/FILE_ID` (Zuora Sandbox environment), where `FILE_ID` is set to the `Export.fileId` . Use one of the following methods to gain access to this URL:

    -   Use Basic Authentication and pass your Zuora username and password.

    -   Use a valid Zuora Session ID, which you can get by using `login()` . `​` The request header must contain the following information: `Authorization: ZSession <id>` Where `id` is the Zuora login session ID. For example: `Authorization: ZSession QWxhZGRpbjpvcGVuIHNlc2FtA​`
