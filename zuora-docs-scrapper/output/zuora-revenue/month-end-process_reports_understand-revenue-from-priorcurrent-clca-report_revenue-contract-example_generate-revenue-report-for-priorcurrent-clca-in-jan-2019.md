---
title: "Generate revenue report for prior/current CL/CA in Jan-2019"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/understand-revenue-from-priorcurrent-clca-report/revenue-contract-example/generate-revenue-report-for-priorcurrent-clca-in-jan-2019"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:18:41.395Z"
---

# Generate revenue report for prior/current CL/CA in Jan-2019

This report outlines the calculations for unbilled AR revenue, unbilled AR billings, and net CA/CL additions and releases for Jan-2019.

When the report is run for the Jan-2019 period, the following calculations are completed:

1.  Calculate the unbilled AR revenue based on the following formula: Unbilled AR Revenue = Net Revenue (Waterfall) - Total Release (RC Rollforward)

    -   Net Revenue (Waterfall) = Contractual Revenue + Adjustment Revenue = 8000-3355 = 4645
    -   Total Release (RC Rollforward) = 4000-3355 = 645
    -   Unbilled AR Revenue = 4645-645 = 4000

2.  Get the Unbilled AR Billings from right-to-bill transaction lines from the Unbilled Rollforward Report. The Unbilled AR Billings is 4,000 for Jan-2019.
3.  Calculate the Net CA/CL Additions. Net CA/CL Additions = Total Additions (RC Rollforward Report) - Unbilled Billings (Unbill RollForward) = 36,000-4,000 = 32,000
4.  Calculate the Net CA/CL Release. Net CA/CL Release = Total Release (RC Rollforward Report) - Unbilled Billings (Unbill RollForward) = 645-4,000 = -3,355
5.  Based on the Net CA/CL Release, Net CA/CL Additions, and Total Begin Balance, bucket the Net CA/CL Release into PP CA/CL balance and then into the CP CA/CL balance. There is no PP CA/CL balance to satisfy the Net CA/CL Release. The Net CA/CL Additions is positive and the Net CA/CL Release is negative. So all of the Net CA/CL Release (-3,355) will be allocated to CP CA.

    -   PP CA/CL (Beginning Balance) = 0
    -   Net CA/CL Additions = 32,000
    -   Net CA/CL Release = -3,355


The Revenue from Prior/Current CL/CA Report in Jan-2019 is as follows:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2d5f700a-3953-4c47-b551-1eadb5d9d0df?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJkNWY3MDBhLTM5NTMtNGM0Ny1iNTUxLTFlYWRiNWQ5ZDBkZiIsImV4cCI6MTc3MTcwODcxNiwianRpIjoiMjc5NmUyOTMyZmFlNDlmNWFiYTk2MTJhNjg3OGNkMzkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.S-xfOpWAz_I118jTagU_QT28fiH1fUEl-87OKYvn83o)
