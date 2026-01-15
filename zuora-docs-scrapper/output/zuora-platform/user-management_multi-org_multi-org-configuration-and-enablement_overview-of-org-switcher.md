---
title: "Overview of Org Switcher"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-enablement/overview-of-org-switcher"
product: "zuora-platform"
scraped_at: "2026-01-15T22:00:12.251Z"
---

# Overview of Org Switcher

Learn how to transit users between org units without default inheritance using Org Context Switcher.

A user with access to multiple org units within the org hierarchy can switch between these org units. The Org Switcher at the top right-hand side of the screen allows the user to select one or more Org Units that they can access to ensure that their view matches the Org Units that the user has filtered via the Org Switcher.

The view and data will dynamically change based on the org unit(s) the user has filtered. Visibility and access to various Zuora components and data will be strictly confined to the org units a user has access to. There is no default inheritance to access the leaf-level orgs. even if the user has access to the preceding branch-level org unit.

![Multi-Org hierarchy](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/998bfdf3-c967-4c56-8387-0a460b0eef7d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk5OGJmZGYzLWM5NjctNGM1Ni04Mzg3LTBhNDYwYjBlZWY3ZCIsImV4cCI6MTc2ODYwMDgwOCwianRpIjoiYWZlZTYxNjgzODI2NDdkMWE2NDJmYzM0OWI0Mzg3NWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.Uj3tkeU4AlEHoA5xLwm3nifOtYqL7QY4smMnURD6GMU)

In our org hierarchy example, let us assume that Alice has access to the root org, Acme Corp.

Now, there is no default inheritance for Alice to be able to access the child org units of the Acme Corp (root). So, Alice can only see the data that belongs to Acme corp. and not any other org unit's data. Nor can she switch to another org unit, since she is not added as a user there. For Alice to be able to access the Western Europe or Austria org unit's data, her IT org admin will have to explicitly grant her access to each of these org units.
