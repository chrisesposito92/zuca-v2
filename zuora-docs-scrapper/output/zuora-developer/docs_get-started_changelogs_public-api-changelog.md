---
title: "Public API changelog"
url: "https://developer.zuora.com/docs/get-started/changelogs/public-api-changelog/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:42.088Z"
---

#

Public API changelog

This changelog outlines the latest API updates and resolved issues to the Zephr Public API, and documentation updates to the [Zephr Public API Reference](https://developer.zuora.com/api-references/zephr-public-api/overview/). We would love to hear your feedback on how we can improve it. If you have any comments on the Changelog for the Zephr Public API, please use the "Feedback" button on the right of this page or send an e-mail to [docs@zuora.com](mailto:docs@zuora.com).

##

July 30, 2025

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Public API Reference.

-   In the request body of the "Execute Browser feature transformations" operation, updated the description of the `path` field to include `contentId` details.

\=======

##

July 25, 2025

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Public API Reference.

-   In the "Execute Browser feature decisions" operation, made the following updates:
    -   Updated the operation summary to remove the `Deprecated` word.
    -   In the request body, updated the description of the `path` field to include `contentId` details.

##

April 30, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

-   In the "User" section, added the following operations:
    -   Create or Update a Contact User
    -   Start the email update flow for a passwordless user
    -   Recognise the user as a previously logged-in user
    -   Complete the change password flow
-   In the "Authentication" section, made the following changes:
    -   Added a Start a 2FA password reset operation.
    -   Updated the description and all responses for the following operations:
    -   Start updating the current email address
    -   Complete updating the current email address
    -   Change the user's password
-   In the "Session" section, updated the description and the `200` responses for the "Delete all other sessions" operation.
-   In the "Stripe Payment" section, added the following operations:
    -   Check a Stripe promo code for a user
    -   Change the Stripe subscription price
    -   Cancel a user's Stripe subscription
-   In the "Third-Party Authentication" section, added the following operations:
    -   Returns a list of your user's access scopes
    -   Retrieves the oauth2 configured fields
    -   Get the OAuth2 error page
-   In the "Component Library" section, added the following operations:
    -   List custom components
    -   Retrieve a form by ID
-   In the "Decision Engine" section, updated the descriptions and the `200` responses for the "Execute the Decision Engine" operation.
-   In the "Browser Feature Transformations" section, updated the descriptions and the `200` responses for the "Execute Browser feature transformations" operation.
-   Added a "Subscriptions" section that contains a "Cancel a subscription" operation.
-   Added the following security schemas to all operations:
    -   JWT object with the property claim\_value to support JWT claim overrides
    -   oauth2
    -   oauth2-token-response
    -   oauth2-request-body
    -   StartTwoFactorAuthenticationRequest
    -   list-oauth2-consent
    -   user-login-response
    -   user-2fa-password-reset-complete
    -   user-2fa-password-reset
    -   Change *Password* Body
-   Added the following subscription schemas:
    -   StripeSubscriptionTransactionRecord
    -   StripeSubscriptionCurrency
    -   StripeSubscriptionInterval
    -   StripeSubscriptionProduct
    -   StripePromoCodeCheckResponse
    -   StripePromoCodeCheckRequest
-   Added the following schemas:
    -   browser-features-transformations-response
    -   entitlement
    -   mapping
    -   contact-create-request
    -   oauth2-config-response
-   Made the following changes to the "Create a new Braintree payment method" operation:
    -   Added currency property type along with the example and descriptions.
    -   Added the following `enum` types to the `subscription-state` field:
    -   Active
    -   Canceled
    -   Expired
    -   Past Due
    -   Pending
    -   Unrecognised

##

September 02, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

-   In the "User" section, added the [Retrieve the user schema](https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/retrieveUserSchema/) operation.
-   In the "Web Analytics" section, added the [Submit user conversion data](https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/submitUserConversionData/) operation.

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Public API Reference.

-   In the response of the security schemes to all operation, updated the code sample for better clarity.

##

July 31, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

-   Added the following security schemes to all operations:
    -   CookieBlaizeSession
    -   JwtQuery
    -   JwtHeaderXBlaizeJwt
    -   JwtHeaderXZephrJwt
    -   JwtBearer
    -   JwtCookie
-   [Execute Browser feature decisions](https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/Browser_Feature_Decisions/) - In the request body of the "Execute Browser feature decisions" operation, made the following updates:
    -   Renamed the `contentId` field to `content_metadata` field.
    -   Added the `giftToken` field\`.
-   [Process multiple decisions](https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/Process_multiple_decisions/) - In the request body of the "Process multiple decisions", made the following updates:
    -   Renamed the `userAgent` field to `user_agent` .
    -   Added the `dry_run_mode` field.
-   [Process promo code decisions](https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/Process_promo_code_decisions/) - Made the following updates:
    -   Updated the description of this operation for better clarity
    -   In the request body, added the following fields:
        -   `session`
        -   `foreign_keys`
        -   `ip`
        -   `user_agent`
        -   `jwt`
        -   `path`

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Public API Reference.

-   In the response of the "Execute Browser feature decisions" operation, updated the code sample for better clarity.
-   In the "Register a user" operation, made the following updates:
    -   Updated the description of this operation for better clarity.
    -   Corrected the 201 HTTP response code to 200.
    -   Added the missing header parameters for the 200 response.
-   In the "Retrieve Extended Profile" operation, made the following updates:
    -   Updated the description of this operation for better clarity.
    -   Updated the description of the `appId` path parameter for better clarity.
-   In the "Retrieve the account" operation, made the following updates:
    -   Updated the description of this operation for better clarity.
    -   Updated the description of the `cookie` header parameter for better clarity.
    -   Added the missing `authorization` header parameter.
-   In the request body of the "Save the extended profile" operation, made the following updates:
    -   Updated the description of the `appId` path parameter for better clarity.
    -   Updated the request body schema type from an object to either an object or an array.
    -   Updated the request code samples.
-   In the response body of the "Retrieve the extended profile" operation, corrected the response body schema type from an object to either an object or an array, and updated the response code samples.

##

March 1, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

-   In the "Dynamic Offer Promo Code Decision" section, added the [Process promo code decisions](https://developer.zuora.com/api-references/zephr-public-api/operation/Process_promo_code_decisions/) operation.
-   In the "Dynamic Offer Decision Engine" section, added the [Validate dynamic offer decisions](https://developer.zuora.com/api-references/zephr-public-api/operation/Validate_dynamic_offer_decisions/) operation.
-   In the response body of the [Execute Browser feature decisions](https://developer.zuora.com/api-references/zephr-public-api/operation/Browser_Feature_Decisions/) operation, added the following nested fields to the `accessDetails` field:
    -   `trials`
    -   `timeTrials`
    -   `testGroups`
    -   `activeProducts`
-   In the response body of the [Retrieve the Zephr feature](https://developer.zuora.com/api-references/zephr-public-api/operation/Zephr_Feature/) operation, added the following fields:
    -   `targetType`
    -   `cssSelector`

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Public API Reference.

-   For the [Retrieve the account](https://developer.zuora.com/api-references/zephr-public-api/operation/Retrieve_Account/) operation, made the following updates:
    -   In the 200 response body, added the missing `email_verified` field.
    -   Added the missing `authorization` header parameter.
    -   Added the missing 404 error response.
-   In the [Retrieve the datalayer](https://developer.zuora.com/api-references/zephr-public-api/operation/Get_Datalayer/) operation, made the following updates:
    -   Added the missing `Cache-Control` header parameter.
    -   Improved the response examples.
    -   Updated the description of this operation.

##

December 19, 2023

###

API updates

-   [Dynamic Offer Decision Engine](https://developer.zuora.com/api-references/zephr-public-api/operation/Process_dynamic_offer_decisions/) - Made the following updates to the "Process dynamic offer decisions" operation:
    -   Updated the path from `/zephr/public/decisions/v1/dynamic-packages` to `/zephr/public/decisions/v2/dynamic-offers` .
    -   In the request body, updated the `dynamic_package` field to `dynamic_offers` .
    -   In the response body, updated the `products` > `prices` field to `products` > `paymentPlans` and added the `products` > `attributes` field.

##

October 30, 2023

###

Doc updates

This section lists the documentation updates that were made in this version of the Zephr Public API Reference.

-   Revised the operation names and descriptions to improve consistency and avoid confusion.

##

August 28, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed.

-   [Component Library](https://developer.zuora.com/api-references/zephr-public-api/operation/Component_Library/) - Added a section called "Component Library" that includes the following operations:
    -   Component Library
    -   Template Components
    -   UI Components
-   [SDK Feature Decision Engine](https://developer.zuora.com/api-references/zephr-public-api/operation/Process_multiple_decisions/) - Updated the SDK Feature Decision Engine operations to support the `JSON` and `TRANSFORMATION` output types.
-   [Dynamic Offer Decision Engine](https://developer.zuora.com/api-references/zephr-public-api/operation/Process_dynamic_package_decisions/) - Renamed the "Process dynamic package decisions" operation to "Process dynamic offer decisions".

##

August 24, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed.

-   [Component Library](https://www.zuora.com/developer/api-references/zephr-public-api/operation/Component_Library/) - Added a section called "Component Library" that includes the following operations:
    -   Component Library
    -   Template Components
    -   UI Components
-   [SDK Feature Decision Engine](https://www.zuora.com/developer/api-references/zephr-public-api/operation/Process_multiple_decisions/) - Updated the SDK Feature Decision Engine operations to support the `JSON` and `TRANSFORMATION` output types.
-   [Dynamic Offer Decision Engine](https://www.zuora.com/developer/api-references/zephr-public-api/operation/Process_dynamic_offer_decisions/) - Updated the "Process dynamic package decisions" operation to "Process dynamic offer decisions".

##

December 18, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed.

-   [Dynamic Offer Decision Engine](https://www.zuora.com/developer/api-references/zephr-public-api/operation/Process_dynamic_offer_decisions/) - Updated the "/v1/dynamic-packages" API to "/v2/dynamic-offers".
