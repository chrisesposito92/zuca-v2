---
title: "Create Azure storage account"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-azure-blob-storage/set-up-the-zuora-connector-for-azure-blob-storage/create-azure-storage-account"
product: "zuora-platform"
scraped_at: "2025-12-24T08:40:45.215Z"
---

# Create Azure storage account

Create Azure storage account

1.  In the Azure portal, navigate to Storage accounts service and click \+ Create.
2.  In the Basics tab of the Create a storage account form, fill in the required details.
3.  In Advanced settings, under , make sure Enable storage account key access is turned on. You may turn off (clear) Allow enabling public access on containers. Under Data Lake Storage Gen2, select Enable hierarchical namespace.

    ![1-azure-settings-toggles.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1e398f57-d362-4cee-8739-cb99ae397f63?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFlMzk4ZjU3LWQzNjItNGNlZS04NzM5LWNiOTlhZTM5N2Y2MyIsImV4cCI6MTc2NjY1MjA0MiwianRpIjoiNWNjYzhlYzgyZjQ4NDIwMThhNmJiNzEwNTY2ZDI0Y2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9._pVXAA5PYgMvA9JFFjOnXZOm5gO5MdSlgpD05OfN7k0)

4.  In the Networking settings, you may limit Network access to either Enable public access from all networks or Enable public access from selected virtual networks and IP addresses. If the latter is selected, be sure to add the service's static IP to the address range of the chosen virtual network. All other settings can use the default selections.
5.  In the Data protection settings, you must turn off Enable soft delete for blobs, Enable soft delete for containers, and Enable soft delete for file shares.

    ![2-azure-turn-off-settings.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e507158b-8ab1-480f-a397-f73396342cd9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU1MDcxNThiLThhYjEtNDgwZi1hMzk3LWY3MzM5NjM0MmNkOSIsImV4cCI6MTc2NjY1MjA0MiwianRpIjoiOTI3NjkzOGQ4MmUyNDJlN2IzZDAxODljMjNkZDMwZDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.SlcFby0lQrKSEPU5pQECm2ZHQrDaoYmlx0ck7iNUgxQ)

6.  Once the remaining options have been configured to your preference, click Create.
