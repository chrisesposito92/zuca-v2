---
title: "UAT sign-off from Sovos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/e-invoice-file-template-configuration-and-complete-end-to-end-testing/uat-sign-off-from-sovos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:40:26.981Z"
---

# UAT sign-off from Sovos

Obtain UAT sign-off from Sovos after successful end-to-end testing, ensuring compliance with country-specific requirements for e-invoicing services.

When the end-to-end testing is complete and successful, you must obtain UAT (sandbox) sign-off from Sovos. The sign-off is country-specific, which means that a UAT sign-off is needed for each country in which you want to enable the Sovos e-invoicing service.

Sovos evaluates your API calls and e-invoicing data format in the sandbox environment. If they fulfill Sovos' requirements, Sovos will grant you a sign-off, which is a prerequisite for sending data to the Sovos production environment.

You need to collect the following information when executing the end-to-end tests and provide it to Sovos for evaluation:

-   Correlation ID: The unique ID of an API call. Once you successfully submit the e-invoice data to Sovos, you can download the logs and obtain the Correlation ID.
-   Document ID: The UUID of the billing document in Zuora. For example, an invoice ID such as `1bc3ecd26911a3c77072d0eff9fcd550`.
