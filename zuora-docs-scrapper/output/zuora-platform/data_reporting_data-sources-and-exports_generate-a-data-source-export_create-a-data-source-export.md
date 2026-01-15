---
title: "Create a data source export"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/generate-a-data-source-export/create-a-data-source-export"
product: "zuora-platform"
scraped_at: "2026-01-15T22:02:34.191Z"
---

# Create a data source export

Learn how to create a data source export

1.  Navigate to Reporting > Data Sources.
2.  Select a data source in the Data Source drop-down. In each data source, the base object is only joined to objects that are its parent in the [Zuora business object model](/basics/about-zuora/zuora-business-object-model). This means that if you want to export subscriptions with charges, you should select Rate Plan Charge as the data source. See [Data Source Reference](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference) for a list of available data sources.
3.  Select the base object fields to export then select the related object fields to export.
4.  Specify any filters to apply.
5.  Specify the time frame.
6.  Select the format and source of the exported data:

    -   File Format:

        -   CSV: exports a `.csv` file.

        -   CSV ZIP: exports a zipped `.csv` file.

        -   Excel (.xlsx): exports a `.xlsx` file.

    -   CSV Encoding: This field is available only if you select CSV or CSV ZIP as the file format.

        -   UTF8

        -   UTF8 with BOM: includes a byte order mark (BOM) at the beginning of the exported data. Select this type if you plan to open the exported file with Excel.

    -   Source Data: Select the source of the exported data.

        -   LIVE: Zuora transactional database, which is updated in near real-time.


7.  Click export.

    For example:

    ![Data source export](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e38568ce-8209-48cb-907d-68571724e5e6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUzODU2OGNlLTgyMDktNDhjYi05MDdkLTY4NTcxNzI0ZTVlNiIsImV4cCI6MTc2ODYwMDk0OCwianRpIjoiYTczZDc3ZTkxMWUwNDQ3MGJmNWNmZTcyZjgzMzRjMWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.1FjthdtT3YdUudwmxdXqLQkpiPUVmII5147KIRNa7Wc)

    Zuora displays the status of the data source export. For example:

    ![Data source export results](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5e5dc0f8-dbcb-4d3c-81f5-95c986ae08e1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjVlNWRjMGY4LWRiY2ItNGQzYy04MWY1LTk1Yzk4NmFlMDhlMSIsImV4cCI6MTc2ODYwMDk0OCwianRpIjoiOWZkYWE2ZmY2MGI3NDFjY2I5NGZmZGUxYjQ0MDJlOWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.wG8Q8DO-ZiPJLD6NTLmnHQYspGit7kCEr6hiGvbGcSk)

    To update the status of the data source export, click Refresh. When the status is Completed, you can download the exported data by clicking the name of the file.

    If you cannot download data source export result files, it is possible that the Enable DataSource Exports Reporting permission is disabled for your user role. Contact your Zuora administrator and ask for enabling this permission.

    Note:

    The result files of data source exports are available for download for 7 days. Data source export result files older than 7 days are automatically purged from the system.

    Data source export jobs that were created 90 days ago are permanently deleted. You cannot query such jobs through API or UI.
