---
title: "E-Invoice cancelation flow"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-sovos-for-brazil/e-invoice-cancelation-flow"
product: "zuora-billing"
scraped_at: "2025-12-24T18:32:50.463Z"
---

# E-Invoice cancelation flow

This topic outlines the process and key features of canceling Brazilian e-invoices, including NF-e and NFS-e, highlighting the importance of timely action, communication, and compliance with jurisdictional rules.

Brazilian e-invoices, such as the NF-e (for goods) or NFS-e (for services), can be cancelled even after receiving approval from the relevant tax authority (SEFAZ or municipality).

Key features of cancellation

-   Timely cancellation: There is typically a specific timeframe within which an e-invoice can be canceled after its approval.

-   Reason for cancellation: When initiating a cancellation, it is optional to provide a reason or justification, often as free text, for why the cancellation is necessary. This information is sent to the relevant tax authority.

-   Communication of cancellation: The system automatically notifies both the Brazilian government and the invoice recipients about the cancellation.

-   Accessibility: You can usually initiate the cancellation process through both UI and API. This allows for flexibility in managing cancellations.


For businesses in Brazil, the cancellation workflow for electronic invoices is a strict, time-sensitive, and document-specific process governed by different authorities. It is crucial to distinguish between the NF-e (goods) and the NFS-e (services) to understand the requirements, as they operate under different jurisdictional rules.

## NFS-e (Services) cancellation workflow

The cancellation of an NFS-e is currently decentralized and handled at the municipal level by each city hall (Prefeitura), leading to significant variations in rules.

-   Varying rules and deadlines: Each municipality sets its own procedures, deadlines, and technical standards for cancellation. Deadlines can range from a few hours to several weeks after issuance.

-   Municipal portal access: The service provider typically must log into the municipality's tax portal to submit a cancellation request.

-   Manual cancellation: In some cases, especially for older systems, the process may be manual or semi-manual, requiring the provider to submit a formal request to the tax authority.

-   National standard rollout: Starting in January 2026, a national NFS-e standard is being phased in to unify and simplify this process across all municipalities. This will centralize access through a national portal, standardize the cancellation workflow, and reduce complexity for businesses.

-   Irreversibility: Once an NFS-e is successfully canceled, the action is typically irreversible.


## NF-e (Goods) cancellation workflow

The cancelation of an NF-e is handled at the state level by the Secretaria da Fazenda (SEFAZ) and is a highly controlled process.

-   Cancelation window: The NF-e can only be canceled within 24 hours of its authorization, provided the goods have not yet left the shipping facility.

-   Cancelation request: The issuer must send an electronic cancellation request event to the relevant state SEFAZ, providing a valid reason for the cancellation.

-   SEFAZ approval: If the cancellation is approved, the NF-e status is updated in the SEFAZ system and the cancellation is recorded.

-   Late cancelation: If the 24-hour window has passed but the goods have not been shipped, the NF-e cannot be canceled. Instead, the issuer can issue a Carta de Correção (CC-e) to rectify minor errors, but this cannot be used for substantive changes like tax amounts or total value.

-   Cancelation after shipment: If the goods have already been shipped or delivered, the NF-e cannot be canceled at all. A corrective or return NF-e must be issued to reverse the transaction and report the return of goods to the tax authorities.

-   Contingency: In case of system issues, the cancellation might follow a specific contingency process, though this is heavily monitored.


## E-Invoice cancellation scenario

In Brazil, canceling an e-invoice is a two-step process that involves reversing the invoice internally and then sending a cancellation request to the tax authority. This scenario applies when a posted invoice (e.g., INV1) needs to be canceled due to an error, such as an incorrect service charge for a canceled subscription.

Process flow

1.  Customer reports an issue: Your customer informs you that invoice INV1 contains an error and should be canceled.

2.  Reverse the invoice in Zuora:

    -   Navigate to the invoice (INV1) in your Zuora system.

    -   Initiate the "Reverse Invoice" operation.

3.  Cancel the e-invoice:

    -   Select the "Cancel E-Invoice" operation for INV1.

    -   Provide the invoice ID or key.

    -   Enter a free-text cancellation reason explaining the issue (e.g., "Customer subscription cancelled prior to billing").

4.  Status update:

    -   The e-invoice status for INV1 will initially change to "Cancel Processing."

    -   Upon successful processing and approval from the tax authorities, the status will be updated to "Cancelled."
