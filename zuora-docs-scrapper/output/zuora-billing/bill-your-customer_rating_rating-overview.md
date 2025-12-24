---
title: "Rating overview"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/rating-overview"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:15.328Z"
---

# Rating overview

Zuora Billing's rating engine ensures accurate and efficient invoice processing by handling complex pricing strategies and ad-hoc changes through a multi-phase rating process.

Zuora Billing provides a rating engine to handle each amount on the invoice with accuracy and efficiency. The rating process completed by the rating engine is complex and affected by many factors, such as your customer account's billing information or your proration settings. It is recommended to have a general idea of the rating process in Zuora Billing.

Imagine your customer wants to add another subscription in the middle of the month, or you want to give different types of discounts to attract new customers. With such business scenarios of ad-hoc changes and complex pricing strategies, how do you ensure each amount on the invoice is handled with accuracy and efficiency?

In Zuora Billing, it is the rating engine that automatically processes each charge and calculates the correct result. In general, a rating process starts when a bill run is triggered. The rating process consists of three phases:

1.  Initialization: Gather necessary inputs to prepare for charge processing.
2.  Charge processing: Process all the charges in a subscription based on the inputs.
3.  Output generation: Produce calculated amounts to be presented on invoices.

Rating is a complex process affected by a combination of factors, such as billing information from the customer account and your billing settings that govern proration.
