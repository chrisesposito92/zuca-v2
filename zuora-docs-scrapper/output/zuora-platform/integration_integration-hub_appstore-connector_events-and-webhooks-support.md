---
title: "Events and Webhooks support"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/appstore-connector/events-and-webhooks-support"
product: "zuora-platform"
scraped_at: "2025-12-24T08:28:43.130Z"
---

# Events and Webhooks support

This document explains how to configure webhooks and manage event notifications for Apple, Google, and Roku platforms, ensuring effective subscription management and real-time response to customer actions.

The article outlines how to configure webhooks and the parameters that can be set for apple and google triggers.

With Zuora, it's possible to pass event notifications from your app store or media channel to a downstream system. Custom event notifications have been seeded and enabled in configured tenants. Contact Zuora's Global Support or the product management team if you cannot view these.

This section highlights the key events ingested and processed from the Apple App Store in version 1 of the Apple events. It includes events related to subscription changes, renewal failures, recoveries, cancellations, and refunds. Understanding these events helps you manage customer subscriptions effectively and ensures that your system can react promptly to customer actions such as renewals or cancellations.

-   DID\_CHANGE\_RENEWAL\_PREF - customer made a change in their subscription plan that takes effect at the next renewal.

-   DID\_CHANGE\_RENEWAL\_STATUS - Indicates a change in subscription renewal status

-   DID\_FAIL\_TO\_RENEW - Indicates a subscription that failed to renew due to a billing

-   DID\_RECOVER - Indicates a successful automatic renewal of an expired subscription that failed to renew in the past.

-   DID\_RENEW - Indicates that a customer’s subscription has successfully auto-renewed for a new transaction period

-   CANCEL - Apple Support canceled the auto-renewable subscription and the customer received a refund as of the timestamp in cancellation\_date\_m

-   REFUND - Indicates that the App Store successfully refunded a transaction for a consumable in-app purchase, a non-consumable in-app purchase, or a non-renewing subscription.


Apple v2 events provide more granular details for tracking subscription and consumable-related activities. This section describes events such as subscription plan changes, renewals, expirations, external purchase tokens, refunds, and grace periods. Configuring and processing these events allows you to manage user subscriptions more effectively and respond in real-time to changes in subscription status or customer behavior.

-   CONSUMABLE\_REFUND\_REQUESTED - A customer requested a refund for a consumable, and App Store is requesting consumption data.

-   SUBSCRIPTION\_PLAN\_CHANGED - A customer changed their subscription plan. An upgrade takes effect immediately, while a downgrade is effective at the next renewal.

-   SUBSCRIPTION\_RENEWAL\_STATUS\_CHANGED - A customer modified their renewal status. AUTO\_RENEW\_ENABLED for renewal, AUTO\_RENEW\_DISABLED to stop renewal.

-   SUBSCRIPTION\_RENEWAL\_FAILED - Subscription renewal failed due to billing. If in a grace period, service continues until resolved or 60 days pass.

-   SUBSCRIPTION\_RENEWED - Subscription was successfully renewed. BILLING\_RECOVERY if renewal succeeded after a previous failure.

-   SUBSCRIPTION\_EXPIRED - Subscription expired. VOLUNTARY if canceled by the user, BILLING\_RETRY if the billing retry period lapsed.

-   EXTERNAL\_PURCHASE\_TOKEN\_CREATED - An external purchase token was created for the app without a report.

-   GRACE\_PERIOD\_ENDED - The grace period ended without renewal; access can be disabled.

-   OFFER\_REDEEMED - A customer redeemed a subscription offer. UPGRADE is immediate; DOWNGRADE occurs at the next renewal.

-   ONE\_TIME\_CHARGE\_PURCHASED - A customer purchased a consumable, non-consumable, or non-renewing item.

-   PRICE\_INCREASE\_NOTICE - A customer was informed of a price increase. PENDING or ACCEPTED if consent is required, ACCEPTED otherwise.

-   TRANSACTION\_REFUNDED - App Store refunded a transaction. Check revocation date for time and reason for details.

-   REFUND\_REQUEST\_DECLINED - App Store declined a refund request.

-   REFUND\_REVERSED - App Store reversed a previous refund due to a dispute.

-   RENEWAL\_DATE\_EXTENDED - App Store extended the renewal date for a specific subscription.

-   RENEWAL\_EXTENSION\_ATTEMPT - Attempted to extend a renewal date. SUMMARY if completed, FAILURE if unsuccessful.

-   FAMILY\_SHARING\_ENTITLEMENT\_REVOKED - Family Sharing entitlement was revoked. Triggered if Family Sharing was disabled or a family member left the group.

-   SUBSCRIPTION\_STARTED - A customer subscribed to an auto-renewable subscription. INITIAL\_BUY if it’s their first time, RESUBSCRIBE if they are resubscribing.


