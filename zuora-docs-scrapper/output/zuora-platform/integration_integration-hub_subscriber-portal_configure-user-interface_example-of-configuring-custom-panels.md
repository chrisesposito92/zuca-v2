---
title: "Example of configuring custom panels"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/subscriber-portal/configure-user-interface/example-of-configuring-custom-panels"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:35.498Z"
---

# Example of configuring custom panels

Provides a step-by-step guide to configuring custom panels, allowing you to present company-specific data to your customers using endpoints, JavaScript, and HTML.

Custom panels enable you to present the data specific to your company to your customers. Take the following steps to configure custom panels:

1.  Configure Endpoints. Endpoints are queries against Zuora objects with an identifier that can be used when retrieving data from Zuora. ![Configure Endpoints](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2d173abf-0a50-4422-9452-571281185623?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJkMTczYWJmLTBhNTAtNDQyMi05NDUyLTU3MTI4MTE4NTYyMyIsImV4cCI6MTc2NjY0MTcxMywianRpIjoiYjVlMjkyNTA3M2M0NGU0Yjg0ZDUxNTU1M2I5MjhmOWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.g4Kv5VZhCU08pmoYWbHETkCdOEILqP8xabnS3IuyLvU)
2.  Use Javascript or Vue.js to make a call to Zuora using your endpoint, and perform the required business logic before presenting to users. ![Use JS example](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bb3870d6-a83c-491a-966f-405968e00eb0?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJiMzg3MGQ2LWE4M2MtNDkxYS05NjZmLTQwNTk2OGUwMGViMCIsImV4cCI6MTc2NjY0MTcxMywianRpIjoiNWFkZGE1ZDQ3Mzk0NGVjOGIwMjU0YTU3ZTUzYzI4ZTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.DCBnZAK637V5-82Nfnd-fYrSL-uUYVsdu-vio_dlUXE)
3.  Add HTML in the panel to control how the queried data is displayed to the user. This section can include new styles or inherit styles from the previously created CSS in the Override Default CSS Section. ![Create HTML.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1dc1d4a8-87b5-489f-9c00-81defe43cae6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFkYzFkNGE4LTg3YjUtNDg5Zi05YzAwLTgxZGVmZTQzY2FlNiIsImV4cCI6MTc2NjY0MTcxMywianRpIjoiYTU3ZDUxNTEzNWMwNDE5Njg1YzY2M2VkMWIyMTA2NWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.yOesyP41x9q-MT09eKqscSmPVaGI3rrz7cOrKNdWtS4)
