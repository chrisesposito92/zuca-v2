---
title: "Actions"
url: "https://developer.zuora.com/v1-api-reference/api/tag/Actions/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:27:13.666Z"
---

# Actions

Actions are operations that are batch in nature. For example, the "create", "update", "delete", and other operations allow changes to up-to 50 objects at a time. The "query" operation will return up-to 2000 result records back at a time, before requiring additional pages of data to be returned via a subsequent "queryMore" operation.

The default WSDL version for Actions is 79. If you want to change the WSDL version, set the `X-Zuora-WSDL-Version` header. To find out in which WSDL version a particular object or field was introduced, see [Zuora SOAP API Version History](https://knowledgecenter.zuora.com/DC_Developers/G_SOAP_API/Zuora_SOAP_API_Version_History).

**Note**: Actions do not support the Invoice Settlement feature. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. Actions also do not support the Orders feature.
