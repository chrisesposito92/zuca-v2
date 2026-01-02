---
title: "GenerateThumbnailUploadUrl"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/generateThumbnailUploadUrl/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:22.466Z"
---

## Generate Thumbnail Upload URL

Generates a pre-signed URL for securely uploading a thumbnail image. The link expires after *10 minutes*.

**Considerations:**

-   Uploaded images are not optimized by the server; please upload images pre-optimized for web use.
-   Each uploaded file receives a unique `thumbnailId` for reference within your application, but the file name in the bucket is derived from this ID, ensuring no conflicts with existing files.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json
required

| fileName | stringThe name of the file. Unique file names are recommended but not enforced; the system generates a unique ID for each upload. |
| --- | --- |
| contentType | stringThe MIME type of the file. Supported MIME types include image/jpeg, image/png, and image/gif. |

Responses

200

Successfully generated URL for thumbnail upload.

400

The request is invalid. A required attribute is missing or an attribute did not meet the expected criteria.

401

Authentication credentials were not provided or are invalid.

post/v4/thumbnails/upload-url

Request samples

-   Payload

application/json

Copy

`{

-   "fileName": "unique-thumbnail.jpg",

-   "contentType": "image/jpeg"


}`

Response samples

-   200
-   400
-   401

application/json

application/jsonapplication/json

Copy

`{

-   "id": "4f5c49a5-e433-4ac1-b0ad-d67897988899",

-   "uploadUrl": "[https://zephr-thumbnails.s3.amazonaws.com/{generated-path}?...](https://zephr-thumbnails.s3.amazonaws.com/{generated-path}?...)"


}`
