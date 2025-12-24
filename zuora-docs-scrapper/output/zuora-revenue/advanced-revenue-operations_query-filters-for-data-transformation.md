---
title: "Query filters for Data Transformation"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/query-filters-for-data-transformation"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:37:44.656Z"
---

# Query filters for Data Transformation

Learn how to use query filters in the Transformation Job page to filter data for transformation, including supported formats and character limits.

In the Filter field on the Transformation Job page, you can enter filter statements to filter data that will be transformed. Both the Zuora Revenue\_table\_name.field and Zuora\_Billing\_object.field formats are supported. For example, the following filter statements can get identical filter results:

-   rpro\_ds\_rate\_plan\_charge\_g.charge\_model = ''''Discount-Percentage''''

-   RatePlanCharge.ChargeModel = ''''Discount-Percentage''''


Custom fields can also be used as one of the filter conditions. For example, the following filter statements using custom fields are both valid:

-   rpro\_ds\_subscription\_g.cf1 = ''''yes''''

-   Subscription.migration\_\_c = ''''A136026''''


Note that the character limit for the query filter is 1000. If the filter statement exceeds 1000 characters, an error will occur.

The Filter field is required. The following table lists all supported Zuora objects and Zuora Revenue tables for each data source. All primary fields or columns in these objects are also available for use.

| Data Source | Zuora Billing object | Zuora Revenue table |
| --- | --- | --- |
| Order | AccountSubscriptionRatePlanChargeRatePlanProductRatePlanCharge | RPRO_DS_ACCOUNT_GRPRO_DS_SUBSCRIPTION_GRPRO_DS_RATE_PLAN_CHARGE_GRPRO_DS_RATE_PLAN_GRPRO_DS_PRODUCT_RPC_G |
| InvoiceItem | AccountSubscriptionRatePlanChargeRatePlanProductRatePlanChargeInvoiceInvoiceItem | RPRO_DS_ACCOUNT_GRPRO_DS_SUBSCRIPTION_GRPRO_DS_RATE_PLAN_CHARGE_GRPRO_DS_RATE_PLAN_GRPRO_DS_PRODUCT_RPC_GRPRO_DS_INVOICE_GRPRO_DS_INVOICE_ITEM_G |
| InvoiceItemAdjustment | AccountSubscriptionRatePlanChargeRatePlanProductRatePlanChargeInvoiceInvoiceItemInvoiceItemAdjustment | RPRO_DS_ACCOUNT_GRPRO_DS_SUBSCRIPTION_GRPRO_DS_RATE_PLAN_CHARGE_GRPRO_DS_RATE_PLAN_GRPRO_DS_PRODUCT_RPC_GRPRO_DS_INVOICE_GRPRO_DS_INVOICE_ITEM_GRPRO_DS_INVOICE_ITEM_ADJ_G |
| CreditMemoItem | AccountSubscriptionProductRatePlanChargeCreditMemoCreditMemoItem | RPRO_DS_ACCOUNT_GRPRO_DS_SUBSCRIPTION_GRPRO_DS_PRODUCT_RPC_GRPRO_DS_CREDIT_MEMO_GRPRO_DS_CREDIT_MEMO_ITEM_G |
| DebitMemoItem | AccountSubscriptionProductRatePlanChargeDebitMemoDebitMemoItem | RPRO_DS_ACCOUNT_GRPRO_DS_SUBSCRIPTION_GRPRO_DS_PRODUCT_RPC_GRPRO_DS_DEBIT_MEMO_GRPRO_DS_DEBIT_MEMO_ITEM_G |
