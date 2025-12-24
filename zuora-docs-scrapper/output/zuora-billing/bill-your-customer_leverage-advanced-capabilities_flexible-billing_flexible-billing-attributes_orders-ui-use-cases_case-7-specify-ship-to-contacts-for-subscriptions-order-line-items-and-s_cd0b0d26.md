---
title: "Case 7: Specify ship-to contacts for subscriptions, order line items, and standalone invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/orders-ui-use-cases/case-7-specify-ship-to-contacts-for-subscriptions-order-line-items-and-standalone-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T18:38:41.784Z"
---

# Case 7: Specify ship-to contacts for subscriptions, order line items, and standalone invoices

Learn how to specify ship-to contacts for subscriptions, order line items, and standalone invoices, including changing inherited contacts.

You must turn on the Ship To Contact feature before specifying ship-to contacts. You can turn on this feature through the self-service interface for Feature Management. For more information, see [Enable billing features by yourself](/zuora-billing/set-up-zuora-billing/billing-settings-configuration).

If an account has no designated ship-to contact, you can specify the ship-to contact for subscriptions, order line items, or standalone invoices. If an account has a designated ship-to contact, the ship-to contact is inherited to the subscriptions, order line items, or standalone invoices. You can change the inherited ship-to contact for the subscriptions, order line items, or standalone invoices.

1.  To specify a ship-to contact for a subscription, perform the following steps:
    1.  During the [Create Subscription](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/orders-tutorials---create-subscriptions/create-a-subscription-using-the-zuora-ui), [Terms And Conditions](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/terms-and-conditions-of-subscriptions/change-the-terms-and-conditions-of-a-subscription), [Renewal](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/subscriptions-renewal/renew-a-subscription-using-the-zuora-ui), or [Owner Transfer](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-considerations-and-performance/orders-performance-guidance/owner-transfer) order action.
    2.  In the Billing and Payment section, select a contact from the Ship To list.

        Note:

        The ship-to contact of the subscription owner account is selected by default. You can change it as needed. The change applies only to this subscription.

2.  To specify a ship-to contact for an order line item, perform the following steps:
    1.  During the [Create sales order line items](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/sales-order-line-items-creation) or [Update order line items](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-items-update) operations.
    2.  In the Billing section, select a contact from the Ship To list.

        Note:

        The ship-to contact of the OLI owner account is selected by default. You can change it as needed. The change applies only to this order line item.

3.  To specify a ship-to contact for a standalone invoice, perform the following steps:
    1.  During the [Create standalone invoices](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/standalone-invoices-creation) operation.
    2.  In the Billing and Payment section, select a contact from the Ship To list.

        Note:

        The ship-to contact specified at the account level is selected by default. You can change it as needed. The change applies only to this invoice.
