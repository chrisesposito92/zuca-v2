---
title: "Residual SSP derivation"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/residual-ssp-derivation"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:31:36.058Z"
---

# Residual SSP derivation

Residual standalone selling price (RSSP) is used to allocate residual value in revenue contracts when products are not sold standalone or are new to the market. Zuora Revenue performs residual allocation on RSSP lines to determine their selling prices.

Residual standalone selling price (RSSP) is a type of SSP, which can help determine residual allocation in the revenue contract. The maximum is allocated to SSP lines and the remaining value is allocated to RSSP if there is any. This situation usually happens when the product is never sold as a standalone product or the product is new to the market. The residual allocation process is performed by Zuora Revenue on the lines that are considered as the RSSP type to determine their selling prices.

## RSSP Stratification

For Zuora Revenue to perform residual allocation on the RSSP lines, you must first upload the RSSP stratification group to Zuora Revenue. The procedure of uploading RSSP stratification in the UI is similar to uploading SSP to Zuora Revenue. The steps are outlined as follows.

1.  Create an RSSP template and download the RSSP template. Remember to select RSSP as the SSP type. For detailed step-by-step instructions in the UI, see [Create and download SSP template](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/D_Day_to_day_operation/topics/crearte_and_download_ssp_template.dita).

2.  In the downloaded RSSP template, fill in the following RSSP information for the stratification fields for each RSSP line.

    | Column header | Description |
    | --- | --- |
    | RSSP Min Type | Specifies the method to derive the minimum RSSP values for the RSSP lines. The result determines whether the residual method can be applied.Possible values are as follows:CUSTOM: The amount that is specified in the RSSP Min (Amount) column is to be used as the unit RSSP Min amount for the line. Then the RSSP Min amount for the line can be calculated based on the following formula:RSSP Min = RSSP Min (Amount) * Quantity * TermLIST PRICE: The value that is specified in the RSSP Min (%) column is to be applied to the line-level List Price to derive the RSSP Min amount for the line based on the following formula:RSSP Min = line-level List Price * RSSP Min (%) * Quantity * TermSELL PRICE: The line-level Sell Price is to be used as the RSSP Min amount for the line.RSSP Min = line-level Sell Price * Quantity * Term |
    | RSSP Min (Amount) | Required when RSSP Min Type is set to CUSTOM.Specifies the amount to be used as the unit RSSP Min amount for the line. |
    | RSSP Min (%) | Required when RSSP Min Type is set to LIST PRICE.Specifies the percentage of the line-level List Price, which is to be used as the RSSP Min amount for the line. |
    | RSSP FV Type | Determines how to allocate the remaining transaction price (Total Transaction price - Allocated value of SSP lines) across all RSSP lines in the case of residual allocation.Possible values are as follows:CUSTOM: The amount that is specified in the RSSP FV (Amount) column is used as the unit RSSP price for the line. Then the Ext. RSSP price of the line can be calculated based on the following formula:RSSP price = RSSP FV (Amount)Ext. RSSP price = RSSP price * Quantity * TermLIST PRICE: The value that is specified in the RSSP FV (%) column is to be applied to the line-level List Price to calculate the unit RSSP price for the line based on the following formula. Then the Ext. RSSP price of the line can be calculated based on the following formula:RSSP price = line-level List Price * RSSP FV (%)Ext. RSSP price = RSSP price * Quantity * TermSELL PRICE: The line-level Sell Price is to be used as the unit RSSP price for the line. Then the Ext. RSSP price of the line can be calculated based on the following formula:RSSP price = line-level Sell PriceExt. RSSP price = RSSP price * Quantity * TermHIGHER OF SP OR RSSP MIN AMOUNT: The higher of the line-level Sell Price and the RSSP Min amount is to be used as the unit RSSP price for the line. Then the Ext. RSSP price of the line can be calculated based on the following formula:RSSP price = max (line-level Sell Price, line-level RSSP Min)Ext. RSSP price = RSSP price * QuantityRSSP MIN BASIS: The line-level RSSP Min amount is to be used as the unit RSSP price for the line. Then the Ext. RSSP price of the line can be calculated by multiplying the RSSP price by the quantity.RSSP price = line-level RSSP MinExt. RSSP Price = RSSP price * Quantity * Term |
    | RSSP FV (Amount) | Required when RSSP FV Type is set to CUSTOM.Specifies the amount to be used as the unit RSSP price for the line. |
    | RSSP FV (%) | Required when RSSP FV Type is set to LIST PRICE.Specifies the percentage of the line-level List Price, which is to be used as the unit RSSP price for the line. |
    | Alternative SSP Type | Determines how to allocate the total of minimum RSSP amount across all RSSP lines based on the RSSP price in the case when the residual method cannot be applied.This column takes effect only when the remaining transaction price of the RC is less than the total RSSP Min amount. In this case, standard SSP analysis must be performed across all allocation eligible lines based on the SSP values for all SSP lines and the alternative SSP values for all RSSP lines.Possible values are as follows:CUSTOM: The amount that is specified in the Alternative SSP (Amount) column is used as the unit SSP price for the line. Then, the Ext. SSP price of the RSSP line can be calculated based on the following formula:SSP price = Alternative SSP (Amount)Ext. SSP Price = SSP price * Quantity * TermLIST PRICE: The value that is specified in the Alternative SSP (%) column is to be applied to the line-level List Price to calculate the unit SSP price for the line based on the following formula. Then, the Ext. SSP price of the line can be calculated based on the following formula:SSP price = line-level List Price * Alternative SSP (%)Ext. SSP Price = SSP price * Quantity * TermSELL PRICE: The line-level Sell Price is to be used as the unit SSP price for the line. Then, the Ext. SSP price of the line can be calculated based on the following formula:SSP price = line-level Sell PriceExt. SSP Price = SSP price * Quantity * Term |
    | Alternative SSP (Amount) | Required when Alternative SSP Type is set to CUSTOM.Specifies the amount to be used as the unit SSP price for the line. |
    | Alternative SSP (%) | Required when Alternative SSP Type is set to LIST PRICE.Specifies the percentage of the line-level List Price, which is to be used as the unit SSP price for the line. |


