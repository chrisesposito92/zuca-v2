---
title: "Taxable item snapshot"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/taxable-item-snapshot"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:03.910Z"
---

# Taxable item snapshot

Taxable Item Snapshot provides an immutable record of tax calculation data, ensuring accurate tax reporting despite changes in customer location or account details.

Note:

This feature is in the Early Adopter phase. If you want to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Taxable Item Snapshot is an immutable copy of the information used in the tax calculation. Typically, this information includes the customer contact address details used to identify the applicable tax jurisdiction before a tax calculation is possible. If you update the tax information on the customer account, the snapshot preserves the data used to generate the original tax calculation. The snapshot allows you to accurately report on tax liability even though the customer's location may have changed.

The snapshots are generated depend on how you calculate taxes:

-   If you use Avalara or Tax Connector for Extension Platform to calculate taxes, Zuora automatically generates snapshots when tax items are generated.

-   If you use the SOAP create() call on TaxationItem object to add tax items to invoices, you can manually create snapshots by using the create() call on the TaxableItemSnapshot object.


To track historical information about taxation, you can query using the SOAP TaxableItemSnapshot object and Data Sources.

## Limitations

The limitations of Taxable Item Snapshots are as follows:

-   Currently, Zuora does not support generating snapshots if you use the following ways to calculate taxes:

    -   Zuora tax

    -   Importing taxation information through the SOAP Import object

-   An invoice item or invoice item adjustment can only have one snapshot.

-   You can only delete snapshots that are manually created. You are not allowed to delete snapshots that are auto-generated.


The limitations of creating Taxable Item Snapshots via API are as follows:

-   You can only create snapshots for the following types of items:

    -   invoice

    -   invoice item adjustment

-   For invoices, you can only create snapshots for invoices that are in draft status. Also, you can only delete snapshots for invoices that are in draft status.

-   For invoice item adjustments, you can only create snapshots if the type of the adjustments is InvoiceDetail. You cannot create snapshots if the type of the adjustments is Tax.
