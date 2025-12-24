---
title: "Overview of Multi-Org"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/overview-of-multi-org"
product: "zuora-platform"
scraped_at: "2025-12-24T05:18:28.260Z"
---

# Overview of Multi-Org

Zuora Multi-Org is designed to streamline revenue and financial operations, enabling rapid business expansion and integration of multiple organizational units under a single tenant.

As businesses grow and cater to global customers by expanding to new geographies, establishing joint ventures, or through mergers and acquisitions, the complexity of managing multiple revenue reporting across different org. units, streamlining operations to serve new customers, and handling multiple transactional and reporting currencies, also multiplies.

Additionally, business and transactional integrity, compliance, consumer data protection, and holistic security are an increasing concern for all businesses today.

Currently, Zuora offers two disparate solutions for Data Security and Data Segmentation, namely Multi-entity and Data Access Controls (DAC) for Enterprise needs. Despite having their strengths, they are inadequate to fulfill the complex customer requirements today.

Zuora Multi-Org is purpose-built to bridge this gap.

Zuora Multi-Org streamlines revenue and financial operations to enable rapid business expansion, easier implementation, and faster time to value. Zuora Multi-Org is also a multi-product solution integrating Zuora Billing & Zuora Revenue as an end-to-end solution.

Some of the key capabilities of Zuora Multi-Org include:

-   Managing all Org units under a single tenant as a hierarchy
-   Labeling and segmenting transactional and configuration data
-   Configuring selective user access to the data
-   Securely executing operational processes within the user scope of permissions
-   Enabling org unit independence processes

Zuora Multi-Org aims to help businesses overcome organizational, financial, product, and access control challenges and grow faster by onboarding new org units or merging existing org units with full operational readiness in a shorter time. Zuora Multi-Org will ensure complete business and transactional integrity, compliance, consumer data protection, and holistic security while enabling the onboarding of a new country or operationalizing a new acquisition in a few easy steps.

## Multi-Org user personas

Zuora Multi-Org is meant for centrally managed or independent per Org Unit Accounting or Finance teams, Product Catalog Maintainers, Product Managers, Pricing Decision Makers, Financial Controllers, Organization Hierarchy Admins and other IT personas responsible for operating Zuora and/or centrally managing users of Enterprise applications.

## How does Zuora Multi-Org work?

To understand how Zuora Multi-Org works, let uss consider the following example:

Acme Corp is a global company headquartered in Germany. They operate in two different regions viz. Western Europe and Central Europe, and further distributed into Spain, France, Germany, and Austria, each being an independent Org Unit.

![Mulit-Org hierarchy](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/998bfdf3-c967-4c56-8387-0a460b0eef7d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk5OGJmZGYzLWM5NjctNGM1Ni04Mzg3LTBhNDYwYjBlZWY3ZCIsImV4cCI6MTc2NjYzOTkwNiwianRpIjoiYjkzMTk0ODFhYTJkNDFmM2E3ODRhYjg0ZDk1MzE4NzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.1Is_BLlvM39_4MG8qohlxv_zuawpNzerSVcvBbPEXw4)

In this example, Acme Corp, the parent company, is the root of this organizational hierarchy and an Org Unit in and by itself. Each business unit defined under the parent is known as an Org Unit. This organizational hierarchy follows a parent-child relationship, wherein all the organizational units defined under the parent or root organization are children of the company. Businesses can transact at all levels of this organizational hierarchy. i.e., at the root level or at a branch or leaf level like Central Europe or Germany in the example above. An Org Unit can be set up as a transacting entity or exclusively as a reporting entity (does not have customer accounts and thereby transactions associated with it).

The above example illustrates one of the many ways in which you can structure your company’s organizational hierarchy.

## Multi-Org Object Model

The Multi-Org object model is a high-level view of how the key objects are related to each other and the Org Unit(s) within an organizational hierarchy.

![Multi-Org object model](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ae83338a-0354-4ecd-957d-39348dd8adce?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFlODMzMzhhLTAzNTQtNGVjZC05NTdkLTM5MzQ4ZGQ4YWRjZSIsImV4cCI6MTc2NjYzOTkwNiwianRpIjoiMTczMGQxZDc1ZmUzNDkxZmJiZDMzYTllOWE4YTZhNmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.AfB22nvUFhvKgHGPqbrURkUxSJLTWrFXwZvvSVsnvPE)

-   Users to Org unit - Many-to-Many
-   Org unit to Configuration Objects - Many-to-Many
-   Account to Org Unit - Many-to-One
