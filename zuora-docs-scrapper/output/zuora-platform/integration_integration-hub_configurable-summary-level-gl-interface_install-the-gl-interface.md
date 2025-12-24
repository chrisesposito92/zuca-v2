---
title: "Install the GL Interface"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configurable-summary-level-gl-interface/install-the-gl-interface"
product: "zuora-platform"
scraped_at: "2025-12-24T05:46:13.679Z"
---

# Install the GL Interface

Learn how to install the GL interface

You need to install the app before it is ready for use.

## Prerequisites

-   You have purchased the Configurable Summary Level GL Interface app.

-   If you want to use custom fields in the file mapping settings, you must create them before creating the app so the system can recognize them. Fields created after the app is installed will not be visible. For more information, see [Configure the GL Interface](/zuora-platform/integration/integration-hub/configurable-summary-level-gl-interface/configure-the-gl-interface).


## Procedure

Configurations that are specific to the GL include:

-   Run Mode - Select ApiBased for direct integration with NetSuite. Select FileBased to have the summary level files exported for uploading to an SFTP server or manual downloads.

-   Build Name - Select Production.

-   SFTP - Specify the SFTP server details. Leave it blank if you want to download the files to your local storage for further processing. This option is only available when the FileBased run mode is selected.

-   Source - Select an existing Zuora tenant login or create a new login.
    Note: Important: Basic authentication credentials without two-factor authentication are supported for SFTP only. NetSuite requires OAuth credentials.

-   Target - Select an existing target login or create a new login.
    Note: Important: Basic authentication credentials without two-factor authentication are supported for SFTP only. NetSuite requires OAuth credentials.


## Next activity

After the app is installed on your tenant, you need to configure the settings for summary runs. See [Configure Settings for the GL Interface](/zuora-platform/integration/integration-hub/configurable-summary-level-gl-interface/configure-the-gl-interface) for details.
