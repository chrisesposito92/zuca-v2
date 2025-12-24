---
title: "Usage"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/usage"
product: "zuora-platform"
scraped_at: "2025-12-24T05:44:37.606Z"
---

# Usage

Usage is the amount of resources a customer uses. You track the usage of metered resources, then charge based on the amount that your customers consume.

Usage is always billed in arrears. For example, you bill in November for usage consumed in October. You can bill usage on a recurring, monthly, quarterly, semi-annual, and annual basis.

Use the Usage object to import the quantity of units that customers use of a product, such as the number of page loads on a wiki. To load usage data, you send a create() call. If usage data isn't in an invoice yet, then you can modify usage data with an update() or delete() call.

You can send a maximum of 50 usage records in a single batch call. If you have a larger amount of usage data to upload, then consider creating a .csv file, then use the `Import` object instead of the Usage object.

## Supported calls

You can use this object with the following calls:

-   create()

-   delete()

-   query()

-   update()


## Walkthroughs and use cases

Here are some common ways to use this object:

-   Upload usage data of metered resources.

-   Change that usage data, including deleting it.

-   Query usage data in preparation for invoicing.

-   Update usage custom fields after usage has been processed.
