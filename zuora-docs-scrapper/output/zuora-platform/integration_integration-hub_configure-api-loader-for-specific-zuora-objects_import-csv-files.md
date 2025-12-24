---
title: "Import CSV Files"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configure-api-loader-for-specific-zuora-objects/import-csv-files"
product: "zuora-platform"
scraped_at: "2025-12-24T05:46:55.890Z"
---

# Import CSV Files

Learn how to import CSV files to create Zuora object instances, including saving CSV files in the correct format using Microsoft Excel on Mac OS.

If you are using Microsoft Excel on Mac OS, you must save the .csv file in MS-DOS Comma Separated (.csv) format.

To import a CSV file to create Zuora object instances:

1.  In the General tab, click Download to download the template as a CSV file.
2.  Complete the columns in the downloaded template. For the explanation for each column, see Template Fields for more information.
3.  Complete the following settings in the General tab:
    1.  Enter the name of the task in the Name field.
    2.  Select Import from the Run Mode drop-down list.
    3.  Select the timing of execution from the Execution drop-down list. The default execution is Onetime .

        -   Onetime \- The task will be executed immediately when the resource is available.

        -   Scheduled \- The task will be executed on the date and time specified in the schedule builder.


    4.  (Optional) Select the build name from the Build Name drop-down list and the build version from the Version drop-down list if you want to run the task at a previous build version. The latest build name and version are populated by default. It is not recommended to update these fields because it could stop you from using the latest functionality built in the tool.
    5.  Select the login to your Zuora tenant from the Target drop-down list or create a new login.
4.  In the Advanced tab, complete the following fields:
    1.  Click Choose File and upload the completed template.
    2.  (Optional) Configure other settings based on your needs. The following list provides additional information about several important fields:

        -   Max Threads \- Sets the number of threads that can be processed concurrently by Invoice API Generator. The value for this field should not exceed Zuora's concurrent request limit. The default value is 3.

        -   Max zObjects \- Sets the maximum number of the objects used in each call to Zuora. The default value is 50.


5.  If you selected Scheduled for the Execution field, complete the scheduler settings in the Schedule tab.
    1.  Select the time zone from the Timezone drop-down list. Zuora strongly recommends you to select the same time zone as for your Zuora tenant to avoid payment errors.
    2.  In the drop-down list next to Timezone , select the time frame of the schedule and complete the details of the selected time frame. The Timezone field and schedule builder are used to set how frequently the data is synchronized. It is recommended to set a Daily schedule and align the timezone to your Zuora tenant, which can align operations and ensure the app displays the latest data. The Interval field displays the specified schedules as a Cron expression and needs no further configuration.
6.  Click Create .
