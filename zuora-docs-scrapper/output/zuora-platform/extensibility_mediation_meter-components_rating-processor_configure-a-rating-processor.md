---
title: "Configure a Rating processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/rating-processor/configure-a-rating-processor"
product: "zuora-platform"
scraped_at: "2026-02-19T03:26:53.245Z"
---

# Configure a Rating processor

Learn how to transform raw usage data into billable rated records by configuring a Rating processor.

1.  Navigate to
2.  Create a Custom meter.
3.  Select and drag the Rating processor type on to the meter stream page.
4.  In the Rating settings page, enter a Name for the processor.
5.  Specify the field mappings.
    Field mappings define the join logic, how event records should be matched to reference data.

    | Field | Required | Description |
    | --- | --- | --- |
    | Subscription Number | No | Identifier for the subscription. |
    | Charge Number | No | Unique identifier of the charge. |
    | Quantity | Yes | The amount of usage to be rated. |
    | Price Quantity | No | Cumulative usage to determine the correct tier in tiered/volume pricing models. Mandatory for tiered/volume pricing models, otherwise optional. |
    | Event Time | No | Use a field value from the event to accurately identify the applicable charge segment. If left blank, the latest timestamp will be used to determine the event time. |
    | Date Time Format | No | Date time format corresponding to the Event Time. |

    Sample Date Time formats
    | Format Pattern | Sample Value | Notes |
    | --- | --- | --- |
    | yyyy-MM-dd | 2025-09-08 | ISO-like date, safest and most common |
    | M/d/yyyy | 9/8/2025 | Allows single-digit month/day |
    | dd-MM-yyyy | 08-09-2025 | Year/Month/Day with slashes |
    | yyyyMMdd | 20250908 | Date + hour:minute (24h) |
    | yyyy-MM-dd HH:mm | 2025-09-08 14:30 | Date + hour:minute (24h) |
    | yyyy-MM-dd HH:mm:ss | 2025-09-08 14:30:59 | Date + time to seconds |
    | yyyy-MM-dd'T'HH:mm:ss | 2025-09-08T14:30:59 | ISO-8601 style with T separator |
    | yyyy-MM-dd HH:mm:ss.SSS | 2025-09-08 14:30:59.123 | Includes milliseconds |
    | MM/dd/yyyy hh:mm a | 09/08/2025 02:30 PM | US-style date with 12h clock + AM/PM |

6.  Click Save.