3\. Create an RSSP batch based on the template to upload the RSSP stratification file. For step-by-step instructions in the UI, see [Create SSP batch to upload SSP dataNo Content found for /db/organizations/zuora/repositories/prod-sitemap/content/documents/external\_publications/revenue/D\_Day\_to\_day\_operation/topics/crearte\_ssp\_batch\_to\_upload\_SSP\_data.dita](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/D_Day_to_day_operation/topics/crearte_ssp_batch_to_upload_SSP_data.dita).

## Derivation Logic

After the RSSP stratification is uploaded to Zuora Revenue, the allocation process logic is applied as follows:

1.  Calculate the total transaction price (Total TP) for all the lines in the RC.

    Total TP = sum (all line-level Ext. Sell Price)

2.  Perform standard SSP allocation to derive the SSP price for all the SSP lines based on the SSP setup.

3.  Calculate the total SSP price (Total TP) for all the SSP lines.

    Total SSP = sum (initial SSP for all SSP lines).

4.  Calculate the remaining transaction price (Remaining TP) for the RC.

    Remaining TP = Total TP - Total SSP.

5.  Calculate the RSSP Min amount for each RSSP line in the RC based on the RSSP Min settings in RSSP stratification.

    | RSSP Min Type | RSSP Min calculation |
    | --- | --- |
    | CUSTOM | RSSP Min = RSSP Min (Amount) * Quantity * Term |
    | LIST PRICE | RSSP Min = line-level List Price * RSSP Min (%) * Quantity * Term |
    | SELL PRICE | RSSP Min = line-level Sell Price * Quantity * Term |

6.  Calculate the total RSSP Min amount for all the RSSP lines in the RC.

    Total RSSP Min = sum (line-level RSSP Min)

7.  Compare whether the Remaining TP amount is greater than the Total RSSP Min amount:

    -   If the Remaining TP amount is greater than or equal to the Total RSSP Min amount, apply the residual method. Allocate the remaining transaction price amount among the RSSP lines based on the weightage of RSSP FV value.

        | RSSP FV Type | Ext. RSSP calculation (for RSSP lines) |
        | --- | --- |
        | CUSTOM | RSSP price = RSSP FV (Amount)Ext. RSSP price = RSSP price * Quantity * Term |
        | LIST PRICE | RSSP price = line-level List Price * RSSP FV (%)Ext. RSSP price = RSSP price * Quantity * Term |
        | SELL PRICE | RSSP price = line-level Sell PriceExt. RSSP price = RSSP price * Quantity * Term |
        | HIGHER OF SP OR RSSP MIN | RSSP price = max (line-level Sell Price, line-level RSSP Min Amount)Ext. RSSP price = RSSP price * Quantity * Term |
        | RSSP MIN BASIS | RSSP price = line-level RSSP Min AmountExt. RSSP Price = RSSP price * Quantity * Term |

    -   If the Remaining TP amount is less than the Total RSSP Min amount, the residual method cannot be applied. Zuora Revenue performs standard SSP analysis across all allocation eligible lines in the RC. The Ext. SSP Price for the RSSP lines is calculated based on Alternative SSP settings in RSSP stratification.

        | Alternative SSP Type | Ext. SSP calculation (for RSSP lines) |
        | --- | --- |
        | CUSTOM | SSP price = Alternative SSP (Amount)Ext. SSP Price = SSP price * Quantity * Term |
        | LIST PRICE | SSP price = line-level List Price * Alternative SSP (%)Ext. SSP Price = SSP price * Quantity * Term |
        | SELL PRICE | SSP price = line-level Sell PriceExt. SSP Price = SSP price * Quantity * Term |


    Note:

    When alternative SSP is applied, the SSP type of the original RSSP lines will be flagged as ASSP and the RSSP Fail field will be updated to Y.


