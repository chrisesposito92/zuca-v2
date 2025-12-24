---
title: "Automate transfer of Revenue journal entries to Workday's GL"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-workday-financials/automate-transfer-of-revenue-journal-entries-to-workdays-gl"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:59.919Z"
---

# Automate transfer of Revenue journal entries to Workday's GL

Explains how the Revenue GL Connector for Workday Financials automates the transfer and posting of revenue journal entries into Workday’s general ledger, enhancing financial processes and reducing errors.

This feature is in the Early Adopter phase. We are actively soliciting feedback from a small set of early adopters. If you want to join this early adopter program, submit a request to [Zuora Global Support](https://support.zuora.com/hc/en-us).

The Revenue GL Connector for Workday Financials is a pre-built capability that automates the transfer of revenue journal accounting entries and posts the journals into Workday’s general ledger. This connector will streamline your financial processes, reduce manual errors, and help you go live faster.

-   Self-serve configuration UI from Integration Hub

-   User Defined field mapping

-   On-demand and scheduled execution

-   Summary logs and email notifications

-   Grouping criteria selection for the Revenue accounting entries

-   User-defined journal accounting batch size

-   Ability to run the GL connector directly from Revenue Transfer Accounting UI

-   Supports both summary and detailed posting (up to 2.5M Journal Entries)

-   Supports multi-company/multi-currency journal posting


Ensure the following conditions are met for the Revenue to Workday GL connector.

-   Supports Revenue Release version 37.017.05.0 or higher

-   Supports OneID as the authentication type


You are required to configure Zuora Revenue and Workday Financials. The following flow diagram outlines the steps involved in configuring and executing the Revenue GL connector for Workday Financials.

![WDAY-GL-Configurationflow.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/13322ace-13e0-4068-a6ad-1877936e816c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjEzMzIyYWNlLTEzZTAtNDA2OC1hNmFkLTE4Nzc5MzZlODE2YyIsImV4cCI6MTc2NjY1MTI3OCwianRpIjoiNDY1NDQwZmQ0ZjY3NDYzNGI1ZTAyZjBhMmJjYWVmZmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.-uFO_STwH38EFUJGozRS8wSE67PXGyrADO2ihNEmCJs)

Navigate to Setup > Application > Profiles and enable the following profiles in Zuora Revenue to configure the connector.

| Profiles | Description/steps |
| --- | --- |
| WEB_SERVICE_ENABLED | Enables Zuora Revenue to update the status of the Transfer Accounting Batch from READY TO TRANSFER state to TRANSFERRED state.This profile is required for the connector to work to post Revenue accounting journal entries into Workday GL.Complete the following mandatory fields to enable this profile:Type TRANSFER in the Profile Category field.Type WEB_SERVICE_ENABLED in the Profile Name field.Select System in the Profile Level drop-down field.Toggle the System Level Value radio button to Yes .Select Checkbox in the Profile Type drop-down field. |
| ENABLE_ZR_CONNECTORS | Enabling the Integration Hub Marketplace in the Zuora Revenue Navigation Menu UI allows you to run the Workday GL connector directly from the Transfer Accounting UI. This profile also allows you to group accounting entries based on your selection criteria.Complete the following mandatory fields to enable this profile:Type ENABLE_ZR_CONNECTORS in the Profile Name field.Select System in the Profile Level drop-down field.Type WDAY_GL in the System Level Value field.Select Text in the Profile Type drop-down field. |
| TA_SUB_BATCH_SPLIT_SIZE | Enables Zuora Revenue to split a Journal Accounting Batch into multiple smaller chunks of accounting entries. This is a mandatory profile to be set up.Complete the following mandatory fields to enable this profile:Type TA_SUB_BATCH_SPLIT_SIZE in the Profile Name field.Select System in the Profile Level drop-down field.Type a value between 1 - 10000 in the System Level Value field.If the value is left blank, the connector execution fails.Select Number in the Profile Type drop-down field. |

With version 37.17.05.0, as an admin, you can select the grouping criteria of the accounting entries by turning on/off the toggle for the fields configured in the GL Interface Setup. The journal accounting entries are grouped into smaller sub-batches based on this grouping criteria.

Complete the following steps to configure GL Interface in Zuora Revenue:

You must configure these fields to post journal entries with amounts in functional currency and to avoid failure of journal accounting batch creation after enabling the connectors.

You can run the transfer accounting process to create a batch of journal accounting entries. The connector requires at least one transfer accounting batch to be in READY TO TRANSFER state.

Transfer accounting batches that are created before version 37.17.05.0 must be regenerated to group the accounting entries and split the accounting journal batch into sub-batches based on the chunk size configured.

Complete the following steps to regenerate a Journal Accounting batch:

The accounting Journal Batch re-generation will apply to the GroupBy selection configured in the Revenue GL Interface and the Journal Batch will be internally split into multiple chunks based on the value set up in the TA\_SUB\_BATCH\_SPLIT\_SIZE profile.

Before you can connect your Zuora tenant to your Workday ERP, you must have the accurate Workday Connection settings configured.

Complete the following steps to retrieve your host and tenant name:

An Integration System User (ISU) must be created and maintained in the Workday environment for the connector to work and authenticate.

Complete the following steps to create an ISU) for Zuora:

