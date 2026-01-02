---
title: "PUT OrderLineItem"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_OrderLineItem/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:49:55.320Z"
---

## Update an order line item

**Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is now generally available to all Zuora customers. You need to enable the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature to access the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature. As of Zuora Billing Release 313 (November 2021), new customers who onboard on [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) will have the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature enabled by default. If you are a new customer who onboard on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization) and want to enable the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature, submit a request at [Zuora Global Support](https://support.zuora.com/). If you are an existing [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) or [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization) customer and want to enable the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature, submit a request at [Zuora Global Support](https://support.zuora.com/). Updates a specified order line item. The following tutorials demonstrate how to use this operation:

-   [Update an order line item](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/GH_Update_an_order_line_item)
-   [Cancel an order line item](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/GZ_Cancel_an_order_line_item)

Security**bearerAuth**

Request

##### path Parameters

| itemIdrequired | string <UUID>The id of the Order Line Item to update. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| UOM | stringSpecifies the units to measure usage.You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| --- | --- |
| accountingCode | stringThe accountingCode for the Order Line Item (OLI).You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| adjustmentLiabilityAccountingCode | stringThe accounting code on the Order Line Item object. This field is available only if you have enabled Order to Revenue or Zuora Billing - Revenue Integration feature.You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| adjustmentRevenueAccountingCode | stringThe accounting code on the Order Line Item object. This field is available only if you have enabled Order to Revenue or Zuora Billing - Revenue Integration feature.You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| amountPerUnit | numberThe actual charged amount per unit for the Order Line Item (OLI).You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| billTargetDate | string <date>The target date for the Order Line Item (OLI) to be picked up by bill run for generating billing documents.To generate billing documents for an OLI, you must set this field and set the itemState field to SentToBilling.You can update this field for a sales or return OLI only when the OLI is in the Executing or Booked state. |
| billTo | stringThe ID of the bill-to contact of an order line item. Specify an existing contact under the billing account as the bill-to contact of the order line item. The billing account is the order account.You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| billingRule | stringDefault: "TriggerWithoutFulfillment"The rule for billing of the Order Line Item (OLI).You can update this field for a sales or return OLI only when it is in the Executing state (when the itemState field is set as Executing).Enum: "TriggerWithoutFulfillment" "TriggerAsFulfillmentOccurs" |
| contractAssetAccountingCode | stringThe accounting code on the Order Line Item object. This field is available only if you have enabled Order to Revenue or Zuora Billing - Revenue Integration feature.You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| contractLiabilityAccountingCode | stringThe accounting code on the Order Line Item object. This field is available only if you have enabled Order to Revenue or Zuora Billing - Revenue Integration feature.You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| contractRecognizedRevenueAccountingCode | stringThe accounting code on the Order Line Item object. This field is available only if you have enabled Order to Revenue or Zuora Billing - Revenue Integration feature.You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| customFields | object (OrderLineItemCustomFields)Container for custom fields of an Order Line Item object. |
| deferredRevenueAccountingCode | stringThe deferred revenue accounting code for the Order Line Item (OLI).You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| description | stringThe description of the Order Line Item (OLI).You can update this field for a sales or return OLI only when the OLI is in the Executing state (when the itemState field is set as Executing). |
| excludeItemBillingFromRevenueAccounting | booleanIndicates whether to exclude the related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting.Note: This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled. |
| excludeItemBookingFromRevenueAccounting | booleanIndicates whether to exclude the related rate plan charges and order line items from revenue accounting.Note: This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled. |
| inlineDiscountPerUnit | numberYou can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing).Use this field in accordance with the inlineDiscountType field, in the following manner:If the inlineDiscountType field is set as Percentage, this field specifies the discount percentage for each unit of the order line item. For exmaple, if you specify 5 in this field, the discount percentage is 5%.If the inlineDiscountType field is set as FixedAmount, this field specifies the discount amount on each unit of the order line item. For exmaple, if you specify 10 in this field, the discount amount on each unit of the order line item is 10.Once you set the inlineDiscountType, inlineDiscountPerUnit, and listPricePerUnit fields, the system will automatically generate the amountPerUnit field. You shall not set the amountPerUnit field by yourself. |
| inlineDiscountType | stringYou can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing).Use this field to specify the inline discount type, which can be Percentage, FixedAmount, or None. The default value is Percentage.Use this field together with the inlineDiscountPerUnit field to specify inline discounts for order line items. The inline discount is applied to the list price of an order line item.Once you set the inlineDiscountType, inlineDiscountPerUnit, and listPricePerUnit fields, the system will automatically generate the amountPerUnit field. You shall not set the amountPerUnit field by yourself.Enum: "Percentage" "FixedAmount" "None" |
| isAllocationEligible | booleanThis field is used to identify if the charge segment is allocation eligible in revenue recognition.Note: The field is only available if you have the Order to Revenue feature enabled. To enable this field, submit a request at Zuora Global Support. |
| isUnbilled | booleanThis field is used to dictate how to perform the accounting during revenue recognition.Note: The field is only available if you have the Order to Revenue feature enabled. To enable this field, submit a request at Zuora Global Support. |
| itemName | stringThe name of the Order Line Item (OLI).You can update this field for a sales or return OLI only when the OLI is in the Executing state (when the itemState field is set as Executing). |
| itemState | stringThe state of the Order Line Item (OLI). See State transitions for an order, order line item, and fulfillment for more information.To generate invoice for an OLI, you must set this field to SentToBilling and set the billTargetDate field .You can update this field for a sales or return OLI only when the OLI is in the Executing or 'Booked' or SentToBillingstate (when the itemState field is set as Executing or SentToBilling).Enum: "Executing" "Booked" "SentToBilling" "Complete" "Canceled" |
| itemType | stringThe type of the Order Line Item (OLI).You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing).Enum: "Product" "Fee" "Services" |
| listPricePerUnit | numberThe list price per unit for the Order Line Item (OLI).You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| ownerAccountNumber | stringUse this field to assign an existing account as the owner of an order line item.You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| productCode | stringThe product code for the Order Line Item (OLI).You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| purchaseOrderNumber | stringUsed by customers to specify the Purchase Order Number provided by the buyer.You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| quantity | numberThe quantity of units, such as the number of authors in a hosted wiki service.You can update this field for a sales or return OLI only when the OLI in the Executing state (when the itemState field is set as Executing). |
| recognizedRevenueAccountingCode | stringThe recognized revenue accounting code for the Order Line Item (OLI).You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| relatedSubscriptionNumber | stringUse this field to relate an order line item to an subscription. Specify this field to the subscription number of the subscription to relate.You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| revenueRecognitionRule | stringThe Revenue Recognition rule for the Order Line Item (OLI).You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| revenueRecognitionTiming | string <= 200 charactersSpecifies the type of revenue recognition timing.Predefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the revenue recognition policy configuration in the Zuora Billing UI.You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing).Note: This field is only available if you have the Order to Revenue feature enabled.Enum: "Upon Billing Document Posting Date" "Upon Order Activation Date" |
| revenueAmortizationMethod | string <= 200 charactersSpecifies the type of revenue amortization method.Predefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the revenue recognition policy configuration in the Zuora Billing UI.You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing).Note: This field is only available if you have the Order to Revenue feature enabled.Enum: "Immediate" "Ratable Using Start And End Dates" |
| invoiceGroupNumber | string or null <= 255 charactersThe number of the invoice group associated with the order line item.After enabling the Invoice Grouping feature, you can specify invoice group numbers to bill subscriptions and order line items based on specific criteria. For the same account, Zuora generates separate invoices for subscriptions and order line items, each identified by unique invoice group numbers. For more information, see Invoice Grouping.Note:If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is null in the response body.If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to null in the response body.You can specify this field on a sales order line item when its state (that is, the itemState field) is Executing, Booked, or SentToBilling. |
| sequenceSetId | stringThe ID or number of the sequence set associated with the order line item.Note:If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is null in the response body.If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to null in the response body.You can specify this field on a sales order line item when its state (that is, the itemState field) is Executing, Booked, or SentToBilling. |
| paymentTerm | stringThe payment term name associated with the order line item.Note:If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is null in the response body.If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to null in the response body.You can specify this field on a sales order line item when its state (that is, the itemState field) is Executing, Booked, or SentToBilling. |
| invoiceTemplateId | stringThe ID of the invoice template associated with the order line item.Note:If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is null in the response body.If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to null in the response body.You can specify this field on a sales order line item when its state (that is, the itemState field) is Executing, Booked, or SentToBilling. |
| shipTo | stringUse this field to assign an existing account as the ship-to contact of an order line item, by the following rules:If the ownerAccountNumber field is set, then this field must be the ID of a contact that belongs to the owner account of the order line item.If the ownerAccountNumber field is not set, then this field must be the ID of a contact that belongs to the billing account of the order line item. The billing account is the order account.You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| soldTo | stringUse this field to assign an existing account as the sold-to contact of an order line item, by the following rules:If the ownerAccountNumber field is set, then this field must be the ID of a contact that belongs to the owner account of the order line item.If the ownerAccountNumber field is not set, then this field must be the ID of a contact that belongs to the billing account of the order line item. The billing account is the order account.You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| taxCode | stringThe tax code for the Order Line Item (OLI).You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |
| taxMode | stringThe tax mode for the Order Line Item (OLI).You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing).Enum: "TaxInclusive" "TaxExclusive" |
| transactionEndDate | string <date>The date a transaction is completed. The default value of this field is the transaction start date. Also, the value of this field should always equal or be later than the value of the transactionStartDate field.You can update this field for a sales or return OLI only when the OLI is in the Executing state (when the itemState field is set as Executing). |
| transactionStartDate | string <date>The date a transaction starts. The default value of this field is the order date.You can update this field for a sales or return OLI only when the OLI is in the Executing state (when the itemState field is set as Executing). |
| unbilledReceivablesAccountingCode | stringThe accounting code on the Order Line Item object. This field is available only if you have enabled Order to Revenue or Zuora Billing - Revenue Integration feature.You can update this field only for a sales OLI and only when the sales OLI is in the Executing state (when the itemState field is set as Executing). |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/order-line-items/{itemId}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "description"": "Details of the order line item"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "success": true


}`
