---
title: "Create a function from scratch"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/function/function-management/create-a-function-from-scratch"
product: "zuora-platform"
scraped_at: "2025-12-24T05:22:01.760Z"
---

# Create a function from scratch

Learn how to create a function from scratch.

To create functions, you must have a basic understanding of JavaScript functions. For more information, see [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) in MDN Web Docs.

1.  Navigate to in the left navigation menu.
2.  Click Create Logic and then click Create from Blank.
3.  In the displayed Create New Logic dialog, complete the following information:

    -   Type: Select Function.

    -   Name: Enter the function name. The name must be unique across all custom logics.

    -   Object: Select the related object.

    -   Description: Enter the function description.


4.  Click Save And Continue. The function editor opens.
5.  Enter the JavaScript code of the function body. Note that Zuora provides the other parts of the function except the function body by default. See the following snippet as an example. It can be a validation or formula function. For more information, see [Function types](/zuora-platform/extensibility/custom-logic/function/function-overview), [Function format](/zuora-platform/extensibility/custom-logic/function/function-format), and [Use cases and code samples](/zuora-platform/extensibility/custom-logic/function/use-cases-and-code-samples/validation-function-use-cases).

    ((account) => { //Available by default … //Function body. Enter this part in the field })(account) //Available by default

6.  Optional: Test the function. For more information, see [Test a function](/zuora-platform/extensibility/custom-logic/function/function-management/test-a-function).
7.  If you want to activate the function, click Activate. Active functions are effective immediately, whereas draft functions are not. Note that only one active function is allowed for each object.
8.  Click Save.
