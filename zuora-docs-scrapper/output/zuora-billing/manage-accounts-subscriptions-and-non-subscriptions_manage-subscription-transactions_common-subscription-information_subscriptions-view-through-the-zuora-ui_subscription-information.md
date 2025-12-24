---
title: "Subscription information"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-view-through-the-zuora-ui/subscription-information"
product: "zuora-billing"
scraped_at: "2025-12-24T05:18:28.863Z"
---

# Subscription information

This topic explains about subscription details, including charges, terms, and how to view individual subscriptions.

Each subscription contains important information about the order that a customer has placed, such as the charges for products or services. A subscription also includes the terms and conditions for when the charges are billed. When you view an individual subscription, you will see the following information.

To view an individual subscription, access Subscriptions and select any subscription. This takes you to a page with detailed information about that subscription. The customer name and subscription number are displayed at the top of an individual subscription page.

| Field | Description |
| --- | --- |
| Subscription Number | A unique identifier for the subscription. It is also referred to as the subscription code.For example: A-S00000080If you are creating a subscription in the Zuora user interface, Zuora creates a number automatically. You cannot change the subscription number after creating the subscription. |
| Customer Name | This is the name of the customer account (also referred to as a billing account) that is subscribing to your products or services. |
| Status | A subscription can be Draft , Active , Pending , Expired , Cancelled , or Suspended .Suspend a subscription is in Limited Availability . |
| Initial Term | The length of the period for the first subscription term. |
| Current Term | The length of the period for the current subscription term. |
| Renewal Term | This is the length of the periods your subscription will renew for after the initial term ends. |
| Autorenew | Indicates whether a subscription is set to automatically renew at the end of its term.When the initial term for a subscription is over, and if Autorenew is set to true , the subscription will automatically renew. Your customer will continue to be billed for the number of periods specified by the renewal term.If you set Autorenew to false , the subscription will expire after the initial term is over. Your customer will not be billed beyond the initial term. |
| Last Booking Date | The last change date of a subscription. This field is writable only when the subscription is newly created as a first version subscription. The value of this field is as follows:For a new subscription created by the Subscribe and Amend APIs and UI, this field has the value of the subscription creation date.For a subscription changed by an amendment, this field has the value of the amendment booking date.For a subscription created or changed by an order, this field has the value of the order date. |
| Notes | This contains notes about your subscription. |
| Version | Zuora automatically generates a version number when you make a change to the subscription. Click the link to view more information about changes made to the current subscription. |
| Pending Amendments | This indicates whether amendments are pending (whether an amendment has been submitted but not yet executed.) |
| Change History | This field contains information about the latest changes made to the subscription. For more information, see View subscription change history . |
| Quote Number | The unique identifier of the Quote.This field is used in the Zuora Reporting Data Sources to report on Subscription metrics.If the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes. |
| Quote Type | The Quote type that represents the subscription lifecycle stage such as New, Amendment, Renew or Cancel.This field is used in the Zuora Reporting Data Sources to report on Subscription metrics.If the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes. |
| Quote Business Type | The specific identifier for the type of business transaction the Quote represents such as New, Upsell, Downsell, Renewal or Churn.This field is used in the Zuora Reporting Data Sources to report on Subscription metrics.If the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes. |
| Opportunity Name | The unique identifier of the Opportunity.This field is used in the Zuora Reporting Data Sources to report on Subscription metrics.If the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes. |
| Opportunity Close Date | The closing date of the Opportunity.This field is used in the Zuora Reporting Data Sources to report on Subscription metrics.If the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes. |
| Additional Fields | Click Additional Fields to edit the Subscription Number (or it will be auto-generated) or the Term Start Date (if the term start date is different from the contract effective date).By default, the billing term starts when the contract becomes effective, which is set when saving the subscription. However, you can enter a different term start date, if required. |
| Customer Acceptance Date | This is the date on which your customer accepted your subscription's products or services. See Dates in Zuora for more information about using subscription dates. |
| Contract Effective Date | This is the date on which your subscription, or contract, is effective. |
| Products | Each subscription is for products or services that you have sold. See Product Catalog for more information about setting up your subscription products. |
| Rate Plans | Each of your subscription products or services has a rate plan which describes how you are charging your product. See Creating a Product Rate Plan for more information. |
| Billing Timing | This field describes the billing timing of a rate plan charge. It can be In Advance or In Arrears for recurring charge types. This field is empty for other charge types.Note:This feature is in theEarly Adopter phase. If you want to have access to the feature, submit a request at Zuora Global Support . |
