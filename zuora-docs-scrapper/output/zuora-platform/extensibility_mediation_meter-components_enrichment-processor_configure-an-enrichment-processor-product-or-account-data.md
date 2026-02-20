---
title: "Configure an Enrichment processor (Product or Account data)"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/enrichment-processor/configure-an-enrichment-processor-product-or-account-data"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:28.436Z"
---

# Configure an Enrichment processor (Product or Account data)

Learn how to configure an Enrichment processor to enhance events with product or account data.

You can use this method for enrichment based on standard Zuora metadata such as product catalog, accounts, subscriptions, and charges.

1.  Navigate to
2.  Create a Custom meter.
3.  Select and drag the Enrichment processor type on to the meter stream page. The enrichment settings page is displayed.

    ![Enrichment processor settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d0497ceb-35d8-4941-b43c-0a9800ce1e2a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQwNDk3Y2ViLTM1ZDgtNDk0MS1iNDNjLTBhOTgwMGNlMWUyYSIsImV4cCI6MTc3MTY5NjE2MSwianRpIjoiMDYwMzFhNTYyN2Q1NDhhYjliNjE3OTRmMDI1OWVhZmEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.wEXY7di2NySocnv92Ab9GBM-VJ07u3Vn9hzUVTI8Dtw)

4.  On the Enrichment settings page, enter a name for the processor.
5.  Under Enrichment Options, select Enrich events using Product or Account data.
6.  Under Reference Object, select either Account or Product as the source for enrichment.
    The fields from the selected reference object are used to match and fetch additional data into the event.

7.  Specify the Field Mapping.

    Field mappings define the join logic, how event records should be matched to reference data.

    -   Event Field: The field from the event stream. Examples: accountNumber, productSKU.
    -   Reference Field: The corresponding field from the reference object to be matched.

    This is equivalent to a SQL join ON event.accountNumber = account.accountNumber. You can add multiple field mappings to create composite joins, such as accountNumber and region.

8.  Specify the Fields To Append.

    Defines which fields from the reference data should be appended to the event.

    -   Reference Field: The Account or Product field that you want to fetch.
    -   Event Field Name: The name of the field in the enriched event.

    Append accountType from Account object as enriched\_account\_type.

9.  Select an Output Option to specify the events that are returned after enrichment.

    -   Include all events: Allows events to pass through even if no match is found in the reference data.
    -   Include usage charges only: Filters results to include only usage charges. This is useful when enrichment is intended solely for usage-based billing scenarios.
    -   Use event time to match charge segment: Ensures a charge segment is selected based on the event’s timestamp, which is important when rate plan charges have multiple time-based segments. If you leave it unchecked, the system uses the latest timestamp while processing these records.

    Charge Segment
    | Start Date | End Date | Price per Unit |
    | --- | --- | --- |
    | Jan 01, 2024 | Dec 31, 2024 | $1 |
    | Jan 01, 2025 | ongoing | $2 |

    If the Use event time to match charge segment checkbox is enabled and availableTime is chosen as, say November 2024, the system picks $1. If the checkbox is disabled, the system picks $2.

10.  Click Save.
