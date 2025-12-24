---
title: "Use client assertion"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/oauth-2.0-authentication-for-configurable-tax-apps/use-client-assertion"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:08.724Z"
---

# Use client assertion

Lists the use of client assertion with Azure as an OAuth 2.0 provider, including required fields and steps for enabling the feature.

-   Currently only supports [Azure](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow#second-case-access-token-request-with-a-certificate) as an OAuth 2.0 provider.

-   This feature is in Limited Availability, contact [Zuora Global Support](https://support.zuora.com/) to enable it.

    | Field | Description |
    | --- | --- |
    | Access Token URL (Required) | https://login.microsoftonline.com/{tenant}/oauth2/v2.0/tokenThe tenant is the Directory (tenant) ID in Azure. |
    | Client ID (Required) | The Application (client) ID in Azure. |
    | Audience (Required) | https://login.microsoftonline.com/{tenant}/v2.0The tenant is the Directory (tenant) ID in Azure. |
    | Private key (Required) | Your private key in plaintext. You may refer to this online tool to generate the private key. |
    | Certificate thumbprint (Required) | The thumbprint for your certificate. You may refer to this online tool to calculate the thumbprint using the certificate acquired when generating the private key. |
    | Scope (Optional) | Refer to the "scope" field as defined by Azure. |

    You can refer to this [article](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-certificate-credentials#register-your-certificate-with-microsoft-identity-platform) on how to get the required information from Azure.
