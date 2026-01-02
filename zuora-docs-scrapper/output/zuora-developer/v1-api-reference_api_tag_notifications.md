---
title: "Notifications"
url: "https://developer.zuora.com/v1-api-reference/api/tag/Notifications/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:13:38.457Z"
---

# Notifications

Notifications are the actions taken to inform users or call third-party endpoints when a certain event happens. Typical actions include emails and callouts. Callouts typically refer to HTTP invocations, such as HTTP calls to REST services.

Zuora notification system processes the events in the same order in which they are triggered. The timing and delivery of notifications can still vary based on factors such as retries, concurrency, and network latency. But Zuora guarantees the best performance possible with the right performance boosters and tuning.

Notifications are associated with Communication Profiles, which allow you to send specific event-driven notifications to targeted customers. Zuora provides the following Settings API to access the settings of Communication Profiles:\* [Get all Communication Profiles](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_all_Communication_Profiles)

-   [Create a new Communication Profile](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Create_a_new_Communication_Profile)
-   [Modify a Communication Profile](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Modify_a_Communication_Profile)
-   [Get all Notifications under a particular Communication Profile](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_all_Notifications_under_a_particular_Communication_Profile)
