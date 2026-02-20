---
title: "Use Zuora Secure Data Share for Snowflake to access Zuora data"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/use-zuora-secure-data-share-for-snowflake-to-access-zuora-data"
product: "zuora-platform"
scraped_at: "2026-02-20T21:13:57.674Z"
---

# Use Zuora Secure Data Share for Snowflake to access Zuora data

Learn how to use Zuora Secure Data Share for Snowflake to access Zuora data

## Set up Secure Data Share (Self-Serve)

Note:

To check your eligibility for Secure Data Share, see [Availability](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/use-zuora-secure-data-share-for-snowflake-to-access-zuora-data#concept-fytm98rv__Availability) at the end of this topic. Access to Zuora Secure Data Share for Snowflake may require purchasing a paid add-on. Contact your Zuora Account Executive for product details or to schedule a demo. To maintain confidentiality, Zuora recommends not publicly sharing pricing or commercial terms.

Zuora Secure Data Share for Snowflake is now available through a self-serve UI, allowing you to set up the secure share and manage objects directly from the UI without raising a support ticket. This significantly reduces provisioning time and ongoing support dependency.

Note:

The self-serve Secure Data Share setup described in this section applies only to Zuora Billing data.

For Zuora Revenue, the setup is not fully self-serve. You must coordinate with the Zuora team to provision the connector. In such cases, provide the following details to Zuora to initiate the provisioning process:

-   Zuora tenant ID

-   Snowflake account locator

-   Snowflake region

-   Snowflake edition


Complete the following procedures:

1.  [Access the Secure Data Share UI](/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/use-zuora-secure-data-share-for-snowflake-to-access-zuora-data/access-the-secure-data-share-ui)

2.  [Configure and install Secure Data Share](/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/use-zuora-secure-data-share-for-snowflake-to-access-zuora-data/configure-and-install-secure-data-share)


## Zuora Snowflake database

Zuora will create a database from your Zuora data and share it with your organization’s Snowflake account. The database will be named ZUORA\_<TenantID>, where <TenantID> is the Zuora tenant ID from which the data is shared.

You must request a separate Secure Data Share for each Zuora tenant. For multi-entity tenants, a single share can include all entities, with each entity represented as a separate database.

Next, [accept the Secure Data Share in Snowflake](/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/use-zuora-secure-data-share-for-snowflake-to-access-zuora-data/accept-the-secure-data-share-in-snowflake).

## Troubleshooting

If you encounter any issues during the setup or onboarding process, contact your Zuora representative or file a support ticket for assistance.

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

EU-US data transfer is not advisable because of legal restrictions. For these types of scenarios, contact your Zuora account representative to discuss.

## Zuora Revenue specific limitations

-   All objects available in the Zuora secure data share do not support custom display labels; all columns will have the standard label.

-   Revenue secure share data does not include all the custom objects available through the data query utility.

-   Pre-summary and waterfall data objects, available through BI Views, will not be available from revenue secure share..
