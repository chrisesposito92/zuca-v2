---
title: "SOAP API migration"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/product-update-in-subscriptions/soap-api-migration"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:20.077Z"
---

# SOAP API migration

This article guides you through migrating from the SOAP API to the Orders REST API, including SOAP equivalents and migration notes.

When the Orders Harmonization feature is enabled, you can continue to use Subscribe and Amend SOAP APIs to create and manage your subscriptions. If you want to migrate your SOAP integrations to use the Orders REST API, you can still do it.

To assist with the migration, this article provides the SOAP equivalent of the "Create order" request body shown in Update a Product in a Subscription .

## SOAP Example

The following SOAP amend() example is valid for WSDL version 29.0 and later.

<ns1:amend xmlns:ns1="http://api.zuora.com/"\> <ns1:requests> <ns1:Amendments> <ns2:ContractEffectiveDate>2017-01-01</ns2:ContractEffectiveDate> <ns2:CustomerAcceptanceDate>2017-01-01</ns2:CustomerAcceptanceDate> <ns2:Name>Update a product</ns2:Name> <ns2:RatePlanData> <ns1:RatePlan> <ns2:AmendmentSubscriptionRatePlanId>2c92c0f85d7d53d3015dac494dfc5cbf </ns2:AmendmentSubscriptionRatePlanId> </ns1:RatePlan> <ns1:RatePlanChargeData> <ns1:RatePlanCharge> <ns2:ProductRatePlanChargeId>2c92c0f9592a6941015943308a2c6e72 </ns2:ProductRatePlanChargeId> <ns2:Quantity>50</ns2:Quantity> </ns1:RatePlanCharge> </ns1:RatePlanChargeData> </ns2:RatePlanData> <ns2:ServiceActivationDate>2017-01-01</ns2:ServiceActivationDate> <ns2:Status>Completed</ns2:Status> <ns2:SubscriptionId>2c92c0f85d7d53d3015dac494e3d5cc4</ns2:SubscriptionId> <ns2:Type>UpdateProduct</ns2:Type> </ns1:Amendments> <ns1:AmendOptions> <ns1:GenerateInvoice>false</ns1:GenerateInvoice> <ns1:ProcessPayments>false</ns1:ProcessPayments> </ns1:AmendOptions> <ns1:PreviewOptions> <ns1:EnablePreviewMode>False</ns1:EnablePreviewMode> </ns1:PreviewOptions> </ns1:requests> </ns1:amend>

## Migration Notes

-   Specify account numbers instead of account IDs.

-   Specify subscription numbers instead of subscription IDs.

-   You do not need to specify the status of the amendment in the REST API. Because the amendment will be in the Complete status if the call succeeds. You cannot create draft amendments in Orders.

-   To generate invoices and collect payments, specify the `runBilling` and `collectPayment` fields instead of the `GenerateInvoice` and `ProcessPayments` SOAP fields.

-   Currently, we do not support specifying the name and description of order actions (the corresponding `Name` and `Description` SOAP fields).
