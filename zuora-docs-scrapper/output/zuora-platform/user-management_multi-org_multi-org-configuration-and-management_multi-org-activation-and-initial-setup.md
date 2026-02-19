---
title: "Multi-Org activation and initial setup"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-management/multi-org-activation-and-initial-setup"
product: "zuora-platform"
scraped_at: "2026-02-19T03:24:55.510Z"
---

# Multi-Org activation and initial setup

Learn how to activate Zuora Multi-Org for new or existing tenants.

To get started with Multi-Org, the first step is to activate Zuora Multi-Org for your new tenant or an existing one.

## Prerequisites

-   Enable [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) , Orders, and [Orders Harmonization](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization) settings.

-   When the Enhanced OTR feature is enabled, accounting periods cannot be configured at the org level in Zuora Revenue. In integrated Zuora Revenue environments, accounting periods must be consistent across all org units.


## Activate Zuora Multi-Org for an existing tenant

For more information, refer to the [Single Tenant upgrade scenario](/zuora-platform/user-management/multi-org/multi-org-configuration-and-management/multi-org-upgrade-models/upgrade-single-tenant-to-zuora-multi-org) for more details.

## Access to your SBX

Access your SBX using the activation email sent to you either by Zuora Support or the one initiated by your own Super Admin.

By default, you will be logged into the Org Unit that you have been granted access to. This may be at the branch level (for example, Central Europe in the Org Hierarchy depicted in the previous example) or the leaf Org Unit France. If you are a user at the branch level, then you will have a context switch to move between the parts of the Org Hierarchy that you have been assigned to and perform operations within the scope of the Org hierarchy.
