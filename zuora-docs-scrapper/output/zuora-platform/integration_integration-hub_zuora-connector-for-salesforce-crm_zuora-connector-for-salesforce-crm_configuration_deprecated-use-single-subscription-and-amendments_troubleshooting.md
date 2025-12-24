---
title: "Troubleshooting"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/configuration/deprecated-use-single-subscription-and-amendments/troubleshooting"
product: "zuora-platform"
scraped_at: "2025-12-24T08:31:36.149Z"
---

# Troubleshooting

Provides troubleshooting tips for resolving sync failures and duplicate subscription issues after activating the single subscription setting.

This section contains troubleshooting tips for issues that you might encounter after activating the single subscription setting:

-   Sync failure after activating the single subscription setting

    The error looks like "... field 'Zuora\_\_SubscriptionNumber\_\_c' is not readable... ." To fix this issue, follow the above steps #3 and #4 given at the top of this article.

-   There are two subscriptions with the same name, one with the Zuora\_\_SubscriptionNumber\_\_c value null and one with a non-null value.

    When you execute the apex job, if you receive the error, “First error: Update failed. First exception on row 6 with id a1390000002BWLnAAO; first error: DUPLICATE\_VALUE, duplicate value found: Zuora\_\_SubscriptionNumber\_\_c duplicates value on record with id: a1390000002BbHA:”, you have two subscriptions with the same name. Manually delete the subscription with the null Zuora\_\_SubscriptionNumber\_\_c value and then follow the above steps #3 and #4 given at the top of this article. Execute the following SOQL to check whether there is any other duplicated data:

SELECT count(id), name FROM Zuora\_\_Subscription\_\_c GROUP BY name Having count(id)>1
