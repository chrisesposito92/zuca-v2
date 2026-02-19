---
title: "Anrok Tax Connector Limitations"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/anrok-tax-connector/anrok-tax-connector-limitations"
product: "zuora-billing"
scraped_at: "2026-02-19T03:10:20.968Z"
---

# Anrok Tax Connector Limitations

This section lists the Anrok Tax Connector limitations.

-   Anrok supports only one tax address per billing document. If an invoice includes multiple invoice items from different subscriptions or order line items, all items must use the same tax address. Otherwise, Zuora sends only one tax address in the tax request.

-   The default field mapping does not support standalone invoices or order line items created from custom charges because these do not have an associated Product Rate Plan Charge (PRPC) ID. To support these scenarios, you must configure custom field mappings to pass a product identifier.

-   Anrok supports only one tax date at the billing document level. A Zuora invoice or credit memo can include both charges and credits, depending on the invoice or credit memo generation rule used.
