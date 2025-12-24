---
title: "Estimated start and end dates changes of a pending charge"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/pending-subscription-processing/estimated-start-and-end-dates-changes-of-a-pending-charge"
product: "zuora-billing"
scraped_at: "2025-12-24T05:31:19.992Z"
---

# Estimated start and end dates changes of a pending charge

This topic explains how to modify the estimated start and end dates of a pending charge using the Zuora UI or REST API.

This tutorial demonstrates how to change the estimated start and end dates of a pending charge from the Zuora UI or through the REST API.

You can only modify the charge’s estimated start date. When the subscription is updated successfully, the estimated end date is automatically recalculated based on the estimated start date and the end date setting. This applies to all charge types, including one-time, recurring, and usage. Note that the estimated end date will not change if the charge end date is configured as Fixed Period after the Charge is triggered.
