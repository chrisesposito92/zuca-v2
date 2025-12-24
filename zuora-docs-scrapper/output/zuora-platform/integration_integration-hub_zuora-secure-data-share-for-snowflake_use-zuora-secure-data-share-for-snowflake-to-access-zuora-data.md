---
title: "Use Zuora Secure Data Share for Snowflake to access Zuora data"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/use-zuora-secure-data-share-for-snowflake-to-access-zuora-data"
product: "zuora-platform"
scraped_at: "2025-12-24T18:33:18.188Z"
---

# Use Zuora Secure Data Share for Snowflake to access Zuora data

Learn how to use Zuora Secure Data Share for Snowflake to access Zuora data

## Set up Secure Data Share

Note: To check your eligibility to use Secure Data Share, see

[Availability](#concept-fytm98rv__Availability) at the end of this topic

.

Access to Zuora Secure Data Share for Snowflake may require purchasing a paid add-on. To get started, please contact your Zuora account representative for more details about the product and to schedule a product demo. In order to maintain confidentiality, Zuora recommends not publicly sharing the pricing information and other terms.

Prerequisites

1.  Zuora Tenant ID:Provide the tenant ID of the Zuora tenant from which you want to share data. For more information on locating your tenant ID, see

    [Managing Your Tenant Profile](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile).

    .
2.  Entity (Optional): If the [Multi-entity](/zuora-platform/user-management/multi-entity/overview-of-multi-entity) feature is enabled in your Zuora tenant, specify the entity from which to share data.


Using the above details, Zuora will enable a UI for you where you can access the Snowflake connector authentication setup tab and complete the setup process yourself.

Required Snowflake account details

To complete the setup, you will need the following information related to your organization's Snowflake account where Zuora tenant data will be shared:

1.  Snowflake Region: Run the following command in your Snowflake account to find your region:

    SELECT CURRENT\_REGION();

2.  Snowflake Edition:

    -   For classic UI: Click the account name in the top right corner and check the edition in account information.

    -   For Snowsight UI: Click the account name in the bottom left corner and hover over the account information to see the edition.


3.  Snowflake Account Locator: This is the account identifier of your organization's Snowflake account. You can obtain it from the URL of your Snowflake account:

    `<account_locator>.snowflakecomputing.com`


## Zuora Snowflake database

Zuora will create a database from your Zuora data and share it with your organization's Snowflake account. The database will be named zuora\_`<tenant_id>`, where `<tenant_id>` is the Zuora tenant ID from which the data is shared. You need to request an individual data share for each tenant. For multi-entity tenants, the same share can include all entities, with each entity represented as a separate database.

Troubleshooting

If you encounter any issues during the setup process, please contact your Zuora representative or file a support ticket for assistance.

![Snowflake_troubleshooting](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1fcd3fb5-734d-4478-9552-2a0d0314f3ed?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFmY2QzZmI1LTczNGQtNDQ3OC05NTUyLTJhMGQwMzE0ZjNlZCIsImV4cCI6MTc2NjY4NzU5NiwianRpIjoiYmJlZDFjNzEwOTQ1NDE4YWJlNjkzYmFiZGVlMDViNTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.K9TEUHbysHBYEb1asTnem2afzzYyrE0XSePp6ZwKjrM)

## Data security

When you set up Secure Data Share, Zuora only shares data from the tenant that you specify. In addition, the shared database is only accessible via the Snowflake account that you specify.

The shared database is read-only.

The visibility of the shared database depends on how your Snowflake administrator has set up access control. For more information, see [Access Control in Snowflake](https://docs.snowflake.com/user-guide/security-access-control-overview) in the Snowflake documentation.

For information on tables and columns available in Snowflake, see [here](/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/use-zuora-secure-data-share-for-snowflake-to-access-zuora-data/tables-and-columns-available-in-snowflake).

## Common clarifications

-   Frequency at which the shared database updated with the latest data: The frequency at which data is synchronized into your Snowflake warehouse is configurable. Typically, it is advisable for you to choose to synchronize data every 15 or 60 minutes, although options are available for lower latency. Additional fees are applicable depending on the latency setting. Contact Zuora to discuss options.

-   It is not possible for Zuora to access data in your organization's Snowflake account.

-   Limits to how much data Zuora will share to your Snowflake account: Zuora will share data up to your committed TAR level.

-   TAR: TAR stands for Total Active Rows and is the total count of rows made available from Zuora to your Snowflake account in your secure data share. Zuora will exclude data from INFORMATION\_SCHEMA and TAR\_USAGE\_HISTORY in the total active row count. Zuora will include soft deleted records as part of the total active row count. Customers are able to view and monitor total active rows by querying the TAR\_USAGE\_HISTORY table provided by Zuora, which is a daily snapshot and accounting of TAR levels. Your purchase of this feature commits you to a specific total committed TAR level for each tenant identified on the applicable Order Form.

-   The impact if the data in your Zuora tenant grows so much that your committed TARs level is exceeded: If your committed TAR level is exceeded, Zuora will pause new data updates into your share from Zuora until your TAR level is increased. Contact your Zuora account representative to discuss options for increasing your allowance if you are approaching your TAR limit.

-   There are no limits associated with querying the shared database in Snowflake. You can query the shared database as if it were stored in your organization's Snowflake account. However, your organization is responsible for the compute costs of querying the shared database.

-   There are costs associated with querying the shared database in Snowflake. All queries that you run inside your Snowflake account against the shared database will consume your organization's Snowflake compute credits. Your organization will directly pay Snowflake for those compute credits. However, Zuora covers all data storage costs associated with the shared database. Your organization will not incur any additional storage fees from Snowflake as a result of the share. In other words, your organization pays for all the Snowflake compute, but nothing extra for Snowflake storage. In addition, access to the shared database will involve additional Zuora license fees.

-   Snowflake does not support ZOQL. You can use Snowflake's SQL syntax to query data. For more information, see [SQL Command Reference](https://docs.snowflake.com/en/sql-reference-commands) in the Snowflake documentation.

-   Business object tables in Snowflake are the same as those in Zuora. However, you must refer to the supported objects in [Snowflake](/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/use-zuora-secure-data-share-for-snowflake-to-access-zuora-data/tables-and-columns-available-in-snowflake) because not all available objects in Data Query are supported in Snowflake.

-   Slowly changing dimensions are not supported at this time. Zuora provides an exact replica of what you can find in Data Query.

-   You will have to wait up to 21 days, from the time you provide Zuora with your target Snowflake account details, before you can use Zuora Secure Data Share for Snowflake.

-   Secure Share for Snowflake is modeled based on the Data Query framework, designed to mirror Data Query’s object definition and adhere to its design principles. This strategic approach ensures that Secure Share maintains full compatibility with Data Query. However, Secure Share only supports a specific subset of Data Query [objects](/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/use-zuora-secure-data-share-for-snowflake-to-access-zuora-data/tables-and-columns-available-in-snowflake).

-   Secure Share handling schema changes from Data Query: To maintain consistency within the system, Secure Share automatically updates its schema to mirror any changes made in Data Query. This process ensures that Secure Share remains aligned with Data Query, providing users with a seamless and accurate data sharing experience.

-   For querying in Secure Share to ensure efficient data retrieval, Zuora recommends that you use queries that specify particular column names instead of utilizing `SELECT *`. This practice helps prevent disruptions that could arise from schema changes, such as the addition of new fields. By selecting specific columns in your queries, you can enhance the accuracy and efficiency of data retrieval, ensuring that your operations remain streamlined and effective.


## Availability

Zuora Secure Data Share for Snowflake allows Zuora, as a Data Provider to Snowflake Data Cloud, to securely share data with data consumers across different regions and cloud platforms. Cross-region data share is supported for Snowflake consumer accounts hosted on provisioned AWS or Azure regions.

The following table lists the provisioned clouds and regions in alphabetical order:
| Cloud | Region |
| --- | --- |
| AWS | AP Northeast 1 (Tokyo) |
| AP Southeast 2 (Sydney) |  |
| CA Central 1 (Central) |  |
| EU Central 1 (Frankfurt) |  |
| EU West 1 (Ireland) |  |
| US East 1 (N. Virginia) |  |
| US East 2 (Ohio) |  |
| US West 1 (N. California) |  |
| US West 2 (Oregon) |  |
| Azure | Australia East (New South Wales) |
| East US 2 (Virginia) |  |
| West Europe (Netherlands) |  |
| West US 2 (Washington) |  |
| GCP | US Central1 (Iowa) |
| US East4 (N. Virginia) |  |
| Europe West2 (London) |  |
| Europe West4 (Netherlands) |  |

## Limitations

EU-US data transfer is not advisable because of legal restrictions. For these types of scenarios, please contact your Zuora account representative to discuss.

## Zuora Revenue specific limitations

-   All objects available in the Zuora secure data share do not support custom display labels; all columns will have the standard label.

-   Revenue secure share data does not include all the custom objects available through the data query utility.

-   Pre-summary and waterfall data objects, available through BI Views, will not be available from revenue secure share.
