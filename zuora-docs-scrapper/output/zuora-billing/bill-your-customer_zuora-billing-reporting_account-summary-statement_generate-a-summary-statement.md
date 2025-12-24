---
title: "Generate a summary statement"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/zuora-billing-reporting/account-summary-statement/generate-a-summary-statement"
product: "zuora-billing"
scraped_at: "2025-12-24T18:41:04.716Z"
---

# Generate a summary statement

Learn how to configure and generate summary statements in Zuora Billing, including options for single accounts, batch processing, and downloading statements.

To generate a Summary Statement:

1.  Configure the summary statement template:
    1.  Navigate to .
    2.  Click Add New HTML Template .

        ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f87614c6-4c40-457c-b8a9-1103bd271a76?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY4NzYxNGM2LTRjNDAtNDU3Yy1iOGE5LTExMDNiZDI3MWE3NiIsImV4cCI6MTc2NjY4ODA2MiwianRpIjoiODZiY2ZhMGZiNWIxNGMwNWJhOTU0NjJjMzkxMjU1Y2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.LUn8cTFBdDJoXgawqHldGHbsOxYygzVUQbiNmFrF6Hk)

    3.  Select the Summary Statement tab.
    4.  If you have the Invoice Settlement feature enabled, select the default template, Invoice Settlement . Otherwise, select No Invoice Settlement . You also have the option to set your template as the system default. This ensures all accounts without a specified template will use the system's default template.

        ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1369a988-f13c-4701-89d0-7d3a816cb0a6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjEzNjlhOTg4LWYxM2MtNDcwMS04OWQwLTdkM2E4MTZjYjBhNiIsImV4cCI6MTc2NjY4ODA2MiwianRpIjoiMzE5MDczNGMzNjQ0NGY4OWI1YzBiZGY3YWU5MTc0NWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.UeoCSr5B9SfwUKC5_D6JWetOPwGCZj4xXmNm9SaYvpc) The statement information can be viewed from Zuora Billing > Customer > Customer Accounts . ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6c494a89-f63e-4135-9819-df645b48b576?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZjNDk0YTg5LWY2M2UtNDEzNS05ODE5LWRmNjQ1YjQ4YjU3NiIsImV4cCI6MTc2NjY4ODA2MiwianRpIjoiMTRhMzcxNjZjOGE4NDlmOTg4YjIyMGQ1ODk3MjRmYTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.0Bv-F0BRxbDpiP6MYrV0ew89zGdc1t62E7yav5t80jk) ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a7bfc141-274e-45db-a550-05afc4c33e1b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE3YmZjMTQxLTI3NGUtNDVkYi1hNTUwLTA1YWZjNGMzM2UxYiIsImV4cCI6MTc2NjY4ODA2MiwianRpIjoiM2M3Yjk5ZTVlN2IzNDdjODk5ZWRiY2RjMGM1NjEzZGEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.oh3TOihc93xCPaasbN8pz5XQ0qsU0LjnUBaAqYJhoa4)

        Note: You can use the Data Table option to create separate summary tables for Credit Memos and Payments with the flexibility to select two levels of objects:

        -   First Level: Accounts.
        -   Second Level: All list objects under Accounts.

        You can also configure the table using options such as Columns, Sort By, Group By, Filters, and so on. For information on how to use data tables, see Using Data Tables

2.  Generate a Summary Statement for a single account:
    1.  Navigate to Zuora Billing \> Customer > Customer Accounts .
    2.  Select any customer account.

        ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/84860b72-37cd-4338-9de6-97f12113d462?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg0ODYwYjcyLTM3Y2QtNDMzOC05ZGU2LTk3ZjEyMTEzZDQ2MiIsImV4cCI6MTc2NjY4ODA2MiwianRpIjoiNTQ5ZDQ3MWMxZDBkNGZiZGE2OTZkNTlhNjY0ODEzNDkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.QgvVqkmWf1Vt7rLekMJrPdH7CYEZwaHLVDuVaGPagXg)

    3.  Click More > Generate Statement .

        ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/de50d63a-fe03-4d4a-a6d6-445f009ef08f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRlNTBkNjNhLWZlMDMtNGQ0YS1hNmQ2LTQ0NWYwMDllZjA4ZiIsImV4cCI6MTc2NjY4ODA2MiwianRpIjoiYjdmOGI3ODNhZTM5NGE4NjhhNzU3MzVhODRmNDA1OTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.9WtLzSngcMBurSLtf3Q9eImTS5VtJ0pxvgPkCz0h8Uo)

    4.  Select the required date range.
    5.  Click Generate .

        Note:

        -   The start date can be set to a maximum of five years prior to the current date.
        -   When you set a custom date range, the end date is always today. You cannot specify the end date as the End Date field is set to read-only.

3.  Generate Summary Statements in batch:
    1.  Navigate to Zuora Billing \> Customer > Customer Accounts .

        ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/444a2799-1406-4201-aba6-e9af72b173ca?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ0NGEyNzk5LTE0MDYtNDIwMS1hYmE2LWU5YWY3MmIxNzNjYSIsImV4cCI6MTc2NjY4ODA2MiwianRpIjoiYWI5ZTk1N2Q2NjgzNDZkNjljNGI5NmM3ZDAyOWIzYTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.eo2THgKOXAfdo15BrRin5GfWK2HelG_i36EO7YpzFks)

    2.  Click Batch Generate Statements > Batch Generate Statements .

        ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/76be8de5-977f-4f13-a34c-b16e49083759?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc2YmU4ZGU1LTk3N2YtNGYxMy1hMzRjLWIxNmU0OTA4Mzc1OSIsImV4cCI6MTc2NjY4ODA2MiwianRpIjoiNjBmODczZjViM2M0NDI0N2JiYzlmZjdiYjQzMTA2ODUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.bL2zsMNMuKYCQeeJWvIiV7cOEJ39sgMLFG-mdMeRgss)

    3.  Click Generate .
4.  Download summary statements from Batch Generation History or Account Detail screens:
    1.  Navigate to Zuora Billing \> Customer > Customer Accounts .
    2.  Click Batch Generate Statements > Batch Generation History .

        ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/72704adb-5d35-4b36-bb87-9c292a09b9ce?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjcyNzA0YWRiLTVkMzUtNGIzNi1iYjg3LTljMjkyYTA5YjljZSIsImV4cCI6MTc2NjY4ODA2MiwianRpIjoiNmY4NzNlOWM5OGNlNDJjN2I5NTY2YTA0ZDRlYTQzNzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.KkMpQ8ccZtTnMqkoOfLxBHhj-7ykcS9-qC7wpsczAxI)

    3.  Select the required statement.
    4.  Click the Download icon from the Actions column.
    5.  Alternatively, you can also perform the following:

        1.  Navigate to Zuora Billing \> Customer > Customer Accounts .

        2.  Select any customer account.

        3.  Scroll to the Summary Statements section. ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5b474e27-cca8-44df-8df7-b244d5de6f3b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjViNDc0ZTI3LWNjYTgtNDRkZi04ZGY3LWIyNDRkNWRlNmYzYiIsImV4cCI6MTc2NjY4ODA2MiwianRpIjoiZmE0YTU3MWQ5NGMzNDM5MWE3ZWM0YzA1YzVjYThjYjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.0kRJsdcE6Jo1qebrxQIH5e_zNyXJTNgg2xGqWNyfGFw)

        4.  Click the Download icon from the Actions column.


        Note:

        -   Summary Statements cannot be created via API; they can only be created through the UI.

        -   Summary Statement Templates are built on HTML templates and are subject to the same restrictions and limitations. For more information, see the Restrictions and Limitations section.
