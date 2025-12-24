---
title: "Callout notification for completed AQuA jobs"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/callout-notification-for-completed-aqua-jobs"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:00.622Z"
---

# Callout notification for completed AQuA jobs

Learn how to configure callout notifications for completed AQuA jobs using the Zuora notification framework.

You can configure a callout notification to be sent after an AQuA job has completed, using the Zuora notification framework.

Note:

Callout notifications that you configure through the Zuora user Interface have higher precedence than callout notifications that you specify in AQuA queries.

If you configure a callout notification through the Zuora user interface, then submit an AQuA query with `notifyUrl` specified, the value of `notifyUrl` will be ignored. Zuora recommends that you check whether your organization has set up any Post Query with Notification calls before you configure a callout notification through the Zuora user interface.
