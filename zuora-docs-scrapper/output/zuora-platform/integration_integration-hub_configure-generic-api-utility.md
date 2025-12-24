---
title: "Configure Generic API Utility"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configure-generic-api-utility"
product: "zuora-platform"
scraped_at: "2025-12-24T05:47:13.877Z"
---

# Configure Generic API Utility

The Generic API Utility allows you to generate XML templates and send SOAP requests to Zuora endpoints with ease.

You can use the Generic API Utility to perform the following tasks with minimal efforts:

-   Generate XML templates for Zuora SOAP operations.

-   Send SOAP requests to Zuora endpoints.


## Prerequisites

Ensure that the "API Write Access" permission is enabled for your user role in the Zuora tenant.

## Create SOAP Requests

To create a SOAP request:

1.  Navigate to New Task > Generic API Utility.
2.  In the General tab, complete the following settings:
    1.  Select the timing of execution from the Execution drop-down list. The default value is Onetime.
        -   Onetime - The task will be executed immediately when the resource is available.
        -   Scheduled - The task will be executed on the date and time specified in the schedule builder.
    2.  Select the login to your Zuora tenant from the Source drop-down list or create a new login. Do not select OAuth credentials or create new logins using OAuth because OAuth is not supported by Developer Tools.
    3.  Select the operation you want to perform from the Operation drop-down list.
    4.  Select the Zuora object on which you want to operate from the Object drop-down list.
3.  Click Generate. The SOAP request template is then generated in the text box.
4.  Edit the generated template based on your needs.
5.  (Optional) In the Options tab, update the XML namespaces, batch size, exported file format, or whether to perform the request as a single transaction in Zuora.
6.  If you selected Scheduled for the Execution field, complete the scheduler settings in the Schedule tab.
    1.  Select the time zone from the Timezone drop-down list. Zuora strongly recommends you to select the same time zone as for your Zuora tenant to avoid payment errors.
    2.  In the drop-down list next to Timezone, select the time frame of the schedule and complete the details of the selected time frame. The Timezone field and schedule builder are used to set how frequently the data is synchronized. It is recommended to set a Daily schedule and align the timezone to your Zuora tenant, which can align operations and ensure the app displays the latest data. The Interval field displays the specified schedules as a Cron expression and needs no further configuration.
7.  Click Create Task.


Alternatively, you can directly paste the ready-to-use SOAP request in the text box and click Create Task to make the request.

## View Request and Response

After a SOAP API request has been made, the response from Zuora is displayed in the Output XML tab. The response body is reorganized into a more user-friendly table in the Output Table tab.

You can also create a new SOAP request from this page.

## Limitations

The custom fields that are unique to your tenant will not be automatically included in the generated XML template, but can be manually added as additional nodes. Contact Zuora Global Support for assistance.
