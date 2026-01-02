---
title: "Collect payments with payment form"
url: "https://developer.zuora.com/docs/get-started/tutorials/payment-form/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:15.009Z"
---

#

Collect payments with payment form

####

Payment Form Implementation Guide

Discover comprehensive code samples demonstrating integration with [Payment Form](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Form). Understand how to swiftly implement hosted payment forms on your website.

[Download Sample Code](https://github.com/zuora/payment-hpf-sample/archive/refs/heads/main.zip)

Don't code? Use Zuora [Payment Link](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Page_and_Payment_Link/Payment_Link).

##

1\. Quick Start

####

Configure a Zuora client instance

**Server | Server.java**

Configure a Zuora client instance with your [client ID and client secret](https://knowledgecenter.zuora.com/Zuora_Central_Platform/Tenant_Management/A_Administrator_Settings/Manage_Users#Create_an_OAuth_Client_for_a_User). If you don't have them, contact your administrator.

####

Review the payment form and copy the publishable key

1.  In the Zuora UI, click your username in the upper right and navigate to **Settings > Payments > Payment Form**.
2.  Verify that the payment form you want to use in this guide is configured as expected.
3.  Copy the publishable key.

####

Initialize an instance of the Zuora object

**Client | checkout.js**

Initialize an instance of the Zuora object with your publishable key copied from the previous step.

####

Run the payment form

1.  Build the server: `mvn package`
2.  Run the server: `java -cp target/sample-jar-with-dependencies.jar com.zuora.sample.Server`
3.  Run the payment form by navigating to [http://localhost:8888/checkout.html](http://localhost:8888/checkout.html).

####

Try it out

On the page, enter `4111 1111 1111 1111` in the card number field, fill in the remaining card information, and then click the Pay button.

You will be redirected to a return page. The string displayed after "Your order:" is the ID of the created payment. You can find the successful payments in Zuora through the UI, API, Data Source Export, and Data Query.

Congratulations! You now have a basic integration working.

##

2\. Customize

####

Customize the checkout page

**Client | checkout.html**

Customize the order summary section on the checkout page for your needs.

####

Customize the return page

**Client | return.html**

Customize the layout of the return page for your needs.

####

Handle payment result

**Client | checkout.js**

Use the callback function to handle the payment processing result.

The `onComplete` function returns `result` in the following structure:

On success:

`{`

  `success: true,`

  `paymentMethodId?: string;`

  `paymentId?: string;`

`}`

On error:

`{`

  `success: false,`

  `error: {`

    `type: string;`

    `code: string;`

    `message: string;`

  `}`

`}`

##

3\. Integrate

To integrate the payment form with your website, complete a few more steps.

####

Import Zuora Java client library to your project

**Server | pom.xml**

Add the highlighted dependency to your POM build and import the library. Replace the version with the latest Zuora API library version. See [Zuora Java SDK on Maven Central](https://mvnrepository.com/artifact/com.zuora.sdk/zuora-sdk-java) for the version information.To use the sample code, you must use [Maven](https://maven.apache.org/install.html) for the build.

####

Implement support for multi-entity

**Server | Server.java**

If there are multiple entities within your tenant, incorporate the following code line into the highlighted code block to support the [multi-entity](https://knowledgecenter.zuora.com/Zuora_Central_Platform/Tenant_Management/Multi-entity) feature:

`zuoraClient.setEntityId("REPLACE_WITH_ENTITY_ID");`

Here is an example:

`port(8888);`

`staticFiles.externalLocation(Paths.get("public").toAbsolutePath().toString());`

**`zuoraClient.setEntityId("8a80825556ff28a4015709096c5d6f5d");`**

`zuoraClient.initialize();`

`zuoraClient.setDebugging(true);`

####

Implement backend API to create a payment session

**Server | Server.java**

In your server, add an endpoint to [create a payment session](https://developer.zuora.com/v1-api-reference/api/operation/POST_CreatePaymentSession/). A one-time token will be returned.

You can specify parameters to define the payment flow mode as one of the following:

-   Create and save a payment method.
-   Process a one-time payment without saving the payment method.
-   Process the first payment and save the payment method for subsequent recurring payments.

See [Create a payment session](https://developer.zuora.com/v1-api-reference/api/operation/POST_CreatePaymentSession/) for more information about the parameters.

####

Load zuora.js

**Client | checkout.html**

Import the Zuora JavaScript client library.

**Script versions and URLs**

Zuora provides two ways to load `zuora.js`:

-   A **rolling, non-versioned script**, currently at version **1.4.0**, which always includes the latest updates.
-   A **pinned, versioned script** that is fixed to that specific release.

**Non-versioned URL**

For sandbox environments, use `<script src="https://js.zuora.com/payment/sandbox/1.4.0/zuora.js"></script>`

For production environments, use `<script src="https://js.zuora.com/payment/1.4.0/zuora.js"></script>`

**Versioned URL**

Zuora now supports **versioned URLs** for `zuora.js`, which you can use when you need to **pin a specific script version** and optionally configure **Subresource Integrity (SRI)** to cryptographically verify the script content.

For 2025.Q4.1.0 sandbox environments, use `<script src="https://js.zuora.com/payment/sandbox/7.1.0/zuora.js" integrity="sha256-NsGvSSP6JjTH3hHqo2AdBWOzTjBC7kUUUt2F7t0YKzE=" crossorigin="anonymous"></script>`

For 2025.Q4.1.0 production environments, use `<script src="https://js.zuora.com/payment/7.1.0/zuora.js" integrity="sha256-NsGvSSP6JjTH3hHqo2AdBWOzTjBC7kUUUt2F7t0YKzE=" crossorigin="anonymous"></script>`

**Important:**

-   The **non-versioned URL** continues to be supported and will always deliver the **latest** `zuora.js` updates.
-   The **versioned URL** is **locked to that version** and **will not automatically receive future updates**. To adopt new changes, you must update the version in the URL explicitly.

####

Create a container for the payment form

**Client | checkout.html**

Create a container and place it where you want the payment form to be rendered.

####

Initialize an instance of the Zuora object

**Client | checkout.js**

Initialize an instance of the Zuora object with your publishable key.

####

Populate the payment form configuration

**Client | checkout.js**

Generate a payment session when the end-customers click the Pay button.

Unless otherwise specified, the pre-defined default payment form is used. To use a specific payment form, copy its payment form number from the Zuora UI and incorporate the following code line into the highlighted code block:

`profile: "REPLACE_WITH_PAYMENT_FORM_NUMBER",`

Here is an example for specifying a payment form and other configuration parameters:

**`profile: "PF-00000006",`**

`locale: "en",`

`region: "US",`

`currency: "USD",`

`amount: "1599.00",`

####

Create and mount the payment form

**Client | checkout.js**

Create an instance of the payment form component, and mount the form component to the container for displaying the hosted payment form.
