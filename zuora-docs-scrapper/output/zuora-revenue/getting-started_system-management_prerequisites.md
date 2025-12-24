---
title: "Set up data augmentation rule"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/prerequisites"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:23:22.745Z"
---

# Set up data augmentation rule

Learn how to set up data augmentation rules in Zuora Revenue to modify transaction source data before collection, including advanced, clear value, constant, formulae, and lookup rules.

The purpose of data augmentation is to modify the transaction source data before the data collection process starts in Zuora Revenue. Set up data augmentation rules according to your business needs. The following types of data augmentation rules can be defined in Zuora Revenue.

| Rule type | Description |
| --- | --- |
| Advanced Rule | This type of data augmentation rules updates the same target field to different values for different lines. You use a rule set to define the criteria to filter the lines and the corresponding target value. |
| Clear Value | This type of data augmentation rules clears an attribute value for the filtered lines. |
| Constant | This type of data augmentation rules updates an attribute value to a specified constant value for the filtered lines. |
| Formulae | This type of data augmentation rules updates an attribute value based on a formula for the filtered lines. |
| Lookup | This type of data augmentation rules updates an attribute value based on a lookup. For example, if a reference field is found to be the specified reference value, the system will update the target field to the specified target value. |

## Prerequisites

Before you set up the data augmentation rule, complete the following steps:

1.  Add RPRO\_RC\_TRNSLTR\_RULE\_PKG.trnsltr\_rule\_wrapper as a processor to use the defined data augmentation rule.
    1.  Navigate to Setups > Application.
    2.  Click to the left pointing arrow to open the side menu and then click Pre/Post Processor.
    3.  To add a processor, click the New Processor icon.
    4.  In the New Processor window, specify a unique procedure name, select RC\_COLLECT for the Object Type field.

        ![new-processor.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ea64c25e-7899-4727-8142-c014b8cd8d81?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVhNjRjMjVlLTc4OTktNDcyNy04MTQyLWMwMTRiOGNkOGQ4MSIsImV4cCI6MTc2NjYzNjYwMSwianRpIjoiMmFjZWU2NjZkZTUwNDMxNmJiODRlNmE5NzUwYzk4ZDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.rNMwkWxxK1mxr0nogV5CtVFPFSXomQYpC5O5Kh-PjkM)

    5.  Ensure the Enable switch is toggled to Yes and then click the save icon .
    6.  Click the Processor Mapping tab to add a procedure.
    7.  Click to add a row. Select Procedure for the Processor Type column, enter RPRO\_RC\_TRNSLTR\_RULE\_PKG.trnsltr\_rule\_wrapper in the Processor Object column and select Before Validate for the Stage Name column.

        ![processor-mapping.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/006ed368-6b08-433c-92dd-85ec561572a4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAwNmVkMzY4LTZiMDgtNDMzYy05MmRkLTg1ZWM1NjE1NzJhNCIsImV4cCI6MTc2NjYzNjYwMSwianRpIjoiMzE5YzVhZWIxZTMzNGJiODhkYWViNWJmNDNlMzk0NjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.vb5t622k38r4TPk3uDu-kG9OX8F2542RiPJOUO_4-hQ)

    8.  Click the Save icon and close the window.
2.  Enable the CUSTOM\_CODE\_ALLOWED profile.
    1.  Navigate to Setups > Application.
    2.  Click to open the side menu and then click Profiles.
    3.  Find the CUSTOM\_CODE\_ALLOWED profile and make sure the system-level value of this profile is Yes.
