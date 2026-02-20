---
title: "Add usage data"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/add-usage-data"
product: "zuora-billing"
scraped_at: "2026-02-20T17:33:43.926Z"
---

# Add usage data

Learn how to add usage data by navigating to the Billing section, uploading a CSV file, and ensuring file size and name requirements are met.

With the correct permissions assigned, you can add usage data.

Dynamic pricing usage charges not supported: The add usage records UI supports only standard usage charges. If the uploaded file contains usage that will be associated with a dynamic pricing usage charge, the upload fails and those records are not created. To send usage to dynamic pricing usage charges, use Mediation instead of this UI‑based approach.

To add usage data:

1.  Navigate to Billing > Usage in the left-hand navigation section.
2.  At the upper-right corner of the page, click add usage records .
3.  Click Choose File and navigate to the location of your CSV file. You can download a usage file template in Excel or CSV format first.
    The file name should not exceed 50 characters. Zip the CSV or XLS file if the size exceeds 4MB. For usage import results, set up the appropriate Import Notification or use the appropriate API call.
