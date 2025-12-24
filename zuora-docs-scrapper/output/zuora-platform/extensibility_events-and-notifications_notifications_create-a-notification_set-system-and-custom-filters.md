---
title: "Set system and custom filters"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/notifications/create-a-notification/set-system-and-custom-filters"
product: "zuora-platform"
scraped_at: "2025-12-24T05:26:46.973Z"
---

# Set system and custom filters

Learn how to set system and custom filters when creating a notification definition.

Complete [Select a related event](/zuora-platform/extensibility/events-and-notifications/notifications/create-a-notification/select-a-related-event).

1.  If any system filters exist, set them in the System Filter(s) section. Available system filters vary depending on the related event you selected in Step 2: Select a related event. Certain events do not have system filters.
2.  Optional: Click Manage Custom Filter(s) and then edit custom filters in the Manage Custom Filter(s) dialog that pops up.
    1.  In the Custom Input Fields section, click \+ Add Input Field.
    2.  Specify the following information to define a custom input field. Skip this step if no custom input field is needed. You must include all custom input fields in filter conditions. See step d for more information.

        -   Name: the name of the custom input field. White space is not allowed.

        -   Display Name: the label of the custom input field displayed in the UI.

        -   Input Type: the value type of the custom input field.

        -   Description: the description of the custom input field.

        -   Options: the option values of the custom input field. Each option must be separated by a new line.


    3.  Repeat steps a and b to define more custom input fields as needed.
    4.  Define filter conditions in the Condition section by using one of the following methods. You must include all custom input fields in custom conditions. For example, `_SUBSCRIPTION_STATUS` is a custom input field in the following condition: `Subscription.Status == _SUBSCRIPTION_STATUS`.

        -   Define conditions with the condition builder. For more information, see [Condition builder overview](/zuora-platform/extensibility/events-and-notifications/condition-builder/condition-builder-overview).

        -   Switch on the Advanced (JEXL) toggle, and then specify an expression in Java EXpression Language (JEXL) in the Set Filter Conditions field. For more information, see [Trigger condition syntax](/zuora-platform/extensibility/events-and-notifications/custom-events/custom-event-overview#concept-ac-1314__trigger-condition-syntax).


    5.  Click Save.
3.  If any custom filters exist, set them in the Custom Filter(s) section.
4.  Click Next.

See [Set delivery options](/zuora-platform/extensibility/events-and-notifications/notifications/create-a-notification/set-delivery-options).
