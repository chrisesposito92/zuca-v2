---
title: "Perform data backfill"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/configure-revenue-settings/data-backfill/perform-data-backfill"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:18.981Z"
---

# Perform data backfill

Learn how to perform a data backfill by selecting the appropriate update action, downloading and modifying the template, and uploading the updated file to view progress and results.

To update the fields other than the booking date, do the following:

1.  Go to the Select Data Backfill Action dropdown field, and select the update action that you want to perform, for example, Update Product Rate Plan Charge.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a97da47c-1c6d-4e52-9a6e-c528fff703c7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE5N2RhNDdjLTFjNmQtNGU1Mi05YTZlLWM1MjhmZmY3MDNjNyIsImV4cCI6MTc2NjYzOTY1NywianRpIjoiOGE4N2Y0MTFkZGNlNDExZWJhYzE4ZWU2MjYwZjJhMTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Q2uy-ugr8NTUkdiIH1V_kvxeQ-bpX4vFCaAg-KHn2Bs)

2.  Click the link below the preceding dropdown field to download the template for the corresponding update action.
3.  In the template file, add the necessary values that you want to update in the object records. Also, remove the field columns that you do not want to update. Note the following:

    -   Only the field columns predefined in the template can be updated in the data backfill. You cannot add new columns to extend the scope of fields for your data backfill.

    -   You can add read-only columns in the template by using a column name starting with #. These read-only columns do not affect the data backfill and are just used as reference fields in the template file. For example, you can add a column called \# Product Rate Plan Charge Name to add corresponding product rate plan names for your reference. However, the product rate plan charge names appearing in this column will not be updated in the system's product rate plan charge records.

    -   If you do not want to update the field values for a predefined column in the template, you must remove the column from the template. Otherwise, null values in the predefined column of the template will be updated to the records during the data backfill.


4.  In the Upload File section, click the Upload File button to upload the template file.
5.  Click Generate . As the data backfill starts, you can view the backfill progress and results in the Backfill Logs section.

    Note:

    If you encounter an error such as "timeout of 120000ms exceeded" or a similar message on the page, please refrain from retrying immediately. Based on the total number of subscription versions you have, wait for a while and recheck the page. You will see that the corresponding job is in a processing state. For example, if you have more than 10 million subscription versions, you may need to wait for more than an hour.


If you choose the Use Product Rate Plan Charge Revenue Related Fields Value for RPC or Use Product Rate Plan Charge Revenue Related Fields Value for OLI data backfill action in the preceding step 1, the following Revenue related fields will be copied from the Product Rate Plan Charge object to the Rate Plan Charge (RPC) object or the Order Line Item (OLI) object:

-   Exclude Item Booking from Revenue

-   Exclude Item Billing from Revenue

-   Right to Bill Flag

-   Allocation Eligible

-   Product Family

-   Product Category

-   Product Line

-   Product Class

-   Revenue Recognition Timing

-   Revenue Amortization Method
