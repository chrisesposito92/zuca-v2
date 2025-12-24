---
title: "Run RevPro3.0 Billing Fxrate Sync Process"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/sync-currency-exchange-rate-for-billing-documents/run-revpro3.0-billing-fxrate-sync-process"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:36:17.625Z"
---

# Run RevPro3.0 Billing Fxrate Sync Process

Scheduling the RevPro3.0 Billing FX Rate Sync Process

The RevPro3.0 Billing Fxrate Sync Process program can be run as ad-hoc jobs or be scheduled to run on a regular basis. To run or schedule this program, navigate to Reports > Schedule Jobs . For step-by-step instructions, see [Schedule jobs](/zuora-revenue/month-end-process/reports/schedule-jobs). You might need to specify the following parameters to run or schedule this program.

| Program parameter | Description |
| --- | --- |
| from_date | Specifies the start date of the time range when the exchange rate will be synced to Zuora Revenue. This parameter is required only for ad-hoc jobs. For scheduled jobs, the program will automatically sync the exchange rate for the previous day. |
| to_date | Specifies the end date of the time range when the exchange rate will be synced to Zuora Revenue. This parameter is required only for ad-hoc jobs. For scheduled jobs, the program will automatically sync the exchange rate for the previous day. |
| currencies | Determines the currencies for which the exchange rate will be synced. This parameter is not mandatory. The program can automatically identify the active currencies in Zuora Billing to sync exchange rates. |
| entity_id | Determines the Zuora Billing entity for which the exchange rate will be synced. This parameter is not required if there is only one entity in Zuora Billing. If there are multiple entities in Zuora Billing, whether this parameter is required depends on how the exchange rate is extracted and uploaded:If the exchange rate is extracted and uploaded in the global entity, this parameter is not required.If the exchange rate is extracted and uploaded for individual entities, this parameter is mandatory. The program must be scheduled for each entity because only one entity ID can be specified in each schedule. |
