---
title: "Additional field details of InvoiceSplitItem"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicesplititem/additional-field-details-of-invoicesplititem"
product: "zuora-platform"
scraped_at: "2026-02-19T03:28:44.098Z"
---

# Additional field details of InvoiceSplitItem

This reference provides additional field details on the InvoiceSplitItem object.

Here's more information we think you might like to have about some of these fields.

## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an amend() call to modify an existing subscription, then you need to include the specific Subscription object's ID with the call.

The ID for the InvoiceSplitItem object is `InvoiceSplitItemId` .

## PaymentTerm

Indicates when the customer pays the split invoice. The field values are defined in the web-based UI on the Define Payment Terms page. Common payment terms are Due Upon Receipt and Net 60, but your specific values depend on your own configuration.
