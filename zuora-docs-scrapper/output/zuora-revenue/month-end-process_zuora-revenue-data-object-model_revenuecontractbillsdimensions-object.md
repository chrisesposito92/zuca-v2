---
title: "RevenueContractBillsDimensions object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractbillsdimensions-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:09.439Z"
---

# RevenueContractBillsDimensions object

The RevenueContractBillsDimensions object details billing transaction dimensions, including transaction types and unique identifiers, and outlines joining objects and expressions for data integration.

The RevenueContractBillsDimensions object holds the details of the billing transaction dimensions, which includes transaction types such as INV, CM, CM-R, CM-C, CM-RO, and RORD that are configured in the system.

## Unique identifiers

The following fields on the RevenueContractBillsDimensions object can be used as unique identifiers to distinguish different RevenueContractBillsDimensions objects.

RevenueContractBillID

Unique identifier that is assigned to billing line record by Zuora Revenue, which cannot be updated by any other method.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractBillsDimensions object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueContracts | RevenueContractID = RevenueContractID AND RevenueBookID = RevenueBookID AND RevenueOrganizationCode = RevenueOrganizationCode AND RevenueClientID = RevenueClientID |
| RevenueCalendar | AccountingPeriodID = CreatedAccountingPeriodID |
| RevenueContractLinesDimensions | RevenueContractLineID = RevenueContractLineID |
