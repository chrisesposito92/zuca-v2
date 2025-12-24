---
title: "Create a decision tree"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/decision-tree/create-a-decision-tree"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:48.712Z"
---

# Create a decision tree

Learn how to create a decision tree.

1.  Navigate to in the left navigation menu.
2.  Click Create Logic and then click Create from Blank.
3.  In the displayed Create New Logic dialog, complete the following information:

    -   Type: Select Decision Tree.

    -   Name: Enter the decision tree name. The name must be unique across all custom logics.

    -   Object: Select the related object.

    -   Effective Start Date: Specify the date and time when this decision tree becomes effective.

    -   Effective End Date: Specify the date and time when this decision tree becomes ineffective.

    -   Description: Enter the decision tree description.


4.  Click Create. The decision tree editor opens.
5.  Edit conditions and results in the if-then-else statements in the editor:
    1.  Select a field from the dropdown list. Available fields vary depending on the object you selected in step 3. For more information, see [Objects and fields supported by Custom Logic](/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic).
    2.  Specify the operator by clicking the operator icon ![operator icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/19292ffd-156a-487e-a4f6-5ac38bf74451?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE5MjkyZmZkLTE1NmEtNDg3ZS1hNGY2LTVhYzM4YmY3NDQ1MSIsImV4cCI6MTc2NjY0MDEwNywianRpIjoiMGU2MzNiYWUyOTFkNDk1Yzk2M2QzNGI4YWE2OTUyZjYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.VsptWY6p60W-cM6VcH8_IBd134kgUzX4o_IlHJsbSlk).
    3.  Specify the value in the value field.
    4.  (Optional) Add more rules by clicking \+ Rule or add groups by clicking \+ Group as needed.
6.  (Optional) Add more if-then-else statements as needed:
    1.  Click Add If to add an if-then statement.
    2.  Click Add Else to add an else statement. You can add at most one else statement in a decision tree.
    3.  Repeat step 5 to edit the conditions and results in the statements you added.
7.  Click Activate to create a decision tree and activate it immediately. Alternatively, click Save to create a draft decision tree.
