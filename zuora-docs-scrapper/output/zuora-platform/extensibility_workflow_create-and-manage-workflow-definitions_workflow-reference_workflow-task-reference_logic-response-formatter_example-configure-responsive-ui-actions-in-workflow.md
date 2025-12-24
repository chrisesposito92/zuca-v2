---
title: "Example: Configure responsive UI actions in Workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-response-formatter/example-configure-responsive-ui-actions-in-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:43.534Z"
---

# Example: Configure responsive UI actions in Workflow

Provides sample Response Formatter task codes and use cases for configuring responsive UI actions in Workflow.

UI Actions in Zuora Workflow can be configured to be responsive, giving users a more interactive and intuitive way to engage with business processes, rather than relying on workflows that run in the background without providing immediate feedback. Responsive UI Actions can also be made dynamic by using object metadata to control when and where they appear - for example, showing a UI Action only when certain conditions are met.

## Sample HTML syntax for the Response Formatter task

To set up a Responsive UI Action, users can either create a new UI Action Workflow or update an existing one by adding the Response Formatter task. This task supports HTML and allows the workflow to return a formatted response message directly on the page. For example, the following HTML can be used to display a message to the user:

<h3>Responsive Workflow</h3><br> <p>This is a demo for Responsive Workflow</p>

## Use case

As a practical use case, Revenue Operations (RevOps) teams might choose to show a UI Action only when an invoice balance is greater than $1,000. This approach helps surface relevant actions and deliver real-time feedback in the workflow interface.

<h3>Invoice Submitted</h3><br> <p>Your invoice has been submitted successfully and is pending approval.</p>

Here are a few other use cases:

<h3>Action Required</h3><br> <p>This invoice has a balance over $1,000. Please review before proceeding.</p> <h3>Amendment Completed</h3><br> <p>The product amendment for Subscription #SUB-0003211 is applied and now active.</p>

## Benefits

-   Improved User Interaction: Responsive UI Actions enable a more engaging and real-time user experience, reducing the need for users to rely on background processes without feedback.

-   Conditional Visibility: By using object metadata, workflows can be made dynamic, displaying relevant actions only when certain conditions are met (For example, invoice balance exceeds $1,000).

-   Increased Efficiency: Real-time feedback in the workflow interface helps users make faster decisions, improving overall workflow efficiency and reducing the chance of errors or delays.

-   Customization and Flexibility: The ability to return custom HTML responses offers flexibility in how information is presented, ensuring that users receive relevant and timely updates in an easily understandable format.
