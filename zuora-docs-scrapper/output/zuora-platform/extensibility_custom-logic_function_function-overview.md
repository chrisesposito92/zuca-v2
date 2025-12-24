---
title: "Function overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/function/function-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:51.467Z"
---

# Function overview

Functions are user-defined JavaScript code snippets to ensure data integrity and drive automation in your business use cases, such as validating data format or performing complex calculations.

Each function relates to a standard or custom object. When an object record is created or updated, Zuora automatically executes the associated function. You can leverage functions to validate data accuracy and consistency or add additional information based on the calculated results of the functions.

## Supported objects

For all supported objects and fields, see [Objects and fields supported by Custom Logic](/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic).

## Function types

Zuora supports the following function types:

-   Validation: This type of function takes an object record as input and returns a success indicator, which indicates whether the input field values conform to the validation criteria specified in the function. For more information, see [Format of validation functions](/zuora-platform/extensibility/custom-logic/function/function-format/format-of-validation-functions).

    -   If the function succeeds, Zuora will create or update the object record in your tenant.

    -   If the function fails, Zuora will display the user-defined error message and not create or update the object record in your tenant.

-   Formula: This type of function takes an object record as input, performs calculations on the field values, and returns a success indicator in addition to updated field values. For more information, see [Format of formula functions](/zuora-platform/extensibility/custom-logic/function/function-format/format-of-formula-functions).

    -   If the function succeeds, Zuora will create or update the object record in your tenant with the updated data.

    -   If the function fails, Zuora will display the user-defined error message and not create or update the object record in your tenant.


## What’s next

You can now start creating functions. For more information, see [Function management](/zuora-platform/extensibility/custom-logic/function/function-management/create-a-function-from-scratch).
