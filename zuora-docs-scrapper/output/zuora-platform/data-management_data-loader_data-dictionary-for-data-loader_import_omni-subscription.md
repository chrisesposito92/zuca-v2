---
title: "Omni subscription"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/omni-subscription"
product: "zuora-platform"
scraped_at: "2026-02-20T17:36:30.692Z"
---

# Omni subscription

This reference document provides a comprehensive list of fields in the Omni Subscription data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| Account Id* | The associated Zuora account id. It must be firstly created. | follow the rule of the current Zuora account ID |
| External Product Id* | The product id in the external system. | varchar(500) |
| External Subscription Id* | The original transaction id of the notification. | varchar(32) NOT NULL |
| Auto Renew | The term type, true or false. | boolean |
| Currency Code | currency code, 3 chars |  |
| External Activation Date | When the external subscription was activated on the external platform. UTC time, `yyyy-mm-dd hh:mm:ss`. | date time |
| External Application Id | the application ID of the subscription recoreded in the third party system. | varchar(150) |
| External Bundle Id | the bundle ID of the subscription recoreded in the third party system. | varchar(150) |
| External Expiration Date | The expiresDate is a static value that applies for each transaction. UTC time, `yyyy-mm-dd hh:mm:ss`. | date time |
| External In App Ownership Type | Such as purchased, family_shared. | varchar(30) |
| External Last Renewal Date | the last renewal date of the subscription recoreded in the third party system. | date time |
| External Next Renewal Date | the next renewal date of the subscription recoreded in the third party system. | date time |
| External Price | The price of the product. | decimal(22,9) |
| External Purchase Date | The App Store charged the user’s account for a purchase, restored product, subscription, or subscription renewal after a lapse. UTC time, `yyyy-mm-dd hh:mm:ss`. | date time |
| External Purchase Type |  | varchar(30) |
| External Quantity | The quantity of the product. Must be >= 0. | int |
| External Replace By Product Id | The productId is going to replace the existing productId. | varchar(500) |
| External Source System | For example, Apple, Google, Roku, Amazon. | varchar(100) NOT NULL |
| External State | The original status from client, such as active, canceled, expired, pastDue. | varchar(100) |
| External Subscriber Id | The subscriber ID from client. | varchar(150) |
| External Transaction Reason | The latest transaction reason. | varchar(100) |
| State | The common external subscription state. | varchar(30) |
