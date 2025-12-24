---
title: "Filters for Zuora utilities"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/liquid-expressions-in-workflow/filters-for-zuora-utilities"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:03.869Z"
---

# Filters for Zuora utilities

This reference provides the sample filters for Zuora utilities in Liquid expressions.

## check\_processed\_tag

Check if any previous run of this task has the same tag logged.

Parameters: tag, original task ID

Note:

It only checks runs still in history which will expire later.

{{ 'INV-100' | check\_processed\_tag: TaskInstance.original\_task\_id }} {% comment %} true {% endcomment %}

## check\_parent\_workflow\_status

Check if any workflow runs with the specified name/ID are in the given status.

Parameters: original workflow id or name, status\['Queued', 'Processing', 'Stopped', 'Stopping', 'Finished'\]

{{ WorkflowInstance.id | check\_parent\_workflow\_status: 'Queued' }} {% comment %} true {% endcomment %} {{ WorkflowInstance.name | check\_parent\_workflow\_status: 'Processing' }} {% comment %} false {% endcomment %}

## is\_ar\_enabled

Return true if Invoice Settlement is enabled in the Zuora tenant.

{{ nil | is\_ar\_enabled }} {% comment %} true {% endcomment %}

## Zuora helpers

{{ Credentials.zuora.username }} => The Username of the Workflow instance {{ Credentials.zuora.password }} => The Password of the Workflow instance {{ Credentials.zuora.url }} => The SOAP API URL of the Workflow instance {{ Credentials.zuora.session }} => The Workflow instance session {{ Credentials.zuora.entity\_id }} => The Entity Id of the Workflow instance {{ Credentials.zuora.rest\_endpoint }} => The REST API URL of the Workflow instance. For example,https://rest.zuora.com/v1/.
