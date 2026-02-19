---
title: "Data migration in Zuora Billing"
url: "https://docs.zuora.com/en/zuora-platform/data-management/zuora-devops/data-migration-in-zuora-billing"
product: "zuora-platform"
scraped_at: "2026-02-19T03:19:11.133Z"
---

# Data migration in Zuora Billing

Explore the tools and best practices for data migration in Zuora Billing, including self-service interfaces and metadata deployments.

Application Lifecycle Management incorporates various stages of testing such as Unit testing, Integration testing, and UAT. It is essential to populate testing environments with relevant and realistic data. Data migration tools are fundamental components of the data movement process.

Zuora offers self-service data migration tools.

The Application Lifecycle Management framework in the Zuora Billing Platform provides guidance on the best practices for using Zuora CPQ and Zuora Connect for Salesforce.

## Metadata Deployments

Zuora offers multiple ways to replicate configurations from source to target tenants.

-   Zuora Deployment Manager: Enables you with a self-service interface to seamlessly transfer metadata from a source tenant to a target tenant. Using Zuora Deployment Manager, you can effortlessly compare and validate tenant discrepancies, select specific components you want to deploy and initiate the deployment process. Deployment Manager functions seamlessly across various environments as it is environment-agnostic.

-   Configuration Templates: Enables you to create dynamic configuration templates for deploying metadata. These templates are reusable allowing numerous deployments across all environments. You can download these templates in JSON format for easy storage in GIT repositories or any CICD pipeline repository for automation. You may save configurations from your Golden tenant as a template, which can be utilized for multiple deployments. The developers can save a subset of configurations from production in a template, upload it to developer orgs, test their changes, and release them upstream.

-   Metadata Deployments with APIs: Metadata APIs enable developers and administrators to programmatically access and deploy configurations from source to target tenants.


## Transactional Data

The following tools in Zuora enable you to perform data-related actions on Billing objects. The most frequent actions are import, update, create, and export.

-   Developer Tools: Developer tools are a collection of micro applications with the capability to carry out data migration tasks on the Billing objects. It supports import through CSV, update, delete, and export.

-   Data Loader: This tool for the Billing Platform provides a self-service user interface, dynamic templates, and in-line edits for modifying data, ensuring data accuracy. The tool represents the latest release to the Billing Platform, introducing a self-service user interface. It is equipped with dynamic templates and in-line editing capabilities. This ensures the accuracy of the data migrated.

-   Mass Updater: This tool allows you to perform mass update actions asynchronously.
