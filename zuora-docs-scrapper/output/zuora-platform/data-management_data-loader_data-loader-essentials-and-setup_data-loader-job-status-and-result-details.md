---
title: "Data Loader job status and result details"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/data-loader-job-status-and-result-details"
product: "zuora-platform"
scraped_at: "2026-01-15T21:56:45.651Z"
---

# Data Loader job status and result details

This topic allows you to view and manage Data Loader jobs, including downloading records and handling job failures.

The list view provides a summary of all the records, and click on a job to view its details. The job can be successful or unsuccessful. You can download the records in a CSV format by clicking on the download icon.

## Successful jobs

In the Data Loader list view, click the value in the Records Successful column to download a CSV file containing details of all successfully processed records, including the Ids of newly created records. Newly created and updated records are also available in the standard list views for their respective objects.

![Successful records](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/eaceae14-2d2a-412b-8964-17c04f729472?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVhY2VhZTE0LTJkMmEtNDEyYi04OTY0LTE3YzA0ZjcyOTQ3MiIsImV4cCI6MTc2ODYwMDYwMSwianRpIjoiMDE0YTFlN2JjNDNmNDlmOTgwZGY5Yzk5MzY3MmYzZjQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.8Ooq7Gz44TURv3_ayBdn4uduN6M44W-kKwvgrdlmfY0)

## Failed jobs

If the job has failures, click the Failed Records link in the Data Loader list view to open a preview of all records that were not processed successfully. The interface displays the failure reason for each record. You can correct issues using inline edits and resubmit the job directly from the interface, or click the download icon to export a CSV file containing the failed records and corresponding error details, resolve the issues offline, and then re-import the corrected records as needed.

![Failed records](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/717acc91-c97f-45d1-8e22-f09659c73788?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjcxN2FjYzkxLWM5N2YtNDVkMS04ZTIyLWYwOTY1OWM3Mzc4OCIsImV4cCI6MTc2ODYwMDYwMSwianRpIjoiOTA5OTFjNTc2Nzg3NGMzNGI5ZTg1ZTI4NThkYzdhYjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.YkQPn7LqUgJVbXjtUcGMD7AtBVIV5JweYq_dh-T7m2U)

## View details

The Job Details window provides a comprehensive view of each job and can be accessed by clicking the job name in the Data Loader list view. From this window, you can download files containing both successful and failed records. For successful records, the downloaded file includes the IDs of the newly created records.

![View job details](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3e98c54b-c953-46ae-a5a2-5fca46d1084e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNlOThjNTRiLWM5NTMtNDZhZS1hNWEyLTVmY2E0NmQxMDg0ZSIsImV4cCI6MTc2ODYwMDYwMSwianRpIjoiNWQyNTRlMWVjYzUyNDMwNWJmNTA4OTZmNjc4ZGU0ZWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.wvz_6vu8iWDQLe1K2OE9GK774aNtE-nNnOsT9Mkd8Uc)
