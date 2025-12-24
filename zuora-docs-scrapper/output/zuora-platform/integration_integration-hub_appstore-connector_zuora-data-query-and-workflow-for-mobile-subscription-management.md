---
title: "Zuora data query and workflow for mobile subscription management"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/appstore-connector/zuora-data-query-and-workflow-for-mobile-subscription-management"
product: "zuora-platform"
scraped_at: "2025-12-24T08:29:01.137Z"
---

# Zuora data query and workflow for mobile subscription management

This document outlines SQL queries and workflows for managing mobile subscription data in Zuora, integrating with Apple, Google, and Roku to optimize subscription management and data accuracy.

This document provides example SQL queries and workflows to manage and optimize mobile subscription data in Zuora, with active integrations for Apple App Store, Google Play Store, and Roku. By leveraging Zuora’s Data Query and Workflow capabilities, businesses can extract actionable insights, track subscription states, and maintain data accuracy across these major mobile subscription channels.

This query provides an overview of active subscriptions across all channels (Direct, Apple, Google, and Roku), helping you assess the distribution of your customer base and optimize channel-specific strategies.

/\*\* Count direct subscribers \*/ WITH direct AS ( SELECT 'Direct' AS channel, COUNT(1) AS active\_subscriptions FROM rateplancharge rpc INNER JOIN rateplan rp ON rpc.rateplanid = rp.id INNER JOIN subscription s ON rp.subscriptionid = s.id WHERE s.status NOT IN ('Draft', 'Expired') AND rpc.effectivestartdate <= CURRENT\_DATE AND (rpc.effectiveenddate > CURRENT\_DATE OR rpc.effectiveenddate IS NULL) GROUP BY 1 ), /\*\* Count mobile subscribers \*/ mobile AS ( SELECT externalsourcesystem AS channel, COUNT(1) AS active\_subscriptions FROM subscription WHERE externalsourcesystem IN ('Apple App Store', 'Google Play Store', 'Roku') AND type = 'OmniChannel' AND state = 'Active' GROUP BY 1 ) SELECT \* FROM direct UNION ALL SELECT \* FROM mobile;

Use Case : Assess active subscriptions by channel to prioritize engagement efforts. For example, a high count in Apple App Store could prompt targeted Apple-specific campaigns, while Roku may benefit from a separate focus.

Identify Apple subscriptions up for renewal in the next 30 days that have auto-renew disabled. This list enables proactive retention efforts to reduce churn and improve retention.

SELECT a.id AS account\_id, a.name AS account\_name, a.accountnumber AS account\_accountnumber, s.id AS subscription\_id, s.name AS subscription\_name, s.externalproductid AS subscription\_externalproductid, s.state AS subscription\_state, s.externalexpirationdate AS subscription\_expirationdate FROM subscription s INNER JOIN account a ON s.accountid = a.id WHERE type = 'OmniChannel' AND state = 'Active' AND externalexpirationdate <= CURRENT\_DATE + INTERVAL '30' DAY AND externalexpirationdate > CURRENT\_DATE AND autorenew = FALSE;

Use Case : Enable targeted engagement to encourage Apple subscribers with upcoming expiration to renew, using automated email or in-app reminders.

Track Google and Roku subscriptions in a grace period. These insights allow you to engage with customers proactively to resolve issues before their subscriptions are fully canceled.

SELECT a.id AS account\_id, a.name AS account\_name, a.accountnumber AS account\_accountnumber, s.id AS subscription\_id, s.name AS subscription\_name, s.externalproductid AS subscription\_externalproductid, s.state AS subscription\_state, s.externalexpirationdate AS subscription\_expirationdate FROM subscription s INNER JOIN account a ON s.accountid = a.id WHERE externalsourcesystem IN ('Google Play Store', 'Roku') AND state = 'Active' AND externalstate = 'In Grace';

Use Case : Monitor Google and Roku subscriptions in a grace period to prevent cancellations by resolving payment or other issues via email or in-app notifications, or migrating these customers to direct subscriptions.

Analyze the status of subscriptions by external product ID to see how different plans perform across mobile channels (Apple, Google, Roku).

SELECT state, externalproductid, COUNT(1) AS subscription\_count FROM subscription WHERE type = 'OmniChannel' GROUP BY state, externalproductid ORDER BY subscription\_count;

Use Case : This data can guide mobile product adjustments and engagement strategies by identifying the performance of each subscription type and any necessary retention improvements.

To maintain accurate subscription data across Apple, Google, and Roku, Zuora Workflow allows for a nightly data integrity check. This process addresses discrepancies caused by missed or out-of-order notifications from the app stores, ensuring your subscription data remains consistent.

1.  Create a new workflow : In Zuora, access the Workflow application and create a new workflow (e.g., “Nightly Subscription Data Quality Check”).
2.  Define workflow steps :

    -   Input Data : Query active subscription IDs in Zuora to verify.

    -   API Task : Call the Subscription Refresh API for each subscription ID to refresh data from Apple, Google, or Roku.

    -   Data Comparison : Use conditional logic to compare existing data with the refreshed data and identify any discrepancies.


3.  Configure notifications and logging : Set up logging for each data verification and enable notifications to alert your team of any discrepancies.
