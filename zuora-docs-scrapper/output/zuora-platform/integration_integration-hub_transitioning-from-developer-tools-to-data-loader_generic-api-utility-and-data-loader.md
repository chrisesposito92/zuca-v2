---
title: "Generic API Utility and Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/transitioning-from-developer-tools-to-data-loader/generic-api-utility-and-data-loader"
product: "zuora-platform"
scraped_at: "2025-12-24T05:46:44.677Z"
---

# Generic API Utility and Data Loader

This reference provides guidance on using the Generic API Utility and Data Loader, including alternatives and workarounds for generating CSV/JSON files compatible with Data Loader using REST APIs, Data Query, and Reporting.

## Generic API Utility and Data Loader

| Generic API Utility | Data Loader | Alternative/Workarounds |
| --- | --- | --- |
| Generic API Utility | No direct equivalent | This functionality is now covered by the broader capabilities of REST APIs, which return data in JSON format.For most use cases, use Data Query, Reporting, or REST APIs to generate CSV/JSON files compatible with Data Loader. If you must use SOAP, run queries outside Zuora and convert the XML to CSV before loading. If downstream systems require XML, you can convert JSON to XML using online tools. For repeatable or automated processes, command-line tools or programming languages such as Python, Node, Java, or .NET can be used. |
