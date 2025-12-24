---
title: "Enable data integration in current GAAP"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/current-and-future-gaap/enable-data-integration-in-current-gaap"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:23:31.307Z"
---

# Enable data integration in current GAAP

Configure Zuora Revenue for data integration between current and future GAAP.

Complete the following procedure to configure the previous version of Zuora Revenue (or RevPro) for data integration from the current GAAP to the future GAAP:

1.  In Zuora Revenue under the current GAAP (ASC 605), navigate to Setups > Application and click the IT Admin Lookups tab.
2.  In the Lookup Type field, select COMMON SETUP from the drop-down list. The common setup is displayed.
3.  Right-click the COMMON SETUP line and then click Edit Lookup Definitions . The Edit Lookup Definitions tab is displayed.
4.  Locate the ALLOW\_REVPRO3\_INTEGRATION line and set its lookup value to Y .
5.  Click the save icon to save the configuration.

The integration between the current GAAP and the future GAAP is enabled.
