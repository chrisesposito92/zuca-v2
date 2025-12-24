---
title: "Scrubbed fields in Contacts and Contact Snapshots"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/edit-customer-accounts/scrubbed-fields-in-contacts-and-contact-snapshots"
product: "zuora-billing"
scraped_at: "2025-12-24T05:16:41.597Z"
---

# Scrubbed fields in Contacts and Contact Snapshots

This topic details the scrubbed fields and their corresponding values in the Contact and Contact Snapshot business objects.

The following table lists the scrubbed fields and the values stored after scrubbing in the Contact and Contact Snapshot business objects:

| Business Object Field Name | Value after Scrubbing | Description |
| --- | --- | --- |
| address1 | Record Scrubbed | The first line of the contact's address, which is often a street address or business name. |
| address2 | Record Scrubbed | The second line of the contact's address. |
| city | Record Scrubbed | The city of the contact's address |
| contactDescription | Record Scrubbed | A description of the contact. |
| country | null | The country of the contact's address. |
| county | Record Scrubbed | The county of the contact's address. It May optionally be used by Zuora Tax to calculate county tax. |
| fax | Record Scrubbed | The fax number of the contact. |
| firstName | Record Scrubbed | The first name.of the contact. |
| homePhone | Record Scrubbed | The home phone number of the contact. |
| lastName | Record Scrubbed | The last name of the contact. |
| mobilePhone | Record Scrubbed | The mobile phone number of the contact. |
| nickName | Record Scrubbed | A nickname for the contact. |
| otherPhone | Record Scrubbed | An additional phone number of the contact. |
| otherPhoneType | 3 | The type of the other phone. |
| personalEmail | null | The contact's personal email address. |
| postalCode | Record Scrubbed | The zip code for the contact's address. |
| state | Record Scrubbed | The state or province of the contact's address. |
| taxRegion | Record Scrubbed | Whether to use Zuora Tax rules. |
| workEmail | null | The business email address of the contact. |
| workPhone | Record Scrubbed | The business phone number of the contact. |
