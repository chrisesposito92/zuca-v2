---
title: "Create custom fields"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-fields/custom-field-management-with-the-object-manager/create-custom-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:13.909Z"
---

# Create custom fields

Learn how to define a custom field for a standard object via the Object Manager

1.  Navigate to in the left navigation menu.
2.  Click the name of the object for which you want to create the custom field. The object detail page opens.
3.  In the Custom Fields tab, click the Create icon ![Create icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/30244a20-151c-4f5f-b60c-96d79c2aadd2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjMwMjQ0YTIwLTE1MWMtNGY1Zi1iNjBjLTk2ZDc5YzJhYWRkMiIsImV4cCI6MTc2NjY0MDA3MSwianRpIjoiNGFiNTNkNzg2MmI2NDE3NGIwOWQyYzEwOTAwMWMzMDUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.zThhTbEwa6fwAD8NsW-nNOK6XebC-Wpzw2igzzE-CJ4). The Add New Custom Field window opens.
4.  Enter the information of the custom field:

    -   Name: The custom field name displayed on UI.

    -   API Name: The API name of the custom field. The value must end with `__c` (two underscores and the letter "c").

    -   Description: (Optional) The description of the custom field.

    -   Detail: Specify field type and settings. For more information about supported field types, settings, and limitations, see [Custom field types](/zuora-platform/extensibility/custom-fields/custom-field-types) and [Custom field settings](/zuora-platform/extensibility/custom-fields/custom-field-settings).


5.  Click Save & Close to create the custom field and close the window. Alternatively, you can click Save & Add Another to create the custom field and add another one by repeating steps 4 and 5.

When custom fields are created, they are available in the corresponding object detail pages in the Zuora UI or through the respective API operations.

When Zuora creates a custom field, Zuora does not apply the default value to existing objects. This means that if you define a custom field, then immediately perform a ZOQL query such as `select BetaTester__c from Account`, the query will not return any values for `BetaTester__c`.

To apply the default value to an existing object, you must modify the object via the Zuora UI or the Zuora API.
