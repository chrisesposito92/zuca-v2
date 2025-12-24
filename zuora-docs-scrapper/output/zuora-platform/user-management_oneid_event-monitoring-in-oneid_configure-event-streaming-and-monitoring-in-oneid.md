---
title: "Configure event streaming and monitoring in OneID"
url: "https://docs.zuora.com/en/zuora-platform/user-management/oneid/event-monitoring-in-oneid/configure-event-streaming-and-monitoring-in-oneid"
product: "zuora-platform"
scraped_at: "2025-12-24T05:16:59.249Z"
---

# Configure event streaming and monitoring in OneID

Learn how to configure event streaming and monitoring in OneID by setting up Splunk HEC endpoints and tokens.

-   Ensure your Splunk HEC endpoint is enabled to receive events.

-   You must configure Token Value in Splunk. For more detailed information, see [Splunk Documentation](https://help.splunk.com/en/splunk-enterprise/get-started/get-data-in/9.3/get-data-with-http-event-collector/set-up-and-use-http-event-collector-in-splunk-web).


You configure the integration in the Zuora Protect Event Monitoring settings.

1.  Navigate to Settings > Event Streaming and Monitoring
2.  In the Splunk Configuration page, enter the following details:

    Zuora stores the token securely.

    1.  Enter the Splunk HEC endpoint URL, which is your Splunk URL.
    2.  Enter the HEC token, which can be retrieved from your Splunk environment.
    3.  Enter a Token name for identification
3.  Click Save Settings .
