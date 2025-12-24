---
title: "Sold-to contacts configuration for e-invoicing"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/sold-to-contacts-configuration-for-e-invoicing"
product: "zuora-billing"
scraped_at: "2025-12-24T18:31:03.745Z"
---

# Sold-to contacts configuration for e-invoicing

The configuration of sold-to contacts is crucial for e-invoicing, as it determines the buyer's information and business region for billing documents.

The sold-to contact in a billing document holds the buyer's information in addition to the account e-invoicing profile. The sold-to contact of a billing document is used by the [E-Invoicing](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-overview) feature in the following ways:

-   The country of the sold-to contact is used to look up a business region and its associated service provider when billing documents are posted.
-   The address information of the sold-to contact is included in the e-invoice file templates as the buyer's information. It's included in the request payload when sending electronic billing documents.

When determining a business region during the posting of billing documents, the following logic is applied:

-   If a snapshot of the sold-to contact exists, it is used.
-   If no snapshot exists, the sold-to contact is used if available.
    Note: A standalone invoice could have its own sold-to contact if specified by users.

-   -   If neither of the above conditions is met, the default sold-to contact of the billing account is used.

    During e-invoicing file template mapping, it's recommended to include the buyer's information in the template with the following logic:

    -   For invoices, the buyer's information is determined as follows:
        -   If a sold-to contact snapshot exists for the invoice, it is used.
        -   If not, the sold-to contact of the invoice is used if available.
        -   If neither of the above is available, the default sold-to contact of the billing account is used.
    -   For credit memos and debit memos, the buyer's information is determined as follows:
        -   If a sold-to contact snapshot exists for the original invoice, it is used.
        -   If not, the sold-to contact snapshot of the credit memo or debit memo is used if available.
        -   If neither of the above is available, the default sold-to contact of the billing account is used.

    You have the flexibility to configure sold-to contacts at the account level or subscription level:

    -   If you do not specify any sold-to contact for a subscription, the billing documents generated for the subscription adopt the default bill-to contact of the corresponding customer account. Sold-to contact snapshot exists when you enable the billing rule Preserve snapshot of bill-to and sold-to contacts when billing documents are posted.
    -   If you specify a sold-to contact for a subscription, the billing documents generated for the subscription have the sold-to contact on the billing document item level. The [E-Invoicing](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-overview) feature doesn't support looking up a business region and its associated service provider based on the country of sold-to contact at the billing document level.

    The following table lists the contact-related fields involved in e-invoicing business. This table includes the general settings for countries that are not pre-integrated. For settings of the pre-integrated countries, see [Manage country-specific configurations](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management).

    | UI field | API field | Description |
    | --- | --- | --- |
    | Country | country | Specify a country or region where you must comply with e-invoicing requirements. |
    | Address 1 | addressLine1 | Specify the first line of the Buyer's address, which is often a street address or business name. |
    | Address 2 | addressLine2 | Specify the second line of the Buyer's address, which is often the name of a building. |
    | Postal Code | postalCode | Specify the short code that can identify the business address. |
    | City | city | Specify the name of the city where the business is located. |
    | State/Province | state | Specify the name of the state or province where the business is located. |
