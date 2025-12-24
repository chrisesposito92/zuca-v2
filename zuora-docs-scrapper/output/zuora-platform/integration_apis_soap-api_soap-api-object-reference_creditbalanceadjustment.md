---
title: "CreditBalanceAdjustment"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/creditbalanceadjustment"
product: "zuora-platform"
scraped_at: "2025-12-24T05:40:41.935Z"
---

# CreditBalanceAdjustment

The CreditBalanceAdjustment object applies adjustments to credit balances on billing accounts. This includes applying credit balance to invoices and transferring an invoice to a credit balance.

Note:

If you have the Invoice Settlement feature enabled, this object is deprecated and only available for backward compatibility.

A credit balance adjustment is an adjustment to change a customer's credit balance. When a refund isn't appropriate, you can use a credit balance adjustment to track overpayments.

Credit Balance is an advanced feature recommended for customers who use Zuora Billing as a subledger with summarized integration to the accounting system (summarizing transactions by Accounting Code to create journal entries). This feature is not recommended for users that are performing transaction-level integration to their Accounting System.

Note: You must assign the Zuora Payments Create Credit Balance Adjustment permission and Cancel Credit Balance Adjustment permission to your user roles.

You must have WSDL version 22.0+. Any WSDL downloaded before enabling this feature and assigning permissions will not show this object.

## Supported calls

You can use this object with the following calls:

-   create()

-   query()

-   update()


## Additional field details

Id

The ID of this object. Upon creation of this object, this field becomes `CreditBalanceAdjustmentId` . Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the CreditBalanceAdjustment object is `CreditBalanceAdjustmentId` .
