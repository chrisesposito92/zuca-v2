---
title: "User role and data query behavior"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-behavior-and-scope/scope-and-behavior-overview/user-role-and-data-query-behavior"
product: "zuora-platform"
scraped_at: "2026-02-20T17:39:54.796Z"
---

# User role and data query behavior

This document outlines the rules for user role comparison and data query deployment using the Deployment Manager.

## User Roles

-   Deployment Manager can support user role comparison in the current version.

-   Deployment manager does not compare and validate user roles for administration.

-   Deployment manager compares and validates the custom roles on the name and the attributes within the role for comparison.

-   Deployment Manager does not support the migration of user roles.


## Data Query

Deployment Manager supports the deployment of metadata from the source to the target tenant. It does not support the transactional data associated with the query results.
