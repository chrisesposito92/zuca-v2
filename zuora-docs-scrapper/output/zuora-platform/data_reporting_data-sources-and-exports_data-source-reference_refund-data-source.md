---
title: "Refund data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/refund-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:47:49.148Z"
---

# Refund data source

Data source to export information about refunds

## Overview

Use this data source to export information about refunds. Each row represents one line of refund, whether it is on Invoice Payment or Credit Balance. Data includes information from [Refund](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/refund) and [Account](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/account).

## Objects available in the data source

See [Zuora Business Object Model](/basics/about-zuora/zuora-business-object-model) for more information.

## Base object descriptions

Descriptions for the base Zuora object.

| Zuora Object | Description |
| --- | --- |
| Refund | Represents money that is returned to a customer, or a reversed transaction. |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Object | Description |
| --- | --- |
| Account | The account number. |
| Bill To | The contact of the entity or person who you bill for your product or service. |
| Default Payment Method | The default payment method to be used for making payments. Required to be ACH, credit card or PayPal for customers paying electronically. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Parent Account | Part of the Customer Hierarchy feature. |
| Payment Method Snapshot | A copy of the particular Payment Method used in a transaction. |
| Sold To | The contact of the entity or person who purchased your product or service. |
| Refund Data FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |

## Reporting on Reason Codes

Once you have started using reason codes for payment operations , you can use [data sources](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference) to export information to use to create reports about the reason codes and how they are being used. The Refund data source includes a Reason Code field that you can select for export and to use to filter the export.

The Reason Code field appears in the list of available fields under the Refund object wherever the Refund object is available in a join for other data sources, including the Refund Invoice Payment and Refund Transaction Log data sources.
