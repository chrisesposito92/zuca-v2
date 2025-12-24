---
title: "Tax codes configuration through settings API"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-codes-setup/tax-codes-configuration-through-settings-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:01.182Z"
---

# Tax codes configuration through settings API

This topic lists tax codes configuration through the settings API in addition to the Zuora UI.

Besides configuring tax codes through the Zuora UI as described above, you can also configure tax codes through the [settings API](https://www.zuora.com/developer/api-references/api/tag/Settings).

| Setting Key | Context | HTTP Method | HTTP URL | Parameter description | Setting description |
| --- | --- | --- | --- | --- | --- |
| AllTaxCode | Entity | GET | /settings/tax-codes |  | Retrieve all tax codes |
| CreateZuoraTaxCode | Entity | POST | /settings/tax-codes/ztax |  | Create tax code under Zuora Tax Engine |
| ZuoraTaxCode | Entity | GET | /settings/tax-codes/ztax/{id} | id = Unique ID of the tax code | Retrieve tax code under Zuora Tax Engine |
| ZuoraTaxCode | Entity | PUT | /settings/tax-codes/ztax/{id} | id = Unique ID of the tax code | Update tax code under Zuora Tax Engine |
| ZuoraTaxCode | Entity | DELETE | /settings/tax-codes/ztax/{id} | id = Unique ID of the tax code | Delete tax code under Zuora Tax Engine |
| CreateAvalaraTaxCode | Entity | POST | /settings/tax-codes/avalara |  | Create tax code under Avalara Tax Engine |
| AvalaraTaxCode | Entity | GET | /settings/tax-codes/avalara/{id} | id = Unique ID of the tax code | Retrieve tax code under Avalara Tax Engine |
| AvalaraTaxCode | Entity | PUT | /settings/tax-codes/avalara/{id} | id = Unique ID of the tax code | Update tax code under Avalara Tax Engine |
| AvalaraTaxCode | Entity | DELETE | /settings/tax-codes/avalara/{id} | id = Unique ID of the tax code | Delete tax code under Avalara Tax Engine |
| CreateConnectorTaxCode | Entity | POST | /settings/tax-codes/connector |  | Create tax code under Connect Tax Engine |
| ConnectorTaxCode | Entity | GET | /settings/tax-codes/connector/{id} | id = Unique ID of the tax code | Retrieve tax code under Connect Tax Engine |
| ConnectorTaxCode | Entity | PUT | /settings/tax-codes/connector/{id} | id = Unique ID of the tax code | Update tax code under Connect Tax Engine |
| ConnectorTaxCode | Entity | DELETE | /settings/tax-codes/connector/{id} | id = Unique ID of the tax code | Delete tax code under Connect Tax Engine |
