---
title: "Configure Upload File as a source"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-upload-file-as-a-source"
product: "zuora-platform"
scraped_at: "2025-12-24T05:29:24.102Z"
---

# Configure Upload File as a source

Learn how to configure a meter to use upload event or transaction data files, including guidelines for file formats and size limits.

You can upload the event or transaction data in the form of a file and use that as the source for a custom meter.

Mediation meter volume limits:

|  | API Sandbox | Zuora Developer Sandbox | Zuora Central Sandbox |
| --- | --- | --- | --- |
| Data File Upload | 10MB10K rowsPer file Size is not configurable.Rows are configurable.Format: CSV with header, ndjson, JSON, Parquet | 10MB10K rowsPer file Size is not configurable.Rows are configurable.Format: CSV with header, ndjson, JSON, Parquet | 20MB20K rowsPer file Size is not configurable.Rows are configurable.Format: CSV with header, ndjson, JSON, Parquet |
| The guidelines for Zuora Central Sandbox should be followed for your Production environment. |  |  |  |

To create a custom meter with Upload File as the source:

1.  Create a Custom Meter.
2.  Select Upload File as the source. The Upload File settings page is displayed. ![Upload File settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b678e686-0f58-4513-b751-e1f87a43962c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI2NzhlNjg2LTBmNTgtNDUxMy1iNzUxLWUxZjg3YTQzOTYyYyIsImV4cCI6MTc2NjY0MDU2MiwianRpIjoiZTM3NzE3M2MzOTUzNGY1Y2IxMmM2YWJkNzFmMjUyZjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.55ahjg2vgwfSzGHoPRmO9Ma2_HqjTncpt0_KVti64Ds)
3.  Enter a name for the Upload File.
4.  Click Select to select an Event Definition on the Upload File setting page. You can create or select an existing Event Definition or import an Event Definition.
5.  Click Save to save the Upload File source settings.

The meter is configured to use a file as the source.
