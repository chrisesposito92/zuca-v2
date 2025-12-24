---
title: "Configure portal features"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/subscriber-portal/configure-portal-features"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:17.112Z"
---

# Configure portal features

Learn how to configure data and features for your portal after setting up the user interface.

After you have configured the user interface of the portal, you are ready to configure the data and features for your portal.

1.  In the Setup page of your Ecommerce Portal instance, click the CONFIGURATION tab.
2.  Complete the information in the Domain Information section.
    1.  The Customer Portal URL displays the URL of the portal login page. You need to submit a ticket at [Zuora Global](https://support.zuora.com) Support to change the system-assigned portal URL to a domain owned by your company. By default, the portal URL is in the format of You can change it to something like the following URL:

        https://apps.ecommerce-portal-<number>.zuora.com https://payments.<yoursite>.com

    2.  Select a default route from the Set Default Route dropdown list. The default route identifies the landing page which end users will be directed to when accessing the portal. The available routes upon installation are:

        -   login - Direct end users to the login page of the portal.

        -   products - Direct end users to the products page of the portal. The products page displays all products in the Customer Catalog. This route is only available if you are using the Subscriber Portal with the Subscription Management feature enabled.


3.  (Optional) In the SSO Providers section, set up an SSO provider.
    1.  Click \+ Add new provider . The New Provider dialog is then displayed.
    2.  Select the name of the identity provider you are using for SSO from the Name dropdown list. Subscriber Portal now supports the following types of SSO providers: Note that you should select okta if you are using Okta OpenID, and select saml if you are using Okta SAML.

        -   auth0 : Select if you are using the Auth0 provider.

        -   okta : Select if you are using the Okta provider.

        -   jwt : Select if you are using JSON Web Token (JWT) SSO. Subscriber Portal currently supports HS256 and RS256 as the JWT algorithms.

        -   saml : Select if you are using the SAML identity provider.


    3.  Complete other settings based on the selected value from the Name dropdown list. For more information, see [Settings for different providers](/zuora-platform/integration/integration-hub/subscriber-portal/configure-portal-features/settings-for-different-providers).
    4.  Click Create Provider .
4.  In the Cutover Date section, set the effective date for all viewable customer information. The cutover date filters the transactional data and prevents the data before this date from being viewed in the portal. For example, the cutover date is useful when migrating from one portal or system to the Subscriber Portal. It prevents the legacy data used for the catch-up bill run migration from being displayed. The system will pull the transaction data after the cutover date (exclusive of the cutover date). For example, if you want to show all the data after September 1, 2019, enter '2019 August 31' for the cutover date.
5.  In the Filter information section, you can customize your own filters to locate the desired resource. Note: The REST APIs for Usage, Debit Memo, and Credit Memo do not support filters, so the statement is currently evaluated as a string. This means the filter conditions like dates and numbers cannot work as expected for these objects apart from the `=` comparison. ![Custom filters](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7e902e84-20e1-493d-aaa2-8454f987401e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdlOTAyZTg0LTIwZTEtNDkzZC1hYWEyLTg0NTRmOTg3NDAxZSIsImV4cCI6MTc2NjY0MTY5NSwianRpIjoiZjg0MDI1NTI3MmQwNDdlZTlkYmUwMmM2Y2ZhMjJkOTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.z_EN6k8FhNKcc7kF_TEsLFnbo0Z-Oly3Tpaoq92KMvM)
6.  Configure the Payment Page details in the portal. You must ensure that you have created a Payment Page in your Zuora tenant. For more information, see [Create Hosted Payment page in Zuora](/zuora-cpq/zuora-cpq-configurations/deprecated-hosted-payment-pages-settings/hosted-payment-pages-in-older-zuora-quotes-version/create-hosted-payment-page-in-zuora). Note that when creating a new Payment Page in Zuora, you must complete the Basic Information pane as follows: After a Payment Page in Zuora is created, complete the following fields based on the Payment Page configuration: Click \+ Add new payment page to add additional payment pages if you have more than one Payment Page.

    -   In the Hosted Domain field, enter the Customer Portal URL displayed in Configuration tab.

    -   Enter `/dashboard` in the Callback Path field. ![Zuora Payment Page Basic Information Configuration](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c2f7fb76-e05b-4e0c-a0f7-074e7b49d4b7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMyZjdmYjc2LWUwNWItNGUwYy1hMGY3LTA3NGU3YjQ5ZDRiNyIsImV4cCI6MTc2NjY0MTY5NSwianRpIjoiNTY5MWRmM2ZiOTk0NGQzYWI4MTFhYTA3NDFiOTE3ZjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ILfcbsxgWc5ZCW7gAgDKpuAVA3e2nN1VwMQlZp3cmnY)

    -   Type - The payment method type that will be captured by the payment page.

    -   Name - The name displayed to end users to describe the type of payment methods.

    -   Payment Page Id \- The ID provided by the corresponding Hosted Payment Page configured in Zuora. In order to obtain the Payment Page Id, navigate to Settings > Payments > Setup Hosted Pages > Actions > Show Page ID in your Zuora tenant.


7.  (Optional) Enter the Promo Code URL and Promo Code API Token of your Promo Codes app instance in the Promo Code Settings section. Promo Codes is a separate app that you can purchase in Zuora Marketplace, and is not required for the Subscriber Portal's use.
8.  in the Payment Constraints section, enter the minimum and maximum amounts of payments that will be accepted via the portal. The default amount is dependent on the selected currency in Zuora environment.
9.  In the Tenant Information section, complete the configurations.
    1.  Select the time zone associated with your Zuora tenant. Aligning the portal time zone with your Zuora tenant time zone can avoid errors when making payments.
    2.  Select the Enable zuora orders check box if your tenant uses the Zuora Orders feature.
    3.  Select the Enable zuora invoice settlement if the Invoice Settlement feature is enabled for your tenant. Depending on whether the Invoice Settlement feature is enabled, your Zuora tenant uses different sets of APIs to process payments, unapplied payments, and so on. This setting is to ensure that your portal uses the same APIs as your Zuora tenant.
    4.  Select the Enable credit and debit memos check box if you want to expose credit memos and debit memos to end-users. With this setting enabled, tabs for credit memos and debit memos will be displayed in the portal.
10.  In the Feature Configuration section, enable the features for the portal .

     -   User Roles - This feature enables you to restrict the accessibility of the portal to certain Zuora contacts. To restrict the accessibility of the portal, you must create a custom field on the Contact object called KongRole with one of the following values in your Zuora tenant: A contact can be associated with multiple accounts. If a contact is whitelisted in one account and blacklisted in another, he can view the details of the account with the whitelist role setting, but cannot view the details of the account with the blacklist role setting.
         Note: This feature is an Admin Option and is not enabled by default. Submit a request at [Zuora Global Support](https://support.zuora.com) .

         -   whitelist - Allows a contact to view all information and perform all functions in the portal.

         -   blacklist - Prevents a contact from viewing the information of this account in the portal.

     -   Shopping - This feature enables you to acquire customers through an E-commerce shopping experience. (This feature request is in progress and not available for use at the moment.)

     -   Usage Screen - This feature enables a Usage page in the portal that displays Usage data.


11.  In the Configure Your Custom Endpoints section, add in a query in Zuora Object Query Language (ZOQL) to obtain the information to be displayed in the portal. For more information, see [ZOQL](/zuora-platform/data/legacy-query-methods/zoql).
12.  In the Field Display Configuration section, configure the fields that will be viewed and edited by end users in the portal.
     1.  Click Account Fields , Contact Fields , or Usage Fields .
     2.  Select the check box for the desired fields.

         -   For Account Fields and Contact Fields: You can optionally enter the custom name for each field. Note that any edit completed by end subscribers will be displayed within their account or contact information stored in your Zuora tenant.

         -   For Usage Fields: The following default Usage fields and any other Usage field configured in your Zuora tenant will be viewed by end users: Subscription Number , Submission Date Time , Unit of Measure , Start Date Time , and Quantity .


     3.  Click Done to save the configuration.
13.  In the Password Strength section, select the password strength requirements for end users in the dropdown list. Password strength is applied when portal users create or reset portal passwords. You can also create a password strength by entering a Regex expression. For example, to ensure a special character is included, enter a Regex expression that includes any of these characters ( @$!%\*?&) . This setting is not available in the admin portal for solutions using SSO.
14.  In the Configure Your Translations text box, provide user-friendly translations of the pre-defined identifiers in Zuora. The default translation is automatically populated and available for editing.
15.  Select the default language for the portal in the Pick Default Language dropdown list. Note that this setting will change the language for only the portal instead of your Zuora tenant.
16.  Click Save Settings to save the configuration.