-   User Name

-   New Password

-   Password Rules

-   Select the Do Not Allow UI Sessions radio button.


After creating an ISU, you need to assign the user to a Workday Security Group similar to User Roles in Revenue.

Complete the following steps to Workday Security Group and assign your ISU:

You must assign domain security policies after creating Workday Security Group. Complete the following steps to assign domain security permissions:

The permissions listed below cover all of the standard Zuora fields. If a customer requests an extended field from a Zuora-supported Workday data object through data mapping, appropriate permissions must be updated to enable Zuora to access the field.

| Domain Security Policy Permissions |  |  |  |
| --- | --- | --- | --- |
| Operation | Domain Security Policy | Domain Security Policies Inheriting Permission | Functional Areas |
| Put Only | Process: Journals (NEW) | Process: Journals - Cancel | Financial Accounting |
| Put Only | Process: Journals - Core |  | Financial Accounting |
| Get Only | Integration Build |  | Integration |
| Get Only | Set Up: Maintain Custom Worktags |  | Common Financial Management Worktags |

| Business Process Security Policy Permissions |  |  |
| --- | --- | --- |
| Business Process | Initiating Action | Functional Areas |
| Accounting Journal Event | Import Accounting Journal (WS Background Process) | Financial Accounting |

You can find the Revenue GL connector for Workday Financials published in Zuora Integration Hub -> Marketplace and launch the connector UI.

If you’re a customer with Zuora Billing - Zuora Revenue OTR integration, then you can access the Integration Hub -> Marketplace either from Billing Tenant or Revenue Tenant UI.

If you’re a Zuora Revenue customer, then you can access the Integration Hub -> Marketplace within Revenue UI.

Complete the following steps to authenticate your Zuora Revenue and Workday environments:

-   Username

-   Password

-   Workday Tenant URL


-   User Name

-   Password

-   Role Name

-   Client Name

-   Revenue Tenant Host URL


Note : You can click Test Connection to check your authentication.

The Revenue GL connector can send email notifications after the connector execution is completed.

Complete the following steps to configure emails:

After successful authentication, you can define the field mapping between the source and the target fields based on your needs. The Zuora Source fields provide a list of fields from the Zuora Revenue GL Interface object, and Workday Journal Target Fields provide a list of fields from the Workday Standard Journal Object.

Complete the following steps to map the fields:

You can map both the standard and custom fields from Source to target Workday Journal fields, for example, WorkTags, Cost Centers, and Custom WorkTags.

By default, the connector posts and submits the journals in Workday and will not create journals in Draft mode.

After defining the field mapping, you can set up the connector for execution. Running the connection from the connector UI will pick and process all the Journal accounting batches in the READY TO BE TRANSFERRED state. The connector will post the revenue journals concurrently. You also run the GL connector directly from the Revenue’s Transfer accounting UI against each Journal accounting batch.

Complete the following steps to execute the connector:

-   On-Demand - Allows you to run the connector immediately.

-   Scheduled \- Allows you to schedule the connector execution.


If one or more posting of journals fails during the execution, the connector will cancel the other posted journals without resulting in partial posting problems. You are required to submit a new execution in such scenarios.

