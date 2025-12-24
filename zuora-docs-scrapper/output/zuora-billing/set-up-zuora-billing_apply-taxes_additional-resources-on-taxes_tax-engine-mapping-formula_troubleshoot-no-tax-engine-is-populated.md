---
title: "Troubleshoot: no tax engine is populated"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-engine-mapping-formula/troubleshoot-no-tax-engine-is-populated"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:08.916Z"
---

# Troubleshoot: no tax engine is populated

This topic addresses issues where no tax engine is populated during tax calculation due to mapping formula limitations, and provides solutions for ensuring correct tax engine selection for different customer batches.

During tax calculation, there might be situations where no tax engine is populated based on the mapping formula. For example, imagine a scenario where:

-   You divide your customers into Batch 1 and Batch 2. You offer two product rate plan charges, where Charge 1 is taxable and Charge 2 is not taxable. Customers in both Batch 1 and Batch 2 all have Charge 1 and Charge 2 in their subscriptions.
    | Customers | Batch 1 | Batch 2 |
    | --- | --- | --- |
    | Subscriptions | Charge 1 & Charge 2 | Charge 1 & Charge 2 |

-   You set up Tax Code 1 and provide a mapping formula as below. It defines that for customers in Batch 1, use ConnectTaxEngine1 to calculate taxes on their billing documents, such as invoices.{% if account.batch == 'Batch1' %} ConnectTaxEngine1 | CompanyCode1 {% endif %}


When you create a bill run to generate invoices for those customers:

-   For Batch 1 customers, the invoice item for Charge 1 will have a tax item. Based on the mapping formula in Tax Code 1, ConnectTaxEngine1 will be selected to calculate the taxes.
    | Customers | Batch 1 |  |
    | --- | --- | --- |
    | Invoice item | Charge 1 (taxable) | Charge 2 (not taxable) |
    | Tax | Tax Code 1 > ConnectTaxEngine1 | No tax code |

-   For Batch 2 customers, though Charge 1 also needs to be taxed, no tax engine will be selected based on the mapping formula, and the error message "No tax engine is populated, check your mapping formula in Tax Code 1." will appear.
    | Customers | Batch 2 |  |
    | --- | --- | --- |
    | Invoice item | Charge 1 (taxable) | Charge 2 (not taxable) |
    | Tax | Tax Code 1 > No tax engine is returned > Error | No tax code |

-   In this case, you need to refine the mapping formula to make sure it covers all customers who subscribe to the product rate plan charge associated with the tax code. To solve the issue, you could move the customers from Batch 2 into Batch 1 if you need to charge tax for those customers or update the mapping formula to cover Batch 2, such as:1 {% if account.batch == 'Batch1' %} 2 ConnectTaxEngine1 | CompanyCode1 3 {% elsif account.batch == 'Batch2' %} 4 ConnectTaxEngine1 | CompanyCode1 5 {% endif %}
