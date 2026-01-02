---
title: "Embed a payment form into your website"
url: "https://developer.zuora.com/docs/get-started/tutorials/collect-payments/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:41.522Z"
---

#

Embed a payment form into your website

The Payment Form feature provides an easy-to-use and secure payment method capture form that is PCI compliant. Once the payment method is captured, Zuora will use your payment gateway to verify the payment method. In the next tutorial, we'll show you how to complete an order and get paid in one call.

On our sample checkout page, we've highlighted the payment form as below.

![Payment Form Example](/55da817f3f35c2bea0ed56c8fee063bb/Payment-form.png)

To embed a payment form into your website, complete two steps:

1.  Configure a payment form in the Zuora UI.

    A default payment form is pre-configured for your tenant. You can directly use it, customize it, or set up a new one, easily managing options like regional payment methods, additional form fields, layout, and themes. You can preview changes in real time. See [Configure payment forms](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Form/C_Configure_payment_forms) for more information.

2.  Integrate the payment form to your website with minimal code.

    Download the Payment Form integration sample code, and follow the implementation guide to swiftly integrate the payment form to your website based on the sample code. Follow [Payment form implementation guide](https://developer.zuora.com/docs/get-started/tutorials/payment-form/) to integrate a Payment Form into your website.


If Payment Form does not meet your business needs, you can consider [Payment Pages 2.0](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Page_and_Payment_Link/Payment_Pages_2.0) as an alternative. This solution supports additional gateways and payment methods, along with more flexible configuration options. It may require more integration effort. For guidance, see the [example tutorial to deploying Payment Pages 2.0](https://developer.zuora.com/docs/payment-page/payment-page-tutorial/) and [documents](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Page_and_Payment_Link/Payment_Pages_2.0) in our Knowledge Center.

Note that Payment Form is the latest and recommended payment solution.