You can execute the GL connector directly from the Transfer accounting UI for each Accounting Journal Batch. You must enable the Enable\_ZR\_Connectors profile and use WDAY\_GL in the System Level Value field to do this.

Only batches in the READY TO TRANSFER state will have the Run GL Connector button . The Accounting Journal Batch has been introduced with a new status called Posting in Progress. This intermediate status applies only when a GL connector is enabled and triggered directly from the Transferring Accounting UI.

Complete the following steps to Run GL Connector from Transfer Accounting UI:

1.  Navigate to Setup > Application > Interface Setup
2.  Click GL Mapping .
3.  Toggle the Enabled button to Yes for Accounted Dr and Accounted Cr Interface Field Name.
4.  Toggle the Enabled button to Yes for Accounting Date Interface Field Name.
5.  Click Save .
6.  Navigate to Accounting > Transfer Accounting .
7.  Click the Regenerate icon.
8.  Select Rebuild and Generate File.
9.  Click Save .
10.  Login and access your Workdays’ console.
11.  Type Public Web Services in the search bar and press Enter .
12.  Click on the applicable filters in the Web Service column to access Financial Management .
13.  Click the icon next to the Financial Management .
14.  Navigate to Web Service > View WSDL .
15.  Search for the address location in the WSDL file to find the URL with the host and tenant names.
16.  Login and access your Workdays’ console with your administrator credentials.
17.  Type Create Integration System User in the search bar and press Enter .
18.  Complete the following fields with applicable values:
19.  Click OK .
20.  Login and access your Workdays’ console with your administrator credentials.
21.  Type Create Security Group in the search bar and press Enter .
22.  Select Integration System Security Group (Unconstrained) from the Type of Tenanted Security Group drop-down field.
23.  Type ISSG\_Zuora in the Name field.
24.  Click OK to access the Edit Integration System Security Group (Unconstrained) section .
25.  Type ISU\_Zuora in the Integration System Users field.
26.  Click OK .
27.  Login and access your Workdays console with your administrator credentials.
28.  Type Integration System Security Group in the search bar and press Enter.
29.  Navigate to ISSG > Security Group > Maintain Domain Permissions for Security Group .
30.  Click on the Related Actions button.
31.  Determine the permissions required for the Workday setup.
32.  Navigate to Integration Hub -> Marketplace within Zuora Revenue’s UI.
33.  Click Zuora Revenue Connectors for Workday Financials (GL) .
34.  Click Authentication .
35.  Complete the following fields in the Workday Authentication section.
36.  Complete the following fields in the Revenue Authentication section.
37.  Toggle the Enable Integration button to activate the connector.
38.  Navigate to Integration Hub -> Marketplace within Zuora Revenue’s UI.
39.  Click Zuora Revenue Connectors for Workday Financials (GL) .
40.  Click Authentication .
41.  Click the Setting icon.
42.  Enable the Email settings toggle field.
43.  (Optional) Select Warnings and Success.
44.  Click Add Email to add recipients.
45.  Click Save .
46.  Navigate to Integration Hub -> Marketplace within Zuora Revenue’s UI.
47.  Click Zuora Revenue Connectors for Workday Financials (GL) .
48.  Click Field Mapping .
49.  Click the + icon.
50.  Choose the applicable Revenue source field and map it to the corresponding target field of the Workday Journal.
51.  Click the Refresh icon to dynamically refresh the list of fields in source and target menus upon any fields changes in Zuora Revenue GL Interface object or Workday Journal Object.
52.  Map the Auto\_Complete flag accordingly if the business process validations configured in the Workday system for journal approvals are to be processed or skipped.
53.  Navigate to Integration Hub -> Marketplace within Zuora Revenue’s UI.
54.  Click Zuora Revenue Connectors for Workday Financials (GL) .
55.  Click Execution .
56.  Select the applicable mode from the Execution Mode drop-down field.
57.  Click Run.
58.  Navigate to Accounting > Transfer Accounting .
59.  Click the Run GL Connector button.
60.  Click Confirm .

After a connector is executed, you will receive an email notification with a file containing details of the connector execution status, the field mappings applied for the execution, and details of the Journals posted into Workday GL.
