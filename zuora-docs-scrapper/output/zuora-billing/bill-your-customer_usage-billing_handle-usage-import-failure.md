---
title: "Handle usage import failure"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/handle-usage-import-failure"
product: "zuora-billing"
scraped_at: "2025-12-24T08:28:39.662Z"
---

# Handle usage import failure

Learn how to handle usage import failures and configure notifications for error details.

In some cases, you might see a status message similar to this one, after uploading a usage file: 1 usage import is still not completed as of 12/3/12 3:20 PM. If you wait for a while and refresh the page, the message disappears.

In this case, the upload process encountered errors and the usage data was not uploaded successfully. Zuora has a notification that you can configure to provide more details about the error.

To enable this email notification, complete the following steps:

1.  Navigate to Extension Studio > Events & Notifications in the left navigation menu.
2.  Locate the Failed Status notification defined on the Import Processed event and click the Edit icon ![Edit icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6c4955ce-f413-4102-9a7d-92c4df7969a1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZjNDk1NWNlLWY0MTMtNDEwMi05YTdkLTkyYzRkZjc5NjlhMSIsImV4cCI6MTc2NjY1MTMxNywianRpIjoiYzM4YjgzMmFhMWFmNDE1N2IzMjU5NmYwY2I5NmRhM2MiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.H_8_H7Zd26519I_ll1Q2_ZSWmFluiVB0bkvLGotLEPo).
3.  Enable the Active option and click Save.
4.  Upload your usage data again.
    Make sure the length of the usage file name is less than 50 characters. If the upload fails, you will receive an email notification that gives you more information about the upload errors.


Zuora recommends that you also enable the Completed Status notification defined on the Import Processed event, which will tell you when your usage upload has completed successfully.
