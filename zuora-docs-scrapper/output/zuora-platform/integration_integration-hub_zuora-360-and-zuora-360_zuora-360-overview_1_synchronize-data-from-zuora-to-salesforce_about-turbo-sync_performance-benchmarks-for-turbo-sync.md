---
title: "Performance benchmarks for turbo sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/about-turbo-sync/performance-benchmarks-for-turbo-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:26.460Z"
---

# Performance benchmarks for turbo sync

This reference topic provides the performance record for turbo sync .

Customers working with large data sets will experience a more dramatic performance improvement. The ratio of billing accounts to other types of records will also affect the performance time. (For instance, a higher ratio of subscriptions to accounts will process more quickly.)

To establish a conservative benchmark, we created a data set containing several hundred thousand billing accounts and, for each account, a subscription, product charge, invoice, payment method, payment, and invoice payment. One-third of the accounts also had a refund and a refund invoice payment.

Then we synced the data and noted the results, as follows. (All times here are reported in seconds.)

| Task | Previous average performance | Average with Turbo Sync | Improvement |
| --- | --- | --- | --- |
| Sync 100K objects | 1,419 | 463 | 306% |
| Sync 1M objects | 19,890 | 2,783 | 715% |
| Clean up 100K objects | 828 | 668 | 24% |
| Clean up 1M objects | 8,415 | 748 | 1,125% |

The performance gain increases with larger data volume, as shown in this graph of the Turbo Sync performance gain for sync and cleanup operations. In the Sync operation you can see an improvement of up to 24X in a 10-million-record data set. For Cleanup, we had already introduced some of the new technology in our 2.60 release (May '13), so we separately show the effect of Turbo Sync on Cleanup in older versions (green) and versions 2.60 and above (red).

![Turbo Sync benchmark](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c9fb2dc5-ec1f-4b37-acbf-b82fb252641a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM5ZmIyZGM1LWVjMWYtNGIzNy1hY2JmLWI4MmZiMjUyNjQxYSIsImV4cCI6MTc2NjY4Nzk2NCwianRpIjoiYTc0MzhjNWU5NDI1NGJiMDg4OTJmYTA1ZTFhNTBjNzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.PprO7x0H7YqxeX2e3dVDhIe8o2ugVN7co9lcumlMeSk)
