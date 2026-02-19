---
title: "Access the Secure Data Share UI"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/use-zuora-secure-data-share-for-snowflake-to-access-zuora-data/access-the-secure-data-share-ui"
product: "zuora-platform"
scraped_at: "2026-02-19T03:34:12.747Z"
---

# Access the Secure Data Share UI

Learn how to access the Secure Data Share UI

Before getting started, ensure you have the following details and shared with Zuora:

-   Zuora Tenant ID: Provide the tenant ID of the Zuora tenant from which you want to share data. For more information, see [Managing Your Tenant Profile.](https://docs.zuora.com/en/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile)

-   Entity (Optional): If the [Multi-entity](https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/overview-of-multi-entity) feature is enabled in your Zuora tenant, specify the entity from which data should be shared.


When these details are provided, Zuora will enable access to the Secure Data Share UI for your tenant.

To complete the setup, you will need the following information from your Snowflake account where Zuora data will be shared:

Snowflake region: Run the following command in your Snowflake account:

SELECT CURRENT\_REGION();

Snowflake edition

-   Classic UI: Click your account name (top right) and check the edition in Account Information.

-   Snowsight UI: Click your account name (bottom left) and hover over the account information.


Snowflake account locator: This is the identifier in your Snowflake account URL:

<account\_locator>.snowflakecomputing.com

When you have the required details, complete the following procedure.

1.  Go to .
2.  Search for Zuora Secure Data Share for Snowflake.
3.  Open the connector and navigate to the Authentication Setup tab.

    Note:

    You need access to the [Integration Hub UI](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub) to complete the setup.

    -   If you do not have access, follow this [guide](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub) to link your Zuora and Connect accounts.

    -   If access is still missing, raise a support ticket and loop in your Zuora Account Executive.


    In most cases, the provisioning team enables the required permissions once the order form with Snowflake entitlement is received along with tenant ID details (mentioned in pre-requisite). If you see a permission denied error, work with your Zuora representative to enable access.
