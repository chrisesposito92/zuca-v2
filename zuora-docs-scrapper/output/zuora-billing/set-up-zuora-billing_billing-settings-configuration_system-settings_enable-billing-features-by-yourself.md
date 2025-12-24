---
title: "Enable billing features by yourself"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/system-settings/enable-billing-features-by-yourself"
product: "zuora-billing"
scraped_at: "2025-12-24T05:03:55.295Z"
---

# Enable billing features by yourself

Learn how to enable billing features in Zuora by verifying user role permissions and managing feature settings.

To use the Feature Management setting, you must have the Manage Billing Settings permission enabled for your user role.

Follow these steps to verify if this permission is enabled for a specific user role:

1.  Log into your Zuora tenant as an administrator.
2.  Click the drop-down list next to your user name and select Administration.
3.  Click Manage User Roles.
4.  Select Billing from View Role List.
5.  Click View for the target user role such as Zuora Billing User.
6.  Scroll down to the Admin section to ensure that the Manage Billing Settings is selected.

To request enabling features from the Feature Management interface, perform the following steps:

1.  Click the drop-down next to your user name from the top right corner of the screen.
2.  Select Billing \> Manage Features .
3.  Select the feature name to adopt for testing and click Enable. Make sure that the feature dependencies are resolved.
4.  Click Enable Feature to activate the feature.

    Note:

    The Enable Feature option is unavailable when the feature is in the Unresolved status. Enable the feature dependencies from Feature Management for activation.

    You cannot undo a feature adoption from the self-service interface after enabling it. To disable the feature adoption, contact Zuora Global Support.
