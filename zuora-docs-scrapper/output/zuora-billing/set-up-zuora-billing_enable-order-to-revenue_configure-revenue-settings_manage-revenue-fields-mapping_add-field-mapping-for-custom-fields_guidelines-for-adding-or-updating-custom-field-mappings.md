---
title: "Guidelines for adding or updating custom field mappings"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/configure-revenue-settings/manage-revenue-fields-mapping/add-field-mapping-for-custom-fields/guidelines-for-adding-or-updating-custom-field-mappings"
product: "zuora-billing"
scraped_at: "2025-12-24T05:13:23.135Z"
---

# Guidelines for adding or updating custom field mappings

Learn how to add or update custom field mappings, ensuring consistency across multi-entity tenants and understanding the impact on billing and booking transactions.

You can add or update the field mapping for the custom fields with the following considerations.

-   The mapping must be from a Billing standard or custom field to a Revenue custom field.

-   A Revenue custom field can only be used in field mapping for once, except:

    -   The booking template allows the Order Line Item and Rate Plan Charge fields to be mapped to one Revenue custom field.

    -   The billing template allows the Invoice Item, Credit Memo Item, Debit Memo Item, and Invoice Item Adjustment fields to be mapped to one Revenue custom field.

-   The field types must be consistent in a field mapping. For example, you cannot map a date field to a number field.

-   Adding or updating a field mapping will take effect immediately and impact the corresponding booking or billing transactions generated from that moment on.

-   Field mapping is on the tenant level. Therefore, if the multi-entity feature is enabled with your tenants, ensure the custom field mapping is consistent across all your multi-entity tenants.

-   Order to Revenue supports the following additional fields for the bill to and sold to contact information under invoice item and rate plan charge objects:

    -   InvoiceItem.BillToContact.City

    -   InvoiceItem.BillToContact.Country

    -   InvoiceItem.BillToContact.FirstName

    -   InvoiceItem.BillToContact.LastName

    -   InvoiceItem.BillToContact.PostalCode

    -   InvoiceItem.BillToContact.State

    -   InvoiceItem.BillToContact.WorkEmail

    -   InvoiceItem.SoldToContact.Country

    -   InvoiceItem.SoldToContact.FirstName

    -   InvoiceItem.SoldToContact.LastName

    -   InvoiceItem.SoldToContact.State

    -   InvoiceItemAdjustment.BillToContact.Country

    -   RatePlanCharge.BillToContact.City

    -   RatePlanCharge.BillToContact.Country

    -   RatePlanCharge.BillToContact.FirstName

    -   RatePlanCharge.BillToContact.LastName

    -   RatePlanCharge.BillToContact.State

    -   RatePlanCharge.SoldToContact.City

    -   RatePlanCharge.SoldToContact.Country

    -   RatePlanCharge.SoldToContact.FirstName

    -   RatePlanCharge.SoldToContact.LastName

    -   RatePlanCharge.SoldToContact.PostalCode

    -   RatePlanCharge.SoldToContact.State

    -   RatePlanCharge.SoldToContact.WorkEmail

-   Field mapping is supported on certain Billing objects, as the following table shows:


| Billing object | Is linking to the Billing Transaction object supported? | Is linking to the Booking Transaction object supported? | Is field mapping for standard fields supported? | Is field mapping for custom fields supported? |
| --- | --- | --- | --- | --- |
| Account | Y | Y | Y | Y |
| Accounting Code (Finance) | Y | Y | Y | Y |
| Commitment | Y | No | Y | Y |
| Contact | Y | N | Y | Y |
| Product | Y | Y | Y | Y |
| Product Rate Plan | Y | Y | Y | Y |
| Product Rate Plan Charge | Y | Y | Y | Y |
| Amendment | N | Y | Y | Y |
| Invoice Item | Y | N | Y | Y |
| Invoice | Y | N | Y | Y |
| Invoice Item Adjustment | Y | N | Y | Y |
| Rate Plan Charge | Y | Y | Y | Y |
| Rate Plan | Y | Y | Y | Y |
| Subscription | Y | Y | Y | Y |
| Order | N | Y | Y | Y |
| Credit Memo | Y | N | Y | Y |
| Credit Memo Item | Y | N | Y | Y |
| Debit Memo | Y | N | Y | Y |
| Debit Memo Item | Y | N | Y | Y |
| Order Line Item | Y | Y | Y | Y |