Google Play Store also offers a range of subscription-related events that are important for managing customer subscriptions and billing. This section outlines events from Google, including subscription recovery, renewals, cancellations, grace periods, and pauses. Monitoring these events in real-time helps businesses manage subscription lifecycles on the Google Play platform and ensure that users have a smooth experience with their subscriptions.

-   SUBSCRIPTION\_RECOVERED - A subscription was recovered from account hold.

-   SUBSCRIPTION\_RENEWED - An active subscription was renewed.

-   SUBSCRIPTION\_REVOKED - A subscription has been revoked from the user before the expiration time.

-   SUBSCRIPTION\_EXPIRED - A subscription has expired.

-   SUBSCRIPTION\_CANCELED - A subscription was either voluntarily or involuntarily canceled. For voluntary cancellation, sent when the user cancels.

-   SUBSCRIPTION\_ON\_HOLD - A subscription has entered account hold (if enabled).

-   SUBSCRIPTION\_RESTARTED - User has reactivated their subscription from Play > Account > Subscriptions (requires opt-in for subscription restoration)

-   SUBSCRIPTION\_IN\_GRACE\_PERIOD - A subscription has entered the grace period (if enabled).

-   SUBSCRIPTION\_PAUSE\_SCHEDULE\_CHANGED - Where a user initiates a pause of their subscription.


Roku provides a variety of events related to subscription activity, including sales, grace periods, cancellations, refunds, and chargebacks. This section explains the Roku events that can be processed, which are essential for tracking and managing user subscriptions on the Roku platform.

-   SALE - A purchase, renewal, or free trial has started. Renewals are marked as "Recurring subscription processed."

-   GRACE\_INITIATED - The subscription’s auto-renewal payment failed, entering a grace period.

-   GRACE\_RECOVERED - Payment was received for a subscription in the grace period.

-   ON\_HOLD\_INITIATED - The grace period ended without payment; the subscription is now on hold (Enhanced Subscription Recovery only).

-   ON\_HOLD\_RECOVERED - Payment was received for a subscription that was on hold (Enhanced Subscription Recovery only).

-   CANCELLATION - The subscription was canceled by the customer or passively ended. Active cancellations show a future expiration date; passive cancellations show a past expiration date.

-   REFUND - A refund was initiated by the publisher or Roku Pay.

-   CREDIT - A service credit was issued to the customer by the publisher or Roku Pay.

-   RESUBSCRIBE - A previously canceled subscription was reinstated within the current billing period.

-   UPGRADE\_SALE - An upgraded subscription was purchased.

-   UPGRADE\_CANCELLATION - The original subscription was canceled due to an upgrade.

-   DOWNGRADE\_SALE - A downgraded subscription was purchased.

-   DOWNGRADE\_CANCELLATION - The original subscription was canceled due to a downgrade.

-   CHARGEBACK - The customer disputed a transaction, which was deducted from the payout.

-   CHARGEBACK\_REVERSED - The chargeback claim was reversed by Roku, and the revenue was returned to the payout.

-   SECOND\_CHARGEBACK - The bank disputed the chargeback reversal, which was deducted from the payout.


Webhooks can be used to inform your systems about events as they happen in your Zuora instance. Zuora's app store instance allows you to set up various webhook endpoints to receive notifications for these events.

To configure event notifications,

1.  Navigate to Adminstration > Setup Profiles, Notifications and Email Templates from your user profile.
2.  From the Notifications header, click Add New Notification button.
3.  Configure the following fields under Add New Notifications.

    -   Related Event: Select the App Store Connector related event you want to configure.

    -   Name: Enter a name for your notification event.

    -   Description: Enter a description for the notification.

    -   Active: Set the status to Active to turn on the notification.


4.  Configure the following fields under Event Parameters .

    -   Status: Select the status of the event parameter. Status descriptions are as follows:

    -   Passthrough - Initial notification from the app store.

    -   Processed - Callout triggered after app store notification was processed successfully.

    -   Failed - Callout triggered after app store notification was processed with failures.

    -   Notification Type: Select an appstore notification type.


5.  Configure the following fields under Delivery Options.

    -   Email: Click and Add the email ID to send out a notification.

    -   Callout: Click and Add the callout delivery option.


    -   In Merge Fields and Parameter settings configure the following:

        -   Merge Field: Select the merge field type.

        -   Base URL: Enter the Base URL for the destination to receive the payload.

        -   Merge Field Tag: Add a merge fields tag to your baseURL.

        -   Http Method: Choose a HTTP method and click add parameter . You can add any parameters to your callout body or override with a custom callout body.

        -   Click Allow Retry to retry the delivery of your events.

        -   Choose a Callout Authentication method.


6.  Click Add New Notification to save the notification. For more details on notifications, see Events and Notifications .
