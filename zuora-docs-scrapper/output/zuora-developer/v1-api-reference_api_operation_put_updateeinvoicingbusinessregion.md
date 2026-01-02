---
title: "PUT UpdateEInvoicingBusinessRegion"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_UpdateEInvoicingBusinessRegion/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:57:43.879Z"
---

## Update an e-invoicing business region

Updates an e-invoicing business region by key. The key can be the unique ID or number of an e-invoicing business region.

**Note**: This operation is available only if you have the [E-Invoicing](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-overview) feature in **Early Adopter** phase enabled.

Security**bearerAuth**

Request

##### path Parameters

| keyrequired | stringThe unqiue ID or number of the e-invoicing business region that you want to update. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| addressLine1 | stringThe first line of the Seller's address, which is often a street address or business name. |
| --- | --- |
| addressLine2 | stringThe second line of the Seller's address, which is often the name of a building. |
| businessName | string <= 255 charactersThe full official name that the Seller is registered with the relevant legal authority. |
| businessNumber | stringThe specify the unique identifier number of the legal entity or person that you do business with.For example, you must use a GSTIN for India and Tax Identification Number (TIN) for Saudi Arabia. |
| businessNumberSchemaId | stringThe identification scheme identifier that an official registrar issues to identify the Seller as a legal entity or person. |
| city | stringThe the name of the city where the business is located. |
| contactName | string <= 255 charactersThe name of the Seller contact to receive e-invoicing data. |
| country | stringThe short name of a country or region where you must comply with e-invoicing requirements. For example, IN for India. For the full list of country names and codes, see View countries or regions. |
| digitalSignatureEnable | booleanDefault: falseWhether the e-invoicing service provider signs PDF files for billing documents. |
| digitalSignatureBoxEnable | booleanDefault: falseWhether the digital signature box is displayed on PDF files for billing documents. |
| digitalSignatureBoxPosX | number >= 0The X-coordinate to determine where the digital signature box is displayed on PDF files for billing documents. |
| digitalSignatureBoxPosY | number >= 0The Y-coordinate to determine where the digital signature box is displayed on PDF files for billing documents. |
| email | stringThe email address of the Seller contact to receive e-invoicing data. |
| endpointId | stringThe Seller's electronic address, to which the application-level response to the e-invoice file might be delivered. |
| endpointSchemeId | stringThe identification scheme identifier of the Seller's electronic address. |
| phoneNumber | stringThe business phone number of the Seller contact to receive e-invoicing data. |
| postalCode | stringThe short code that can identify the business address. |
| responseMapping | object (responseMapping)Container for e-invoicing response field mappings that map values from Sovos response data to fields on the EInvoiceData object in Zuora. Each response field mapping consists of a field name and a field path.Note that this field is applicable only to the Sovos service provider.For more information, see Configure e-invoicing response field mappings. |
| invoiceEnabled | booleanDefault: falseThis field controls whether the invoice should be supported by the process type or not. For some countries, this field is required to be set to true. For more information, see Manage country-specific configurations. |
| creditMemoEnabled | booleanDefault: falseThis field controls whether the credit memo should be supported by the process type or not. For some countries, this field is required to be set to true. For more information, see Manage country-specific configurations. |
| debitMemoEnabled | booleanDefault: falseThis field controls whether the debit memo should be supported by the process type or not. For some countries, this field is required to be set to true. For more information, see Manage country-specific configurations. |
| invoiceFilters | Array of objects (InvoiceFilters)The documents belonging to the e-invoicing business region. |
| creditMemoFilters | Array of objects (CreditMemoFilters)The documents belonging to the e-invoicing business region. |
| debitMemoFilters | Array of objects (DebitMemoFilters)The documents belonging to the e-invoicing business region. |
| serviceProviderId | stringThe unique ID of the e-invoicing service provider that is associated to the business region. |
| state | stringThe name of the state or province where the business is located. |
| taxRegisterNumber | stringThe Seller's VAT identifier (also known as Seller VAT identification number) or the local identification (defined by the Seller’s address) of the Seller for tax purposes, or a reference that enables the Seller to state the registered tax status. |
| tradeName | string <= 100 charactersThe name that the Seller is known as, other than the legal business name. |
| fileFormat | Array of stringsYou can define the file format for each business category as shwown in the following example:fileFormat" : {"B2B" : [ "XML" ],"B2C" : [ ],"B2G" : [ "XML" ]}Note: This field is optional; however, if you use Avalara integration, it becomes a mandatory field. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/einvoice/business-regions/{key}

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "addressLine1": null,

-   "addressLine2": null,

-   "businessName": "legal business name",

-   "businessNumber"": "20002039",

-   "businessNumberSchemaId": "88",

-   "city": "Tokyo",

-   "contactName": null,

-   "country": "JP",

-   "email": null,

-   "endpointId": "8992",

-   "endpointSchemeId": "88",

-   "phoneNumber": null,

-   "postalCode": "368779",

-   "serviceProviderId": "4028948972a2bf990172bc9b27724ddc",

-   "state": null,

-   "taxRegisterNumber": "TAX393999",

-   "tradeName": "Zuora",

-   "fileFormat": {

    -   "B2B": [

        -   "XML"


        ],

    -   "B2C": [

        -   ""


        ],

    -   "B2G": [

        -   "XML"


        ]


    }


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "addressLine1": null,

-   "addressLine2": null,

-   "businessName": "legal business name",

-   "businessNumber": "20002039",

-   "businessNumberSchemaId": "88",

-   "businessRegionNumber": "EIBR-00000002",

-   "city": "Tokyo",

-   "contactName": null,

-   "country": "JP",

-   "digitalSignatureEnable": false,

-   "digitalSignatureBoxEnable": false,

-   "digitalSignatureBoxPosX": 0,

-   "digitalSignatureBoxPosY": 0,

-   "email": null,

-   "endpointId": "8992",

-   "endpointSchemeId": "88",

-   "phoneNumber": null,

-   "postalCode": "368779",

-   "responseMapping": { },

-   "serviceProviderId": "4028948972a2bf990172bc9b27724ddc",

-   "state": null,

-   "taxRegisterNumber": "TAX393999",

-   "tradeName": "Zuora",

-   "fileFormat": {

    -   "B2B": [

        -   "XML"


        ],

    -   "B2C": [

        -   ""


        ],

    -   "B2G": [

        -   "XML"


        ]


    }


}`
