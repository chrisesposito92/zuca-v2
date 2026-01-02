---
title: "Foreign keys"
url: "https://developer.zuora.com/zephr-docs/zephr-api/zephr-api-tutorials/foreign-keys/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:57.020Z"
---

#

Foreign keys

In many cases, Zephr Customers use a Foreign Key for a variety of integrations with Zephr. These are stored differently to User Schema Attributes, using Foreign Systems.

This guide details how to set a Foreign Key in Zephr using the Public API and, once set, how to search for users using Foreign Key or email.

To set a Foreign Key in Zephr during registration, use the following request:

```text
curl --location --request POST 'https://harminder.cdn.blaize.io/blaize/register' \\
--header 'Content-Type: application/json' \\
--data-raw '{
        "identifiers": {
            "email\_address": "harmindervirdi12345@test.com"
        },
        "validators": {
            "password": "sup3rs3cr3t"
        },
        "foreign\_keys": {
         "CRMID": "12345"
        }
    }'
```

To find users based upon Foreign Key, make the following call:

`https://[tenant].admin.blaize.io/v3/users?foreign_key.CRMID=[foreignkey]`

E.G.

`https://harminder.admin.blaize.io/v3/users?foreign_key.CRMID=12345`

To Insert a Foreign Key, use the following request. Make sure you use the `zephr_admin_session=<sessionid>` as a cookie as it will help determine the tenant:

`PUT https://console.zephr.com/v3/users/8b04332c-2234-4f62-b398-7c0cd35885b7/foreign-key/update/CRMID`

The body should include the CRMID. For example, 1234.

Once the CRMID is set for that user, it can be retrieved as follows:

`https://console.zephr.com/v3/users?foreign_key.CRMID=1234`
