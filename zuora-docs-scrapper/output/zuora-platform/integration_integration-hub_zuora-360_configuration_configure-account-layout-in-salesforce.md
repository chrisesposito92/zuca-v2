---
title: "Configure Account Layout in Salesforce"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360/configuration/configure-account-layout-in-salesforce"
product: "zuora-platform"
scraped_at: "2026-01-15T22:02:04.678Z"
---

# Configure Account Layout in Salesforce

Learn how to customize the account page layout in Salesforce to integrate Zuora 360 data effectively.

This article describes how to customize the account page layout in order to use the Zuora 360 data in Salesforce.

To configure the account layout in Salesforce for Zuora 360:

To configure the Billing Accounts layout:

To configure the Subscriptions layout:

To configure the Invoices layout:

1.  Navigate to Setup > Build \> Customize > Accounts > Page Layouts .
2.  On the Account Page Layout page, click Edit for Account Layout page. ![Account_Page_Layout.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8e10a428-4d73-45c4-a1ef-446bbd53efe0?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhlMTBhNDI4LTRkNzMtNDVjNC1hMWVmLTQ0NmJiZDUzZWZlMCIsImV4cCI6MTc2ODYwMDkxOCwianRpIjoiMTU4MzgyOGRkNjJkNGE0NDhmYmUzYzQ0NDYwYmNjYzQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.QLN-twbx6UwzMtlQqh_77GmQ2C1IUUGrbjCJaaTtPkA)
3.  In left menu bar of the Account Layout Section at the top, click Related Lists . ![Related_List.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b94f1897-710a-400a-8a13-226b39101628?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI5NGYxODk3LTcxMGEtNDAwYS04YTEzLTIyNmIzOTEwMTYyOCIsImV4cCI6MTc2ODYwMDkxOCwianRpIjoiZDIyZDI3ZmNhZDE1NGUzOGFmOTkwNzRhOTgxOWYyYWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.Tu1FCmUmHA-ZVEmEMkibqW6OZ72BngAevvS4YRaZm3c)
4.  Drag and drop the following related list objects into the area on the Account Layout where you want to include them. This adds the related lists to the account page layout in Salesforce.

    -   Billing Accounts

    -   Subscriptions

    -   Subscription Product & Charges

    -   Invoices


5.  Configure the Billing Account layout .
6.  Configure the Subscriptions layout .
7.  Configure the Invoices layout .
8.  Click Save .
9.  In the Billing Accounts area, click the wrench icon to open the Related List Properties Dialog. ![Billing_Account_Page_Layout.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9ce69196-6414-49ed-9827-1a61be21c598?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjljZTY5MTk2LTY0MTQtNDllZC05ODI3LTFhNjFiZTIxYzU5OCIsImV4cCI6MTc2ODYwMDkxOCwianRpIjoiZDc4NzE4YjJkOTgxNDNlMjg5MjQ4NzgzMTAxODM5YzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.iiJLLCKShJQ6Y_JWl3A2R6sWMogt7CYDHiqhbZYLoss)
10.  Select the following fields in the Available Fields list, then click the right ( Add ) arrow to add them to the Selected Fields list. This adds the fields to the Billing Accounts layout. ![Related_List_Property.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ae85a0fc-032a-41e3-9908-af7859164f3c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFlODVhMGZjLTAzMmEtNDFlMy05OTA4LWFmNzg1OTE2NGYzYyIsImV4cCI6MTc2ODYwMDkxOCwianRpIjoiZThhMGY5ZTQ2ZTAyNDUwMDk2NTYwMWFkZDIwYzcwNWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.hWBGyRzxs5KPEv3OFFKmeI1LhNDx6gJqFPDZUOV5Q70)

     -   Bill to Account Balance

     -   Last Invoiced

     -   AutoPay

     -   Status

     -   Payment Term

     -   Credit Card Expiration

     -   Credit Card Number

     -   Credit Card Type


11.  On the Buttons heading, click the + sign.
12.  Uncheck New .
13.  Click OK to save your changes.
14.  In the Subscriptions area of the Account Layout screen, click the wrench icon to open the Related List Properties Dialog.
15.  Select the following fields in the Available Fields list, then click the right ( Add ) arrow to add them to the Selected Fields list. This adds the fields to the Subscriptions layout.

     -   Subscription Name

     -   TCV

     -   Initial Term

     -   Renewal Term

     -   Next Renewal Date

     -   Status


16.  In the Buttons heading, click the + sign, on the right side of the heading.
17.  Uncheck New .
18.  Click OK to save your changes.
19.  In the Subscription Product & Charges area of the Account Layout screen, click the wrench icon to open the Related List Properties Dialog.
20.  Select the following fields in the Available Fields list, then click the right ( Add ) arrow to add them to the Selected Fields list. This adds the fields to the Subscription Product & Charges layout.

     -   Subscription Charge Name

     -   Product Name

     -   Quantity

     -   UOM

     -   Price

     -   Type

     -   Period


21.  In the Buttons heading, click the + sign, on the right side of the heading.
22.  Uncheck New .
23.  Click OK to save your changes.
24.  In the Invoices area of the Account Layout screen, click the wrench icon to open the Related List Properties Dialog.
25.  Select the following fields in the Available Fields list, then click the right ( Add ) arrow to add them to the Selected Fields list. This adds the fields to the Invoices layout.

     -   Invoice Number

     -   Invoice ID

     -   Total Amount

     -   Balance

     -   Invoice Date

     -   Due Date

     -   Age Bucket

     -   Payment Term

     -   Status


26.  In the Buttons heading, click the + sign, on the right side of the heading.
27.  Uncheck New .
28.  Click OK to save your changes.
