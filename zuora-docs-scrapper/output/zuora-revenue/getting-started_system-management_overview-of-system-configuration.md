---
title: "Overview of system configuration"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/overview-of-system-configuration"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:22:29.004Z"
---

# Overview of system configuration

Learn how to configure system-related options in Zuora Revenue, including basic and advanced configurations to meet specific business needs.

The system-related configuration options are accessed by using the Setups menu in the Zuora Revenue UI. Some basic configurations, such as the accounting calendar, currency, or security settings are usually completed during the Zuora Revenue implementation phase. Other configuration options are also provided for you to configure Zuora Revenue to meet your specific business needs.

## Basic configurations

Before you can start using Zuora Revenue, the following minimum system-related configurations are required:

-   Accounting calendar Accounting calendar is important in Zuora Revenue because it determines the way that your company accounts for revenue. It is also important to period-close and period-open activities. Accounting calendar is set up during the Zuora Revenue implementation phase. After that, you can log into Zuora Revenue to review the accounting calendar by navigating to Setups > Application > Accounting Calendar .
-   Accounting structure Accounting structure determines the account numbers to be associated with transactions, which is important to the success of further accounting transfer. The accounting structure must be configured based on your business needs. For more information, see [Configure accounting structure](/zuora-revenue/getting-started/system-management/configure-accounting-structure).
-   User roles and permissions To protect the system from unauthorized operations, Zuora Revenue uses role-based access control. As part of system configuration, you must create the role-based access control policies in Zuora Revenue. For more information, see [Manage user access](/zuora-revenue/getting-started/user-management/user-access) .

-   Currency format The currencies that you use for transactions are predefined during the Zuora Revenue implementation phase. You cannot edit the standard code or location of the currency. However, you can configure the display format of each currency in use. For more information, see [Configure currency format](/zuora-revenue/getting-started/system-management/currency-format).

-   Profiles Many profiles are provided out-of-the-box for you to configure various Zuora Revenue functionalities from a central place. For more information, see [Set up profiles](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/A_get_started/topics/set_up_profiles.dita) .


## Advanced configuration

Advanced configurations are optional in Zuora Revenue. Complete the advanced configurations as needed.

-   To quicklyview the KPIs of your interest, you can first create some chart layouts and then add them to your own custom dashboard. Then, whenever you log in to the system again, the custom dashboard will be displayed right after your login. For more information, see [Create your custom dashboard](/zuora-revenue/getting-started/system-management/custom-dashboard).
-   Zuora Revenue can be configured to function under different accounting principles so that you can integrate transaction data from the current GAAP to the future GAAP. For more information, see [Integration of current GAAP and future GAAP](/zuora-revenue/getting-started/system-management/current-and-future-gaap/set-up-integration-method-in-future-gaap) .
-   After your transaction data is uploaded to Zuora Revenue staging tables, the data validation process begins to ensure the data contains appropriate data points. Besides the predefined data validation rules, you can also set up your own validation rules. For more information, see [Data validation process](/zuora-revenue/data-management/data-validation-process) .
-   To define more than one organization or operating unit in Zuora Revenue so that transaction data can be uploaded and processed for a specific organization or operating unit, configure different organizations or operating units. For more information, see [Configure multiple organizations](/zuora-revenue/getting-started/system-management/configure-multiple-organizations) .
-   At least one revenue book must be configured in the system before you can upload transaction lines to Zuora Revenue. For information about how to configure the book in Zuora Revenue, see Configure [multiple books in Zuora Revenue.](/zuora-revenue/getting-started/system-management/multiple-books-configuration-in-zuora-revenue) .
