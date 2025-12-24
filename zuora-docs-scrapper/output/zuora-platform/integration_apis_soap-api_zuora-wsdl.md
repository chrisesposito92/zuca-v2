---
title: "Zuora WSDL"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/zuora-wsdl"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:32.386Z"
---

# Zuora WSDL

The WSDL, or Web Services Definition Language document, provides a definition of our SOAP API web service to your application.

## WSDL versions

The Zuora SOAP API and its corresponding WSDL are assigned a new version number when objects, calls, fields, or behaviors are changed. This happens with many of our releases, resulting in a major version number change (e.g., "46" becomes "47"). It also sometimes happens with a maintenance release between monthly releases, resulting in a minor version number change (e.g., "47" becomes "47.1").

In our SOAP API documentation and other places, if a specific field or feature requires a specific minimum WSDL version number, we note that in the description. To use a new feature defined in a new WSDL, you'll need to download and use that WSDL or a later version. We strive for backward compatibility, so the new WSDL should not break your existing applications. However, if you don't need the new features, you can usually continue using an older version of the WSDL.

See [Check WSDL versions](/zuora-platform/integration/apis/soap-api/zuora-wsdl/check-wsdl-versions) for more information.

## WSDLs are customized

There's another important reason that the WSDL you download from production may not match the ones you download from the sandbox. When you download a Zuora WSDL, you receive a file that's tailored to your tenant and user permissions. Many customers have different features enabled in the API Sandbox environment than they do in Production. And some users do not have permissions to see objects that other users can see.

If your WSDL is missing an object that you expected to see, this may be the explanation.

## Many environments, different versions

So when downloading a WSDL, bear in mind that:

-   A WSDL from the API Sandbox environment is often one step ahead of the Production WSDL

-   Your sandbox tenant may have different features and permissions than your production tenant

-   Users with different permissions may get different WSDLs


The Zuora monthly update is typically released into the API Sandbox environment a week before it is released into the Production environment. The production and sandbox WSDL version are often slightly different.

Note:

Get in touch with our sales team through [zuora.com](https://www.zuora.com) for more information about accessing the Zuora Sandbox Environment.

## Access our sample code

Our [Sample source code](/zuora-platform/integration/apis/soap-api/coding-overview/soap-api-sample-source-code) page provides links and tips for using the SOAP API code samples posted on our GitHub site.
