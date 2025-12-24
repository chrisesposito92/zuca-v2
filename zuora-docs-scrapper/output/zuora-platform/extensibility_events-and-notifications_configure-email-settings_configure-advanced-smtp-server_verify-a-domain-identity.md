---
title: "Verify a domain identity"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-advanced-smtp-server/verify-a-domain-identity"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:00.041Z"
---

# Verify a domain identity

Learn how to verify a domain identify when configuring advanced SMTP server.

1.  Click View in the DKIM Status column of the Identities table. The DKIM Settings dialog pops up.

    Figure 1.

    ![DKIM CNAMEs for domain identity](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/26770207-0c68-4131-8443-d92b04dea0ae?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI2NzcwMjA3LTBjNjgtNDEzMS04NDQzLWQ5MmIwNGRlYTBhZSIsImV4cCI6MTc2NjY0MDQ3OCwianRpIjoiZmM0Y2Q5N2RmZjViNDE3ZTkwYWFiYzMzZDIxNjc1ZTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.bnzhs8h5eCsNm1Ho9ESuNTv7jX7PY1BOlzrRdbhLKMw)

2.  Add the three CNAME records in the pop-up dialog to your domain’s DNS settings. If the name in the DKIM settings ends with `_domainkey`, append your domain name that is being verified to the end of that name. For example, if the name is `ctoy2wj55u._domainkey`, specify `ctoy2wj55u._domainkey.yourcompany.com` in your DNS settings. Note that some DNS service providers might automatically add the domain name. In this case, to avoid duplication of the domain name, you should not add it. How you update the DNS settings depends on who provides your DNS service. If your DNS service is provided by a domain name registrar, contact that registrar to update your DNS records.

    Note:

    If you click View in the Verification Status column, you can see a TXT record in the pop-up window. You do not need to add this TXT record to your domain's DNS settings to verify a domain identity.

3.  Wait for the verification to take effect and check the verification status:

    -   If the verification succeeds, the values in the Verification Status and DKIM Status columns change from `Pending` to `Success`. You have finished the verification. Note that verification of these settings might take up to 72 hours to take effect in Zuora.

    -   If the verification fails, the values in the Verification Status and DKIM Status columns change from `Pending` to `Failed`. You need to verify the domain identity again:

        1.  Repeat steps 1 and 2 to add the three CNAME records to your domain's DNS settings.

        2.  Click Retry in the Verification Status column.

    -   If the `Pending` status lasts more than 72 hours, delete the domain identity and add it again to initiate re-verification.
