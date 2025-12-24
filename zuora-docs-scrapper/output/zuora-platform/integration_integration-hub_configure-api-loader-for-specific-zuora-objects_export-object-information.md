---
title: "Export Object Information"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configure-api-loader-for-specific-zuora-objects/export-object-information"
product: "zuora-platform"
scraped_at: "2025-12-24T05:46:52.883Z"
---

# Export Object Information

Learn how to configure and execute an export task for object information using the General and Advanced settings tabs.

Take the following steps to export the information on an object:

1.  In the General tab, complete the following settings:
    1.  Enter the name of the task in the Name field.
    2.  Select Export in the Run Mode drop-down list.
    3.  Select the timing of the execution in the Execution drop-down list. The default execution is Onetime .

        -   Onetime \- The task will be executed immediately when the resource is available.
        -   Scheduled \- The task will be executed on the date and time specified in the schedule builder.

    4.  (Optional) Select the build name in the Build Name drop-down list and build version in the Version drop-down list. The latest build name and version are populated by default. It is not recommended to update these fields because this could stop you from using the latest functionality built in the tool.
    5.  Select the login to your Zuora tenant from the Source drop-down list or create a new login. Do not select the existing OAuth credentials or create new logins using OAuth because OAuth is not supported by Developer Tools.
2.  In the Advanced tab, complete the following settings:
    1.  In the Where Clause text box, enter an Export ZOQL filter statement against the respective object. For example, `ProductRatePlanChargeTier = 'tier1'` .
    2.  (Optional) Complete other settings based on your needs.
3.  If you selected Scheduled for the Execution field, configure the scheduler in the Schedule tab.
    1.  Select the time zone from the Time Zone drop-down list. Zuora strongly recommends you to select the same time zone as for your Zuora tenant to avoid payment errors.
    2.  In the drop-down list next to Time Zone , select the time frame of the schedule and complete the details of the selected time frame. The Time Zone field and schedule builder are used to set how frequently the data is synchronized. It is recommended to set a Daily schedule and align the timezone to your Zuora tenant, which can align operations and ensure the app displays the latest data. The Interval field displays the specified schedules as a Cron expression and needs no further configuration.
4.  Click Create.
