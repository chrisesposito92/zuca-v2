---
title: "GET Describe"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_Describe/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:28:28.162Z"
---

## Describe an object

Provides a reference listing of each object that is available in your Zuora tenant.

The information returned by this call is useful if you are using [CRUD: Create Export](https://developer.zuora.com/api-references/api/operation/Object_POSTExport) or the [AQuA API](https://knowledgecenter.zuora.com/DC_Developers/T_Aggregate_Query_API) to create a data source export. See [Export ZOQL](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL) for more information.

### Response

The response contains an XML document that lists the fields of the specified object. Each of the object's fields is represented by a `<field>` element in the XML document.

Response sample:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<object>
  <name>ProductRatePlanCharge</name>
  <label>Product Rate Plan Charge</label>
  <fields>
    ...
    <field>
      <name>TaxMode</name>
      <label>Tax Mode</label>
      <type>picklist</type>
      <options>
        <option>TaxExclusive</option>
        <option>TaxInclusive</option>
      </options>
      <contexts>
        <context>export</context>
      </contexts>
      ...
    </field>
    ...
  </fields>
</object>
```

It is strongly recommended that your integration checks `<contexts>` elements in the response. If your integration does not check `<contexts>` elements, your integration may process fields that are not available for use in data source exports. See [Changes to the Describe API](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL/Changes_to_the_Describe_API) for more information.

Security**bearerAuth**

Request

##### path Parameters

| objectrequired | stringAPI name of an object in your Zuora tenant. For example, InvoiceItem. See API object names for Describe for the list of valid object names.Depending on the features enabled in your Zuora tenant, you may not be able to list the fields of some objects. |
| --- | --- |

##### query Parameters

| showCurrencyConversionInformation | stringSet the value to yes to get additional currency conversion information in the result. Notes:When Automatically include additional Currency Conversion information in currency conversion settings is checked, you can pass yes to get additional fields in the result. See Configure Foreign Currency Conversion to check the Automatically include additional Currency Conversion information.By default if you need additional Currency Conversion information, submit a request at Zuora Global Support. Set this parameter value to no to not include the additional currency conversion information in the result. |
| --- | --- |
| showRelationships | booleanDefault: falseIndicates whether to return joined objects information in the response. The default value is false, meaning no related object information is returned.If you set this field to true, an additional <related-objects /> section is returned. For example, if you are describing the Account object with this parameter set to true, the response will include information similar to the following snippet:<related-objects>   <object href="https://apisandbox-api.zuora.com/rest/api/describe/Contact">     <name>BillToContact</name>     <label>Bill To</label>     <cardinality>TO_ONE</cardinality>     <direct-relationship>true</direct-relationship>     <path>Account.BillToContact</path>   </object>   ... <related-objects> |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

Returns an XML document that lists the fields of the specified object.

404

Returns an XML document that indicates the error

500

Internal Server Error

get/v1/describe/{object}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/describe/{object}?showCurrencyConversionInformation=string&showRelationships=false' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   500

text/xml

Copy

<?xml version="1.0" encoding="UTF-8"?> <object href\="https://apisandbox-api.zuora.com/rest/api/describe/Account"\> <name\>Account</name\> <label\>Account</label\> <fields\> <field\> <name\>AccountNumber</name\> <label\>Account Number</label\> <selectable\>true</selectable\> <createable\>true</createable\> <updateable\>true</updateable\> <filterable\>true</filterable\> <custom\>false</custom\> <maxlength\></maxlength\> <required\>false</required\> <type\>text</type\> <contexts\> <context\>soap</context\> <context\>export</context\> </contexts\> </field\> </fields\> <related-objects\> <object href\="https://apisandbox-api.zuora.com/rest/api/describe/Contact"\> <name\>BillToContact</name\> <label\>Bill To</label\> <cardinality\>TO\_ONE</cardinality\> <direct-relationship\>true</direct-relationship\> <path\>Account.BillToContact</path\> </object\> </related-objects\> </object\>
