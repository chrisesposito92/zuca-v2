---
title: "Manage Tasks"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/manage-tasks"
product: "zuora-platform"
scraped_at: "2025-12-24T05:47:22.861Z"
---

# Manage Tasks

You can view the created tasks of all developer tools in the Tasks tabs. A unique ID is assigned to each task.

## Manage a Task

For each task in the Tasks tab, click the action icon and the following actions on the task are available to you:

-   Details - View the task configuration, execution log, and input and output files. If you encounter any issue during the task execution, you can use this action to troubleshoot the issue.
    -   The general information and the task configuration is displayed in the General and Options tab.
    -   The execution log is displayed in the Log tab. The log file can also be found in the Files tab.
    -   All the input and output files, including the log file, can be found in the Files tab.
-   Clone - Clone the task.
-   Delete - Delete the task.
-   Permissions - Manage users' permissions (see below topic) to the task.

## Manage User Permission

To grant a user permission to view or edit a task:

1.  Click the menu and select Permissions.
2.  Select the Access check boxes for the user added to the Authorized Instance Users list.
3.  Click Save Permissions. The added user will have permission to view or edit the corresponding task.

## Throttling

Developer Tools is designed to run only two concurrent jobs at a time. Therefore, if you have multiple tasks to be executed simultaneously, Developer Tools will execute the first two tasks on a "first-come, first-serve" basis. After one job completes, it will start executing the next queued job until all tasks are complete.
