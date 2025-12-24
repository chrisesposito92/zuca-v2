---
title: "Create a report from saved data queries that use custom objects"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/use-reporting/create-custom-object-reports/create-a-report-from-saved-data-queries-that-use-custom-objects"
product: "zuora-platform"
scraped_at: "2025-12-24T18:42:00.889Z"
---

# Create a report from saved data queries that use custom objects

Learn how to create a report from saved data queries that use custom objects

You need to create and save a data query first, and then create a report from it.

To create and save a data query, perform this procedure.

1.  Navigate to Extension Studio > Data Query in the left navigation menu.
2.  Click Create New Data Query .
3.  Enter a SQL query into the text box on the Create Data Query page. Here is a query example of querying data from a custom object named “vehicle”: `SELECT brand__c, model__c FROM default__vehicle WHERE year__c >= 2021`
4.  (Optional) Set the query options. For more information about each query option, see [Create new data queries](/zuora-platform/data/data-query/use-data-query-through-user-interface/create-new-data-queries).
5.  Click Save Query.
6.  Specify the query name on the Save Query page.
7.  Click Save.
