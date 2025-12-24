---
title: "Zuora Connector for Workday Financials"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-workday-financials"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:31.893Z"
---

# Zuora Connector for Workday Financials

Offers guidance on how to configure and use the Workday Financials GL for Billing, Payments, and Revenue.

Note:

This feature is in the Early Availability phase. We are actively soliciting feedback from a small set of early adopters. If you want to join this early availability program, submit a request to [Zuora Global Support](https://support.zuora.com/) .

The Workday Connector automates the following transfer operations between Zuora and Workday.

-   Zuora Billing and Payments Journal Entries to Workday FINS General Ledger creates Workday FINS General Ledger journal entries from Zuora Billing and Zuora Payments journal entries.

-   Zuora Revenue Journal Entries to Workday FINS General Ledger creates Workday FINS General Ledger journal entries from journal entries in Zuora Revenue journal entries.


This no-code solution eliminates the need for custom-built integrations between Zuora and Workday.

Workday connector offers the following key features.

-   -   No-code setup
    -   User-configurable field mappings

    -   On-demand and scheduled execution

    -   Summary reports

    -   Grouping criteria selection for revenue accounting entries

    -   User-defined revenue journal accounting batch size

    -   Multi-org support


## Prerequisites

To use the Workday Connector, ensure the following prerequisites are met:

-   Finance is enabled

-   Invoice Item Settlement is enabled in Payments

-   Workday Connector is enabled

-   Advanced Custom Fields are enabled in Platform

-   The following prerequisites are met for Zuora Revenue:

    -   The release version should be 37.020.00.0 or higher
    -   OneID authentication is enabled

    -   Configure the WEB\_SERVICES\_ENABLED profile to TRUE

    -   Configure the ENABLE\_ZR\_CONNECTORS profile to SAP\_GL

    -   Configure the TA\_SUB\_BATCH\_SPLIT\_SIZE profile to 1-10000


## Configuration

The following diagram illustrates the steps in configuring the Workday Connector and Workday Connector (Revenue).

![Configuration of Workday Connector and Workday Connector (Revenue)](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f02cb5fe-5ee3-442c-95f5-e86fd384a0d0?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImYwMmNiNWZlLTVlZTMtNDQyYy05NWY1LWU4NmZkMzg0YTBkMCIsImV4cCI6MTc2NjY1MTI1MCwianRpIjoiOTk5YTI4Nzg5YWJjNDA3NGI1MGFiYjUyZGRhYTAzZDkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.rK3udFhmRCe4nf94DOd0LRGxSiPdkesqRSWll41qRR8)

## Execution flow

The following diagram illustrates the steps in executing the Workday Connector and Workday Connector (Revenue).

![Execution flow of Workday Connector and Workday Connector (Revenue).](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e4337a32-0834-4198-84a9-6d77ce8ceb9a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU0MzM3YTMyLTA4MzQtNDE5OC04NGE5LTZkNzdjZThjZWI5YSIsImV4cCI6MTc2NjY1MTI1MCwianRpIjoiMWI4NWVkMTgxZWI2NGRhOTlhNDA2YTExNWJlZjc0MTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.w9zYxT_owKcbEjgYXEupRQrD-KCFLms8zLv6FMG76UU)
