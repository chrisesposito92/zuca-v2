---
title: "Configure Usage Records as a target"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-usage-records-as-a-target"
product: "zuora-platform"
scraped_at: "2026-02-20T17:50:00.962Z"
---

# Configure Usage Records as a target

Create a custom meter to send output data to usage records by selecting Usage Records as the target and configuring the necessary settings.

1.  Navigate to
2.  Create a Custom meter.
3.  Select Usage Records as the target.

    ![Usage Record target settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/79a6bf03-f128-4047-bc9b-843e53720030?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc5YTZiZjAzLWYxMjgtNDA0Ny1iYzliLTg0M2U1MzcyMDAzMCIsImV4cCI6MTc3MTY5NjE5NCwianRpIjoiZjllMTQxYTQ4MDIyNDNlN2FmMjI5Njg3MTc1MmI3N2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.E9yYpFaT50Tox6c10VZAFvUJiCqjRxtHekZX5rhP4yk)

4.  Enter a Name for this target configuration.
5.  Select and map the association between the standard fields/custom fields and the target fields. You can search for supported data types in the search field.
6.  Edit the mapping field if required.
7.  Click Save to save the usage records target settings.

If the `Time` format for the Start Date Time filed is not specified, Mediation will try to parse the Start Date Time with the following predefined formats one by one until a match is found:

![Predefined time formats](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e4370e94-f3f0-4b84-8158-91c64bc6a5a9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU0MzcwZTk0LWYzZjAtNGI4NC04MTU4LTkxYzY0YmM2YTVhOSIsImV4cCI6MTc3MTY5NjE5NCwianRpIjoiNjcxNDVlMTM5ZDlkNGQ4ZWExMDM1MWVmNmNkM2ZiZmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Yc04XHDcAgbqzDYaayLEmkDVZZbmiaPvrQHojOQ6JVE)
