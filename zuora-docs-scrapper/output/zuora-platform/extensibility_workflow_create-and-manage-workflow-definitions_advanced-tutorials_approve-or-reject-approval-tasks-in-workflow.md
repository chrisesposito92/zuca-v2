---
title: "Approve or reject approval tasks in Workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/approve-or-reject-approval-tasks-in-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:31:48.558Z"
---

# Approve or reject approval tasks in Workflow

Learn how to approve or reject approval tasks from the Workflow UI.

When you are specified as the approver of an approval task in Workflow, you do not get automatic notifications. You need to go to the Workflow user interface to find out and, if any, approve or reject the approval request.

For the task pending on approval, if it is not approved/disapproved in 90 days, it will be marked as failed to approve/disapprove and the workflow will enter into the cleanup process.

1.  Start Workflow.
2.  In the Overview tab, check the number of tasks that need your attention in the My Organization's Tasks section. If the number is 0, there are no tasks that are waiting for your approval. In this case, you can skip the rest of the procedure. In the example shown below, there are four tasks that are waiting for your approval.
3.  Click View Tasks to view all tasks. Alternatively, you can click the Tasks tab from the landing page of Workflow.
4.  In the Tasks tab, click on Type to display the drop-down list. Enter "approval" in the search bar and select Approval from the result. All approval tasks will be displayed.
5.  For each approval task you want to process, click the menu icon on the left of the workflow name, and select Approve or Reject . When a task is approved or rejected, the status of the task is changed from Pending to Success. The number of tasks that need your attention showing in the Overview tab will be updated accordingly.
