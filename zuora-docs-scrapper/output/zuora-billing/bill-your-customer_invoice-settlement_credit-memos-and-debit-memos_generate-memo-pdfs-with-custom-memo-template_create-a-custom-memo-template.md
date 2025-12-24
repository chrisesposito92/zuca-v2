---
title: "Create a custom memo template"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/generate-memo-pdfs-with-custom-memo-template/create-a-custom-memo-template"
product: "zuora-billing"
scraped_at: "2025-12-24T08:36:23.347Z"
---

# Create a custom memo template

Learn how to create custom memo template

You can create your custom credit memo and debit memo templates based on your company's requirements. Zuora supports credit memo merge fields and debit memo merge fields to display certain information you want your customers to see.

To create a custom memo template, complete the following steps:

1.  Download the [sample credit memo template](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/dd84f277-f275-49fd-a752-2129c9511d67?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRkODRmMjc3LWYyNzUtNDlmZC1hNzUyLTIxMjljOTUxMWQ2NyIsImV4cCI6MTc2NjY1MTc4MSwianRpIjoiYjhjOWY2NmM2YWYwNGMyNjkxMzIwM2Y1ZTg3NTQ0NDYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.5ofXrEJDqE_HbX__XsKlwzdjK2DnpGvEH81ojRproyk&response-content-disposition=attachment%3B+filename%3D%22DocTemplate_creditmemo_default.doc%22) or [sample debit memo template](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3106ee97-aa43-48c8-b306-898b411dbaf0?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjMxMDZlZTk3LWFhNDMtNDhjOC1iMzA2LTg5OGI0MTFkYmFmMCIsImV4cCI6MTc2NjY1MTc4MSwianRpIjoiNDM1MjY0ZjZjODY5NDdmMWJkM2M5NWI5ZmZkZWY0MjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.xw5vSxDuJ3DLrkHvS0mZXjH3Uq9FWBj-yNxuAFVHQMM&response-content-disposition=attachment%3B+filename%3D%22DocTemplate_debitmemo_default.doc%22).
2.  Create mail merge fields and use tables to add information to the default template.
3.  (Optional) Define the format for date and number fields .
