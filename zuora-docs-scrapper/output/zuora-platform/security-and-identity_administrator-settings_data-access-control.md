---
title: "Data Access Control"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/data-access-control"
product: "zuora-platform"
scraped_at: "2026-02-20T17:41:01.472Z"
---

# Data Access Control

Introduces key features and explains how to implement Data Access Control.

Note:

Data Access Control (DAC) is not available for sale and is in maintenance mode. However, we will continue to support it for customers who already purchased this capability. For advanced Zuora Platform capability, we recommend you leverage [Zuora Multi-Org](/zuora-platform/user-management/multi-org/overview-of-multi-org). It allows you to build and secure your organizational hierarchy and control access by segmenting financial and transactional data. Please contact the [Zuora Global Support](https://support.zuora.com/) team for further assistance.

Data access controls what users can see in Zuora, such as a U.S. regional salesperson viewing only customer accounts in the U.S.

## Overview

Data Access Control allows customers to customize and control what areas their users can access within Zuora. Data Access Control allows you to do the following things:

-   Restrict what products and accounts your users can see within Zuora​​.

-   Configure multiple business units under a single tenant.​​


## Data Access Control versus Permissions

Data Access Control differs from permission in the following:

-   Data Access Control is what users can see within Zuora. For example, U.S. users should only be allowed to see U.S. accounts.

-   Permissions are what users can do within Zuora. For example, having the ability to override the revenue recognition rule.


## Availability

You must have Zuora Platform Administrator permission to manage Data Access Control. See [Zuora Platform roles](/zuora-platform/security-and-identity/administrator-settings/user-roles/platform-roles) for more information.

To allow users to make API calls with Data Access Control enabled, you must assign them the top-level tag in the access hierarchy. Otherwise, they will get an error indicating that they do not have the access right when they make API calls.

## Basic concepts

The following are the basic concepts of Data Access Control.

​​Hierarchy

A hierarchy is a set of tags created by your Zuora administrator to enforce access rights on a Zuora object. Both hierarchies and tags are organized in a tree structure. Currently, the following applies to a hierarchy:

-   Each tenant can only have one hierarchy

-   Each hierarchy has a maximum of one hundred tags

-   Each hierarchy has a maximum of ten levels


Tags

A tag is a value within a hierarchy that is assigned to users and objects. Tags are organized in a tree structure. The following are examples of tag values:

-   Roles

-   Product lines

-   Business units

-   Regions

-   Verticals


When you tag an object, you are tagging an account or product. For example, if you apply a "West Coast" tag on an account, all subscriptions under that account will inherit the same tag. Take into account that transaction objects, such as subscriptions, invoices, payments, and refunds are restricted because they inherit the tag of the account, but not the product.

When you apply tags to users, the following things can happen:

-   Each user can only be assigned one tag.

-   Users can view objects within their roles and below them.

-   Users cannot view objects above or across them within the hierarchy.

-   Users can also be reassigned tags.


Unrestricted access

Unrestricted access are objects that any user can view. Regardless of where a user resides in the tag hierarchy, all users can access unrestricted objects. Any user can change an object to or from Unrestricted.

Complete Data Access Control

Complete Data Access Control is the top level of the Data Access Control hierarchy. Users tagged at this root level have access to all objects within Zuora. Users that have not been tagged, will automatically be tagged at the root level.

## Notes and limitations

Following products or features have limitations on Data Access Control:

-   Zuora Reporting does not support Data Access Control. Only users assigned the top-level tag in the Data Access Control hierarchy are able to access Zuora Reporting.

-   Zuora Analytics does not support Data Access Control. Users at any level of the DAC hierarchy are able to access data in Analytics if they have Analytics permissions.

-   Zuora Journal Runs does not support Data Access Control. Only users assigned the top-level tag in the Data Access Control hierarchy are able to create journal runs if they have Journal Runs permissions.

-   Zuora Bill Runs does not support Data Access Control. Only users assigned the top-level tag in the Data Access Control hierarchy are able to create bill runs if they have Bill Runs permissions.

-   Zuora Payment Runs does not support Data Access Control. Only users assigned the top-level tag in the Data Access Control hierarchy are able to create payment runs if they have Payment Runs permissions.

-   Zuora Data Query does not support Data Access Control. Users at any level of the DAC hierarchy are able to access Data Query if they have permission.

-   Zuora [Custom Object](/zuora-platform/extensibility/custom-objects/custom-objects-overview) does not support Data Access Control.

-   For a user to be able to view, create, or update usage data, the user must be assigned the top-level tag in the Data Access Control hierarchy.
