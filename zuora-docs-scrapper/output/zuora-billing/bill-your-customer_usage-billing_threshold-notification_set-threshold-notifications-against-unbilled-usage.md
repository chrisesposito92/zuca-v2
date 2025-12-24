---
title: "Set threshold notifications against Unbilled Usage"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/threshold-notification/set-threshold-notifications-against-unbilled-usage"
product: "zuora-billing"
scraped_at: "2025-12-24T08:28:47.266Z"
---

# Set threshold notifications against Unbilled Usage

Learn how to set threshold notifications for Unbilled Usage using the API and Zuora UI, including prerequisites and configuration steps.

You can set threshold notifications against the Rating Result data source for Unbilled Usage through the API and the Zuora UI.

To set up an email threshold notification, the availability of email templates and email template IDs is a prerequisite for creating such a notification definition.

To set up an email threshold notification:

1.  Use the [Custom Event Triggers](https://developer.zuora.com/v1-api-reference/api/tag/Custom-Event-Triggers/) API to define a custom event. Determine the following mandatory fields specific to the custom event:

    | Field name | Type | Description |
    | --- | --- | --- |
    | active | boolean | The status of the event trigger. |
    | baseObject | string | The base object that the trigger rule is defined upon.For Unbilled Usage, use RatingResult as the base object. |
    | condition | string | The JEXL expression to be evaluated against object changes. |
    | eventType |  |  |
    | displayName | string | The display name for the event type. |
    | name | string | The name of the event type.You can use RatingResultUpdated as the name. |

    Sample API request to create a custom event: `POST https://{endpoint}/v1/events/event-triggers`

    { "active": true, "baseObject": "RatingResult", "condition": "changeType == 'UPDATE'", "description": "Unbilled Usage Threshold Notification", "eventType": { "description": "Unbilled Usage Threshold Notification", "displayName": "Unbilled Usage Threshold Notification", "name": "RatingResultUpdated" } }

2.  Use the [Create a notification definition](https://developer.zuora.com/v1-api-reference/api/operation/POST_Create_Notification_Definition/) API operation to configure a notification definition. Determine the following mandatory fields specific to the notification:

    | Field name | Type | Description |
    | --- | --- | --- |
    | eventTypeName | string | The name of the event type.Note that the event type name here must be the same as it is in the preceding step. |
    | filterRule |  |  |
    | condition | string | The filter rule conditions, written in JEXL. The rule might contain event context merge fields and data source merge fields. Data source merge fields must be from the base object of the event or from the joined objects of the base object. Notifications with invalid merge fields will fail to evaluate, thus will not be invoked.For Unbilled Usage, use Amount and Quantity fields from the RatingResult base object. |
    | parameters | object (parameters) | The parameters of the filter rule and their name must match those in the filter rule. And all parameters must be defined in the event type payload. The name of parameters cannot be duplicated. |
    | name | string | The name of the notification definition, unique per communication profile. |

    Sample API request to create a notification definition: `POST https://{endpoint}/v1/notifications/notification-definitions`

    { "active": true, "calloutActive": false, "description": "Unbilled Usage Threshold Notification", "emailActive": true, "emailTemplateId": "<your\_email\_template\_ID>", "communicationProfileId": "<your\_communication\_profile\_ID>", "eventTypeName": "RatingResultUpdated", "eventTypeNamespace":"user.notification", "filterRule": { "condition": "(\_UNBILLED\_USAGE\_THRESHOLD\_OPTIONS == \\"amount\\" && RatingResult.Amount > \_UNBILLED\_USAGE\_THRESHOLD\_VAL || (\_UNBILLED\_USAGE\_THRESHOLD\_OPTIONS == \\"quantity\\" && RatingResult.Quantity > \_UNBILLED\_USAGE\_THRESHOLD\_VAL))", "description": "Filter rule to test if rating result amount or quantity < predefined threshold", "parameters": { "\_UNBILLED\_USAGE\_THRESHOLD\_OPTIONS": { "description": "Notify when amount/quantity > threshold", "displayName": "Threshold by", "options": \["amount", "quantity"\], "valueType": "STRING" }, "\_UNBILLED\_USAGE\_THRESHOLD\_VAL": { "description": " ", "displayName": "Value", "options": null, "valueType": "BIG\_DECIMAL" } } }, "filterRuleParams": { "\_UNBILLED\_USAGE\_THRESHOLD\_OPTIONS": "amount", "\_UNBILLED\_USAGE\_THRESHOLD\_VAL": 50 }, "name": "Unbilled Usage Threshold Notification" }

3.  Navigate to Extension Studio > Events & Notifications in the left navigation menu. You can check and update notification configurations in the Notifications tab. Also, you can check the history of the email notifications sent in the Email History tab.

By performing this step, you have created a threshold notification with two event parameters available. You can make your own adjustments according to your needs.
