---
title: "User role and data query deployment rules"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/deployment-manager-known-facts-and-limitations/user-role-and-data-query-deployment-rules"
product: "zuora-platform"
scraped_at: "2026-01-15T21:59:10.665Z"
---

# User role and data query deployment rules

This document outlines the rules for user role comparison and data query deployment using the Deployment Manager.

## User Roles

-   Deployment Manager can support user role comparison in the current version.
-   Deployment manager does not compare and validate user roles for administration.
-   Deployment manager compares and validates the custom roles on the name and the attributes within the role for comparison.
-   Deployment Manager does not support the migration of user roles.


## Data Query

Deployment Manager supports the deployment of metadata from the source to the target tenant. It does not support the transactional data associated with the query results.
