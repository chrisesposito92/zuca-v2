---
title: "Retry failed appstore events"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/appstore-connector/retry-failed-appstore-events"
product: "zuora-platform"
scraped_at: "2025-12-24T08:28:48.169Z"
---

# Retry failed appstore events

Learn how to retry failed app store events due to configuration errors and ensure successful execution.

Failed events are due to the errors in the configuration details you provide. Try one of the following options if you cannot connect to your App Store successfully:

-   Check the system status for the app store configurations

-   Check for a software update​​​​


In any of the listed cases, the function stops executing by default, and the event gets discarded. To retry the function when an error occurs, click the Retry Event option. This option causes the event to be retried repeatedly until the function gets executed successfully.

You can retry a single event or execute multiple retries for events as follows:

1.  Log in to your Zuora site and click Home from the menu.
2.  Click Billing Settings and select App Store Connector.
3.  Select the App Store Events tab.
    1.  Retry single event: Select the checkbox before the Event ID with a failed status and click Retry Event.
    2.  Retry multiple events: Select the checkboxes before the Event IDs that have failed statuses and click Retry Event.
4.  (Optional)You can also use the Filter option to filter records based on Event Number, Event Type, Status, and more to sort results based on your selection.

To help you troubleshoot errors, common error messages on invoices that you might encounter while using the appstore connector v2 app are listed.

![clipboard_e7adc367696933cb04d9d9be641a71846.png](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/integration_hub/Appstore_Connector/08_Retry_failed_appstore_events/clipboard_e7adc367696933cb04d9d9be641a71846.png)
