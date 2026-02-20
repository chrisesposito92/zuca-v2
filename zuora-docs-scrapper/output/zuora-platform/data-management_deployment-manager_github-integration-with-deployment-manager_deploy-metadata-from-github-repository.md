---
title: "Deploy metadata from GitHub repository"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/github-integration-with-deployment-manager/deploy-metadata-from-github-repository"
product: "zuora-platform"
scraped_at: "2026-02-20T17:39:20.934Z"
---

# Deploy metadata from GitHub repository

Learn how to deploy a template using the Deployment Manager in Zuora, including navigating the interface, initiating a deployment, and uploading templates from a repository.

1.  Navigate to Deployment Manager on the left navigation menu in the Zuora Tenant.
2.  Click the +New icon to initiate a deployment.
3.  Select Upload Template .
4.  In the Type dropdown, select the upload from repository option and enter the following details:

    ![Deploy metadata from repository](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f7ab8ad1-ce35-4c77-aa21-a1d5704679c4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY3YWI4YWQxLWNlMzUtNGM3Ny1hYTIxLWExZDU3MDQ2NzljNCIsImV4cCI6MTc3MTY5NTU1NSwianRpIjoiYmFkOWE3NWIzMjdmNDNmYmI5YjRlMjE2N2Y2NGZhNmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.gZpn-R77gddqqj_HbCqJxRTwi9WyJ6BulIdEsLFQJOg)
    | Parameter | Value |
    | --- | --- |
    | Type | Upload the template from the repository or upload from local. |
    | Select Token Key | The Unique identifier provided at the time of mapping Deployment Manager to GitHub. |
    | Select repository and branch | Each repository in GitHub is tagged to a branch, select the applicable branch |
    | File path | File path is copied from the GitHub repo. It is the path of the json file that is stored repo>file name>click on copy path |
    | Commit Message | A brief description should be given for maintaining a record in GitHub, this can be the user story no or any description that will assist in tagging the file versioning and changes |

    To copy the file path, navigate to the file in the repository, select the file name, and click Copy path. For example, consider the file example.py located under the sample-repo repository in the main branch.

    1.  Navigate to [https://github.com/username/sample-repo](https://github.com/username/sample-repo).
    2.  Find and click on the src directory.
    3.  Click on example.py to open the file.
    4.  The breadcrumb navigation will show: sample-repo / src / example.py.
    5.  The full file path URL will be: https://github.com/username/sample-r...src/example.py.

        You can now copy this URL and use it as the file path. If you want to copy the relative path within the repository, you can use the breadcrumb path directly: src/example.py.

        ![Sample file for metadata](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/022eeeac-382d-4dcf-8d47-45682c3c9aa8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAyMmVlZWFjLTM4MmQtNGRjZi04ZDQ3LTQ1NjgyYzNjOWFhOCIsImV4cCI6MTc3MTY5NTU1NSwianRpIjoiNDZhYjAzYzc1MzkzNDcwM2E3N2YzOTEyZWUyZmY0ZDMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.LgoFbGk7TTsjutBP0kdoHvV_tP36wP0SH4wPKkvkjxY)


    The Retrieve button will automatically upload the template from the repository.
