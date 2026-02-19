---
title: "Configure an Enrichment processor (Standard Identifiers)"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/enrichment-processor/configure-an-enrichment-processor-standard-identifiers"
product: "zuora-platform"
scraped_at: "2026-02-19T03:26:38.316Z"
---

# Configure an Enrichment processor (Standard Identifiers)

Learn how to transform raw usage data into billable rated records by configuring a Rating processor.

You can use this method to enrich events by performing a lookup based on identifiers such as account number, charge name, or subscription ID.

1.  Navigate to Mediation > Meters.
2.  Create a Custom meter.
3.  Select and drag the Enrichment processor type on to the meter stream page.
4.  On the Enrichment settings page, enter a name for the processor.
5.  Under Enrichment Options, select Enrich events using Account Number and Charge Name or Subscription Id.
6.  Under Enrichment Input, select either Account Number & Charge Name or Subscription ID as the source for enrichment.
7.  Select values from the Account Number Field, Charge Name Field, or Subscription ID drop-down lists.
    The matching charge details from Zuora’s catalog are retrieved based on the selections.

8.  The Enrichment Output section displays the fields that will be appended to the event.

    You cannot make any configuration changes in this section.

    -   rateCardId: Unique identifier of the rate card.
    -   uom: Unit of measure. Examples: MB, GB, API calls.
    -   chargeNumber: Internal charge reference.
    -   subscriptionNumber: Related subscription number.
    -   accountNumber: Related account number.

9.  Select an Output Option to specify the events that are returned after enrichment.

    -   Include all events: Include events that did not match any field mapping. Default: Unchecked.
    -   Include only billable subscriptions (Active + Cancelled): Filters events based on billable subscription statuses, Active and Cancelled. This focuses on enriching billing-related subscriptions and avoids enriching non-billable data. Default: Unchecked.
    -   Include usage charges only: Restricts to usage charges For example, excludes recurring. Default: Checked and disabled.
    -   Use event time to match charge segment: Uses eventTime to select the charge segment within its effective period. Default: Uses latest timestamp to identify the charge segment, if not provided.

10.  Click Save.
