---
title: "Create a callout template"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/callout-notification-for-completed-aqua-jobs/create-a-callout-template"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:04.755Z"
---

# Create a callout template

Learn how to create a callout template by navigating through the Extension Studio and configuring necessary settings.

To create a callout template, perform the following steps:

1.  Navigate to in the left navigation menu.
2.  Click the Callout Templates tab. The Callout Templates page opens.
3.  Click \+ Add New Callout Template .
4.  In the Create Callout Template dialog, enter the following information:

    -   Name: Specify a name for the callout template.

    -   Related Event: Select 2610 - AQUA Data Export Completion from .

    -   HTTP Method: Select the method in which you want to send the callout data.

    -   Request URL: Specify the webpage or URL to which you want to send the callout data. This is the path to the receiver service of the callout.

    -   Merge Fields: Add the following merge fields to the callout request body.

        -   Aqua.JobId: The job ID created for the AQuA request.

        -   Aqua.JobStatus: The job status.

        -   Aqua.PartnerName: The unique ID of a data integration partner.

        -   Event.Category: This identifies that this is an AQuA callout notification.

        -   Event.Timestamp: The AQuA job execution timestamp.

    -   Authentication Type: Select the authentication type and specify other relevant fields that vary depending on the type.

    -   Retriable: Select this checkbox to apply the callout retry rules. For more information, see Configure callout settings.


    For more information about all available fields, see Manage callout templates.

5.  Click Save .
