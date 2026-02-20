---
title: "Promo Codes"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/promo-codes"
product: "zuora-platform"
scraped_at: "2026-02-20T21:10:23.130Z"
---

# Promo Codes

Explains how Zuora's Promo Codes app simplifies the management of promotional campaigns with automated solutions for generating, redeeming, and tracking promo codes.

## Promo Codes overview

Leveraging promotion codes and coupons can be a complicated process. The processes like generating unique codes, enabling code redemption, setting time limits can get convoluted and cumbersome if you do not have an automated solution.

Zuora’s Promo Codes app offers an efficient and automated solution for this requirement. You can configure campaigns that hold multiple child campaigns or promotion codes with different code types. The codes are grouped together so that custom fields can be applied, and facilitate collecting metrics on all codes in the campaign. This app also gives you the flexibility to create custom field hierarchy that allows inheritance from top to bottom.

With its ease of configuration and various APIs, the application can manage millions of codes and customers without any manual intervention or custom workarounds.

## Features

-   Time-boxed promotion campaigns and specific codes.

-   Flexible custom field hierarchy.

-   Create single-use codes and assign them to customers.

-   Create codes that can be used multiple times and count down the available quantity after each successful use.

-   Ability to mass create, copy, move, update, and delete promotion codes.

-   Link codes to specific discounts in the Zuora catalog.

-   Specify your own validation rules for each code generated in the system.

-   APIs to create, validate, and consume campaigns and promotion codes.


## Getting Started with Promo Codes

## Install Promo Codes app

As a first step, you must install the Promotion Codes app from your Zuora tenant. To learn about how to install an app, see [Install an App](/zuora-platform/integration/integration-hub/get-started-with-integration-hub/install-an-app-you-purchased-in-zuora) .

## Set up Promo Codes

After the Promotion Codes app is installed, you must create and configure promotion codes. See [Configure a campaign](/zuora-platform/integration/integration-hub/promo-codes/configure-a-campaign) . for more information.

## Use Promo Codes

After the promotion codes are created and configured, you can use either the UI or API to use the promotion codes and manage campaigns or child campaigns.

-   For using and managing promotion codes or child campaigns through the UI, see [Manage campaigns](/zuora-platform/integration/integration-hub/promo-codes/manage-promotion-codes/update-child-campaign-configuration) for more information.

-   For more information about available API, see [Swagger API Docs](https://promotion-codes.apps.zuora.com/api-docs/index.html) . The URL and credentials required to make requests are provided in the API Docs tab in your Promotion Codes instance.


## Constraints

-   Currently, if a child campaign has no code consumptions, the export job can get stuck.

-   By design, Promo Codes ignores discounts on rate plans with multiple charges. If you want the discount to appear, it needs to be on a rate plan alone. For example, if a Discount Product Rate Plan only has one fixed-amount discount charge, this Discount Product Rate Plan can be added into a Promo Code. However, if a Product Rate Plan has both a fix-amount discount and a percentage discount, this Product Rate Plan cannot be added into a Promo Code.

-   Currently, the Create Rules API does not support adding specific rate plans or overriding discounts.

-   The API support for intelli code is in the beta phase.
