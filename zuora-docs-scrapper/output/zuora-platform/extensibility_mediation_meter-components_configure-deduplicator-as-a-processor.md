---
title: "Configure Deduplicator as a processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-deduplicator-as-a-processor"
product: "zuora-platform"
scraped_at: "2025-12-24T05:29:37.088Z"
---

# Configure Deduplicator as a processor

Learn how to configure a deduplicator processor for a custom meter to eliminate duplicate event data.

You can configure a deduplicator processor for a custom meter to identify and remove duplicate event data. To create a meter with Deduplicator as the processor:

1.  Create a Custom Meter.
2.  Select Deduplicator as the processor. The Deduplicator settings page is displayed.

    ![Deduplicator processor settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a108a10d-a941-47cf-9793-4852a693d8bc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImExMDhhMTBkLWE5NDEtNDdjZi05NzkzLTQ4NTJhNjkzZDhiYyIsImV4cCI6MTc2NjY0MDU3NSwianRpIjoiOWIwNDEyOGQ1OGNjNDcyOGEzZDlmNDRlNzM1MmU2ZjQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.m3i60ZrS18XxAi1colyxDEZfaJ-ugcQN84Z69OGQIa8)

3.  Enter a name for the deduplicator component.
4.  Select the uniqueness criteria for the processor.
    1.  All Fields: You can select this option if you want to check all source fields and remove the records if any field is duplicated.
    2.  Specific Fields: You can select one or more fields to be checked and remove the records if any of those fields are duplicated.
5.  Click Save to save the deduplicator processor settings.

The deduplicator processor is configured for the meter.
