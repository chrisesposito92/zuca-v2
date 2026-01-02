---
title: "Integrating with third party ID system"
url: "https://developer.zuora.com/zephr-docs/others/integrating-with-a-third-party-id/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:41.350Z"
---

#

Integrating with third party ID system

This document describes what is required to integrate with Zephr when using a third party identity management system.

##

Introduction to JSON Web Tokens

Integrating an external identity store is simple because Zephr has excellent support for JSON Web Tokens. Much of the functionality that comes with the integrated Zephr IDM can be substituted for user data transferred in a signed JWT.

In this scenario, the identity provider signs a JWT and sets it as a cookie; requests to Zephr that have the appropriate bearer token will inherit products grants and user attributes based upon claims in the payload. This document discusses the use of JWT tokens with Zephr and guides you through the setup process.

For the purpose of this document we will not discuss a specific Identity Management system, however, as a prerequisite, we expect your identity provider will be able to generate a JSON Web Token (JWT).

##

What is a JWT?

JSON Web Tokens are cryptographically verified payloads that can be passed with HTTP requests, much like a cookie. JWTs are used to pass information between server-side systems, via an end-user’s client (a web browser) without allowing the information to be tampered with.

A JWT consists of three parts: a metadata header, a payload (JSON) and a signature. A JWT is created by signing the payload using a private key, the public key can then be shared with interested 3rd parties who can then verify the integrity of the payload.

##

How does JWT work with Zephr?

When using JWT with Zephr, it is important to know that your identity provider is able to provide a JWT when a user logs in. This is typically done as a browser cookie (using the Set-Cookie header) but can be handled in other ways too.

In these implementations, login and registration requests will happen against your Identity Management system, independently to any Zephr function.

For all site requests running through Zephr, there will be a check for a valid JWT which, if present, will be used as the inputs to any decisions, including whether a user has a particular product grant.

##

Tutorial

In this tutorial we will set a cookie using a JSON Web Token sourced from jwt.io, and suggest you follow along in your own Zephr Admin Console.

###

Prerequisites

For this tutorial, we recommend you have at least one Site set up through Zephr.

We also recommend you create a Feature in Zephr, whereby Anonymous Users see a Registration Wall, and Registered Users see a Paywall.

If you are not using Zephr Forms, Custom Component Blocks stating ‘Anonymous’ and ‘Registered’, and linked to the rule accordingly, will be enough to demonstrate the user transition.

###

Step 1. Setting a JWT

As a first step in the integration process, navigate to jwt.io, and scroll to the debugger.

Looking at the Decoded section, navigate to the Payload area. This area is where details about a user are stored, such as their user ID and product grants.

Keep the Sub section as is, then edit the Name section to read “prod”: “gold” and remove the IAT section.

Next, edit the Verifiy Signature setting by replacing ‘your-256-bit-secret’ to read ‘secret’.

On the Encoded side of the screen copy the newly generated JWT.

Navigate to a site you have running through Zephr, on a page where your anonymous users see a registration wall, or blocked content experience.

Note: We suggest you use the Preview version of the Site. A link  to this can be found in your Zephr Admin Console under Delivery  > Sites.

 In a new, anonymous session, inspect the page. Click on the Console tab, then enter document.cookie = “blaize\_jwt={jwt cookie you generated above}” and click enter.

Once set, navigate to the Application tab. Under cookies, you will now see blaize\_jwt as a set cookie with the value you have added from jwt.io.

###

Step 2. Configuring the Zephr JWT Integration

To configure your JWT integration, navigate to Setting > JSON Web Tokens within your Zephr Admin Console.

Here you will see fields to enter your Secret or Public Key which will be used to verify signatures from JWT tokens on your site.

Under the Secret or Public Key section, enter the word ‘secret’, as we set this within the jwt.io page.

Below this, you’ll see fields for the three ways in which Zephr works with JSON Web Tokens.

###

Step 3. User Mapping

