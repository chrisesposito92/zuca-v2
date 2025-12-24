---
title: "Included products section"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-view-through-the-zuora-ui/subscriptions-details-through-the-reinvented-ui/included-products-section"
product: "zuora-billing"
scraped_at: "2025-12-24T05:18:18.640Z"
---

# Included products section

This section provides options to view product information by product or trigger condition, and includes a table listing fields and descriptions for products.

In this section, you can select one of the following options in the VIEW BY drop-down list to view information about a product:

-   View by product (default): This view displays the last segment of each rate plan charge grouped by product.
-   View by trigger condition : Viewing your charges by triggering condition is helpful if, for example, you have a setup fee that is triggered immediately on the contract effective date as well as a recurring fee that is triggered off of the service activation date. See Triggering Conditions for more information.

If product rate plans are subscribed, Zuora displays product information in the Other Products section.

The table below lists fields and descriptions for products.

| Field | Description |
| --- | --- |
| Product | Product name. |
| Rate Plan | Name of the rate plan in the product. |
| Charge Name | Displays the name of the charge. You can click the view history icon  to view the charge history. Under the charge name, you can also click the View Unbilled Usage link to see more details. For more information, see Unbilled Usage . |
| Description | Displays the description of the charge. |
| Type | Displays the charge type. The charge type can be one-time, recurring, or usage-based charge . |
| Model | Displays the charge model . |
| UOM (Customize Units of Measure) | Displays the units to measure usage. Units of measure are configured in the web-based UI. Your values depend on your configuration in Z-Billing > Settings > Customize Unit of Measures. For more information, see Customize Units of Measures . |
| Unit Price | Displays the unit price for the charge. |
| Qty | Displays the quantity for the charge.Note:The value is always 1 for the Delivery Pricing charges. If all charges under a rate plan are the Delivery Pricing charges, this field is not available. |
| Total | Displays the total charge. |
| Revenue (Only displays for the view by product option) | Displays the charge revenue summary, for example, CRS-00000056 . If unavailable displays, you can click the question mark icon  next to unavailable to view the reasons. |
| Effective Period (Only displays for the view by product option) | Displays the effective period for the charge. |

You can also perform the following tasks:

-   Switch the SHOW REMOVED toggle to the right to display the removed products. The function is disabled by default.
-   Switch the Show Zero-Length Charge Info toggle to view details from the final segment, even if its duration is zero:
    -   Off (default): Shows values from the last active segment.
    -   On: Shows values from the last segment, even if the duration is zero.
-   You can search for a product or a charge in the search box next to the search icon ![Image: icon-search](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/024d91f0-7003-414f-b86c-6cf2b1cb885e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAyNGQ5MWYwLTcwMDMtNDE0Zi1iODZjLTZjZjJiMWNiODg1ZSIsImV4cCI6MTc2NjYzOTg5NiwianRpIjoiMDFiOTcxMzAyZGU1NGE5OGJhMmU2ODJkYjdkY2ZiZDMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.2NXqQv18y0MLhqF4bInWZ-R_RNkQVFlgIvCzVtTo1r8) .
