---
title: "Upload and sync configuration template to repository"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/source-code-integration-with-deployment-manager/upload-and-sync-configuration-template-to-repository"
product: "zuora-platform"
scraped_at: "2025-12-24T05:13:05.298Z"
---

# Upload and sync configuration template to repository

Learn uploading and syncing configuration templates, including creating new templates, uploading them to a repository, and ensuring they are updated with the latest modifications.

Note: Configuration Templates for Product Catalogs and Reporting must be created separately and should not be associated with other metadata configurations, such as Settings, workflows, custom fields, and so on.

1.  Navigate to Administration > Configuration Templates on the left navigation menu of the Zuora Tenant.
2.  In the Templates list view page, click +New to add a new template.
3.  Click Upload to repository tab to upload the template to the repository at the time of creation.
4.  Click the Git Icon to upload the template to the repository.

    Note: It is recommended to use sync only when modifications are made to the configurations of an existing template.

5.  Enter the following details in the Upload code to source pop-up:

    | Parameter | Value |
    | --- | --- |
    | Source Control | The Source Code Repository. |
    | Select Token Key | The unique identifier provided at the time of mapping Deployment Manager to GitHub. |
    | Select repository and branch | Each repository in GitHub is tagged to a branch, select the applicable branch. |
    | Folder path/New Folder Name | This is optional. You can create a sub-folder in the repository for storing the files |
    | Commit Message | Provide a brief description for maintaining a record in GitHub. This can be the user story number or any description that will assist in tagging the file versioning and changes |

6.  Once the template is successfully uploaded, the status of the template changes to Uploaded .


| Icon or Status | Description |
| --- | --- |
|  | The Deployment Manager is integrated with the source control repository. |
|  | The configuration template is refreshed with the latest modifications. |
|  | The configuration template is refreshed with the latest modifications in the Zuora Tenant. |
|  | The configuration template is uploaded to the source code repository. |
