---
title: "Apply an SSP formula to eligible transaction lines"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/ssp-calculation-based-on-formulas/apply-an-ssp-formula-to-eligible-transaction-lines"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:19:28.092Z"
---

# Apply an SSP formula to eligible transaction lines

Learn how to apply a formula to eligible transaction lines.

1.  Navigate to SSP > Formulas.
2.  To define a new formula, click the '+' icon.
3.  In the New Formula window, complete the following steps and then click the save icon.

    -   Specify a unique name in the Template Name field.

    -   Select SSP for the SSP Type field.

    -   Specify the start effective date for this formula in the Start Date field.

    -   In the Formula field, select appropriate transaction fields from the Column list, numbers and simple operators from the Keypad section, and optionally, complicated operators from the Function section to define the formula.


4.  Ensure that the Enabled switch is toggled to Yes.
5.  (Optional): Specify the following fields in the Formula Definition tab and click the save icon.

    -   Template Description: A short description of this formula.

    -   End Date: The end effective date of this formula.

    -   Low/Floor%: The lowest range of the SSP value.

    -   High/Ceilling%: The highest range of the SSP value.


6.  (Optional): To filter out the eligible transaction lines to which this formula is applied, click the Filters tab, complete the following steps:
    1.  Click the '+' icon to add a filter rule.
    2.  Select the appropriate transaction field name, the operator, and the operand to define a rule.
    3.  Add as many rules as necessary and then click the save icon.
        After the formula is defined in the SSP template, Zuora Revenue first applies the filter rules (if defined) to identify eligible transaction lines, and then applies the defined formula to calculate the SSP.
