---
title: "Configure Amazon S3 as a target"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-amazon-s3-as-a-target"
product: "zuora-platform"
scraped_at: "2025-12-24T05:30:15.264Z"
---

# Configure Amazon S3 as a target

Learn how to configure a custom meter to use an Amazon S3 bucket as the target data store.

A custom meter can use an Amazon S3 bucket as the target data store. To create a meter with Amazon S3 as a target:

1.  Create a Custom Meter.
2.  Select Amazon S3 as the target. The Amazon S3 settings page is displayed. ![Amazon S3 target settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/50f57a50-5e05-44b5-9acf-59333d4a41f8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUwZjU3YTUwLTVlMDUtNDRiNS05YWNmLTU5MzMzZDRhNDFmOCIsImV4cCI6MTc2NjY0MDYxMywianRpIjoiODE0OTJiZjEyMWFjNDhlYzlkODM5MWQ4NGU3ZmU2ODciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.gT5cc2Q6LgYy2tXorn_x6wzlfGtuCa0WV9cNI21mpN8)
3.  Under the Amazon S3 Settings section, configure the following:

    | Setting | Configuration |
    | --- | --- |
    | Connection | Select S3 from the Connection drop-down list which includes the S3 bucket, credentials, and base path. To set up a connection, contact Zuora Support. |
    | Folder | Add the path to the main folder in the Folder field where you want to read data from Amazon S3. Note that when you add a folder to read data also grants read access to all the subfolders and files under the main folder. |
    | File Format | Click the File Format drop-down list to select a file format. Note that all of the files in the folder you chose must be in the same format, or the ingestion of a file in a different format will fail. |
    | Advanced Settings | Select the values for excluded fields, rolling file size, and partition by fields.Fields Excluded - Allows you select the fields to be excluded from the export file.Rolling File Size - Allows you to specify the export file size. The export file size cannot exceed this limitPartition By - Allows you to set the partition for the export data file into different folder groups by selecting one or more fields. When you select multiple fields, the first selected field is set as the first level folder, the second selected field as the second level folder and so on. |

4.  Click Save to save the Amazon S3 target settings.

The meter is configured to use an Amazon S3 bucket as the target.
