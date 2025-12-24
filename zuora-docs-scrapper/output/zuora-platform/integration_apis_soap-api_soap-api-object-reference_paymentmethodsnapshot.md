---
title: "PaymentMethodSnapshot"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/paymentmethodsnapshot"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:47.703Z"
---

# PaymentMethodSnapshot

A Payment Method Snapshot is a copy of the particular Payment Method used in a transaction.

If the Payment Method is deleted, the Snapshot continues to retain the data used in each of the past transactions. As such, the Snapshot helps with display of historical transactions, integrations to external systems, and reporting. The Payment Method Snapshot will be available for query using SOAP API and Data Sources.

You can use this object with the query() call.

## Field descriptions

The fields for Payment Method Snapshot are identical to "Payment Method" with the exception of the following:

-   Active

-   AchAddress1

-   AchAddress2

-   CreatedById

-   CreatedDate

-   UpdatedById

-   UpdatedDate


The following Payment Method fields do not support the query() call in the Payment Method Snapshot object:

-   Active

-   AchAddress1

-   AchAddress2


See PaymentMethod for more information.

The following Payment Method Snapshot fields are not available in the Payment Method object:

-   PaymentMethodId

-   updatedOn


The `updatedOn` field cannot be modified or deleted.

## Additional field details

Here's more information we think you might like to have about the Id field:

Id

The ID of Payment Method Snapshot object. Every object has a unique identifier that Zuora automatically assigns upon creation. You can use ID to query for a snapshot.
