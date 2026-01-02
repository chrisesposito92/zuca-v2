---
title: "Zuora client libraries"
url: "https://developer.zuora.com/docs/guides/libraries/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:15:48.649Z"
---

#

Zuora client libraries

Zuora client libraries (also known as SDKs) make it easy for developers to start using and integrating with the Zuora REST APIs.

This section contains the installation instructions to access these libraries in several popular server-side programming languages.

For the sample codes in different use cases, see [Tutorials](/docs/get-started/tutorials/).

##

Access Zuora client libraries

###

Java library

####

Maven

We provide a Java library, which you can use by adding the following dependency to the `pom.xml` file of your project:

```xml
<dependency>
    <groupId>com.zuora.sdk</groupId>
    <artifactId>zuora-sdk-java</artifactId>
    <version>$version</version>
</dependency>
```

Make sure to replace `$version` with the latest [Zuora Java library](https://mvnrepository.com/artifact/com.zuora.sdk/zuora-sdk-java) version.

See [Java library reference documentation](https://developer.zuora.com/sdk-references/java-sdk-reference/) for detailed classes and methods in Java client library.

####

Gradle

Add `zuora-sdk-java` to the dependencies block of your `build.gradle` file:

```shell
dependencies {
  implementation("com.zuora.sdk:zuora-sdk-java:$version")
  // ...
}
```

Make sure to replace `$version` with the latest [Zuora Java library](https://mvnrepository.com/artifact/com.zuora.sdk/zuora-sdk-java) version.

See [Java library reference documentation](https://developer.zuora.com/sdk-references/java-sdk-reference/) for detailed classes and methods in Java client library.

###

Node.js library

Install the Zuora Node.js library by running the following command:

```shell
npm i zuora-sdk-js
```

For more information about Zuora Node.js libraries, check [Zuora JS SDK](https://www.npmjs.com/package/zuora-sdk-js).

See [Node.js library reference documentation](https://developer.zuora.com/sdk-references/node-sdk-reference/) for detailed classes and methods in Node.js client library.

###

Python library

Install the Zuora Python library by running the following command:

```shell
pip install zuora-sdk
```

For latest released versions of the Zuora Python library, check [Zuora Python SDK - Release history](https://pypi.org/project/zuora-sdk/#history).

See [Python library reference documentation](https://developer.zuora.com/sdk-references/python-sdk-reference/) for detailed classes and methods in Python client library.

###

C# library

####

Using .NET Core CLI

Install the Zuora C# library by running the following .NET Core CLI command:

```shell
dotnet add package ZuoraSDK
```

####

Using NuGet CLI

Install the Zuora C# library by running the following NuGet CLI command:

```shell
nuget install ZuoraSDK
```

For more information about installing NuGet CLI, see [Nuget CLI installation documentation](https://learn.microsoft.com/en-us/nuget/reference/nuget-exe-cli-reference).

####

Using the Package Manager Console

Install the Zuora C# library by using the Visual Studio [NuGet Package Manager Console](https://docs.microsoft.com/en-us/nuget/tools/package-manager-console):

```shell
Install-Package ZuoraSDK
```

####

Install within the Visual Studio

You can choose to install Zuora C# client library within Visual Studio by following the steps below. For more information about installing a package within Visual Studio, see [Install and manage packages in Visual Studio](https://learn.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio).

1.  Open the **Solution Explorer** in Visual Studio.
2.  Right-click on a project within your solution.
3.  Click **Manage NuGet Packages**.
4.  Click the **Browse** tab and search for `ZuoraSDK`.
5.  Select the **ZuoraSDK** package, then select the appropriate version in the right-tab and click **Install**.

For latest released versions of the Zuora C# library, check [Zuora C# SDK on NuGet](https://www.nuget.org/packages/ZuoraSDK/).

See [C# library reference documentation](https://developer.zuora.com/sdk-references/csharp-sdk-reference/) for detailed classes and methods in the C# client library.

##

Limitations

-   The Zuora client libraries do not provide support for Zephr and Togai.
-   The Zuora client libraries do not support the following API operations:
    -   [Prepaid with Drawdown](https://developer.zuora.com/v1-api-reference/api/tag/Prepaid-with-Drawdown/)
    -   [Payment Profiles](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Profiles/)
    -   [SCIM](https://developer.zuora.com/v1-api-reference/api/tag/SCIM/)
    -   [API Health](https://developer.zuora.com/v1-api-reference/api/tag/API-Health/)
    -   [Bill Run Health](https://developer.zuora.com/v1-api-reference/api/tag/Bill-Run-Health/)
    -   [Electronic Payments Health](https://developer.zuora.com/v1-api-reference/api/tag/Electronic-Payments-Health/)
    -   [Tax Health](https://developer.zuora.com/v1-api-reference/api/tag/Tax-Health/)
