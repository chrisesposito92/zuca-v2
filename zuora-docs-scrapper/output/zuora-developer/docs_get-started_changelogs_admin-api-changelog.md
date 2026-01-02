---
title: "Admin Api Changelog"
url: "https://developer.zuora.com/docs/get-started/changelogs/admin-api-changelog/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:39.655Z"
---

This changelog outlines the latest API updates and documentation updates in the Zephr Admin API Reference.

##

Nov 26, 2025

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Admin API Reference.

-   In the request body and request example of the "Start an email address update" operation, added the missing `siteSlug` field.

##

May 06, 2025

##

API updates

This section lists operations and fields that were added, changed, or removed.

-   In the "User Schema" section, added the following operations:
    -   Save user attributes
    -   Update user attributes
-   In the "Account" section, added the following operations:
    -   Retrieve an account for V4
    -   List accounts for v4
-   In the "Company" section, updated the description and the `200` , `201` , `400` , and `404` responses for the following operations:
    -   Create a company
    -   Retrieve a company
-   In the "Products" section, updated the description and the `200` , `201` , `400` , `404` , and `409` responses for the following operations:
    -   Save a product
    -   Retrieve a product
-   In the "Request Rules" section, updated the description and the `200` , `400` , and `404` responses for the following operations:
    -   Delete a request rule
    -   List request rules
-   In the "Users" section, updated the description and the `202` , `400` , `401` and `404` responses for the following operations:
    -   Update users in bulk
    -   Retrieve Extended User Profiles
-   In the "Grant" section, made the folowing changes:
    -   Added the "Post an account grant" operation.
    -   Updated the description and the `202` , `400` , `401` and `404` responses for the following operations:
    -   Create an account grant
    -   Delete an account grant
-   Added a "System Resources" section that contains a "Update system resource" operation.
-   Added a "Component Library" section that contains a "Check availability of the origin" operation.
-   Added an "Accounts" section that contains a "Post an account grant" operation.
-   Added a "Health Check" section that contains a "Update system resource" operation.
-   Added a "Request Rules Version" section that contains a "Create a request rule version" operation.
-   Added a "Pages" section that contains a "Generates an S3 upload URL" operation.
-   Added a "Subscription" section that contains the following operations:
    -   Cancel Subscription
    -   Update Braintree Subscription
-   Added the following security schema to all operations:
    -   ZephrHmacHttp
-   Added the following properties to all operations:
    -   braintree\_recurring
    -   braintree *one* off
    -   stripe\_recurring
    -   stripe *one* off
    -   rate\_plans
    -   jwt
    -   product.mapping.rate\_plan
    -   payment\_provider
    -   rate *plan* id
    -   archived
    -   archive\_label
    -   environment
    -   product.mapping.jwt
    -   pagination-link
    -   user-export-paginated-response
    -   meta
    -   links
-   Added the following components to all operations:
    -   user-creation
    -   legacy-validators
    -   response *simple* accountbody
    -   simple *account* bodies
    -   add-bulk-account-users-by-domains
    -   Create *CompanyBody* v4

##

February 26, 2025

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Admin API Reference.

-   In the 200 response example of the "Retrieve a session" operation, removed the incorrectly documented `access_model` field:

##

January 24, 2025

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Admin API Reference.

-   In the the request body of the "Create a user" operation, updated the `validators` field from required to optional.

##

January 09, 2025

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Admin API Reference.

-   Updated the endpoint from `/v3/users/{user_id}/session` to `/v3/users/{user_id}/sessions` for the "List user sessions" operation.
-   Removed the incorrectly documented "Retrieve a cross-device session" operation.

##

July 31, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed.

-   [Dynamic Offer Promo-codes Redemptions](https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/ProcessPromoCodeRedemptions/) - Added the "Process promo code redemptions" operation. This operation is used to redeem promo codes configured from the Zephr console.

##

February 26, 2024

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Admin API Reference.

-   Updated the sample request code for the "Update users in bulk" operation.

##

February 15, 2024

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Admin API Reference.

##

February 9, 2024

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Admin API Reference.

-   [Promo Code Redemption](https://www.zuora.com/developer/api-references/zephr-admin-api/operation/Process_promo_code_redemptions/) -

##

February 8th, 2024

###

API updates

This section lists the documentation updates that were made in this version of the Zephr Admin API Reference.

-   Added a new endpoint `/v4/thumbnails/upload-url` for generating pre-signed URLs to securely upload thumbnail images to S3. Improved documentation for /v3/users/{userId}/grants Improved documentation for /v3/users/{userId}/attributes Improved documentation for /v3/users/{user\_id}/accounts Improved documentation for /v3/schema/users/{slug}

##

December 14, 2023

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Admin API Reference.

-   Made the following corrections to the “Start a password reset” operation:
    -   Corrected the path of the operation.
    -   Added the missing `siteSlug` field in the request body.
-   Added the "Evicts cached origin requests (V4)" operation.

##

December 6, 2023

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Admin API Reference.

-   Revised the operation names and descriptions to improve consistency and avoid confusion.
-   For the "List account users" operation, added the missing `account_id` path parameter.

##

November 13, 2023

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Admin API Reference.

-   Made the following corrections to the “User and User Events Export” operation:
    -   Updated the description of this operation to clarify how to specify the parameters.
    -   Added the following missing query parameters:
        -   `appIdsRestrictive`
        -   `registeredSince`
        -   `registeredBefore`
    -   Updated the description of the `since` query parameter.
    -   Removed the “required” label from the following parameters:
        -   `attributes`
        -   `appIds`
        -   `eventsExport`

##

November 9, 2023

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Admin API Reference.

-   Moved the "Upsert foreign key" operation from the Admin User section to the Users section to correct the grouping error.

##

November 2, 2023

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Admin API Reference.

-   For the "Create new session under a given site" operation, corrected the `200` response code to `201` .

##

September 21, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed.

-   [Users](https://developer.zuora.com/api-references/zephr-admin-api/tag/Users/) - Added the following operations to support bulk updating users:
    -   Update users in bulk
    -   Retrieve a bulk user update job
    -   List all bulk user update jobs

##

August 28, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed.

-   [User Export](https://developer.zuora.com/api-references/zephr-admin-api/operation/User_Export/) - Updated the "User and User Events Export" operation to support downloading user event data.
-   [Users](https://developer.zuora.com/api-references/zephr-admin-api/tag/Users/) - Added the following operations to support user segmentation:
    -   Create a user segment
    -   List all user segments
    -   Retrieve a user segment
    -   Delete a user segment
    -   List all user segments for a user

##

August 24, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed.

-   [User Export](https://www.zuora.com/developer/api-references/zephr-admin-api/operation/User_Export/) - Updated the "User and User Events Export" operation to support downloading user event data.
-   [Users](https://www.zuora.com/developer/api-references/zephr-admin-api/tag/Users/) - Added the following operations to support user segmentation:
    -   Create a user segment
    -   List all user segments
    -   Retrieve a user Segment
    -   Delete a user segment
    -   List all user segments for a user
