---
title: "Invoke the subscribe() call"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/subscribe/invoke-the-subscribe-call"
product: "zuora-platform"
scraped_at: "2025-12-24T05:39:09.804Z"
---

# Invoke the subscribe() call

Learn how to invoke the subscribe() call.

To invoke the subscribe() call, begin by populating all of the data (account, contact, payment method), then call subscribe().

1.  Populate all of the required fields for the [Account](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/account) object.
2.  Populate all of the required fields for the [Contact](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/contact) object to be used as the BillTo.
3.  Populate all of the required fields for the Contact object to be used as the SoldTo. If this is not set, the BillTo will also be used as the SoldTo contact.
4.  Populate all of the required fields for the [PaymentMethod](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/paymentmethod) object.
5.  Populate all of the required fields for the SubscriptionData object. This includes the following tasks:
    1.  Populate all of the required fields for the [Subscription](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/subscription) object.
    2.  Populate all of the required fields for the [RatePlan](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/rateplan) object. Use a valid ID for `ProductRatePlanId` .
    3.  Populate all of the required fields for the [RatePlanCharge](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/rateplancharge) objects:

        -   For WSDL v1-v10: use a valid ID for ProductRatePlanChargeId. If no RatePlanCharge objects are passed, the default RatePlanCharges will copied from the RatePlan object whose ID is passed in the RatePlan object in step 5.2.

        -   For WSDL v11+: Pass in a valid RatePlanChargeData object. If you do not pass RatePlanChargeData objects, the default RatePlanCharges will copied from the RatePlan object whose ID was passed in the RatePlan object.


6.  Create a SubscribeRequest object. Set all of the objects created in the previous steps.
7.  Call the subscribe() method, passing in the SubscribeRequest object and the SessionHeader object returned by the [login()](/zuora-platform/integration/apis/soap-api/soap-api-calls/login) call.
8.  Zuora returns a SubscribeResponse object. Get the SubscribeResult object from the returned response object and check for the value of the success field.

    -   If the success value is true, read the other values returned in the SubscribeResult such as the `AccountId` , `AccountNumber` , `SubscriptionId` , `SubscriptionNumber` , `InvoiceNumber` , `PaymentTransactionNumber` .

    -   If the success value is false, then process the errors by getting the Code and Message from the error objects.
