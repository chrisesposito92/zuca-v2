---
title: "Configure the SAP S/4 HANA system for billing set-up"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_billing/execute-the-sap-gl-billing-connector/configure-the-sap-s4-hana-system-for-billing-set-up"
product: "zuora-platform"
scraped_at: "2025-12-24T08:38:08.043Z"
---

# Configure the SAP S/4 HANA system for billing set-up

This guide provides instructions for configuring the SAP S/4 HANA system to support billing integration with Zuora.

## Configuring SAP Enterprise Structure

You must align and define the SAP Enterprise Structure to represent the business entity that the Zuora instance is supporting for billing integration purposes. This primarily involves setting up the Company Code, Sales Organization, Distribution Channel, and Division, along with the matching sales area combination, at a minimum.

## Configuring SAP Billing Document Types (Invoice, Credit Memo, Debit Memo)

Billing Document Types: Set up the appropriate billing types for Invoice, Credit Memo, and Debit Memo to be able to integrate the billing-related data flowing from connected Zuora instances.

Billing Item Categories: Set up the appropriate billing item categories for Invoice, Credit Memo, and Debit Memo to integrate the billing-related data flowing from connected Zuora instances.

Pricing Condition Types: Set up the appropriate pricing condition types based on the desired integration from Zuora pricing elements to SAP pricingvalues, such as Billing Prices / Rates, Discounts, Surcharges, and Tax values, based on the core SAP S/4 HANA functionality. This should be in alignment with the overall integration design and approach for the specific Zuora> SAP Billing integration design.

Pricing Procedure: Set up the appropriate pricing procedure based on the integration desired from Zuora pricing elements to SAP pricing values.This is a prerequisite to getting the billing-related pricing data passed from Zuora Invoice to the mapped SAP Billing documents. Again, this is all part of the integration design approach and will be specific to the business scenarios that Zuora Billing supports for this integration.
