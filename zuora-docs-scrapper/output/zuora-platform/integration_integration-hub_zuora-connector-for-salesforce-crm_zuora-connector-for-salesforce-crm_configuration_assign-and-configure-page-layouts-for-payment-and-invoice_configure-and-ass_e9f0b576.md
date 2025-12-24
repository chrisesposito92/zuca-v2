---
title: "Configure and assign the Refund page layout"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/configuration/assign-and-configure-page-layouts-for-payment-and-invoice/configure-and-assign-the-refund-page-layout"
product: "zuora-platform"
scraped_at: "2025-12-24T08:31:08.277Z"
---

# Configure and assign the Refund page layout

Learn how to customize and assign the Refund page layout to user profiles, and enable the necessary features for the payment sync process.

As the admin user, you can customize the Refund page layout and assign the page layout to user profiles to access the page.

Note:

The new page layouts are used by the payment and invoice payment sync process. This sync process is a controlled release feature.

Submit a request at [Zuora Global Support](http://support.zuora.com/) to enable this feature or service.

To assign the Refund page layout to user profiles:

1.  Navigate to .
2.  Select Refund . Scroll to the Page Layouts section and click Page Layout Assignment .
3.  Click Edit Assignment , and select the user profiles that you want to assign the page layouts to.
4.  Select the latest version of the Refund Z-Force Layout in the Page Layout to Use list.
5.  Click Save .
6.  To customize an existing Refund page layout to add the Payments related list:
    1.  Navigate to .
    2.  Click the Edit link next to the latest version of the Refund Z-Force Layout.
    3.  Click the Related Lists link, then drag the Payments related list down to the bottom of the page and drop it into position.
    4.  Click the "wrench" icon on the Related List configuration panel.
    5.  Move the following fields to the Select Fields column:

        -   Refund Name

        -   Amount

        -   Refund Invoice Payment Number


    6.  Click the `+` (plus) icon in the Buttons section header. Uncheck the checkbox next to the New button, then click OK.
    7.  Click Save.
