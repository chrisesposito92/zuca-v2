---
title: "Configure Usage Records as a target"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-usage-records-as-a-target"
product: "zuora-platform"
scraped_at: "2025-12-24T05:30:22.858Z"
---

# Configure Usage Records as a target

Create a custom meter to send output data to usage records by selecting Usage Records as the target and configuring the necessary settings.

You can create a custom meter that sends output data to usage records. To create a meter with Usage Records as the target:

1.  Create a Custom Meter.
2.  Select Usage Records as the target.

    ![Usage Record target settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/79a6bf03-f128-4047-bc9b-843e53720030?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc5YTZiZjAzLWYxMjgtNDA0Ny1iYzliLTg0M2U1MzcyMDAzMCIsImV4cCI6MTc2NjY0MDYyMCwianRpIjoiOWMzOWU2MTdhYjEwNDllNGI3MWFlM2Q2MTk0ZTEwNzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.sRSKpUUxjDBrx652zggXo355i_3a3Ik5Up4jNgrkGxo)

3.  Enter a Name for this target configuration.
4.  Select and map the association between the standard fields/custom fields and the target fields. You can search for supported data types in the search field.
5.  Edit the mapping field if required.
6.  Click Save to save the usage records target settings.

If the `Time` format for the Start Date Time filed is not specified, Mediation will try to parse the Start Date Time with the following predefined formats one by one until a match is found:

![Predefined time formats](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e4370e94-f3f0-4b84-8158-91c64bc6a5a9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU0MzcwZTk0LWYzZjAtNGI4NC04MTU4LTkxYzY0YmM2YTVhOSIsImV4cCI6MTc2NjY0MDYyMCwianRpIjoiMGY1ZjcyNDIwYzFlNDdmYTkzOGRiODEzNDIzZDVjYTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.3Bqly27JmWwYCFmGmm9f5Ct6bj-b4zsLWeuuxlSeabc)
