---
title: "Source code integration with Deployment Manager"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/source-code-integration-with-deployment-manager"
product: "zuora-platform"
scraped_at: "2025-12-24T05:12:49.999Z"
---

# Source code integration with Deployment Manager

This article explains how to integrate Zuora tenants with source code repositories using configuration templates.

The integration of Zuora tenants with source code repositories, using out-of-the-box configuration templates, creates a fully integrated environment for managing and streamlining the software development lifecycle. This integration connects every tool in the pipeline, providing a cohesive solution for overseeing development processes.

![Source code integration with Zuora](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f69ba6f5-1104-4ffc-9e9d-a245064986b4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY2OWJhNmY1LTExMDQtNGZmYy05ZTlkLWEyNDUwNjQ5ODZiNCIsImV4cCI6MTc2NjYzOTU2OCwianRpIjoiYjgyN2E1NTc5NjIwNDYyZTkwZTZlYmE5ZTVkN2FkM2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.NIt71u9hQzvAvRSGo6XkOCPXLEw5Qz4xs6kMiz1hYaI)

The diagram illustrates the complete integration within the Zuora ecosystem and the workflows for deploying metadata to target tenants from both the Source Code Repository and the Production tenant. These workflows include:

-   Deployment Manager and Configuration Template User Interface: A streamlined interface for managing configurations and deployments.
-   Automated Deployments with GitHub Actions: Leveraging GitHub Actions to automate and simplify deployment processes.
-   Developer Sandbox and Central Sandbox Refreshes from Production: Efficiently refreshing sandbox environments to align with production data for testing and development purposes.

Integrating Zuora tenants with source code repositories provides several benefits, including a streamlined development process, improved version control, enhanced collaboration among various user roles such as developers, QA engineers, IT admins, and increased security and compliance.

Note:

Currently, this functionality is limited to GitHub and GitHub Actions. However, based on feedback, Zuora plans to expand support to include additional source code repositories in the future.
