---
title: "Check WSDL versions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/zuora-wsdl/check-wsdl-versions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:37.601Z"
---

# Check WSDL versions

This reference provides information about where to check the WSDL versions.

## File name

The versions are identified in the WSDL filename. For example, the name of the WSDL file for version 39.0 is `zuora.39.0.wsdl` .

## XML content

The XML in the WSDL file also indicates the version as part of the service endpoint, so if the WSDL file is renamed, you can still identify the version by searching for `ZuoraService` and checking the address, as shown here.

<service name="ZuoraService"\> <port binding="zns:SoapBinding" name="Soap"\> <soap:address location="https://apisandbox.zuora.com/apps/services/a/47.0"\> </soap:address></port> </service>
