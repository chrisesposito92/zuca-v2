---
title: "Create a discount charge"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/manage-discount-charges/create-a-discount-charge"
product: "zuora-billing"
scraped_at: "2025-12-24T04:57:46.235Z"
---

# Create a discount charge

Learn how to create a discount charge by enabling charge models, specifying charge details, and configuring timing and frequency settings.

Use the following steps to create a discount charge:

1.  Click your username at the top right and navigate to .
2.  Enable the discount charge models that you want to use. For example, Discount-Fixed Amount or Discount-Percentage.
3.  Create a product rate plan charge that uses a discount charge model. You must create the discount charge as a recurring charge.
4.  In the Charge Amount section, specify the following information:

    -   Charge Model : Select the charge model you want to use, either Discount-Fixed Amount or Discount-Percentage. See Discount charge models for more information.

    -   Stacked : Select this checkbox to create a stacked discount charge. This checkbox is visible only for the Discount-Percentage charge model.

    -   Discount Amount :

        -   For the fixed amount discount, enter the Discount Amount for the billing period of the fixed amount discount.

        -   For the percentage discount, enter the Discount Percentage .

    -   Discount Class : From the list, select the discount class to which the discount charge belongs. Only active discount classes are displayed in the list. This field is optional. If you do not select any discount class, the discount charge does not have one discount class.

    -   Apply Discount To : Select the level at which you want to apply the discount, and specify the application details about this discount charge. For more information, see Specify the scope for discount charges to be applied .


5.  In the Timing and Frequency of Charge section, specify the following information:

    -   Trigger Condition : Select a trigger condition from the list. The trigger condition determines when the charge will be applied.

    -   End Date : Select an end date option from the list. The end date option determines when the charge ends after the charge starts billing.

    -   Billing Period : The frequency with which the charge repeats. You can configure these options under Define Invoice Periods.

    -   Billing Day : Determines when the specific charge is billed. You can configure these options under Define Invoice Periods.
        Note: Selecting the Default from Customer Account option overrides the bill cycle day specified for the customer. For example, if you select the fifth of the month for the billing date, this charge will be billed every month on the fifth of the month, for all customers who have purchased this product. See Product Catalog Dates: Product Rate Plan Charge Date Attributes for more information about these settings.

    -   Billing Period Alignment : Select a value from the list.


6.  Select whether to copy the accounting code from another (non-discount) charge, or define a dedicated accounting code on the new discount charge. In the Name section, select Use Discount Specific Accounting Code , then select an Accounting Code from the list to use this feature.
7.  Click Save .
