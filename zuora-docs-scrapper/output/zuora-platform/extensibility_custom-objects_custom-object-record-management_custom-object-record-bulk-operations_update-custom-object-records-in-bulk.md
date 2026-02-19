---
title: "Update custom object records in bulk"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-objects/custom-object-record-management/custom-object-record-bulk-operations/update-custom-object-records-in-bulk"
product: "zuora-platform"
scraped_at: "2026-02-19T03:25:53.231Z"
---

# Update custom object records in bulk

Learn how to update custom object records in bulk via the Object Manager.

You can update custom object records in bulk by uploading a `.csv` file that includes the field values of each record. The column names of the `.csv` file must align with the custom fields’ API name. For example, `brand__c` and `model__c`. Each row in the file represents a custom object record to be updated.

The `.csv` file for updating must contain a column named `Id`, linking each row in the file to an existing custom object record.

1.  Navigate to in the left navigation menu.
2.  Click the custom object name in the Label column. The custom object detail page opens.
3.  Click View Object Records in the upper right of the window.
4.  Click the Import icon ![Upload icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4d36f037-1da3-45fb-8591-699265bcc4dc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRkMzZmMDM3LTFkYTMtNDVmYi04NTkxLTY5OTI2NWJjYzRkYyIsImV4cCI6MTc3MTU1Nzk0NywianRpIjoiNWJkM2I3OWY0ZjJkNDQwZjk5MDk3NWNlNTcxNTk0ZWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.RVtofXc-yGBFZ_2RDuaDjQd-nASl5sCzNINlEg7x0B4) at the upper right of the record list view.
5.  From the Action to Perform list, select Bulk Import.
6.  Click Choose File, and then select the `.csv` file you want to upload.
7.  Click Upload.

Zuora creates a bulk job when receiving an uploaded `.csv` file. After the bulk job processing is finished, you can find the updated records by reloading the record list view page. The processing time varies depending on the data volume. For more information about how to view bulk job status in your tenant, see View custom object bulk jobs .
