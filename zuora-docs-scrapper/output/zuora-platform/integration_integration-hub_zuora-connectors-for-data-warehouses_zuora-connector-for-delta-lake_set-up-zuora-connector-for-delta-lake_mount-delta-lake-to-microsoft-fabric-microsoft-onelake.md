---
title: "Mount Delta Lake to Microsoft Fabric & Microsoft OneLake"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/mount-delta-lake-to-microsoft-fabric--microsoft-onelake"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:48.876Z"
---

# Mount Delta Lake to Microsoft Fabric & Microsoft OneLake

Learn how to mount Delta Lake to Microsoft Fabric & Microsoft OneLake

Note:

Column Mapping: Requires delta lake tables use column mapping mode `NONE`.

1.  Navigate to the Microsoft Fabric.
2.  Navigate to your lakehouse, if you do not have one, create one.
3.  In your lakehouse, select the ellipses (…) next to Tables and then select "New shortcut".

    ![Delta_Lake_Microsoft_fabric](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d403d3a8-4bff-469c-970d-fbab3356fe75?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ0MDNkM2E4LTRiZmYtNDY5Yy05NzBkLWZiYWIzMzU2ZmU3NSIsImV4cCI6MTc3MTU1ODQyMSwianRpIjoiMGYxZTkzN2Q3MzM4NDVkMzg4MWNhZDkyNmJmN2ZkMzgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.EaayCNiMoZHguPE_DtPR20PmL_EBbyPYX5_KPwsd9eU)

4.  In the New shortcut screen, select your bucket provider. Normally this will be Azure Data Lake Storage Gen2 tile.
5.  Connect to your bucket and select the path of the delta lake table `'<configured_path>'/<table_name>'`

    ![Delta_Lake_table_path](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f63e25b3-22bf-44eb-99fb-618986d71dae?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY2M2UyNWIzLTIyYmYtNDRlYi05OWZiLTYxODk4NmQ3MWRhZSIsImV4cCI6MTc3MTU1ODQyMSwianRpIjoiYzFmZmQzYTIwZGE0NGM0YTkyZTZiNmRkYTI2NTJjODYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.wOWQ5DDmPuDJLxYPL7UFORWH2u0xg5TIUsPVC2Sbla8)

6.  After creating the shortcut, the shortcut should appears as a Delta table under Tables. It may appear as "Unidentified", this is a UI bug in Azure.
7.  To confirm the table is correctly mounted, select "SQL Analytics endpoint" from the drop down to the left of the "share" button, in the top right of the console.
8.  The shortcut should correctly appear as a Delta table under Tables.
9.  \[optional\] Click the New semantic model button at the top of the page to setup the mounted table for use in Microsoft products like PowerBI.

    Note:

    Vector Support: Azure Fabric and Microsoft OneLake do not support Delta Lake vector columns. These columns will be omitted from any table you mount.
