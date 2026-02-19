---
title: "Overview of Direct Avalara integration"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/direct-avalara-integration/overview-of-direct-avalara-integration"
product: "zuora-billing"
scraped_at: "2026-02-19T03:10:41.644Z"
---

# Overview of Direct Avalara integration

The direct Avalara integration with Zuora utilizes the AvaTax REST v2 API to streamline tax calculations across multiple jurisdictions, offering enhanced performance and flexibility.

The REST API-based integration with Avalara is a modern, out-of-the-box integration designed for scalability and prepares your tax configuration for future enhancements. It supports Avalara’s AvaTax REST v2 API. See Avalara website for more details.

Note:

Zuora is upgrading all Avalara tax integrations from SOAP to REST API-based connections to provide improved performance, flexibility, and long-term support. All customers have already been upgraded in their Sandbox environments, with Production upgrades scheduled for Q2 and Q3 of 2025.

Zuora's direct Avalara integration makes it easy to calculate and report tax when you have nexus in multiple tax jurisdictions. To access the Direct Avalara Integration feature, see Enable billing features by yourself .

Avalara is a third-party tax engine service that is useful when you have nexus in multiple locations. It holds up-to-the-minute tax rate data for thousands of sales tax jurisdictions worldwide. Avalara automatically calculates the correct tax rates for your billing documents (invoices , credit and debit memos ) by taking into account a variety of tax conditions, including your nexus, the customer's location, tax types, and tax rules.

It is particularly useful for customers who:

-   Operate in many tax jurisdictions, either across the U.S. or globally.
-   Deal with many tax types and complicated tax rules.
-   Update thousands of different tax rates every month.
-   Submit tax reports for multiple tax jurisdictions with different deadlines and procedures.

The tax engine handles the update process for you, removing the need for you to update new tax rates manually. You may already use Avalara in your business, and by leveraging the integration with Zuora you avoid having to maintain tax rates in multiple locations.

Avalara also helps to manage address changes. For example, if an unincorporated area annexes to a city or county, Avalara is responsible for incorporating these updates. The service can also provide tax advice and value added services such as generating and submitting tax reports.

The Direct Avalara Integration supports AvaTax REST v2. See Avalara website for more details.

## Secured communication between Zuora and Avalara

The Avalara AvaTax integration is a server-to-server communication between Zuora and Avalara servers. The connection is through the Transport Layer Security (TLS) protocol. All customer credentials are protected and follow industry best practices.

## Avalara integration features

Zuora is tightly integrated with the Avalara tax engine, and can calculate real-time tax rates when performing billing operations in bill runs and API calls. By connecting your Avalara account to Zuora you can:

-   Calculate tax rates in bill runs.
-   Calculate real-time tax rates in all SOAP API calls that generate an invoice; subscribe(), amend() and generate().
-   Calculate real-time tax rates in all REST API calls that generate a billing document.
-   Preview real-time taxes in subscribe() and amend() SOAP API calls and various REST API calls.
-   Calculate tax values for invoice item adjustments (IIA) through the Zuora UI and SOAP API. This is only for the invoice items with the Charge or Discount processing type. See Avalara Taxes in Invoice Item Adjustments for more information.

If required, it is possible to configure Avalara to calculate taxes for some of your rate plan charges, and use Zuora Tax or another third party tax engine for other rate plan charges. A single billing document can contain items taxed by two or more tax engines.

To start using Avalara to calculate your tax rates, see Configure Integration with Avalara .

When integrated with the Avalara real-time tax engine, your company code will be used as the tax code for calculating tax.

Tenants with Avalara enabled can pass a Value Added Tax ID to Avalara. You can use Avalara to calculate taxes according to European Union tax rules.

## Tax request mapping between Zuora and Avalara

See Tax request mapping between Zuora and Avalara for details on how data fields in Zuora are used in Avalara for tax calculation when posting billing documents.

## Integration ID mapping between Zuora and Avalara

In Zuora's Avalara integration, the integration ID mapping is about which Zuora field is used as `DocCode` in the Avalara system. By default, `InvoiceNumber`, `CreditMemo` `Number`, or `DebitMemo` `Number` is used as `DocCode` in the Avalara system. For example, `INV00000004`.

If the Sequential Billing Document Number feature is enabled, the integration ID mapping between Zuora and Avalara becomes different.

