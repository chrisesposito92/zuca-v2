---
title: "Configure Amazon S3 as a source"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-amazon-s3-as-a-source"
product: "zuora-platform"
scraped_at: "2025-12-24T05:29:16.460Z"
---

# Configure Amazon S3 as a source

Learn how to configure a custom meter using an Amazon S3 bucket as the source for event data.

A custom meter can use the data from an Amazon S3 bucket as the source for event data. To create a meter with Amazon S3 as a source:

1.  Create a Custom Meter. For more information, see Create a new meter using custom method.
2.  Select Amazon S3 as the source. The Amazon S3 settings page is displayed. ![Amazon S3 source settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/204c9395-79a5-48e4-95ef-5a6169b1bb1c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjIwNGM5Mzk1LTc5YTUtNDhlNC05NWVmLTVhNjE2OWIxYmIxYyIsImV4cCI6MTc2NjY0MDU1NCwianRpIjoiYjQxZTQ2MTQ1MmJlNDU2YTkxZTU2MjFiNDNjZjg3MjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.UCIZ0xX72PpDdYxbVdQzu80jNYzP-D71MThi5FBTDbo)
3.  Click Select to select an Event Definition. You can create or select an existing Event Definition, or import an Event Definition.
4.  Under the Amazon S3 Settings section, configure the following settings:

    | Setting | Configuration |
    | --- | --- |
    | Connection | Select S3 from the Connection drop-down list which includes the S3 bucket, credentials, and base path. To set up a connection, contact Zuora Support. |
    | Folder | Add the path to the main folder in the Folder field where you want to read data from Amazon S3. Note that when you add a folder to read data also grants read access to all the subfolders and files under the main folder. |
    | Incremental Mode | The Incremental Mode checkbox gives the following options:If checked, will allow mediation to monitor and process new files added to the Folder you specified in the S3 source. This means that the Meter will continue to function.If unchecked (the default), the meter will process the currently existing files in the folder, and the job will be completed once the process is complete. The Meter will operate in batch mode and must be triggered with each new file upload. |
    | File Format | Click the File Format drop-down list to select a file format. Note that all of the files in the folder you chose must be in the same format, or the ingestion of a file in a different format will fail. |

5.  Click Save to save the Amazon S3 source settings.

The meter is configured to us an Amazon S3 bucket as the source.
