---
title: "Overview"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/appstore-connector/omnichannel-subscription/overview"
product: "zuora-platform"
scraped_at: "2025-12-24T08:28:37.833Z"
---

# Overview

This guide provides detailed instructions for creating and managing omnichannel subscriptions using the Zuora Omnichannel Subscription API, including integration with Apple, Google, and Roku services.

This guide details the process for creating and managing omnichannel subscriptions using the Zuora Omnichannel Subscription API. Omnichannel subscriptions refer to subscriptions managed by external platforms, such as the Apple App Store and Google Play Store, where Zuora handles only certain aspects.

This section details the credentials required to integrate Zuora with third-party applications. Zuora will collect the following credentials for integration.

When working with Apple services and integrations, certain credentials and identifiers are essential to ensure secure and efficient communication. Key components include the following:

-   .p8 Certificate: A private key file used for authenticating requests to Apple services.

-   Key ID: A unique identifier for the key associated with the .p8 certificate.

-   Issue ID: Identifies the specific issue or problem related to the Apple integration.

-   Bundle ID: A unique identifier for the application or service in Apple's ecosystem.

-   Apple ID: The user account used to access Apple services and manage app-related settings.


To obtain credentials for Apple Notification, follow these steps:

1\. Obtain the .p8 Certificate , Key ID, and Issue ID:

-   Navigate to App Store Connect and log in.

-   Go to Users and Access .

-   Click on Integrations in the top navigation tab.

-   Select In-App Purchases from the left-hand navigation.

-   Click Create a new Token . Download the .p8 certificate once generated (this action can only be done once).

-   Note the Key ID and Issue ID provided on this page.


2\. Retrieve the Apple ID and Bundle ID:

-   Return to the Home Screen and select the Apps tile.

-   Choose the app for which you need to generate credentials.

-   Navigate to General -> App Information on the left-hand navigation.

-   Record the Apple ID and Bundle ID found on this page.


Required Values for Apple:

-   Apple ID

-   Bundle ID

-   Key ID

-   Issue ID

-   .p8 Certificate


When working with Google services and integrations, certain credentials and identifiers are essential to ensure secure and efficient communication. Key components include the following:

-   Audience: The target audience for the API or service, often specifying who can use the credentials.

-   Email: The email address associated with the service account for Google Cloud.

-   Key Info (JSON format): Configuration data for the service account in JSON format.

-   Type: The type of credentials or service account being used.

-   Project ID: A unique identifier for the Google Cloud project.

-   Private Key ID: A unique identifier for the private key used in the service account.

-   Private Key: The private key used for authentication and signing requests.

-   Client Email: The email address of the client or service account used for authentication.

-   Client ID: A unique identifier for the client application in Google's API.

-   Auth URL: The URL for obtaining authentication tokens from Google.

-   Token URL: The URL for exchanging authentication codes for tokens.

-   Auth Provider CERT URL: The URL for the certificate used by the authentication provider.

-   Client CERT URL: The URL for the client's certificate used in the authentication process.


To obtain credentials for Google RTDN, follow these steps:

-   Navigate to Google Developer Console and log in.

-   Go to the Pub/Sub page by searching for it in the top search bar.

-   Locate and edit the Subscription representing your notification Pub/Sub.


-   On the Subscription page, toggle Enable Authentication .

-   Add the Service Account for authentication and set an audience value (e.g., "3pp.rdnt"). This value helps distinguish between different subscriptions.

-   Note the audience value and the title of the service account, as both need to be shared with the Appstore Connector.


-   Navigate to IAM & Admin by searching the top bar.

-   Go to Service Accounts on the left-hand navigation.

-   Find the Service Account linked to the Pub/Sub Subscription and go to the Keys tab.

-   Click Add Key and select Create JSON Key to generate a JSON key file.


Required Values for Google:

-   Audience

-   Service Account Email

-   Key JSON file

-   Project ID

-   Subscription Name

-   Topic Name


When working with Roku services and integrations, specific credentials and identifiers are essential to ensure secure and effective communication with Roku's platform, especially for channel development and publishing. Key components include the following:

-   Developer Account Email : The email address associated with the Roku developer account, used for channel management and access to the developer portal.

-   Developer ID : A unique identifier associated with the developer's account, required for packaging and signing Roku channels.

-   Channel ID : A unique identifier for the Roku channel that distinguishes the app in the Roku ecosystem.

-   Package Signing Key : A private key used for securely signing the channel package before uploading it to Roku. This key is essential for deploying updates to the channel.

-   Access Token : A token for accessing Roku APIs and managing channels programmatically via the Roku API (if needed for advanced automation or integrations).

-   Publishing Information : Includes the title, description, and icon assets, part of the channel publishing process.


To obtain credentials for Roku, follow these steps:

-   Go to Roku Developer Portal and sign up or log in with your Roku developer account.

-   Note the Developer Account Email used, which will be required for channel management.


-   From the Roku Developer Dashboard, navigate to Manage My Channels .

-   Select your channel or create a new one.

-   Channel ID is listed on this page and is unique to each channel.

-   The Developer ID is generated when you set up your Roku device in Developer Mode and link it to your account to sign channel packages.


-   To develop and test channels, enable Developer Mode on your Roku device:

-   Press the following buttons on your Roku remote: Home (3x), Up (2x), Right, Left, Right, Left, Right .

-   Follow the prompts to enable Developer Mode and set a password.

-   After enabling Developer Mode, the device will generate a Developer ID and Package Signing Key . Use this Package Signing Key to sign your channel’s packaged ZIP file before uploading it.


1.  Ensure RTDN and Service Account Setup: This guide assumes you have a Pub/Sub for RTDN set up and a service account linked to the Notification Pub/Sub. If not, follow the guide at Purple Publish Setup Guide .
2.  Gather Required Information:
3.  Configure Authentication:
4.  Generate Service Account Token:
5.  Create a Roku developer account
6.  Obtain developer ID and channel ID
7.  Enable developer mode and generate package signing key
8.  Generate an access token (optional, for API access) To programmatically manage channels or perform automation, you may need an Access Token for the Roku API. This token can be obtained by contacting Roku developer support, as Roku’s API access is typically granted for advanced use cases like billing integrations or large-scale management.
9.  Prepare publishing information

-   Gather Publishing Information for the channel, such as:

-   Title and Description : This appears in the Roku Channel Store.

-   Icon and Screenshots : Required images for store listings.

-   Content Feed URL (if using Direct Publisher): A URL that provides the content structure for the channel in JSON format, used by Roku's Direct Publisher.


Required values for Roku:

-   Developer Account Email

-   Developer ID

-   Channel ID

-   Package Signing Key

-   Access Token (if applicable)

-   Publishing Information
