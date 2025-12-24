---
title: "Create Intelli codes"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/promo-codes/configure-a-campaign/create-intelli-codes"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:09.407Z"
---

# Create Intelli codes

Learn about Intelli codes that offer flexible and efficient promotion code management through configurable rules.

## Intelli Code Overview

The regular promotion codes only apply to scenarios where your business logic can be determined upfront. If you have emerging requirements after the creation of child campaigns, you must create new promotion codes to accommodate your needs.

To provide more flexibility and simplify your integration process with Promo Codes, we have introduced Intelli codes that can be validated or consumed based on configured rules. The number of promotion codes can also be reduced because one code can be applied to multiple scenarios.

## Benefits of Intelli codes

-   Decrease the number of Promo Codes created, which leads to:

    -   Overall performance improvement.

    -   Increase in operational efficiency through less configuration time.

    -   Faster campaign rollouts.

-   Less upfront business logic when integrating that will provide:

    -   Faster implementation for each new promotion by decoupling the front-end UI and business logic from promotion code processing.

    -   Increase market share through more configuration options and customization.


## Rules

Rules are associated with the Intelli Code object. When an Intelli code is validated, all rules associated with this Intelli code are checked. If the rule is validated, the configured rules will become effective and override the existing configuration of the Intelli code.

Rules are sorted by creation date by default.

## Constraints

-   It is possible that rules override each other. If two rules are satisfied, the rule that is created later will override the previous one.

-   Apart from the creation order, rules do not have any priority.

-   Rules can have multiple conditions for product rate plans and custom attributes, but the override action can take place only once when the rule becomes effective.

-   The following conditions must be met for a rule to take effect:

    -   At least one rate plan condition is satisfied.

    -   All custom attributes conditions are satisfied.

-   An Intelli code returns only one discount rate plan.
