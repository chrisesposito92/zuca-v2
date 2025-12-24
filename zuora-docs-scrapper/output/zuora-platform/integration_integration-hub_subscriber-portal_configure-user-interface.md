---
title: "Configure user interface"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/subscriber-portal/configure-user-interface"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:30.067Z"
---

# Configure user interface

Learn how to customize the user interface of your portal using branding images and styles.

Customize the look and feel of the portal by using your company’s branding images and styles to help market your portal.

1.  Enter the installed Subscriber Portal instance and click the Look and Feel tab.
2.  In the Portal Branding Images section, upload your company logos and other brand marketing images to help identify your portal. Logos and marketing images are customer-facing and will be displayed in the portal as indicated by the listed name. The recommended size for each image is displayed, and modifications to images may be required.
3.  In the Override Default CSS section, edit or overwrite the default CSS to customize the portal with your branding. The aspects of the portal that can be customized include the size and shape of buttons, font style, color schemes of the headers and footers, and so on.

    -   To edit CSS, click Default CSS to review the default CSS and use it as a template for any desired modifications.

    -   To overwrite CSS, directly enter the desired CSS in the input box.


4.  In the Dashboard Configuration section, configure the cards of the end user’s dashboard. Cards are different sections of information in the dashboard, for example, the account balance, invoice information, and the default payment method of an account. Each portal has 8 pre-configured cards that can be edited and you can create additional cards. Pre-configured cards cannot be deleted. The Card Title of the default cards are auto-populated and cannot be changed. ![Dashboard Configurations](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4dff8934-280d-47df-a5be-03ac99945c19?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRkZmY4OTM0LTI4MGQtNDdkZi1hNWJlLTAzYWM5OTk0NWMxOSIsImV4cCI6MTc2NjY0MTcwOCwianRpIjoiYTZiMzU5OWIxNWZkNDFjMWE1OGFmODQ4ZGVmMTRlNWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.xZfqqCTSfQu9NAcGrpvo7jnXaGAZoNRaY_vtIHtFspM)

    -   To configure the default dashboard cards:

        1.  Enable the cards to be displayed in the portal.

        2.  Click the ![Image: menu_icon.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/010f7a80-a704-463e-b963-6850e5443e76?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAxMGY3YTgwLWE3MDQtNDYzZS1iOTYzLTY4NTBlNTQ0M2U3NiIsImV4cCI6MTc2NjY0MTcwOCwianRpIjoiODNjZjc3NzExYmM3NDM0MGExOGNiNWZjNzMwNWQ4NDUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.1Hf7Rp1ZnU3_jbxAGmtwxLoeQD-Efyh_cahpbv7lXN8) icon to drag and drop the card tiles in the desired order to rearrange the display order of the cards. The first card will be displayed on the top left section of the page with the subsequent cards filling into the right until a new row is needed.

        3.  Select the value in the Bootstrap Columns dropdown list for each card. The size of a card is determined by the selected number. The Bootstrap framework uses a grid system where 12 columns are evenly split across the UI and appropriately scale to the browser size. For more information, see [Example of configuring bootstrap columns](/zuora-platform/integration/integration-hub/subscriber-portal/configure-user-interface/example-of-configuring-bootstrap-columns).

    -   To create a new card, click \+ Add a custom card . A new card is created at the bottom of the Dashboard Configuration section.

        1.  Enter the Card Title, select the Enable checkbox, and select the number in Bootstrap Columns for the new card.

        2.  Click Configure . The Configure Custom Card dialog opens.

        3.  Enter the Javascript code and Markup HTML code respectively. For more information, see [Example of configuring custom panels](/zuora-platform/integration/integration-hub/subscriber-portal/configure-user-interface/example-of-configuring-custom-panels).

        4.  Click Done .

    -   To configure additional dashboard details:

        1.  Click Edit Carousel Links to upload marketing images that can be linked to the desired pages relevant to your company. Up to 6 images can be uploaded and all will be cycled through on the dashboard in the order that is listed. Note that if a card is enabled, the carousel will cycle through all of the images regardless of if they have been changed from the default. If you have only two images, it is recommended that you fill up all image placeholders by alternating two images to ensure no default images are displayed. If no hyperlink is associated with the image, the image will be displayed but it will not redirect to other pages when end users click the marketing images displayed in the portal dashboard. Up to 6 images can be uploaded.

        2.  Click Edit Quicklinks to enter important links for your business. You can add up to 4 links.


5.  In the Login and Site Entry page HTML section, enter the text to be displayed on the portal login page:

    -   Subtext - The descriptive text with the HTML formatting to be displayed under the login page logo.

    -   Entry Footer Text - The descriptive text with the HTML formatting to be displayed under the end user login information.

    -   Image Overlay Text - The descriptive text with the HTML formatting to be superimposed on the login page marketing image. ![Different Texts on Portal Page](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0f6ac033-6a1f-4c3d-b649-a87258c982e0?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjBmNmFjMDMzLTZhMWYtNGMzZC1iNjQ5LWE4NzI1OGM5ODJlMCIsImV4cCI6MTc2NjY0MTcwOCwianRpIjoiZjQzMzkzYjQyZDgyNGZkYThlMWJmYmI2YzNjNDlkMDAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.54cGd30nye66SPeelohWKntOXWQsSFjRIC0I0_VDueg)


6.  Enter the plain text or HTML for the footer in the Configure Your Footer HTML text box. The footer will be displayed at the bottom of all portal pages. Only the HTML and Javascript are supported.
7.  Complete the email templates for the new user invitation, new account confirmation, and password reset respectively.
    1.  Select the desired email template to configure from the dropdown list. ![email_temp_selection](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/20076a13-1f91-483e-92e6-93fcd80bada3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjIwMDc2YTEzLTFmOTEtNDgzZS05MmU2LTkzZmNkODBiYWRhMyIsImV4cCI6MTc2NjY0MTcwOCwianRpIjoiMDdiYTAyMDhmOWQyNDZhNWJlZDhhMmE4OWYwMzkxZGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.pUfVy54SMw1Hq0w5mPol8tYcAgqjBrgtBpN2jEhkn0I)
    2.  Configure the body, footer, and header of your email template respectively. You can enter either plain text or HTML in these text boxes. For more information, see [Example of configuring email templates](/zuora-platform/integration/integration-hub/subscriber-portal/configure-user-interface/example-of-configuring-email-templates).
    3.  Enter the subject line of your email in the Subject field.
8.  Submit a ticket at [Zuora Global Support](https://support.zuora.com/) to change the "from" address to the address of your organization. If this address is not changed, all future emails to end subscribers will be sent out from support@connect.com . This would create confusion for end subscribers and support issues for your organization.
9.  Click Save Settings to save the configurations.
