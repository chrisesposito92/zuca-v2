---
title: "Data Loader summary and icons on list view"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/data-loader-summary-and-icons-on-list-view"
product: "zuora-platform"
scraped_at: "2026-02-20T17:36:25.482Z"
---

# Data Loader summary and icons on list view

This reference topic lists icons for various actions, offering a comprehensive summary of job statuses and progress.

## Data Loader List View

The data loader list view user interface icons represent the various actions that can be performed here.

A comprehensive summary of all the jobs is available. This summary provides a consolidated overview of the various tasks and processes that have been executed or are currently in progress. This summary gives you information on the status and progress of each job at a glance, helping you stay updated on the overall progress of all jobs within the system.

## Data Loader list view Icons and functions

| Status | Description |
| --- | --- |
| Refresh | Refreshes the screen to display the most recent status. |
| Abort | Halts a job that is already in progress. This is possible only when the job transitions from submitted to In progress. |
| Add New | Adds a new data migration job |
| Cancel | Removes the job from the backend queue.Note: You can cancel a job while still being in the submitted status. |
| Submitted | Indicated that the data migration job has been successfully submitted and is now queued in the backend, ready to be processed. |
| In Progress | Indicates that the data migration job is being processed. |
| Completed | Indicates that the data migration job is finished. |
| Data loader settings | Provides Data Loader Settings for configuring delimiters. |
| Clone | The following parameters are included in the cloned Job Description:Object: The source object is retained.Name of the Job - The name of the job from the source is retained; however, you can modify this field.Field Mapping - If the columns of the uploaded CSV file remain unchanged, the existing field mapping is retained. If the columns of the CSV files are modified, it is recommended to review and update the field mapping. |
