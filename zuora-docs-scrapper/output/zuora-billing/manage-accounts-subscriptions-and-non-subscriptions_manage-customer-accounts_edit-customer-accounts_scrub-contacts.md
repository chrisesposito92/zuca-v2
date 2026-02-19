---
title: "Scrub contacts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/edit-customer-accounts/scrub-contacts"
product: "zuora-billing"
scraped_at: "2026-02-19T03:11:07.985Z"
---

# Scrub contacts

The Scrub contact operation in Zuora allows you to comply with privacy laws by anonymizing personal data of contacts when no longer needed.

Certain applicable privacy laws, including the GDPR and the California Consumer Privacy Act (CCPA), require that personal data of data subjects must be deleted or permanently anonymized when no longer needed for the purposes for which it was obtained. For example, addresses and phone numbers.

To support your compliance with the applicable privacy laws, Zuora provides a REST API operation called Scrub contact . You can use this operation to anonymize (or scrub) personal data related to contacts when the data is no longer needed, or if a data subject requests that you anonymize personal data.

## Prerequisites

You must ensure that the Scrub Sensitive Data of Contact billing permission is enabled in your user role. Contact your tenant administrator if you want to enable this permission. See Billing Permissions for more information.

## Sensitive data related to contacts

Generally, sensitive data related to contacts mainly includes the following categories of data:

-   The first name, last name, and nicknames of all contacts
-   The address data for all contacts
-   The phone numbers of all contacts
-   The emails of all contacts

## Scope of the Scrub contact operation

The Scrub contact operation scrubs all sensitive data by replacing the actual value with dummy values in the following Zuora business objects:

-   Contact
-   Contact Snapshot

For the scrubbed fields and dummy values, see Scrubbed Fields in Contacts and Contact Snapshots for more information.

Note:

-   The Scrub contact operation only handles one contact and its snapshot at one time. It does not support batch updates.
-   The Scrub contact operation requires the contact ID as a path parameter.
