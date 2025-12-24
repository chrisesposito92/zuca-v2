---
title: "Troubleshooting Databricks connection issues"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/troubleshooting-databricks-connection-issues"
product: "zuora-platform"
scraped_at: "2025-12-24T18:31:13.933Z"
---

# Troubleshooting Databricks connection issues

Troubleshoot Databricks connection issues

If you encounter issues with your Databricks Connector, follow these steps to locate error details and help our team diagnose the problem.

1.  Go to Query History in the Databricks workspace.
2.  Filter user to the Connector’s service principal.
3.  Filter statement to OTHER.
4.  Look for any failed queries with the pattern:

    PUT '${file}' INTO ${temp-volume}.

5.  When you find one, expand the details and share the error message with us.

    Providing these details will help us quickly identify the root cause and resolve the issue efficiently.