Before the above derivation process begins, Zuora Revenue checks the setting of the ENABLE\_RSSP\_FLOOR\_METHOD profile. If the ENABLE\_RSSP\_FLOOR\_METHOD profile is enabled, Zuora Revenue will compare the line-level Ext. Sell Price with the line-level RSSP Min amount. If the line-level RSSP Min amount is greater than the line-level Ext. Sell Price, the line will be treated as SSP line even if the line is eligible for residual allocation. In this case, the Ext. SSP price for this line will be the Ext. RSSP Min amount.

## Residual allocation example

Two examples are provided to help you understand how Zuora Revenue performs residual allocation or alternative SSP allocation to determine the RSSP price for RSSP lines.

## Residual SSP allocation

In this example, the RSSP stratification that is uploaded to Zuora Revenue is as follows:

| Line Item # | RSSP Min Type | RSSP Min (Amount) | RSSP Min (%) | RSSP FV Type | RSSP FV (Amount) | RSSP FV (%) | Alternative SSP Type | Alternative SSP (Amount) | Alternative SSP (%) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SUB1 | CUSTOM | 6000 |  | CUSTOM | 6000 |  | CUSTOM | 5000 |  |
| SUB2 | LIST PRICE |  | 60 | LIST PRICE |  | 60 | LIST PRICE |  | 60 |
| SUB3 | SELL PRICE |  |  | SELL PRICE |  |  | SELL PRICE |  |  |

There are five allocation eligible lines in the following revenue contract, which includes two SSP lines and three RSSP lines.

| SO Line # | Line Item # | FV Type | Qty | Term | Ext. List Price | Ext. Sell Price |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SW1 | SSP | 1 | 1 | 30,000.00 | 20,000.00 |
| 2 | SW2 | SSP | 1 | 1 | 15,000.00 | 10,000.00 |
| 3 | SUB1 | RSSP | 10 | 1 | 100,000.00 | 75,000.00 |
| 4 | SUB2 | RSSP | 10 | 1 | 100,000.00 | 85,000.00 |
| 5 | SUB3 | RSSP | 10 | 1 | 100,000.00 | 90,000.00 |
| Total | 345,000.00 | 280,000.00 |  |  |  |  |

The total transaction price (Ext. Sell Price) of this RC is 280,000.00. For the two SSP lines, the SSP prices are derived based on the SSP setup and the SSP percentage of the two lines are 60% and 80%.

| SO Line # | Line Item # | FV Type | Qty | Term | Ext. List Price | Ext. Sell Price | Ext.SSP |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | SW1 | SSP | 1 | 1 | 30,000.00 | 20,000.00 | 18,000.00 |
| 2 | SW2 | SSP | 1 | 1 | 15,000.00 | 10,000.00 | 12,000.00 |
| 3 | SUB1 | RSSP | 10 | 1 | 100,000.00 | 75,000.00 |  |
| 4 | SUB2 | RSSP | 10 | 1 | 100,000.00 | 85,000.00 |  |
| 5 | SUB3 | RSSP | 10 | 1 | 100,000.00 | 90,000.00 |  |
| Total | 345,000.00 | 280,000.00 | 30,000.00 |  |  |  |  |

The remaining transaction price equals the total transaction price (280,000.00) minus the total SSP price (30,000.00), which is 250,000.00.

The RSSP Min amount for each RSSP line is calculated based on the RSSP stratification as follows:

-   SO Line #1: RSSP Min = RSSP Min (Amount) \* Quantity \* Term = 6000\*10\*1 = 60,000.00
-   SO Line #2: RSSP Min = line-level List Price \* RSSP Min (%) \* Quantity \* Term = Ext. List Price \* RSSP(%) = 100,000\*60% = 60,000.00
-   SO Line #3: RSSP Min = line-level Sell Price \* Quantity \* Term = Ext. Sell Price = 90,000.00

