---
title: "Enable period open/close for individual organization"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-for-extended-zuora-modules_1/multi-org-in-zuora-revenue/enable-period-openclose-for-individual-organization"
product: "zuora-platform"
scraped_at: "2026-01-15T22:00:26.031Z"
---

# Enable period open/close for individual organization

Learn how to enable period open/close for individual organizations in Zuora Revenue by configuring the MAINTAIN\_OPEN\_PERIOD profile.

After multiple organizations are defined in Zuora Revenue, use the MAINTAIN\_OPEN\_PERIOD profile to control whether the accounting period is to be closed and opened based on the revenue book or based on the organization.

To open or close the accounting period based on the organization, complete the following steps to set the profile appropriately:

1.  Navigate to Setups > Application .
2.  Click the left pointing arrow to open the side menu and click Profiles .
3.  Search and locate the MAINTAIN\_OPEN\_PERIOD profile.
4.  Hover the mouse over the profile line and click the pencil icon .
5.  In the pop-up window, set the system level value of this profile to Org .
6.  Save the change and close the window.

Now, when a user wants to open or close an accounting period in Zuora Revenue, he or she can only do it for individual organizations one by one instead of the organizations all at once.
