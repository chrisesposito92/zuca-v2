---
title: "Configure Deduplicator as a processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/deduplicator-processor/configure-deduplicator-as-a-processor"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:27.973Z"
---

# Configure Deduplicator as a processor

Use the Deduplicator processor to prevent duplicate event data from being processed in your Mediation pipeline.

1.  Navigate to
2.  Create a Custom meter.
3.  Select Deduplicator as the processor. The Deduplicator settings page is displayed.

    ![Deduplicator processor settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a108a10d-a941-47cf-9793-4852a693d8bc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImExMDhhMTBkLWE5NDEtNDdjZi05NzkzLTQ4NTJhNjkzZDhiYyIsImV4cCI6MTc3MTY5NjE2MSwianRpIjoiYjQxMWRhYzZhZjJlNDRlNWE4ZDM1ODc1Y2JmN2Y5MGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.LeTWY1cpf8OWv6H2Ci1kPYR1dQVciohMjfRjCa5Xye0)

4.  In Name, enter a descriptive name for the Deduplicator component.

    The Operator ID is a system‑generated, non-editable identifier for this operator, used in audit and API integrations.

5.  In Uniqueness Criteria, choose one of the following options:
    1.  All Fields: You can select this option if you want to check all source fields and remove the records if any field is duplicated.
    2.  Specific Fields: You can select one or more fields to be checked and remove the records if any of those fields are duplicated. If you select Specific Fields, choose the fields that you want the Deduplicator to use.
6.  Click Save to save the deduplicator processor settings.
