---
title: "Stateless and stateful modes"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/aqua-stateless-and-stateful-modes/stateless-and-stateful-modes"
product: "zuora-platform"
scraped_at: "2025-12-24T18:50:59.652Z"
---

# Stateless and stateful modes

AQuA can operate in stateless and stateful modes, executing queries either sequentially or within a continuous session.

AQuA can be executed in the following modes:

| Mode | Description |
| --- | --- |
| Stateless | In Stateless mode, queries are executed as is. When running in Stateless mode, all Export ZOQL and ZOQL queries supplied in the API input body are executed in a sequential order. All data which satisfies the query criteria is returned.AQuA queries are carried out in Stateless mode when the following occurs:The version is 1.0orThe version is 1.1 and Partner or Project is null |
| Stateful | In Stateful mode, AQuA establishes a continuous session across a series of requests.AQuA queries are executed in Stateful mode when the version is 1.1 and both Partner and Project are not null.You can specify a combination of Partner and Project as a unique identifier of a continuous AQUA session. Once the Partner and Project pair are supplied in the AQuA input, AQuA records the state of each AQUA call request.Note: Submit a request atZuora Global Supportto obtain a partner ID.The first request executes queries against all data in the database, and returns all data that satisfies the query criteria.Subsequent requests execute the queries against incremental data created or updated since the last AQuA session. Each request returns incremental data for only the object specified in the FROM clauses of the queries; changes made to joined objects are not returned.Note that if the last request of a stateful AQuA query was submitted more than 180 days ago, Zuora executes the query against all data in the database.The Job ID and Transaction Start Date are recorded with the AQuA request. Each subsequent AQuA request with the same Partner ID and Project ID returns the data that satisfies the query criteria created or updated after the Transaction Start Date in the previous AQuA request.Stateful AQuA is best used for continuous data integration between Zuora and a target system.AQuA sessions with the same Tenant ID, Partner ID, and Project ID cannot run in parallel. When this occurs, they are executed sequentially in the order in which they were received. For example, if an AQuA job is running, and another AQuA job with same Tenant ID, Partner ID, and Project ID is submitted, the second job will not be executed until the first job is complete. |
