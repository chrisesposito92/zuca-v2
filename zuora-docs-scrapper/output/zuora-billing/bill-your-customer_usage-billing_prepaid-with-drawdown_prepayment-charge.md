---
title: "Prepayment charge"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/prepayment-charge"
product: "zuora-billing"
scraped_at: "2026-02-20T17:34:02.536Z"
---

# Prepayment charge

A prepayment charge enables the sale of prepaid services, such as cell phone plans, by collecting payment upfront. It includes specific fields like charge function, commitment type, and validity period, which define the service's structure and billing options.

A prepayment charge allows you to sell prepaid services to customers and collect payment upfront. A typical prepaid service is prepaid cell phone plans, for example, a monthly plan with a list price of $20 that includes 500 minutes of talk time.

## Fields specific to a prepayment charge

Below is a summary of the fields specific to a prepayment charge:

Available options are Standard, Prepayment, and Commitment True-up.

| UI Label | Description | Note |
| --- | --- | --- |
| Charge Function | Function of the charge. |  |
| Commitment Type | Type of the prepayment charge. | Available options are Unit and Currency. |
| Prepayment UOM | Unit of measurement for this prepayment charge. | For example, minutes. GB, seat, or token. |
| Prepayment Units | The number of units included in this prepayment charge. | Must be positive (>0) and can be decimal (for example, 19.5). |
| Validity Period | The period in which the prepaid units are valid to use. Options:Subscription TermAnnualSemi-AnnualQuarterMonth |  |
| Credit Option | The way to calculate credit. Options:Time BasedConsumption BasedFull Credit |  |
| Prepayment Total Units | The total amount of units your customers can use when they subscribe to this prepayment charge. | Automatically calculated by the system with this formula: Prepaid Quantity * Default Quantity.For the flat fee charge model, the Default Quantity is 1. |

## Validity period

The validity period is the period in which prepayment units are valid to use. Note the following things when setting the validity period for a prepayment charge.

1\. Validity period should be evenly distributed over the subscription term with non-standard period subscriptions being an exception.

![Validity period and sub-term](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4a84564e-bb8a-4204-a4d1-97a3aed9b511?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRhODQ1NjRlLWJiOGEtNDIwNC1hNGQxLTk3YTNhZWQ5YjUxMSIsImV4cCI6MTc3MTY5NTIzNiwianRpIjoiYjg4OWJhMWNhOWFjNGZhZmFmYWU3ZjA3ZTdiNDdhOTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.l983NO7KSztz7SaVw4HJgkP9KDGVy0VTPBIazaZ5Rv8)

2\. Updating a prepayment product must happen on the first day of a validity period.

![Validity period and order actions](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d9894004-115f-45c5-b54e-c44228346bbd?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ5ODk0MDA0LTExNWYtNDVjNS1iNTRlLWM0NDIyODM0NmJiZCIsImV4cCI6MTc3MTY5NTIzNiwianRpIjoiNGIzMWFjNTJkNWRiNGMwNGFiYWI2NDU0Y2Y4ODY0NWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.VAn0LQV__5H1X3v-pVBwfxkUPUzcL6S_tUd5sPmZxG4)

3\. Validity period must be equal to or multiple times of the billing period of a prepayment charge.

![Validity period and billing period](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4c737497-8858-4a67-861e-8dfc35094e8e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRjNzM3NDk3LTg4NTgtNGE2Ny04NjFlLThkZmMzNTA5NGU4ZSIsImV4cCI6MTc3MTY5NTIzNiwianRpIjoiZmYzODQyOGYwZWMyNGNiYjhlYjM5OGJiYTM1ZjNkNjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.vQmyfvjJki5nRRyaA6gW1Di2PRIlddD_8L58p4YMiv0)

## Best practices for billing settings

When configuring a recurring prepayment charge with a list price base, we recommend selecting the validity period as the list price base. This is the most natural way for your customers to understand the pricing for a prepaid service. Also, this configuration triggers the system to automatically set the product price for each of the billing periods so that the total amount across multiple billing periods within a validity period matches your designed pricing. Therefore, when the product price is not divisible by the number of billing periods, this configuration can help prevent pricing inconsistency and save your effort to manually change the product price. We use the examples below to show you how this works.

Note: In the Product Catalog UI, Validity period is available as a value for the List price base field only for Top-Up prepayment charges. The option appears under the following conditions:

-   In tenants that do not use Charge Function, when the Prepaid (not Drawdown) checkbox is selected for the charge.

-   In tenants that use Charge Function (AdvancedConsumptionRating is enabled), when Charge Function is set to Prepayment.


Before proceeding with the example, note that the following prerequisite billing settings are required for a prepaid subscription service. This is because prepayment charges cannot be prorated and we must avoid situations where two validity periods are associated with the same billing period.

-   The subscription term should equal one or multiple validity periods.

-   The validity period should equal one or multiple billing periods.

-   The billing day of a prepayment charge should be the Term Start Day or Term End Day.

-   The billing period of a prepayment charge should be month-based and not week-based.


Example 1

Suppose your company provides a prepaid subscription service with a quarterly validity period and a monthly billing period. The charge price is $10 per quarter (the list price base is set to the validity period, as recommended). A customer subscribes to this service for a year. The following diagram shows the subscription term, the validity periods, and the billing periods for this subscription.

