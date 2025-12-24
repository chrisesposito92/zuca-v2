---
title: "Retry sync failures"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/installation/manage-objects-and-sync-results-for-zuora-360/retry-sync-failures"
product: "zuora-platform"
scraped_at: "2025-12-24T18:33:51.562Z"
---

# Retry sync failures

Guides you through the process of retrying sync failures by selecting and re-syncing failure records on the OBJECTS TO RETRY page.

To retry a sync failure:

1.  On the OBJECTS TO RETRY page, select the checkboxes before the failure records you are to retry the sync. You can quickly select all the records by selecting the checkbox in the header row. Also, you can select the records by object type using the object type filter, as shown in the following steps:
    1.  Click the ![filterIcon.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ded5fd06-1a04-4482-a91a-b8659466e9a3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRlZDVmZDA2LTFhMDQtNDQ4Mi1hOTFhLWI4NjU5NDY2ZTlhMyIsImV4cCI6MTc2NjY4NzYyOSwianRpIjoiZjExZWY1M2NmMzNmNGZkMmFlZDkwMGEzMzdkNjNiODciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.7z6DoFcLGm9flEepHDkVaWId7hK5yTrq7QbrhVJdLNQ) icon at the top right of the OBJECTS TO RETRY page to display the object type filer.
    2.  Click the object type you are to re-sync. When you select a parent object type to re-sync, its child object type will also be re-synced. For example, if you select the Invoice objects to re-sync, the Invoice Item and Taxation Item objects will also be re-synced.
    3.  Click Apply .
2.  Click Retry Selected . If a failure record is successfully re-synced, it will be removed from the OBJECTS TO RETRY page automatically. If a failure record is failed to be re-synced, the record will remain on the OBJECTS TO RETRY page with the same ZUORA ID field, but with the SYNC DATE field being updated to the latest time.
