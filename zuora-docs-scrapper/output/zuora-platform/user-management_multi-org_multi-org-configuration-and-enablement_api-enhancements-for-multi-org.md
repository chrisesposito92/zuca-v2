---
title: "API enhancements for Multi-Org"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-enablement/api-enhancements-for-multi-org"
product: "zuora-platform"
scraped_at: "2026-01-15T22:00:01.056Z"
---

# API enhancements for Multi-Org

This document references the API enhancements for Multi-Org, including new fields and headers for account creation and data visibility management, applicable when Multi-Org is enabled.

An org unit represents a business unit that operates independently and can sell products to multiple customers. Each org unit has its own isolated environment in which the org users can perform business operations independent of the other org units.

## Newly added fields

While creating an account:

`organizationLabel` : Use this to specify the organization name the account must belong to.

## Newly added headers

`Zuora-Org-Ids`

`Zuora-Working-Org`

These 2 headers are supported for all the Zuora public APIs and are applicable only when Multi-Org is enabled. The objective of these 2 headers is to limit the data visibility for query APIs. The returned dataset is specific to the orgs specified using the above headers.

`POST/query/jobs`

`{`

`“query” : “ select accountnumber, balance from account”`

`…`

`}`

Depending on the user's org labels, `Zuora-Org-Ids` header, a different dataset would be returned for different scenarios:

| User's Org Label | Zuora-Org_Ids | Description |
| --- | --- | --- |
| Asia, China, Japan | N/A | All accounts across the 3 organizations will be returned |
| Asia, China, Japan | Asia | Only the accounts with the label “Asia” will be returned |
| Asia, China, Japan | Asia, China | Accounts of Asia and China will be returned |
| Asia | China | Invalid Request. The user does not have access to China |

## For Creation APIs

`Zuora-Working-Org` will be used as the default org label value if the org label is not explicitly specified or there is no inheritance rule in place.

For example, to create a standalone invoice `accountid` is required. In this case, the invoice simply inherits the account org.

If there are no inheritance rules defined, the create action is labeled with the org specified by the `Zuora-Working-Org` header.

For example, to create an Account object through the Create Action call `POST/v1/action/create` the product will be labeled with the org specified in the `Zuora-Working-Org` header.

To see how all operations are supported for Multi-Org hierarchy management through REST API, see [API Reference](https://developer.zuora.com/v1-api-reference/introduction/) .
