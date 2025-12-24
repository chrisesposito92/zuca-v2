---
title: "Reporting on MRR and TCV"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-guides/reporting-on-mrr-and-tcv"
product: "zuora-platform"
scraped_at: "2025-12-24T18:42:16.195Z"
---

# Reporting on MRR and TCV

Learn about the standard reports that report the MRR as of today

## Reporting on current MRR

Zuora Reporting provides standard reports that report the MRR as of today. The standard MRR reports include Total MRR, MRR by account, and MRR by product. You can find these reports in the Booking folder within Zuora Standard Reports. See [Standard reports](/zuora-platform/data/reporting/reporting-quick-reference/standard-reports) for more information.

Each of the standard MRR reports is based on the [Rate Plan Charge data source](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/rate-plan-charge-data-source). You can edit these standard reports to change the object that MRR is reported by, or to change the point in time that MRR is reported as of. To change the object that MRR is reported by, specify a different field in the Row Groups section:

![Image: reporting_mrr_product.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f529b79b-75dc-476c-954a-3621afdce469?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY1MjliNzliLTc1ZGMtNDc2Yy05NTRhLTM2MjFhZmRjZTQ2OSIsImV4cCI6MTc2NjY4ODEzNCwianRpIjoiNTliYjE0NTM3ZGQ1NGMwMzkwMmExMWUzOGUzYjM1NDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.HqS2IHO5vrR9z353RqSeKuKqz-AQ14HD1pALSRpUnLA)

For example, replace Product: Name by Subscription: Name. You can specify any dimension available in the Rate Plan Charge data source.

## Reporting on MRR at any point in time

You can report on MRR at any point in time by editing one of the standard reports in the Booking folder. To report on MRR as of a particular date, edit the filters of the standard report, then change the filters for Rate Plan Charge: Effective Start Date and Rate Plan Charge: Effective End Date.

For example, to report on MRR as of 10/1/2016, replace:

![Image: reporting_mrr_before.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5f21a887-c6c6-4c5b-9d97-fa6a86e2259e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjVmMjFhODg3LWM2YzYtNGM1Yi05ZDk3LWZhNmE4NmUyMjU5ZSIsImV4cCI6MTc2NjY4ODEzNCwianRpIjoiZDUxMjY2MjJiZDA2NDU1MWIyZjdjMDhiZjkxYWQ5MjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.a1JLLjN_ZEOgSPa8H6yQOHrD90B4LE1LVNXYHEGazzI)

by:

![Image: reporting_mrr_after.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2b3baa27-4c37-4bef-9395-7e537699e6f1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJiM2JhYTI3LTRjMzctNGJlZi05Mzk1LTdlNTM3Njk5ZTZmMSIsImV4cCI6MTc2NjY4ODEzNCwianRpIjoiMmQyMTY0OGM2OTIzNDIzZTgwODc5NmI4MDQ1YWI4ZjQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.huGaQ_dwIlr8h24QRzWgMy-IK_Ja2s5F8l12IunK7gg)

## Reporting on current TCV

You can use the [Rate Plan Charge data source](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/rate-plan-charge-data-source)to determine the current TCV for each of your accounts or products.

1.  Create a report based on the Rate Plan Charge data source:

    ![reporting_rate_plan_charge.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7976163b-ee6b-4e97-a5e4-3f8acc6761d5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc5NzYxNjNiLWVlNmItNGU5Ny1hNWU0LTNmOGFjYzY3NjFkNSIsImV4cCI6MTc2NjY4ODEzNCwianRpIjoiMzE0ZGFlNThlN2NlNDRiNmFmYWMxZmUyODA3OTFlOTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.b2OXU3ssq_ciSy3G9n8bSfxZa9dx1iXlXT_NbOo_Cw4)

2.  Specify Row Groups, Value Fields, and Filters:

    ![reporting_tcv.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/37218582-f7b9-4b94-9a44-56c33a6c1986?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM3MjE4NTgyLWY3YjktNGI5NC05YTQ0LTU2YzMzYTZjMTk4NiIsImV4cCI6MTc2NjY4ODEzNCwianRpIjoiNWUyZDMzMjg1ZTYwNGIxODgzMWFhNmY5ZTQwYjI5YzYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.iLE0mBK8YMeQTNUrK28DvWbTHHAylKGEWYr4RxTKVQc)

    You can group the report by any dimension available in the Rate Plan Charge data source, including Product: Name, Account: Name, Subscription: Name, Product Rate Plan: Name, and so on.
