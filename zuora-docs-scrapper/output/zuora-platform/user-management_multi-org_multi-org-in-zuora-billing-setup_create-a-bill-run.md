---
title: "Create a bill run"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-in-zuora-billing-setup/create-a-bill-run"
product: "zuora-platform"
scraped_at: "2026-02-19T03:25:10.095Z"
---

# Create a bill run

Learn how to execute a bill run for single or multiple customer accounts, with access restricted by organizational units.

A user can execute a bill run for single or multiple customer accounts. The list of available customer accounts that the user can access will be restricted to the number of org unit (s) that the user has access to.

Let's consider an example.

A user belonging to the Germany org unit tries to execute a new bill run for multiple customer accounts. In this case, the customer accounts accessible to this user would only be those associated with the Germany org unit. Similarly, if the user tries to create a bill run for a single customer account, they can select a customer account from the list of customer accounts that were created for the Germany org unit only.

Note: You must have the Create Bill Runs permission to create bill runs. See [Billing Roles](/zuora-platform/security-and-identity/administrator-settings/user-roles/billing-roles) for more information.

You can create bill runs for single or multiple customer accounts.

The Org selection rules are similar to those specified above for Ad hoc bill run creation.

1.  Navigate to Billing > Bill Runs
2.  Click New Bill Run and complete the following steps:
3.  Select either Multiple Accounts or Single Account . You should keep the following points in mind while selecting the customer accounts for a Multi-Org business:

    -   If you select Multiple Accounts , the customer accounts visible to you will only be those belonging to the org unit you belong to.

    -   If you select Single Account , the list of customer accounts visible to you for selection will be those belonging to the same org unit that you have access to. i.e. The list of customer accounts displayed for the Single customer account bill run will be filtered by the org unit name in the Org Picker field.


4.  Specify the Bill run information mentioned in Steps 2 - 8 in [Create an ad hoc bill run](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation/create-an-ad-hoc-bill-run) to complete the bill run creation.
