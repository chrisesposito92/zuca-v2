---
title: "Track Payment Terms Setting Changes Through Audit Trail"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/subscription-and-order-settings/define-payment-terms/track-payment-terms-setting-changes-through-audit-trail"
product: "zuora-billing"
scraped_at: "2025-12-24T05:04:41.299Z"
---

# Track Payment Terms Setting Changes Through Audit Trail

This topic explains how to track changes to the Payment Terms setting using the Audit Trail and Data Query.

You can use Audit Trail to track changes on the Payment Terms setting. Use Data Query to run a report against the `auditsettingchangeevent` Audit Trail table to retrieve the records.

To retrieve the setting changes records, submit a data query through UI or API with the following SQL query:

SELECT username AS UpdatedBy, action AS Action, settingtype AS SettingType, attributename AS Attribute, oldvalue AS OldValue, newvalue AS NewValue, timestamp AS Timestamp, SettingObjectName FROM auditsettingchangeevent WHERE namespace <> 'UserManagement' AND settingtype = 'PaymentTerm' ORDER BY timestamp DESC LIMIT 100000
