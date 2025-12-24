---
title: "Transfer Report Ownership"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/transfer-report-ownership"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:48.601Z"
---

# Transfer Report Ownership

Helps reassign ownership of reports created by inactive users

Transfer Report Ownership API primarily helps reassign ownership of reports created by inactive users. Reports that have not been shard among other users become hard to manage in such cases. To mitigate this issue, the Transfer Report Ownership API allows you to transfer the ownership of reports from one user to another.

This API supports transfer by both `ReportNames` and `ReportIds:`

-   The user associated with the username & password listed in the HTTP headers must have Zuora Reporting Administrator role.

-   If you do not know what userId of new owner:

    -   Navigate to the Administration > Manage Users > Click the new owner's name.

    -   A URL haveing the UrseId is generated. For example, `https://{zuora endpoint}/apps/UserLogin.do?method=view&id=4c85f2b42ba949569a5d15e77c6b9742&flag=1&menu=Z-` `Admin`


The value of the "id" in the URL is the required userId.

Request:

curl -X POST https://zconnectsandbox.zuora.com/api/rest/v1/reports/transfer-ownership \\ -H 'Content-Type: application/json' \\ -H "apiAccessKeyId:{username}" \\ -H "apiSecretAccessKey:{password}" \\ -d '{ "reportNames": \[ "Report1", "Report2" \], "newOwnerUserId": " {new user id}" }'curl -X POST https://zconnectsandbox.zuora.com/api/rest/v1/reports/transfer-ownership \\ -H 'Content-Type: application/json' \\ -H "apiAccessKeyId:{username}" \\ -H "apiSecretAccessKey:{password}" \\ -d '{ "reportIds": \[ "Id1", "Id2" \], "newOwnerUserId": "{new user id}" }'

Response:

{"success" : true, "response" : "Transfer ownership successfully" }

The new user's transferred reports will be under the folder:

-   Transferred Reports YYYY-mm-DD


![Screenshot 2025-04-11 at 15.37.16.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d51c77bd-6531-4d11-bf6e-0cd51e1df2b4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ1MWM3N2JkLTY1MzEtNGQxMS1iZjZlLTBjZDUxZTFkZjJiNCIsImV4cCI6MTc2NjY4ODU4NiwianRpIjoiMTY1YjY3ZmM3YjgxNDE0YTgxNGRiZGRmMGIwMjA1MzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.TcbtiHDftWUxZkmfcp9jXzIFQqJOmOjRG8Z-a6Fatvk)
