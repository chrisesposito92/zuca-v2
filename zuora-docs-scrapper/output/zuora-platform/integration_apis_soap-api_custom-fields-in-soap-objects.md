---
title: "Custom fields in SOAP objects"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/custom-fields-in-soap-objects"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:45.275Z"
---

# Custom fields in SOAP objects

This reference lists all custom fields available in Zuora SOAP API objects.

Custom fields allow you to add and store additional information on many objects in Zuora when standard fields do not meet your needs. You can create custom fields in the Zuora web application .

## Custom fields and Zuora WSDL

When you download the latest version of the Zuora WSDL, your tenant-specific custom fields are included automatically. You do not need to manually re-add custom fields after downloading the WSDL.

Zuora recommends that you keep track of your custom fields in case you need to recreate them at some point.

## Zuora Billing custom fields

Zuora provides custom fields on the following Zuora Billing objects:

-   Account

-   Amendment

-   Contact

-   Subscription

-   Product

-   Product Rate Plan

-   Product Rate Plan Charge

-   (Subscription) Rate Plan

-   (Subscription) Rate Plan Charge

-   Invoice

-   Invoice Item (Detail)

-   Invoice Adjustment (Invoice Adjustment is deprecated on Production in WSDL version 64.0. Zuora recommends that you use the Invoice Item Adjustment instead.)

-   Invoice Item Adjustment

-   Taxation Item

-   Usage


## Zuora Payments custom fields

Zuora provides custom fields on the following Zuora Payments objects:

-   Payments

-   Refunds


## Zuora Finance custom fields

Zuora provides custom fields on the following Zuora Finance objects:

-   AccountingCode

-   AccountingPeriod
