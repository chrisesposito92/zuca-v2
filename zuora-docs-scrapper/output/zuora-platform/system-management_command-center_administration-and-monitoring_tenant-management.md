---
title: "Tenant Management"
url: "https://docs.zuora.com/en/zuora-platform/system-management/command-center/administration-and-monitoring/tenant-management"
product: "zuora-platform"
scraped_at: "2025-12-24T05:05:34.856Z"
---

# Tenant Management

Learn how to monitor and understand the connection status of tenant environments using data cards.

Tenants are quick review data cards to understand and monitor the connection status of the system-integrated production and sandbox environments of the tenant. The tenant data card is created with varied information that signifies the impact on the system's health.

The image below is the view based on the tenant details:![Tenant Management](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cbcd5e88-37cc-46b5-93e2-bb22894c926e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNiY2Q1ZTg4LTM3Y2MtNDZiNS05M2UyLWJiMjI4OTRjOTI2ZSIsImV4cCI6MTc2NjYzOTEzMiwianRpIjoiZWYxN2JmOWNhZDBmNGZiNjliMjZjOGM0MWU0NTA1YjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.wjPbLT4p2AvzXdrWKP7Wk8iiamW-CUvhSG0Gb-wMERw)

## Tenant data card fields

| Field | Description |
| --- | --- |
| Name | Name of the tenant. |
| ID | Displays the Tenant ID, the Zuora product (Billing or Revenue), and the tenant's region (US or EU). |
| Trust Status | Displays Zuora’s system status. |
| Performance | Indicates the status of overall performance across all system health dashboards of the tenant. |
| Errors and Failures | Indicates the status of overall errors across all system health dashboards. A warning shows up if the error thresholds exceed for any dashboard. |
| Log in new page | Click this icon to redirect you to a new page with details specific to the tenant. |
| Hierarchy | This indication appears if you are a multi-tenant entity. |
