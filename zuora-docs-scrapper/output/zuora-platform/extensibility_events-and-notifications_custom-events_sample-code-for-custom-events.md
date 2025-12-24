---
title: "Sample code for custom events"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/custom-events/sample-code-for-custom-events"
product: "zuora-platform"
scraped_at: "2025-12-24T05:24:53.426Z"
---

# Sample code for custom events

Provides sample code for frequently used custom events.

You can use these code samples to create custom events through the [Create an event trigger](https://developer.zuora.com/v1-api-reference/api/operation/POST_EventTrigger/) API operation.

## Bill Run Posted

You can use the following request sample to create a custom event of BillRunPosted if you do not use the auto-post on Bill Runs.

{ "active": true, "baseObject": "BillingRun", "condition": "changeType == 'UPDATE' && BillingRun.Status == 'Posted' && BillingRun.Status\_old != 'Posted'", "description": "Bill Run Posted", "eventType": { "name": "BillRunPosted", "displayName": "Bill Run Posted", "description": "BillRunPosted", "namespace": "user.notification" } }

## Payment Term Updated

You can use the following request sample to create a custom event of AccountPaymentTermUpdate.

{ "active": true, "baseObject": "Account", "condition": "changeType == 'UPDATE' && Account.PaymentTerm\_old != Account.PaymentTerm", "description": "Generate an event when a account PaymentTerm is updated", "eventType": { "description": "Generate an event when a account PaymentTerm is updated", "displayName": "Account Update", "name": "AccountPaymentTermUpdate" } }

## Custom object record created

You can use the following request sample to create a custom event that will be triggered when certain custom object records are created for the `Vehicle` custom object.

{ "active": true, "baseObject": "default\_\_vehicle", "condition": "changeType == 'INSERT' && default\_\_vehicle.Price\_\_c >= 5000.0", "description": "Generate an event when a vehicle record whose price is greater than 5000 is created", "eventType": { "name": "VehicleCreated", "displayName": "Vehicle Created", "description": "Generate an event when a vehicle record whose price is greater than 5000 is created" } }

## Custom object record updated

You can use the following request sample to create a custom event that will be triggered when certain custom object records are updated for the `Entitlement` custom object.

{ "active": true, "baseObject": "default\_\_entitlement", "condition": "changeType == 'UPDATE' && default\_\_entitlement.Usage\_\_c >= default\_\_entitlement.Entitled\_\_c && default\_\_entitlement.Status != 'Trial'", "description": "Generate an event when an entitlement record is updated, if the usage equals to or greater than the entitlement and the entitlement status is not trial", "eventType": { "name": "EntitlementUpdated", "displayName": "Entitlement Updated", "description": "Generate an event when an entitlement record is updated, if the usage equals to or greater than the entitlement and the entitlement status is not trial" } }
