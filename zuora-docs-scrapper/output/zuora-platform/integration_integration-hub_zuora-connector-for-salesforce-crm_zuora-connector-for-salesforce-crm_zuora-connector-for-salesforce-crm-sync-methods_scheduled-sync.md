---
title: "Scheduled-sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm-sync-methods/scheduled-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:45.233Z"
---

# Scheduled-sync

Learn how to schedule data syncs to your SFDC instance using the SFDC BULK APIs to optimize API usage and reduce costs.

Scheduled Sync allows you to schedule all data changes to be sent to your SFDC instance, in batches . You can configure the time increments from daily batches, up to every 30 minutes. When a scheduled batch syncs, it will use the SFDC BULK APIs, which helps reduce the volume on the SFDC API limits.

1.  Navigate to Marketplace > Integration Hub \> Salesforce CRM
2.  Go to the Sync Settings tab
3.  Under the Sync Type section, select the Scheduled radio button.
4.  Under the Scheduled Increment, chose the preferred time increment.
5.  Select the objects to sync and click Save .

As you chose the time increment, Zuora recommends to evaluate the longest acceptable interval of time, as it will optimize for the least API load against the SFDC instance. This will allow you to still have all your Zuora data, while saving costs in SFDC.
