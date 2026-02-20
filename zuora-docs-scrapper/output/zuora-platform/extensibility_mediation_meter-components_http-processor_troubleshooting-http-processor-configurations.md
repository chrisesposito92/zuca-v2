---
title: "Troubleshooting HTTP processor configurations"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/http-processor/troubleshooting-http-processor-configurations"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:59.941Z"
---

# Troubleshooting HTTP processor configurations

Troubleshoot common HTTP processor configuration issues.

| Issue | Cause | Recommended fix |
| --- | --- | --- |
| Frequent Timeouts | API takes too long to respond | Increase the timeoutInMillis value, or lower capacity |
| JSONPath mapping fails | Invalid response or incorrect path | Test JSONPath using the actual API response |
