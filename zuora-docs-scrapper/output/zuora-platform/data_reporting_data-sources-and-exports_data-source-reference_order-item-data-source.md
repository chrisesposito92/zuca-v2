---
title: "Order Item data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/order-item-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:46:19.544Z"
---

# Order Item data source

Know about the Order Item data source

An order item is a sales item within an order in the context of the recurring subscription business model. It can be a unit of products or service, but defined by both quantity and term (the start and end dates).

For the one time and the recurring charge types, if an order action causes a quantity metric creation (when the delta quantity equals to or is greater than zero), an order item is created. The following order actions will create an order item for the one time and recurring charges. The other order actions will refer to an existing order item. Also, the Owner Transfer order action always creates an order item whose quantity field is zero.

-   Create Subscription

-   Terms and Conditions - Extend Term

-   Renewal

-   Update Product - Increase Quantity

-   Add product

-   Owner Transfer

-   Resume


For the usage charge type, if the order action causes a usage increase, an order item is created, and the quantity field of the order item is always set to zero. The following order actions will create an order item for the usage charges.

-   Create Subscription

-   Terms and Conditions - Extend Term

-   Renewal

-   Add product

-   Owner Transfer

-   Resume


Use this data source to report on the order items.

For example, let’s say that you create an order containing the following order actions:

-   Order Action 1: Add a rate plan with a recurring charge with the unit price being $2 per unit per month and the quantity being 0 units. The term starts on 1/1/2018 and ends on 12/31/2018.

-   Order Action 2: Update the product and increase the quantity to 15 units per month on 4/1/2018.

-   Order Action 3: Update the product and decrease the quantity to 12 units per month on 6/1/2018.


In this scenario, Zuora will create two order items for the order. An order item will only be created if the Quantity metric's amount equals to or greater than zero.

| Order action | Start date | End date | Quantity |
| --- | --- | --- | --- |
| Order Action 1 | 1/1/2018 | 12/31/2018 | 0 |
| Order Action 2 | 4/1/2018 | 12/31/2018 | 15 |

## Availability

The Order Item feature is only available to existing Orders customers who already have access to the feature.

The following objects and fields of the Order Metrics are end of support. Zuora no longer provides product support, and bug fixes or security issues are no longer addressed.

-   The Order ELP and Order Item objects
-   The "Generated Reason" and "Order Item ID" fields in the Order MRR, Order TCB, Order TCV, and Order Quantity objects

As of Zuora Billing Release 306, Order Metrics is no longer available. Zuora has updated the methodologies for calculating metrics in Orders. The new methodologies are reflected in the following Order Delta Metrics objects.

-   Order Delta Mrr
-   Order Delta Tcv
-   Order Delta Tcb

It is recommended that all customers use the new Order Delta Metrics. If you are an existing Order Metrics customer and want to migrate to Order Delta Metrics, submit a request at [Zuora Global Support](https://support.zuora.com/). Whereas new customers, and existing customers not currently on Order Metrics, will no longer have access to Order Metrics, existing customers currently using Order Metrics will continue to be supported.

If you are an existing Subscribe and Amend customer and want Order Delta Metrics only, you can turn on Orders Harmonization. Join the Orders Harmonization community group for more information. You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.

## Objects in data source

The following objects are available in the data source.

| Object | Description |
| --- | --- |
| Order Item | Created By ID - The Zuora user who created the order item.Created Date - The date when the order item was created.End Date - The order item's effective end date, aligned with the end date of an increased quantity order metrics (as a result of the Create Subscription, Renewal, Extend Term, Add Product, and Update Product order actions).ID - The ID of the order item.Quantity - The order item quantity. For the usage charge type, the value of this field is always zero. Also, the Owner Transfer order action always creates an order item whose Quantity field is zero.Start Date - The order item's effective start date, aligned with the start date of an increased quantity order metrics (as a result of the Create Subscription, Renewal, Extend Term, Add Product, and Update Product order actions).Updated By ID - The Zuora user who last updated the order item, now equals Created By ID.Updated Date - The date when the order item was last updated, now equals Created Date. |
| Amendment | The amendment that is tied to the rate plan, if applicable. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Order | The order you want to view the order action information for. |
| Order Action | The order action you want to get the TCB metrics for. |
| Product | The product information. |
| Product Rate Plan | The rate plan coming from the product catalog. |
| Product Rate Plan Charge | The product rate plan charge information coming from the product catalog. |
| Rate Plan | Refers to the rate plan or pricing plan information associated the subscription. |
| Rate Plan Charge | The charge information associated with the subscription. |
| Subscription | The status history information of a subscription. Contains the following fields:The subscription to which the rate plan is associated. Contains the following fields:Auto RenewCancelled DateContract Acceptance DateContract Effective DateCpq Bundle Json IDCreated By IDCreated DateCreator Account IDCreator Invoice Owner IDCurrent TermCurrent Term Period TypeIDInitial TermInitial Term Period TypeInvoice Owner IDInvoice SeparateNameNotesOpportunity Close DateOpportunity NameOriginal Created DateOriginal IDPrevious Subscription IDQuote Business TypeQuote NumberQuote TypeRenewal SettingRenewal TermRenewal Term Period TypeService Activation DateStatusSubscription End DateSubscription Start DateTerm End DateTerm Start DateTerm TypeUpdated By IDUpdated DateVersion |
