---
title: "Prerequisites"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/appstore-connector/getting-started-with-appstore-connector-setup/prerequisites"
product: "zuora-platform"
scraped_at: "2025-12-24T08:28:12.853Z"
---

# Prerequisites

Ensure prerequisites are met for enabling Apple integration, including setting up user accounts and mapping subscription fields.

1\. Account Creation

To enable Apple integration for subscriptions within the system, ensure the following prerequisites are completed.

Set up the user account in the system, which will serve as the foundation for creating and managing subscriptions.

Steps:

-   Verify that the user's basic profile information (e.g., email, name, payment details) is available for account creation.

-   Use the system's account creation API or user interface to establish the account in the relevant environment (e.g., staging, production).

-   Confirm account creation success by retrieving and verifying the user's unique account ID.


2\. OmniChannel Subscription Creation

Enable the OmniChannel Subscription, which allows the account to manage and synchronize subscriptions across multiple platforms, including Apple.

Steps:

1.  Initialize an OmniChannel Subscription request in the system.

2.  Specify the account ID created in the previous step.

3.  Define the subscription type, billing cycle, and additional parameters based on the subscription level and Apple's requirements.

4.  Execute the request and retrieve the OmniChannel Subscription ID for confirmation.


Required Fields: Account ID

3\. ExternalSubscriptionId Field Mapping to Apple's OriginalTransactionId

Map the ExternalSubscriptionId field in the system to Apple's OriginalTransactionId to synchronize Apple subscription transactions with system records.

Steps:

1.  Retrieve Apple's OriginalTransactionId for the user's subscription from Apple's subscription API.

2.  Map this OriginalTransactionId to the system's ExternalSubscriptionId field, ensuring accurate linkage between the platforms.

3.  Verify the mapping by confirming the external subscription data is accessible and aligned with Apple's records.


Required Field Mappings: ExternalSubscriptionId ➔ Apple's OriginalTransactionId
