---
title: "Material rights"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/material-rights"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:35:03.562Z"
---

# Material rights

A material right is an option to purchase additional goods or services at a price that is less than what the customer would have paid if they had not entered into the contract.

For example, if the customer buys an additional service for a product in the future period, it might be possible that the service is sold at the rate that is prevailing today. This will attract the material rights for the service. If the material right exists in a contract, it should be accounted for as a separate performance obligation.

ASC 606-10-55-45 states, "If a customer has a material right to acquire future goods or services and those goods or services are similar to the original goods or services in the contract and are provided in accordance with the terms of the original contract, then an entity may, as a practical alternative to estimating the standalone selling price of the option, allocate the transaction price to the optional goods or services by reference to the goods or services expected to be provided and the corresponding expected consideration. Typically, those types of options are for contract renewals."

This feature is not applicable for Billing - Revenue Integration since Zuora Billing and Zuora Revenue have different policies and requirements.

## System setup consideration

The following system setups are related to the material right processing in Zuora Revenue. Determine the appropriate settings for them before you input transaction data.

-   Setups > Application > Lookup A lookup named MATERIAL\_RIGHT\_METHOD is provided for you to specify whether to trigger material right based on the selling price of the service line. Enable appropriate lookup codes so that material right line is to be created for the service line whose selling price is less than the midpoint and/or the below point of the standalone selling price.

-   Setups > Application > Profiles

    -   GHOST\_LINE\_CRVOUT\_ALLOC Use this profile to indicate whether the material right line should participate in allocation when the line is carving out.

    -   MR\_LINK\_IDENTIFIER\_REQUIRED Use this profile to indicate whether the link identifier of material rights is a required field when transactions are uploaded to Zuora Revenue.

    -   MATERIAL\_RIGHTS\_LINK\_IDENTIFIER When the MR\_LINK\_IDENTIFIER\_REQUIRED profile is toggled to Yes , use the MATERIAL\_RIGHTS\_LINK\_IDENTIFIER profile to specify the name of the field that is to be used to associate the service line with the product line.


## Transaction input consideration

When transaction data is input to Zuora Revenue, be aware of the following data points that are related to material rights:

-   To indicate a line that is subject to material rights, set the MATERIAL\_RIGHTS\_FLAG field to Y.

-   In addition to setting the MATERIAL\_RIGHTS\_FLAG field to Y, if the product life term (PROD\_LIFE\_TERM) of a service line is greater than the term (TERM) of the service line, Zuora Revenue will create a material right line for this service line.

-   When the MR\_LINK\_IDENTIFIER\_REQUIRED profile is set to Yes and the MATERIAL\_RIGHTS\_LINK\_IDENTIFIER profile is set to a field name, to associate a product line with all its service lines, specify the same value for the field that is specified by the MATERIAL\_RIGHTS\_LINK\_IDENTIFIER profile. The lines that have the same value for the specified field are associated together.

-   To indicate whether only one material right line is to be created for multiple service lines, use the combination of the RAMP\_UP\_FLAG and RAMP\_IDENTIFIER fields. Set the RAMP\_UP\_FLAG field to Y and specify a value for the RAMP\_IDENTIFIER field. Then, one material right line will be created for all the service lines that have the same RAMP\_IDENTIFIER value. For example, the following lines are uploaded to Zuora Revenue, which include one product line and two support service lines. The RAMP\_UP\_FLAG is set to Y for both lines and they have the same value for the RAMP\_IDENTIFIER field. After the data collection process completes in Zuora Revenue, only one material right line will be created for the two support service lines.

    For example, the following lines are uploaded to Zuora Revenue, which include one product line and two support service lines. The RAMP\_UP\_FLAG is set to Y for both lines and they have the same value for the RAMP\_IDENTIFIER field. After the data collection process completes in Zuora Revenue, only one material right line will be created for the two support service lines.

    Material rights : Same ramp identifier

    | Line Item Num | Ext. List Price | Ext. Sell Price | Allocatable | SSP Price | Carves | Allocated | Start Date | End Date | Product Life Term | Link Identifier | Material Right | Ramp up flag | Ramp Identifier |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | Hardware | 1000 | 800 | 800 | 1000 | -211.77 | 588.24 | 1/1/2019 |  | 48 |  |  |  |  |
    | Support-1 | 600 | 300 | 300 | 600 | 52.94 | 352.94 | 1/1/2019 | 12/31/2019 | 48 |  | Y | Y | ABC |
    | Support-2 | 600 | 300 | 300 | 600 | 52.94 | 352.94 | 1/1/2020 | 12/31/2020 | 48 |  | Y | Y | ABC |
    | Material right line |  |  |  |  | 105.89 | 705.89 | 1/1/2021 | 12/31/2022 | 48 |  |  |  |  |

