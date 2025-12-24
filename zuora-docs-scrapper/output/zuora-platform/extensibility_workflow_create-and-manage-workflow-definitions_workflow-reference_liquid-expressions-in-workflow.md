---
title: "Liquid expressions in Workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/liquid-expressions-in-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:51.696Z"
---

# Liquid expressions in Workflow

Introduces Liquid expressions and provides example expressions that can be used to filter and transform data in Workflow.

Liquid is an open-source template language created by Shopify. Liquid uses a combination of objects, tags, and filters inside template files to display dynamic content. You can use Liquid Auto-Complete. You can use the type-ahead functionality during your task development experience as well as while using the Liquid Tester. The autocomplete feature allows you to type in Liquid tags as you normally would, and the system will automatically use the drop-down menu of options to either scroll through and click the tag of your choice or highlight and press the tab key. Furthermore, if you are using Liquid functions, you can type the vertical bar | and see a menu of functions, with hints and outputs visible when hovering.

-   Object: Contain the content that Liquid displays on a page. To output an object's property, wrap the object name in `{{` and `}}` .

-   Tag: Create the logic and control flow for templates. Tags are wrapped in: `{% %}` characters. An object inside a tag does not need brackets.

-   Filter: Modify the output of a Liquid object or variable. Filters are placed within an output tag `{{` `}}` and are denoted by a pipe character `|` .


Here is an example. For details about objects, filters, tags, and other tips for Liquid, see [Liquid basics](https://shopify.github.io/liquid/basics/introduction/) and [Liquid reference](https://shopify.dev/docs/themes/liquid/reference/).

![Workflow Liquid example](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d9cc3f41-ed72-4e64-bfc7-0970b60d396e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ5Y2MzZjQxLWVkNzItNGU2NC1iZmM3LTA5NzBiNjBkMzk2ZSIsImV4cCI6MTc2NjY0MDc2OSwianRpIjoiZDFkYTUyYmM0ZmI0NDk2OThhNTY1MTk3MDQwOGJhNDEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.lhKvtuk1qxu-hymrCWOaHpAXCX-eve9eiYAVwUkHfcQ)

You can use Liquid expressions in Zuora Workflow tasks, including the task name, to filter and transform data. The following examples provided in this article can be used as references. The sample outputs are provided in the comments `{% comment %} {% endcomment %}` .

The version of Liquid used in Workflow is 5.0.1.

## Other resources

-   [Liquid Cheat Sheet](https://www.shopify.com/partners/shopify-cheat-sheet)

-   [Liquid Sandbox (useful for testing simple syntax)](https://jumpseller.com/support/liquid-sandbox/)

-   Newlines and white spaces might interfere with your Liquid logic. See the following methods to remove unnecessary spaces.

    -   [https://shopify.github.io/liquid/basics/whitespace/](https://shopify.github.io/liquid/basics/whitespace/)

    -   [https://shopify.github.io/liquid/filters/lstrip/](https://shopify.github.io/liquid/filters/lstrip/)

    -   [https://shopify.github.io/liquid/filters/strip\_newlines/](https://shopify.github.io/liquid/filters/strip_newlines/)
