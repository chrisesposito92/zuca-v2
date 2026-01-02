---
title: "UploadMeteringFile"
url: "https://developer.zuora.com/v1-api-reference/api/operation/uploadMeteringFile/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:52:57.595Z"
---

## Upload a file

Uploads and stores a file in Zuora Mediation for use in meter processing. Supported formats include CSV, Excel, and JSON. You can specify metadata like headers, delimiters, sheets, and data ranges.

Security**bearerAuth**

Request

##### Request Body schema: multipart/form-data

| filerequired | string <binary>The file to store |
| --- | --- |
| hasHeader | booleanIndicates if the file has a header (for CSV/Excel) |
| firstRow | integerIndicates where the first row starts (for CSV format) |
| delimiter | stringDelimiter to separate values (for CSV format) |
| sheet | stringThe sheet where data lives (for Excel) |
| dataRange | stringThe data range in the sheet (for Excel) |
| resolveFileNameConflict | booleanWhether to generate a UUID file name |
| targetFolder | stringThe target folder to store the file |
| overwriteExistingFile | booleanWhether to overwrite an existing file |

Responses

200

File successfully uploaded

400

Bad request

401

Unauthorized

500

Internal server error

post/meters/files

Request samples

-   cURL

Copy

curl \-i \-X POST \\
  https://rest.test.zuora.com/meters/files \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Type: multipart/form-data' \\
  \-F file\=string \\
  \-F hasHeader\=true \\
  \-F firstRow\=0 \\
  \-F delimiter\=string \\
  \-F sheet\=string \\
  \-F dataRange\=string \\
  \-F resolveFileNameConflict\=true \\
  \-F targetFolder\=string \\
  \-F overwriteExistingFile\=true

Response samples

-   200
-   400
-   401
-   500

application/json

Copy

`{

-   "id": "string",

-   "name": "string",

-   "resourceId": "string",

-   "format": "string",

-   "hasHeader": true,

-   "firstRow": 0,

-   "delimiter": "string",

-   "sheet": "string",

-   "dataRange": "string",

-   "lines": 0,

-   "createdAt": "2019-08-24T14:15:22Z",

-   "updatedAt": "2019-08-24T14:15:22Z"


}`
