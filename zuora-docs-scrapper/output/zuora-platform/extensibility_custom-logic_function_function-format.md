---
title: "Function format"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/function/function-format"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:54.020Z"
---

# Function format

Introduces the format and best practices of using functions.

## Coding language

Custom logic functions are JavaScript (ES11) code snippets that perform data validations or calculations on specific object records. Each function is an Immediately Invoked Function Expression (IIFE) linking to a particular object.

For more information about JavaScript and JavaScript functions, see [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) in MDN Web Docs.

## Best practices for using functions

It is recommended to follow these best practices when using functions:

-   Use conditional statements in validation functions.

    You should use conditional statements (for example, `if-else` ) in validation functions to specify validation rules.

-   Return only fields that need to be updated in formula functions.

    It is best practice to return only the fields that need to be updated in formula functions. Zuora ignores the returned fields that are not defined on the source object.
