---
title: "REST API requests"
url: "https://developer.zuora.com/docs/guides/requests-and-responses/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:34.833Z"
---

#

REST API requests

##

Object IDs

As a general rule, when asked to supply a key for an object (for example, accountKey), you can provide either the actual 32-digit ID or the number of the object.

##

HTTP request body

Most parameters and data accompanying your requests will be contained in the body of the HTTP request.

###

Data type

([Actions](https://developer.zuora.com/api-references/api/tag/Actions/) and CRUD operations only) We recommend that you do not specify the decimal values with quotation marks, commas, and spaces. Use characters of `+-0-9.eE`, for example, `5`, `1.9`, `-8.469`, and `7.7e2`. Also, Zuora does not convert currencies for decimal values.

##

Testing a request

Use a third party client, such as [curl](https://curl.haxx.se), [Postman](https://www.getpostman.com), or [Advanced REST Client](https://advancedrestclient.com), to test the Zuora REST API.

You can test the Zuora REST API from the Zuora Sandbox or Production tenants. If connecting to Production, bear in mind that you are working with your live production data, not sample data or test data.

##

Testing with credit cards

Sooner or later, it will probably be necessary to test some transactions that involve credit cards. For suggestions on how to handle this, see [Going Live With Your Payment Gateway](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/C_Managing_Payment_Gateways/B_Going_Live_Payment_Gateways#Testing_with_Credit_Cards).

##

Timeout limit

If a request does not complete within 120 seconds, the request times out and Zuora returns a Gateway Timeout error.
