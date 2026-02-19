---
title: "SOAP API"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api"
product: "zuora-platform"
scraped_at: "2026-02-19T03:27:39.545Z"
---

# SOAP API

SOAP is a mature, XML-based protocol for connecting applications and servers to web-based back-end services. Typical SOAP solutions involve desktop applications, enterprise servers, or public-facing web products.

Note:

Zuora does not support new development or integrations using the SOAP API. To access new features, use the Billing v1 REST APIs. For more detailed information, see [API Documentation](https://developer.zuora.com/v1-api-reference/introduction/). Support for SOAP API is limited to bug fixing.

The Zuora SOAP API provides fully fleshed-out support for virtually everything you can do in the Zuora UI. Thirty SOAP objects provide access to the entire Zuora functional suite, including accounts and contacts, products, rate plans, subscriptions, amendments, invoices, payments, refunds, credit balance adjustments, accounting periods, and much more.

The SOAP API provides this fine-grained level of control by exposing the entire Zuora object model and allowing you to make `create()`, `read()`, `update()`, and `delete()` calls on those objects. As such, in contrast to the use case-oriented REST API, you will need to understand the Zuora object model to become proficient with the SOAP API.
