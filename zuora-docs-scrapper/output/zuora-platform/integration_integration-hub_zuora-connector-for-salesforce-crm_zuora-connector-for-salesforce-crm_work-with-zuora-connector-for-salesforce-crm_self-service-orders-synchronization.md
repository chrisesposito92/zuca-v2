---
title: "Self-Service orders synchronization"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/work-with-zuora-connector-for-salesforce-crm/self-service-orders-synchronization"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:09.977Z"
---

# Self-Service orders synchronization

This topic details the process of creating a Salesforce account and linking it to the CRM Account ID in Zuora for synchronizing self-service orders.

## Overview

This topic explains about creating the account in Salesforce and link it to the CRM Account ID field in the Zuora customer account. Because self-service websites and infrastructure to support those website vary, it is beyond the sc​​ope of this article to provide source-code.

Merchants often have a self-service website where customers make product selections, and upon checkout, a subscription is created in Zuora via the Zuora API. In these situations, if the merchant deployed Zuora CPQ to connect Zuora and their Salesforce instance, there is an extra step th​at must be performed before subscriptions created in Zuora are synced to Salesforce. This extra step is the creation of an account in Salesforce and linking it to the CRM ID field in the customer account in Zuora. The Zuora Connector for Salesforce CRM is one-way, from Zuora to Salesforce, and works only if the Salesforce account already exists and the CRM Account ID exists in the Zuora account.
