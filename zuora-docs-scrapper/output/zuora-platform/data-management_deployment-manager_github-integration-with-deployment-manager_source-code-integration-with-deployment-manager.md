---
title: "Source code integration with Deployment Manager"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/github-integration-with-deployment-manager/source-code-integration-with-deployment-manager"
product: "zuora-platform"
scraped_at: "2026-02-20T17:39:20.123Z"
---

# Source code integration with Deployment Manager

This article explains how to integrate Zuora tenants with source code repositories using configuration templates.

The integration of Zuora tenants with source code repositories, using out-of-the-box configuration templates, creates a fully integrated environment for managing and streamlining the software development lifecycle. This integration connects every tool in the pipeline, providing a cohesive solution for overseeing development processes.

![Source code integration with Zuora](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f69ba6f5-1104-4ffc-9e9d-a245064986b4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY2OWJhNmY1LTExMDQtNGZmYy05ZTlkLWEyNDUwNjQ5ODZiNCIsImV4cCI6MTc3MTY5NTU1NSwianRpIjoiMTUwNjEyYjA2NDY3NGM1YTliYjhmZGE2MjZkOTMwNWMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.AYXGmHm7wqYfzvj9Ku_Sse9BsKVGKbhs25HwMQH01ZQ)

The diagram illustrates the complete integration within the Zuora ecosystem and the workflows for deploying metadata to target tenants from both the Source Code Repository and the Production tenant. These workflows include:

-   Deployment Manager and Configuration Template User Interface: A streamlined interface for managing configurations and deployments.
-   Automated Deployments with GitHub Actions: Leveraging GitHub Actions to automate and simplify deployment processes.
-   Developer Sandbox and Central Sandbox Refreshes from Production: Efficiently refreshing sandbox environments to align with production data for testing and development purposes.

For more information on Configuration Templates, APIs, or Developer and Central Sandboxes, see [Configuration Templates](/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/about-configuration-templates) , [Deployment Manager APIs](https://developer.zuora.com/v1-api-reference/api/tag/Configuration-Templates/), and [Zuora Testing Environments](/basics/environments/zuora-billing-testing-environments).

Integrating Zuora tenants with source code repositories provides several benefits, including a streamlined development process, improved version control, enhanced collaboration among various user roles such as developers, QA engineers, IT admins, and increased security and compliance.

Note:

Currently, this functionality is limited to GitHub and GitHub Actions. However, based on feedback, Zuora plans to expand support to include additional source code repositories in the future.
