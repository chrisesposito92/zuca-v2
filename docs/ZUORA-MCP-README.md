# Zuora Developer MCP (Model Context Protocol) – Beta Preview

The **Zuora Developer MCP Server** provides an AI-powered developer experience for building Zuora integrations. It implements the **Model Context Protocol (MCP)**, enabling developers to:

* Generate production-grade code snippets using the Zuora SDK.
* Discover, explore, and analyze APIs and data models.
* Perform guided SDK upgrades across multiple languages (Java, Python, Node.js, C#) within their preferred IDEs via MCP-compatible clients.
* Execute tenant operations like querying objects, creating products, rate plans, charges, and subscriptions with approval policy enforcement.

> 📌 **Note:** Tenant operations require valid Zuora client credentials (`BASE_URL`, `ZUORA_CLIENT_ID`, `ZUORA_CLIENT_SECRET`) to authenticate with your Zuora tenant.

This repository hosts an **beta version** of the Zuora Developer MCP.

## ✨ Features

Currently, Zuora Developer MCP includes the following tools (more will be added over time):

* `zuora_codegen`: Generate integration code using the Zuora SDK.
* `ask_zuora`: Answer product questions in natural language.
* `sdk_upgrade`: Assist in upgrading the Zuora SDK in any supported language project.
* `query_objects`: Retrieve objects from a Zuora tenant efficiently and in a consistent manner.
* `get_account_summary`: Retrieve comprehensive account summaries from Zuora, automatically enhanced with recent credit and debit memos.
* `create_product`: Create products in Zuora with approval policy enforced.
* `create_product_rate_plan`: Create product rate plans in Zuora with approval policy enforced.
* `create_product_rate_plan_charge`: Create product rate plan charges in Zuora with approval policy enforced.
* `create_subscription`: Create subscriptions in Zuora using the Order API with approval policy enforced. **Prerequisite**: Order API must be enabled in your Zuora tenant.
* `cancel_subscription`: Cancel subscriptions in Zuora with comprehensive parameter support and approval policy enforced. Supports all cancellation policies and parameters from the Zuora Cancel Subscription API.
* `renew_subscription`: Renew subscriptions in Zuora with comprehensive parameter support and approval policy enforced. Supports billing options, credit handling, and invoice generation.
* `revenue_report`: Manage Zuora Revenue (RevPro) reports with comprehensive workflow support - list reports/layouts, get filters, run reports, check status, and download results. Includes intelligent browsing and filtering of report runs.
* `run_report`: Execute Zuora reports with automatic polling for completion. Accepts either reportId OR reportName.
* `manage_report`: Manage Zuora reports and report runs - search/list reports, get status, export data, cancel runs.
* `run_workflow`: Execute workflows in Zuora and monitor their execution status with optional auto-polling.
* `manage_workflow`: Discover, understand, and manage Zuora workflow configurations with AI-powered workflow matching.
* `zuora_approval`: Ensures all tenant operations comply with the enforced approval policy. To disable approval, set the environment variable `APPROVAL_ENABLED="false"`.

## 🔐 Prerequisites

* **Node.js and npm** installed on your local machine.
* An IDE that supports MCP configuration (e.g. [Cursor](https://docs.cursor.com/en/context/mcp#installing-mcp-servers), [Windsurf](https://docs.windsurf.com/windsurf/cascade/mcp)).

## 🚀 Quick Start

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en/install-mcp?name=zuora-developer-mcp&config=eyJjb21tYW5kIjoibnB4IC15IHp1b3JhLW1jcCIsImVudiI6eyJCQVNFX1VSTCI6IntiYXNlVXJsfSIsIlpVT1JBX0NMSUVOVF9JRCI6IntjbGllbnRJZH0iLCJaVU9SQV9DTElFTlRfU0VDUkVUIjoie2NsaWVudFNlY3JldH0ifX0%3D)

To configure the Zuora Developer MCP in a client like Claude Desktop, Cursor, or Windsurf, add the following to your MCP config:

**Note:**

* Environment variables are required for `ask_zuora` and optional for other tools. You can find your `BASE_URL` [here](https://developer.zuora.com/v1-api-reference/introduction/).

* To use a specific version, specify it like `zuora-mcp@1.0.0-beta.5` in the args array


```json
{
  "mcpServers": {
    "zuora-developer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "zuora-mcp"
      ],
      "env": {
        "BASE_URL": "{baseUrl}",
        "ZUORA_CLIENT_ID": "{clientId}",
        "ZUORA_CLIENT_SECRET": "{clientSecret}"
      }
    }
  }
}
```

For detailed setup guides, see:

- [Claude Desktop](https://modelcontextprotocol.io/quickstart/user)
- [Cursor](https://docs.cursor.com/context/model-context-protocol)
- [Windsurf](https://docs.codeium.com/windsurf/mcp)

> 📌 **Important:**
> The example above uses `npx` to run the MCP server. Make sure the `zuora-mcp` package is published or installed locally as needed.

Add the MCP rules to Cursor's User Rules. See [cursor_rules.md](https://cdn.jsdelivr.net/npm/zuora-mcp/cursor_rules.md) for details.

## 🚀 What's New in Beta

### Core Features
* **Code Generation**: Generate production-ready integration code using the Zuora SDK for Java, Python, Node.js, and C#
* **API Discovery**: Explore and analyze Zuora APIs and data models with intelligent guidance
* **SDK Upgrades**: Guided upgrades across multiple languages with detailed change logs
* **Tenant Operations**: Query objects, create products, rate plans, charges, subscriptions, and cancel subscriptions with approval policy enforcement

### Recent Improvements
* Added comprehensive tenant operations (`query_objects`, `create_product`, `create_product_rate_plan`, `create_product_rate_plan_charge`, `create_subscription`, `cancel_subscription`)
* Added Zuora Revenue (RevPro) report management with `revenue_report` tool
* Enhanced approval policy enforcement for all tenant operations
* Upgraded to latest Zuora SDKs (Java/Python/Node.js 3.12.0, C# 1.4.0)
* Added curl command generation support
* Improved API knowledge base with Zuora environments and query operators

## 📘 Changelog

### 1.0.0-beta.6

* **New Features:**
  * Added `renew_subscription` tool for comprehensive subscription renewal operations with approval policy enforced
  * Added `get_account_summary` tool for retrieving comprehensive account summaries from Zuora, automatically enhanced with recent credit and debit memos
* **Improvements:**
  * Added entity scoping support via the `ZUORA_ENTITY_IDS` environment variable, which is used in Zuora's Multi-Entity setup to specify which business entity to run API operations against when a user has access to multiple entities.


### 1.0.0-beta.5

* **New Features:**
  * Added `cancel_subscription` tool for comprehensive subscription cancellation with approval policy enforced
  * Supports all 16 cancellation parameters from Zuora Cancel Subscription API including cancellation policies, effective dates, and invoice generation options
  * Added `revenue_report` tool for complete Zuora Revenue (RevPro) report management workflow
  * Supports 7 operations: list reports/layouts, get filters, run reports, check status, download results, and intelligent report run browsing
* **Architecture Improvements:**
  * Refactored subscription services to unified handler architecture for better maintainability
  * Consolidated `SubscriptionExecutionService` and `SubscriptionCancelExecutionService` into single unified service
  * Implemented 3-layer pattern (Tool → Service → API) for consistent operation handling
  * Enhanced error handling and response formatting with rich MCP client instructions
* **Bug Fixes:**
  * Restored detailed success response formatting (`createSuccessResponse`) that was removed during refactoring
  * Fixed missing `operation` field in subscription service responses
  * Updated test files to work with new unified service architecture

### 1.0.0-beta.4

* **Internal Improvements:**
  * Enhanced subscription service architecture and error handling
  * Improved test coverage for subscription operations

### 1.0.0-beta.3

* **Improvements:**
  * Split `zuora_workflow` tool into two focused tools for better separation of concerns:
    * `run_workflow`: Focused on workflow execution and monitoring with auto-polling support
    * `manage_workflow`: Focused on workflow discovery, management, and configuration (8 operations)
  * Enhanced workflow tool descriptions and documentation for clearer usage guidance

### 1.0.0-beta.2

* **New Features:**
  * Added `run_report` tool for executing Zuora reports with automatic polling for completion
  * Added `manage_report` tool for comprehensive report management (search, list, get status, export data, cancel runs)
  * Added `zuora_workflow` tool for discovering, analyzing, and executing Zuora workflows with AI-powered matching
* **Improvements:**
  * Added tenantId to telemetry logs for better analytics and tracking
  * Upgraded to latest Zuora SDKs (Java/Python/Node.js 3.12.0, C# 1.4.0)

### 1.0.0-beta.1

* **New Features:**
  * Added comprehensive tenant operations (`query_objects`, `create_product`, `create_product_rate_plan`, `create_product_rate_plan_charge`, `create_subscription`)
  * Enhanced approval policy enforcement for all tenant operations
  * Added curl command generation support
* **Improvements:**
  * Upgraded to latest Zuora SDKs (Java/Python/Node.js 3.10.0, C# 1.2.0)
  * Improved API knowledge base with Zuora environments and query operators
  * Enhanced caching system for better performance
* **Bug Fixes:**
  * Fixed cURL issue caused by uppercase naming
  * Addressed query_objects tool missing results under certain conditions

### Previous Alpha Versions

* Enhanced API knowledge base with Zuora environments and object query operators
* Upgraded Java/Python/Node.js SDKs to version 3.8.0 and C# SDK to version 1.0.0
* Added Cursor workspace rules for MCP-first, SDK-compliant code generation
* Added language parameter support to telemetry signals for better analytics
* Added Cursor MCP install link for easier setup
* Improved documentation for clarity and completeness
* Enhanced API metadata for better accuracy and context
* Fixed several bugs in API resources
* Added telemetry event tracking
* Upgraded the SDK to version 3.7.0 and the C# SDK to version 1.0.0-beta.6
* Improved SDK upgrade support across all languages with detailed change logs
* Enhanced API detail responses to include request and response schemas
* Added support for passing multiple model names to `getModelDetail`