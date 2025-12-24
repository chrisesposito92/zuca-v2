---
title: "Add conditions and groups"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/condition-builder/add-conditions-and-groups"
product: "zuora-platform"
scraped_at: "2025-12-24T05:25:33.830Z"
---

# Add conditions and groups

Learn how to use condition builder to add conditions and groups for custom events or custom filters for notification definitions.

You can add conditions and groups only when creating or editing custom events or custom filters for notification definitions.

1.  Click \+ Add Condition to create a condition.
2.  Specify the following fields for the condition:

    -   Select a value from the Field list. Available values are as follows:

        -   Change Type: Indicates the base object change type. Available values are INSERT, UPDATE, and DELETE.

        -   Field name: Indicates the value of a base object field. For example, Amount or CreatedDate.

        -   Field name (Old): Indicates the value of a base object field before the change occurred. For example, Amount (Old) or CreatedDate (Old).

    -   Select a comparison operator from the Operator list. For more information, see [Available comparison operators](/zuora-platform/extensibility/events-and-notifications/condition-builder/available-comparison-operators).

    -   Specify a value for the Value field:

        -   If you want to specify a static value, such as a number or string, switch on the Static toggle.

        -   If you want to specify a base object field, switch off the Static toggle.


3.  Repeat steps 1 and 2 to create as many conditions as you need.
4.  If you have created more than one condition, select a logical operator from the dropdown list.
5.  Optional: Click \+ Add Group to create a group, and then repeat steps 1 to 4 to create conditions for the group.

To delete a condition, click the trash can icon ![Delete icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/27058e0f-c08d-4fed-a45b-366f7f3de8f3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI3MDU4ZTBmLWMwOGQtNGZlZC1hNDViLTM2NmY3ZjNkZThmMyIsImV4cCI6MTc2NjY0MDMzMSwianRpIjoiMzY3ZTk2MmI3ZDlkNDgwYTg2MGEyMjhmNTkwZjkzNTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.zniZMbU7SkMwitqsY-T4OtpEfJwpsBOrIz2YxT784TI) to the right of the condition.

To delete a group, you must delete every condition in the group. When you have deleted the last condition, the group will be deleted automatically.
