---
title: "Alternative authentication method"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-google-cloud-delta-lake/create-a-service-account/alternative-authentication-method"
product: "zuora-platform"
scraped_at: "2026-01-15T22:01:35.465Z"
---

# Alternative authentication method

Know how to grant direct access to service account

Role based authentication is the preferred authentication mode for GCS based on GCP recommendations, however, providing a service account key to directly log-in to the created service account is an alternative authentication method that can be used if preferred.

1.  Back in the Service accounts menu, click the Actions dropdown next to the newly created service account and click Manage keys.

    ![manage_keys](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/27f4dbb8-672e-48ca-bd09-54142c4ac3bd?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI3ZjRkYmI4LTY3MmUtNDhjYS1iZDA5LTU0MTQyYzRhYzNiZCIsImV4cCI6MTc2ODYwMDg4OSwianRpIjoiOTNjOWY3MzQ2ZWUzNDhiYzhkYWQwODdkMWU1N2VjYmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.7G20Q14V71XlKnB-KZeDZ-1DeRUZXo8ToPNwYFVwz3k)

2.  Click Add key and then Create new key.

    ![create_new_key](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a4465646-830f-403b-a3a3-7508237db5d6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE0NDY1NjQ2LTgzMGYtNDAzYi1hM2EzLTc1MDgyMzdkYjVkNiIsImV4cCI6MTc2ODYwMDg4OSwianRpIjoiZDZjMzliOGYzZDAxNGRhNjhjNjM4MGFlOTc3Nzg0YjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.Km7R-LbBQn0Xl4HW28DIEgR8cMHenLUoRpxwYDSkq_U)

3.  Select the JSON Key type and click Create and make note of the key that is generated.
