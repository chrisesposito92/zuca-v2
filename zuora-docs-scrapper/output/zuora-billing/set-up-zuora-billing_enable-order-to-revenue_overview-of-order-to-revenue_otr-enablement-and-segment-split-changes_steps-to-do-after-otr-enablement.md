---
title: "Steps to do after OTR enablement"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue/otr-enablement-and-segment-split-changes/steps-to-do-after-otr-enablement"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:29.588Z"
---

# Steps to do after OTR enablement

After enabling the Order to Revenue feature, ensure proper configuration and validation of billing and revenue settings, including user roles, field mappings, currency conversion, interface settings, revenue recognition policies, data backfill, and migration.

After enabling the Order to Revenue feature, you must check and, if necessary, perform the following tasks on your Billing tenant:

1.  Ensure your user role has the Manage OTR Settings permission enabled. For more information, see Billing Roles .
2.  Configure field mapping for custom fields. For more information, see Manage revenue fields mapping .
3.  Configure the mapping from your Billing tenant, entity, or organization to your revenue organization. One-to-one mapping, multi-entity to one mapping, and multi-org to one mapping are supported. For more information, see Manage Revenue organization mapping .
4.  Configure the following settings in Finance > Manage Currency Conversion . For more information, see Manage currency conversion and Currency Conversion Fields Added to the Export .

    -   Home currency

    -   Reporting currency

    -   Exchange rate for foreign currency conversion
        Note: If you use custom exchange rates, you must upload them to Zuora. Otherwise, billing transactions cannot be generated.


5.  Configure the interface settings for how you want to generate booking and billing transactions for discounts and pending subscriptions. For more information, see Configure interface settings .
6.  Configure the revenue recognition policy, so that when setting up a product rate plan charge, you can configure necessary revenue recognition fields. For more information, see Configure revenue recognition policy .
7.  Perform data backfill to update data in the Billing tenant with required revenue-related fields, including the following field types. For more information, see Perform data backfill .

    -   Accounting codes

    -   Exclusion fields and allocation flags

    -   Product attributes

    -   Custom fields


8.  Perform data migration to generate booking, billing, and revenue recognition events transactions for historical data in your Billing tenant. For more information, see Perform data migration .
9.  Use the following Data Query templates to validate the accuracy of the booking transactions and billing transactions generated in the preceding step:

    -   Booking Transaction Validation

    -   Billing Transaction Validation for Rate Plan Charge

    -   Billing Transaction Validation for OLI

    -   Billing Transaction Validation for Standalone Billing Document
