---
title: "Export and import a workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/export-and-import-a-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:31:53.551Z"
---

# Export and import a workflow

Learn how to export and import a workflow.

You can export the logic and configurations of a workflow as a JSON file. The JSON file can be imported to create a replica of the workflow. The data that has been processed in a workflow cannot be exported or imported.

1.  On the Workflows page, click the Export button in the row of the workflow that you want to copy from. A new window pops up showing the JSON code of the workflow. ![Workflow JSON sample](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/edd0b60d-d83d-43ca-ab3d-a7d3d074a382?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVkZDBiNjBkLWQ4M2QtNDNjYS1hYjNkLWE3ZDNkMDc0YTM4MiIsImV4cCI6MTc2NjY0MDcxMSwianRpIjoiNzQ2ZmZhNjBhOTFiNDkwNmJlN2Q2NWE4NzNlZDZkNzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.GY8eRpD7ij8iBWQNX_L0UyRbbmTjpDvgyG0-aGyXtOc)
2.  Select and copy the complete code in the code area, and then close the window.
3.  Click ![Add icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8c87a611-f073-40c4-85b0-bc31f993da93?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhjODdhNjExLWYwNzMtNDBjNC04NWIwLWJjMzFmOTkzZGE5MyIsImV4cCI6MTc2NjY0MDcxMSwianRpIjoiZWY2NTY3YTc1MWJlNDkzOTgwNmM5ODIwZWRiZWViMTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Tlk9p5O931BxxlnetIeYxNXQ41qgtc2wDX91npvB5i4) and select \+ Blank Workflow Definition to add a blank workflow.
4.  In the New Workflow Definition dialog that opens, select the Import from JSON tab, and click Next.
5.  Paste the code to the JSON code area.
6.  Click Create. The new workflow is added to the list of workflows shown in the Workflows tab.

You have successfully export the logic and configurations of the active version for the workflow. To export a specific version, see [Export a specific version of a workflow](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/manage-workflow-versions/export-a-specific-version-of-a-workflow-definition) for more information.
