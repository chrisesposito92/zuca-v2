---
title: "Configure Advanced Transformer as a processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-advanced-transformer-as-a-processor"
product: "zuora-platform"
scraped_at: "2026-02-19T03:26:53.223Z"
---

# Configure Advanced Transformer as a processor

Add an advanced transformer as a processor and use that to include code to perform custom transform functions on event data.

1.  Navigate to
2.  Create a Custom meter.
3.  Select Advanced Transformer as the processor. The Advanced Transformer settings page is displayed.

    ![Advanced transformer settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ed899216-8920-42d0-bffe-1f532b541a00?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVkODk5MjE2LTg5MjAtNDJkMC1iZmZlLTFmNTMyYjU0MWEwMCIsImV4cCI6MTc3MTU1ODAwOCwianRpIjoiY2U3YjI4MDNmMDg3NDg2Yjk2ZDY3OWFkMTlkZDJjZWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.gC4kDGUb6Bxo3zWvi83zwPmmLKXri5k999LnlkDcNVc)

4.  Enter a name for the advanced transformer component.
5.  Select Javascript or Python as the language you will use to add your custom code. To use Python script, contact [Zuora Global Support](https://www.zuora.com/support-center/).
6.  Paste the custom code for the advanced transformer.
7.  Select the event definition based on your script data's output data fields.

    ![Output event definition](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e24d431e-be9b-461a-9bd0-aa1d9a807bd8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUyNGQ0MzFlLWJlOWItNDYxYS05YmQwLWFhMWQ5YTgwN2JkOCIsImV4cCI6MTc3MTU1ODAwOCwianRpIjoiOWE0OTZiMDYyOGFiNGRhOWE3ODgxYzFkYWRjNjVmODAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.sn3A2I9m0a7Stxn3b-5hoKnfz0ouq5AQK0iRz9tqTx4)

8.  Click Save to save the advanced transformer processor settings.
