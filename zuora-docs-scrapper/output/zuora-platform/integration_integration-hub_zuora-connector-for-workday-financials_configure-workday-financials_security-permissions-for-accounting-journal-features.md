---
title: "Security Permissions for Accounting Journal features"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-workday-financials/configure-workday-financials/security-permissions-for-accounting-journal-features"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:52.222Z"
---

# Security Permissions for Accounting Journal features

The permissions listed cover all of the standard Zuora fields.

| Operation | Domain Security Policy | Domain Security Policies Inheriting Permission | Functional Areas |
| --- | --- | --- | --- |
| Get and Put | Process: Journals (NEW) | Process: Journals - Add/Change Attachment Process: Journals - Add Attachment Process: Journals - Cancel Process: Journals - Copy Process: Journals - View | Financial Accounting |
| Get and Put | Process: Journals - Core | N/A | Financial Accounting |
| Get Only | Set Up: Maintain Custom Worktags | N/A | Common Financial Management Worktags |
| Get Only | Integration Build | N/A | Integration |
| Get Only | Create: Cost Center | N/A | Organizations and Roles |

| Business Process | Initiating Action | Functional Areas |
| --- | --- | --- |
| Accounting Journal Event | Import Accounting Journal (WS Background Process) | Financial Accounting |
