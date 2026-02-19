---
title: "Mount  S3 Delta Lake to Redshift"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/mount-s3-delta-lake-to-redshift"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:49.073Z"
---

# Mount S3 Delta Lake to Redshift

Learn how to mount S3 Delta Lake to Redshift

Note:

Protocol MinReader Version: Athena requires delta lake tables compatible with Protocol MinReader Version 1.

1.  On the AWS Glue console, choose Crawlers in the navigation pane.
2.  Choose Create crawler.
3.  For Name, enter whatever, and choose Next.
4.  For Data source configuration, choose Not yet.
5.  For Data source, choose Add a data source.
6.  For Data source, select Delta Lake.
7.  For Include delta lake table paths, enter `s3://bucket-name/<configured_path>/<table_name>`
8.  Select Enable write manifest, then choose Add a Delta Lake data source. Choose Next.
9.  For IAM role, either select an existing role or create one with permissions to Glue and the bucket.
10.  For Target database, choose Add database. Then Create a database page is shown.
11.  For Name, enter whatever, then choose Create database. Then come back to the previous page. For Target database, click the reload button, and select the created database.
12.  For Frequency under Crawler schedule, choose double the frequency data is delivered. For example, for data arriving on hourly minute frequency, choose 30 minutes.
13.  Review your configuration, and choose Create crawler. You can trigger the crawler to run manually via the AWS Glue console, or through the SDK or AWS CLI using the StartCrawl API. You could also schedule a trigger via the AWS Glue console.
14.  Wait for the crawler to complete.
15.  Navigate to redshift and inspect the awsdatacatalog to find the newly created table.
