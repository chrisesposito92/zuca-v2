---
title: "Templates"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/transitioning-from-developer-tools-to-data-loader/templates"
product: "zuora-platform"
scraped_at: "2026-01-15T22:01:01.018Z"
---

# Templates

Learn about the unified template structure in Data Loader and its dynamic generation from the Zuora data model, ensuring up-to-date fields and features.

## Templates in Developer Tools vs. Data Loader

Data Loader uses a new unified template structure, and Developer Tools templates are not compatible. You must download templates from the Data Loader user interface. The templates are dynamically generated from the configurations in the Zuora Tenant, ensuring they always reflect the latest standard fields, custom fields, and tenant-specific features. For example, if Prepaid with Drawdown is enabled, related fields like drawdown rate and drawdown UOM automatically appear in the template.
