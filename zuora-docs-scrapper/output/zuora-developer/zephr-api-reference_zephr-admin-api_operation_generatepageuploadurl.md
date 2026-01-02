---
title: "GeneratePageUploadURL"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/generatePageUploadURL/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:47.880Z"
---

## Generates an S3 upload URL

Generates a presigned S3 URL that can be used to upload a logo.

Security**ZephrHmacHttp**

Responses

201

OK - An upload URL has successfully been generated

post/v4/pages/upload-url

Response samples

-   201

application/json

Copy

`{

-   "logoId": "857945ea-b4e1-4fba-84ce-73755d987243",

-   "uploadUrl": "[https://s3.amazonaws.com/test-bucket/2022/test.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3SGQVQG7FGA6KKA6%2F20221104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221104T140227Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b228dbec8c1008c80c162e1210e4503dceead1e4d4751b4d9787314fd6da4d55](https://s3.amazonaws.com/test-bucket/2022/test.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3SGQVQG7FGA6KKA6%2F20221104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221104T140227Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b228dbec8c1008c80c162e1210e4503dceead1e4d4751b4d9787314fd6da4d55)"


}`
