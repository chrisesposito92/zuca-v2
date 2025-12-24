---
title: "Tax codes configuration for Avalara"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/direct-avalara-integration/integration-configuration-with-avalara/tax-codes-configuration-for-avalara"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:24.064Z"
---

# Tax codes configuration for Avalara

This topic details the process of configuring tax codes in Zuora Billing and associating them with Avalara tax codes.

## Overview

This article explains how to create tax codes in Zuora Billing, and how to associate these with the tax codes you have defined in Avalara.

## About tax codes

A tax code is a unique label used to group Items (products, services, or charges) together. Tax codes typically identify categories of like products, services, or charges, and are used to identify which tax rules and rates to apply to a specific charge.

There is a one-to-many relationship between tax codes and products. For example, the tax code “Apparel” can map to hundreds of product stock keeping units (SKUs) for clothing in various sizes and colors. For many companies, a single tax code, such as “Internet Service” is applicable to all products sold.

## Configure Avalara tax codes in Zuora Billing

Tax codes are defined in both Avalara and Zuora Billing. Avalara calculates tax rates according to the tax code defined in the AvaTax Admin Console , however you cannot use these directly in Zuora. You must define a separate tax code in Zuora Billing and associate it with the tax code in AvaTax. If you have multiple Avalara Tax Codes, you must set up matching Zuora Tax Codes in Zuora Billing.

To find out how to create new tax codes in Avalara see Add a Tax Code .

To learn about how to set up taxation codes in Zuora, see Add a Tax Code for Avalara .

## Item codes

An item code is a label that represents an individual or group of products, services, or charges.

For tax codes configured to use Avalara as their tax engine, you can send tax code and item code information to Avalara in separate fields. Specify the Avalara Item Code in the Tax Code Name field, and the Avalara Tax Code in the Avalara Tax Code field.

If you use the legacy Avalara Connector, the information sent in the Tax Code Name field is stored as both the tax code and item code in Avalara. It is not possible to send separate values for item code and tax code.

If you migrate from using the connector to using the integration solution, and have existing item code to tax code mappings in Avalara, you may need to update these mappings to use the new values. For more information on migrating to the real-time integration, see Migrate from Avalara Connector to Avalara Integration.
