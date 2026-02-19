---
title: "Create account segments"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/configure-accounting-structure/create-account-segments"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:37:27.109Z"
---

# Create account segments

Create account segments in Zuora Revenue to structure your account numbers based on geography, business line, or department.

A segment is part of the business that has separate financial information and a separate management strategy. You can create account segments based on geography, the line of business, or department. The number of segments that you create determines the structure of your account number. At least one segment of the natural account type is required in Zuora Revenue. You can create up to 10 different segments in Zuora Revenue.

1.  Navigate to Setups > Application .
2.  Click the right pointing arrow to open the side menu and click Accounting Setup . The Account Setup page is displayed.
3.  To make any changes, click Unfreeze .
4.  To add a segment, click '+' . A line is added.
5.  In the Segment Name Column, enter a meaningful name for the segment.
6.  In the Segment Type column, select the appropriate type for the segment.

    Note: The segment type must be unique. It means you can create one natural account type, one legal entity type, and one intercompany account type. For other segments, keep this column blank.

7.  (Optional): To specify how this portion of the account number is to be derived for this segment, use the Segment Source column.

    -   For the account number to be dynamically generated at the transaction level, select Transaction in the Segment Source column and then select the field based on which the account number is generated in the Source Field column.
    -   For the account number to be a fixed number, select Constant in the Segment Source column and enter the value in the Constant Value column.

8.  Click the save icon to save your settings.
9.  (Optional): In the Display column, specify whether this segment is to be uploaded in manual journal entries. By default, all segments are enabled for MJE upload.
10.  To add more segments, repeat Step 4 ~ 9.
11.  Proceed to the next task to create account types. If you have completed all the accounting setups, click Freeze .

The defined segments will be automatically populated when you define the mapping between the segments and account types.

By default, Account Segments validations are disabled. To validate, you have to manually enable the validation for Account segments.
