---
title: "Create Azure storage account"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-azure-delta-lake/create-azure-storage-account"
product: "zuora-platform"
scraped_at: "2026-01-15T22:01:23.983Z"
---

# Create Azure storage account

Know how to create Azure storage account

1.  In the Azure portal, navigate to the Storage accounts service and click \+ Create.
2.  In the Basics tab of the Create a storage account form, fill in the required details.
3.  In the Advanced settings, under Security make sure Enable storage account key access is turned on. You may turn off (clear) Allow enabling public access on containers.
4.  Under Data Lake Storage Gen2, select Enable hierarchical namespace.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e1ca57fb-a52c-4d6d-a335-3b7e545d92d2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUxY2E1N2ZiLWE1MmMtNGQ2ZC1hMzM1LTNiN2U1NDVkOTJkMiIsImV4cCI6MTc2ODYwMDg4MSwianRpIjoiN2I5MWZiM2RmMmFmNDM5MWJiZWFhNmY4NDc4NjU4ZmIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.5KLEl_94kiiAwuvTF3H-127Hja44MaKeuAKhiNmTE9w)

5.  In the Networking settings, you may limit Network access to either Enable public access from all networks or Enable public access from selected virtual networks and IP addresses.

    If the latter is selected, be sure to add the service's static IP to the address range of the chosen virtual network. All other settings can use the default selections.

6.  In the Data protection settings, you must turn off:

    -   Enable soft delete for blobs

    -   Enable soft delete for containers

    -   Enable soft delete for file shares


    ![data_protection_settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/76c75167-b850-4767-8fb0-2e696ede4a1f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc2Yzc1MTY3LWI4NTAtNDc2Ny04ZmIwLTJlNjk2ZWRlNGExZiIsImV4cCI6MTc2ODYwMDg4MSwianRpIjoiZDhlZmE1ZDZmYjE0NDE3Yzk0OGU0NGMyNTYyMjdhMzkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.Rc5HNL8sxDoLIJCIpygJVGBeSIdOU8-JlZuc7DQgpAQ)

7.  Once the remaining options have been configured to your preference, click Create.
