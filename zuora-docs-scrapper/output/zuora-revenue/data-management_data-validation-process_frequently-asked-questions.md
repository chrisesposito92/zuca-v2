---
title: "Frequently asked questions"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/data-validation-process/frequently-asked-questions"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:21.243Z"
---

# Frequently asked questions

This document addresses frequently asked questions regarding the data validation framework changes in version 36.010.00 or later.

The following questions are frequently asked after the data validation framework change happens in version 36.010.00 or later.

| Question | Answer |
| --- | --- |
| Will this new data validation framework be available for on-premises customers or Cloud customers? | Yes, it is available for both. |
| How can I get the latest validation framework if I am using an old version? | Work with the Support team to apply the latest build of version 36.010.00 or later to use the latest validation framework. |
| Will there be release notes for the validation framework change? | Yes. Any changes to the data validation framework will be announced in the Zuora Revenue release notes. |
| How do I know which rules are enabled? | For always up-to-date information about the predefined validation rules in the latest version, see Predefined validation rules. |
| Can I edit the predefined validation rules? | All the predefined rules are read-only in the UI after Zuora Revenue is upgraded to version 36.010.00 or later. You cannot edit them. |
| Will there be any impact if the new data validation framework is deployed? | Yes, there will be an impact as explained in Customer impacts after version 36.010.00 . To get more details or help, you can also contact the Support or Global Services team. |
| How can I get this new validation framework to work if I'm using the production environment? | Upgrade to version 36.010.00 or later, and then raise a TOPS (technical operation) ticket indicating JIRA# RD-5769 to apply the latest data validation framework. The Support team can provide you with a script to apply the latest validation framework to your environment. |
| If I am using the sandbox environment and not live yet, will the latest framework be automatically applied after I upgrade to 36.010.00 or later? | No, the predefined validation rules will not be enabled after the upgrade. The Global Services team can provide you with a script to run to enable the predefined validation rules. Raise a TOPS ticket indicating JIRA# RD-5769 to ask for the script. |
| If there are stage validation rules that are already disabled prior to 36.010.00, will they be enabled? | Yes, they will be enabled. |
| If there are stage validation rules that are already enabled prior to 36.010.00, will they be disabled? | No, they will not be disabled. Only the validation error codes that are deprecated or indicated as disabled temporarily will be disabled. |
| Will there be any impact on the user-defined validation rules? | No, any user-defined validation rule will remain as is now. |
| If I am an existing user and live in the production environment, what is the timeline for me? | You need to work with the Zuora Revenue Support team to enable the predefined validation rules within 90 days after Zuora Revenue is upgraded to version 36.010.00 or later. |
