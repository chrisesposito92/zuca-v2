---
title: "Process existing usage charges"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/manage-your-tenant-profile/actions-before-changing-time-zone/process-existing-usage-charges"
product: "zuora-platform"
scraped_at: "2026-02-20T17:41:24.066Z"
---

# Process existing usage charges

Zuora recommends that you perform a bill run to process all usage charges before changing your time zone.

After you change your time zone, the StartDateTime of any existing usage charges will be converted to your new time zone. However, these existing usage charges will still be processed by bill runs based on their original StartDateTime values from before you changed your time zone. For example, the following scenario could occur:

-   You have an existing usage charge with a StartDateTime of `2015-06-30T23:00:00` .

-   You change your time zone to EST. The usage charge's StartDateTime value is correctly converted to EST: `2015-07-01T02:00:00-05:00` .

-   You perform a bill run for June. The usage charge is processed in the bill run for June, even though its StartDateTime value after changing your time zone is actually in July.


The behavior described above applies only to usage charges created before changing your time zone. Therefore, the easiest way to handle existing usage charges is simply to process them before changing your time zone. Any usage charges created after you change your time zone are processed in Bill Runs according to the StartTimeValue value based on your new time zone.
