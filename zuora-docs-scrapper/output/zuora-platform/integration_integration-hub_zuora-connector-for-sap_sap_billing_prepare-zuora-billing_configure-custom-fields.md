---
title: "Configure custom fields"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_billing/prepare-zuora-billing/configure-custom-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T08:37:23.257Z"
---

# Configure custom fields

Extend the Journal Entry object with the following custom fields that will be used by the connector to record values from SAP for reconciliation purposes:

-   SAP\_OBJECT\_KEY\_\_c

    -   Type: Text

    -   Required: false

    -   Indexed: false

-   SAP\_DOCUMENT\_NUMBER

    -   Type: Text

    -   Required: false

    -   Indexed: false


Extend the Invoice object with the following custom fields that will be used by the connector to record values from SAP for reconciliation purposes:

-   SAP\_OBJECT\_KEY\_\_c

    -   Type: Text

    -   Required: false

    -   Indexed: false

-   SAP\_DOCUMENT\_NUMBER

    -   Type: Text

    -   Required: false

    -   Indexed: false

-   SAP BILLING DOCUMENT NUMBER c

    -   Type: Text

    -   Required: false

    -   Indexed: false

    -   TransferredToExternalAccounting\_\_ c

-   Type: Picklist

    -   Yes

    -   No

    -   Error

    -   Processing

    -   Ignore

-   Required: false

-   ndexed: true

-   TransferredToERP c

    -   Type: Picklist

        -   Yes

        -   No

        -   Error

        -   Processing

        -   Ignore

    -   Required: false

    -   Indexed: true


Extend the Invoice Item object with the following custom fields that will be used by the connector to record values from SAP for reconciliation purposes:

-   SAP BILLING DOCUMENT ITEM c

    -   Type: Text

    -   Required: false

    -   Indexed: false

-   SAP BILLING DOCUMENT NUMBER c

    -   Type: Text

    -   Required: false

    -   Indexed: false


To configure custom fields, navigate to Extension Studio > Object Manager. For more information, see Custom Fields.
