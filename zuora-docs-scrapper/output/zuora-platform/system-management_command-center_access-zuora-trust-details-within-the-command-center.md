---
title: "Access Zuora Trust details within the Command Center"
url: "https://docs.zuora.com/en/zuora-platform/system-management/command-center/access-zuora-trust-details-within-the-command-center"
product: "zuora-platform"
scraped_at: "2025-12-24T05:06:05.580Z"
---

# Access Zuora Trust details within the Command Center

Learn how to access Zuora Trust details and manage notifications through the Command Center, ensuring you have the right access and subscription settings.

## Identify your Zuora login method

To ensure you have the right access to Trust updates and other Zuora services, determine how you log in.

-   You are logging in via OneID if :

    -   You access Zuora through one.zuora.com

    -   You log in via SSO SAML, and your IdP redirects you to OneID at one.zuora.com , keeping you signed in as your OneID user.

-   You are not logging in via OneID if :

    -   You log in directly using an environment URL such as test.zuora.com, sandbox.zuora.com, or production.zuora.com

    -   Your tenant does not display an app-switcher on the top-left corner to navigate to OneID.


![Trust login via OneID](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e7f85187-541d-43ef-8467-07e53eac6a9d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU3Zjg1MTg3LTU0MWQtNDNlZi04NDY3LTA3ZTUzZWFjNmE5ZCIsImV4cCI6MTc2NjYzOTE2MywianRpIjoiOTI0MzZjZTgzM2NkNDc0MTlhZmRkMTU5M2UwYWU1YzgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.026HHAWDF2Sq2hZ7Lm-Ks9UfQNZaF4lelMNFaoSv2Jc)

## Manage your Zuora Trust notifications

If you have already set up Zuora Trust notifications, you will need to resubscribe via Command Center and confirm your subscription through the email you receive. See Zuora Trust Status in Command Center .

-   For users new to Trust notifications : You can subscribe via the Command Center > Trust Status page .

-   For users subscribing via OneID : You will receive personalized notifications specific to your organization.

-   For users subscribing via the general updates page or the signup page : You will receive all the general Trust updates.


You can subscribe to Trust updates via email or webhook. Atom and RSS feeds will not be available.

Note:

The public Trust page trust.zuora.com will still be available, but it will display only system status updates including Zuora OneID system status and critical, high-impact outages.

Users can only subscribe to Trust updates only via Command Center. To receive notifications, please log in to Command Center and manage your subscription under Trust Status.
