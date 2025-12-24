---
title: "Example for embedding images into invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/embed-images-into-invoice-templates/example-for-embedding-images-into-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:12.033Z"
---

# Example for embedding images into invoices

Explore the example of embedding images into invoice templates and outlines important considerations and limitations.

The following merge field example will return an image in the invoice PDF or Word file.

Example invoice template:

![Merge FieldIn Invoice Template](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b49ce5a7-ca07-4f89-a263-894886495d8e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI0OWNlNWE3LWNhMDctNGY4OS1hMjYzLTg5NDg4NjQ5NWQ4ZSIsImV4cCI6MTc2NjY0MTgwOSwianRpIjoiZGJlYzU5NjYxM2E1NDAyYjg2OGRkNDQ0MGM1YTczMzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.N2ID3H7ONdNMhBGc1ixytTLqhUZhUx5qb655pXtLZdU)

Returned example invoice file:

![Embedded Into Invoice](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/491911c4-93b2-41d6-a9c4-ae3ad81a049a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ5MTkxMWM0LTkzYjItNDFkNi1hOWM0LWFlM2FkODFhMDQ5YSIsImV4cCI6MTc2NjY0MTgwOSwianRpIjoiODk3OTUwYTZlOTZhNDFmYzk4ODMzOGMwYzJhYjJlZmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.MVdmz_uaoiyVZ6I66QGfMeL9Cksmo9UVZm5uBX_8iI4)

## Considerations

When you embed images in addition to barcodes into invoice templates, pay attention to the following limitations.

-   A maximum of two images can be embedded into each template.

-   The maximum size of each image to be embedded cannot exceed 2 MB. If an oversized image is embedded into an invoice template, no PDF or Word files are generated.

-   Unstable network conditions might cause a timeout when fetching external images. In this situation, no PDF or Word files are generated.

-   If the URL of the external image to be embedded is invalid, no PDF or Word files are generated.
