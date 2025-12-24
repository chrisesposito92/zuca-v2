---
title: "Revenue connector for Netsuite ERP"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/revenue-connector-for-netsuite-erp"
product: "zuora-platform"
scraped_at: "2025-12-24T08:29:06.154Z"
---

# Revenue connector for Netsuite ERP

Get an overview of the Zuora Revenue inbound connector for NetSuite ERP and how to set it up.

Note:

This feature is in the Early Availability phase. We are actively soliciting feedback from a small set of early adopters. To join this early availability program, submit a request at [Zuora Global Support](https://support.zuora.com/).

The Zuora Revenue connector for NetSuite ERP is a pre-built capability that automates the ingestion of transactional data from NetSuite, such as Orders, Invoices, and Credit Memos into Zuora Revenue.

This connector streamlines your financial processes, reduces manual errors, and helps you go live faster.

This topic describes the prerequisites and the setup required in Revenue and NetSuite applications and explains how to configure and execute the Revenue Inbound Connector for NetSuite.

## Benefits

-   Self-serve configuration UI from Zuora Integration Hub

-   Supports both standard and custom transaction objects from NetSuite

-   Field mapping for both standard and custom fields

-   On-demand and scheduled execution

-   Summary logs and email notifications

-   Supports Netsuite Transaction Dataset volume up to 1M per one dataset execution

-   Supports incremental data ingestion


## Prerequisites

-   Revenue release version 37.021.00.0 or higher

-   Revenue APIs are enabled and at least 1 API user in Revenue

-   OneID authentication type

-   NetSuite Analytics feature is enabled and Datasets are created


## Overview of configuration and execution flow

To set up the Revenue inbound connector for NetSuite, you follow a series of steps in NetSuite, followed by Zuora Revenue, and then Zuora Integration Hub, as shown in the following diagram.

![Configuration and execution flow](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5b789b97-280b-4bd9-a0df-ac441ff77010?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjViNzg5Yjk3LTI4MGItNGJkOS1hMGRmLWFjNDQxZmY3NzAxMCIsImV4cCI6MTc2NjY1MTM0NCwianRpIjoiMDZlZGVmM2ZjMTMzNGFkMzhjZTVmNjIzZjM1MmFiM2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.FKbTr1T7jjL15LFsfv6qw29xVq1mwAsMhOR8z1olOd8)
