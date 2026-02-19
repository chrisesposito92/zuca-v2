---
title: "Using Enhanced Invoice Numbering"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/enhanced-invoice-numbering/using-enhanced-invoice-numbering"
product: "zuora-platform"
scraped_at: "2026-02-19T03:29:32.513Z"
---

# Using Enhanced Invoice Numbering

The Enhanced Invoice Numbering app, no longer available for purchase, assists previous customers in managing invoice numbering through various features such as viewing job history, managing entities, and configuring settings.

Note:

The Enhanced Invoice Numbering app is not available for purchase anymore. The information on this page is intended to be used by customers who have purchased the app previously.

When you complete the initial configuration, click Home in the upper left corner to return to the landing page of the Invoice Numbering app.

On the landing page, you can perform the following actions:

-   View all executions of the app and related details in the Job History tab.

-   View all invoices from bill runs and the new entity number for each invoice in the Invoices tab.

-   Add a new entity or edit existing entities in the Entity Setup tab.

-   View the API history for all notifications from the app to Zuora in the API History tab.

-   Configure the settings of the app using in the upper right corner.

-   View the URLs and API tokens for API callouts using in the upper right corner.


## Create a New Entity

An entity is a unit that has its own invoice numbering. After you add the custom fields in Zuora, you can add the picklist values as new entities in the app.

In the Entity Setup tab of the home page, click +New Entity and complete the configuration for the entity.

-   Entity - Enter the desired business unit as specified in the configuration of the custom field. For details about the custom field configuration, see [Configure Settings for Enhanced Invoice Numbering](/zuora-platform/integration/integration-hub/enhanced-invoice-numbering/configure-enhanced-invoice-numbering) .

-   Prefix - Specify the prefix for the selected entity. For example, UK.

-   Length - Specify the number of characters in the entity that will be displayed after the prefix.

-   Invoice Selection - Specify which invoices will receive the new numbering.

    -   Select All Invoices (recommended) to number all invoices.

    -   Positive Invoices- Select to only number invoices with a balance equal to or greater than 0. Contact your Engagement Manager or [Zuora Global Support](https://support.zuora.com/) for questions.

    -   Negative Invoices - Select to only number invoice with a negative balance. Contact your Engagement Manager or [Zuora Global Support](https://support.zuora.com/) for questions.

-   Next Number - Specify the first number of the sequence.


Click Create to create a new entity using the specified configuration.
