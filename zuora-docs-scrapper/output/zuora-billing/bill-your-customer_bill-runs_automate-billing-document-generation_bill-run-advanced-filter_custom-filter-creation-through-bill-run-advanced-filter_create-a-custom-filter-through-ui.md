---
title: "Create a custom filter through UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-run-advanced-filter/custom-filter-creation-through-bill-run-advanced-filter/create-a-custom-filter-through-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T08:26:05.633Z"
---

# Create a custom filter through UI

Learn how to create a custom filter in the billing system UI by navigating through menus, adding filters, and configuring conditions for bill runs.

To create a custom filter, complete the following steps:

1.  Navigate to in the navigation section and click New Scheduled Bill Run or New Bill Run.
2.  (Optional): Enter a name for the bill run.
3.  Select Advanced Filter. The Account Filter is added by default. To add more filters in your custom field, do one of the following:

    -   Click filters under the Quick Filters at the right. These filters are default filters.

    -   Click \+ Add Subscription Filter, \+ Add Rate Plan Charge Filter, or both. Then, click Use an existing filter at the left under Account Filter, Subscription Filter, or Rate Plan Charge Filter, and click in the search box to select an existing filter. These filters are previously saved. To replace a new filter, click Choose another filter.

    -   Click \+ Add Subscription Filter, \+ Add Rate Plan Charge Filter, or both buttons to create filters. Then, add condition groups, conditions, and fields from scratch.

        Note: The composite condition (including the conditions and condition groups) of each filter in your custom filter has AND logic between them.


4.  For the Account Filter, Subscription Filter, or Rate Plan Charge Filter, click \+ Add Condition or \+ Add Group.

    -   For a group, select the AND or OR operator and define multiple conditions.
    -   For a condition, select a standard or custom field of the Account, Subscription, or Rate Plan Charge object, select an operator, and specify the field value. The available operators (for example, "=" and ">") vary for different fields.
        -   For standard fields, see [Account Data Source](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/account-data-source), [Subscription Data Source](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/subscription-data-source), and [Rate Plan Charge Data Source](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/rate-plan-charge-data-source).

        -   For custom fields, see [Manage custom fields with the Object Manager](/zuora-platform/extensibility/custom-fields/custom-field-management-with-the-object-manager).

    -   For a group or condition, click the copy icon to duplicate a new one. Alternatively, you can click the delete icon to delete a group or condition, and then add a new one.

5.  (Optional) You can save each of the preceding filters for future use. Click Save filter as under Account Filter, Subscription Filter, or Rate Plan Charge Filter at the left, enter a filter name in the Save Filter dialogue that opens, and click Save.

    After creating the custom filter, continue to configure the Bill Run Dates or Schedule Dates to complete a bill run. See [Create bill runs](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation).

    Note:

    -   Each group is a condition group consisting maximum of 10 conditions. You can create a maximum of two layers of conditions or condition groups for each filter.

    -   Avoid using the AND operator incorrectly. See the [examples of incorrect use of the AND operator](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-run-advanced-filter/examples-of-incorrect-use-of-and-operator-for-condition-and-condition-groups).

    -   If you select a field but leave its value empty, the field with the empty value still forms a condition and becomes part of your custom filter. For example, for the condition CreatedById = " defined in the Subscription Filter section, subscriptions whose CreatedById field has an empty value will be picked up.

    -   When you use the '≠' operator in advanced bill run filters, the system automatically excludes objects such as accounts, subscriptions, and rate plan charges whose field values are null. If you want the bill run to pick up all accounts with a value assigned to this field (but not equal to 'CardUpdatePending'), and pick up all accounts with no value assigned to this field, add additional conditions in the filter. For example: `Batch = Batch5 AND (Experiment1 ≠ CardUpdatePending OR Experiment1 IS NULL)` In this filter, `Experiment1 IS``NULL`ensures that the bill run also includes accounts where the field value is not set (null).


    You can use the "Create a bill run" API operation to create a one-time custom filter. In other words, you cannot save the custom filter. If you want to save the custom filter for future use, you are recommended to create the custom filter in UI. For more information, see [Common use cases of Bill Run Advanced Filter](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-run-advanced-filter/common-use-cases-of-bill-run-advanced-filter).