-   If the two support service lines have different values for the RAMP\_IDENTIFIER field as follows. Material rights will not be consolidated. Separate material right lines will be created for the two support service lines after data collection.

    Material rights : Different ramp identifiers

    | Line Item Num | Ext. List Price | Ext. Sell Price | Allocatable | SSP Price | Carves | Allocated | Start Date | End Date | Product Life Term | Link Identifier | Material Right | Ramp up flag | Ramp Identifier |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | Hardware | 1000 | 800 | 800 | 1000 | -242.31 | 557.69 |  |  | 48 |  |  |  |  |
    | Support-1 | 600 | 300 | 300 | 600 | 34.62 | 334.62 | 1/1/2019 | 12/31/2020 | 48 |  | Y | Y | ABC |
    | Support-2 | 600 | 300 | 300 | 600 | 34.62 | 334.62 | 1/1/2020 | 12/31/2021 | 48 |  | Y | Y | XYZ |
    | Material right line-1 |  |  |  |  | 103.85 | 1003.85 | 1/1/2021 | 12/31/2023 |  |  |  |  |  |
    | Material right line-2 |  |  |  |  | 69.22 | 669.22 | 1/1/2022 | 12/31/2023 |  |  |  |  |  |


## Processing logic

After transaction data is uploaded to the system, Zuora Revenue will perform the following steps to determine the existence of material right and create the material right line as required:

1.  Determine whether the material right exists for a transaction line based on the following conditions:
    -   The MATERIAL\_RIGHTS\_FLAG field of the line is set to Y.
    -   The product life term (PROD\_LIFE\_TERM) is longer than the term (TERM) of the line.
    -   The Ext. Sell Price of the line meets the criteria that are enabled in the MATERIAL\_RIGHT\_METHOD lookup definition.
2.  If one of the above conditions is met, create one or more material right lines for the transaction line. Whether and how the material rights are to be consolidated is determined by the values of the RAMP\_UP\_FLAG and RAMP\_IDENTIFIER fields.
3.  Determine the start date and end date of the material right line based on the remaining periods of the transaction line to that of the product life term. The material right line will start from the first day after the transaction line ends and last for the remaining periods until the product life term ends.
4.  Calculate the total values of the material right line proportionally based on the values of the transaction line. The total contractual value before and after the creation of the material right line remains the same. The material right line is considered as a ghost line (or dummy line) in terms of contractual value.
5.  Assign the performance obligation to the material right line based on the Material Rights POB template. This POB template is by default defined in Zuora Revenue and cannot be modified. The release event of this POB template is set to Upon Booking.

## Calculation for material right line

Examples are provided to understand the calculations that are involved when Zuora Revenue creates a material right line.

In the following example, one hardware line and one support line are uploaded to Zuora Revenue. The Support line is subject to the material right as indicated by its MATERIAL\_RIGHTS\_FLAG field. So, one material right line will be created for the Support line.

| Line Item Num | Ext. List Price | Ext. Sell Price | Allocatable | SSP Price | Start Date | End Date | Product Life Term | Material Right |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hardware | 1000 | 800 | 800 | 1000 |  |  | 48 |  |
| Support | 600 | 300 | 300 | 600 | 1/1/2019 | 12/31/2019 | 48 | Y |

The start date and end date of the material right line are determined based on the Support line. The product life term of the Support line is 4 years and the term of the line is 3 years (from January 1, 2019 to December 31, 2021). So, the material right line will start from the next day after the Support line ends, which is January 1, 2022. It will last for the remaining periods until the product life term ends, which is December 31, 2022.

The values of the material right line are calculated proportionally based on the Support line. The Ext. List Price of the Support line is 600 for 3 years. The Ext. List Price of the material right line can be calculated according to the following formula. The Ext. Sell Price of the material right line is similarly calculated.

*Ext. List Price = Ext. List Price of the Support line / Term of the Support line \* Term of the material right line = 600/3\*1 = 200*

| Line Item Num | Ext. List Price | Ext. Sell Price | Allocatable | SSP Price | Allocated | Carves | Start Date | End Date | Product Life Term |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hardware | 1000 | 800 | 800 | 1000 | 666.67 | -133.33 |  |  | 48 |
| Support | 600 | 300 | 300 | 600 | 400 | 100 | 1/1/2019 | 12/31/2021 | 48 |
| Material Right line | 200* | 100* | 100* | 200* | 133.33 | 33.33 | 1/1/2022 | 12/31/2022 |  |

Note:

The Ext. List Price, Ext. Sell Price, and SSP Price of the material right line is calculated internally. The results are not displayed in the UI. The numbers with an asterisk (\*) in the above table will not show up when you are viewing the material right line in the UI.
