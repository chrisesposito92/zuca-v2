---
title: "Amendments: Suspend"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/amendments-suspend"
product: "zuora-platform"
scraped_at: "2025-12-24T05:35:40.117Z"
---

# Amendments: Suspend

This reference describes the Amendments: Suspend task.

The suspend task suspends an active subscription. You can configure new values for subscription custom fields in this task. The new values will be applied when the suspended subscription is resumed.

The task provides two groups of options based on the set of Zuora APIs being used (SOAP or REST). To learn more about the data fields, see [Amendment object](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/amendment) for SOAP and [API Reference](https://developer.zuora.com/v1-api-reference/api/operation/PUT_SuspendSubscription/) for REST.

If [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) is enabled, this task can support to generate credit memos and apply outstanding credit memos and unapplied payments.
