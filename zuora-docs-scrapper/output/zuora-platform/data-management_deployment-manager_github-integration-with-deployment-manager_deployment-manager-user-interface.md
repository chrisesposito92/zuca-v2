---
title: "Deployment Manager user interface"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/github-integration-with-deployment-manager/deployment-manager-user-interface"
product: "zuora-platform"
scraped_at: "2026-02-19T03:18:39.571Z"
---

# Deployment Manager user interface

The article describes how the user interface streamlines configuration deployment from a source code repository into the Zuora tenant.

The Deployment Manager user interface enables users to efficiently deploy the latest configurations from a source code repository. It provides tools to seamlessly compare, test, and deploy configurations into the specified Zuora tenant.

Note:

All deployments, whether performed with GitHub actions or the deployment manager user interface, will be displayed in the Deployment Manager List View page in Zuora Tenant. The logs will also be available for verifying the deployment.

You can deploy the latest version of templates from the source control repository using the Current Configuration Template functionality. This workflow supports both recently created templates and existing ones stored in the repository. Through the Deployment Manager interface, users can select templates from the desired repository, ensuring alignment with source control systems. The Compare and Deploy workflow ensures seamless integration and validation during the deployment process, simplifying configuration management.

This functionality is applicable whether managing new configurations or updating existing ones. It ensures an efficient, user-friendly experience for maintaining and deploying metadata templates.

Note:

-   The Deployment Manager team recommends writing Commit Messages to document the purpose of each change. This helps in understanding the history of modifications.
-   In this scenario, the compare and deploy workflow can be executed through the deployment manager's user interface.
