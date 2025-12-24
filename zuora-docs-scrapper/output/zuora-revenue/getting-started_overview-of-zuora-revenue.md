---
title: "Overview of Zuora Revenue"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/overview-of-zuora-revenue"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:22:24.008Z"
---

# Overview of Zuora Revenue

Zuora Revenue automates complex revenue recognition processes, providing real-time insights and reducing manual intervention. It supports various business models, ensuring compliance with U.S. GAAP and IFRS standards, and offers configurable policies to tailor revenue management to specific business needs.

Revenue management is complicated. As a business expands internationally, changes its order-to-cash process, or launches new products, the complexity of revenue recognition multiplies. Current revenue processes are often very manual, involving complicated spreadsheets or rigid ERP systems. Despite these challenges, the accuracy of revenue numbers is not something to take a risk on. That is why Zuora Revenue is built.

Zuora Revenue can provide you with real-time insights to instantly recognize, reconcile, and analyze revenue for subscriptions, products, and usage-based services and aims to help companies to reduce end-of-financial period crunch times.![Description of image](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/329ad210-e3ea-4691-853e-902af1931393?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjMyOWFkMjEwLWUzZWEtNDY5MS04NTNlLTkwMmFmMTkzMTM5MyIsImV4cCI6MTc2NjYzNjU0MSwianRpIjoiYjBhZTlmNmY4NDk0NDRhZjg3ZTA2ZGIzMDAxZTgxZjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.5sewsYOkVtfV2Fhz5pvVlfh0rccsC9PA-sk7heVs1tc)

## Product characteristics

Zuora Revenue, powered by RevPro is the world's leading revenue automation solution. Zuora Revenue enables you to streamline revenue recognition as your business grows and meets current and future U.S. GAAP, including the new ASC 606 and IFRS 15 revenue standards.

Zuora Revenue is designed to automate revenue recognition for any event and any business model. It has the following characteristics.

## Touchless revenue recognition

Unless there is an exception to handle, revenue recognition should be automated. That's why Zuora Revenue is designed to be flexible enough to understand any contract modifications and seamlessly apply tailored rules to recognize the revenue accurately. No manual intervention is needed.

## Configurable policies

Every rule and setting in Zuora Revenue is configurable. Zuora Revenue is designed to be the most configurable revenue solution in the market so that any business can tailor Zuora Revenue to its own revenue management policies.

Deliver the foundations

-   Revenue an deferred revenue
-   SSP calculations & allocations
-   Reports designed for the new revenue standards
-   Granular authorization controls
-   Multi-book accounting

Enable advanced use cases

-   Advanced contract modification framework
-   Advanced variable consideration analyzer
-   Advanced SSP Analyzer
-   Advanced calculations for COGS, sales commissions, rebates, and accruals

Highly configurable

-   Configure performance obligation groups
-   Configure contract modification rules
-   Configure accounting policies
-   Configure data augmentation
-   Configure data validation rules
-   Configure cost allocation rules
-   Configure audit trail settings
-   Configure period close settings
-   Configure UI layouts

## Technical overview

The following diagram provides a high-level technical overview of revenue recognition in Zuora Revenue.

-   In the top level of the diagram, the rectangles represent the external systems that have data exchanges with Zuora Revenue.
-   In the middle level, the polygons in dark blue highlight the five steps to perform revenue recognition based on ASC 606.
-   In the bottom level, the rectangles in light green represent the data processing steps that Zuora Revenue can automatically perform based on the given rules that are set up during Zuora Revenue implementation phase. ![Technical Overview Diagram](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/22c866bd-613f-428c-86d3-8eb983ae922b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjIyYzg2NmJkLTYxM2YtNDI4Yy04NmQzLThlYjk4M2FlOTIyYiIsImV4cCI6MTc2NjYzNjU0MSwianRpIjoiZWM1Mzg1NGZmMjQwNDZjYTk0YTY1ZmZmZjZlNTZjZjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9._tVnSH-ss4wmrX5xlKMhzmYyFyJBE7ziwPyV3q3WyTk)

During the Zuora Revenue implementation phase, the Zuora Revenue business requirement document (BRD) is created based on the accounting policies and business needs of your company. The Zuora Revenue BRD documents all of the required setups in Zuora Revenue, which can be categorized into the following types:

-   System-related configuration For example, accounting calendar, user roles and privileges, accounting types, and currencies.
-   Policy-related configuration For example, revenue contract grouping templates, POB assignment rules, contract modification rules, variable consideration rules, revenue events, revenue approvals, revenue holds, and forecast templates.

After the required setups are ready in Zuora Revenue, transaction data such as contracts and invoices can be manually uploaded to Zuora Revenue from the upstream systems by revenue users. After the input data are validated and loaded to Zuora Revenue staging tables, the data collection process begins in Zuora Revenue.

Based on the configured revenue contract grouping criteria, Zuora Revenue automatically groups the uploaded transaction lines into revenue contracts. Then, the configured POB assignment rules are applied to identify the performance obligations within each revenue contract. Before revenue allocation, Zuora Revenue can perform price adjustments for the revenue contract to determine the transaction price based on the configured variable consideration rules. Then, SSP values can be derived for all line items within the revenue contract that is eligible for allocation based on the assigned SSP hierarchy. Revenue allocation occurs based on the derived SSP values. After that, revenue can be released for each performance obligation either manually based on uploaded revenue events or automatically based on automated revenue actions.

In the end, accounting journal entries can be created by Zuora Revenue and then transferred to your general ledger. A variety of reports can also be provided by the Reporting capability, which can facilitate the process to close an accounting period.
