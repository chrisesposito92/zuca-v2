---
title: "Zuora Revenue GL Connector for Netsuite"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/integration-hub/zuora-revenue-gl-connector-for-netsuite"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:20:20.103Z"
---

# Zuora Revenue GL Connector for Netsuite

The Zuora Revenue GL Connector for NetSuite automates the transfer of revenue journal accounting entries to NetSuite's general ledger, streamlining financial processes and reducing manual errors.

Note:

This feature is in the Early Availability phase. We are actively soliciting feedback from a small set of early adopters. If you want to join this early availability program, submit a request to

[Zuora Global Support](https://support.zuora.com/hc/en-us)

.

The Revenue GL Connector for NetSuite is a pre-built capability that automates the transfer of revenue journal accounting entries and posts the journals into NetSuite's general ledger. This connector will streamline your financial processes, reduce manual errors, and help you go live faster.

## Key Features of Revenue GL Connector for Netsuite

-   Self-serve configuration UI from Integration Hub
-   User Defined field mapping (Supports standard and custom fields)
-   Supports standard and custom journal objects
-   On-demand and scheduled execution
-   Summary logs and email notifications
-   Grouping criteria selection for the Revenue accounting entries
-   User-defined journal accounting batch size
-   Ability to run the GL connector directly from Zuora Revenue's Transfer Accounting UI
-   Supports summary and detailed posting (up to 2.5M Journal Entries)
-   Supports multi-subsidiary/multi-currency journal posting

## Key considerations

When using the NetSuite connector, please ensure the following data format and content requirements are met in Revenue:

-   Journal Header Fields (Subsidiary, Currency, Accounting Period): The exact Name (not the display name or entire hierarchy name) must be maintained in Revenue.

-   Journal Line Item Fields:

    -   GL Account: The GL Account Number (not the Account Name, Display Name, or Hierarchy Name) must be maintained in Revenue.

    -   Department, Class, Location, etc.: The exact Name (not the display name or entire hierarchy name) must be maintained in Revenue.

-   Date Fields (e.g., Journal Transaction Date): The format must be YYYY-MM-DD. This is typically configured in the Revenue GL Interface setup using an expression, such as to\_char(schd\_prd\_end\_date,'YYYY-MM-dd').


The connector will translate the data value for all the fields listed above into the corresponding NetSuite Internal ID before posting the journal entry to NetSuite.

## Limitations

The connector has the following limitations:

-   It does not automatically translate the Entity and Custom List field values. These fields include Customer, Vendor, Partner, or Employee Name on the NetSuite Journal Object into the required NetSuite Internal IDs.

-   You must ensure that the corresponding NetSuite Internal ID is maintained in Revenue for the following fields:

    -   Entity (Name of the Customer, Vendor, Partner, or Employee)

    -   Any Custom List or Look-up type fields on the NetSuite journal object.


It only supports posting Standard and Custom Journal Entry Transactions. Posting to Internal Company Journal Transactions and Statistical Journal Entries is not supported.

## Prerequisites

Ensure the following conditions are met for the Revenue to NetSuite GL connector.

-   Supports Revenue Release version 37.017.05.0 or higher
-   Supports OneID as the authentication type

## Configuring Zuora Revenue and Netsuite

You are required to configure Zuora Revenue and NetSuite. The following flow diagram outlines configuring and executing the Revenue GL connector for NetSuite.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/705c2a44-ee97-4fd9-ab14-5ddcc3464875?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjcwNWMyYTQ0LWVlOTctNGZkOS1hYjE0LTVkZGNjMzQ2NDg3NSIsImV4cCI6MTc3MTcwODgxMywianRpIjoiYjEzYzI5NzgwNjQ3NDQyNWJjYTA4M2UxYzQ0MDUyMDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.NmgzepGo-PKDIGjkOg04m9LpEgcmVFyoBod6UvmQUAI)

## Configurations in Zuora Revenue

Navigate to Setup > Application > Profiles and enable the following profiles in Zuora Revenue to configure the connector.

