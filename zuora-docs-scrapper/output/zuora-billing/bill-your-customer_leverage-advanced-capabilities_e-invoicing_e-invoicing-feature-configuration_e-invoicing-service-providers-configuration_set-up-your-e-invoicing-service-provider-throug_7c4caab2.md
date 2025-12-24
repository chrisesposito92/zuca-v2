---
title: "Set up your e-invoicing service provider through the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoicing-service-providers-configuration/set-up-your-e-invoicing-service-provider-through-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:40.881Z"
---

# Set up your e-invoicing service provider through the Zuora UI

Learn how to set up your e-invoicing service provider through the Zuora UI, including configuring settings and verifying connections with providers like Sovos, PEPPOL, and Avalara.

To set up your e-invoicing service provider through the Zuora UI, perform the following steps:

1.  Click your avatar in the upper right and click .
2.  On the Billing Settings page, click E-Invoice.
3.  On the E-Invoice Settings page, click \+ Add in the Service Providers section.
4.  In the displayed Add Service Provider dialog, configure the following settings:
    1.  In the Name field, specify the name of the e-invoicing service provider.
    2.  From the Provider list, select an e-invoicing service provider:

        -   Sovos: Provides e-invoice compliance solutions in countries such as India, Italy, Saudi Arabia, and others. You must follow Sovos' configuration steps to set up e-invoicing configurations on the Sovos side. The result fields might be different by country. For more information, see [Manage country-specific configurations](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management).

        -   PEPPOL: Provides PEPPOL-compliant e-invoice files for countries utilizing the PEPPOL standard or its derivatives. For more information, see [E-invoicing with PEPPOL](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-peppol).
        -   Avalara: Provides e-invoice compliance solutions in the following countries:
            -   Countries as part of the Peppol network, such as Australia.
            -   Countries not part of the Peppol network but follow country-specific invoice clearance processes, such as Mexico.

    3.  Specify additional service provider information for Sovos or Avalara service provider:

        -   API Key and Secret Key : Request the API key and secret key from Sovos or Avalara and specify them.
        -   Certificate and Certificate Password : Request the certificate file and certificate password from Sovos. Upload the certificate file to the Certificate field, and specify the password.

            Note: Sovos supports both TLS and non-TLS authentication mode. If a certificate is provided, Zuora uses the TLS endpoint to communicate with Sovos. If no certificate is provided, Zuora uses the non-TLS endpoint instead. Zuora doesn't recommend TLS authentication mode as it has been deprecated by Sovos..


    4.  Optional: Select the Test Environment check box.
    5.  For Avalara and Sovos, click Test Connection to verify the connection with the Avalara service provider.

        -   If the connection fails, update the API Key and Secret Key fields with correct credentials and click Test Connection. Repeat this step until the connection succeeds.
        -   If the connection succeeds, perform the next step.

5.  Click Save to save the settings.

Your e-invoicing service provider is set up.

To update information about your e-invoicing service provider, click the Edit icon in the upper right of the corresponding service provider section.

You are now ready to configure a business region for your e-invoicing service provider. For more information, see Configure e-invoicing business regions .
