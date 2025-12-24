---
title: "Multiple books configuration in Zuora Revenue"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/multiple-books-configuration-in-zuora-revenue"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:22:53.407Z"
---

# Multiple books configuration in Zuora Revenue

Learn how to configure multiple revenue books in Zuora Revenue to apply different revenue treatments and manage revenue contracts with unique IDs.

In Zuora Revenue, at least one primary revenue book must be set up to process revenue transactions. The revenue book configuration determines revenue treatment to be applied to the transactions. It also determines the prefix of the unique revenue contract ID, which will be assigned to each revenue contract created in Zuora Revenue.

Zuora Revenue also provides the flexibility to set up more than one revenue book for the same instance so that the revenue treatment can be performed differently from one book to another. For example, you can choose to have the allocation functionality enabled for one book and disabled in another book so that you can compare the revenue recognition processing for the same transactions with allocations and without allocations. You can also implement Zuora Revenue to perform dual-guidance. To make it easier to identify the same revenue contract as processed in different ways, you can configure Zuora Revenue to group the revenue contract in the same way with the same ID number but each with a different prefix.

## System requirements

If you want to set up more than one revenue book in Zuora Revenue, be aware of the following requirements:

-   The revenue contract grouping logic is the same among the revenue books.
-   One revenue book must be configured as the primary book and cannot be disabled. Transaction data is always processed first in the primary book to determine the revenue contract grouping. Then the groupings will be copied to other revenue books.
-   The role-based access control applies to all revenue books.
-   Transaction data must be collected in the same period for all revenue books. The monthly close activities must be completed in parallel.
-   After the transaction data is collected for one book and the book is disabled later, this book cannot be enabled in another period.
