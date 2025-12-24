---
title: "Test Zuora Revenue network connectivity"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/test-zuora-revenue-network-connectivity"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:35:46.958Z"
---

# Test Zuora Revenue network connectivity

After you complete network configuration for Zuora Revenue, it is recommended to test your network connection to the Zuora Revenue application server, integration server, and the secure file transfer (SFTP) server.

## Procedure

.

Complete the following steps to test the server connection.

1.  Use a Windows or UNIX operating system to telnet to TCP port 443 for the application server.For example, if your application server URL is [https://mylink.revprooncloud.com](https://mylink.revprooncloud.com/), enter telnet mylink.revprooncloud.com 443 in the command console.
2.  Telnet to TCP port 443 for the integration server.For example, type the following script in the command console:
    -   Production: telnet integration.revprooncloud.com 443
    -   Sandbox: telnet integration-sandbox.revprooncloud.com 443
3.  Telnet to TCP port 22 for the SFTP server.For example, type the following script in the command console:
    -   Production: telnet integration-sftp.revprooncloud.com 22
    -   Sandbox: telnet integration-sandbox-sftp.revprooncloud.com 22.

Note:

Note that SFTP whitelisting is limited to 5 IP addresses or address ranges. If you require additional IPs for whitelisting, contact [Zuora Global Support](https://www.zuora.com/support-center/) for internal approval.

## Maintenance Schedule

Zuora Revenue performs scheduled maintenance with minimal impact once every quarter. The maintenance notification is posted in Zuora Community 15 days in advance. It is recommended that you subscribe to the [Zuora Revenue Notifications](https://community.zuora.com/t5/RevPro-Notifications/bg-p/RevPro-Notifications) to be well informed of the upcoming maintenance.
