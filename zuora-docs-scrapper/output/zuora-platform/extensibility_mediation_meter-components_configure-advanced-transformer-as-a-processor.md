---
title: "Configure Advanced Transformer as a processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-advanced-transformer-as-a-processor"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:44.465Z"
---

# Configure Advanced Transformer as a processor

Add an advanced transformer as a processor and use that to include code to perform custom transform functions on event data.

1.  Navigate to
2.  Create a Custom meter.
3.  Select Advanced Transformer as the processor. The Advanced Transformer settings page is displayed.

    ![Advanced transformer settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ed899216-8920-42d0-bffe-1f532b541a00?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVkODk5MjE2LTg5MjAtNDJkMC1iZmZlLTFmNTMyYjU0MWEwMCIsImV4cCI6MTc3MTY5NjE3OCwianRpIjoiZjJhOTMyOTQ2MWUyNGI2OWE3NGIyOTQ4YTQzNzU3NjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.7eb-Q7BdDYh4Ng3yz-A_V7mudhc8k_ZsjajzHTFbaCE)

4.  Enter a name for the advanced transformer component.
5.  Select Javascript or Python as the language you will use to add your custom code. To use Python script, contact [Zuora Global Support](https://www.zuora.com/support-center/).
6.  Paste the custom code for the advanced transformer.
7.  Select the event definition based on your script data's output data fields.

    ![Output event definition](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e24d431e-be9b-461a-9bd0-aa1d9a807bd8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUyNGQ0MzFlLWJlOWItNDYxYS05YmQwLWFhMWQ5YTgwN2JkOCIsImV4cCI6MTc3MTY5NjE3OCwianRpIjoiZmUwZmE0MGMyOGQ0NGQ2Y2IwOGViYmZlMGZjNzMwYTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.JMEf5IkScLy3pl4DSzynzJjhRhmmBQ74wv8rwjkMclo)

8.  Click Save to save the advanced transformer processor settings.
