---
title: "Specify valid merge fields in the translation profile"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/enable-multilingual-support-in-html-billing-document-templates/specify-valid-merge-fields-in-the-translation-profile"
product: "zuora-billing"
scraped_at: "2025-12-24T05:44:02.020Z"
---

# Specify valid merge fields in the translation profile

Learn how to specify valid merge fields in the translation profile using the Object Scheme explorer for flexible translation.

Only valid merge fields or SPECIAL.PPOC in the translation profile can be translated. You can refer to the Object Scheme explorer available on the Edit HTML Template page to specify merge fields that will be translated flexibly. Click the ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/22a255c3-896f-4a6c-b8d4-6c0b21a02a95?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjIyYTI1NWMzLTg5NmYtNGE2Yy1iOGQ0LTZjMGIyMWEwMmE5NSIsImV4cCI6MTc2NjY0MTQ0MCwianRpIjoiOTc3YjM3ODYxYjE3NDc4Yjk0ZDViZGJlYmYwYjVjODgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.gHmi4BYH3MwyngkQvdXaJjkYcKtb3CETHelPEPlTI-U) icon at the bottom-left corner of the Edit page to open the explorer.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e8f63800-ade5-4056-82be-9da14e627595?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU4ZjYzODAwLWFkZTUtNDA1Ni04MmJlLTlkYTE0ZTYyNzU5NSIsImV4cCI6MTc2NjY0MTQ0MCwianRpIjoiODliNzExZjc5ZDQwNDRmZjg1ZTE0OGNiNGRmZDYxMGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.oqxg46_U70CUunEKpxaJTFVdJWxrOdzLVcfiEs-vsvA)

You need to follow the following rules when specifying the merge field values:

-   A valid translatable merge field must be in the object.field format. In the explorer, some items are not displayed in the object names. You need to refer to the annotations to identify the object name. In the below example, because the object name of BillTo is Contact, a valid merge field should start with Contact, such as Contact.AccountId.


![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f80ca594-db0b-4e8c-9ed4-6c3b43bc6cec?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY4MGNhNTk0LWRiMGItNGU4Yy05ZWQ0LTZjM2I0M2JjNmNlYyIsImV4cCI6MTc2NjY0MTQ0MCwianRpIjoiNDhlODJiNjdiOGY2NGI1MDhhYTY3MGFjODgyMzVlZTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.b4_uUIXbcbqhuObidW9HSOiEZdCjkLzrmIOh2MhxUzw)

-   The field type must be String.

-   You cannot specify objects or fields that don't exist in the Object Scheme explorer.

-   The object position must be a single object. You can refer to the data type annotations in the explorer to identify the correct object name. For example, if you want to translate the ChargeName field on the Invoice Item object, use InvoiceItem.ChargeName in the translation profile.


Note that in the explorer, the display name is InvoiceItems. But the annotation of this item is List of InvoiceItem. You need to use the singular object name InvoiceItem. The below screenshot demonstrates the position of the correct values:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/19042d30-8f84-4a02-9efd-834cffbcd90c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE5MDQyZDMwLThmODQtNGEwMi05ZWZkLTgzNGNmZmJjZDkwYyIsImV4cCI6MTc2NjY0MTQ0MCwianRpIjoiM2Q1Y2M0ZmFjODg2NDk5YTkwYTUxNWMzNzg3NzkzMzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.73-9siI3pHG9I-UmKUdTxGQTVjjMVQlx47bfZfsvrFc)
