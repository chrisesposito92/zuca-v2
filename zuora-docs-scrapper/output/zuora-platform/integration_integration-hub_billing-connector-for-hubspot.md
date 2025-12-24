---
title: "Billing connector for HubSpot"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-hubspot"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:06.221Z"
---

# Billing connector for HubSpot

Get an overview and understand the benefits of the HubSpot connector to integrate HubSpot CRM with your Zuora instance.

Note:

This feature is in the Early Availability phase. We are actively soliciting feedback from a small set of early adopters before releasing it to all customers. To join this early availability program, submit a request at [Zuora Global Support](https://support.zuora.com/).

The HubSpot CRM to Zuora Integration Connector is designed to facilitate seamless data synchronization between HubSpot CRM and Zuora to streamline Sales-to-Billing-to-Accounting processes. This integration ensures that companies and deals captured in HubSpot CRM are accurately synced with Zuora for billing and revenue recognition, accelerating revenue cycles while managing data complexities.

The bi-directional connector establishes a link between your HubSpot and subscription billing systems. This integration streamlines data synchronization by automating the connection of HubSpot's company details, contacts, deals, and product catalog with corresponding entities in Zuora.

## Benefits

-   Simplified setup

    Follow a short 3-4 step process to configure the connector with no coding required.

-   Troubleshooting capabilities

    Access System Health for comprehensive troubleshooting, and leverage advanced logging.

-   Pre-configured integration

    Access pre-set connector flows to align and map data between systems, and eliminate manual data mapping for sales activities.

-   Compliance and auditing

    Enhance regulatory adherence for finance teams in Zuora with robust backend compliance and auditing functions.

-   Custom field integration

    Streamline integration of HubSpot's custom fields, mapping them easily to corresponding fields in Zuora.

-   Real-time data synchronization

    Implement a reverse synchronization mechanism through CRM Cards for instantaneous exchange of subscription details, orders, invoices, and payments between Zuora and HubSpot within the CRM platform, ensuring enhanced accessibility of information.


## HubSpot to Zuora synchronization

The synchronized data objects between HubSpot and Zuora include:

-   Company

    HubSpot accounts can be mirrored and synchronized with Zuora using the customer account entity. Additionally, custom fields linked to the HubSpot account can be transferred and seamlessly integrated into the Zuora account structure.

-   Contact

    HubSpot-generated contacts can be synced with Zuora as contacts in the billing account structure.HubSpot contact entry is optional for synchronization.

-   Deal

    HubSpot deals are contracts between merchants and customers. Zuora converts these deals, possibly with multiple products, into subscriptions. Zuora's product catalog integrates and manages every product associated with the deals in HubSpot, facilitating streamlined billing, payment, and service management.

-   Product catalog

    The Zuora Connector for HubSpot allows you to administer your product catalog within HubSpot. This catalog data can seamlessly sync with Zuora, translating the product information and pricing structures into product, rate plans, charges, and charge tiers. This interconnected information is directly associated with deals and converted into subscriptions within Zuora, streamlining billing, payments, and service provisions in the platform.


## Zuora to HubSpot synchronization

This sync is designed to support the backlinking of objects from Zuora to HubSpot on the CRM cards in HubSpot after the data has been synced from HubSpot to Zuora. This ensures easy data retrieval and provides a summary of Zuora's objects from HubSpot. The CRM cards available in HubSpot's offerings for Company and Deals include:

-   Zuora Account

-   Zuora Subscriptions

-   Zuora Orders

-   Zuora Invoices

-   Zuora Credit Memo

-   Zuora Debit Memo


Each CRM card includes crucial business data and a link to redirect to the Zuora object.

## Architecture overview of Zuora HubSpot connector

The integration framework provides a seamless harmonization between the Zuora and HubSpot systems, allowing for configurable field mapping and the ability to sync data in both directions for consistent updates.

![Zuora HubSpot architecture diagram](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/56a1334f-6fc4-4a26-a0f4-39ca84f0dcb2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU2YTEzMzRmLTZmYzQtNGEyNi1hMGY0LTM5Y2E4NGYwZGNiMiIsImV4cCI6MTc2NjY1MTE2NCwianRpIjoiYWEwYmE0MzkwZGU4NGJiY2E2NWUwMjI3ODk0MDYzYjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.19QRJOLCjvJnQL641RVnNbQIrLMa6Zvo4AbhgNjUbCM)
