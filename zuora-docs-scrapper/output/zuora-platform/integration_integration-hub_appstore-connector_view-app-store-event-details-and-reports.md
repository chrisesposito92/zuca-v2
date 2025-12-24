---
title: "View app store event details and reports"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/appstore-connector/view-app-store-event-details-and-reports"
product: "zuora-platform"
scraped_at: "2025-12-24T08:28:45.834Z"
---

# View app store event details and reports

Learn how to view app store event details and access saved data quality reports in Zuora.

Any change that occurs to the app store configuration is logged in as an event. To view App Store Event Details, navigate to your Zuora site and click Home > Billing Settings > App Store Connector > App Store Events

App Store events appear as event cards with the following details:

-   Event ID: A unique auto-generated ID associated with the event.

-   App store: Displays the name of the App Store.

-   Event Type: Displays the current subscription setting, including the sale, renewal, pause, or cancel.

-   Received On: Indicates the date and time of the App Store creation with Zuora.

-   Retried On: Displays the time and date the event was last triggered.

-   Failure Reason: Displays the reason for the event failure.

-   Status: Shows the status of the event. Each event uses an individual status tag to reflect its current action. Events can have one of the following statuses:

    -   Success: The event is successful.

    -   Failed: The event has failed.

    -   Failed and Retried: The event tracks and analyzes configured information streams.


You can click on the Event ID leads to the event details page, which provides a JSON of the Receipt Info. You can also hover over an Event ID to see the detailed view quickly.

Saved Data Quality (DQ) reports are pre-configured reports that provide insights into the quality of data within your system. These reports can help in monitoring data integrity and consistency.

To access reports,

1.  Navigate to the Reports section in your Zuora dashboard.
2.  Select Saved Reports from the menu.
3.  Click on the DQ reports link to view and manage the saved reports.
