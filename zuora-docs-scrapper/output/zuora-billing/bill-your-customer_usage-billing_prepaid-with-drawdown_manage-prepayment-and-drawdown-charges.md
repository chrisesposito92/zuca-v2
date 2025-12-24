---
title: "Manage prepayment and drawdown charges"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/manage-prepayment-and-drawdown-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:22.966Z"
---

# Manage prepayment and drawdown charges

Learn how to update, query, and delete prepayment and drawdown charges using the Zuora UI, SOAP API, and REST API.

You can update, query, or delete the prepayment and drawdown charges that you have created.

## Update Charges

To update charges using the Zuora UI, see [Edit product rate plan charge](/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/edit-a-product-rate-plan-or-product-rate-plan-charge/edit-a-rate-plan-charge).

To update charges using the SOAP API, use the update() call. WSDL version 114+ is required. See [Fields related to Prepaid with Drawdown](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplancharge/fields-related-to-prepaid-with-drawdown) for field descriptions.

To update charges using the REST API, use the [CRUD: Update a product rate plan charge](https://developer.zuora.com/v1-api-reference/api/operation/Object_PUTProductRatePlanCharge/) operation. WSDL version 114+ is required for the `X-Zuora-WSDL-Version` header parameter. See [Fields related to Prepaid with Drawdown](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplancharge/fields-related-to-prepaid-with-drawdown) for field descriptions.

## Query charges

You can retrieve charge data from the Product Rate Plan Charge Data Source. See [Fields related to Prepaid with Drawdown](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplancharge/fields-related-to-prepaid-with-drawdown) for field descriptions.

You can also retrieve charge data from the Product Rate Plan Charge object through [Data Query](/zuora-platform/data/data-query/use-data-query-through-user-interface/create-new-data-queries). See [Fields related to Prepaid with Drawdown](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplancharge/fields-related-to-prepaid-with-drawdown) for field descriptions.

To query charges using the SOAP API, use the query() call. WSDL version 114+ is required. See [Fields related to Prepaid with Drawdown](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplancharge/fields-related-to-prepaid-with-drawdown) for field descriptions.

To query charges using the REST API, use the [Query](https://developer.zuora.com/v1-api-reference/api/operation/Action_POSTquery/) operation. WSDL version 114+ is required for the `X-Zuora-WSDL-Version` header parameter. See [Fields related to Prepaid with Drawdown](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplancharge/fields-related-to-prepaid-with-drawdown) for field descriptions.

## Delete charges

To delete charges using the Zuora UI, see [Delete a product rate plan charge](/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/delete-products-rate-plans-and-product-rate-plan-charges/delete-a-rate-plan-or-product-rate-plan-charge).

To delete charges using the SOAP API, use the delete() call.

To delete charges using the REST API, use the [Delete](https://developer.zuora.com/v1-api-reference/api/operation/Action_POSTdelete/) operation.
