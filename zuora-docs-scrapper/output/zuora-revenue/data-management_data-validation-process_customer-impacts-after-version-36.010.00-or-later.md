---
title: "Customer impacts after version 36.010.00 or later"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/data-validation-process/customer-impacts-after-version-36.010.00-or-later"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:18.489Z"
---

# Customer impacts after version 36.010.00 or later

Understand the impacts of the data validation framework change in Zuora Revenue version 36.010.00 or later, including predefined validation rules and upgrade recommendations for different environments.

As a new user or an existing user of Zuora Revenue, be aware of the impacts of the data validation framework change that is introduced in version 36.010.00 or later.

-   If you are a new user who is provisioned with version 36.010.00 or later, the predefined validation rules are by default enabled. You cannot disable the enabled validation rules or enable the disabled ones. All predefined validation rules are not editable. For information about the list of enabled validation rules in the latest version, see [Predefined validation rules](/zuora-revenue/data-management/data-validation-process/predefined-validation-rules).

-   If you are already using Zuora Revenue in the production environment, you can continue to use Zuora Revenue for the data validation process in the same way as you currently do. The validation framework change does not impact the data validation process even after Zuora Revenue is upgraded to version 36.010.00 or later. To apply the latest data validation framework, contact the Zuora Revenue Support team within 90 days after the upgrade. The Support team can provide you with a script to apply all the necessary changes to your environment so that the latest data validation framework can work as designed.

-   If you are using Zuora Revenue in the sandbox environment, you can continue to test or use Zuora Revenue for the data validation process in the same way as you currently do.

    -   For customers who have the UAT signed-off and are ready to go to production, it is recommended to go live with the tested version and then upgrade to version 36.010.00 or later. In this way, the validation framework change does not impact the data validation process even after the upgrade. To apply the latest data validation framework, contact the Support team within 90 days after the upgrade. The Support team can provide you with a script to apply all the necessary changes to your environment so that the latest data validation framework can work as designed.

    -   For customers in the pending UAT cycle, it is recommended to upgrade to version 36.010.00 or later and then enable the predefined validation rules with a specific script in the sandbox environment.
