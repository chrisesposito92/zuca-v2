---
title: "Configure Upload File as a source"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-upload-file-as-a-source"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:28.586Z"
---

# Configure Upload File as a source

Learn how to configure a meter to use upload event or transaction data files, including guidelines for file formats and size limits.

You can upload the event or transaction data in the form of a file and use that as the source for a custom meter.

Mediation meter volume limits:

|  | API Sandbox | Zuora Developer Sandbox | Zuora Central Sandbox |
| --- | --- | --- | --- |
| Data File Upload | 10MB10K rowsPer file Size is not configurable.Rows are configurable.Format: CSV with header, ndjson, JSON, Parquet | 10MB10K rowsPer file Size is not configurable.Rows are configurable.Format: CSV with header, ndjson, JSON, Parquet | 20MB20K rowsPer file Size is not configurable.Rows are configurable.Format: CSV with header, ndjson, JSON, Parquet |
| The guidelines for Zuora Central Sandbox should be followed for your Production environment. |  |  |  |

1.  Navigate to
2.  Create a Custom meter.
3.  Select Upload File as the source. The Upload File settings page is displayed. ![Upload File settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b678e686-0f58-4513-b751-e1f87a43962c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI2NzhlNjg2LTBmNTgtNDUxMy1iNzUxLWUxZjg3YTQzOTYyYyIsImV4cCI6MTc3MTY5NjE2MiwianRpIjoiYTk5NTBlOGJmNzA5NDJkY2E3ZGI0ZWY4YmE5MjM4NzQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Qd0-oAdvo5myuSQ_MFvWHMmZv3SadJvy2khMG92nNK4)
4.  Enter a name for the Upload File.
5.  Click Select to select an Event Definition on the Upload File setting page. You can create or select an existing Event Definition or import an Event Definition.
6.  Click Save to save the Upload File source settings.
