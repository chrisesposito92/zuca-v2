---
title: "Usage billing overview"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/usage-billing-overview"
product: "zuora-billing"
scraped_at: "2026-02-19T03:14:04.595Z"
---

# Usage billing overview

Zuora Billing allows tracking and invoicing of customer usage data, supporting various billing cycles and advanced pricing models like Prepaid with Drawdown. Ensure all usage data is imported before invoicing, and note the limits on usage records per billing period.

You can use Zuora Billing to track your customers' usage data and then usage charges must be calculated and invoiced. Usage is always billed in arrears. For example, you might bill customers in February for their January usage. Usage can be billed on a recurring monthly, quarterly, semi-annual, or annual basis.

You can also use a usage charge in the Prepaid with Drawdown or Minimum Commitment feature to offer comprehensive pricing models. These pricing models are empowered with the following capabilities:

-   Unbilled Usage empowers you to access the usages and due amounts in near real time before charges are billed. You can view the usages and up-to-date amounts due for a subscription in the Unbilled Usage section on the subscription details page. The Unbilled Usage feature is supported downstream by Zuora Revenue through the Order to Revenue feature.
-   Threshold Notification empowers you to receive notifications when customized consumption thresholds of prepaid balance or unbilled usage are being exceeded.

Consumption of a billable service or resource (such as database storage space or bundles of emails sent) provides the basis for some charge models - simple usage, tiered pricing, or volume pricing. To make this work, usage must be tracked in the system and usage charges must be calculated and invoiced. Usage is always billed in arrears - for example, you might bill customers in February for their January usage. Usage can be billed on a recurring monthly, quarterly, semi-annual, or annual basis.

Make sure you have imported all the usage data to Zuora before generating and posting the invoice for a service period. If you import the usage data for the service period after the invoice has been posted, the newly imported usage data will not be billed.

When you generate an invoice, a limit is set on the maximum number of usage records that can be rated for one rate plan charge per billing period. The default limit is 200,000 for the maximum number of usage records.

For example, one subscription has two usage-based rate plan charges, and the billing period is set to Month for both charges. A maximum of 200,000 usage records can be rated per charge every month. If any or both of the charges contain more than 200,000 usage records, invoice generation fails and an error message is displayed.

Zuora expects no more than 25 million usage records per month. If you want to go over this limit, contact your Zuora account manager for further consultation.
