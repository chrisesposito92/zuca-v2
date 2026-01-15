---
title: "Export links"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-exports/export-links"
product: "zuora-platform"
scraped_at: "2026-01-15T22:02:50.317Z"
---

# Export links

Learn about the export links

You can access data exports from other parts of the Zuora user interface. For example, on the Customer Accounts page.

There will be one or more Export links on the right side of the page. For example, for Customer Accounts, the link is Export Customer Accounts. Click one of the available links. Depending on which page you are on, one or more files are exported as CSV files contained in zipped file format.

Note:

Some export links are available even if the Data Exports feature is not enabled in your tenant. See the table below for more information.

The following table provides a list of all the export links and types of data that you can export. For example, if you export customer accounts, Zuora exports three files: a file for contacts, a file for customer accounts, and a file for payment methods. All three files are contained within a zipped file.

| Objects | Export Link | Data Available from Export |
| --- | --- | --- |
| Customer Accounts | Export Customer Accounts | Contact, Customer Account, Payment Method |
| Invoice Adjustments | Export Invoice Adjustments . Does not depend on availability of the Data Exports feature. | Invoice Adjustments |
| Invoice Item Adjustments | Export Invoice Item Adjustments | Invoice Item Adjustments |
| Product | Export Product Catalog | Product, Product Rate Plan, Price |
| Product | more > Export this product . Does not depend on availability of the Data Exports feature. | Product |
| Subscriptions | Export Mass Order Entry . Does not depend on availability of the Data Exports feature.Export Subscriptions | Mass Order Entry (includes Subscriptions and Amendments data)SubscriptionsNote:The Export Mass Order Entry export timeout limit is 120s. Use the Subscription data source and related data sources as an alternative. |
| Subscriptions and Amendments | Export Orders | Orders (includes Subscriptions and Amendments) |
| Billing Runs | Export Bill Runs . Does not depend on availability of the Data Exports feature. | Bill Runs |
| Invoices | Export Invoices | Invoices |
| Payment Runs | Export Payment Runs . Does not depend on availability of the Data Exports feature. | Payment Runs |
| Refunds | Export Refunds . Does not depend on availability of the Data Exports feature. | Refunds |
| Credit Balance | Export Credit Balance Transactions . Does not depend on availability of the Data Exports feature. | Credit balance transactions |
| Credit Balance | Export Credit Balance Applied . Does not depend on availability of the Data Exports feature. | Applied credit balances |
| All User List CSV | Export User List | The following user data is included in this export:User IDUser NameFirst NameLast NameStatusWork EmailCreated OnZuora Billing RoleZuora Payments RoleZuora Commerce RoleZuora Platform RoleZuora Finance RoleLast Login |
