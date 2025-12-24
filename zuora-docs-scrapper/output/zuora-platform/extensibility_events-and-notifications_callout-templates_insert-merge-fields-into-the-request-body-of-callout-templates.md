---
title: "Insert merge fields into the request body of callout templates"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/callout-templates/insert-merge-fields-into-the-request-body-of-callout-templates"
product: "zuora-platform"
scraped_at: "2025-12-24T05:26:21.206Z"
---

# Insert merge fields into the request body of callout templates

Describes how to use merge fields to include related object data in request body of a callout template.

1.  When creating a callout template, on the Create Callout Template page, select the merge fields you want to insert into the callout request body from the Merge Fields list in the Request Body section. In the Merge Fields list, supported merge fields are categorized by objects associated with the callout template’s related event. If you select an object from the list, all merge fields on this object are selected.
2.  Click \+ Insert Merge Fields. Zuora will insert all selected merge fields into the request body. The following is an example:

    { "AccountAccountNumber": "{{DataSource.Account.AccountNumber}}", "AccountId": "{{DataSource.Account.Id}}" }

3.  (Optional) Customize the key-value pairs in the request body to meet your business requirements.
