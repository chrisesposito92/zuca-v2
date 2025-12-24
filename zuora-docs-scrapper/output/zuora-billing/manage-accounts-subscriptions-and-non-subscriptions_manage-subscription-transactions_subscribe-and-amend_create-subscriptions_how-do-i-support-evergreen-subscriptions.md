---
title: "How do I support evergreen subscriptions?"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/create-subscriptions/how-do-i-support-evergreen-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:33:08.010Z"
---

# How do I support evergreen subscriptions?

Evergreen subscriptions are "good until canceled" models that simplify the subscriber interactions and eliminates the requirement of renewal processes.

Many subscription businesses, especially those selling to consumers, want to offer evergreen subscriptions. You can think of evergreen subscriptions as "good until canceled" subscriptions, where a subscriber will automatically continue to be charged their recurring subscription fees unless they explicitly cancel their subscription with you. Netflix, Comcast, and SurveyMonkey are well-known examples of businesses that offer evergreen subscriptions.

Evergreen subscriptions are in contrast to termed subscriptions within Zuora; the latter expires after a period of time and must be renewed. Now commonplace in the subscription economy, evergreen subscriptions are worth considering for your business. Because evergreen subscriptions never expire, they can dramatically simplify the interactions between you and your subscribers by eliminating the need to manage a renewal process in addition to reducing your customer churn.

## Solution

The following steps describe how to create evergreen subscriptions in Zuora.

## New Evergreen Subscription via the Zuora UI

When creating a new subscription in the Zuora UI, select the Evergreen option as the Term Setting within the Basic Information section.

![New Subscription Term Setting](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0f45d2de-c2ce-41a4-912f-b3c9c0f142ec?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjBmNDVkMmRlLWMyY2UtNDFhNC05MTJmLWIzYzljMGYxNDJlYyIsImV4cCI6MTc2NjY0MDc4NSwianRpIjoiOTQ5MzkxYzI5NmU0NGZkODk4NWJkMzc2N2QwMmI0NmEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.vwXM9LAgWNOLfEpC-vusVvoSjlPHP1vtMFNaVg9PScE)

You can also configure a subscription to start as termed, but then automatically change to evergreen when it is renewed. The Renewal Settings allows you to do this. See Specifying Basic Information for a Subscription for more information.

## New Evergreen Subscription via the Zuora API

When creating a new subscription using the `subscribe()` call in the Zuora APIs, simply set the `TermType` field within the `Subscription object` to EVERGREEN (note: EVERGREEN is case-sensitive).

## Existing Subscription via the Zuora UI Changes

If you wish to change existing termed subscriptions into evergreen subscriptions, you can utilize the Terms and Conditions amendment in the UI . Simply create a Terms and Conditions amendment for the subscription you want to change, and in the Term Setting row of the Amendment Detail section, select the radio button for Evergreen .

![T_percent_26C_Amendment_UI_Evergreen](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9064e07e-ad1a-4239-8671-559dd97bb20b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkwNjRlMDdlLWFkMWEtNDIzOS04NjcxLTU1OWRkOTdiYjIwYiIsImV4cCI6MTc2NjY0MDc4NSwianRpIjoiMzQ0NTZmMjQ0ZGFhNGEyMGI2NjQzY2I3NWZmMjY5YjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.dkeUTofs23hJ6hI7iAeVMzhSWDiRi39BRCWJuadzf3M)

## Existing Subscription via the Zuora API Changes

If you wish to change existing termed subscriptions into evergreen subscriptions, you can utilize the Terms and Conditions amendment in the API. Within the Amendment object that is passed in the amend() call , simply set the `TermType` field to `EVERGREEN` (note: EVERGREEN is case-sensitive).
