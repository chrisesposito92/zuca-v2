---
title: "Configure a streaming API as a source"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-a-streaming-api-as-a-source"
product: "zuora-platform"
scraped_at: "2025-12-24T05:29:14.084Z"
---

# Configure a streaming API as a source

Create meters using a streaming API as a source, requiring specific platform roles for access.

You can create meters that use a streaming API as a source.

To access the streaming API, you must have one of the following platform roles:

-   Standard User role
-   API user role with the Run Meters or Configure Meters and Events permission.

For more information, see User Roles.

|  | API Sandbox | Zuora Developer Sandbox | Zuora Central Sandbox |
| --- | --- | --- | --- |
| Streaming API | 1MB payload size1K rows/ each API call600 API calls/ minFormat: MultiJson, Single JSON | 2M payload size5K rows/ each API call5,000 API calls/ minFormat: MultiJson, Single Json | 4M payload size10K rows/ each API call50,000 API calls/ minFormat: MultiJson, Single JSON |
| The guidelines for Zuora Central Sandbox should be followed for your Production environment. |  |  |  |

![Streaming API as a source](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e429ff13-aeb0-455b-b52a-ab0fd3d7ca58?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU0MjlmZjEzLWFlYjAtNDU1Yi1iNTJhLWFiMGZkM2Q3Y2E1OCIsImV4cCI6MTc2NjY0MDU1MiwianRpIjoiNWExMTllMDBjMTE5NDMwZWEyZmQwODVlMGFjYTBiYWMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.A59bXbyD1BglZqjLPXyyWyBJ4gLrlsB7KLlD5UxsNu8)

To create a meter with a Streaming API as the source:

1.  Create a Custom Meter.
2.  Select the Streaming API as the source. The Streaming API settings page is displayed.
3.  Enter a name for the streaming API.
4.  Click Select to select an Event Definition on the Streaming API setting page. You can create or select an existing Event Definition or import an Event Definition.
5.  Click Save to save the Streaming API source settings.

The Streaming API is configured as a source. The volume charge model with individual rate is not supported in streaming mode via the rating component.
