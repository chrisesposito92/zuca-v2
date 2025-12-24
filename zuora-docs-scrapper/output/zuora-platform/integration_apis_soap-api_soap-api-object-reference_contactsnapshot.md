---
title: "ContactSnapshot"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/contactsnapshot"
product: "zuora-platform"
scraped_at: "2025-12-24T05:40:36.940Z"
---

# ContactSnapshot

The ContactSnapshot object preserves a record at a particular point in time of the Bill-To contact or Sold-To contact on a customer account.

When invoices are posted, Zuora preserves the Bill To contact and Sold To contact of the invoices in the contact snapshots. If you subsequently update the contact information on a customer account, the original contact information at the time the invoice was posted is saved in ContactSnapshot object instances.

To preserve contact information when invoices are posted, you must have the following billing rule enabled:

Preserve snapshot of bill-to and sold-to contacts when billing documents are posted

You can retrieve the historical contact information by querying this object.

## Supported calls

You can use this object with the following calls:

-   query()


## Example: Query a snapshot of BillToContact

To retrieve previous bill-to contact information for an invoice:

1.  Retrieve the ID of the snapshot of the Bill To contact of the invoice. In the following example, the ID of the invoice is `2c92c09546f5943c01471d5adf171d0d` . This query returns the ID of a ContactSnapshot object. For example, `2c92c0855fc8fdf9015fc931240431d4` . select BillToContactSnapshotId from Invoice where Id='2c92c09546f5943c01471d5adf171d0d'

2.  Retrieve contact information from the ContactSnapshot object.select AccountId, Address1, Address2, City, ContactId, Country, County, CreatedById, CreatedDate, Description, Fax, FirstName, HomePhone, LastName, MobilePhone, NickName, OtherPhone, OtherPhoneType, PersonalEmail, PostalCode, State, TaxRegion, UpdatedById, UpdatedDate, WorkEmail, WorkPhone from ContactSnapshot where Id = '2c92c0855fc8fdf9015fc931240431d4'
