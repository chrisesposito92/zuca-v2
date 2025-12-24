---
title: "Subscriptions details through the reinvented UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-view-through-the-zuora-ui/subscriptions-details-through-the-reinvented-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:18:05.981Z"
---

# Subscriptions details through the reinvented UI

This article provides guidance on accessing and utilizing the subscription details page through the reinvented UI, including monitoring subscription lifecycle, filtering data, and managing attachments.

The information in this article only applies to users who want to access the subscription details page through the reinvented UI.

## Monitor subscription lifecycle and MRR trending

On the top of the subscription details page, you can click the subscription Lifecycle link ![Image: icon-lifecycle-link](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0fe0cb4b-68e4-49e7-a874-d804e63f88aa?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjBmZTBjYjRiLTY4ZTQtNDllNy1hODc0LWQ4MDRlNjNmODhhYSIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiZjc0YWIzMTlmMGQzNDgyZmIwYTEzNGIxYTFlYjQ1NDkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.arlTFN83StalI6M1HLkfAuQCfrEfhq2mpr3Ee3-ihGY) to open the Subscription Lifecycle & MRR Trending dashboard to view relevant data.

Note:

This feature is only available to the Orders Harmonization and Orders tenants where Order UI is enabled.

On the dashboard, you can filter the data using the following filters:

-   Rate Plans/Charge : Select a rate plan and rate plan charge in the subscription.
-   Show Events : Select events to be presented. For example, select the Invoices checkbox.
-   Date Range : Select one of the following date ranges to display data during that range:
    -   Full Lifecycle
    -   Current Term (default option)
    -   Custom: specify start and end dates with corresponding calendars

In the graph section, click on the following icons to view relevant details:

Note:

The graph data are fetched asynchronously with a slight delay. If you haven’t seen the latest subscription changes on the graph, please open this page again later.

-   If you selected the Invoices checkbox, click on the invoice icons in the posted ![Image: icon-invoice-posted](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cee1cdcf-a724-423d-8e0a-efba2bdf74d3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNlZTFjZGNmLWE3MjQtNDIzZC04ZTBhLWVmYmEyYmRmNzRkMyIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiNjlhMmY1NmJkYmU3NGFjN2JhOTMzYjMxZWIxYTBiYmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.8H9ZRt4wVDvDScQbR3NmvoDFSXhXpkubmk7O94DPhv0) , draft ![Image: icon-invoice-draft](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/540d134c-19a7-45cd-b14c-958136660928?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU0MGQxMzRjLTE5YTctNDVjZC1iMTRjLTk1ODEzNjY2MDkyOCIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiMDgxMWY0MDMyZTU0NDNiNTkyOTQyOWIxNmVkMWUzNDkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.rP4f_FnbrvS8OT8mgypdehijSj6KkHswRQZxG8g3R7A) , or preview ![Image: icon-invoice-preview](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1b88f73f-363d-4529-8fcb-756d2b92d4c7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFiODhmNzNmLTM2M2QtNDUyOS04ZmNiLTc1NmQyYjkyZDRjNyIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiMjYwOTFjYzc0MGQwNGUxOGIwZjM0MDNjZWU3NmE1YWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.JAYyjj9RStypZTwwP6rJupxwXS0srXwQ288LeIedPPw) status to view invoice details.
-   Click the order action icons ![Image: icon-order-action-indicator](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e9431295-cde0-45f9-b754-1ccd7009cb5b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU5NDMxMjk1LWNkZTAtNDVmOS1iNzU0LTFjY2Q3MDA5Y2I1YiIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiNGM3MWI2MWQ2YWNmNDgzZjkyOTRmY2E5MDRkYjFkNjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.c_DCUrnSuAzOYK1Aww0xcnJJ8hggR89KM-3IP0upwNE) to view order action details.
-   Click the MRR data icons ![Image: MRR_icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0c047e2d-32ba-4bf0-a315-350a321ea036?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjBjMDQ3ZTJkLTMyYmEtNGJmMC1hMzE1LTM1MGEzMjFlYTAzNiIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiYzBhNWEwMjg1OWU4NDE4NDk5OGYyMTljYjBmNmY0YWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.mgjSIsHbVdn1UY5qO-3KafcoFtGgwikjgxyCmHxuGlk) below the order action icons to view the net MRR data on the order action dates, and click other MRR data icons ![Image: icon-mrr-data-solid-circle](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/29130d6d-d447-4c2d-9579-a0f7ee7ae01c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI5MTMwZDZkLWQ0NDctNGMyZC05NTc5LWEwZjdlZTdhZTAxYyIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiYjY0YTY5MTUyZjIyNDExY2EzZWZmZGY4ODEwNWUzYzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ebu1HWmgG78fPauKcZhxXx7So2vLZRIhL-LQ9zMZcHE) to view the net MRR data on the first day of each month. The net MRR data is calculated based on the aggregated charge metrics of one-time and recurring charges, not including the usage charges.


