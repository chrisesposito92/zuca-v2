---
title: "Migrate Tenant Information"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configure-api-loader-for-specific-zuora-objects/migrate-tenant-information"
product: "zuora-platform"
scraped_at: "2025-12-24T05:47:04.863Z"
---

# Migrate Tenant Information

Learn how to use an API loader to export and import tenant information efficiently.

You can use an API loader to export the information on an object from a tenant and import it to another tenant.

Take the following steps to migrate the information on an object:

1.  In the General tab, complete the following settings:
    1.  Enter the name of the task in the Name field.
    2.  Select Migrate from the Run Mode drop-down list.
    3.  (Optional) Select the timing of execution from the Execution drop-down list. The default execution is Onetime .

        -   Onetime \- The task will be executed immediately when the resource is available.

        -   Scheduled \- The task will be executed on the date and time specified in the schedule builder


    4.  (Optional) Select the build name from the Build Name drop-down list and the build version from the Version drop-down list if you want to run the task at a previous build version. The latest build name and version are populated by default. It is not recommended to update these fields because it could stop you from using the latest functionality built in the tool.
    5.  Select the login to the tenant from which the data will be migrated from the Source drop-down list and the login to the tenant to which the data will be migrated from the Target drop-down list. If the desired login credentials are not included in the drop-down list, click New to create new logins to the source or target tenant. Do not select the existing OAuth credentials or create new logins using OAuth because OAuth is not supported by Developer Tools.
2.  In the Advanced tab, complete the following settings:
    1.  In the Where Clause text box, enter an Export ZOQL filter statement . against the respective object, for example, `RatePlan = 'Rateplan12'` .
    2.  (Optional) Configure other settings based on your needs. The following list provides additional information about several important fields:

        -   Max Threads \- Sets the number of threads that can be processed concurrently by Invoice API Generator. The value for this field should not exceed Zuora's concurrent request limits. The default value is 3.

        -   Max zObjects \- Sets the maximum number of the objects used in each call to Zuora. The default value is 50.


3.  If you selected Scheduled for the Execution field, complete the scheduler settings in the Schedule tab.
    1.  Select the time zone from the Timezone drop-down list. Zuora strongly recommends you to select the same time zone as for your Zuora tenant to avoid payment errors.
    2.  In the drop-down list next to , select the time frame of the schedule and complete the details of the selected time frame. The field and schedule builder are used to set how frequently the data is synchronized. It is recommended to set a schedule and align the timezone to your Zuora tenant, which can align operations and ensure the app displays the latest data. The field displays the specified schedules as a Cron expression and needs no further configuration.
4.  Click Create .
