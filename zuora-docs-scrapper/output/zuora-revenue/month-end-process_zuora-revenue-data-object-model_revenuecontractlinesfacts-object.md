---
title: "RevenueContractLinesFacts object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractlinesfacts-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:24.669Z"
---

# RevenueContractLinesFacts object

The RevenueContractLinesFacts object contains details of sales order transactions, including unique identifiers and joining expressions for data integration.

The RevenueContractLinesFacts object holds the details of the sales order transaction fact that is configured in the system.

## Unique identifiers

The following fields on the RevenueContractLinesFacts object can be used as unique identifiers to distinguish different RevenueContractLinesFacts objects.

RevenueContractLineID

Unique identifier that is assigned to the revenue contract line record by Zuora Revenue, which cannot be updated by any other method.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractLinesDimensions object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueContractLinesDimensions | RevenueContractLineID = RevenueContractLineID |
