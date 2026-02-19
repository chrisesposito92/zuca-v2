---
title: "Filter processor operators"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/filter-processor/filter-processor-operators"
product: "zuora-platform"
scraped_at: "2026-02-19T03:26:38.485Z"
---

# Filter processor operators

Supported operators for the filter processor.

The following operators are available when you define filter rules:

| Operator | Description |
| --- | --- |
| Greater Than | Passes records where the field value is greater than the specified numeric value. |
| Greater Than or Equals | Passes records where the field value is greater than or equal to the specified numeric value. |
| Less Than | Passes records where the field value is less than the specified numeric value. |
| Less Than or Equals | Passes records where the field value is less than or equal to the specified numeric value. |
| Equals | Passes records where the field value exactly matches the specified value.For string fields, the comparison is case-sensitive.For numeric fields, the comparison uses numeric equality. |
| Not Equals | Passes records where the field value does not exactly match the specified value.For string fields, the comparison is case-sensitive.For numeric fields, the comparison uses numeric inequality. |
| Contains | Passes records where the field value contains the specified substring. The comparison is case-sensitive. |
| Not Contains | Passes records where the field value does not contain the specified substring. The comparison is case-sensitive. |
| Starts With | Passes records where the field value begins with the specified substring. The comparison is case-sensitive. |
| Not Starts With | Passes records where the field value does not begin with the specified substring. The comparison is case-sensitive. |
| Ends With | Passes records where the field value ends with the specified substring. The comparison is case-sensitive. |
| Not Ends With | Passes records where the field value does not end with the specified substring. The comparison is case-sensitive. |
| In | Passes records where the field value is included in a comma-separated list of values that you provide. For example, US,CA,GB. |
| Not In | Passes records where the field value is not included in the comma-separated list of values. |
| Is blank | Passes records where the field value is empty or not set. |
| Is not blank | Passes records where the field has any non-blank value. |
