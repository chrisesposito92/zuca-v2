---
title: "Disable Flexible Billing Attributes"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes/disable-flexible-billing-attributes"
product: "zuora-billing"
scraped_at: "2025-12-24T18:38:19.045Z"
---

# Disable Flexible Billing Attributes

Learn how to disable Flexible Billing Attributes, with steps for different scenarios including invoice regeneration and template management.

-   If you want to disable Flexible Billing Attributes and have no need to regenerate historical invoices, follow Step 1 and 4.
-   If you want to disable Flexible Billing Attributes and regenerate invoices in a different template for a subscription, follow Step 1– 4.

The procedure for disabling Flexible Billing Attributes depends on the specific situation. This section uses the subscription-level invoice template as an example to describe the procedure.

If you have not generated any invoice in the subscription-level invoice template and want to disable Flexible Billing Attributes, directly submit a request at [Zuora Global Support](http://support.zuora.com/) for the disablement.

1.  Clean up the invoice template specified at the subscription level through the Terms And Conditions order action.

    Note: If you do not clean up the invoice template at the subscription level, the template continues to take effect on later generated invoices even after Flexible Billing Attributes is disabled.

2.  Reverse the last generated invoice.
3.  Regenerate an invoice for the billing period that the reversed invoice was generated for.

    Note: The newly generated invoice uses the default invoice template on the corresponding account.

4.  Submit a request at [Zuora Global Support](http://support.zuora.com/) for the disablement.
