---
title: "Billing connector for HubSpot FAQ"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-hubspot/billing-connector-for-hubspot-faq"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:41.565Z"
---

# Billing connector for HubSpot FAQ

Find answers to frequently-asked questions about Billing connector for HubSpot.

We continue to update this list. If you have a question that is not currently listed, consider posting your question in the Zuora Community or contact Zuora Global Support.

## Can a custom property be mapped from Hubspot's product to a custom field on Zuora's object?

No. It is not possible to map a custom field from Hubspot's product to a custom field on Zuora's object.

## Can the connector modify the monthly or quarterly billing period when setting the HubSpot product price?

You can change the billing frequency from monthly to quarterly when updating the deal. However, you cannot change the charge model from one-time to recurring or vice versa.

## When does the connector initiate product creation in Zuora?

The connector creates a new product in Zuora when it identifies a different SKU.

## Does the connector support updating products in Zuora?

Currently, the connector does not support product updates in Zuora.

## Can the connector handle multiple currencies?

Multi-currency is not supported by the connector by default. Use custom field mapping to connect the currency field in Hubspot to the standard currency field in Zuora for similar functionality.

## How does the connector handle discounts?

The connector doesn't synchronize the discount amount in Zuora. Instead, it syncs the net price for the deal line item, including any discounts.

## What is the maximum number of records that can be synchronized in a single sync operation?

During the synchronization of an order or account, up to 50 related objects can be synced together at maximum.

## How does Hubspot handle deleting deals?

Manual intervention is required to delete orders in Zuora.

## Can we create deals in HubSpot using the complex charge models that Zuora supports?

Set up a product in Zuora with a flat structure of one product, one rate plan, and one rate plan charge. Ensure that the corresponding product in Hubspot has the same SKU. From there, you can use the product to create a deal in Hubspot.
