---
title: "Get started"
url: "https://developer.zuora.com/docs/get-started/introduction/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:15:49.062Z"
---

#

Get started

This page and the "Tutorials" section in the left-hand menu provide code examples in either our REST API or the client libraries.

Use this content as a guide to set up your local development environment and send your first API request. This content will guide you through:

-   How to set up your development environment
-   How to install the latest client libraries (SDK)
-   Some basic concepts
-   How to send your first API request using cURL or Zuora client libraries

If you run into any issues or have questions, join our [Developers Community](https://community.zuora.com/communities/community-home?communitykey=e2a932b4-50c4-4019-a3e8-362e38714df3) to find answers or raise your questions.

##

Tenant setup

This tutorial assumes that you are using either a Zuora-provided test drive, or your own Zuora Sandbox environment.

##

OAuth client setup

Accessing the Zuora API requires a user account with the necessary privileges. Zuora recommends using OAuth 2.0 for all API interactions and using a dedicated user account with the API write access for all API or client libraries interactions.

Establishing such a user account requires either being an administrator in the Zuora tenant or having access to your coworkers who are administrators in the tenant.

For the step-by-step instructions on how to create an OAuth client, see the following video:

The text content for this video tutorial is also available [here](/docs/get-started/oauth-client-setup-steps/).

Note that a different Client ID and Secret are needed for each tenant, for example, sandbox or production.

###

Find the correct REST endpoint for your development tenant

Log into the Zuora UI and identify the URL root of the UI page in the **User Interface root URL** column, then identify the corresponding REST API URL root. If the URL starts with `one.zuora.com`, you should choose the tenant for which you have an OAuth client ID and secret first. Our Production tenants are intentionally absent from this table.
| Environment | User Interface root URL | REST root URL | SDK enum value |
| --- | --- | --- | --- |
| US Cloud 1 APISandbox | https://sandbox.na.zuora.com | https://rest.sandbox.na.zuora.com/ | SBX_NA |
| US Cloud 1 Central & Dev Sandbox | https://test.zuora.com | https://rest.test.zuora.com/ | CSBX |
| US Cloud 2 APISandbox | https://apisandbox.zuora.com | https://rest.apisandbox.zuora.com/ | SBX |
| EU Cloud APISandbox | https://sandbox.eu.zuora.com | https://rest.sandbox.eu.zuora.com/ | SBX_EU |
| EU Cloud Central & Dev Sandbox | https://test.eu.zuora.com | https://rest.test.eu.zuora.com/ | CSBX_EU |
| APAC Developer & Central Sandbox | https://test.ap.zuora.com | https://rest.test.ap.zuora.com/ | CSBX_AP |

##

Getting started language selection

Select tool or language you want to use to get started.

cURL is a popular command-line tool for transferring data using network protocols like HTTP and HTTPS. ​​It requires minimal setup but is less capable than fully-featured programming languages like Java or JavaScript. With cURL installed, you can enter the cURL commands in the Terminal or Command Prompt and see the response immediately.

##

Step 1. Set up cURL

cURL is pre-installed on some operating systems by default, for example, MacOS or Linux. Check whether you have cURL installed by opening your Terminal or command line interface by entering the command:

```bash
curl https://developer.zuora.com/docs/get-started/introduction/ --compressed
```

With cURL set up this will send an HTTP request to fetch the contents of "developer.zuora.com/docs/get-started/introduction/".

If you see an error indicating that cURL is not found, you should install it by following the instructions on the [Install curl and libcurl](https://everything.curl.dev/install/index.html).

##

Step 2: Set up authentication credentials

After you confirm that cURL is installed, you can set up your credentials in your Terminal or Command Prompt.

###

MacOS/Linux

1.  **Open Terminal**: You can search for `terminal` through Spotlight Search or find it in the **Applications** folder.
2.  **Edit bash profile**: To open the profile file in a text editor, enter the command `nano ~/.bash_profile` or `nano ~/.zshrc` (for newer MacOS versions).
3.  **Add your client credentials as environment variables**: In the editor, add the following lines to the profile file, replacing `your-client-id` with your client ID and `your-client-secret` with your client secret:

    ```bash
    export ZUORA_CLIENT_ID='your-client-id'
    export ZUORA_CLIENT_SECRET='your-client-secret'
    ```

4.  **Save the changes**: To save the changes, press `Ctrl` + `O`. At the filename prompt, press `Enter`, then press `Control` + `X` to exit the editor.
5.  **Load the updated profile**: Use the command `source ~/.bash_profile` or `source ~/.zshrc` to load the updated profile.
6.  **Setup verification**: Verify the setup by entering `echo $ZUORA_CLIENT_ID` in the Terminal. It should display your client ID. Enter `echo $ZUORA_CLIENT_SECRET` in the Terminal and it should display your client secret.
7.  **Create a bearer token**: Send a request to [Create an OAuth token](https://developer.zuora.com/v1-api-reference/api/operation/createToken/) to generate an OAuth bearer token.

    ```bash
    curl --request POST \
      --url https://rest.test.zuora.com/oauth/token \
      --header 'Accept: application/json' \
      --header 'Content-type: application/x-www-form-urlencoded' \
      --data client_id=$ZUORA_CLIENT_ID \
      --data-urlencode client_secret=$ZUORA_CLIENT_SECRET \
      --data grant_type=client_credentials
    ```

    **Response body**

    ```json
    {
        "access_token": "6447d349d8854f0d8d5535484b0b811b",
        "token_type": "bearer",
        "expires_in": 3598,
        "scope": "entity.11e643f4-a3ee-8bad-b061-0025904c57d6 platform.write service.genesis.read service.genesis.write service.usage.delete service.usage.update service.usage.write tenant.12270 user.2c92c0f86680fd7777777ad86e455692",
        "jti": "6447d34955555f0d8d5535484b0b862b"
    }
    ```

    Each bearer token is valid for an hour. When it expires, repeat this step again.


###

Windows

1.  **Open Command Prompt**: You can find it by searching `cmd` in the **Start** menu.
2.  **Configure environment variable, in the current session or permanently**.
    -   **Set environment variables in the current session**: To set the `ZUORA_CLIENT_ID` environment variable in the current session, use the following command and replace `your-client-id` with your client ID:

        ```bash
        setx ZUORA_CLIENT_ID "your-client-id"
        ```

        To set the `ZUORA_CLIENT_SECRET` environment variable in the current session, use the following command and replace `your-client-secret` with your client secret:

        ```bash
        setx ZUORA_CLIENT_SECRET "your-client-secret"
        ```

    -   **Permanent setup**: Alternative to setting variables for the session, you can make the setup permanent by adding your client credentials as system properties:
        1.  Right-click the **This PC** or **My Computer** option, and select **Properties**.
        2.  Click **Advanced system settings**.
        3.  Click the **Environment Variables** button.
        4.  In the **System variables** section, click **New...**, and enter `ZUORA_CLIENT_ID` as the variable name and your client ID as the variable value.
        5.  In the **System variables** section, click **New...**, and enter `ZUORA_CLIENT_SECRET` as the variable name and your client secret as the variable value.
3.  **Setup verification**: Reopen the Command Prompt and enter the following command. It should display your client ID and secret:

    ```bash
    echo %ZUORA_CLIENT_ID%
    echo %ZUORA_CLIENT_SECRET%
    ```

4.  **Create a bearer token**: Send a request to [Create an OAuth token](https://developer.zuora.com/v1-api-reference/api/operation/createToken/) to generate an OAuth bearer token.

    ```bash
    curl --request POST \
      --url https://rest.test.zuora.com/oauth/token \
      --header 'Accept: application/json' \
      --header 'Content-type: application/x-www-form-urlencoded' \
      --data client_id=%ZUORA_CLIENT_ID% \
      --data-urlencode client_secret=%ZUORA_CLIENT_SECRET% \
      --data grant_type=client_credentials
    ```

    **Response body**

    ```json
    {
        "access_token": "6234d349d8854f0d8d5535484b0b862b",
        "token_type": "bearer",
        "expires_in": 3598,
        "scope": "entity.11e643f4-a3ee-8bad-b061-0025904c57d6 platform.write service.genesis.read service.genesis.write service.usage.delete service.usage.update service.usage.write tenant.12270 user.2c92c0f86680fd7777777ad86e455692",
        "jti": "6447d34955555f0d8d5535484b0b862b"
    }
    ```

    Each bearer token is valid for an hour. When it expires, you just repeat this step again.


##

Step 3. Send your first request

Now, you can send your first API request. A sample cURL request to query all customer accounts in your tenant is provided below. The page size is set to 1 for easier validation.

Customer accounts capture your customers' billing and payment details. Regardless of whether your customers are individuals or companies, the customer account is where Zuora captures their name, their addresses for billing and tax purposes, their payment methods, the orders they’ve placed for your products and services, and many other details. This is a topic you can explore in more depth in [Manage customer accounts](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_customer_accounts) in our Knowledge Center. Note that you should replace `your-bearer-token` with the bearer token you generated in Step 2.

```bash
curl -L -X GET 'https://rest.test.zuora.com/object-query/accounts?pageSize=1' \
-H 'Authorization: Bearer 6234d349d8854f0d8d5535484b0b862b'
```

If your tenant has billing accounts, you will receive a response similar to the following sample response:

```json
{
    "nextPage": "W3sidmFsdWUiOiIyMDI0LTA3LTI1VDAyOjQ2OjIwWiIsIm9yZGVyQnkiOnsiZmllbGQiOiJVcGRhdGVkRGF0ZSIsIm9yZGVyIjoiREVTQyJ9fSx7InZhbHVlIjoiOGE4YWEzYmM5MGM0ZjE2OTAxOTBlN2MyNTQ1ZjNjODYiLCJvcmRlckJ5Ijp7ImZpZWxkIjoiSWQiLCJvcmRlciI6IkRFU0MifX1d",
    "data": [
        {
            "accountNumber": "A00000019",
            "allowInvoiceEdit": false,
            "autoPay": true,
            "balance": 0.0,
            "batch": "Batch1",
            "bcdSettingOption": "AutoSet",
            "billCycleDay": 25,
            "billToId": "8a8aa3bc90c4f1690190e7c254eb3c8d",
            "createdById": "c4c98efdaf78374783d85c22e0338e53",
            "createdDate": "2024-07-25T02:39:50Z",
            "creditBalance": 0.0,
            "currency": "USD",
            "defaultPaymentMethodId": "8a8aa3bc90c4f1690190e7c2566e3cb8",
            "id": "8a8aa3bc90c4f1690190e7c2545f3c86",
            "invoiceDeliveryPrefsEmail": true,
            "invoiceDeliveryPrefsPrint": false,
            "invoiceTemplateId": "8a368bbf87b6d5910187b80ab8f40d0b",
            "lastInvoiceDate": "2024-07-25",
            "mrr": 299.9,
            "name": "Test Customer 3",
            "partnerAccount": false,
            "paymentMethodCascadingConsent": false,
            "paymentTerm": "Due Upon Receipt",
            "soldToId": "8a8aa3bc90c4f1690190e7c2555f3ca4",
            "status": "Active",
            "taxExemptStatus": "No",
            "totalDebitMemoBalance": 0.0,
            "totalInvoiceBalance": 0.0,
            "unappliedBalance": 0.0,
            "unappliedCreditMemoAmount": 0.0,
            "updatedById": "c4c98efdaf78374783d85c22e0338e53",
            "updatedDate": "2024-07-25T02:46:20Z"
        }
    ]
}
```

Congratulations! You’ve made your first request to Zuora throught the REST API!

##

Next steps

We provide step-by-step tutorials for using the Zuora API and client libraries to complete typical business-to-consumer(B2C) business flows. Check our [Tutorials](/docs/get-started/tutorials/) to learn more.
