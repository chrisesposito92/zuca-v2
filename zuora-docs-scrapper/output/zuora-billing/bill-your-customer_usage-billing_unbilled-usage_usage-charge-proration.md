---
title: "Usage charge proration"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/unbilled-usage/usage-charge-proration"
product: "zuora-billing"
scraped_at: "2025-12-24T08:28:54.973Z"
---

# Usage charge proration

The Proration field in a product rate plan charge allows for specific charge proration behavior, offering options like No Proration and Time-Based proration, which calculates charges based on actual days in a billing period.

The Proration field on a product rate plan charge enables you to select the proration behavior for a specific charge instead of using the tenant-level proration logic configured in the billing setting. You can have different proration behaviors for different charges.

Note: To apply the charge level proration option for a usage charge, you need to first turn on the Charge Level Proration feature from the self-service interface. You also need to enable the Unbilled Usage feature to use the charge-level proration for usage charges. Unbilled Usage is part of the Advanced Consumption Billing feature. You need to purchase the feature to use it. Contact your Zuora account team for assistance.

The default tenant setting does not prorate usage charges, but this new field has a new value, Timebased, that allows a usage charge to prorate based on the actual number of days.

![Proration setting](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6bee59d9-bb72-45b1-aacb-ffb4722e2add?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZiZWU1OWQ5LWJiNzItNDViMS1hYWNiLWZmYjQ3MjJlMmFkZCIsImV4cCI6MTc2NjY1MTMzMiwianRpIjoiZjAwZjRmZGIzNTEwNGEzZWJkZDE1MjI4MWJlMjM4ZmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9._IO00eEgbB56kiTyGOrh6gnQJPZvu7y_J6GG6QL_d-Y)

The Proration setting under the usage charge billing and frequency provides the following options:

-   NoProration - This is a default current system behavior for a usage charge.
-   TimeBased - This will prorate the usage charge amount using the actual number of days if the billing period is a partial period.

## Example

Consider the following parameters for a monthly billing period:

-   The cost per unit charge model is `$1`
-   Bill Cycle Day (BCD) = 1
-   Charge start date = January 15, 2023
-   Charge end date = January 31, 2023
-   Total number of days in January = 31
-   Total usage amount for January = `31 * $1 = $31`
-   Number of prorated days in January = 17

In such a case, the prorated amount is calculated as Total amount for the full month \* (prorated days/total number of days for the full month): `$31 * (17/31) = $17`
