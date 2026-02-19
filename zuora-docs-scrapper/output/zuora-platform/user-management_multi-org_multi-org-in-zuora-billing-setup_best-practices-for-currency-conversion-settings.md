---
title: "Best practices for currency conversion settings"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-in-zuora-billing-setup/best-practices-for-currency-conversion-settings"
product: "zuora-platform"
scraped_at: "2026-02-19T03:25:09.637Z"
---

# Best practices for currency conversion settings

This reference topic describes the best practices to configure currency conversion settings in a Multi-Org.

-   Currency Conversion Settings for the Parent Org Unit or the root organization should be configured and saved before setting up the same for any child Org Unit.

-   Setting up Currency Conversion for the Child Org Unit(s) before the Parent Org Unit will result in an error.

-   Using the Org switcher or the Company field in the Manage currency Conversion screen, Finance Admins can switch to the appropriate Child Org Unit, to make changes and save currency conversion settings for the specific Child Org Unit. The changes will only apply to the Child Org Unit that was selected from the Org Switcher.

-   The Reporting Currency and the Functional, also known as the Home Currency, are configured while setting up the tenant and Org Units in the Org Hierarchy Management respectively, and cannot be updated from the Manage Currency Conversion Settings page

-   The remaining settings such as the exchange rate provider, exchange rate date, and rounding mode can be set for the Parent Org Unit, and will automatically be inherited by the Child Org Units


-   Reports such as invoice records, journal runs, and trial balance runs will display the amounts in both reporting currency and functional currency.


Note: Reports such as invoice records, journal runs, and trial balance runs display amounts in both the reporting currency and the functional currency.
