---
title: "Period category"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/profiles/period-category"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:23:08.939Z"
---

# Period category

Configure period profiles to manage open/close actions at book or organization levels, and determine if closed periods can be reopened.

Use the Period profiles to configure the parameters related to the open/close period actions, such as whether a closed period can be re-opened and the open/close period actions are applicable at the book level or at the organization level.

## Maintain Open Period

The MAINTAIN\_OPEN\_PERIOD profile specifies whether a period is to be opened and closed at the organization level or at the book level. You can set the system level value of this profile to one of the following:

-   Book: The period is opened and closed for individual revenue book.
-   Org: The period is opened and closed for the individual organization.

## Open Closed Period

The OPEN\_CLOSED\_PERIOD profile determines whether a closed period can be opened again. When this profile is toggled to Yes , a closed period can be opened again.
