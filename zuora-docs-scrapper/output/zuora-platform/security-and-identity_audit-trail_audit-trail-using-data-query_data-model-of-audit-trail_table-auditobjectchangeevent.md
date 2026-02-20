---
title: "Table auditobjectchangeevent"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/data-model-of-audit-trail/table-auditobjectchangeevent"
product: "zuora-platform"
scraped_at: "2026-02-20T17:45:14.095Z"
---

# Table auditobjectchangeevent

Zuora system records changes of the business objects in the `auditobjectchangeevent` table and allows you to monitor the changes on the following objects, including both regular changes that occur during your business processes and changes triggered by custom logic. Administrators can enable or disable auditing the objects through Manage Audit Trail Settings .

-   Account

-   Billing Document

    -   Invoice

    -   CreditMemo

    -   DebitMemo

-   Billing Document Item

    -   InvoiceItem

    -   CreditMemoItem

    -   DebitMemoItem

    -   TaxationItem

    -   CreditMemoTaxationItem

    -   DebitMemoTaxationItem

-   Contact

-   CustomFieldDefinition

-   Custom Logic

    -   CustomLogicDecisionTable

    -   CustomLogicDecisionTree

    -   CustomLogicFunction

-   Custom Object

    -   CustomObjectDefinition

    -   CustomObjectRecord

-   Notification

    -   AdvancedSMTPServerSetting

    -   CalloutOption (For more information, see [Configure callout settings](/zuora-platform/extensibility/events-and-notifications/notifications/callout-notification-overview).)

    -   CalloutTemplate

    -   CommunicationProfile

    -   CustomEvent

    -   CustomScheduledEvent

    -   EmailTemplate

    -   NotificationDefinition

    -   OAuth2Provider

    -   ReusableBlock

-   Order

    -   Orders

    -   OrderAction

-   Order Line Item

    -   Order Line Item

    -   Order Contact

    -   Fulfillment

-   Product Catalog

    -   Product

    -   ProductRatePlan

    -   ProductRatePlanCharge

    -   ProductRatePlanChargeTier

    -   ProductChargeDefinition

    -   ProductDiscountApplyDetail

    -   ProductUnusedUnitsPrice

-   Payment

-   PaymentMethod

-   PaymentGateway (Only available to Chase Orbital payment gateway)

-   Refund

-   Subscription

    -   Subscription

    -   RatePlanCharge

-   Workflow

    -   GlobalConstants

    -   Linkage

    -   TaskDefinition

    -   WorkflowDefinition

    -   WorkflowVersion

-   HpmCaptchaCredential (for Google Cloud Enterprise credentials used for Payment Page reCAPTCHA Enterprise configuration)

-   Reporting (For more information, see Audit trail for reports )


The `auditobjectchangeevent` table also includes the CustomFieldDefinition object, which represents a custom field that has been defined on a business object.

See the `auditobjectchangeevent` table structure below.

| Attribute | Type | Description |
| --- | --- | --- |
| action | varchar | The change action that is made on the object. Possible values are:UPDATEDCREATEDDELETEDADDED_TO_COLLECTIONREMOVED_FROM_COLLECTIONThe action is ADDED_TO_COLLECTION or REMOVED_FROM_COLLECTION only if you add or remove picklist values for custom object definitions. |
| username | varchar | The name of the user who changed the objectFor the following Workflow auditing scenarios, Zuora system user is identified as the user in this field:Users coming through Zuora Connect make changes on the above Workflow objectsBasic authentication transactions |
| objectid | varchar | Id of the changed object |
| attributeid | varchar | Id of the attribute that is changed. Note that the attributeid is null if the change action is DELETED. The reason is that DELETED action is an object level action. No attribute is changed during DELETED action. |
| oldvalue | varchar | The previous value of the changed attribute |
| timestamp | timestamp with time zone | Indicates the time when the event actually occurred in the system. |
| namespace | varchar | The namespace of the object change. Possible values are:com.zuora.billingcom.zuora.custom.logicWorkflowcom.zuora.custom.objects |
| objectname | varchar | The name of the changed object |
| transactionid | varchar | Id of the transaction that the change belongs to |
| objecttype | varchar | The type of the changed object |
| createdbyid | varchar | The Id of the user who changes the object |
| userid** | varchar | Id of the user who changes the object |
| createddate | timestamp with time zone | Indicates when the audit trail record was generated. The creation time might not match the event change time and can be delayed slightly. |
| sequencenumber | bigint | The sequence number of the record |
| eventid | varchar | Id of the object change event |
| newvalue | varchar | The new value of the changed attribute |
| id | varchar | Id of the record |
| tokenid | varchar | Id of the login Token |
| year | integer | The year when the record is created. |
| month | integer | The month when the record is created. |
| day | integer | The day when the record is created. |

\*\* While exporting the user table from Data Query, the `userid` is generally expected to be the user ID of the logged-in user who made the change. However, this does not apply when exporting the user table from Data Query for Audit Trail. Zuora recommends you use the `username` field here in place of `userid` to join audit trail tables to the user table.

Note:

Currently, the UI does not support retrieving permissions for each role. To obtain entitlements for each role, please contact the Zuora Support team at support@zuora.com to request an offline report for auditing purposes.
