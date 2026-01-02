---
title: "Data Labeling"
url: "https://developer.zuora.com/v1-api-reference/api/tag/Data-Labeling/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:22:12.336Z"
---

# Data Labeling

The Data Labeling APIs help you to label your existing data with organization(s) in Zuora.

Once you turned on Multi Org feature, if you don't label your existing data, they are simply unlabeled, and unlabeled data can be accessed by all organizations in your tenant.

To limit the access of your existing data, you need to label them with organization(s) you defined in the organization hierarchy management setting page. Once labeled, the data can only be accessed by users who have been granted with the labeled organization(s).

Note that you have to enable the "Multi Org" feature before using the Data Labeling APIs.

### General guidelines

-   Firstly, create the org hierarchy and determine the data categorization strategy, for example, by currency, by region, by custom fields etc.

-   You have to migrate all customer accounts before labeling products in the product catalog

-   You can leave the users at the root, just so long as you understand that the user would have access to all the Org Units within the Multi-org enabled tenant.


### Order of object labeling

Except for `Account` and `Product`, there are no dependencies between objects, users can label them in parallel.

But please keep in mind that the data access control ensues from the object labeling. For example, if you label a scheduled `BillRun` with `US` org, when it's triggered next time, the bill run will only pick up customer accounts of the `US` org, not others.

Likewise, labeling a user will change the user's visible data scope, for example, an `EU` user won't be able to see `US` accounts anymore.

### Caveats⚠️

This API is primarily designed for data migration to assist in labeling existing datasets. It may also serve for data corrections, such as reassigning an account's organizational label, thereby transferring the account and its transaction data from one organization to another.

It's important to note that this process does not include business logic validation. Users should exercise caution and judgment when employing this API for data labeling tasks.
