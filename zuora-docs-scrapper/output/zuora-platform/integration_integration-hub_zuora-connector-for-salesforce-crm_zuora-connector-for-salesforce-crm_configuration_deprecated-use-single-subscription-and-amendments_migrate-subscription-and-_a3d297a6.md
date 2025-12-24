---
title: "Migrate subscription and charge numbers"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/configuration/deprecated-use-single-subscription-and-amendments/migrate-subscription-and-charge-numbers"
product: "zuora-platform"
scraped_at: "2025-12-24T08:31:32.496Z"
---

# Migrate subscription and charge numbers

Migrate subscription and charge numbers in Salesforce using Developer Console and Apex classes.

To migrate subscription and charge numbers:

1.  In Salesforce, open Developer Console .
2.  In the Query Editor tab, type the below query and click Execute :

    SELECT count(id) FROM Zuora\_\_Subscription\_\_c WHERE Zuora\_\_SubscriptionNumber\_\_c=null

3.  If count(id) returns zero in the Query Result window, skip to Step #5.
4.  If count(id) returns a value greater than zero in the Query Result window, you need to migrate the data to fill into the value of these two fields by executing the apex class.
    1.  Navigate to .
    2.  In the Enter Apex Code window, type:

        Database.executeBatch(new Zuora.SubAndChargeNumberBatchMigration('Subscription\_\_c'));

    3.  Click Execute .
    4.  Recheck the job status with the query in Step #2.
5.  In the Query Editor tab, type the below query and click Execute :

    SELECT count(id) FROM Zuora\_\_SubscriptionProductCharge\_\_c WHERE Zuora\_\_SubscriptionChargeNumber\_\_c=null

6.  If the query times out before completing, run the query in Data Loader.
7.  If count(id) returns zero in the Query Result window, your upgrade is complete. Exit the process.
8.  If count(id) returns a value greater than zero in the Query Result window, you need to migrate the data to fill into the value of these two fields by executing the apex class.
    1.  Navigate to .
    2.  In the Enter Apex Code window, type:

        Database.executeBatch(new Zuora.SubAndChargeNumberBatchMigration('SubscriptionProductCharge\_\_c'));

    3.  Click Execute .
    4.  Recheck the job status with the query in Step #7.
9.  Monitor the Apex job status.
    1.  Navigate to .
    2.  Check the status of the jobs for the SubAndChargeNumberBatchMigration class.
    3.  The following error does not impact the data migration and can be ignored:

        First error: Insert failed. First exception on row 0; first error: FIELD\_INTEGRITY\_EXCEPTION, There is already an item in this list with the name COM8903\_OnlySubUpdate\_Charges: Name: \[Name\]
