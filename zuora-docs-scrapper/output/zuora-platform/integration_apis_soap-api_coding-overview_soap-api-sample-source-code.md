---
title: "SOAP API sample source code"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/coding-overview/soap-api-sample-source-code"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:05.922Z"
---

# SOAP API sample source code

This reference provides the SOAP API sample code in multiple programming languages.

Our GitHub site provides sample code in PHP, Java, .NET, and XML, which demonstrates the use of SOAP-based web services and the Zuora SOAP API. The links and tips below will help you get started.

Note: The sample code in GitHub is demonstration purposes only. These sample code examples have worked for in-house and external developers, but is not guaranteed to work in every situation.

## Java

The Java reference application is based on Apache Axis 1.4 and JDK 5.0 (Java 2 Platform Standard Edition Development Kit 5.0). For more information on Apache Axis 1.4, see [http://ws.apache.org/axis/](http://ws.apache.org/axis/).

The [Zuora quickStart Java toolkit](https://github.com/zuorasc/z-java), available on GitHub, contains code designed to help you begin using Zuora APIs, including the most common use cases and an example signup page.

You will need [Apache Ant](http://ant.apache.org/index.html) installed. Once you have Ant set up, you can run the reference application by invoking the following command:

`ant test run`

Ant is a Java-based build tool that uses XML-formatted files to perform the same types of functions as a make file. In addition to running the code, the `build.xml` file generates the object stubs and compiles and runs the code.

## C#

This is a simple UI that uses the Zuora Service C# wrapper to make various calls to Zuora.

Download the [C# sample code](https://github.com/zuorasc/c-sharp-quickstart) from Github.

## .NET

The .NET sample code shows how to handle authentication as well as querying for objects in the Z-Commerce Platform.

Download the [.NET sample code](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1787cd20-25db-49f4-8a31-13bae454e74d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE3ODdjZDIwLTI1ZGItNDlmNC04YTMxLTEzYmFlNDU0ZTc0ZCIsImV4cCI6MTc2NjY0MTA4MywianRpIjoiYmQyYTU1MzA1ZjkzNDM2OTk3YWY5YzM3NGYxYjU4NDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Dn7QO5Bls2s40ZrS87COFMExYvXh80ithArVXAnhjIE&response-content-disposition=attachment%3B+filename%3D%22Zuora_quickstart_net.zip%22)

## PHP

The PHP sample code gives illustrative examples for how to handle authentication, querying, updating and deleting. This PHP sample code requires PHP 5.

Download the [PHP sample code](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/62a19db4-2616-4d5a-8e99-231094327de4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYyYTE5ZGI0LTI2MTYtNGQ1YS04ZTk5LTIzMTA5NDMyN2RlNCIsImV4cCI6MTc2NjY0MTA4MywianRpIjoiOWVjMmZiNjliMzJmNGYyYjllMDhlOWI0NWQxYTk3NjYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.TkLLc90e397bHEydUjeVC8qnvYQlO7tmRqiSw_o7Ibw&response-content-disposition=attachment%3B+filename%3D%22Zuora_quickstart_php.zip%22)

## Ruby

This library will allow you to interact with the Zuora billing platform using ActiveModel based objects. You will need bundler, active\_support, savon, and wasabi to use this library.

Download the [Ruby sample code](https://github.com/zuorasc/zuora) from Github.

## XML

The XML shows proper SOAP calls for querying, deleting and updating objects as well as using subscriptions and amendments. Whether you develop in PHP, Java, .NET or any other language, the XML can help you quickly debug your SOAP applications.

Download the [XML sample code](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/815c396a-21b9-4832-b495-d59b898ffcc7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgxNWMzOTZhLTIxYjktNDgzMi1iNDk1LWQ1OWI4OThmZmNjNyIsImV4cCI6MTc2NjY0MTA4MywianRpIjoiYjNkYWVmNzJmM2RlNDViNjgxMTE1NTliZDcyYWM1OWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.9EpWBOizqUsSgy3Pb7nnPPcd1IDOBZvyDpsNN9mNmKY&response-content-disposition=attachment%3B+filename%3D%22Zuora_quickstart_xml.zip%22)
