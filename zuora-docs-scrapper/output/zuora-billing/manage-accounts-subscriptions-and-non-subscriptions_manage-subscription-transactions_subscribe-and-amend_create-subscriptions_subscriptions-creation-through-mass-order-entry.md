---
title: "Subscriptions creation through Mass Order Entry"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/create-subscriptions/subscriptions-creation-through-mass-order-entry"
product: "zuora-billing"
scraped_at: "2025-12-24T05:33:56.447Z"
---

# Subscriptions creation through Mass Order Entry

This article explains how to create subscriptions using Mass Order Entry by uploading CSV files, and understand the limitation and recommendations for optimal processing.

Mass Order Entry lets you create subscriptions by uploading data in a comma-separated value (CSV) file. Use the information from the customer accounts and the product catalog to populate this file.

Creating and amending subscriptions in the Zuora Billing UI is only relevant for existing Subscribe and Amend customers who have not transitioned to Orders or Orders Harmonization . Any new customers will not see this UI.

Note:

Mass Order Entry is end of support. Zuora no longer provides product support, and bug fixes or security issues are no longer be addressed. You are recommended to use ​​Developer Tools instead.

## Records per export Mass Order Entry file

Around 200,000 records are allowed on an Export Mass Order Entry file. This large file contains every subscription and amendment that has been created for your Zuora tenant.

Note:

Zuora recommends uploading up to 400 records per file for improved processing.