| Profiles | Description/steps |
| --- | --- |
| WEB_SERVICE_ENABLED | Enables Zuora Revenue to update the status of the Transfer Accounting Batch from READY TO TRANSFER state to TRANSFERRED state.This profile is required for the connector to work to post Revenue accounting journal entries into NetSuite GLComplete the following steps to enable this profile:Type TRANSFER in the Profile Category field.Type WEB_SERVICE_ENABLED in the Profile Name field.Select System in the Profile Level drop-down field.Toggle the System Level Value radio button to Yes.Select Checkbox in the Profile Type drop-down field. |
| ENABLE_ZR_CONNECTORS | Enabling the Integration Hub Marketplace in the Zuora Revenue Navigation Menu UI allows you to run the NetSuite GL connector directly from the Transfer Accounting UI. This profile allows you to group accounting entries based on your selection criteria.Complete the following steps to enable this profile:Type ENABLE_ZR_CONNECTORS in the Profile Name field.Select System in the Profile Level drop-down field.Type NS_GL in the System Level Value field.Select Text in the Profile Type drop-down field. |
| TA_SUB_BATCH_SPLIT_SIZE | Enables Zuora Revenue to split a Journal Accounting Batch into multiple smaller chunks of accounting entries.Complete the following steps to enable this profile:Type TA_SUB_BATCH_SPLIT_SIZE in the Profile Name field.Select System in the Profile Level drop-down field.Type a value between 1 - 10000 in the System Level Value field. If the value is left blank, the connector execution fails.Select Number in the Profile Type drop-down field. |

## Configuring GL interface in Zuora Revenue

With version 37.17.05.0, as an admin, you can select the grouping criteria of the accounting entries by turning on/off the toggle for the fields configured in the GL Interface Setup. The journal accounting entries are grouped into smaller sub-batches based on this grouping criteria.

Complete the following steps to configure GL Interface in Zuora Revenue:

-   Navigate to Setup > Application > Interface Setup
-   Click GL Mapping.
-   Toggle the Enabled button to Yes for Accounted Dr and Accounted Cr Interface Field Name.

    Note:

    -   You must configure these fields in Revenue Interface Setup (both GL and MJE tabs) to post journal entries with amounts in the functional currency and to avoid the failure of journal accounting batch creation after enabling the connectors.
    -   The Connector splits or chunks the Transfer Batch into multiple pieces based on the functional amounts (like Accounted\_CR and Accounted\_DR), not the transactional amounts (Entered\_CR and Entered\_DR). However, the journals can still be posted in the transactional currency to NetSuite through the connector.

-   Toggle the Enabled button to Yes for Accounting Date Interface Field Name.
-   Click Save.

## Run Transfer Accounting in Zuora Revenue

You can run the transfer accounting process to create a batch of journal accounting entries. The connector requires at least one transfer accounting batch to be in READY TO TRANSFER state.

Transfer accounting batches created before version 37.17.05.0 must be regenerated to group the accounting entries and split the accounting journal batch into sub-batches based on the chunk size configured.

Complete the following steps to regenerate a Journal Accounting batch:

1.  Navigate to Accounting > Transfer Accounting.
2.  Click the Regenerate icon.
3.  Select Rebuild and Generate File.
4.  Click Save.

The accounting Journal Batch re-generation will apply to the GroupBy selection configured in the Revenue GL Interface and the Journal Batch will be internally split into multiple chunks based on the value set up in the TA\_SUB\_BATCH\_SPLIT\_SIZE profile.

## Configuring Netsuite

Before connecting your Zuora tenant to your NetSuite ERP, you must have the accurate NetSuite Integration settings configured.

## Setting up an integration role

A new role in NetSuite must be created to integrate NetSuite with Zuora Revenue.

Complete the following steps to setup an integration role:

