---
title: "FAQ for sharing app instances"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub/share-an-app-instance/faq-for-sharing-app-instances"
product: "zuora-platform"
scraped_at: "2025-12-24T05:46:08.681Z"
---

# FAQ for sharing app instances

Review frequently-asked questions and additional information about sharing app instances.

## Who can I share app instances with?

You can share app instances with anyone who has an approved Zuora Integration Hub account, including Zuora consultants.

## Can I control what someone can do with a shared app instance?

As the owner of a shared app instance, you can grant the following permissions to other users:

-   Read Access

    Enables the user to view and clone the app instance.

-   Write Access

    Enables the user to delete, edit, stop, and run the app instance.


## If I share an app instance with someone, are they required to purchase the app?

Other users are not required to purchase the app, but they only have access to the shared app instance.

## If someone clones an app instance, are the Zuora tenant logins or external logins also cloned? If so, will this expose any of my authentication credentials?

Zuora tenant logins and external logins are not cloned. The username is exposed, but the password is encrypted and is not exposed. Other users cannot edit the username or password.

When you create a Zuora Connect login for your Zuora tenant, Zuora recommends that you use the authentication credentials of an API-only user account.

## Can I unshare an app instance?

As the owner of a shared app instance, you can revoke permissions at any time.
