---
title: "Export single-use codes"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/promo-codes/manage-promotion-codes/export-single-use-codes"
product: "zuora-platform"
scraped_at: "2025-12-24T05:47:46.557Z"
---

# Export single-use codes

Learn how to export single-use promotion codes from your Zuora tenant and download them as a CSV file.

Take the following steps to export single-use promotion codes:

1.  Launch Promotion Codes from your Zuora tenant.
2.  Click Background Jobs . The promotion code background jobs for all child campaigns are displayed in this tab.
3.  Locate the campaign job that you want to export with the `- Export` suffix, and click ![manage_icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d9acf018-325e-470a-9fa2-5da8841c479b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ5YWNmMDE4LTMyNWUtNDcwYS05ZmEyLTVkYTg4NDFjNDc5YiIsImV4cCI6MTc2NjY0MTY2NSwianRpIjoiMmY0NmUzZDkzNzY4NDQ3NmI1MzJjYzE0NDE1N2MzZjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ihzUwTDjJn4JeEn-3SI4ossv2teaor001DbN8KBW2aw) on the left.
4.  Select Show .
5.  In the job details dialog, click the link to download the attached CSV file that contains all generated promotion codes.

Specific to single-use promotion codes, you can also use the "[Creates a CSV of the single use campaign](https://promotion-codes.apps.zuora.com/api-docs/index.html)" API operations in the API Docs to export CSV files as an alternative.

Subsequently, you can distribute the generated promotion codes to your customers who are eligible for the campaigns. See [Assign single-use codes](/zuora-platform/integration/integration-hub/promo-codes/assign-single-use-codes) as an example. The percentage and the number of consumed promotion codes will be reflected in the charts in the Dashboard tab of both the campaign and the App instance homepage.