1.  Navigate to Setup > Users/Roles \> Manage Roles.
2.  Click New.
3.  Type Zuora\_IntegrationRole in the Name field.
4.  Select Accounting Center from the Center Type drop-down field.
5.  Select the following permissions from the applicable fields in the Permissions section:

    | Fields | Permissions | Level |
    | --- | --- | --- |
    | Transactions | Find Transaction | View |
    | Transactions | Journal Approval | Create |
    | Transactions | Make Journal Entry | Full |
    | Reports | SuiteAnalyticsWorkbook | Edit |
    | Lists | Accounts | View |
    | Lists | Currency | View |
    | Lists | Departments | View |
    | Lists | Locations | View |
    | Lists | ProductLines | View |
    | Lists | Subsidiaries | View |
    | Setup | Accounting Book | View |
    | Setup | Login using Access Tokens | Full |
    | Setup | Manage Accounting Periods | View |
    | Setup | REST Web Services | Full |
    | Setup | SOAP Web Services | Full |
    | Setup | SuiteAnalytics Connect | Full |
    | Setup | User Access Tokens | Full |

6.  Click Save.

## Setting up a user for Integration

You must also create a user for NetSuite integration with Zuora Revenue.

Complete the following steps to create a user:

1.  Navigate to Setup > Users/Roles \> Manage Roles.
2.  Click New.
3.  Type Zuora\_IntegrationRole in the Name field.
4.  Type the user's email ID in the Email field.
5.  Select the role you created in the Role field from the Access tab.
6.  Click Save.

## Setting up an Integration

A new Integration must be created in NetSuite to integrate with Zuora Revenue.

Complete the following steps to setup an integration:

1.  Navigate to Setup > Integrations\> Manage Integrations.
2.  Click New.
3.  Type Zuora Revenue in the Name field.
4.  Type Integration with Zuora Revenue in theDescription field.
5.  Type the applicable concurrency in the Concurrency limit field.
6.  Select the applicable value from the State drop-down field.
7.  Enable the Token-based Authentication checkbox in the Authentication Section.
8.  Enable the REST WebServices and SuiteAnalytics Connect checkboxes from the OAuth 2.0 section.
9.  Click Save.
10.  Copy and Save the Client ID/ Consumer Key and Client Secret/Consumer Secret generated after saving the integration.

Note: This concurrency depends on the number and volume of journals posted to NetSuite. Revenue Customers with a high volume of Revenue journals with detailed posting would require SuiteCloud Plus licenses with concurrent Async REST Processors for concurrent journal posting in NetSuite.

## Copy NetSuite SuiteTalk API Services URL

The Revenue GL Connector for NetSuite works based on NetSuite APIs. To perform this, you must copy the API services URL from NetSuite and copy it to the Revenue Connector Authentication UI.

1.  Navigate to Setup > Company > Company Information.
2.  Copy and save the SuiteTalk API Services URL from the Company URLs section.

## Configuring Revenue GL Connector for Netsuite

You can find the Revenue GL connector for NetSuite published in Zuora Integration Hub -> Marketplace and launch the connector UI.

If you're a customer with Zuora Billing - Zuora Revenue OTR integration, then you can access the Integration Hub -> Marketplace either from Billing Tenant or Revenue Tenant UI.

If you're a Zuora Revenue customer, then you can access the Integration Hub -> Marketplace within Revenue UI.

## Authenticating your Zuora Revenue and Netsuite environments

1.  Navigate to Integration Hub -> Marketplace within Zuora Revenue's UI.

2.  Click NetSuite GL Connector.

3.  Click Authentication.

4.  Complete the following fields in the NetSuite Authentication section.

    1.  Consumer Key & Consumer Secret
    2.  Access Token Details
    3.  NetSuite Tenant Account ID
    4.  NetSuite Tenant API Services URL.
5.  Complete the following fields in the Revenue Authentication section.
    1.  User Name
    2.  Password
    3.  Role Name
    4.  Client Name
    5.  Revenue Tenant Host URL
6.  Toggle the Enable Integration button to activate the connector.


Note: You can click Test Connection to check your authentication.

## Configuring Email notifications

