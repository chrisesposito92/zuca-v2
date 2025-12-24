---
title: "Get started with Usage"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/get-started-with-usage"
product: "zuora-billing"
scraped_at: "2025-12-24T08:28:09.065Z"
---

# Get started with Usage

Learn how to view, retrieve, rate, and manage usage data in Zuora Billing, including handling recurring charges and customizing fields.

## View usage data

When you click Usage from Billing Operations, Zuora Billing displays a list of all usage imported into Zuora Billing over time. This list can be sorted by its column headers.

## Retrieve billed usage records

When usage data is billed, Zuora stores the usage, associated invoice item, and billing period information in the Processed Usage object. You can retrieve the billed usage records by querying the Processed Usage object in Data Query or Data Source Export.

## Rate aggregated or individual usage

Note: This feature is in the Early Adopter phase. If you want to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com) .

Zuora allows you to rate (calculate charges) based on the total usage for a particular type of charge (for example, the total call minutes for a month) or on individual usage records (for example, a separate charge for each call). Rating aggregated usage, the default approach, is simpler and works best for most applications, but rating individual charges allows you to list each usage record and its charge on the invoice, which is preferable for things like traditional long-distance billing.

## Roll up child usage

Note:

If you want to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com) .

To have usages rolled up to a parent account, you must have a subscription at the parent level with a unit of measure that matches the UOM on the usage record that is imported to the child account.

You can import usage with the same UOM to any number of child entities, and all of the usages will roll up to the parent and be on the same invoice. The usages will still be separate line items on the invoice, and you can customize the invoice template to include the name of the child entity the usage is associated with on each line item.

## Bill recurring charges now and bill usage later

When generating an invoice for your recurring charges, you can filter out Usage in the bill run (under Filter Charges ).

By unchecking the box for Usage , you can exclude usage charges from being included in this bill run. The usage can be billed at a later time in a subsequent bill run.

## Custom fields

After your usage has been processed, all non-custom fields are locked and cannot be changed. However, custom fields can be changed to allow further business processes.

If you are using the following charge models and do not want custom fields to change after your usage has been processed, contact [Zuora Global Support](http://support.zuora.com) :

-   High Water Mark Pricing
-   Pre-Rated Pricing
-   Multi-Attribute Pricing
