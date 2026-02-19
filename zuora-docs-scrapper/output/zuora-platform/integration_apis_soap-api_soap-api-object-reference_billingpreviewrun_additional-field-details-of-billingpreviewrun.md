---
title: "Additional field details of BillingPreviewRun"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/billingpreviewrun/additional-field-details-of-billingpreviewrun"
product: "zuora-platform"
scraped_at: "2026-02-19T03:27:56.391Z"
---

# Additional field details of BillingPreviewRun

Additional details of the fields of the BillingPreviewRun object.

## SucceededAccounts

The number of accounts for which preview invoice item data was successfully generated during the billing preview run.

Details of any accounts which fail during the billing preview operation are recorded in a separate file. This is included in the zip file along with the CSV.

## TargetDate

The target date for the billing preview run. The billing preview run generates preview invoice item data from the first day of the customer's next billing period to the TargetDate.

The next billing period is the period for which the customer has yet to be invoiced. The billing preview run will start the preview from the next billing period that customers expect for their next invoice.

This date can be in the past or the future, depending on the target date of the last bill run for this customer.
