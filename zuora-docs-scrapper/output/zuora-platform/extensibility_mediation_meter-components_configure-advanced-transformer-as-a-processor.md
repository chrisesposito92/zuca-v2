---
title: "Configure Advanced Transformer as a processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-advanced-transformer-as-a-processor"
product: "zuora-platform"
scraped_at: "2025-12-24T05:29:42.095Z"
---

# Configure Advanced Transformer as a processor

Add an advanced transformer as a processor to perform custom transform functions on event data.

You can add an advanced transformer as a processor and use that to include code to perform custom transform functions on the event data. To create a meter with an Advanced Transformer as the processor:

1.  Create a Custom Meter.
2.  Select Advanced Transformer as the processor. The Advanced Transformer settings page is displayed.

    ![Advanced transformer settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ed899216-8920-42d0-bffe-1f532b541a00?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVkODk5MjE2LTg5MjAtNDJkMC1iZmZlLTFmNTMyYjU0MWEwMCIsImV4cCI6MTc2NjY0MDU4MCwianRpIjoiZWFlYWZhNTY3Nzc5NDY1NmIzNWYwZmNjMDMzNzlhZWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.eCTwbbQiDLbPRpR-hkOlQ6JyNQBRk76zikAfXJ5NqCY)

3.  Enter a name for the advanced transformer component.
4.  Select Javascript or Python as the language you will use to add your custom code. To use Python script, contact [Zuora Support](https://www.zuora.com/support-center/).
5.  Paste the custom code for the advanced transformer.
6.  Select the event definition based on your script data's output data fields.

    ![Output event definition](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e24d431e-be9b-461a-9bd0-aa1d9a807bd8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUyNGQ0MzFlLWJlOWItNDYxYS05YmQwLWFhMWQ5YTgwN2JkOCIsImV4cCI6MTc2NjY0MDU4MCwianRpIjoiYTc5MWExODM0YTY1NGYwNGEwMTQ2YmM5YzVkMjI2MTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.jl8nghome_M7K7kppsXIFOlvD5sqF3XiYDxKBsagCN0)

7.  Click Save to save the advanced transformer processor settings.

The advanced transformer processor is configured for the meter.
