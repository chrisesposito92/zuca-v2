---
title: "Feature overview"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/overview-of-customer-accounts/reseller-account/feature-overview"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:34.322Z"
---

# Feature overview

The Reseller Account feature enhances scalability for businesses working with distributors and resellers by allowing parallel API calls and asynchronous account metric calculations.

The Reseller Account feature is specifically designed for businesses that work with distributors and resellers or operate in a B2B model, with a large number of subscriptions.

Typically, to prevent conflicts and being locked, you can make API calls sequentially, for example, creating orders for the same account one after another. However, as the workload increases, this sequential approach may not scale effectively. Therefore, when dealing with high-volume operations, you may need to make parallel API calls. This is where the new feature comes into play.

With this feature, you can flag an account as a partner account using the Zuora UI or REST API.

-   Through the Zuora UI, you can select the Partner Account check box in the Additional Fields section on the New Customer Account page.
-   Through the REST API, you can use the [Create an account](https://www.zuora.com/developer/api-references/api/operation/POST_Account/) or [Update an account](https://www.zuora.com/developer/api-references/api/operation/PUT_Account/) operation to specify the `partnerAccount` field in the request.


If you flag a customer account as a partner account, the calculation of account metrics is performed asynchronously during operations such as subscription creation, order changes, invoice generation, and payments. Specifically, the calculation of metrics is delayed for partner accounts. However, you can still use the [Retrieve an account](https://www.zuora.com/developer/api-references/api/operation/GET_Account/) or [Retrieve an account summary](https://www.zuora.com/developer/api-references/api/operation/GET_AccountSummary/-->) operation to retrieve the time when account metrics are last updated from the value of the `lastMetricsUpdate` field.

This feature is particularly useful in scenarios where you have to create a large number of subscriptions or orders for reseller accounts, or when you perform data migration through standalone invoices for distributor accounts in concurrent API requests. By flagging an account as a partner account, you can streamline your operations and improve the scalability of your billing processes.

The Zuora UI, REST API, data source, AQuA, Data Query, and Object Query are enhanced to support the Reseller Account feature. The following table lists the detailed changes introduced in the Reseller Account feature.

| Base object | Field/Related object | Access approaches |
| --- | --- | --- |
| Account | partnerAccountlastMetricsUpdate | Zuora UIREST APIAccount data sourceAQuAData QueryObject Query |
| Order | partnerAccount | REST API |

For a summary of REST API updates specific to this feature, see the "API updates for the Reseller Account feature" section in [2023 API Changelog (July 20, 2023)](https://www.zuora.com/developer/rest-api/changelog/2023-api-changelog/) and [REST API Reference](https://www.zuora.com/developer/api-reference/-).
