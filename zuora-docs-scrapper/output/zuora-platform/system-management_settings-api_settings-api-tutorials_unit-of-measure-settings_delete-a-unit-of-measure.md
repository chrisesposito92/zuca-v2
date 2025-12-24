---
title: "Delete a Unit of Measure"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/unit-of-measure-settings/delete-a-unit-of-measure"
product: "zuora-platform"
scraped_at: "2025-12-24T05:08:09.881Z"
---

# Delete a Unit of Measure

Learn how to delete a unit of measure by the Settings API.

To delete a specific unit of measure, the ID of the unit of measure is required as a path parameter. After a unit of measure is deleted successfully, you receive a 200 response with an empty response body.

HTTP request:

`DELETE https://rest.zuora.com/settings/units-of-measure/{id}`

Success response code: 200