| SO Line # | Line item # | FV Type | Qty | Term | Ext.List price | Ext.Sell Price | RSSP Min |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3 | SUB1 | RSSP | 10 | 1 | 100,000.00 | 75,000.00 | 60,000.00 |
| 4 | SUB2 | RSSP | 10 | 1 | 100,000.00 | 85,000.00 | 60,000.00 |
| 5 | SUB3 | RSSP | 10 | 1 | 100,000.00 | 90,000.00 | 90,000.00 |
| Total | 345,000.00 | 250,000.00 | 210,000.00 |  |  |  |  |

The remaining transaction price (250,000.00) is greater than the total RSSP Min amount (210,000.00). So, the residual method is applied to determine the RSSP price based on the RSSP FV Type settings in the RSSP stratification.

-   SO Line #1: Ext. RSSP Price = Custom FV Amount \* Quantity \* Term = 6000\*10\*1=60,000.00
-   SO Line #2: Ext. RSSP Price = line-level List Price \* SSP (%) \* Quantity \* Term = Ext. List Price \* SSP(%) = 100,000\*60% = 60,000.00
-   SO Line #3: Ext. RSSP Price = line-level Sell Price \*Quantity \* Term = Ext. Sell Price = 90,000.00

| SO Line # | Line Item # | FV Type | Qty | Term | Ext. List Price | Ext. Sell Price | Ext. RSSP | Ext. RSSP% |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 3 | SUB1 | RSSP | 10 | 1 | 100,000.00 | 75,000.00 | 60,000.00 | 0.2857 |
| 4 | SUB2 | RSSP | 10 | 1 | 100,000.00 | 85,000.00 | 60,000.00 | 0.2857 |
| 5 | SUB3 | RSSP | 10 | 1 | 100,000.00 | 90,000.00 | 90,000.00 | 0.4286 |
| Total |  | 250,000.00 |  |  |  |  |  |  |

The SSP allocation for all the five lines in the RC is as follows:

| SO Line # | Line item # | FV Type | Qty | Term | Ext.List Price | Ext.Sell Price | Ext.SSP | Allocated |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | SW1 | SSP | 1 | 1 | 30,000.00 | 20,000.00 | 18,000.00 | 18,000.00 |
| 2 | SW2 | SSP | 1 | 1 | 15,000.00 | 10,000.00 | 12,000.00 | 12,000.00 |
| 3 | SUB1 | RSSP | 10 | 1 | 100,000.00 | 75,000.00 | 60,000.00 | 71,425.00 |
| 4 | SUB2 | RSSP | 10 | 1 | 100,000.00 | 85,000.00 | 60,000.00 | 71,425.00 |
| 5 | SUB3 | RSSP | 10 | 1 | 100,000.00 | 90,000.00 | 90,000.00 | 107,150.00 |
| Total | 345,000.00 | 280,000.00 |  | 280,000.00 |  |  |  |  |

## Altenative SSP allocation

In this example, the RSSP stratification that is uploaded to Zuora Revenue is as follows:

| Line Item # | RSSP Min Type | RSSP Min (Amount) | RSSP Min (%) | RSSP FV Type | RSSP FV (Amount) | RSSP FV (%) | Alternative SSP Type | Alternative SSP (Amount) | Alternative SSP (%) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SUB1 | CUSTOM | 1000 |  | CUSTOM | 1000 |  | CUSTOM | 2000 |  |
| SUB2 | LIST PRICE |  | 60 | LIST PRICE |  | 60 | LIST PRICE |  | 40 |
| SUB3 | SELL PRICE |  |  | SELL PRICE |  |  | SELL PRICE |  |  |

There are five allocation eligible lines in the following revenue contract, which includes two SSP lines and three RSSP lines.

| SO Line # | Line Item # | FV Type | Qty | Term | Ext. List Price | Ext. Sell Price |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SW1 | SSP | 1 | 1 | 30,000.00 | 20,000.00 |
| 2 | SW2 | SSP | 1 | 1 | 15,000.00 | 10,000.00 |
| 3 | SUB1 | RSSP | 10 | 1 | 50,000.00 | 12,500.00 |
| 4 | SUB2 | RSSP | 10 | 1 | 50,000.00 | 15,000.00 |
| 5 | SUB3 | RSSP | 10 | 1 | 50,000.00 | 20,000.00 |
| Total | 195,000.00 | 77,500.00 |  |  |  |  |

