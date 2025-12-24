---
title: "Edit a notification"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/notifications/edit-a-notification"
product: "zuora-platform"
scraped_at: "2025-12-24T05:27:02.156Z"
---

# Edit a notification

Learn how to edit a notification definitions in the Zuora UI.

1.  Navigate to in the left navigation menu.
2.  Locate the notification you want to edit and click the Edit icon ![Edit icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6c4955ce-f413-4102-9a7d-92c4df7969a1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZjNDk1NWNlLWY0MTMtNDEwMi05YTdkLTkyYzRkZjc5NjlhMSIsImV4cCI6MTc2NjY0MDQyMCwianRpIjoiYjViZTA1OTYxNGM2NDk0OThmZGRlMTNkZWE1OTAxNDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.bQ6NHFfBzzwyizLMsHqIkqFhpb__vWPxw_O3tLRlWKA). The Edit Notification Definition page opens.
3.  Edit the following information in the Basic Information section:

    -   Name

    -   Description

    -   Communication Profiles: You can remove communication profiles with which the notification is associated and add new ones from the dropdown list.

    -   Active: Switch this toggle to activate or deactivate the notification. Zuora does not send notifications that are inactive.


4.  Edit system and custom filters:.
    1.  Edit system filters in the System Filter(s) section. Available system filters vary depending on the notification’s related event. Certain events do not have system filters.
    2.  Edit custom filters in the Custom Filter(s) section.
5.  Edit email and callout templates in the Delivery Options section. You can select one email template and multiple callout templates for the notification. If you want to deactivate email or callout for the notification, clear the checkbox to the left of the email or callout dropdown list.
6.  From the Associated Account list in the Additional Settings section, select the account on which the histories of this notification will be displayed. The associated account does not enforce where the merge fields come from.

    -   Account: the primary customer account related to the notification. It is also the default value.

    -   Parent Account: the parent account of the primary account referenced above. This option can take effect only if you have the [Customer Hierarchy](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/overview-of-customer-accounts) feature enabled.

    -   Subscription Owner Account: the account associated with the subscription. This option is available only if the base object of the related event of the notification is Order Action.


7.  Click Save.
