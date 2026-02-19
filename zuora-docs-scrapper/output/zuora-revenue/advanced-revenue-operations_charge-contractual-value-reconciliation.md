---
title: "Charge contractual value reconciliation"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/charge-contractual-value-reconciliation"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:39:58.023Z"
---

# Charge contractual value reconciliation

Learn how to reconcile charge contractual values between Zuora Billing and Zuora Revenue using predefined reports and integration processes.

To help you reconcile the charge contractual value (CCV) between Zuora Billing and Zuora Revenue, Zuora Billing provides CCV to be displayed for different rate plan charges. See [Preview charge contractual value in Zuora Billing](/zuora-revenue/advanced-revenue-operations/charge-contractual-value-reconciliation/preview-charge-contractual-value-in-zuora-billing) for details.

Zuora Revenue provides the following predefined reports. The CCV report is based on the booking data from Zuora Billing. The Rate Plan Charge Booking report is based on the booking data from the integration process and from Zuora Revenue.

-   Zuora Billing CCV report

-   Rate Plan Charge Booking report


The two reports are accessible from different menu options in the Zuora Revenue UI. After you run and download the two reports, you can start the reconciliation to identify the mismatch between them.

As illustrated in the following graphic, data of the Zuora Billing CCV report comes from Zuora Billing. Data of the Rate Plan Charge Booking report comes from different stages of the Billing - Revenue Integration process, which includes data synchronization, data transformation, and data collection in Zuora Revenue.

![CCV-report-reconcile](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1e3d5d60-4e27-4cc8-8d14-8c9e0071e162?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFlM2Q1ZDYwLTRlMjctNGNjOC04ZDE0LThjOWUwMDcxZTE2MiIsImV4cCI6MTc3MTU1ODc5MSwianRpIjoiZGIzNTg3MWY3OThlNDZlM2JhY2UyMTMyNTdkZTI3YzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.AZMkaPc2_VK5i4aLHQKCeQhvTeDnFm5Be5vk3Ow44z4)
