---
title: "ONESOURCE Indirect Tax Determination App V2"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/onesource-indirect-tax-determination-app-v2"
product: "zuora-billing"
scraped_at: "2025-12-24T05:06:20.803Z"
---

# ONESOURCE Indirect Tax Determination App V2

Zuora's tax app now supports the ONESOURCE Indirect Tax Determination V2 App, offering improved security, built-in void functionality, and integration with the latest REST API.

Zuora's tax app now supports the OneSource Indirect Tax Determination V2 App, which is built on a new tax platform and integrates with the latest OneSource Indirect Tax Determination product. The existing ONESOURCE Indirect Tax Determination app is built on OneSource legacy SOAP (Simple Object Access Protocol) API. Migrating from the existing OneSource SOAP configuration to REST has several key improvements and benefits, such as improved security, built-in void functionality, API version support, customization flexibility, and so on.

The V2 application integrates with [ONESOURCE Indirect Tax Determination](https://tax.thomsonreuters.com/en/onesource#indirect-tax)using the latest REST API and operates independently as a separate tax solution. Introducing the V2 App will have no impact on users currently utilizing the ONESOURCE Indirect Tax Determination App.

## Prerequisites

-   To use the OneSource Indirect Tax Determination V2 app, you must purchase Configurable tax apps. Contact your Zuora account team for assistance.


-   To enable the Connect Tax Engines feature in your Zuora production environment, submit a request through [Zuora Global Support](https://support.zuora.com/) . You can activate the Connect Tax Engine feature in your Zuora sandbox tenant with the self-serve interface. For more information, see Enable billing features by yourself.
-   Ensure that your billing user role includes the Admin permission.


## Difference between legacy OneSource App and OneSource Indirect Tax Determination V2 app

The existing ONESOURCE Indirect Tax Determination app is built on OneSource legacy SOAP API. The new App V2 is built on a new tax platform and integrates with the latest REST API. Following are the differences between the existing OneSource App and the new App V2:

-   Authentication - The legacy ONESOURCE App supports various authentication methods including Basic-Auth, BearedId, OAuth 2.0, whereas REST exclusively uses OAuth2 for enhanced security.

-   Void Functionality - ONESOURCE App V2 includes a straightforward built-in void/reverse feature. The legacy ONESOURCE App’s void function involves sending a negative total amount of the previous transaction, though this method is not recommended.

-   API Version - OneSource recommends using the REST API version moving forward, as updates to their legacy SOAP API are no longer supported.
