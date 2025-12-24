---
title: "Release Immediate in POB template"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/performance-obligations-processing/release-immediate-in-pob-template"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:24:32.385Z"
---

# Release Immediate in POB template

Learn how to configure Expiry Details in a POB template to manage revenue release based on expiration settings.

The Expiry Details section under POB determines how the expiration amount is handled. The performance obligation can be configured by you entering the expiry date. Post the expiry date, the system will release the remaining revenue associated with the obligation.

Complete the following steps to configure Expiry Details in a POB template:

1.  Navigate to Policies > Performance Obligations .
2.  Click the '+' icon to create a POB template. The New POB Template window is displayed.
3.  Click Revenue Treatment.
4.  Complete the following fields under the Expiry Details section.

    -   Select the applicable value from the Based On drop-down field.
    -   Select the applicable type from the Duration Type drop-down field.
    -   Enter the applicable value in the Duration field depending on the type selected in the Duration Type field .
    -   Set the Release Immediate field to Yes or No.

    The expired amount will follow the ratable method if the Release Immediate field is set to No.If the Release Immediate field is set to Yes, the expired amount is recognized in the current period. It will override the ratable method specified in the POB template.
