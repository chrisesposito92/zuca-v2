---
title: "Configure Map as a processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-map-as-a-processor"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:44.534Z"
---

# Configure Map as a processor

The Map processor in Zuora Mediation allows for the selective retention, renaming, dropping, or transformation of fields from usage events to normalize data formats and prepare fields for further processing.

The processor is commonly used to normalize data formats, reduce payload size, or prepare fields for downstream enrichment, filtering, or rating.

You can use the Map processor in the following instances:

-   To rename input fields to match your target schema.
-   To remove unnecessary or redundant fields.
-   To transform field values using simple JavaScript logic (e.g., uppercase conversion, numeric scaling).
-   To standardize incoming event structure before it reaches later pipeline steps.

1.  Navigate to
2.  Create a Custom meter.
3.  Select Map as the processor type.

    The settings page is displayed.

    ![Map processor settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/469580c1-1c8f-4057-8e7f-92d0315f80db?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ2OTU4MGMxLTFjOGYtNDA1Ny04ZTdmLTkyZDAzMTVmODBkYiIsImV4cCI6MTc3MTY5NjE3OSwianRpIjoiOGIwZDM1ZjVjM2JjNDczN2JmYzRkYjZlNWJmYzdmY2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.LgykYJr-4RyW2uGJS_zR0BDH00hG37kdNtz5Xn-j4vc)

4.  Enter a Name for the processor.
5.  In the Map Fields page, configure the field mappings.

    | Field | Description |
    | --- | --- |
    | Source Field | Specify the name of the field from the incoming event payload that you want to process.. |
    | Action | Select Keep to retain or Drop to remove the field. |
    | Target Field | Enter the name of the output field. Use this to rename the source field if needed. |
    | Transform Value | (Optional) Enable this option to apply transformation logic to the field’s value using JavaScript. |
    | Target Field Value | This field appears when Transform Value is enabled. Enter JavaScript code to modify the field value. You can also specify the data type (e.g., Text, Number ). Use value to reference the current field value. |

6.  Click Save.
