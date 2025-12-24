---
title: "Zuora WSDL download URLs"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/zuora-wsdl/zuora-wsdl-download-urls"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:40.336Z"
---

# Zuora WSDL download URLs

This reference provides the URL for each environment where you can download WSDL.

In WSDL 68 and earlier, there are 56 date fields in the Zuora SOAP API that Zuora treats as dateTime fields. From WSDL 69 and later, Zuora treats these fields as date fields and they will no longer accept dateTime values. Before downloading and using WSDL 69 or later, check to see if your SOAP integration passes or receives dateTime values to or from any of these fields.

See [Date fields changes in the SOAP API](/zuora-platform/integration/apis/soap-api/date-field-changes-in-the-wsdl) for more information.

As of Zuora WSDL v61.0, downloading the WSDL supports custom fields. Re-adding custom fields after downloading the WSDL is no longer required.

To download the Zuora WSDL, use one of the following addresses. Replace XX.X by the version you want to download, for example, `63.0`. Omit the `version` parameter to retrieve the latest WSDL version.

| Zuora environment | WSDL URL |
| --- | --- |
| Production | https://www.zuora.com/apps/servlet/GenerateWsdl?version=XX.X |
| API Sandbox | https://apisandbox.zuora.com/apps/servlet/GenerateWsdl?version=XX.X |
| Services | https://servicesNNN.zuora.com/apps/servlet/GenerateWsdl?version=XX.XNNN denotes the services environment number. |
| Performance Test | https://pt1.zuora.com/apps/servlet/GenerateWsdl?version=XX.X |
| EU Production | https://eu.zuora.com/apps/servlet/GenerateWsdl?version=XX.X |
| EU Sandbox | https://sandbox.eu.zuora.com/apps/servlet/GenerateWsdl?version=XX.X |
| Central Sandbox | https://test.zuora.com/apps/servlet/GenerateWsdl?version=XX.X |
| EU Central Sandbox | https://test.eu.zuora.com/apps/servlet/GenerateWsdl?version=XX.X |
| APAC Production | https://ap.zuora.com/apps/servlet/GenerateWsdl?version=XX.X |
| APAC Central Sandbox | https://test.ap.zuora.com/apps/servlet/GenerateWsdl?version=XX.X |
