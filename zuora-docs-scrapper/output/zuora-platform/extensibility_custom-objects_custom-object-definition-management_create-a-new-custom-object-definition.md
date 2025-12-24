---
title: "Create a new custom object definition"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-objects/custom-object-definition-management/create-a-new-custom-object-definition"
product: "zuora-platform"
scraped_at: "2025-12-24T05:22:59.615Z"
---

# Create a new custom object definition

Learn how to create a new custom object definition via the Object Manager.

You should not store PCI, sensitive PII, or other regulated data in custom objects. See Responding to individual requests for access, correction, and deletion of data under applicable privacy laws for more information.

1.  Navigate to in the left navigation.
2.  Click Custom Object Actions in the upper right of the page, and then click Create New from the dropdown list.
3.  Fill in the information on the Custom Object page.

    -   The Name field is required.

    -   The API Name field is required.


4.  Switch the following toggles on or off to indicate whether to audit the creation or deletion of custom object records of this custom object definition. Note that you must enable the Custom Object Definition audit trail setting in your Zuora tenant before auditing custom object record creation or deletion. For more information, see Manage audit trail settings .

    -   Audit Create Record

    -   Audit Delete Record


5.  Click the create icon ![Create icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/30244a20-151c-4f5f-b60c-96d79c2aadd2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjMwMjQ0YTIwLTE1MWMtNGY1Zi1iNjBjLTk2ZDc5YzJhYWRkMiIsImV4cCI6MTc2NjY0MDE3NywianRpIjoiN2FhYTNhMGE5NjliNGZlNmE4MjM3MjkyMTc5ZTc5NDkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.HDBC0uLeQbZ9loadtKFl8zBI_AR66YthhyWJe17K1OM)to create a custom field.

    -   You must create at least one custom field for a new custom object.

    -   You can add at most 50 custom fields to a custom object.

    -   All custom fields in a custom object can be indexed.


6.  Input the information of the custom field on the Add New Custom Field page:

    -   Name: The custom field name displayed on UI.

    -   API Name: The API name of the custom field. The value must end with `__c` (two underscores and the letter "c") and cannot be edited once created.

    -   Description: (Optional) The description of the custom field.

    -   Detail: Specify field type and settings. For more information about supported field types, settings, and limitations, see [Custom field types](/zuora-platform/extensibility/custom-fields/custom-field-types) and [Custom field settings](/zuora-platform/extensibility/custom-fields/custom-field-settings).


7.  Click the Save and Add Another to save the custom field definition and immediately start creating a new custom field. Repeat until you input the information for the last new custom field. Click Save and Close to save the custom field definition and return to the new custom object page.
8.  Click Save on the new custom object page.
