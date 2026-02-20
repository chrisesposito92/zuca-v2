---
title: "Configure Filter as a processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/filter-processor/configure-filter-as-a-processor"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:27.665Z"
---

# Configure Filter as a processor

Configure a filter processor to control which event records continue through your Mediation pipeline. The filter evaluates each record against the rules you define. Records that meet the conditions pass through to downstream processors. Records that do not match are dropped.

1.  Navigate to
2.  Create a Custom meter.
3.  Select Filter as the processor. The Filter settings page is displayed.

    ![Filter Processor settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/49e65acc-5b8f-4b21-aa18-ad221b7bc780?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ5ZTY1YWNjLTViOGYtNGIyMS1hYTE4LWFkMjIxYjdiYzc4MCIsImV4cCI6MTc3MTY5NjE2MSwianRpIjoiYzVkMzliZWY3OWVhNGIxYmE5MjMzODg3OTUzMjJkMDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.dJHQvEts-km9uJpzKbUQ2liOWO4fAY4uYSCc-6biAe4)

4.  Enter a Name for the filter component.

    The Operator ID is a system‑generated, non-editable identifier for this operator, used in audit and API integrations.

5.  Under Criteria, Select the field that you want to evaluate, for example Id, Amount, or Status.
6.  Select an operator, such as Equals, Greater Than, or Contains.
7.  Enter the comparison value, if the selected operator requires a value.
8.  (Optional) Use additional rules and groups to refine the filter logic:
    1.  Click Add Rule to add another condition to the current group.
    2.  Click Add Group to create a separate group of rules for more complex logic.
    3.  Use the AND / OR options to specify how rules and groups are combined.

        AND – All rules in the group must be true. OR – At least one rule in the group must be true. Reorder rules and groups as needed to organize the evaluation logic.

9.  Click Save to save the filter processor settings.
