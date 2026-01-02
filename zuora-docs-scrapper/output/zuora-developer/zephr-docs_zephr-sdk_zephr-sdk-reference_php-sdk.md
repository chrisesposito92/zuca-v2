---
title: "PHP SDK"
url: "https://developer.zuora.com/zephr-docs/zephr-sdk/zephr-sdk-reference/php-sdk/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:48.245Z"
---

#

PHP SDK

The Zephr PHP SDK is available to view in the [Zephr Bitbucket account](https://bitbucket.org/blaizeinc/blaize-php-sdk). If you have trouble accessing this page, please email [support@zephr.com](mailto:support@zephr.com).

##

Client-side SDK

Due to PHP’s nature as a largely server-side language, there is no client-side SDK for PHP.

For websites you should use the [Browser SDK](https://developer.zuora.com/zephr-docs/zephr-sdk/zephr-sdk-reference/browser-sdk/ "Browser SDK").

##

Server-side SDK

The Java and Node server-side SDKs are essentially REST clients which perform HMAC request signing for the API. The PHP SDK is similar but provides HTTP client functionality through php-http, to maintain standard interoperability. Therefore, the SDK consists of the following tools:

-   HmacSigner.php : this class is used to sign Blaize API requests. This is typically the hardest part of using the Admin API directly so provides most of the value when using a Blaize Server-side SDK.
-   BlaizeAuthPlugin.php : this class is a php-http plugin, it will call the HmacSigner class automatically upon each request, adding the Authorization header based upon the request itself.
-   AdminApiClient.php : this is a lightweight implementation of php-http, using Guzzle6 (as a pooled client) with the BlaizeAuthPlugin.
-   generateAuthorizationHeader.php : this is a script that can be called from the command line to generate a Blaize Authorization header – usually for testing.

In order to make requests to the Admin API you will need to first create a keypair, which you can do in the Blaize Admin Console. For more information on how to do this, read our [Keypairs guide.](https://developer.zuora.com/zephr-docs/zephr-api/zephr-api-tutorials/hmac-request-signing-and-key-pair/ "HMAC Request Signing and Key Pairs")

###

Using the HmacSigner

```php
require\_once('./HmacSigner.php');

// This must be the exact bytes sent over the wire
$body = $request->getBody()->getContents();

// This should be the path part of the URI plus fragments and query params but not the host and protocol - it must exactly match what the server receives
$path = preg\_replace("|https?://\[^/\]+/|i", "/", $request->getRequestTarget());

// This is the HTTP method, for example GET or POST
$method = $request->getMethod();

// Milliseconds since the epoc. You clock must be accurate or the request will be disallowed
$timestamp = strval(round(microtime(true)\*1000));

// Any random string - you cannot reuse nonces frequently, so ensure it is randomized
$nonce = uniqid();

// The access key from your API keypair
$accessKey= getAccessKeySecurely();
// The secret from your API keypair
$secretKey = getSecretKeySecurely();

// It is recommended that you always use "SHA256"
$signer = new HmacSigner("SHA256");

// Generate the signature usign the helper
$signature = $signer->signRequest($secretKey, $body, $path, $method, $timestamp, $nonce);

// To use the signature construct an authorization header as follows:
$authHeader = "BLAIZE-HMAC-SHA256 $accessKey:$timestamp:$nonce:$signature";
```

###

Using the BlaizeAuthPlugin with php-http

```php
$client = new PluginClient(HttpClientDiscovery::find(), \[new BlaizeAuthPlugin($accessKey, $secretKey)\]);
$client->sendRequest($request);
```

###

Using the AdminApiClient

```php
require\_once('AdminApiClient.php');
require\_once('./vendor/autoload.php');

use Http\\Discovery\\MessageFactoryDiscovery;

$blaizeAdminClient = AdminApiClient::build("44501ace-c533-4b9e-b4ea-cfa24d18c179", "1a3eadb4-1f54-470f-a0aa-1cf233f65bdd");

// The AdminApiClient still uses php-http so use an appropriate message factory from there
$messageFactory = MessageFactoryDiscovery::find();

$registerRequestBody = array(
            "identifiers" =>
                array("email\_address" => "bob@bobberson.bob"),
        "validators" =>
                array("password" => "sup3rS3cr3t!"),
        "attributes" =>
                array("job-title" => "dogsbody", "allow-marketing" => "true", "company" => "Test-co"));

$registerRequest = $messageFactory->createRequest('POST', 'https://demo.admin.blaize.io/v3/users', array("Content-Type" => "application/json"), json\_encode($registerRequestBody));

// The public member "httpClientPool" exposes the php-http client pool interface
$registerResponse = $blaizeAdminClient->httpClientPool->sendRequest($registerRequest);

echo "Blaize responded with status: $registerResponse->getStatusCode() \\n";
echo $registerResponse->getBody()->getContents();
```
