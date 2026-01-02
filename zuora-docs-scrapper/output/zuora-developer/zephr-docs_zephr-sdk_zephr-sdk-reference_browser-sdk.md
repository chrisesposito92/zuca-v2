---
title: "Browser SDK"
url: "https://developer.zuora.com/zephr-docs/zephr-sdk/zephr-sdk-reference/browser-sdk/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:38.713Z"
---

#

Browser SDK

The Zephr Browser SDK is available to view in the [Zephr Bitbucket account](https://bitbucket.org/blaizeinc/browser-sdk/src/master/). If you have trouble accessing this page, please email [support@zuora.com](mailto:support@zuora.com "support@zuora.com").

##

Installation

The Zephr SDK for browsers supports AMD and CommonJS modules. If neither require nor define are on the global scope then a global obejct, `BlaizeSDK`, will be created.

```javascript
// for AMD or CommonJS
    var BlaizeSDK = require('/path/to/blaize-front-end-sdk.min.js');
```

The Zephr SDK for browsers uses the Zephr Public API  and will work with the `blaize_session` cookie to operate as the site visitor.

##

General usage

The SDK is built to be cross browsers and lightweight, therefore Promises and other ES6 features are not used.

All functions in the SDK accept a callback function that takes two parameters: an error message then a success response. You should check that the `error` parameter is falsey before continuing execution.

```javascript
BlaizeSDK.getAnonymousSession(function(error, success) {
    if (error) {
        console.log(error);
    } else {
        // do something now that you have an anonymous session
    }
});
```

All functions will also check the arguments passed to them before execution. If the SDK is being used incorrectly (i.e. a function is called with inappropriate parameters) an error message will be written to the console and the function will not execute; the callback will not be invoked at all.

##

SDK functions

###

getAnonymousSession

This function is used to set an anonymous session cookie. This method only needs to be called if you have disabled automatic anonymous user sessions within the Zephr Admin Console.

Arguments: \* callback

Example:

```javascript
function optIn() {
    BlaizeSDK.getAnonymousSession(function(error, success) {
        if (error) {
            console.log(error);
            document.querySelector('input.opt-in').value = false;
        } else {
            console.log('now tracking anonymous usage');
        }
    });
}
```

document.querySelector('input.opt-in').addEventListener('click', optIn);

An API reference is available in the Public API specification, under Authentication > Anonymous Session.

###

register

This function is used to register a new user and will set an authenticated session cookie.

Arguments: *user* callback

Example:

```javascript
function getEmailFromForm() {
    // get the user's email
}
function getPasswordFromForm() {
    // get the user's password
}
function getFirstNameFromForm() {
    // get the user's name
}

let user = {
    identifiers: {
        email\_address: getEmailFromForm()
    },
    validators: {
        password: getPasswordFromForm()
    },
    attributes: {
        first\_name: getFIrstNameFromForm()
    }
};

BlaizeSDK.register(user, function(error, success) {
    if (error) {
        console.log(error);
    } else {
        // do something now that the visitor is logged in
    }
});
```

An API reference is available in the Public API specification, under User > Register.

###

login

This function is used to authenticate an existing user and will set an authenticated session cookie.

Arguments: *user* callback

Example:

```javascript
function getEmailFromForm() {
    // get the user's email
}
function getPasswordFromForm() {
    // get the user's password
}

let user = {
    identifiers: {
        email\_address: getEmailFromForm()
    },
    validators: {
        password: getPasswordFromForm()
    }
};

BlaizeSDK.login(user, function(error, success) {
    if (error) {
        console.log(error);
    } else {
        // do something now that the visitor is logged in
    }
});
```

An API reference is available in the Public API specification, under Authentication > Login.

###

logout

This function is used to logout the current user and will delete their authenticated session cookie.

Arguments: \* callback

Example:

```javascript
BlaizeSDK.logout(function(error, success) {
    if (error) {
        console.log(error);
    } else {
        // do something now that the session is anonymous
    }
});
```

An API reference is available in the Public API specification, under Authentication > Logout.

###

forgetMe

This function is used to delete all data about the current user and will also remove their authenticated session cookie.

Arguments: \* callback

Example:

```javascript
BlaizeSDK.forgetMe(function(error, success) {
    if (error) {
        console.log(error);
    } else {
        // do something now that the session is anonymous
    }
});
```

###

entitlementChallenge

This function is used check whether the current user is entitled to certain content. The first argument is an array of Entitlements IDs (from the Zephr Admin API or Admin Console). The successful response object is a map from the Entitlement ID to a boolean.

Be aware that entitlement challenges may use credits from the user’s meter, so responses should not be cached.

Arguments: *entitlements* callback

Example:

```javascript
const articleEntitlement = '1234';
const videoEntitlement = '5678';

function loadArticleContent() {
    // do something here
}
function loadVideoContent() {
    // do something here
}

BlaizeSDK.entitlementChallenge(\[articleEntitlement, videoEntitlement\], function(error, results) {
    if (error) {
        console.log(error);
    } else {
        if (results\[articleEntitlement\]) {
            loadArticleContent();
        }
        if (results\[videoEntitlement\]) {
            loadVideoContent();
        }
    }
});
```

An API reference is available in the Admin API specification, under Entitlement > Entitlements.

###

getAccount

This function is used to retrieve account data (including email address) for the current user. The user must be logged in to use this function.

The successful response object is:

```javascript
{
    "identifiers": {
        "email\_address": "x@y.z"
    },
    "tracking\_id": "1234"
}
```

Arguments: \* callback

Example:

```javascript
BlaizeSDK.getAccount(function(error, account) {
    if (error) {
        console.log(error);
    } else {
        console.log(account.identifiers.email\_address);
    }
});
```

An API reference is available in the Public API specification, under User > Account.

###

getProfile

This function is used to retrieve the current user’s profile. The user must be logged in to use this function.

The successful response object is a map of user attributes to values. This depends upon the user schema created in the Admin API or Admin Console.

Arguments: \* callback

Example:

```javascript
BlaizeSDK.getProfile(function(error, profile) {
    if (error) {
        console.log(error);
    } else {
        console.log(profile\['first\_name'\]);
    }
});
```

An API reference is available in the Public API specification, under User > Account. Details on the User Schema are available in the Admin API Specification under User > Schema.

###

updateProfile

This function is used to update the current user’s profile. The user must be logged in to use this function.

The first argument is a map of user attributes to values. This depends upon the user schema created in the Admin API or Admin Console. The `merge` argument is a boolean flag; if true, the first argument is treated as a partial profile and will update the existing profile; if false, the first argument is treated as a complete profile and will completely replace any existing attributes (potentially removing attributes that are not in the update).

Arguments: *profile* merge \* callback

Example:

```javascript
function getJobTitleFromForm() {
    // get the user's job title
}

let update = {
    job\_title: getJobTitleFromForm()
};

BlaizeSDK.updateProfile(update, true, function(error, profile) {
    if (error) {
        console.log(error);
    } else {
        // do something
    }
});
```

An API reference is available in the Public API specification, under User > Account. Details on the User Schema are available in the Admin API Specification under User > Schema.

###

getExtendedProfileDocument

This function is used to retrieve a JSON document from the current user’s extended profile. The user must be logged in to use this function.

Note: while extended profiles may be non-JSON, the Public API only supports JSON data types to prevent CSRF attacks.

Arguments: *documentId* callback

Example:

```javascript
function prepareReadingList(topics) {
    // do something
}

BlaizeSDK.getExtendedProfileDocument('topics-to-follow', function(error, json) {
    if (error) {
        console.log(error);
    } else {
        prepareReadingList(json);
    }
});
```

An API reference is available in the Public API specification, under User > Extended Profile.

##

updateExtendedProfileDocument

This function is used to write a JSON document to the current user’s extended profile. The user must be logged in to use this function.

Note: while extended profiles may be non-JSON, the Public API only supports JSON data types to prevent CSRF attacks.

Arguments: *documentId* callback

Example:

```javascript
function getReadingList(topics) {
    // get some topics
    return \['fishing', 'politics'\];
}

BlaizeSDK.updateExtendedProfileDocument('topics-to-follow', getReadingList(), function(error, json) {
    if (error) {
        console.log(error);
    } else {
        // do something
    }
});
```

An API reference is available in the Public API specification, under User > Extended Profile.

###

listSubscriptions

This function is used to retrieve a list of the user’s current subscriptions. The user must be logged in to use this function.

Each subscription will include an external ID, a state, a Zephr product and an array of transactions.

The first argument must be the payment provider. Currently, only the Zephr Braintree integration supports listing subscriptions, so that value must be “braintree”.

Arguments: *provider* callback

Example:

```javascript
function renderTransactionHistory(subscriptions) {
    // do something
}

BlaizeSDK.listSubscriptions('braintree', function(error, subscriptions) {
    if (error) {
        console.log(error);
    } else {
        renderTransactionHistory(subscriptions);
    }
});
```
