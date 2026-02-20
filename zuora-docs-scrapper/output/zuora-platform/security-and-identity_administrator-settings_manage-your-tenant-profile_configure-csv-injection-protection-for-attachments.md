---
title: "Configure CSV injection protection for attachments"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/manage-your-tenant-profile/configure-csv-injection-protection-for-attachments"
product: "zuora-platform"
scraped_at: "2026-02-20T17:40:49.661Z"
---

# Configure CSV injection protection for attachments

Zuora provides options to manage CSV injection protection for attachments, allowing administrators to choose between allowing, blocking, or sanitizing potentially harmful spreadsheet formulas.

Zuora allows administrators to control whether attachments containing potential CSV or spreadsheet formula injections are allowed, blocked, or sanitized. This setting helps protect users from malicious formulas that may run when files are opened in applications such as Microsoft Excel or LibreOffice Calc.

1.  Navigate to .
2.  In the Attachment Limits section, click Edit.
3.  Locate the CSV injection setting and select one of the following options:
    1.  Allow: Users can upload CSV or spreadsheet files without CSV injection validation. This preserves the previous behavior and may allow files that contain formulas starting with characters such as =, +, -, or @.
    2.  Block: Zuora checks uploaded CSV or spreadsheet files for formula patterns that may pose a security risk. If a risk is detected, the upload is blocked and the file is not attached.
    3.  Sanitize: Zuora automatically neutralizes potentially risky formulas in the uploaded CSV or spreadsheet file. Leading formula characters, such as =, +, -, or @, are removed or encoded so that affected cells are treated as plain text when opened, while the upload itself is allowed.
4.  Click Save.

The selected CSV injection protection behavior is applied to file attachments for the entity.
