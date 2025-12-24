---
title: "Create a drawdown charge - Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/drawdown-charge/create-a-drawdown-charge---zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:15.378Z"
---

# Create a drawdown charge - Zuora UI

Create a drawdown charge in Zuora to track and charge for API usage exceeding prepaid units.

You can create a drawdown charge using the Zuora user interface. The procedure described in this section makes use of an example: Suppose you run a software company that charges customers by the number of calls to your API and suppose your software company has created the following prepayment charges:

-   Monthly Plan: $20, 10 million API calls per month

-   One-time Top-up: $3, 1 million API calls


Now you can create a drawdown charge to track usage consumption and charge any usage exceeding the total prepaid units at $5 per million calls.

![Create drawdown charge- Monthly result](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9f825f99-f648-47d4-b08f-6aaa14bdd3d7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjlmODI1Zjk5LWY2NDgtNDdkNC1iMDhmLTZhYWExNGJkZDNkNyIsImV4cCI6MTc2NjY1MTM1MywianRpIjoiMGMzYTU4Nzk2ZWQ5NDJkNmFiZTk4NzRiZTJkZDFhNzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.jkn7puzi2qhdy7PZh8Rb6rOVh5XtSgh0hCAnv2uRIJ8)

1.  Navigate to the product rate plan with the Monthly Plan prepayment charge.
2.  Under the Usage Charges/UOM section, click +add new.
3.  Specify the following fields:

    -   Charge name: API Calls Drawdown

    -   Charge model: Per unit

    -   List price: 5

    -   UOM (the drawdown usage charge's UOM, also referred to as Usage UOM): Million calls

    -   Select the Drawdown checkbox

    -   Drawdown UOM ( the prepayment balance charge's UOM): Million calls

    -   Drawdown Rate: 1


    If you have more than one UOM, you can use different Usage UOM and Drawdown UOM, which are connected through a drawdown rate. If the two UOMs are of the same unit, you must set the drawdown rate as 1; if the two UOMs are of different units, you need to set a drawdown rate as the conversion ratio. The Drawdown Exchange value is automatically calculated by the system showing the conversion between Usage UOM and Drawdown UOM.

4.  Specify values for the fields in the Timing and Frequency of Charge section. See product rate plan charge for more information.
5.  Click Save.

    This charge will have a Drawdown icon ![Drawdown charge icon.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/734c5eec-72f5-421e-9121-4769df9aa1ee?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjczNGM1ZWVjLTcyZjUtNDIxZS05MTIxLTQ3NjlkZjlhYTFlZSIsImV4cCI6MTc2NjY1MTM1MywianRpIjoiNGFhMTkxMDAzMTZkNDdlZGFkZDlhYzAzYzkyNDgzODMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.EqIG5qobeeu_u9zIbku5i16Ux32cx5vTuSb69pWmLAA) next to its name in the rate plan.


After creating the prepayment and drawdown charges, you can start selling your product to customers by creating subscriptions through Orders.
