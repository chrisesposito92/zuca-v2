---
title: "Configure an Accumulator as a processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-an-accumulator-as-a-processor"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:43.953Z"
---

# Configure an Accumulator as a processor

Learn how to configure an Accumulator as a processor for a custom meter to hold and group events together till triggered by an event or specific time. Then the grouped events can be processed together.

1.  Navigate to
2.  Create a Custom meter.
3.  Select Accumulator as the processor. The Accumulator settings page is displayed.

    ![Accumulator processor settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fef4a904-a065-4854-be50-ac631b9e9bdd?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZlZjRhOTA0LWEwNjUtNDg1NC1iZTUwLWFjNjMxYjllOWJkZCIsImV4cCI6MTc3MTY5NjE3OCwianRpIjoiMWZkNjkxNzE3ZmFlNGIyZmEyNGZiOWExY2YyM2FhY2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.FeO3784iXimig-_p1gF7CG0JSasFAIHvhtWSDgMy9dQ)

4.  Enter a Name for the Accumulator component.
5.  From the Group By Fields drop-down list, select all the fields that you want to use to group the events.
6.  Select the conditions for the release trigger.
    1.  Timeout Type : You can select from one of the following options.

        1.  Processing Time Based: Based on current time (actually the mediation server time).
        2.  Event Time Based: Based on input event data field time. You can select the Event time field and specify the time format if using a special time format rather than the ISO date time format.

    2.  Timeout Duration : You can define the timeout duration value followed by minute, hour, day, and calendar month.

        1.  Time length is based on calendar time and not the first event ingestion time. For example, if you select 1 hour duration and the first event time is 4:26 pm, the next hour timeout is 5:00 pm instead of 5:26 pm. For day, if you select 1 day duration and the current day and time are 4:26 pm, Dec 19th, then the next day timeout is 12:00am, Dec 20th instead of 4:26 pm, Dec 20. For month, if you select 1 month and today is Dec 20th, the next month timeout is Jan 1st instead of Jan 20th.
        2.  If you select processing time based, the accumulator will be triggered once the timeout duration is met. However, if you select the event time based, the accumulator will be triggered only by events that are ingested starting 5 mins after the timeout, to indicate the last timeout window is closed. For example, if you select 1 hour duration and the current event time is 4:26 pm, the accumulator will be triggered when there is an incoming event at 5:05 pm in the next hour. For the day, if you select the 1 day duration and the current day and time are 4:26 pm, Dec 19th, the accumulator will be triggered when there is an event coming in at 12:05 am. Dec 20.

    3.  Event Time Field and Time Format: If you select the Event Time Based Timeout Type, you can define the Event time field and specify the time format if using any special time format.
7.  Select the accumulation options.
    1.  Accumulate Fields :
    2.  You can select the the source field you want to do the accumulation operations and defined the operator to use (sum, min, max, avg, count, delta), and result filed (will create a new field if using a new name or overwrite the source field if using the same name as source field).

        1.  The accumulator will reduce the record rows and only output one accumulation result record for each of the same group by field value.
        2.  The source field will be removed if the result field is using a new field name.

    3.  Advanced Accumulation : You can add Javascript or Python code to process the events. Advanced accumulation is computing resource intensive, your meter could fail if there is a large volume of usage events. Contact Zuora Global Support if you need to process events in large volumes with advanced accumulation.
8.  Click Save to save the Accumulator processor settings.