![A diagram of a prepayment charge in three different views](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bf395f05-b9db-49c3-9da1-681b268adff2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJmMzk1ZjA1LWI5ZGItNDljMy05ZGExLTY4MWIyNjhhZGZmMiIsImV4cCI6MTc3MTY5NTIzNiwianRpIjoiMGZjZmY2NzY1ZTdmNDNmNTlmYzQ2MzNlZjliY2YxYWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.zWV6z636XDhk_jUmgQsKpn3Ay-wN6on0O-vvmkduLz4)

As in the preceding diagram, a validity period equals three billing periods, so presumably, the amount due for each billing period on the invoice would be as follows:

`10/3 = 3.33 $/month`

This amount will cause a problem for product pricing because, according to the subscription, the revenue for a validity period should be $10, but the amount to collect for a quarter will be as follows and not match your desired price.

`3.33 * 3 = 9.99 $`

Actually, the system prevents the preceding problem if you select the validity period as the list price base. The system automatically updates the amount due for one of the three months in the validity period to $3.34 to make sure the total amount for a quarter is $10.

Example 2

Setting the list price base as the validity period can also benefit the scenario when you want to change the length of the validity period for a prepaid service. Suppose your company extends the validity period for the preceding prepaid service from 3 months to a year, without changing the list price. Another customer subscribes to this service for a year with a monthly billing period. If you select the validity period as the list price base, the system automatically updates the amount due for each of the 12 billing periods properly to make sure the total amount for a validity period is $10 per year, as you expect. Otherwise, you have to figure out an approach and then manually update the amount due for each billing period.

## Credit option

Credit Option allows you to choose how to credit back when a prepayment charge or commitment true-up charge is removed, canceled, or shortened. The following options are provided:

-   Time Based: Issue credit based on time proration, which is the normal approach and default behavior.

-   Consumption Based: Issue credit based on the prepayment balance or commitment true-up charge balance.

-   Full Credit: Issue the full credit.


Here is an example to explain the difference. A prepayment charge is used in the example. The logic is the same for a commitment true-up charge.

You offer the following prepayment charge:

-   Charge model: Per unit

-   List price: $1

-   Prepayment UOM: Each

-   Prepayment Units: 120

-   Validity period: Annual

-   Prepayment Total Units: 120 / Year

-   Billing Period: Year


Your customer subscribed to the prepayment charge through a 12-month subscription from 2022/1/1 to 2022/12/31. You run a bill run on 1/1 and collected $120 from your customer. On 2022/7/1, this customer decides to remove this prepayment charge from the subscription. As of 2022/7/1, this customer has consumed 90 prepayment units, reducing the prepayment balance to 30 units for the annual validity period.

![Credit option](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/499ac705-1842-4e64-8124-6132b701628b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ5OWFjNzA1LTE4NDItNGU2NC04MTI0LTYxMzJiNzAxNjI4YiIsImV4cCI6MTc3MTY5NTIzNiwianRpIjoiZTIwNWZjMGRjMzliNGExYjk4MzM0YjRlZTZhNGVjYTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.ofNinBCzF_rdJ81hSNWNcWKA6gk5XAmbdur6pqIwBpQ)

-   If you choose Time Based credit option, your customer would receive a $60.49 (183 days / 365 days \* $120) credit for the period from 2022/7/1 to 2022/12/31 in the next bill run.

-   If you choose Consumption Based credit option, your customer would receive a $30 (30 units \* $1) credit for the period from 2022/7/1 to 2022/12/31 in the next bill run.

-   If you choose Full Credit credit option, your customer would receive a $120 (120 units \* $1) credit for the period from 2022/7/1 to 2022/12/31 in the next bill run.


Note the following behaviors about the drawdown usage records when prepayment charges are removed, canceled, or shortened.

-   Time Based charges: All the drawdown usage records from the effective date of removal, cancelation, or shrinking the term to the end date of the prepayment charge will be reversed during bill runs. The reversed drawdown usage records are in Pending status. If other funds are available in the same validity period and if the start dates of the pending usage records are within one of the funds, the pending usage records will be drawn down to the funds again. If no available funds exist, the usage records will be billed as regular usage charges in the bill runs.

-   Full Credit charges: All the drawdown usage records in the current or future validity periods will be reversed during bill runs. The reversed drawdown usage records are in Pending status. If other funds are available in the same validity period and if the start dates of the pending usage records are within one of the funds, the pending usage records will be drawn down to the funds again. If no available funds exist, the usage records will be billed as regular usage charges in the bill runs.


The preceding behaviors also apply to a credit commitment charge when the commitment true-up charge is removed, canceled, or shortened.

-   Time Based charges: All the credit commitment charges from the effective date of removal, cancelation, or shrinking the term to the end date of the commitment true-up charge will be reversed during bill runs. The reversed credit commitment charges are in Pending status. If other funds are available in the same validity period and if the start dates of the pending credit commitment charges are within one of the funds, the pending credit commitment charges will be drawn down to the funds again. If no available funds exist, the credit commitment charges will be billed as regular usage charges in the bill runs.

-   Full Credit charges: All the credit commitment charges in the current or future validity periods will be reversed during bill runs. The reversed credit commitment charges are in Pending status. If other funds are available in the same validity period and if the start dates of the pending credit commitment charges are within one of the funds, the pending credit commitment charges will be drawn down to the funds again. If no available funds exist, the credit commitment charges will be billed as regular usage charges in the bill runs.


## Notes and limitations

-   Billing Period for prepayment charges cannot be Week.

-   List price base for prepayment charges should not be Week.

-   The unit of the subscription term should not be Week.

-   When both the validity period and billing period of the prepayment charge are set as Subscription Term and the list price base is a month-based value (list price is per month or per several months), you must ensure the subscription term is divisible by the list price base.
