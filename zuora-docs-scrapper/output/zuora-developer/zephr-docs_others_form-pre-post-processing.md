---
title: "Form pre/post processing"
url: "https://developer.zuora.com/zephr-docs/others/form-pre-post-processing/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:41.066Z"
---

#

Form pre/post processing

This guide describes how to use Zephr form pre/post processing on your Zephr CDN proxied site.

All forms served by Zephr come with JavaScript hooks for pre/post processing of form data.

##

Form Preprocessor Registration

Form preprocessors will execute immediately after the user submits a form, before form data has been sent to Zephr.

To register a form preprocessor, pass a form slug and processor callback to

`window.Blaize.registerFormPreProcessor('formSlug', processorFunction)`

The processor callback will be called with one argument containing the form data. If the form data is modified, it must be returned by the processor callback to be sent to Zephr.

The following example adds a form preprocessor to the login form and logs out the users attributes:

```javascript
window.Blaize.registerFormPreProcessor('login', (formData) =>
{
    // Process formData
    console.log(formData.attributes);
    return formData;
});
```

##

Form Postprocessor Registration

Form postprocessors will execute after Zephr responds to a form submission.

To register a form postprocessor, pass a form slug and processor callback to

`window.Blaize.registerFormPostProcessor('formSlug', processorFunction).`

The processor callback will be called with two arguments, the first being the form data and the second the response from Zephr.

The following example adds a form postprocessor to the login form, prints the response error message if the request failed; otherwise prints a success message:

```javascript
window.Blaize.registerFormPostProcessor('login', (formData, response) => {
    if (response.status !== 200 || response.status !== 201 ) {
        _c_onsole.log(response.message);
    } else {
        console.log(\`${formData.identifiers.email\_address} successfully submitted form\`);
    }
});
```
