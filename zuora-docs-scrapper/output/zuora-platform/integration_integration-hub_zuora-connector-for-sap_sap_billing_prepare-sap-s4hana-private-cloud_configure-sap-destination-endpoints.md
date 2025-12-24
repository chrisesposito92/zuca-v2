---
title: "Configure SAP destination endpoints"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_billing/prepare-sap-s4hana-private-cloud/configure-sap-destination-endpoints"
product: "zuora-platform"
scraped_at: "2025-12-24T08:36:47.154Z"
---

# Configure SAP destination endpoints

Learn how to configure SAP destination endpoints for SAP-FI capabilities by following a series of steps, including entering commands, selecting configurations, and setting authentication methods.

1.  Enter `/NSOAMANAGER` in the Command field.
2.  Select Web Service Configuration from the Service Administration tab.
3.  Enter "/ZUORA004/SD\_JE\_POST" and click Search .
4.  Select "/ZUORA004/SD\_JE\_POST" as the Internal Service Definition .
5.  Click Create Service .
6.  Enter a Service Name , Description , and Binding Name, and click Next .
7.  Navigate to Authentication Settings > Authentication Method > Transport Channel Authentication and check UserID/Password .
8.  Click Next .
9.  Click Finish .
10.  Click the Open Service WSDL Generation action icon.
11.  Copy the WSDL URL for Binding and paste it into a browser to access the WSDL.
12.  Note the URL of the post endpoint.
