---
title: "Example: Use cases for tags"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/liquid-expressions-in-workflow/example-use-cases-for-tags"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:15.865Z"
---

# Example: Use cases for tags

Provides example for typical use cases for tags.

## Control flow tags

if/then

{% if Data.Callout.currency == "USD" and Data.Callout.amount > 10 %} True {% elsif Data.Callout.currency == 'MXP' and Data.Callout.amount >100 %} True {% else %} False {% endif %}

-   When used in Workflow, `True` and `False` must be spelled with the first letter capitalized.

-   `{{ }}` is not required around each field since it is already in a logic `{% %}` .


Null check

{% if a.ProductCatalogGroup\_\_c != blank %} "ProductCatalogGroup\_\_c": "{{ a.ProductCatalogGroup\_\_c }}", {% endif %} {% if Data.Subscription.size > 0 %} True {% else %} False {% endif %}

Determine the presence of an array

{% if Data.ratePlans\[index\].lastChangeType %}

Case

{% case Data.Subscription.Count\_Name and Data.Account.Currency %} {% when 1 and 'USD' %} One {% when 2 and 'USD' %} Two {% when 3 and 'USD' %} Three {% endcase %}

## Iteration tags

Iterate over JSON

In Workflow Iterate task, you may enter a JSON payload that is not in the dropdown list. When doing so, you will need to format the payload by using the to\_json filter so that the Workflow recognizes that what you entered is JSON.

{{Data.Callout\[0\].ResponseBody.order.subscriptions.orderActions | to\_json }}

For loop

{% for RP in Data.RatePlan %} {{ RP.Name }} - the piece that loops {%- if forloop.last == false -%} , {% endif %} {%- endfor %}

Indexing

{% for ii in Data.InvoiceItem %} {% assign index = forloop.index0 %} {% assign i = Data.Invoice\[index\] %} {% assign p = Data.Product\[index\] %} {% assign s = Data.Subscription\[index\] %} {% assign prp = Data.ProductRatePlan\[index\] %} {% assign prpc = Data.ProductRatePlanCharge\[index\] %} {% endfor %}
Continue and break
{% for RPC in Data.RatePlanCharge %} {% if RPC.ChargeType != “Recurring” %} {% continue %} {% else %} {{ RPC.Name }} {% endif %} {% endfor %}

-   `{% continue %}` causes the loop to skip the current iteration when it encounters the `continue` tag.

-   `{% break %}` causes the loop to stop iterating when it encounters the `break` tag.

-   You can use it as a way to do a form of the inner join between two arrays.


Math and for loop

{% assign optics\_total = 0 %} {% for usage in Data.Usage %} {% assign optics\_total = optics\_total | plus: usage.Quantity %} {% endfor %} {{ optics\_total }}

## Variable tags

Assign a subset of array data

{%- assign removeProducts = Data.Callout.ResponseBody.order.subscriptions\[0\].orderActions | where: "type", "RemoveProduct" -%} {%- for rps in removeProducts -%} {{rps.removeProduct.ratePlanId}} {%- endfor -%}

Round-robin

{% assign AgentArray = "agent1, agent2, agent3, agent4" | split: ", " %} {% assign AccountArray = "account1, account2, account3, account4, account5, account6" | split: ", " %} {% assign AgentArraySize = AgentArray | size %} {% for account in AccountArray %} {% assign AgentIndex = forloop.index0 | modulo: AgentArraySize %} {% assign Agent = AgentArray\[AgentIndex\] %} {{Agent}} {% endfor %}

Fetch a value based on sorting an array of data

{% assign myItem = Data.RatePlanCharge | sort: ‘ChargedThroughDate’ | reverse | first %}{{myItem.ChargedThroughDate}}

## Use the Strict Variables option to verify Liquid expression

When setting up a Workflow task, you can choose to verify the Liquid expression specified in this task by using the Strict Variable mode.

By selecting Strict Variables in the task setting page, Liquid expression errors, such as "Liquid::UndefinedVariable", "Liquid::UndefinedFilter", will be raised during the task runs. However, if you leave Strict Variables unselected, the fields that contain undefined liquid variables will be left empty without raising any errors.

For example, if you use Data.abc to name a workflow task, but the variable abc doesn't exist, the task will be errored out with a "Liquid::UndefinedVariable" error in the Strict Variables mode. If Strict Variables is not selected in the task setting, the task will not be error out. Instead, the task will be named to "Add name to task", which is the default placeholder for the Task Name field.

Note:

You can select the Skip Validation option to skip the basic task validation on the task setting UI and allow the Workflow task to be saved.