User Mapping allows you to take information from a JWT token and use it to further identify a User’s session within Zephr by setting a Foreign User ID Property as the cross-device session ID.

This is particularly important if you wish to use Trials or Bucket test groups within Zephr for registered users, as it allows Zephr to recognise users who are not stored within the Zephr IDM but have had previous sessions where they may have been granted a trial or fallen into a Bucket test group.

For the purpose of this tutorial, we are using User Mapping to determine if a user has a valid session, based on the presence of the user id within the JWT token – “sub”: “1234567890”.

Click Enable User Mapping, then in the Foreign User ID Property field, enter ‘sub’. This links the value in the “sub” section of the JWT as a user id within Zephr. Click Save.

Navigate back to your site, then refresh the page. As the JWT is now being used to determine if a user has a valid user id, and thus a valid session, the registration wall will no longer display, and your user is now considered logged in.

With this in mind, the user is now hitting the Registered journey within a Zephr rule, rather than the Anonymous journey.

###

Step 4. Product Syncing

Product Syncing is used to map products from your third party identity system, to the products set up within Zephr, in order to be used in Decisions. Enabling Product syncing will allow products to be granted based on the contents of the JWT token.

To configure this, check Enable Product Syncing and click OK. Set the Private Claim Name to be the key from the JWT payload that your Identity Management provider will use to describe a user’s product grants.

In the JWT example we created earlier, we have set this to ‘Prod’, so add this and click Save.

It is worth noting that Products support arrays. So while we have entered “prod”: “gold” into our sample JWT, “prod”: \[“silver”, “gold”\] would still pick up the correct product, and allows users to hold multiple products at any time.

Once the integration is set up, you will need to create Zephr Products with set JWT values.

To do this, navigate to Products > Catalogue and click Add A Product.

Give your product a Title and, if relevant, a Description.

Select the Features this Product should give Users access too – For example, a Gold subscription may give users access to Articles and Videos. If these were ticked, users with the Gold value in their JWT would be classified as Customers within the Article and Video Zephr Features, rather than Anonymous or Registered.

Scroll to the Developer Interface, and click the padlock symbol to unlock the section.

Tick Auto-assign from JWT and add “gold” as the Claim Value.

Click Update & Lock, then click Save.

Return to your Site, and refresh the page. The user is now considered a Customer, due to their Gold product grant within the JWT payload, and as such will have access to the Features you have used within this example.

You can illustrate this further by returning to jwt.io, editing the product grant within the payload to “silver”, and updating the JWT in your blaize\_jwt cookie. Refreshing the page will take you back to the Registered customer journey.

###

Step 5. Referencing JSON Web Tokens in Decisions

Once the JWT integration is complete, you will be able to reference JWT Tokens within your Zephr Rules.

To do this, navigate to a Zephr Feature Rule and select the JWT Token node from your palette.

A modal will open when you drag this node onto your canvas. Enter a Property Name, Condition and Value, then click Save. This will add a node to your canvas, which you can connect to your rule as needed.

A common use case for this is to use first-party data stored within the JWT Token within your rules.

For example, adding “state”: “Alabama” to the payload section of your practice JWT, and to the JWT Token node with  Zephr would allow you to create a path in your rule for users who reside in Alabama.

###

Step 6. Mapping Foreign User IDs

Whilst we will not show it in this Tutorial, you will also note a field called Map Foreign User Id to Blaize User Store. This would be used to map the Foreign User ID to a Zephr user, should you have the users stored in two systems.

To enable this, tick the box labelled Map Foreign User ID to Blaize User Store. Once ticked, enter a name for the Foreign Key System you want to use to map a JWT body to a Zephr User.

##

Considerations

The main consideration for a JWT-based integration is managing the lifecycle of the token. JWT uses an “exp” claim for expiry time, which Zephr honours. However, as the token is set by your identity provider, it will need to be periodically updated if Zephr is to act upon up-to-date information about a user.

A second consideration is that the Zephr Identity Module will not be in use, so some features such as user search and out of the box registration and payment forms will be redundant.
