---
title: "ZSBConnectorUtils Class"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/global-classes-in-zuora-connector-for-salesforce-cpq/zsbconnectorutils-class"
product: "zuora-platform"
scraped_at: "2025-12-24T08:36:34.869Z"
---

# ZSBConnectorUtils Class

The ZSBConnectorUtils class provides global methods for managing contracts and products in Salesforce CPQ, including creating contracts from opportunities and quotes, syncing and deleting products, and sending contracts to Zuora.

## ZSBConnectorUtils Global Methods

The ZSBConnectorUtils class contains the following global methods in Salesforce CPQ.

| Method | Return Type | Description |
| --- | --- | --- |
| createContractFromOpportunity(Id opportunityId) | void | Creates contracts from opportunities - one at a time.Converts the primary quote to a contract for an opportunity.If the Billing Account does not exist in Zuora, this method will create the Billing Account in Zuora. |
| createContractFromQuote(Id quoteId) | void | Creates contracts from quotes - one at a time.Converts a quote to a contact.If the Billing Account does not exist in Zuora, this method will create the Billing Account in Zuora. |
| syncProductsToZuora(SET<Id> products) | void | Sync products to Zuora. |
| deleteProductsFromZuora(SET<Id> products) | void | Deletes products from Zuora. |
| sendContractsToZuora(SET<Id> contracts) | void | Sends contracts to Zuora.As of Zuora Connector for Salesforce CPQ 3.4, this global method is enhanced to support Orders.To use this global method:Create a new opportunityCreate a new Salesforce CPQ quoteAdd some products to the quoteCreate a new contract by clicking the Contract button or by any backend process if availableGet the newly created contact id once the contract is generatedCall this method with the contract id to send the contract to ZuoraSimilar procedures are applicable to amendment, renewal and cancellation flows. |
| makeAmendmentSummaries(Id contractId) | List<zsb.AmendmentSummary> | Retrieves a List of AmendmentSummaries from a Contract that has Products added to it. |
| backFill(Set<Id> contracts) | void | Triggers a backfill job. The job will read the Contract Ids of the Salesforce Contracts, invoke the process to query Zuora Subscriptions and Charges, and backfill the relevant fields in the Salesforce Contracts and Subscription lines |

## makeAmendmentSummaries() Method

See the following table for conditions and corresponding Amendment types of the generated summaries.

| Condition | Type of Amendment Summary Returned |
| --- | --- |
| Call makeAmendmentSummaries() on a contract where:The subscription hasn't been sent to ZuoraSBQQ__Subscription__c.RatePlanChargeId__c is nullThere is at least one product whose quantity is greater than 0 | NewProduct |
| Call makeAmendmentSummaries() on a contract where:SBQQ__Subscription__c.RatePlanChargeId__c is not nullThe subscription is to be sent to Zuora(Do Not Send To Zuora checkbox is not selected)SBQQ__Subscription__c.AmendmentCode__c is nullThe Quantity is equal to 0 | RemoveProduct Amendment Summary is returned except that:The product has a usageCharge typeSBQQ__Subscription__c.SBQQ__RevisedSubscription__c is not nullFor this exception, both a RemoveProduct and an AddProduct Amendment Summary are generated. |
| Call makeAmendmentSummaries() on a contract where:The product does not have a usageCharge typeThe Quantity is greater than 0SBQQ_Subscription__c.AmendmentCode__c is null AND (SBQQSubscription__c.SBQQRevisedSubscription__c is not null OR SBQQSubscription__c.UpdatedUponRenewal__c is true) | UpdateProduct |
| Call makeAmendmentSummaries() on a contract where:The Renewed Contract flag on the Opportunity (Opportunity.SBQQ__RenewedContract__c) is set to true.The Renewal Amendment Code (Contract.ZSB__RenewalAmendmentCode__c) on the Contract is blank. | Renewal |

## Sample code

Send Contract to Zuora

To programmatically send a contract to Zuora, set the Send to Zuora (ZSB\_\_SubscribeToZuora\_\_c) field on the Contract object to `true` as shown in the code sample below.

A contract is sent to Zuora asynchronously. When the response comes back from Zuora, the Zuora Sync Status (ZSB\_\_ZuoraSyncStatus\_\_c) field on the Contract object will be populated with the results.

Contract c = \[select Id FROM Contract Where Id='8003600000086iM' LIMIT 1\]; c.SubscribeToZuora\_\_c = true; update c;

Sync Products to Zuora

See the code sample below for how to programmatically sync products to Zuora.

SET<Id> products = new SET<Id>(); products.add('01tf4000000jLVf'); ZSB.ZSBConnectorUtils.syncProductsToZuora(products);

Delete Products from Zuora

See the code sample below for how to programmatically delete products from Zuora.

SET<Id> products = new SET<Id>(); products.add('01tf4000000jLVf'); ZSB.ZSBConnectorUtils.deleteProductsFromZuora(products);

Send Contract to Zuora

See the code sample below for how to programmatically send contracts to Zuora.

SET<Id> contracts = new SET<Id>(); contracts.add('800f4000000cCgQ'); ZSB.ZSBConnectorUtils.sendContractsToZuora(contracts);

Retrieve a List of AmendmentSummaries from a Contract

See the code sample below for how to programmatically retrieve a list of AmendmentSummaries from a Contract.

List<ZSB.AmendmentSummary> summaries = ZSB.ZSBConnectorUtils.makeAmendmentSummaries('8001Q000006r2Ci'); System.debug('Name: ' + (String) summaries\[0\].zamendment.getValue('Name')); System.debug('Type: ' + (String) summaries\[0\].zamendment.getValue('Type')); System.debug('Date: ' + (String) summaries\[0\].zamendment.getValue('ContractEffectiveDate')); Zuora.zObject rpd = (Zuora.zObject) summaries\[0\].zamendment.getValue('RatePlanData'); Zuora.zObject\[\] rpcd = (Zuora.zObject\[\]) rpd.getArrayValue('RatePlanChargeData'); Zuora.zObject rpc = (Zuora.zObject) rpcd\[0\].getValue('RatePlanCharge'); String chargePrice = (String) rpc.getValue('Price'); System.debug('Price: " + chargePrice);
