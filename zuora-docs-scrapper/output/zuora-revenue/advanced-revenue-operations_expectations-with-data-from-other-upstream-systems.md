---
title: "Expectations with data from other upstream systems"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/expectations-with-data-from-other-upstream-systems"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:36:53.626Z"
---

# Expectations with data from other upstream systems

The limitations when you import data from other data sources into Zuora Billing - Revenue integration environments

In the Billing - Revenue Integration environment, besides Zuora Billing, you can also upload transaction data from other upstream systems into Zuora Revenue. For example, if you use Zuora Billing to manage the subscription-based orders and another system to manage traditional orders, transaction data from all these upstream systems can be interfaced into a single instance of Zuora Revenue. The benefit of doing this is that Zuora Revenue can work as a central place for revenue management.

However, there are some native limitations for Billing - Revenue Integration environments. In addition to these limitations, after you enable the integration between Zuora Billing and Zuora Revenue in the system, certain transaction types from other upstream systems will not be supported to be uploaded to Zuora Revenue.

Refer to the following table to understand the differences of supported transaction types in different integration scenarios.

-   The 1st column lists all types of transactions that can be processed in Zuora Revenue.

-   The 2nd column stands for the environment where Billing - Revenue Integration is enabled and transaction data come from Zuora Billing only. Yes indicates the current transaction type in the 1st column is supported. No indicates the current transition type in the 1st column is not supported.

-   The 3rd column stands for the environment where Billing - Revenue Integration is enabled and transaction data come from both Zuora Billing and other upstream systems. Yes indicates the current transaction type in the 1st column is supported. No indicates the current transition type in the 1st column is not supported.

-   The 4th column lists the system behavior in some specific scenarios that you should be aware of.


All the listed transaction types can be supported in the system where integration between Zuora Billing and Zuora Revenue is disabled.

| Transaction type | Transaction data from Zuora Billing only | Transaction data from both Zuora Billing and other upstream systems | Noteworthy system behavior |
| --- | --- | --- | --- |
| Sales order (SO) | Yes | Yes | If the amount of updated SO is less than the invoiced amount, the system will generate a CM-C line to knock off the excess invoiced amount. |
| Invoice (INV) | Yes | Yes | If an overstated INV line is collected, the system will generate a CM-C line for excess INV amount. |
| Credit memo (CM) | Yes | Yes |  |
| Credit memo for cancelation (CM-C) | Yes | Yes | If the CM-C amount is greater than the INV amount, the system will generate a CM-RO line for the excess CM-C amount. |
| Credit memo for return (CM-R) | No | Yes (for CM-R lines from other upstream systems)No (for data from Zuora Billing) |  |
| Reduction order (RORD) | No | No | Collection of RORD lines will end up in the Previous Charge Version Not Found error. |
| Credit memo for reduction order (CM-RO) | No | Yes (for the system-generated CM-RO lines from Zuora Billing)No (for CM-RO lines from other upstream systems) |  |
| Cost (CST) | No | No |  |
| Variable considerations (VC) to adjust credit memo | No | No |  |
| Variable considerations (VC) to adjust invoice | No | No |  |
