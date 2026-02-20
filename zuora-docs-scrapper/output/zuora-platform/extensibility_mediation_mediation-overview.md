---
title: "Mediation overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/mediation-overview"
product: "zuora-platform"
scraped_at: "2026-02-20T17:48:49.249Z"
---

# Mediation overview

Mediation simplifies the loading of service consumption events into Zuora by automating data processing steps, enabling effortless, reliable, and cost-effective consumption-based billing.

With Mediation, you can create Meters that automate a set of data processing steps that otherwise need to be performed manually and repetitively, resulting in metrics that can easily be rated and billed for. This documentation describes how to define events and run meters in Mediation.

Customers send millions of usage records monthly and align them all to Zuora IDs. Customers can only create usage by creating a usage record, and all such records are intended to be a billable event. Mediation allows customers to load data in their format that represents their service usage/events seamlessly into Zuora.

Note: Mediation is a paid feature. Contact your Zuora account team for assistance if you are interested in purchasing this feature.

Consumption-based billing depends on data about subscriber usage. To get the usage data into the billing system, you must extract, clean up, and load the data from the source system. This process is called Mediation. Mediation helps translate subscriber consumption data into records that Zuora can process and bill for. Mediation drives consumption-based billing adoption by making the ingestion of consumption data effortless, reliable, and cost-effective.

To load data into the Zuora system:

-   Submit the data in the prescribed format that transforms the data appropriately.
-   The data must use Zuora-recognized identifiers (either Number/Name or ID) for the account, subscription, or charge to ensure proper guidance (assignment of a usage record to charge; customers must properly attribute their usage data with Zuora identifiers).

## Access mediation

Mediation is placed in the left navigation panel in the Zuora UI.

![Mediation option in the Zuora UI](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1f0e152a-3e35-497e-aafe-8ea57e4e0d65?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFmMGUxNTJhLTNlMzUtNDk3ZS1hYWZlLThlYTU3ZTRlMGQ2NSIsImV4cCI6MTc3MTY5NjEyMCwianRpIjoiM2QwODU5MmU4YzhjNGU1NjhkNmM0ZGZhOTc1MjU1ZjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.-IIR9ob1krVfKCJmIyY4QEFtIDeQSyGjN36GB5QjUG0)

## Mediation user personas

-   Buyer - such as CTO (Chief Technology Officer)
-   User (UI and API) - such as Developer / Integrator, IT Analyst / Admin

## Prerequisites

The tenant admin needs to assign mediation access permissions to users who need to access this feature.

After you are assigned the mediation permission, you should see the Mediation section in the left navigation in the Zuora UI.
