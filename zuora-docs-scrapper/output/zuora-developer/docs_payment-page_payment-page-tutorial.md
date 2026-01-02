---
title: "Capture card details"
url: "https://developer.zuora.com/docs/payment-page/payment-page-tutorial/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:35.747Z"
---

#

Capture card details

This tutorial provides a step-by-step guide to setting up a payment page hosted in Zuora. You will implement a payment method creation flow to collect your customers' payment method information and store it in Zuora in a PCI-compliant way. Checkout flow is not covered in this tutorial.

In this tutorial, you will need to complete tasks illustrated in the following diagram:

![Set_up_Payment_Page_Steps](/b2081fbcf5b84ae06c9cc5ff76a40098/HPM-setup-flow.svg "Payment Page Setup Flow")

With Zuora's ready-to-use web server, you can easily get your payment page up and running without setting up a server from scratch.

##

Scenario

When your customers sign up for your website, you want to collect their credit card information, which will be used for your customers’ one-time or recurring payments in the future. You want to add a PCI-compliant page for collecting credit card information to the signup experience. Here is your plan for the hosted payment page:

-   Accepted payment method: Credit Card
-   Information to be collected:
    -   Card type
    -   Card number
    -   Expiration date
    -   CVV (Card Verification Value)
    -   Card holder name
    -   Card holder address
-   Look and feel: embedded in the page
-   Security requirements:
    -   Limit the number of times a hosted payment page can be submitted from the same IP address within a time range.
    -   Limit the number of times a hosted payment page can be submitted before page submission is blocked.
    -   Check whether the required input fields are valid.

