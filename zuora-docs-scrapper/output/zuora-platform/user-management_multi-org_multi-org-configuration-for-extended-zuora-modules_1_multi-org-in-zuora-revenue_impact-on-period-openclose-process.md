---
title: "Impact on period open/close process"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-for-extended-zuora-modules_1/multi-org-in-zuora-revenue/impact-on-period-openclose-process"
product: "zuora-platform"
scraped_at: "2026-01-15T22:00:26.903Z"
---

# Impact on period open/close process

Setting the MAINTAIN\_OPEN\_PERIOD profile to Org requires selecting appropriate organizations for period open/close templates, impacting transaction data and report generation.

After the MAINTAIN\_OPEN\_PERIOD profile is set to Org , you must select the appropriate organizations for the period open/period close template to be applied. The Assign Orgs tab as shown in the following graphic is displayed for this purpose when you are creating or editing a period open/period close template ( Policies > Period Open/Close Templates ).

![period-close-template.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/465d81cf-b357-4667-940a-5a7b18d1694b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ2NWQ4MWNmLWIzNTctNDY2Ny05NDBhLTVhN2IxOGQxNjk0YiIsImV4cCI6MTc2ODYwMDgyMSwianRpIjoiZWI5ZjUwNDk0NjZkNDJjNDk3YjE3NjNjMTAwNGM2NTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.GMSckOHsjTSIXP8roIMpt1_YqHRmBre4Ov6qMph7nvI)

When a user wants to close or open an accounting period ( Accounting > Period Open/Close > Status by Book, Org ), only the organizations to which the current user has access are listed to be opened or closed one by one.

In the following graphic, the current user role can access only three organizations in the system. So the user can open or close the period for the three organizations one by one.

![open-close-period.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b0a3f7ba-c6e9-4264-80e8-6e54d0d01b63?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImIwYTNmN2JhLWM2ZTktNDI2NC04MGU4LTZlNTRkMGQwMWI2MyIsImV4cCI6MTc2ODYwMDgyMSwianRpIjoiYjRmZDM3ODcyMDU2NDZiNjgyNzAzYzNiNTM5MWE0OTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.DC5OOgv2-mY5VEWOQEobSASGiFQnR8zVBsY10gLakg8)

## Impact on transaction data and reports

After multiple organizations are enabled in Zuora Revenue, be aware of the following impacts:

-   When transaction data is uploaded to Zuora Revenue, the SEC\_ATR\_VAL field is mandatory for all transaction types. Use this field to specify the appropriate organization number that you defined on the Setups/Application/Organization page.
-   When you run reports ( Reports > Run Reports ), the Org Name parameter is displayed as an optional filter to run reports for particular organizations.
-   When you start or schedule a program ( Reports > Schedule Jobs ), you must specify the organization for which you want to run a program.
