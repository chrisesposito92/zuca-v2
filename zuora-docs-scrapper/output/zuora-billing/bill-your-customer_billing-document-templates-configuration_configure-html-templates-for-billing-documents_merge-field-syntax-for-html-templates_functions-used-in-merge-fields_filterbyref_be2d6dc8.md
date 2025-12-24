---
title: "Enable optimization in templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/filterbyref-function/enable-optimization-in-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:45:55.083Z"
---

# Enable optimization in templates

Learn how to optimize templates by enabling filtering, using standalone custom objects, direct references, global variables, and single resolved values.

To take advantage of this optimization, ensure that your templates meet the following criteria:

1.  Enable filtering on fields - Set the Filterable column to True in the Platform > Objects screen for every field used in a FilterByRef expression. You can identify all the fields used by the FilterByRef function in the debug file:
    1.  Navigate to .
    2.  Select an existing template.
    3.  Click Preview.
    4.  Apply the required account details.
    5.  Click Debug. The debug file lists all fields.
    6.  Search the file to find the fields referenced by the FilterByRef filter.
2.  Use standalone custom objects - This optimization applies only when the custom object is not related to any standard object.
3.  Use direct references - The reference name must not depend on another standalone custom object. If it does, filtering reverts to client-side execution, reducing performance.
4.  Use global variables - Reference names must be defined globally, and not locally within a block.
5.  Use a single resolved value - The reference must evaluate to one unique value. Avoid using FilterByRef inside loops where the reference value changes per iteration.