Slide the bars at both sides on the bottom graph to zoom in and out of the graph above.

## Functional sections

The subscription details page is classified into the following functional sections:

-   Current MRR, TCV, and Ending MRR metrics
-   Basic Information
-   Additional information
-   Subscription Change History
-   Included Products
-   Prepayment Balance
-   Associated Events
-   Automation History section
-   Attachments

Note:

Note: If you want to edit the preceding sections, you need to have the following permissions:

-   Platform role: UI Access
-   Billing role: Manage Subscriptions/Amendments

For more information, see Platform roles and Billing Roles .

## CMRR, TCV, Today's MRR, and Ending MRR metrics sections

You can click the question mark icon ![Image: icon-question](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fb677962-d651-485b-8d10-4e2adf4543de?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZiNjc3OTYyLWQ2NTEtNDg1Yi04ZDEwLTRlMmFkZjQ1NDNkZSIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiZTkxNDQ5MGQ0MjNmNDkwOThkMWNmNmZkNzE3Y2MxYjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.JEKJebVbIi_FAaRVERQObyS5AKWIJWnQS4ASe1zwF6g) next to CMRR , TCV , TODAY'S MRR , and ENDING MRR sections to view the summary and learn more details.

Note:

The TCV and Ending MRR sections are not displayed for the evergreen subscriptions.

## Additional information section

This section includes custom fields for the subscription. The custom fields display in alphabetical and numerical order, and the picklist values of a custom field display in the same order as the custom field configuration. For more information, see Manage Custom Fields .

Note:

You need to click the down arrow ![icon-expand-list](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/90bc37c0-5ef5-4c1e-b2e5-4a276b883b52?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkwYmMzN2MwLTVlZjUtNGMxZS1iMmU1LTRhMjc2Yjg4M2I1MiIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiM2M1OWFiOTZmZDJkNDQyMGE3ZTM5N2Y2ZThkOGJjOTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.nN3y9hKZcw7FWqkpPc87fieBjHgX64gIz_PCAVgx2NI) at the top right to expand a table to view all custom fields.

In this section, you can click the edit icon ![icon-edit-gray](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ec2edb60-9308-4d44-b303-a5d2a696085f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVjMmVkYjYwLTkzMDgtNGQ0NC1iMzAzLWE1ZDJhNjk2MDg1ZiIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiYWRlZDRhMWJjYTc4NDJhM2ExOWY2MWMzZDIwMmNmZDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.wZwI1Csbfy0cOlCfrbfMsDIna1mbJ419VTDluxT7F6U) to edit all fields belonging to the Custom Fields field group.

## Other Related Orders

The section lists associated orders in scheduled, executing, failed, pending, and draft statuses. You can click each status tab to view more details.

## Prepayment Balance section

This section is only available if the Prepaid with Drawdown feature is enabled. For more information, see Track prepaid balance .

## Attachments section

This section includes the attachments uploaded for the subscription.

In this section, you can search for an attachment in the search box next to the search icon ![icon-search](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/024d91f0-7003-414f-b86c-6cf2b1cb885e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAyNGQ5MWYwLTcwMDMtNDE0Zi1iODZjLTZjZjJiMWNiODg1ZSIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiZGIwMThiM2I0YzhlNDU4MmE3NjkxM2Y1ZTA2ZTFjMDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.g7lQs687xyV89CjUKMAUGTP6sjIolzz_EhnarirBL3g) , and click \+ New Attachment to open a window to upload an attachment.

To upload an attachment, you can do one of the following:

-   Drag and drop the attachment in the window
-   Use the click link in blue to specify the directory of the attachment, then click Open

