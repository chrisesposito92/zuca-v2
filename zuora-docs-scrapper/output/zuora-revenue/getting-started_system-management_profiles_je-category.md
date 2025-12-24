---
title: "JE category"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/profiles/je-category"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:23:07.347Z"
---

# JE category

JE category profiles facilitate validation of journal entries from upstream systems, including account segments, exchange rates, and set of books.

Profiles of the JE category enable various validations for journal entries from the upstream system, such as the set of books, account segment, and exchange rate. The following profiles are available within this category.

## CC ID Validation

Use the CC\_ID\_VALIDATION profile to enable validation of the account segments for journal entries from the upstream system. This profile is applicable only when the upstream system is Oracle.

When this profile is toggled to Yes , Zuora Revenue will perform account segment validation from the Oracle system.

## Ex Rate Validation

Use the EX\_RATE\_VALIDATION profile to enable validation of the exchange rate for journal entries. The possible values of this profile are as follows:

-   No Validation: Validation is disabled.
-   Non Oracle: Perform exchange rate validation when the upstream system is non-Oracle.
-   Oracle: Perform exchange rate validation when the upstream system is Oracle.

## SOB Validation

Use the SOB\_VALIDATION profile to enable validation of the set of books for journal entries from the Oracle ERP system.
