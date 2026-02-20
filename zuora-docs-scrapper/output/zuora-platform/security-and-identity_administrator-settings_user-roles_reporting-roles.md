---
title: "Reporting roles"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/user-roles/reporting-roles"
product: "zuora-platform"
scraped_at: "2026-02-20T17:41:01.111Z"
---

# Reporting roles

This reference lists the user roles and permissions associated with the Reporting role.

Zuora platform administrators can manage access to Reporting features by setting roles and permissions. The following Reporting roles are available in the Manage Roles administration setting by default:

-   Zuora Reporting Standard User: This role has the permissions View Reports, Manage Reports, Enable DataSource Export, Enable Exports, and View Analytics described below.

-   Zuora Reporting Administrator: This role has all the Reporting permissions described below.


By default, each user is assigned the Zuora Reporting Standard User role.

You can create and assign custom roles that combine the following permissions:

| Permission | Description |
| --- | --- |
| View Reports | This permission enables users to access the Reporting user interface and:View shared reports.Mark shared reports as favorites.Run shared reports.Enter values required by filter conditions when running a shared report.View results of shared reports.Export results of shared reports to CSV files.Schedule runs of shared reports.For more information, see Folders and Sharing . |
| Manage Reports | This permission enables users to create, view, copy, rename, remove, favorite, share, and run reports. This permission also enables users to view report results and export report results to CSV files. |
| Manage All Reports | This permission enables users to:View report runs from all users and cancel any report run.Edit and delete scheduled report runs from all users.View and export results of reports run by all users.Hide (and show) Zuora Standard Reports for users that do not have the Manage All Reports permission. |
| Enable DataSource Exports | This permission enables users to access Data Sources, and download Data Source Export generated result files if your tenant has enabled user permission control for Data Source Export files.For more information, see Generate a Data Source Export .Note that the user permission control for Data Source Export files is not enabled by default. To enable this feature, submit a request at Zuora Global Support . |
| Manage Data Sources | This permission enables users to customize the data sources that are displayed by default.For more information, see Manage Data Sources . |
| Enable Exports | This permission enables users to:Run data exportsView and download data exports run by all usersFor more information, see Data Exports .The Enable Exports permission does not affect the following export links within the Zuora user interface. Users without the Enable Exports permission can use these links to directly download data from your Zuora tenant.Export Mass Order Entry on the All Subscriptions pagemore > Export this product on product detail pagesExport Credit Balance Applied on the All Invoices pageExport Bill Runs on the All Bill Runs pageExport Invoice Adjustments on the All Invoice Adjustments pageExport Credit Balance Transactions on the All Payments pageExport Payment Runs on the All Payment Runs pageExport Refunds on the All Refunds page |
| View Analytics | This permission enables users to:View the DashboardView or export cardsFilter the data that is displayed on cards (based on pre-selected fields from dataset), but not save any changes.Group the data that is displayed on cards (based on pre-selected fields from dataset), but not save any changes.Modify the chart types of cards, but not save any changes.For more information, see Using the Dashboard and Using the Explorer . |
| Manage Analytics | This permission enables users to:View and edit the Dashboard, including:Pin cards to the Dashboard and unpin cards from the Dashboard.Rearrange and resize cards that have been pinned to the Dashboard.Change display options for cards that have been pinned to the Dashboard, including the ability to switch between headline numbers and chartsView, export, edit, clone, create, and delete cards.View, export, edit, clone, create, and delete datasets.For more information, see Using the Dashboard and Using the Explorer . |
