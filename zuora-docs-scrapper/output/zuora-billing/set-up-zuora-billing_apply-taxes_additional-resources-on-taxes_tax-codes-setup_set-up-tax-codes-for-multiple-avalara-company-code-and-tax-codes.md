---
title: "Set up tax codes for multiple Avalara Company Code and Tax Codes"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-codes-setup/set-up-tax-codes-for-multiple-avalara-company-code-and-tax-codes"
product: "zuora-billing"
scraped_at: "2025-12-24T05:11:53.604Z"
---

# Set up tax codes for multiple Avalara Company Code and Tax Codes

Learn how to set up matching Zuora Tax Codes for multiple Avalara Company Codes and Tax Codes in Zuora Billing.

When you have multiple Avalara Tax Codes, you can set up matching Zuora Tax Codes in Zuora Billing. To do so:

1.  Click your username at the top right and navigate to Settings > Billing.
2.  Click Setup Tax Engine and Tax Date.
3.  Select the Avalara tax engine and click Edit.
4.  Add two Avalara Company Codes for the Direct Avalara Integration tax engine in the Company Information section.

    For example:

    -   Company Code: `SETC` — Avalara Tax Code: `228327`
    -   Company Code: `NODE` — Avalara Tax Code: `228333`

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5c1d7047-4a12-4e6a-bf21-c0944254a92e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjVjMWQ3MDQ3LTRhMTItNGU2YS1iZjIxLWMwOTQ0MjU0YTkyZSIsImV4cCI6MTc2NjYzOTUxMSwianRpIjoiM2E3NzhhZTQxYWE4NDVlMThmZDdhNDY1YjNkZTRiMzUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.4hUfLmNBQuhtqASnd1ud7fIPfqkxjMUAt1lucZCOx7k)

5.  Define the corresponding Zuora Tax Codes to map to the Avalara Tax Codes.

    For example:

    -   Zuora Tax Code: `ZuoraTaxCode001` — associates with Avalara Tax Code: `228327`![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/dc2a9742-8cf7-42b8-8240-9136dc3783a3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRjMmE5NzQyLThjZjctNDJiOC04MjQwLTkxMzZkYzM3ODNhMyIsImV4cCI6MTc2NjYzOTUxMSwianRpIjoiMDMzNTE4NjYyYmZjNDhjMzkyYjkzNjJlMzQyZWNiMzUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.4OJ9LHsHhna0iCv6qXl2d7jCgsLQIxkytaFJU18uTaM)
    -   Zuora Tax Code: `ZuoraTaxCode002` — associates with Avalara Tax Code: `28333`![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bd061002-7b1f-4436-9199-394e61b4a57b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJkMDYxMDAyLTdiMWYtNDQzNi05MTk5LTM5NGU2MWI0YTU3YiIsImV4cCI6MTc2NjYzOTUxMSwianRpIjoiNzVkMGEyNjMwZTM0NDMxZGE5NWYwMzVkZTVlYWQ2YmEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.JuAy3Ig89zSXHsV3J_-qXFVqvsTAX1U_Sn-Ynkcg4pk)

6.  Click Save.

The Avalara Company Codes and Zuora Tax Codes are now configured and saved.
