---
title: "Configure custom endpoints"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/subscriber-portal/custom-endpoints/configure-custom-endpoints"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:25.176Z"
---

# Configure custom endpoints

Learn how to configure custom endpoints in the Subscriber Portal app instance to manage API requests effectively.

Take the following steps to configure custom endpoints in the Subscriber Portal app instance:

1.  Launch the Subscriber Portal instance from your Zuora tenant, and click the ENDPOINTS tab.
2.  Click Create Endpoint .
3.  Enter the details of the endpoint.

    ![configure_custom_endpoint](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2d173abf-0a50-4422-9452-571281185623?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJkMTczYWJmLTBhNTAtNDQyMi05NDUyLTU3MTI4MTE4NTYyMyIsImV4cCI6MTc2NjY0MTcwMywianRpIjoiNDU3Y2UyMDE0ZjM3NGEzNTgxYTUwZjM4MmNkNTJmMTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.f0nngNNYysWG9Tku6QM7InIyjkyVDIPLkU--6lUk9mk)

    -   Endpoint Type - Select Get or Post .

    -   Name - The unique name for this endpoint. This is used to reference the endpoint. Note: Do not include any space in the name.

    -   URL - The URL of the endpoint to be requested.

    -   Headers - If you need to pass a value in the header of your request, enter the values here. The format of the header follows the standard JSON formatting. For example: { "Content-Type": "application/x-www-form-urlencoded" }

    -   Body - Enter the request body to pass values to downstream systems. The format of the body follows standard JSON format. For example: { "existingAccountNumber":"{{accountNumber}}", "orderDate": "{{orderDatePassedInName}}", "subscriptions": \[ { "customFields": { "CustomFieldOne\_\_c": "{{customFieldOneValue}}" }, "orderActions": \[ { "cancelSubscription": { "cancellationEffectiveDate": "{{cancellationEffectiveDate}}", "cancellationPolicy": "{{cancelVariableValue}}" }, "type": "{{type}}" } \], "subscriptionNumber": "{{subscriptionNumber}}" } \] } Taking the first key-value pair as an example, the value for the `existingAccountNumber` field is the retrieved value of a variable named `accountNumber` defined in the downstream system. For example, the endpoint https://rest.apisandbox.zuora.com/v1/orders allows a parameter called `accountNumber` to be passed in, so you should specify `{{accountNumber}}` as the value of the `existingAccountNumber` field so that it is passed into this endpoint. Variables are retrieved by using the curly braces .

    -   Variable List \- This field is used to define the fields sent to downstream systems. To improve security, only variables in the variable list will be passed to downstream systems. These variables are passed in from the caller. The names of these variables do not need to match the name of the argument to the downstream system. For example, to set the variables used in the previous sample, add the following snippet: { "body": { "Zuora-Account-Id":"", "existingAccountNumber":"", "orderDatePassedInName":"", "customFieldOneValue":"", "cancellationEffectiveDate":"", "cancelVariableValue": "", "type": "", "subscriptionNumber": "" } } In this example, `body` represents the level of the variable. The variables listed will be available to the request body. Additional values are `url` and `header` . Note: The Account ID and CRM ID of the active account do not need to be passed in. Subscriber Portal retrieves these values from the session to ensure that only data from an active account is retrieved. The field name used for these variables are `Zuora-Account-Id` and `Zuora-CRM-Id` .

    -   Auth Type - The available authentication types are None or Basic . The Basic authentication type accepts a username and password in the following format: { "username":"apiuser@system.com", "password":"pass123" } Note that passwords are automatically encrypted so the values cannot be viewed once saved.

    -   Check Login - This option enforces that end-users must log in with a valid session in order to execute this endpoint.

    -   Encrypt URL , Encrypt Headers , and Encrypt Body - Select these check boxes to encrypt the information so that the URL, header, and the body of the request cannot be viewed in the database nor the UI when configuring the endpoints.


4.  Click Create to create the endpoint.
