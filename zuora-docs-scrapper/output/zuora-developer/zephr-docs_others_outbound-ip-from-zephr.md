---
title: "Outbound IP addresses from Zephr"
url: "https://developer.zuora.com/zephr-docs/others/outbound-ip-from-zephr/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:40.387Z"
---

#

Outbound IP addresses from Zephr

Some organizations limit inbound communication from the Internet for security purposes. This may be achieved using application configuration or via network-level configuration.

This page provides the list of outbound IP addresses used by Zephr: the Zephr Outbound IPs. Zephr will only initiate communications with other systems from IP addresses included in this list.

##

Web Content

If you are using Zephr to proxy your web content, you may wish to configure your CMS or network-level security (eg. firewalls) to restrict access to whitelisted IPs- you will need to make sure that list includes all the Zephr Outbound IPs. Many hosted CMS vendors also implement IP-based throttling to prevent denial of service attacks. If you are using a hosted CMS vendor, you will need to make sure they explicitly whitelist the Zephr Outbound IPs at both access control and network security level.

##

Integrations

If you have configured Zephr to send webhooks to Webhook Endpoints, you will need to add the Zephr Outbound IPs to any whitelists protecting those endpoints.

If you are using the Content API functionality to retrieve information about your content from your own Content API, you will need to add the Zephr Outbound IPs to any whitelists protecting your Content API.

If you use any Zephr extensions that communicate with 3rd third-party vendors that whitelist inbound connections. Most vendors protect their endpoints via authentication tokens. However, in some situations, those vendors will also need to add the Zephr Outbound IPs to their whitelists.

##

Zephr Outbound IPs

**Note:** Changes to this list are rare. We aim to notify all customers via email at least 3 months in advance of any changes to this list, so there is no need to monitor this page for updates.

```text
3.1.132.59
3.97.146.81
3.98.231.92
3.99.91.51
13.114.176.212
13.126.87.88
13.127.104.253
13.127.168.109
13.210.28.94
13.211.245.227
13.244.146.39
13.244.164.92
13.244.225.146
15.161.6.154
15.161.251.90
15.184.160.86
15.185.152.20
18.140.17.95
18.195.189.125
18.196.76.49
18.197.202.190
18.229.193.152
18.233.201.180
34.213.214.107
34.233.19.142
34.237.254.66
34.246.8.53
34.246.8.132
34.246.8.214
35.152.35.240
35.174.91.120
35.176.69.86
35.177.147.41
35.178.2.113
35.178.155.177
44.236.77.11
50.112.55.158
52.62.89.181
52.199.108.134
54.72.67.238
54.95.183.204
54.151.197.39
54.179.23.40
54.255.33.251
157.175.19.93
177.71.240.87
```

##

Page History

| Updated Time | Details |
| --- | --- |
| 20/10/2021 | Added 5 additional regions |
| 16/04/2023 | Added two IP addresses - 18.140.17.95 and 54.151.197.39 |