You will use Zuora’s [Payment Pages 2.0](https://knowledgecenter.zuora.com/Zuora_Payments/Hosted_Payment_Pages) solution to embed an iFrame form into the page. The embedded form contains an internal submit button and the form submission will be handled by Zuora.

##

Prerequisites

-   Ensure that you have installed Node 16 or higher. To download Node, check [Download Node](https://nodejs.org/en/download) .
-   You have an active GitHub account.
-   You have a sandbox environment in Zuora.
-   You must use a user with the [API Write Access permission](https://knowledgecenter.zuora.com/Zuora_Central_Platform/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles) to access the sandbox environment.

##

Implementation steps

In your sandbox environment, complete the following tasks. We will use the **API sandbox environment of US Cloud Data Center 2** as the sample environment in this tutorial.

For a complete list of URLs for Zuora environments, see [Zuora Data Centers](https://knowledgecenter.zuora.com/Zuora_Environments/Zuora_Data_Centers).

###

Step 1 Set up a test gateway instance

If you already have a Test Gateway instance, skip this step. If you have NOT set up a Test Gateway instance on your tenant, complete the following steps.

1.  Click your username in the upper right and navigate to **Settings > Payments > Setup Payment Gateway** .
2.  On the **Configure Gateway Instance** tab, select **Test Gateway** from the **Gateway Type** drop-down list at the bottom of the page.
3.  Click **Create Gateway** .
4.  On the New Gateway page, enter a name for your gateway instance in the **Name** field, and keep the default value for all other fields. If you want to learn more about the configuration fields, see [Set up payment gateways](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/C_Managing_Payment_Gateways/C_Setting_Up_Payment_Gateways#Configure_a_payment_gateway_instance) .
5.  Click **Save Gateway Information** .

###

Step 2 Create a hosted payment page

####

Create and configure a hosted payment page

1.  In Zuora, click your username in the upper right and navigate to **Settings >** **Payments > Setup Payment Page and Payment Link** .
2.  On the **Payment Pages** tab, click **Get HPM 2.0 Key** in the **Security Keys** section. A file containing a public key will be downloaded. You will need to pass it as one of the parameters when you load the hosted payment page in a later step.
3.  On the **Payment Pages** tab, you can configure the IP-Based Submission Rate Limiting feature in the **Rate Limiting Configuration** section. Keep **IP Whitelist** empty and keep the default values for other fields. You can find the default value in the tooltip.

    In this tutorial, **we will NOT enable the following tenant-level settings**. If you want to know about these settings, see [Tenant-level settings for Payment Pages 2.0](https://knowledgecenter.zuora.com/Zuora_Payments/Hosted_Payment_Pages/AC_Configure_Payment_Pages_2.0#Tenant-level_settings_for_Payment_Pages_2.0):

    -   Google reCAPTCHA Enterprise Configuration
    -   Raw Gateway Info Configuration
    -   Advanced Configuration
        -   Validate Client-Side HPM Parameters
        -   Allow Subdomain Callback For Hosted Pages
4.  At the bottom of the page, select **Credit Card** from the **Type** list, and then click **Create New Hosted Page** .
5.  Configure the page-level settings for the hosted payment page. To complete this tutorial, use the value suggested in the **Value** column in the following table. To learn more about the settings, see [Configure Credit Card Type Payment Pages 2.0](https://knowledgecenter.zuora.com/Zuora_Payments/Hosted_Payment_Pages/AC_Configure_Payment_Pages_2.0/Configure_Credit_Card_Type_Payment_Pages_2.0) .

| Section | Setting | Value |
| --- | --- | --- |
| Basic Information | Page Name | Enter My First Payment Page |
| Hosted Domain | Enter http://localhost:3000 |  |
| Callback Path | Enter /payment_page/callback |  |
| Security Information | Google reCAPTCHA | Keep the default values for all settings.Token Expiration will be enabled. Google reCAPTCHA or 3D Secure will not be enabled. |
| Token Expiration |  |  |
| 3D Secure |  |  |
| Payment Gateway | Default Payment Gateway | Select the test gateway instance. |
| Page Configuration | Page Title | Enter Credit Card Payment.Keep Display selected. |
| Page Description | Enter This card will be used in future payments.Keep Display selected. |  |
| Page Fields | Keep the default configuration.The screenshot after this table shows an example. |  |
| Submit Button | Enter Submit. |  |
| Client-Side Validation | Keep Enable client-side validation selected.Keep the default value for error messages. |  |
| Credit Card Type Detection | Keep Enable automatic credit card type detection selected. |  |
| CSS | Keep the default CSS. |  |

![Payment Page Form Configuration](/f4a0101937b52988331f545f3b8fcf4e/HPM-form-fields.png "Payment Page Form Configuration")

6.  Click **Generate and Save Page** .
7.  A message will appear to prompt you that Google reCAPTCHA or Token Expiration security settings are enabled. Scroll down to the message dialog and click **OK** .

####

Preview your hosted payment page

After you save your hosted payment page, the Preview Hosted Payment Method Page page is displayed. In the **Page Preview** section, use the following default configuration and preview your page:

-   **Form Type** : Inline
-   **Locale** : English (en)

Your page will look like this:

![Payment Page Preview](/56b25346b45f204eca4ca527cbe3c442/HPM-preview.png)

To retrieve the hosted page URL that will be passed as a parameter when you load the hosted payment page, check the information in the **Implementation Details** section and note down **Hosted Page URL**.

For more information, see [Preview the Payment Page](https://knowledgecenter.zuora.com/Zuora_Payments/Hosted_Payment_Pages/C_Preview_Payment_Pages_2.0).

####

Retrieve page ID

You have now created a hosted payment page. Complete the following steps to retrieve the page ID. You will need to pass the page ID as one of the parameters when you load the hosted payment page in a later step.

1.  If you are on the Preview Hosted Payment Method Page page, click **back to Hosted Pages List** in the upper left of the page to navigate back to the **Payment Pages** tab.
2.  In the **Page List** section, find the payment page ( **My First Payment Page** ) you just created.
3.  In the **Actions** column, click **Show Page Id** .
4.  Note down the page ID.

####

(Optional) Update the CSS of your hosted payment page

Assuming you want to change the background color of the hosted payment page and want the legend for Required Field to be displayed in the upper right of the page, complete the following steps to update the CSS of your hosted payment page.

1.  Navigate to the **Payment Pages** tab > **Page List** section.
2.  Find **My First Payment Page** and click **Edit** .
3.  In the **CSS** field, make the following changes:
    -   In the `.form` CSS selector, add the following declaration:

        ```text
        background-color:#eed5b7;
        ```

        Here is an example:

        ```css
        .form {
          padding: 20px 16px;
          margin: 0 auto;
          background-color:#eed5b7;
        }
        ```

    -   In the `.required-desc` selector, add the following declarations:

        ```css
        position:absolute !important;
        top:5% !important;
        left: 70% !important;
        ```

        Here is an example:

        ```css
        .required-desc {
                 width: 24%;
                 float: right;
                 margin-top: 11px;
                 border-left: 4px solid #6EC5AB;
                 vertical-align: middle;
                 min-width:120px;
                 position:absolute !important;
                 top:5% !important;
                 left: 70% !important;
              }
        ```

4.  Click **Generate and Save Page** .

Your page will look like the following screenshot:

![Payment Page with custom CSS](/13fccdad68a0a160fea23f16783508ff/HPM-with-custom-css.png "Payment Page with custom CSS")

For more information about designing CSS for hosted payment pages, see [Design Payment Pages CSS](https://knowledgecenter.zuora.com/Zuora_Payments/Hosted_Payment_Pages/I_Design_Payment_Pages_2.0_CSS).

###

Step 3 Get the payment page up and running

Now you need a web server to host this created payment page. To quickly get the payment page up and running, you can use Zuora's official [Sample Payment Page](https://github.com/zuora/payment-page-samples).

####

Fork the sample payment page

Take the following steps to create a new fork:

1.  Log into your GitHub account.
2.  On the [payment-page-samples](https://github.com/zuora/payment-page-samples) repository page, click **Fork** .
3.  On the Create a new fork page, select the owner of the forked repository and specify the repository name. Leave other settings unchanged.
4.  Click **Create fork** . Then your fork is created.
5.  Clone the forked repository to your local environment.

####

Update configuration files

In the cloned `payment-page-samples` repository, the `/conf` folder stores multiple configuration files across different environments and prepopulated values for form fields.

Update the configuration for the `us_sandbox` block in the `/conf/config.json` file as below:

| Field | Description | Value |
| --- | --- | --- |
| username | It should be the username for a user with the API Write Access permission. It will be used to call the Zuora REST API.You can also choose to leave it blank and specify oauth_token that you can get by calling the Create an OAuth token API operation. | {your_username} |
| password | It should be the password for a user with the API Write Access permission. It will be used to call the Zuora REST API.You can also choose to leave it blank and specify oauth_token that you can get by calling the Create an OAuth token API operation. | {your_password} |
| oauth_token | The OAuth token generated by calling the Create an OAuth token API operation.If you specify this token, you do not need to specify the username and password fields. | {Oauth_token} |
| rsa_signature | The endpoint for the Generate an RSA signature API operation. | /v1/rsa-signatures |
| zuora_base_url | Base URL for the Zuora's RSA Signature API. Update it to the corresponding base URL if you are not using a US 2 API Sandbox tenant. | https://rest.apisandbox.zuora.com (for the US 2 Sandbox tenant) |
| payment_page_url | Zuora's Payment Page URL. | https://apisandbox.zuora.com/apps/PublicHostedPageLite.do (for the US 2 Sandbox tenant) |
| pageId | ID of the Payment Page you configured in your tenant. You can get this ID by navigating to Settings > Payments > Setup Payment Page and Payment Link > Page List > Show Page Id in your US Cloud 2 API Sandbox tenant. | {pageId_from_your_tenant} |
| accountId | (Optional) The ID of the customer account present on the Zuora side. If any transaction is performed after a payment method is created, the transaction can be associated with an account through accountId. | Specify the {account_id} of an account with which the payment method will be associated. |
| publicKey | The public key that you downloaded from your tenant. | {public_key_from_tenant} |

####

Clear the sample prepopulated fields

Because this payment page is only used to collect credit card payment method information, you do not need to preload any values for the payment page form fields.

Now you need to clear the sample prepopulated values for the `creditCard` block configured in `/conf/prepopulate.json`. You can also choose to clear the rest of the prepopulated values for other types of payment methods or leave them unchanged.

See the following `prepopulate.json` as an example:

```json
{
    "creditCard": {
        "creditCardAddress1": "",
        "creditCardAddress2": "",
        "creditCardCountry": "",
        "creditCardHolderName": "",
        "creditCardNumber": "",
        "creditCardExpirationYear": "",
        "creditCardExpirationMonth": ""
    }
 }
```

####

Start the server

In the terminal, navigate to the cloned `payment-page-samples` folder, then run the following command:

```text
$ npm install
```

After the `package-lock.json` and the `node_modules` folder are successfully installed, run the following command to start the server:

```text
$ npm start
```

If no error occurs, open [http://localhost:3000](http://localhost:3000) in the browser, then you should see the following page:

![Payment Page Configuration Page](/2cad62cc191b99f6365dda3136161723/integration-config-page.png "Payment Page Configuration Page")

This page is the start page where you can configure which Payment Page will be shown and which transaction type you want to perform using this Payment Page.

####

Verify that the Payment Page is working

On the Zuora Payment Pages 2.0 Integration Guide page, take the following steps to start testing the Payment Page:

1.  Verify if the payment page can be successfully rendered:

    a. Configure the form as below:

    | Form Field | Value |
    | --- | --- |
    | Environment | Select us_sandbox. |
    | PageId | PageId is auto-populated from /conf/config.json. |
    | Page Type | Select Button inside |
    | Payment Gateway | Leave it blank.If you specify this field, it will be used to override the default test gateway configured in the payment page form. |
    | Locale | Leave the default selection unchanged. |
    | CIT/MIT Enabled | Leave it unselected |
    | Integration Type | Select Payment Method Creation |
    | Payment Gateway Options | Leave it unchanged |

    b. Click **Submit**. If the Payment Page is loaded, you can proceed to the next step; otherwise, you should troubleshoot based on the error message. For more information, see [Troubleshooting](#troubleshooting) for more information.

2.  Verify if the payment page is working as expected:

    a. Specify the following required fields in the Payment Page:

    | Field | Value |
    | --- | --- |
    | Card Number | 4111111111111111 |
    | Expiration Date | 01/2034 |
    | CVV | 737 |
    | Cardholder Name | Amy Lawrence |

    You can also specify values in invalid formats to verify if your customized error message takes effect. For example, setting the expiration date to a date in the past.

    b. Click **Submit**. You should receive the following response.

    ![Payment Method Creation Result](/5906a58880a9cbd22dfb75d255fadcf5/pm-creation-response.png "Payment Method Creation Result")

    c. Verify that the payment method is successfully created through the UI.

    1.  Go back to the Zuora UI of the US 2 Sandbox tenant.
    2.  Click **Payments > Payment Methods** . The customer account list with the payment method information is displayed.
    3.  Locate the payment method you just created. It is usually displayed at the top of the payment method list.
        -   If you have specified the `accountId` value, you can locate the created payment method by locating the associated account.
        -   If you did not specify `accountId` , you can locate the created payment method by cross-comparing the last 4 digits of the **Card Number** value and the **Last Transaction** value.
3.  (Optional) You can repeat Step 1 to 2.b and specify values in invalid formats to verify if your customized error message takes effect. For example, setting the expiration date to a date in the past.

Now your sample payment page is all set. You can change the configuration to see how the Payment Page is rendered in different ways, such as presenting a payment page using the overlay format.

##

Troubleshooting

The following table describes the most frequently encountered issues when integrating with your websites:

| Issue | Possible root causes | Solution |
| --- | --- | --- |
| The payment page is not loaded to the intended webpage. | The specified domain or port for the payment page configuration does not match the domain or port on which your server is running. | In the Zuora UI, check the value specified in the Hosted Domain field for the payment page and ensure that the domain and port match your website's domain and port. |
| The RSA signature or token is not generated successfully or not passed into the payment page properly. | Check your code that calls the Generate an RSA signature operation and ensure that the request succeeds. For more instructions, see Generate and manage the Digital Signature and Token for Payment Pages 2.0. |  |
| The configuration in the /conf/config.json has conflicts. For example, the pageId does not exist for the specified environment. | Check the configuration file to make sure that the payment page settings are correct. |  |
| Zuora Javascript library is not imported to the intended web page. | Check the client-side web page code to ensure that the Zuora JS library is imported into your web page. |  |
| After submitting the payment page form with the required fields specified, the payment method is not created successfully or the payment transaction failed. | Not all client parameters required by the gateway are submitted to the server. | Check if all necessary client parameters are provided in the loadPaymentPages function.For a full list of client parameters, see Client Parameters for Payment Pages 2.0. |
| After entering illegal values into the form fields, the custom error handling does not take effect. | The error handling functions are not working as expected.The errorMessageCallback function is implemented but you used Z.render() instead of Z.renderWithErrorHandler(). | Check the callback and errorMessageCallback functions to ensure that they can work.For more instructions, see the following pages:Error Handling for Payment Pages 2.0Customize Error Messages for Payment Pages 2.0 |
| Predefined credit card values are not prepopulated to the payment page. | The file that contains prepopulated values is invalid.The prepopulated field values are handled incorrectly. | Check the file that stores prepopulated values and ensure that this file is valid.Ensure that the prepopulating logic is working as intended. |
| The payment page is not displayed in the correct place. | The <div id="zuora_payment" class="container container-center"></div> is not added to the correct place. | Check the client-side webpage code and ensure that <div id="zuora_payment" class="container container-center"></div> is added to the intended place. |
