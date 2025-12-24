---
title: "Bundle update"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/bundle-explosion/bundle-update"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:33:03.410Z"
---

# Bundle update

Learn how to update an existing bundle definition by uploading a new bundle based on the same template, ensuring seamless transition for new transactions.

To update an existing bundle definition, upload the bundle again based on the same template. After that, the end date of the previous bundle will be updated as one day less than the new bundle's configuration start date, following which the new bundle's definition applies to the new transactions. Any old transactions that were split by the previous bundle's configuration will follow the same for all subsequent transactions.

Complete the following steps to update a bundle definition:

1.  Navigate to File Upload > Bundle .
2.  Hover your mouse over the template line based on which you want to update the bundle definition. The mouse-over icons show up for the eligible actions. To upload a new bundle definition, the bundle template must be in the freeze mode.
3.  If the bundle template is in unfreeze mode, click the Freeze icon (padlock icon) . Otherwise, click the Upload icon to upload the new bundle definition file.
