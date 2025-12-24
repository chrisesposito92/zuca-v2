---
title: "Enable Zuora Billing and Zuora Revenue integration"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/billing---revenue-integration_1/enable-zuora-billing-and-zuora-revenue-integration"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:40:08.066Z"
---

# Enable Zuora Billing and Zuora Revenue integration

Learn how to enable integration between Zuora Billing and Zuora Revenue.

To enable integration between Zuora Billing and Zuora Revenue, appropriate configuration on both applications and running some predefined programs in Zuora Revenue are required. The major steps that are involved in the enablement process are outlined as follows. Some steps are to be performed by end-users and some are performed by the Zuora team.

Note: The Instant On feature mentioned in the following integration enablement process is available in Zuora Revenue 37.007.00.00 or later only.

1.  As an end-user, submit a ticket to Zuora Support team requesting to enable the integration between Zuora Billing and Zuora Revenue. You will be asked to provide some detailed information to process your ticket.
2.  (Conditional) Zuora Billing allows one tenant to have multiple entities. If you have multiple entities in Zuora Billing, you need to configure the mapping between Zuora Billing entities and Zuora Revenue organizations. After that, a standard user who can access a particular Billing entity will have visibility to only the Revenue organization that is mapped from this entity.
3.  Configure your home currency in Zuora Billing. The home currency setting is required no matter whether you have multiple entities in your tenant or whether you want to enable foreign currency conversion in Zuora Billing. This configuration is done in Finance Settings:

    1.  In the Zuora Billing UI, click your username at the top right and then click Finance.
    2.  On the Finance Settings page, click Manage Currency Conversion. Note that this setting is available only when [Currency Conversion](/accounts-receivable/finance/zuora-finance-settings/currency-conversion-management/foreign-currency-conversion) is enabled for your Zuora Billing tenant.
    3.  Specify the Home Currency field and save it.

    Note:

    If multiple entities are enabled for your tenant, set the home currency at the parent entity level.

    After you have set your home currency, you cannot change it.

4.  Review the settings in Zuora Billing that have revenue impact and make sure they have been configured appropriately and then sync them from Zuora Billing to Zuora Revenue by running a predefined program. This program can automatically configure some profiles and lookups in Zuora Revenue based on the Zuora Billing settings.
5.  (Conditional) Zuora Billing standard objects and fields can be automatically synced to Zuora Revenue Pre-staging tables for further processing. However, if you have any custom objects or fields (suffix of \_\_c) in Zuora Billing, you must configure the one-to-one field mapping between Zuora Billing object field and Zuora Revenue field. Otherwise, the custom objects and fields cannot be synced to Zuora Revenue correctly.
6.  Billing object data that are synced to Zuora Revenue pre-staging tables must be transformed to transaction lines that can be consumed by Zuora Revenue in its Staging tables. This data transformation process is based on the transaction templates that are defined for each transaction type. For each transaction type that is to be processed in Zuora Revenue, at least one mapping template must be created.
7.  The Billing Revenue UI authentication proxy is a UI integration between Zuora Billing and Zuora Revenue. With this proxy enabled, you can easily switch between Zuora Billing UI and Zuora Revenue UI without additional logins. As an end-user, submit a ticket to the Zuora Support team requesting to enable SSO between the two systems or consider enabling it during the implementation phase.
8.  (Conditional) For multi-currency transactions, different exchange rates might result in issues when you reconcile Zuora Billing and Zuora Revenue. If you have multi-currency transactions, it is recommended to sync exchange rates from Zuora Billing to Zuora Revenue regularly.
9.  (Conditional) If the [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) feature is just enabled in Zuora Billing after credit memos and/or debit memos are already generated in Zuora Billing by the Invoice Item Adjustments feature, to sync these historical credit memos and debit memos to Zuora Revenue, do a one-off configuration to enable the Invoice Settlement feature for Zuora Revenue. After that, the Credit Memo and Debit Memo objects can be automatically synced and transformed in Zuora Revenue.
10.  Run the Revenue Sync job on a regular basis. There are multiple ways to run or schedule this job.

     -   Enable the Instant On feature so that the Revenue Sync job can automatically run based on the specified interval.

     -   Manually run or schedule the Revenue Sync job. After that, you also need to manually run or schedule the data collection job.


11.  Run the Data Collection job on a regular basis. There are multiple ways to run or schedule this job.

     -   With the Instant On feature enabled, set the Auto\_Collect lookup to Y for the AUTO\_REVENUE\_SYNC lookup. Then, upon completion of each Revenue Sync job, the Data Collection job can also automatically start to group the transaction lines into revenue contracts.

     -   With the Instant On feature disabled, manually run or schedule the Data Collection job.
