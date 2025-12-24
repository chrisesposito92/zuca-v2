---
title: "Consolidated invoices generation through bill runs"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/consolidated-invoices-generation-through-bill-runs"
product: "zuora-billing"
scraped_at: "2025-12-24T18:40:34.110Z"
---

# Consolidated invoices generation through bill runs

Understand how to generate consolidated invoices for unbilled subscriptions and standalone charges using bill runs in Unified Invoicing.

With Unified Invoicing, you can use bill runs to generate consolidated invoices for unbilled subscriptions and standalone charges under a customer account.

You can use bill runs to generate consolidated invoices in the following scenarios:

-   A customer account has a subscription including a monthly recurring flat fee charge, with the BCD 1st, and unit price of $100. A draft standalone invoice INV-008 exists under the same account. After a bill run is executed for the account, a consolidated invoice in Draft status is generated, containing the subscription and draft standalone invoice INV-008. The number and ID of invoice INV-008 are not changed.

-   A customer account has a subscription, and two draft standalone invoices INV-001 and INV-002 exist under the same account. After a bill run is executed for the account, a consolidated invoice in Draft status is generated, containing the subscription and draft standalone invoice INV-001.

-   A subscription and order line items exist under an account, but no standalone invoice exists under the same account. After a bill run is executed for the account, a consolidated invoice in Draft status is generated.


You can create an ad hoc bill run through the Zuora UI or use the CRUD: Create a bill run operation to generate a consolidated invoice for a customer account.

After the bill run is executed, a consolidated invoice is generated and posted.