Note:

To enable the Sequential Billing Document Number feature, set the Enable Sequential Billing Document Number? billing rule to Yes .

After the Sequential Billing Document Number feature is enabled, the billing document type and ID is used as `DocCode` in the Avalara system. For example, `INV-4a3cd46a24444fc4ae17ec23b4d791a2`, `CM-34c6338673594f4a8f7c7a9d8d08c558`, or `DM-402890555a87d7f5015a892f2ba10057`. This behavior change aims to avoid that the billing document number is lost due to tax calculation errors like incomplete addresses.

With the Sequential Billing Document Number feature, when doing the reconciliation between Zuora and Avalara, you have to use `InvoiceID` , `CreditMemoID`, or `DebitMemoID` to map `Document.DocCode` on the Avalara side. You can either add the `INV-`, `CM-`, or `DM-` prefix to the corresponding billing document ID, or remove `INV-` from `Document.DocCode`.

## Special Country Code Mappings

Kosovo is currently mapped to Serbia (SR) , as direct support for Kosovo is not yet available. Additionally, the integration maps the following countries and territories to the United States , treating them as U.S. territories:

-   American Samoa
-   Guam
-   Marshall Islands
-   Micronesia
-   Northern Mariana Islands
-   Palau
-   Puerto Rico
-   U.S. Minor Outlying Islands
-   U.S. Virgin Islands

## Postal Code Truncation for AvaTax REST v2 Compatibility

To maintain compatibility with Avalara’s AvaTax REST v2 API , Zuora now automatically truncates postal codes to a maximum of 11 characters before sending them to Avalara. This applies to all countries.

For example:

-   `2784-514 Oeiras (Portugal)` → `2784-514 Oe`
-   `33301 - 3054 (United States)` → `33301 - 305`

The `PostalCode` field in Zuora is mapped to the `PostalCode` field in Avalara’s tax request payload, under both `shipTo` and `shipFrom` . For full details on the tax request mapping, see Tax Request Mapping Between Zuora and Avalara .

## Why this change?

Avalara’s REST v2 API enforces an 11-character limit on postal codes. If a postal code exceeds this limit, Avalara returns a `400 Bad Request` with a validation error.

Previously, Avalara's SOAP API allowed longer values and truncated them automatically. To ensure a seamless transition to REST v2 and avoid tax calculation errors, Zuora now handles this truncation before submitting tax requests.

## What remains unchanged?

Full postal codes are still stored in Zuora.

Truncation happens only when sending data to Avalara, so your original entries remain intact, for example, on customer accounts or contacts.

## Recommendations

Since only U.S. and Canadian postal codes are used in tax calculations, we recommend:

-   Adding a validation rule in your data entry or update process to limit postal codes to 11 characters for U.S. and Canadian addresses prior to triggering tax calculations.

## Avalara Connector

Note:

The Avalara Connector is a legacy solution that is not part of the current tax connector apps . Some existing tenants use the Avalara Connector.

The Avalara Connector calculates tax rates in batches during bill runs and invoice item adjustments. This method has a number of limitations.

If you are currently using the Avalara Connector to calculate tax rates in batches, and would like to migrate to the real-time direct Avalara integration, see Migrate from Avalara Connector to Avalara Integration .

## Avalara taxes in API calls and bill runs

Tax rates for billing documents created through calls to the Zuora SOAP and REST APIs can be calculated in real-time using the Avalara API. Tax rates for billing documents created through bill runs are calculated asynchronously in batches.

For more information on calculating taxes with Avalara when generating and posting billing documents with API calls and bill runs, see Avalara taxes in API calls and bill runs .

## Generate tax reports in Avalara

One of the many benefits of using Avalara to calculate your tax rates is that it provides advanced reporting functionality. To find out how to generate a wide range reports, see Generate tax reports in Avalara .

## Notes and limitations

-   If you use the direct Avalara integration, Zuora calculates tax when invoices are generated. If the tax calculation fails for a particular invoice, the invoice will be canceled. This behavior is different from the behavior of Zuora's configurable Tax app. See Configurable Tax app .

There are currently some limitations to bear in mind when using the Avalara integration. Some of these are limitations of Avalara's service, and others are gaps in functionality that are currently in development. For more information, see Limitations of Avalara integration .
