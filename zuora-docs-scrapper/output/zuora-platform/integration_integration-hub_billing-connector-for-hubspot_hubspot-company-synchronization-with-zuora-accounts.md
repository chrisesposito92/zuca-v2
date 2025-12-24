---
title: "HubSpot company synchronization with Zuora accounts"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-hubspot/hubspot-company-synchronization-with-zuora-accounts"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:13.175Z"
---

# HubSpot company synchronization with Zuora accounts

The HubSpot connector syncs company data from HubSpot to a Zuora Account object and ensures that HubSpot's company contacts are synchronized with Zuora accounts. Learn about key details and prerequisites for company synchronization.

## Contact management

-   In HubSpot synchronization, the presence of contacts in the company is optional.

-   The company mandates filling in fields like country and state. The Zuora connector also allows additional fields like city and pin code to meet tax requirements.

-   The connector supports using the address on the company, such as country, state, and Pincode, to create a bill to and sell to contacts in Zuora with the name for these contacts derived from the company names itself. Additionally, the connector supports designating specific contacts associated with the company to be used as the bill to/sold to contact.

-   The connector does not sync additional contacts on the company that are not marked as bill to/sold to. At any point in time, the connector creates at most two contacts on the Zuora account to represent the bill to and sold to as part of the company sync.

-   If specific contacts from the company are designated as a bill to and sold to, the connector uses the address and information on the contact to create the contacts in Zuora and not cross-reference the details on the company.

-   The connector supports creating and updating the contacts during subsequent syncs. This also includes updating the data derived from the field mapping configuration specified in the connector configuration.
