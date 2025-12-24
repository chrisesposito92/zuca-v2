---
title: "Folders and sharing"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/use-reporting/folders-and-sharing"
product: "zuora-platform"
scraped_at: "2025-12-24T18:41:45.314Z"
---

# Folders and sharing

Learn about folders and sharing

When saving your report you are prompted to select a folder (or folders) where you can find it later.

By default, Reporting shows you the following folders:

-   Favorites - Click the star to the left of a report's name to mark any report as a favorite to show it in your Favorites folder. Remove reports from the Favorites folder by deselecting the star next to the report name.

-   My Reports - Unless you explicitly save (or move) a report to a shared folder, the reports you create will be private and accessible to you in the My Reports folder.

-   Reports Shared with Me - All Reporting users can view, edit and run reports saved into shared folders. Folders that appear in the Reports Shared with Me section were shared by other users. You can see report definitions, schedule and run any reports they contain. Users with manage permissions can also edit reports that were shared by another user. However, only users who created the shared folders can update the folders, such as rename or remove them. You can share any of your reports too by either moving a report to a shared folder or by changing a private folder into a shared folder. Refer to the sections below on moving a report and sharing reports.

-   Zuora Standard Reports - The Zuora Standard Reports folder contains some of the most frequently requested reports. See [Standard reports](/zuora-platform/data/reporting/reporting-quick-reference/standard-reports) for more information.


## Search for a report

You can search reports by name on the Reporting Home page. Search results include your reports, reports shared with you, and Zuora standard reports.

When searching reports, you must enter at least three characters per word.

## Move or delete a report

Move a report from one folder to another by using the Move option.

1.  In the report list, click the arrow next to Run Detail Report.
2.  Select one or more destination folders. Reports can appear in any number of folders. You can click CTRL + Click on Windows or Command + Click on Mac OS X to select multiple folders. The report will be moved to all of the selected folders.

Note:

Deleting a report will remove it from all folders where it may appear. If you wish to remove a report from a particular folder, use the Move option to deselect the folder where you don't want the report to appear.

You cannot move or delete a report unless you created the report.

## Modify a folder

If you have permission to modify a folder, you can right-click the folder to display a folder actions menu:

-   Add Label \- Creates a new sub-folder

-   Edit \- Change the folder display name

-   Delete \- Deletes the folder. See "Delete a folder" (below) for more information.

-   Share / Unshare \- Sharing makes a folder and the reports it contains visible to all users with view permission. See "Share a report" (below) for more information.


## Add a new folder

There are two ways to add new folders:

-   Click ![Spotlight_AddNew1.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/52798d63-73bb-4ce0-a8f4-a30b2caa8da9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUyNzk4ZDYzLTczYmItNGNlMC1hOGY0LWEzMGIyY2FhOGRhOSIsImV4cCI6MTc2NjY4ODEwMywianRpIjoiMDY1Yzk4N2NkZDIwNDJhZmE2ZDVhMDcwZDZkYWQwN2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.PB3_GJbg-0NOYVPJaVVemQvp-ZNLTSoL5tuFyFzqFaw) to create a new folder.

-   Right-click an existing folder then select the Add Label option to add a sub-folder to an existing folder.


## Delete a folder

To delete a folder, right-click the folder then select Delete.

When you delete a folder, Zuora does not delete any reports that are contained in the folder. Instead, Zuora moves the reports to the parent folder.

For example, suppose that you have a folder called "Temporary reports" within My Reports, and "Temporary reports" contains a report called "Number of products". If you delete the "Temporary reports" folder, Zuora moves the "Number of products" report to My Reports:

| Before deleting the "Temporary reports" folder | After deleting the "Temporary reports" folder |
| --- | --- |
|  |  |

If you are looking for a report and cannot find it in any of your folders, try looking at the top level of My Reports and Reports Shared With Me in case the report was moved when a folder was deleted.

## Share a report

-   Standard users and Administrators can share any report with all Reporting users by saving or moving a copy of it into a folder within the Reports Shared with Me folder or any other folder that is shared.

-   Users may share a folder by selecting the Share option presented in that folder's contextual menu. Only Standard users and Administrators can do that.

-   Folders that were marked as shared can also be made private or "unshared" with the same contextual menu option.

-   When you create shared folders, all of the reports and subfolders that they contain will appear in the Reports Shared with Me area for other users.


## Folder sharing behavior and best practice

When sharing folders, keep the following points in mind:

-   If you share a parent folder, all its subfolders are shared automatically, maintaining the folder structure.

-   If you share a subfolder independently, it appears as a separate folder without hierarchy. If the parent is later shared, the subfolder will appear twice, once as part of the hierarchy and once as an individual shared folder.

-   As a best practice to maintain a clear folder structure and avoid duplicates, Zuora recommends sharing folders at the parent level instead of sharing subfolders separately.


## Read-only reports

When you save a report, you can choose to make the report read-only. Zuora displays a ![Reporting_Lock.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/716e3ec5-d585-4862-8675-3417ab29499f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjcxNmUzZWM1LWQ1ODUtNDg2Mi04Njc1LTM0MTdhYjI5NDk5ZiIsImV4cCI6MTc2NjY4ODEwMywianRpIjoiNGNjMzQ1NjliMDE2NDZjZDgyYWQ4OWRkNDkwZTlmNjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.gn0i1TAlHc9zIhw-lNy4LggADwgdOtwumwtVs6F-XVc) lock symbol next to the report name to indicate that the report is read-only.

If you create a read-only report then share the report, all Reporting users can view the report, run the report, and save a copy of the report. However, only you can edit, move, or delete the report.

To change the read-only setting of a report that you created, either:

-   In the report list, click the arrow next to Run Summary Report or Run Detail Report, then click Move.

-   In the report builder, click the arrow next to Save , then click Move.


## What is next?

Find out what roles and permissions enable users to create new reports and how the ability to create new reports may be restricted. See [Zuora Reporting Roles and Permissions](/zuora-platform/system-management/administrator-settings/user-roles/reporting-roles) for more information.
