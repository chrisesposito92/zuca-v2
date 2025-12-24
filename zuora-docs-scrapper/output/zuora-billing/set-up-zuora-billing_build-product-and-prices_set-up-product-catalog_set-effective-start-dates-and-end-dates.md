---
title: "Create a product rate plan"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/set-effective-start-dates-and-end-dates"
product: "zuora-billing"
scraped_at: "2025-12-24T04:48:00.350Z"
---

# Create a product rate plan

Create rate plans and charges for products in your catalog to manage billing cycles and pricing effectively.

After the product is added to your product catalog, you can create rate plans and rate plan charges for the product.

Complete the following steps to create a product rate plan for a product. You can create as many rate plans as you want for each product.

1.  Navigate to in the left navigation bar.
2.  Click the product name for which you want to add a rate plan. The Product Details page opens.
3.  In the Rate Plans section, click Add Rate Plan , and specify the following fields for the rate plan:

    | Field | Description |
    | --- | --- |
    | Name | Enter a name for the new rate plan. Use rate plan names to dictate how frequently you charge. The recurring period is usually included in a product rate plan name, such as Ultimate Screenshot Software Monthly or Ultimate Screenshot Software Yearly. |
    | Grade | Note:This field is in the Early Availability phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at Zuora Global Support .The grade that is assigned for the product rate plan. The value of this field must be a positive integer. The greater the value, the higher the grade.A product rate plan to be added to a Grading catalog group must have one grade. You can specify a grade for a product rate plan in this request or update the product rate plan individually.The difference between grade values of two product rate plans indicates the sub-type (for example, upgrade) for the change plan subscription amendment or change plan order action. For more information, see Update a subscription and Create an order. |
    | Description | Enter a description for the rate plan. This field is optional. |
    | Externally Managed Plan Ids | Specify the externally managed plan IDs for the rate plan. The external managed plan IDs are identifiers of a Zuora rate plan used by third-party app stores, such as Apple Store. After you've added the external managed plan IDs to a rate plan, you can use these external IDs to reference the Zuora rate plan.Note:Each externally managed plan ID must be unique. Do not assign IDs that are already used by other rate plans. |
    | External Id Source System | Specify the ID of the external source system, for example, Apple. |
    | Effective Start Date | Select the date that your rate plan becomes available. This is also the day when you can add the rate plan to a subscription. The value is in MM/DD/YYYY format. For more information, see Set effective start dates and end dates . |
    | Effective End Date | Select the date that your rate plan expires and can no longer be added to a subscription. The value is in MM/DD/YYYY format. |

4.  Click Save to save the new rate plan.

## Set effective start dates and end dates

A rate plan's effective start and end dates must be within the effective period for the product. If a product has multiple rate plans, the different product rate plans can have different effective start dates and effective end dates. This gives you the flexibility to let one product rate plan expire without having to expire the product itself or expire other rate plans within that product. With this ability to let individual rate plans expire, you can set up rate plans for a promotional period and expire that rate plan after a day, a week, or any specific period of time.

Note:

To ensure that a rate plan does not expire prematurely, which will not allow the rate plan to be added to a subscription, you can enter an effective end date that is far in the future, for example, 01/01/2030.
