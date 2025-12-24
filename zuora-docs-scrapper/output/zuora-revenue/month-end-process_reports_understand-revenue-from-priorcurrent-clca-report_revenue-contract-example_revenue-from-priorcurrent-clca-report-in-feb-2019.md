---
title: "Revenue from Prior/Current CL/CA Report in Feb-2019"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/understand-revenue-from-priorcurrent-clca-report/revenue-contract-example/revenue-from-priorcurrent-clca-report-in-feb-2019"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:28:47.521Z"
---

# Revenue from Prior/Current CL/CA Report in Feb-2019

This task outlines the calculations for unbilled AR revenue, unbilled AR billings, and net CA/CL additions and releases for the Feb-2019 period.

When the report is run for the Feb-2019 period, the following calculations are completed:

1.  Calculate the unbilled AR revenue based on the following formula: Unbilled AR Revenue = Net Revenue (Waterfall) - Total Release (RC Rollforward)

    -   Net Revenue (Waterfall) = Contractual Revenue + Adjustment Revenue = 12673-897 = 11776
    -   Total Release (RC Rollforward) = 10672-896 = 9776
    -   Unbilled AR Revenue = 11776-9776=2000

2.  Get the Unbilled AR Billings from right-to-bill transaction lines from the Unbilled Rollforward Report. The Unbilled Billings is 0 for Jan-2019.
3.  Calculate the Net CA/CL Additions. Net CA/CL Additions = Total Additions (RC Rollforward Report) - Unbilled Billings (Unbill RollForward) = 0 - 0 = 0
4.  Calculate the Net CA/CL Release. Net CA/CL Release = Total Release (RC Rollforward Report) - Unbilled Billings (Unbill RollForward) = 9,776-4,000 = 9,776
5.  Based on the Net CA/CL Release, Net CA/CL Additions, and Total Begin Balance, bucket the Net CA/CL Release into PP CA/CL balance and then into the CP CA/CL balance. Both PP CA/CL balance and Net CA/CL Release are in the CL position. Net CA/CL Release is less than the PP CA/CL balance. So, all of Net CA/CL Release will be allocated to PP CL.

    -   PP CA/CL (Beginning Balance) = 35,355
    -   Net CA/CL Additions = 0
    -   Net CA/CL Release = 9,776


The Revenue from Prior/Current CL/CA Report in Feb-2019 is as follows:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/eb6085fc-bae4-4509-8a01-f4c65cfa2b9d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImViNjA4NWZjLWJhZTQtNDUwOS04YTAxLWY0YzY1Y2ZhMmI5ZCIsImV4cCI6MTc2NjYzNjkyNSwianRpIjoiNTQ2NzJkOTJjNTRiNGNhY2JiYjFkZmFmNDE1NDE0YjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.2XvVzkE1Usva3I7TremW2mdZmQUflGLrmHuo5VafWZA)
