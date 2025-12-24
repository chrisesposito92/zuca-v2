---
title: "Revenue recognition codes"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/basic-concepts-and-terms/revenue-recognition-codes"
product: "zuora-billing"
scraped_at: "2025-12-24T04:19:11.562Z"
---

# Revenue recognition codes

Learn how to use revenue recognition codes in Zuora Billing to manage revenue information and trigger specific behaviors in accounting systems.

Revenue recognition is an accounting principle that determines when revenues are recognized. Use revenue recognition codes to export revenue information from Zuora Billing into your accounting system.

The revenue recognition code is an open-format text string intended to trigger behavior in a downstream system, typically the revenue recognition module in the accounting system. As with accounting codes, Zuora captures the tag and passes it with every charge. Because the revenue recognition date can be a different date than the charge date, Zuora allows you to select a different date.

Revenue recognition codes are optional. Your company can enable revenue recognition codes in the Zuora Billing settings. See Add revenue recognition codes for more information.

If you have enabled revenue recognition codes, you must select the correct revenue recognition code when creating a product rate plan charge.