The total transaction price (Ext. Sell Price) of this RC is 77,500.00. For the two SSP lines, the SSP prices are derived based on the SSP setup and the SSP percentage of the two lines are 100% and 80%.

| SO Line# | Line Item # | FV Type | Qty | Term | Term | Ext.List Price | Ext.Sell Price |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | SW1 | SSP | 1 | 1 | 30,000.00 | 20,000.00 | 30,000.00 |
| 2 | SW2 | SSP | 1 | 1 | 15,000.00 | 10,000.00 | 12,000.00 |
| 3 | SUB1 | RSSP | 10 | 1 | 50,000.00 | 12,500.00 |  |
| 4 | SUB2 | RSSP | 10 | 1 | 50,000.00 | 15,000.00 |  |
| 5 | SUB3 | RSSP | 10 | 1 | 50,000.00 | 20,000.00 |  |
| Total | 195,000.00 | 77,500.00 | 42,000.00 |  |  |  |  |

The remaining transaction price equals to the total transaction price (77,500.00) minus the total SSP price (42,000.00), which is 37,500.00.

The RSSP Min amount for each RSSP line is calculated based on the RSSP stratification as follows:

-   SO Line #1: RSSP Min = RSSP Min (Amount) \* Quantity \* Term = 1000\*10\*1 = 10,000.00
-   SO Line #2: RSSP Min = line-level List Price \* RSSP Min (%) \* Quantity \* Term = 50,000\*60% = 30,000.00
-   SO Line #3: RSSP Min = line-level Sell Price \* Quantity \* Term = 20,000.00

| SO Line # | Line Item # | FV Type | Qty | Term | Ext. List Price | Ext.Sell Price | Ext.SSP |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3 | SUB1 | RSSP | 10 | 1 | 50,000.00 | 12,500.00 | 10,000.00 |
| 4 | SUB2 | RSSP | 10 | 1 | 50,000.00 | 15,000.00 | 30,000.00 |
| 5 | SUB3 | RSSP | 10 | 1 | 50,000.00 | 20,000.00 | 20,000.00 |
| Total | 150,000.00 | 47,500.00 | 60,000.00 |  |  |  |  |

The remaining transaction price (37,500.00) is less than the total RSSP Min amount (60,000.00). So, the residual method cannot be applied. Instead, Zuora Revenue performs a standard SSP analysis across all allocation eligible lines. The Alternative SSP settings in RSSP stratification are used to determine the SSP value for the RSSP lines.

-   SO Line #1: Ext. SSP Price = Alternative SSP (Amount) \* Quantity \* Term = 2000\*10\*1 = 20,000.00
-   SO Line #2: Ext. SSP Price = line-level List Price \* Alternative SSP (%) \* Quantity \* Term = 50,000\*40% = 20,000.00
-   SO Line #3: Ext. SSP Price = line-level Sell Price \*Quantity \* Term = 20,000.00

| SO Line # | Line Item # | FV Type | Qty | Term | Ext.List Price | Ext.Sell Price | Alternative SSP |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3 | SUB1 | ASSP | 10 | 1 | 50,000.00 | 12,500.00 | 20,000.00 |
| 4 | SUB2 | ASSP | 10 | 1 | 50,000.00 | 15,000.00 | 20,000.00 |
| 5 | SUB3 | ASSP | 10 | 1 | 50,000.00 | 20,000.00 | 20,000.00 |
| Total | 150,000.00 | 47,500.00 | 60,000.00 |  |  |  |  |

The SSP allocation for all the five lines in the RC is as follows:

| SO Line # | Line item # | FV Type | Qty | Term | Ext.List Price | Ext.Sell Price | Ext.SSP | Allocated |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | SW1 | SSP | 1 | 1 | 30,000.00 | 20,000.00 | 30,000.00 | 22794.12 |
| 2 | SW2 | SSP | 1 | 1 | 15,000.00 | 10,000.00 | 12,000.00 | 9117.65 |
| 3 | SUB1 | ASSP | 10 | 1 | 50,000.00 | 12,500.00 | 20,000.00 | 15196.08 |
| 4 | SUB2 | ASSP | 10 | 1 | 50,000.00 | 15,000.00 | 20,000.00 | 15196.08 |
| 5 | SUB3 | ASSP | 10 | 1 | 50,000.00 | 20,000.00 | 20,000.00 | 15196.08 |
| Total | 195,000.00 | 77,500.00 |  | 77,500.00 |  |  |  |  |
