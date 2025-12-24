---
title: "Assign single-use codes"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/promo-codes/assign-single-use-codes"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:02.044Z"
---

# Assign single-use codes

Learn how to assign single-use promotion codes by configuring custom fields in a CSV file and uploading it to the system.

The custom fields required for recognition can either be manually entered after the initial creation or entered during the initial setup of the promo code in custom fields. Take the following steps to assign single-use codes:

1.  Open the exported CSV file. For more information, see [Export promotion codes](/zuora-platform/integration/integration-hub/promo-codes/manage-promotion-codes/export-multi-use-codes).
2.  Add or modify the custom fields in the following columns in the exported CSV file, and then save the file.

    -   CustomFields.fieldKey - Determines how the customer will be identified by the system when using the promotion code, for example, email, phone number, name, and so on.

    -   CustomFields.fieldValue - The customer-specific information for the selected field.

    -   CustomFields.validateRequirement \- Each custom field must have a value for this column.

        -   True - A customer must enter the specified key-value pair in order to validate and apply the promo code discount.

        -   False - The specified key-value pair does not need to be validated for a promo code discount to be applied.


3.  Upload the configured CSV file.
    1.  Enter the homepage of the campaign.
    2.  Navigate to Background Workers > Actions > Import - Update Single Use Codes .
    3.  In the New Single Use Codes - Update Job dialog, click Upload File .
    4.  Select the configured CSV file.
    5.  Click Create . The file is then uploaded, and the single-use codes will be assigned based on the uploaded file.
