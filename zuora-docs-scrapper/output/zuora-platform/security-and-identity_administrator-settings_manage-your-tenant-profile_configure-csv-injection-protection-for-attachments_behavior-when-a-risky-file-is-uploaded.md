---
title: "Behavior when a risky file is uploaded"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/manage-your-tenant-profile/configure-csv-injection-protection-for-attachments/behavior-when-a-risky-file-is-uploaded"
product: "zuora-platform"
scraped_at: "2026-02-19T03:20:30.624Z"
---

# Behavior when a risky file is uploaded

Describes the blocking of file uploads containing risky formulas to prevent security risks in CSV files.

If the CSV injection setting is set to Block and a user uploads a file containing risky formulas:

-   The upload is blocked. A message, “Upload failed due to a formula security risk in the file. Please review the file and try again”, is displayed to the users.

-   The file is not attached to the customer account.

-   The user must review and clean the file (for example, remove or encode any formulas that begin with characters such as =, +, -, or @) and then upload the updated file again.


This protection prevents CSV files from executing unintended commands when opened in spreadsheet applications.