The Revenue GL connector can send email notifications after the connector execution is completed.

Complete the following steps to configure emails:

1.  Navigate to Integration Hub -> Marketplace within Zuora Revenue's UI.
2.  Select Zuora Revenue from the Product Category field.
3.  Click NetSuite GL.
4.  Click Authentication.
5.  Click the Setting icon.
6.  Enable the Email settings toggle field.
7.  (Optional) Select Warnings and Success.
8.  Click Add Email to add recipients.
9.  Click Save.

## Connector Field Mapping

After successful authentication, you can define the field mapping between the source and the target fields based on your needs. The Zuora Source fields provide a list of fields from the Zuora Revenue GL Interface object, and NetSuite Journal Target Fields provide a list of fields from the NetSuite Journal Object.

Complete the following steps to map the fields:

1.  Navigate to Integration Hub -> Marketplace within Zuora Revenue's UI.
2.  Select Zuora Revenue from the Product Category field.
3.  Click NetSuite GL.
4.  Click Field Mapping.
5.  Click the + icon.
6.  Choose the applicable Revenue source field and map it to the corresponding target field of the NetSuite Journal.
    Note: You can map both the standard and custom fields from Source to target Netsuite Journal fields.

7.  Click the Refresh icon to dynamically refresh the list of fields in source and target menus upon any field changes in Zuora Revenue GL Interface object or NetSuite Journal object.


## Executing the Netsuite GL Connector

After defining the field mapping, you can set up the connector for execution. Running the connection from the connector UI will pick and process all the Journal accounting batches in the READY TO BE TRANSFERRED state. The connector will post the revenue journals concurrently. You also run the GL connector directly from the Revenue's Transfer accounting UI against each Journal accounting batch.

Complete the following steps to execute the connector:

1.  Navigate to Integration Hub -> Marketplace within Zuora Revenue's UI.
2.  Select Zuora Revenue from the Product Category field.
3.  Click NetSuite GL.
4.  Click Execution.
5.  Select the applicable mode from the Execution Mode drop-down field.
    1.  On-Demand : Allows you to run the connector immediately.
    2.  Scheduled: Allows you to schedule the connector execution.
6.  Click Run.
7.  (Optional) Click Execution Run to review the progress of each task.

    Note:

    -   If one or more posting of journals fails during the execution, the connector will cancel the other posted journals without resulting in partial posting problems. You are required to submit a new execution in such scenarios.


## Run GL Connector from Transfer Accounting UI

You can execute the GL connector directly from the Transfer accounting UI for each Accounting Journal Batch. You must enable the Enable\_ZR\_Connectors profile and use NS\_GL in the System Level Value field to do this.

Only batches in the READY TO TRANSFER state will have the Run GL Connector button. The Accounting Journal Batch has been introduced with a new status called Posting in Progress. This intermediate status applies only when a GL connector is enabled and triggered directly from the Transferring Accounting UI.

If there are accounting batches in Revenue that were previously posted into the NetSuite GL but are still in the READY TO TRANSFER state, then the status of all those accounting batches must be updated to TRANSFERRED. To update the states of the accounting batches, you can use the Revenue API or submit a request to [Zuora Global Support](https://support.zuora.com/hc/en-us)/your implementation team.

If you have Accounting Batches created before enabling the Zuora Revenue GL connector to NetSuite, you must regenerate each of these Batches in the following scenarios.

-   When there are configuration changes made in GL Interface setup such that these changes will be applied for the existing Batch.
-   When there are any accounting data changes on the Revenue contracts

In such scenarios, you must regenerate and build the Revenue Accounting Batches. If there are no data or setup changes, you can do the vanilla regeneration of the Accounting Batches. To Regenerate the Accounting Batch, Click the Regenerate button on the Accounting Batch and select Generate File or Rebuild and Generate File.

## Validate Journals in NetSuite

After a connector is executed, you will receive an email notification with a file containing details of the connector execution status, the field mappings applied for the execution, and details of the Journals posted into NetSuite GL.
