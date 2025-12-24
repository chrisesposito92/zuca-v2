---
title: "Stages in application development"
url: "https://docs.zuora.com/en/zuora-platform/data-management/zuora-devops/application-lifecycle-management/stages-in-application-development"
product: "zuora-platform"
scraped_at: "2025-12-24T05:13:35.369Z"
---

# Stages in application development

Outlines the stages in application development, including planning, creation, testing, release, and monitoring, with a focus on optimizing Application Lifecycle Management using Zuora's sandbox environments.

![ALM Process in Zuora](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9e24b5a0-1cf1-4c89-869f-3100d31721ef?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjllMjRiNWEwLTFjZjEtNGM4OS04NjlmLTMxMDBkMzE3MjFlZiIsImV4cCI6MTc2NjYzOTYxMywianRpIjoiOTcxNWNhN2QyYjJlNDE2OWEzNjAzZTg5ZGNiMjA0ZWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.tuSA6IoqJseK9-xrcQi45gWx3T-nJ389zJ2-IGdpfo8)

## Step 1: Plan

Planning includes gathering requirements, creating user stories and breaking them down into smaller tasks for the developers to initiate the development.

## Step 2: Create and Test

The build on the requirements and user stories is initiated. The developers verify their changes before merging their work with others. As development expands and operational business complexities increase, optimizing Application Lifecycle Management becomes essential. The key area for optimizing the process end to end is the strategic use of multiple developer sandboxes of different types.

Zuora Developer Sandboxes are dedicated, isolated environments provided to create, modify and test changes using a snapshot of production configuration data. It provides frequent refreshes and is an ideal setup for testing their changes and integrations.

## Step 3: Testing

All the created, modified, and customized artifacts are consolidated, bundled together and moved to a higher environment for user acceptance testing. The Zuora Central Sandbox is designed to provide an identical copy of the production environment for various development, testing and training purposes. Central Sandboxes are valuable and highly recommended for UAT, performance and load testing.

## Step 4: Release

Post successful testing and meeting quality benchmarks, deploy the updates to production. Releases in Zuora Tenants can typically fall into one of the two following categories:

-   Minor changes - This includes bug fixes or modifying any existing billing documents, adding a new batch or communication profile etc.

-   Major Changes - These are changes with a significant impact that may affect the user experience and data accuracy. For example, adding a new workflow for performing mass update action on price changes or data integration from external sources such as Netsuite, Salesforce, SFTP integrations etc.


## Step 5: Monitor

Zuora Platform enables monitoring your deployments and optimizing your UAT with Zuora System Health Dashboards. These dashboards provide visualizations of the usage and performance of Zuora products. This data enables you to understand workload and performance and make data-driven decisions. System Health dashboards can be configured with threshold-based alerts (callouts/ emails) to help you closely monitor your continuous DevOps processes.
