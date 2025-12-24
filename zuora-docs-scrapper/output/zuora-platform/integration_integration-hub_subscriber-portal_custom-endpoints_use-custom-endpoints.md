---
title: "Use custom endpoints"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/subscriber-portal/custom-endpoints/use-custom-endpoints"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:27.444Z"
---

# Use custom endpoints

Learn how to request and utilize custom endpoints within the Subscriber Portal using JavaScript.

Custom endpoints can be requested using JavaScript from any custom panel or custom page in the Subscriber Portal.

![custom endpoints flow](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8afbe73b-5cd4-43f4-b0c6-26edf75f0f4d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhhZmJlNzNiLTVjZDQtNDNmNC1iMGM2LTI2ZWRmNzVmMGY0ZCIsImV4cCI6MTc2NjY0MTcwNSwianRpIjoiYTkwMmM4MzBhODk2NGQxYzkzNmU0MGZmZjJiNjgyMTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.4WsoKTLAc73DQUsTmh6en79eNu_l0W2NomW2lkUHzcs)

When calling a custom endpoint from the Subscriber Portal, the following processes take place:

1.  A caller, for example, a custom webpage, makes a call to the backend system of the Subscriber Portal (Subscriber Portal API Layer).
2.  The portal back-end calls the endpoint of downstream systems such as Zuora, a shipping system, or a validation system. The results are then returned to the Subscriber Portal back-end system.
3.  The response is returned to the caller and the results are displayed in the front-end UI.

For example, a custom panel makes a request to retrieve a list of subscriptions, the Portal calls Zuora to retrieve this information and then returns a list of subscriptions to be displayed on the custom page. The sample call is:

$.ajax({ url: "api/v1/endpoints/getSubs", //call the custom endpoint named getSubs Type:'post', //always post the request to custom portal endpoint and the custom endpoint is setup to perform a get/post downstream headers: { 'access-token': window.localStorage.getItem('accessToken'), 'client': window.localStorage.getItem('client'), 'tokenType': window.localStorage.getItem('tokenType'), 'uid': window.localStorage.getItem('uid'), 'expiry': window.localStorage.getItem('expiry') } }).then(function(data) { //perform desired action with result }
