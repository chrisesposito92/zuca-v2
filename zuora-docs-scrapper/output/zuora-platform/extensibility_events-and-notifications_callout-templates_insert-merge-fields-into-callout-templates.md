---
title: "Insert merge fields into callout templates"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/callout-templates/insert-merge-fields-into-callout-templates"
product: "zuora-platform"
scraped_at: "2025-12-24T05:26:18.835Z"
---

# Insert merge fields into callout templates

Describes how to use merge fields to include related object data in the request URL, request body, HMAC authentication data, or custom headers of a callout template.

1.  When creating a callout template, on the Create Callout Template page, specify the Field Type and Field fields in the Available Merge Fields section. Zuora will auto-generate and display the corresponding merge field tag in the Merge Field Tag field. For example, `{{DataSource.Account.Id}}`.
2.  Copy the merge field tag in the Merge Field Tag field.
3.  Paste the merge field tag into any of the following places as needed:

    -   The Request URL field

    -   The Request Body , which must be a JSON-formatted object enclosed with curly braces ( `{}` )

    -   The Data or Header Value field of HMAC authentication

    -   The Header Name or Header Value field of custom callout headers
