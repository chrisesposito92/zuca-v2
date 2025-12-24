---
title: "Logic: JSON Transform"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-json-transform"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:37.232Z"
---

# Logic: JSON Transform

This reference describes the Logic:JSON Transform task.

The JSON transform task transforms JSON data in the data payload into an XML or CSV file, or a different JSON structure.

After the JSON transform task, the original data is kept in the data payload and the output data is added to the data payload. If the data is converted to a CSV file, the file is available for selection in subsequent tasks.

## Task settings

When creating a JSON transform task, you need to select a processor.

-   JSONata: Select this processor if you want to transform the JSON data into another JSON structure. With JSONata expressions, you can filter and aggregate data, and reformat data into any JSON structure. To learn more about the JSONata syntax and available functions, see [JSONata](http://docs.jsonata.org/overview.html).


If you select the JSONata processor, the transformed data will be appended to the JSONTransform array in the data payload by default. Each time the task is run, the array grows in size. If you want the transformed data to replace the data generated from the previous run of JSON transform tasks, select the Replace Payload option. You can modify the placement from the default JSONTransform to a different object.

-   Liquid: Select this processor if you want to use Liquid expression to transform your data.


If you want the transformed data to replace the data generated from the previous run of JSON transform tasks, select the Replace Payload option. You can modify the placement from the default JSONTransform to a different object.

-   XML: Select this processor if you want to transform the complete JSON data into an XML file.

-   CSV: Select this processor if you want to convert the JSON data into a CSV file. You need to specify the following settings.

    -   Filename: Enter the name for the CSV file.

    -   Liquid Input: Enter a Liquid expression to extract the data into a JSON array and then output to the CSV file. For example: {{Data.Account | to\_json}}

        Each object in the array will be converted to a row in the CSV file.

    -   CSV Headers Mapping: Enter the JSON code to establish a mapping between the object keys to the CSV headers. Ensure the keys are included in the Liquid Input expression. If this field is blank, the keys of the first object will be used as the CSV headers.


## Examples

If an upstream task exports data from Account, Subscription, and BillToContact, you can use a JSON transform task to reformat the results into a different JSON structure. The new structure creates a new object. The new object defines a few keys and uses the field values from the input JSON data as the values of the keys.

{ "AccountNumber": Account.Number "AccountBalance": Account.Balance "SubscriptionID": Subscription.Id "ContractEffectiveDate": Subscription.ContractEffectiveDate "AccountCountry": BillToContact.Country }

In the expression above, `AccountNumber` is a key of the new object, and `Account.Number` points to a value from the input JSON data.
