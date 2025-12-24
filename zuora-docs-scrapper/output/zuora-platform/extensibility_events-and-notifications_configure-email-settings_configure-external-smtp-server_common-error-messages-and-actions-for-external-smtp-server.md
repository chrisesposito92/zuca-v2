---
title: "Common error messages and actions for external SMTP server"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-external-smtp-server/common-error-messages-and-actions-for-external-smtp-server"
product: "zuora-platform"
scraped_at: "2025-12-24T05:27:47.165Z"
---

# Common error messages and actions for external SMTP server

Use this reference to troubleshoot errors when configuring an external SMTP server.

The following table lists the common error messages and recommended actions for configuring external SMTP server.

| Error Message | Recommended Action |
| --- | --- |
| Unknown SMTP host | Check that the SMTP Server Name is correct. |
| Could not connect to SMTP host | Check that the SMTP Port is correct. If the port is correct, the SMTP server might be experiencing a temporary issue. Wait a few minutes and try again. |
| Connect timed out |  |
| Authentication failed: Bad username / password | Check whether your username and password are correct. |
| Authentication failed | Check whether your username and password, or OAuth 2.0 provider configuration are correct. |
| Authentication required | Check if you have configured the Authentication field. |
| Read timed out | Check that you have entered the correct values for the following fields:SMTP SocketFactory PortSMTP SocketFactory ClassSMTP SocketFactory Fallback |
| Could not convert socket to TLS |  |