You can also perform one of the following in the Actions column for each attachment:

-   Click the edit icon ![Image: icon-edit-gray](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ec2edb60-9308-4d44-b303-a5d2a696085f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVjMmVkYjYwLTkzMDgtNGQ0NC1iMzAzLWE1ZDJhNjk2MDg1ZiIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiNTUyNDQ0ZmNlM2NmNGUwOTg4N2ExMjEwNDQ5NWFiOGYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.QIMqWPtBsdAok2DNvYMetH7Yf0sV_nK4JOcSdmP8Rg4) to edit the title and description, and then click the accept icon ![Image: icon-accept](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9fe22585-8a87-4ad9-9513-90f324c1c036?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjlmZTIyNTg1LThhODctNGFkOS05NTEzLTkwZjMyNGMxYzAzNiIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiZTA3ZDA1ZjdhMTFiNDIxYjg0Y2M2NWRlZmRmMDlhNGEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.UehM8YkRwoRUomviWk6KlJLDfuzONnZV-bfTqQONG_0) to accept the change or click the reject icon ![Image: icon-reject](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/354186f1-70de-4706-ac40-5650445ad10d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM1NDE4NmYxLTcwZGUtNDcwNi1hYzQwLTU2NTA0NDVhZDEwZCIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiNTBkNTI0ZGFiZDE4NDEyMWJjMTA2ZmZiYTNlMjkzNzUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.32oHhGELKwp7HaXJqC4G_btbvByIH-gEV-_qTpGsPas) to reject the change
-   Click the download icon ![Image: icon-download](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e8da316b-7d69-472e-a111-8e4a94092d7b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU4ZGEzMTZiLTdkNjktNDcyZS1hMTExLThlNGE5NDA5MmQ3YiIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiMzViMDJhZGYwN2VjNGE5ZDg0MzhjMDEyNDYwOGEyNzgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Ny_n6XoAms3zA4cickWZd2P-8bMe3RPpAaEeNQ5dBtg) to download the attachment
-   Click the delete icon![Image: icon-delete-hollow](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/84d12b99-cbf5-4c5d-98b8-ffcc926f0e18?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg0ZDEyYjk5LWNiZjUtNGM1ZC05OGI4LWZmY2M5MjZmMGUxOCIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiNjkxNjdkN2NjMTIxNDE1ZGFlYTFhNDZkMjYzY2ZlMWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.56ki9joIU3SL1yfYh8U5eEmM6gkyGv5T9AjuJuOjNoU) to delete the attachment

## Other tasks you can perform on the subscription details page

You can perform other tasks on the subscription details page:

-   Click the feedback icon ![Image: icon-feedback](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e307523d-a63a-4210-917e-adcc37d7c3ab?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUzMDc1MjNkLWE2M2EtNDIxMC05MTdlLWFkY2MzN2Q3YzNhYiIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiMjY2NjM5ZjU3Y2U1NDA4ODkyZWIzOWE5YmYxYWVlMzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.vBMlhz3vhCQJ39ZOZAxO-Cr-AjLV1toaKrwxBqbIzBE) next to the version history icon ![version history list](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2aede456-3ddb-4346-af3a-6cc621b5be42?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJhZWRlNDU2LTNkZGItNDM0Ni1hZjNhLTZjYzYyMWI1YmU0MiIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiM2ZjMWE2OGY2YjdiNDM0Yjk2MzgzOWExMTZlZDQxZGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.0aMxyoe4XR0gSYiSlINxvJOid53OmC7QtTrOfkVpTiA) to provide your feedback to the reinvented subscription details page.
-   You can click one of the action buttons in the top-right corner (for example, the Preview button), or click the more options icon ![Image: icon-more-options](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3e3e8326-2911-4c96-89f9-4f3082fb2a93?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNlM2U4MzI2LTI5MTEtNGM5Ni04OWY5LTRmMzA4MmZiMmE5MyIsImV4cCI6MTc2NjYzOTg4NCwianRpIjoiMjY4ZDU3MTE3OWYzNDY3NDgyMTM3N2I5OTRkNTcxZmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.0HsvWJNyjKLuBvdZOfDFlpIaPjeeD2U-5NKbctt6fiE) and then select one action to perform an action for the subscription.
