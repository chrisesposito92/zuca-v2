---
title: "Allow access"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-generic-clickhouse/set-up-zuora-connector-for-generic-clickhouse/allow-access"
product: "zuora-platform"
scraped_at: "2025-12-24T18:31:39.744Z"
---

# Allow access

Allow access

1.  Make a note of Zuora static IP. Follow the steps mentioned below to set up Zuora Connector for Generic ClickHouse.

    Zuora Connectors – Outbound IP Whitelisting Requirement

    Zuora connectors require the destination to be accessible via the public internet. Please ensure that the following Zuora outbound IPs are whitelisted at your data destination:

    -   Production tenants

        -   US Cloud1 Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

        -   US Cloud2 Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

        -   EU Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

    -   API Sandbox & Central Sandbox Tenants

        -   US Cloud1 Environment: [Zuora Sandbox IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

        -   US Cloud2 Environment: [Zuora Sandbox IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

        -   EU Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)


    If you are not sure whether to use US Cloud1 or Cloud2, see[Zuora Data Centers](/basics/environments/zuora-data-centers).

2.  Create a rule in a security group or firewall settings to whitelist:

    -   Incoming connections to your host and port (usually 9440) from the static IP.

    -   Outgoing connections from ports 1024 to 65535 to the static IP.
