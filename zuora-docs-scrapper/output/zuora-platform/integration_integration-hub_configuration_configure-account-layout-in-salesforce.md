---
title: "Configure Account Layout in Salesforce"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configuration/configure-account-layout-in-salesforce"
product: "zuora-platform"
scraped_at: "2026-02-19T03:34:24.513Z"
---

# Configure Account Layout in Salesforce

Learn how to customize the account page layout in Salesforce to integrate Zuora 360 data effectively.

This article describes how to customize the account page layout in order to use the Zuora 360 data in Salesforce.

To configure the account layout in Salesforce for Zuora 360:

To configure the Billing Accounts layout:

To configure the Subscriptions layout:

To configure the Invoices layout:

1.  Navigate to Setup > Build \> Customize > Accounts > Page Layouts .
2.  On the Account Page Layout page, click Edit for Account Layout page. ![Account_Page_Layout.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8e10a428-4d73-45c4-a1ef-446bbd53efe0?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhlMTBhNDI4LTRkNzMtNDVjNC1hMWVmLTQ0NmJiZDUzZWZlMCIsImV4cCI6MTc3MTU1ODQ1OCwianRpIjoiNGYxOTA4ODlmY2VhNDNkMWE2NDNkODU1ZjQ2NWY1ZTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.CVqTzLGvniXFA_MDEXr3zQ4PRVbS3TLUuDd1NcnjyF8)
3.  In left menu bar of the Account Layout Section at the top, click Related Lists . ![Related_List.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b94f1897-710a-400a-8a13-226b39101628?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI5NGYxODk3LTcxMGEtNDAwYS04YTEzLTIyNmIzOTEwMTYyOCIsImV4cCI6MTc3MTU1ODQ1OCwianRpIjoiOGNhOTkxYzkwNTA2NGI2NWIxMjlhYWY5OTE5M2NjYjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.XYhkH2laIrX8F2dwh258HVyvMPA6p8ctkjPIiPtwXoY)
4.  Drag and drop the following related list objects into the area on the Account Layout where you want to include them. This adds the related lists to the account page layout in Salesforce.

    -   Billing Accounts

    -   Subscriptions

    -   Subscription Product & Charges

    -   Invoices


5.  Configure the Billing Account layout .
6.  Configure the Subscriptions layout .
7.  Configure the Invoices layout .
8.  Click Save .
9.  In the Billing Accounts area, click the wrench icon to open the Related List Properties Dialog. ![Billing_Account_Page_Layout.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9ce69196-6414-49ed-9827-1a61be21c598?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjljZTY5MTk2LTY0MTQtNDllZC05ODI3LTFhNjFiZTIxYzU5OCIsImV4cCI6MTc3MTU1ODQ1OCwianRpIjoiYjk1Yjk5NTUwNmEwNGZhYmJlNDI4NzBlOGYwMmRkNjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.or9hWRXFtpOZI-ZVOTSgMYxrJVckqVwudVFIh7lA_Qc)
10.  Select the following fields in the Available Fields list, then click the right ( Add ) arrow to add them to the Selected Fields list. This adds the fields to the Billing Accounts layout. ![Related_List_Property.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ae85a0fc-032a-41e3-9908-af7859164f3c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFlODVhMGZjLTAzMmEtNDFlMy05OTA4LWFmNzg1OTE2NGYzYyIsImV4cCI6MTc3MTU1ODQ1OCwianRpIjoiODMwNjk5YTJhYTNhNDczOGFiNzgwOTE5NGQzNjZlNWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.V97IFtnPc4CTOwO0-LH4zLIbHtV_ItzHeIEkjHwsj68)

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
