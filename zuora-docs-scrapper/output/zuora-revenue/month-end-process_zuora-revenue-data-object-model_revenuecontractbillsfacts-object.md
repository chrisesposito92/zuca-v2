---
title: "RevenueContractBillsFacts object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractbillsfacts-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:12.084Z"
---

# RevenueContractBillsFacts object

The RevenueContractBillsFacts object details billing transaction facts, including transaction types and unique identifiers, and outlines joining objects and expressions.

The RevenueContractBillsFacts object holds the details of the Billing transaction fact, which includes transaction types such as INV, CM, CM-R, CM-C, CM-RO, and RORD that are configured in the system.

## Unique identifiers

The following fields on the RevenueContractBillsFacts object can be used as unique identifiers to distinguish different RevenueContractBillsFacts objects.

RevenueContractBillID

Unique identifier of the revenue contract bill.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractBillsFacts object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueContractBillsDimensions | RevenueContractBillID = RevenueContractBillID |
