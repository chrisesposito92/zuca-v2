---
title: "Set threshold notifications against Prepaid with Drawdown"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/threshold-notification/set-threshold-notifications-against-prepaid-with-drawdown"
product: "zuora-billing"
scraped_at: "2025-12-24T08:28:44.735Z"
---

# Set threshold notifications against Prepaid with Drawdown

Learn how to set threshold notifications for Prepaid with Drawdown using the API and Zuora UI, including prerequisites and configuration steps.

You can set threshold notifications against the Prepaid Validity Period Summary data source for Prepaid with Drawdown through the API and the Zuora UI.

To set up an email threshold notification, the availability of email templates and email template IDs is a prerequisite for creating such a notification definition.

To set up an email threshold notification:

1.  Use the [Custom Event Triggers](https://developer.zuora.com/v1-api-reference/api/tag/Custom-Event-Triggers/) API operation to define a custom event. Determine the following mandatory fields specific to the custom event:

    | Field name | Type | Description |
    | --- | --- | --- |
    | active | boolean | The status of the event trigger. |
    | baseObject | string | The base object that the trigger rule is defined upon.For Prepaid with Drawdown, use ValidityPeriodSummary as the base object. |
    | condition | string | The JEXL expression to be evaluated against object changes. |
    | eventType |  |  |
    | displayName | string | The display name for the event type. |
    | name | string | The name of the event type.You can use ValidityPeriodBalanceUpdated as the name. |

    Sample API request to create a custom event: `POST https://{endpoint}/events/event-triggers`

    { "active": true, "baseObject": "ValidityPeriodSummary", "condition": "changeType == 'UPDATE'", "description": "Prepaid with Drawdown Threshold Notification", "eventType": { "description": "Prepaid with Drawdown Threshold Notification", "displayName": "Prepaid with Drawdown Threshold Notification", "name": "ValidityPeriodBalanceUpdated" } }

2.  Use the [Create a notification definition](https://developer.zuora.com/v1-api-reference/api/operation/POST_Create_Notification_Definition/) API operation to configure a notification definition. Determine the following mandatory fields specific to the notification:

    | Field name | Type | Description |
    | --- | --- | --- |
    | eventTypeName | string | The name of the event type.Note that the event type name here must be the same as it is in the preceding step. |
    | filterRule |  |  |
    | condition | string | The filter rule conditions, written in JEXL. The rule might contain event context merge fields and data source merge fields. Data source merge fields must be from the base object of the event or from the joined objects of the base object. Notifications with invalid merge fields will fail to evaluate, thus will not be invoked.For Prepaid with Drawdown, use TotalPrepaidBalance and RemainingBalance fields from the ValidityPeriodSummary base object. |
    | parameters | object (parameters) | The parameters of the filter rule and their name must match those in the filter rule. And all parameters must be defined in the event type payload. The name of parameters cannot be duplicated. |
    | name | string | The name of the notification definition, unique per communication profile. |

    Sample API request to create a notification definition: `POST https://{endpoint}/notifications/notification-definitions`

    { "active": true, "calloutActive": false, "description": "Validity Period Threshold Notification", "emailActive": true, "emailTemplateId": "<your\_email\_template\_ID>", "communicationProfileId": "<your\_communication\_profile\_ID>", "eventTypeName": "ValidityPeriodBalanceUpdated", "eventTypeNamespace":"user.notification", "filterRule": { "condition": "(\_PPDD\_VP\_THRESHOLD\_OPTIONS == \\"percentage\\" && ValidityPeriodSummary.TotalPrepaidBalance > ValidityPeriodSummary.RemainingBalance && (ValidityPeriodSummary.RemainingBalance\*100 / ValidityPeriodSummary.TotalPrepaidBalance) < \_PPDD\_VP\_THRESHOLD\_VAL) || (\_PPDD\_VP\_THRESHOLD\_OPTIONS == \\"units\\" && (ValidityPeriodSummary.RemainingBalance < \_PPDD\_VP\_THRESHOLD\_VAL))", "description": "Filter rule to test if remaining balance < predefined threshold", "parameters": { "\_PPDD\_VP\_THRESHOLD\_OPTIONS": { "description": "remaining", "displayName": "Threshold by", "options": \["percentage", "units"\], "valueType": "STRING" }, "\_PPDD\_VP\_THRESHOLD\_VAL": { "description": " ", "displayName": "Validity period balance", "options": null, "valueType": "BIG\_DECIMAL" } } }, "filterRuleParams": { "\_PPDD\_VP\_THRESHOLD\_OPTIONS": "percentage", "\_PPDD\_VP\_THRESHOLD\_VAL": 20 }, "name": "Validity Period Summary Threshold Notification Notification" }

3.  Navigate to Extension Studio > Events & Notifications in the left navigation menu. You can check and update notification configurations in the Notifications tab. Also, you can check the history of the email notifications sent in the Email History tab.

You have created a threshold notification with two event parameters available. You can make custom adjustments according to your needs.
