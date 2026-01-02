---
title: "Exporting users"
url: "https://developer.zuora.com/zephr-docs/zephr-api/zephr-api-tutorials/exporting-users/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:57.028Z"
---

#

Exporting users

The following information references how to export Zephrs stored in Zephr from your Zephr Admin Console. If you are using an older version of Zephr, such as Zephr Classic, please review [this guide](https://knowledgecenter.zuora.com/Zephr/A_Zephr_user_guide/D_Identity/Users/Export_User_Data) instead.

Zephr provides you with the ability to export a list of Users from the Zephr Identity Store as a JSON export.

##

Export Users

First, log in to your Zephr Admin Console.

Once logged in, input the following URL on to your browser:

`https://console.zephr.com/v3/user-export`

This will download a JSON object displaying all of your users. You can visualize this information using a specific JSON editor or a notepad on your computer.

The information you get will looks similar to the following:

`[{"user":{"user_id":"0435ed2d-1221-4de2-88c7-304dbaac8d42","identifiers":{"email_address":"alex.pereda+trial67@zephr.com"},"email_verified":false,"tracking_id":"1ee810c6-a212-42da-9ec9-4700d1a244b1","registered":"2021-02-24T15:43:28Z","registration_tenant":"alexpereda|demosite"},"seq-no":17,"`

###

Export Progress Indicator

When you start a user export, a progress indicator appears in the bottom-right corner of the screen. It updates in real time to show how the export is progressing.

####

Progress States

The progress indicator displays the following states during the export process:

1.  **Preparing user export...** - The system is setting up the export.
2.  **Downloading: X.XMB / Y.YMB** - The file is downloading, showing how much data has been transferred and the overall progress.
3.  **Downloading state events...** - Second phase - Shown only if your organization has state events export enabled.
4.  **Export complete!** or **All exports complete!** - Confirms that the export has finished successfully.

The progress bar shows the percentage complete and automatically dismisses after the export finishes successfully.

####

Important Notes

-   **Large exports may take several minutes to complete.** The time required depends on the number of users being exported and your network speed.
-   **Do not close the browser tab while the export is in progress.** Closing the tab will cancel the download.
-   **Do not click the Export button multiple times.** The button is disabled while an export is in progress to prevent duplicate exports.

####

Error Messages

If the export fails, you will see one of the following error messages:

-   **"Export failed. Please try again."** - The user data export failed. Check your network connection and try again.
-   **"State events export failed"** - The state events portion of the export failed (the user data export may have succeeded). Check the Downloads folder for the user data CSV file.

##

Export Query Parameters

The red element of the URL above is called the Admin API query parameter.

You can also add a combination of query parameters that will allow you to include additional information on your export, for example:

-   `/v3/user-export?grants=true` : Provides information about entitlement and their start-end dates
-   `/v3/user-export?since=2021-02-24T00:00:00Z` : All users who have registered after the specified date
-   `/v3/user-export?attributes=true` : Export users including their attributes

You can also run a combination of these parameters on to a single query string like:

`/v3/user-export?since=2020-09-04T00:00:00Z&attributes=true`

A full list of the available query commands can be found in our Admin API documentation.
