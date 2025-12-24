---
title: "Create a related custom object record"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-objects/custom-object-record-management/management-of-related-custom-object-records-on-standard-object-detail-pages/create-a-related-custom-object-record"
product: "zuora-platform"
scraped_at: "2025-12-24T05:23:50.109Z"
---

# Create a related custom object record

Learn how to create a related custom object record on a standard object detail page.

1.  Open the standard object detail page. For example, if you want to create a record for a custom object that relates to the Invoice object, navigate to in the left navigation menu and click an invoice number.
2.  Scroll to the Related Objects section. All custom object definitions related to the current standard object are displayed as tabs.
3.  Click the tab for the custom object that you want to create the record for.
4.  Click the Create Record icon ![Create icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/30244a20-151c-4f5f-b60c-96d79c2aadd2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjMwMjQ0YTIwLTE1MWMtNGY1Zi1iNjBjLTk2ZDc5YzJhYWRkMiIsImV4cCI6MTc2NjY0MDIyOCwianRpIjoiZTI4ODYwZTg2MmQwNGFiZDkxZjhhZmMwYzZiMTYzOGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.wLqVXRqoCp8oicW5Np6-TeUZTzWvFE1m6CQD9BvLiGE).
5.  In the displayed Add Record Information dialog, specify the field values as needed. When specifying the relationship-type field that connects the custom object and the standard object, you can select any standard object record, including the current one that this detail page refers to.
6.  Click Save.

Zuora creates a new custom object record regardless of whether you selected the current standard object record for the relationship-type field in step 5. However, the custom object record is displayed in the Related Objects section after the creation only if the custom object record is associated with the current standard object record.

For example, suppose that the current invoice number is `INV-001` and the relationship-type field on the custom object is `related_invoice__c`:

-   If you specify `INV-001` for the `related_invoice__c` field in step 5, the field will be created and displayed in the Related Objects section after the creation.

-   If you specify `INV-002` (or leave blank if it is not a required field) for the `related_invoice__c` field in step 5, the field will be created but not displayed in the Related Objects section on the current page. You can only find the record on the invoice detail page of `INV-002`.
