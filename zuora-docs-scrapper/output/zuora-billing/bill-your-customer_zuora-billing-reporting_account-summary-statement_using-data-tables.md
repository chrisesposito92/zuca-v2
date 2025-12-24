---
title: "Using Data Tables"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/zuora-billing-reporting/account-summary-statement/using-data-tables"
product: "zuora-billing"
scraped_at: "2025-12-24T18:41:07.285Z"
---

# Using Data Tables

Learn how to efficiently use data tables by selecting templates, adding and configuring columns, sorting data, and applying filters.

This section provides information on using data tables efficiently. Once you have selected the template and navigated to the Summary Statement screen, perform the following steps:

1.  Drag and drop a Data Table block to your temple.
2.  Select the Data Table to view the Content side-pane.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7a8475af-dfbc-4a82-b0fa-feb7edc08b18?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdhODQ3NWFmLWRmYmMtNGE4Mi1iMGZhLWZlYjdlZGMwOGIxOCIsImV4cCI6MTc2NjY4ODA2NSwianRpIjoiMzdhMWI1YWQ2NmJiNDM2MTg0MDc5ODQxZTU3OWY1MDEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.PQNw3xLuclcDo6csZePxRNHlIMWGRKk0_FmGk-K-nDw)

3.  Select the Payments option from the drop-down list under the Accounts option.
4.  Click Add in the Columns section and perform the following:
    1.  Select EffectiveDate from the Field drop-down list.
    2.  Click the Advanced Options toggle.
    3.  Use the Localise function, for example, {{EffectiveDate|Localise}}.
    4.  Configure the header as required, for example, Effective Date.

        ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bfa1b286-97cd-4d1c-b675-ed9378d8e613?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJmYTFiMjg2LTk3Y2QtNGQxYy1iNjc1LWVkOTM3OGQ4ZTYxMyIsImV4cCI6MTc2NjY4ODA2NSwianRpIjoiNzcwMmFiYzYwMjI1NGI2M2FmMzc1MTZmYWQ2ODYyMjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Q7cqhEkSnYvtoSl3M9YkGGc4G6XK17kDr6KmyMSmLIU)

    5.  Click Save .
5.  Click Add in the Sort By section and perform the following:
    1.  Select EffectiveDate from the Field drop-down list.
    2.  Select ASC in the Order drop-down list.

        ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/91b04ab1-4e39-430f-ab51-c98f4950248b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkxYjA0YWIxLTRlMzktNDMwZi1hYjUxLWM5OGY0OTUwMjQ4YiIsImV4cCI6MTc2NjY4ODA2NSwianRpIjoiMDYwZGE5OWE1NGM1NGRhYzlhOGVhODVjYTA0YmY5OGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.RPfrxk-_4zMndWIgTXZqoKYteEj2ljT-7YPbRJ5NjkY)

    3.  Click Save .
    4.  Click Add in the Sort By section.
    5.  Select PaymentNumber from the Field drop-down list.
    6.  Select ASC in the Order drop-down list.
    7.  Click Save .
6.  Click Add in the Filter section and perform the following:
    1.  Select Status from the Field drop-down list.
    2.  Select \> in the Operator drop-down list.
    3.  Enter Processed in the Value field.

        ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/75681eb5-2d49-4753-9656-7cbc0e460593?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc1NjgxZWI1LTJkNDktNDc1My05NjU2LTdjYmMwZTQ2MDU5MyIsImV4cCI6MTc2NjY4ODA2NSwianRpIjoiNzAzNzhiZTFkODJmNDFmMGI5NjMwMTNkMGM3ZjE0NmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.n8tN4SzNsG_6xJRIXfBIY4Ljd7TyvractibUiMfWDE0)

    4.  Click Save .
    5.  Select EffectiveDate from the Field drop-down list.
    6.  Select \>= in the Operator drop-down list.
    7.  Enter \_StartDate in the Value field.

        Note: : \_StartDate is a system built-in variable and it displays the start date of the selected date range.
        ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ff73b708-dde5-4776-8b68-2373404bbdd5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZmNzNiNzA4LWRkZTUtNDc3Ni04YjY4LTIzNzM0MDRiYmRkNSIsImV4cCI6MTc2NjY4ODA2NSwianRpIjoiZTA0Y2Y2MmU0ZTcxNDQ0MWE5YmFiYmM2MDIxN2Q4MmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.t4fexvy3XOrDjxmsYFtjN5Ye1g66G8-OH6YGEGYVFRo)

    8.  Click Save .
    9.  Select EffectiveDate from the Field drop-down list.
    10.  Select < in the Operator drop-down list.
    11.  Enter \_EndDate in the Value field.

         Note: \_EndDate is a system built-in variable that automatically extends the end date of the chosen date range by one day. When you select a date range in the UI, such as from 2024-01-01 to 2024-03-31, the built-in variable \_EndDate is automatically set to 2024-04-01.
         ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8f6240c9-6bdc-4e13-9f6c-ae1e136bc134?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhmNjI0MGM5LTZiZGMtNGUxMy05ZjZjLWFlMWUxMzZiYzEzNCIsImV4cCI6MTc2NjY4ODA2NSwianRpIjoiMmYzMjRjMWM3MTlkNDJiZGI5YjNjMThiOTVkMzcyOWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.w-h6fgjpdNI7Yztz6kYGbejVzmuK2WH-nqBxYFesBGM)

    12.  Click Save .
