---
title: "Management of related custom object records on standard object detail pages"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-objects/custom-object-record-management/management-of-related-custom-object-records-on-standard-object-detail-pages"
product: "zuora-platform"
scraped_at: "2025-12-24T05:23:45.104Z"
---

# Management of related custom object records on standard object detail pages

You can view, create, or edit related custom object records on standard object detail pages.

A custom object can be connected to a Zuora standard object by using a relationship-type custom field. The relationship is many-to-one, which means multiple records of a custom object can be related to the same standard object record. For example, the Vehicle custom object can have many records that are related to a particular account object.

## Supported standard objects

The following table lists the supported standard object detail pages and operations you can perform on each page:

| Standard object detail page | View related custom object records | Create related custom object records | Edit related custom object records |
| --- | --- | --- | --- |
| Account | Yes | No | No |
| Invoice | Yes | Yes | Yes |
| Payment | Yes | Yes | Yes |
| Product | Yes | No | No |
