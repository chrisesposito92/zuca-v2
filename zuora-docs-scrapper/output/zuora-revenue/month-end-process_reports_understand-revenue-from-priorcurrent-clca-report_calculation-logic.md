---
title: "Calculation logic"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/understand-revenue-from-priorcurrent-clca-report/calculation-logic"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:28:40.042Z"
---

# Calculation logic

Calculations to generate the Prior/Current CL/CA report

To generate the Prior/Current CL/CA report, the following calculations are involved:

1.  [Calculate the unbilled AR revenue](#concept-qbmz3r9t__calculate_unbilled_ar_revenue)
2.  [Calculate the unbilled AR billings](#concept-qbmz3r9t__calculate_unbilled_ar_billings)
3.  [Calculate Net CA/CL Additions](#concept-qbmz3r9t__calculate_net_ca_cl_additions)
4.  [Calculate Net CA/CL Release](#concept-qbmz3r9t__calculate_net_ca_cl_release)
5.  [Allocate Net CA/CL Release to the PP CA/CL balance and CP CA/CL balance](#concept-qbmz3r9t__title-39)

## 1\. Calculate Unbilled AR Revenue

The Net Revenue from the Waterfall Report comes from CL, CA, and the Unbilled AR Revenue. The Total Release from the RC Rollforward Report comes from CL and CA. So, the Unbilled AR Revenue can be calculated based on the following formula:

Unbilled AR Revenue = Net Revenue (Waterfall) - Total Release (RC Rollforward)

This Unbilled AR Revenue is the net of both addition and reduction to the Unbilled AR account.

## 2\. Calculate Unbilled AR Billings

If there are right-to-bill transaction lines in the revenue contract, calculate the Unbilled AR Billings for the right-to-bill lines. The Unbilled AR Billings amount is calculated by sum up the Unbilled Billings column from the right-to-bill transaction lines in the Unbill RollForward Report.

## 3\. Calculate Net CA/CL Additions

This step is to exclude the Unbilled AR Billings of the right-to-bill transaction lines from the Total Additions. The Net CA/CL Additions amount is calculated based on the following formula:

Net CA/CL Additions = Total Additions (RC Rollforward Report) - Unbilled Billings (Unbill RollForward)

## 4\. Calculate Net CA/CL Release

This step is to exclude the Unbilled AR Billings of the right-to-bill transaction lines from the Total Release. The Net CA/CL Release amount is calculated based on the following formula:

Net CA/CL Release = Total Release (RC Rollforward Report) - Unbilled Billings (Unbill RollForward)

## 5\. Allocate the Net CA/CL Release

Based on the Net CA/CL Release, Net CA/CL Additions, and Total Begin Balance, the Net CA/CL Release will be bucketed into PP CA/CL balance and then into the CP CA/CL balance.

1.  Allocate the Net CA/CL Release to the PP CA/CL balance.

    The PP CA/CL balance is the beginning balance from the RC Rollforward report, which is also the ending balance from the prior period.

    1.  Decide the CA or CL position of the Net CA/CL Release and the PP CA/CL balance. If the value is positive, it is in the CL position; otherwise, it is in the CA position.
    2.  Allocate the Net CA/CL Release to PP CA/CL balance.

        Match the CA position of the PP CA/CL balance to the CA position of the revenue balance, and match the CL position of the PP CA/CL balance to the CL position of the revenue balance. The allocation amount can only be the less of the Net CA/CL Release and the PP CA/CL balance.

2.  If the PP CA/CL balance cannot satisfy all the Net CA/CL Release, allocate the remaining amount to the CP CA/CL balance.

    The CP CA/CL balance is the Net CA/CL Additions calculated in the Revenue from Prior/Current CL/CA report.

    1.  Decide the CA or CL position of the remaining Net CA/CL Release and Net CA/CL Additions. If the value is positive, it is in the CL position; otherwise, it is in the CA position.
    2.  Allocate the remaining Net CA/CL Release to CP CL balance.

        Match the CA position of the Net CA/CL Additions to the CA position of the remaining Net CA/CL Release, and match the CL position of the Net CA/CL Additions to the CL position of the remaining Net CA/CL Release.

    3.  If the CP CL balance cannot satisfy all the remaining Net CA/CL Release, allocate the remaining Net CA/CL Release to the CP CA balance.

| Example | Allocation |
| --- | --- |
| PP CA/CL (Beginning Balance) = 200Net CA/CL Addition = 0Net CA/CL Release = 100 | Both PP CA/CL and Net CA/CL Release are in the CL position. The Net CA/CL Release is less than the PP CA/CL Balance. So, all of the Net CA/CL Release is bucked into PP CL. There is no remaining revenue to be allocated for CP CA/CL balance.PP CL = 100PP CA = 0CP CL = 0CP CA = 0 |
| PP CA/CL (Beginning Balance) = 200Net CA/CL Addition = 0Net CA/CL Release = 400 | Both PP CA/CL and Net CA/CL Release are in the CL position. The Net CA/CL Release is more than the PP CA/CL Balance. So, 200 out of Net CA/CL Release is first allocated into PP CL. The remaining 200 will be allocated for the current period.PP CL = 200PP CA = 0CP CL = 200CP CA = 0 |
| PP CA/CL (Beginning Balance) = -200Net CA/CL Addition = 0Net CA/CL Release = 300 | PP CA/CL is in the CA position and Net CA/CL Release is in the CL position. There is no PP CL balance to satisfy the revenue. So, all of Net CA/CL Release will be allocated to the current period CP CL.PP CL = 0PP CA = 0CP CL = 300CP CA = 0 |
| PP CA/CL (Beginning Balance) = -200Net CA/CL Addition = 0Net CA/CL Release = -300 | Both PP CA/CL and Net CA/CL Release are in the CA position. So, -200 of the -300 will be allocated to PP CA. The remaining revenue (-100) will be allocated to CP CA.PP CL = 0PP CA = -200CP CL = 0CP CA = -100 |
| PP CA/CL (Beginning Balance) = 200Net CA/CL Addition = 50Net CA/CL Release = 300 | Both PP CA/CL and Net CA/CL Release are in the CL position. So, 200 out of 300 revenue will be allocated to PP CL. The remaining Net CA/CL Release (100) is greater than the Net CA/CL Addition (50). So, 50 out of 100 will be allocated to CP CL. The remaining 50 will be allocated to CP CA.PP CL = 200PP CA = 0CP CL = 50CP CA = 50 |
| PP CA/CL (Beginning Balance) = -200Net CA/CL Addition = 50Net CA/CL Release = -300 | Both the PP CA/CL and Net CA/CL Release are in the CA position. -200 out of -300 will be allocated to PP CA. The remaining Net CA/CL Release is -100. The Net CA/CL Addition is 50, which cannot satisfy the remaining Net CA/CL Release. The remaining -100 will be allocated to CP CA.PP CL = 0PP CA = -200CP CL = 0CP CA = -100 |
