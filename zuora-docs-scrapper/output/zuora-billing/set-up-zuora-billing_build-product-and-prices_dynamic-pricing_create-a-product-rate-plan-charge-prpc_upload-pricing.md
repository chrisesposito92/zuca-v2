---
title: "Upload pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/create-a-product-rate-plan-charge-prpc/upload-pricing"
product: "zuora-billing"
scraped_at: "2025-12-24T05:01:47.781Z"
---

# Upload pricing

Learn how to upload and map pricing data files to Zuora for efficient rate plan management.

Use the Upload screen to upload a .csv or .xlsx pricing file for a specific rate plan. This allows you to bulk upload static pricing data using a spreadsheet or \*.csv file. This is useful when:

-   You have multiple products or rate plans to update quickly.

-   Each product/attribute combination has a fixed price.

-   You are not using attribute-based rules or segmentation.


You can upload a file containing region-based or attribute-based pricing data for a product rate plan. After uploading, you will map the headers in the file to the appropriate pricing attributes in Zuora before finalizing the setup.

Note:

The file must include a header row with columns corresponding to attribute fields such as State, Currency, Price, Min, and Max.

To upload a file:

1.  In the Upload screen, drag and drop the .csv or .xlsx file, or click Select File to upload it. The Source File Header Fields section will remain empty until the file is successfully uploaded. Once uploaded, the header fields are displayed.
2.  (optional) Provide a description of the file.
3.  Click Next to proceed to the Mapping step. The Mapping screen allows you to match your uploaded file's header fields to Zuora's supported pricing attributes, such as Country, Segment, or Product. These attributes must be pre-defined in Zuora (created under the Context and Attributes section under the Extension Studio option).

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7c078de4-a7b1-411d-95ec-5ae820b94f43?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdjMDc4ZGU0LWE3YjEtNDExZC05NWVjLTVhZTgyMGI5NGY0MyIsImV4cCI6MTc2NjYzODkwNiwianRpIjoiYzgzNmI2MTJhZjIwNDRiNDhkZjM1NjZjNmExYTRiMDciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.y7Ii4t7HnVgVm8jYpe2WCYrt9EUaYYVxw93sg9v-y3w)

    Note:

    All required fields are marked with an asterisk (\*). You must map these fields to continue. For example, Price is mandatory and must be mapped to a column in your file.

4.  Select the corresponding column name from your uploaded file that matches each target field. For example, if your CSV file has a column called Region, map it to the Country or County field. The Target fields are predefined attributes in Zuora used to filter and apply pricing dynamically, for example, Product, Country, Term length, Segment, and so on. You can view the raw values from your uploaded file for the currently selected mapping. This preview helps confirm you've chosen the correct source field. Example: Suppose your uploaded file includes the following headers: url, region, product\_code, term\_months, tier1\_price. You can map them as:

    | Target Field | Source Header |
    | --- | --- |
    | County | url |
    | Country | region |
    | Product* | product_code |
    | Term length | term_months |
    | Price*` | unitPrice |

5.  Click Next to proceed to the Review screen.
6.  Verify the uploaded pricing data before applying it to the product catalog.
7.  Click to save your changes. Or, click Back to return to the Mapping step and adjust your selections.
8.  Before saving, ensure that:

    -   File headers do not contain spaces.

    -   There are no duplicate rows in the file.

    -   Field mappings are accurate.

    -   If you need to update a Charge with uploaded pricing, you can upload a new file. Note that:

        -   Condition columns cannot be added or removed.

        -   New rows can be added.

        -   Column values can be updated.

        -   Adjustment and price limits can be added or removed.

        -   Column mapping must remain the same.
