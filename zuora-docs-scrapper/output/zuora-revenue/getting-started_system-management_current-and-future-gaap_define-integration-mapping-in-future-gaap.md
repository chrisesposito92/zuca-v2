---
title: "Define integration mapping in future GAAP"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/current-and-future-gaap/define-integration-mapping-in-future-gaap"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:18:00.984Z"
---

# Define integration mapping in future GAAP

Complete the steps provided in this page to define the field mapping for data integration between the current GAAP and the future GAAP.

You must define the field mapping for data integration so that the field in the current GAAP can be mapped to the appropriate field in the future GAAP. For example, the Arrangement ID in the current GAAP should be mapped to the Revenue Contract ID in the future GAAP. An integration mapping example is provided in a downloaded file for your reference. See Worksheet in integration of Zuora Revenue from current GAAP to future GAAP.xlsx . In this spreadsheet, fields in the Source Column with a prefix of INTG indicate that these fields are specific to the future GAAP.

1.  In Zuora Revenue under the future GAAP (ASC 606), navigate to Setups > Application .
2.  Click the the left pointing arrow button to open the side menu and click Integration Mapping to define the field mapping between transactions under the current GAAP and the future GAAP.
3.  Click the '+' icon to add a line for field mapping.
4.  In the Source Column cell, select the field name under the current GAAP to be mapped.
5.  In the Destination Column cell, select the field name under the future GAAP to which the source column is mapped.
6.  Add the required number of lines.
7.  Click the save icon and close the window.
8.  In the Source Table cell, select the appropriate table based on the integration method to be applied.

    | Integration method | Source table to be selected |
    | --- | --- |
    | Process Arrangement in cGAAP and interface Arrangement to fGAAP | Select RPRO_ARR_TRANSACTIONS for the fields that exist in both current GAAP and the future GAAP, for example, CV_ELIGIBLE_FLAG, which exists both in RPRO_ARR_TRANSACTIONS in the current GAAP and RPRO_LINE_STG in the future GAAP.Select RPRO_ARR_TRANSACTIONS_STG for the fields that exist in the future GAAP only, for example, AR_ACCOUNT, which is specific to the future GAAP. |
    | Interface Transactions to cGAAP and fGAAP stage | Select RPRO_ARR_TRANSACTIONS_STG for all fields. |

    The field mapping for data integration is defined.
