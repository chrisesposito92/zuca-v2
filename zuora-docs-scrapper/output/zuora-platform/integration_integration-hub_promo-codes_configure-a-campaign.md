---
title: "Configure a campaign"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/promo-codes/configure-a-campaign"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:07.047Z"
---

# Configure a campaign

Learn how to configure a campaign in the Promo Codes app within Zuora, including creating parent and child campaigns and utilizing custom fields.

Ensure that the Promotion Codes app is available under Marketplace in the left navigation menu of Zuora.

Take the following steps to create a campaign in Promo Codes:

1.  Launch Promotion Codes from your Zuora tenant.
2.  In the Campaigns tab, select Actions > New Campaign to create a campaign. The New Campaign dialog is displayed.
3.  Enter the name for the new campaign in the Name field. This campaign will be the parent campaign, and can contain multiple child campaigns that use different types of promotion codes.
4.  Click Create to save the campaign. After the campaign is successfully created, the homepage of this campaign is displayed.
5.  (Optional) Create custom fields that will be stored at the campaign level. For more information, see [Configure custom fields](/zuora-platform/integration/integration-hub/promo-codes/configure-custom-fields) .

After the campaign is created, you can create child campaigns that hold different types of promotion codes.

Alternatively, if you want to create a campaign via API, you can use the "Create a Campaign" operation listed in Swagger API Docs . The URL and credentials required to make requests are provided in the API Docs tab.
