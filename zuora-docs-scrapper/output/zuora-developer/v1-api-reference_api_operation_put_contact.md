---
title: "PUT Contact"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_Contact/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:48:21.760Z"
---

## Update a contact

Updates a contact for a specified account.

You can update contacts for cancelled accounts.

Security**bearerAuth**

Request

##### path Parameters

| contactIdrequired | stringThe ID of the contact that you want to update. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| address1 | string <= 255 charactersThe first line of the contact's address, which is often a street address or business name. |
| --- | --- |
| address2 | string <= 255 charactersThe second line of the contact's address. |
| asBillTo | booleanIndicates whether the contact can be specified as a bill-to contact.This field is available only if you have turned on the Ship To Contact feature. You can turn on the feature through the self-service interface for Feature Management. |
| asShipTo | booleanIndicates whether the contact can be specified as a ship-to contact.This field is available only if you have turned on the Ship To Contact feature. You can turn on the feature through the self-service interface for Feature Management. |
| asSoldTo | booleanIndicates whether the contact can be specified as a sold-to contact.This field is available only if you have turned on the Ship To Contact feature. You can turn on the feature through the self-service interface for Feature Management. |
| city | string <= 100 charactersThe city of the contact's address. |
| contactDescription | string <= 100 charactersA description for the contact. |
| country | string <= 64 charactersThe country of the contact's address. Either a full name or an ISO code is supported. |
| county | string <= 100 charactersThe county. May optionally be used by Zuora Tax to calculate county tax. |
| fax | string <= 40 charactersThe contact's fax number. |
| firstName | string <= 100 charactersThe contact's first name. |
| homePhone | string <= 40 charactersThe contact's home phone number. |
| lastName | string <= 100 charactersThe contact's last name. |
| mobilePhone | string <= 100 charactersThe mobile phone number of the contact. |
| nickname | string <= 100 charactersA nickname for the contact. |
| otherPhone | string <= 40 charactersAn additional phone number for the contact. |
| otherPhoneType | stringThe type of the additional phone number.Enum: "Work" "Mobile" "Home" "Other" |
| personalEmail | string <= 80 charactersThe contact's personal email address. |
| state | string <= 100 charactersThe state or province of the contact's address. Either a full name or an abbreviation code is supported. |
| taxRegion | string <= 100 charactersIf using Zuora Tax, a region string as optionally defined in your tax rules. Not required. |
| workEmail | string <= 80 charactersThe contact's business email address. |
| workPhone | string <= 40 charactersThe contact's business phone number. |
| zipCode | string <= 20 charactersThe zip code for the contact's address. |
| property name*additional property | anyCustom fields of the Contact object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/contacts/{contactId}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "address1": "new Address",

-   "city": "Mumbai",

-   "contactDescription": "This is the new Description",

-   "mobilePhone": 123213,

-   "zipCode": 123134


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "accountId": "6e767220676e6e61206d616b65207520637279",

-   "accountNumber": "A00000001",

-   "address1": "new Address",

-   "address2": "near Tech City",

-   "city": "Mumbai",

-   "contactDescription": "This is the new Description",

-   "country": "India",

-   "county": null,

-   "fax": "6174",

-   "firstName": "Kuhi",

-   "homePhone": "1234123",

-   "id": "8a90f50888a3036e0188ab7b3ffe7b8a",

-   "lastName": "Das",

-   "mobilePhone": "123213",

-   "nickname": "Dorimi",

-   "otherPhone": "2314213",

-   "otherPhoneType": "Work",

-   "personalEmail": "kuhiroll@example.com",

-   "state": "Assam",

-   "success": true,

-   "taxRegion": "California",

-   "workEmail": "amy.lawrence@zuora.com",

-   "workPhone": "(888)976-9056",

-   "zipCode": "123134"


}`
