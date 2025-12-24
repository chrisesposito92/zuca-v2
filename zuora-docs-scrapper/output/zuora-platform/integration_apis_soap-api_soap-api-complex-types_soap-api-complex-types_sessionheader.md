---
title: "SessionHeader"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/sessionheader"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:36.564Z"
---

# SessionHeader

A call to login() includes SessionHeader in the response.

The SessionHeader object contains the session key.

Place the SessionHeader in the header of your SOAP request to authorize your requests.

## Field descriptions

All field names are case sensitive.

| Name | Required? | Type | Allowable values | Description |
| --- | --- | --- | --- | --- |
| session | Yes | string | Zuora session IDs created from calling login(). | This is the returned value for the session from the login() call. |
