---
title: "Query usage on an account"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/query/query-usage-on-an-account"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:59.504Z"
---

# Query usage on an account

This reference provides sample code of using the query() to query usage on an account.

## Overview

This use case queries programmatically for usages that were created in the system.

## Query usages

Use the following syntax to query usages on an account using a ZOQL statement:

select Id, AccountId, SourceType, UOM, Quantity, RbeStatus, StartDateTime, EndDateTime, SourceName, SubmissionDateTime from Usage where AccountId = 'someAccountId'

The SOAP call envelope payload should look like the following:

<ns1:query> <ns1:queryString>selectId, AccountNumber, EndDateTime, Quantity, RbeStatus, SourceName, SourceType, StartDateTime, SubmissionDateTime, UOM from Usage where AccountId = '4028e485225d1d5f0122662fd6b249c8'</ns1:queryString> </ns1:query>
Note: The `RbeStatus` field does not indicate whether usage was processed.
