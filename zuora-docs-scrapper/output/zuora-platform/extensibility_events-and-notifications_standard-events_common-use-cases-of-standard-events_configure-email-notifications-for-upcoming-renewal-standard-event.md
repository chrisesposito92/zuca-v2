---
title: "Configure email notifications for Upcoming Renewal standard event"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/standard-events/common-use-cases-of-standard-events/configure-email-notifications-for-upcoming-renewal-standard-event"
product: "zuora-platform"
scraped_at: "2025-12-24T05:24:23.517Z"
---

# Configure email notifications for Upcoming Renewal standard event

Learn how to automatically send customers an email notification when their subscription is coming up for renewal.

Zuora gives you the ability to send automated email notifications to customers for upcoming subscription renewals.

For subscriptions with auto-renew disabled, the subscription stops billing once the subscription term expires. Therefore, you must work with your customers in advance to renew the subscription and avoid a lapse in services. It is best practice to provide non auto-renewal customers with ample notice in case they want to make any changes to their subscription.

For subscriptions with auto-renew enabled, because the customer opted for auto-renewal when they signed up for your service, advanced notification is an optional courtesy.

1.  Navigate to in the left navigation menu.

2.  Click \+ Add New Notification.

3.  Create the notification step-by-step with the following information. For more information, see [Create a notification](/zuora-platform/extensibility/events-and-notifications/notifications/create-a-notification).
    |  | Configuration details |
    | --- | --- |
    | Step 1: Define Trigger | Click On A Daily Schedule . |
    | Step 2: Select Event | From the dropdown list, select Billing > Subscription > 1220 - Upcoming Renewal . |
    | Step 3: Set Filters | Set the following system filters:How Many Days Before : Enter the number of days before renewal that you want to notify the customer.Auto Renewal : Select whether you want to notify customers with auto-renew enabled ( True ) or disabled ( False ). In this example, select False to notify only customers whose subscriptions are set not to auto-renew. |
    | Step 4: Set Delivery Options | From the Delivered By Email list, select Upcoming Renewal Default Email Template (Manual Renewal) .The list displays all default email templates and the templates you created for the Upcoming Renewal event. The email template determines the email sent to customers, such as the email header, body, and recipient information. |
    | Step 5: Define Target Accounts | Select Default from the communication profile list.Communication profiles allow you to send event-driven notifications to targeted customer accounts. You can select multiple communication profiles as needed when creating notifications. For more information, see Communication profile overview. |
    | Step 6: Finalize Notification Details | Specify the following basic information:Name : The notification name.Description : The notification description.Active : Toggled on by default, indicating the notification will be sent when the Upcoming Renewal event occurs. |
    | Step 7: Review Notification | Review the notification settings. |

4.  Click Done.
