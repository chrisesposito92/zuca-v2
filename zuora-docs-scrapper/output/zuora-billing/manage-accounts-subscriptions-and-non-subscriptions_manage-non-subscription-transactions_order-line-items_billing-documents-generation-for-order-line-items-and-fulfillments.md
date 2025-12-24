---
title: "Billing documents generation for order line items and fulfillments"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/billing-documents-generation-for-order-line-items-and-fulfillments"
product: "zuora-billing"
scraped_at: "2025-12-24T05:39:35.572Z"
---

# Billing documents generation for order line items and fulfillments

This topic about generating billing documents for order line items and fulfillments, including scenarios with and without fulfillments, flexible billing options, and methods using Zuora UI and REST API.

This article introduces how to generate billing documents for order line items in the following scenarios:

-   When the order line item is without fulfillments, you can generate billing documents for the order line item.

-   When the order line item is with fulfillments, you can generate a billing document for each of the fulfillments.


For sales order line items, invoices are generated. For return order line items, credit memos are generated if you have enabled the Invoice Settlement feature; otherwise, negative invoices are generated.

Order line items support Flexible Billing. For example, you can specify flexible billing attributes on order line items through API. If you do not specify the attribute values, they are inherited from the default or specified attribute values of the invoice owner account or billing account. The invoices are generated based on the same flexible billing attribute values of the subscriptions and order line items. Applicable billing attributes include bill-to contacts, sold-to contacts, payment terms, invoice template IDs, and sequence sets. Flexible Billing provides more billing methods. For more information, see Flexible Billing .

## Generate billing documents for fulfillments

After a fulfillment is created, its state is Executing by default. To generate billing documents for the fulfillment, you must change the state to `SentToBilling`. For more information about the state transition flow of a fulfillment, see State transitions for an order line item, fulfillment, and order .

To generate a billing document for a fulfillment, you can use one of the following ways:

-   Use the Zuora UI. Make sure the state of the fulfillment is `SentToBilling` and the bill target date is set appropriately. Then, create or schedule a bill run to generate the billing document. The bill run will pick up fulfillments based on the Bill Target Date. See Task 2: Add fulfillments to the sales order line item in Create a sales order line item with fulfillments .

-   Use the REST API.

    -   Use the Create fulfillments operation to create fulfillments and set the `processingOptions` nested field properly to indicate that billing documents should be generated immediately when the fulfillments are created. To allow the generation of billing documents, make sure the state of the fulfillment is `SentToBilling` and the bill target date is set. See Task 2: `Use the Create fulfillments` operation in Create a sales order line item with fulfillments .

    -   Use the Create fulfillments operation to create fulfillments but without using the `processingOptions` nested field to request the immediate generation of the billing documents. Then, when you are to generate billing documents for a fulfillment, use the `CRUD: Create a bill run` operation to create an ad hoc bill run. To allow the generation of billing documents, make sure the state of the fulfillment is `SentToBilling` and the bill target date is set. Use the `Update a fulfillment` operation to set the preceding fields if necessary.
