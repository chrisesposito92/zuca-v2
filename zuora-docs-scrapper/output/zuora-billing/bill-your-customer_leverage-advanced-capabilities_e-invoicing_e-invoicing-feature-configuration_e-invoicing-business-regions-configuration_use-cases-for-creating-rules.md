---
title: "Use cases for creating rules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoicing-business-regions-configuration/use-cases-for-creating-rules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:53.429Z"
---

# Use cases for creating rules

This topic outlines various use cases for creating rules, including matching default behaviors, reflecting specific regional requirements, and handling invoice reversals.

This section lists common use cases for creating rules. For available objects and fields for creating the rules, see Objects and fields for creating rules .

Use case 1: By default, the country of the sold-to contact on the billing document is used to determine the business region. Create a rule that matches this default behavior for invoices, shown below. You can create the same rule for the credit memo and debit memo.

![Configure e-invoicing business regions use case 1.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6b32a74d-45ed-4ad8-9b17-40e7ac05c1ee?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZiMzJhNzRkLTQ1ZWQtNGFkOC05YjE3LTQwZTdhYzA1YzFlZSIsImV4cCI6MTc2NjY4NzQ1MSwianRpIjoiMTZjNWZkNjkzOWJmNDFjMGIzMTA4NjFlNjNlZGQ0NDgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Lf_9D79B6MjR_XInAgXtSPGCcx7Y-WMMDJPrM4Owpg0)

Use case 2: A company located in Germany requires its suppliers to only send an electronic invoice (ELR) when the document is above 10,000. Create a rule reflecting this requirement for invoices.

![Configure e-invoicing business regions_use case 2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/85e0bf16-3a91-4a1b-a7ee-6f1fa28f8523?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg1ZTBiZjE2LTNhOTEtNGExYi1hN2VlLTZmMWZhMjhmODUyMyIsImV4cCI6MTc2NjY4NzQ1MSwianRpIjoiZTEwZDY2NDM4NDZmNGE3OWI4YTRlMjYzYzY4ZGIyNTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.5sP4_8FIiKoEyJYp-JyiUkK-XpxuEBEPvHtu8U3MVFo)

Use case 3: In Romania, companies that trade in products characterized as dangerous are required to issue an electronic fiscal document. The configuration needs to be done at the item level. Create a rule reflecting this requirement for invoices.

![Configure e-invoicing business regions use case 3.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f1d1af69-d3d7-4433-b589-71de8885a283?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImYxZDFhZjY5LWQzZDctNDQzMy1iNTg5LTcxZGU4ODg1YTI4MyIsImV4cCI6MTc2NjY4NzQ1MSwianRpIjoiNWZhMmJlZDQyN2Q5NDkyZDk3NWI4MTgxM2FmYWI4NjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.qd7VuLFjdDeuyOYCO2W_p7JWa_11ZxsGSieb0Av_5nA)

In this case, the Category is a custom field of the Product Rate Plan Charge object, and the Product Rate Plan Charge is the related object of the Invoice Item base object.

Use case 4: This is the scenario of the e-invoice rejected in Italy and a company needs to reverse the invoice without sending the Credit Memo to the government. Create a rule that prevents sending credit memos generated from invoice reversal.

![Configure e-invoicing business regions_use case 4](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ab50edb0-cbba-4df2-9896-149c3bacd18d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFiNTBlZGIwLWNiYmEtNGRmMi05ODk2LTE0OWMzYmFjZDE4ZCIsImV4cCI6MTc2NjY4NzQ1MSwianRpIjoiMTgwNTg2ZDI3OTkwNDk1NThkMDM0Y2IzMmY1ZTdkZmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.iixNxJ9kB7yB0PlzFp5F-kjLa_XmhutFodvmCHF_tUw)
