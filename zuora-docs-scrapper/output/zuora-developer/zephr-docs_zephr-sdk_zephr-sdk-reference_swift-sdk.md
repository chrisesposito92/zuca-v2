---
title: "Swift SDK"
url: "https://developer.zuora.com/zephr-docs/zephr-sdk/zephr-sdk-reference/swift-sdk/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:47.527Z"
---

#

Swift SDK

The following guide provides documentation for the Zephr Swift SDK. If you need access to this SDK, please email [support@zuora.com.](mailto:support@zuora.com "support@zuora.com")

##

Installation

The Blaize Swift SDK can be added as a dependency of another Swift Package or as a Swift Package Dependency in Xcode.

To use this package, add the dependency

```text
https://bitbucket.org/blaizeinc/swift-sdk
```

##

Configuration

The Swift SDK requires you configure it with your tenantId before API calls can be made. Do this in your AppDelegate:

```swift
import UIKit
import Blaize

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(\_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: \[UIApplicationLaunchOptionsKey: Any\]?) -> Bool {
        BlaizeConfiguration.shared.tenantId = 'yourTenantId'
        // Override point for customization after application launch.
        return true
    }
}
```

Optionally, the Blaize environment can be provided, too:

```text
BlaizeConfiguration.shared.env = "staging"
```

It is possible to specify a base URL for the Blaize service, if it is non-standard (not normally needed):

```text
BlaizeConfiguration.shared.overrideBaseUrl  = "http://localhost:8080"
```

##

Public API Usage

###

Register

```swift
import Blaize

func register() {
    var attributes = \["first-name": "John","last-name": "Citizen"\]

    BlaizePublic.client.register(email: "johncit@blaize.io", password: "SomePassword1", attributes: attributes) { result in
        switch result {
        case .success(let blaizeSessionId):
            // persist blaizeSessionId
            print("Logged in")
        case .userAlreadyExists
            print("A user with that email address already exists... try resetting your password")
        case .emailDomainBlacklisted
            print("The email address you have supplied is not allowed for registration")
        case .badRequest
            print("One of more of the mandatory fields were not provided or are incorrect")
        }
    }
}
```

###

Login

```swift
import Blaize

func login() {
    BlaizePublic.client.login(email: "johncit@blaize.io", password: "SomePassword1") { result in
        switch result {
        case .success(let blaizeSessionId):
            // persist blaizeSessionId
            print("Logged in")
        case .userNotFound
            print("User not found")
        case .badPassword
            print("Password was incorrect")
        case .badRequest
            print("Something went wrong")
        }
    }
}
```

###

Create Anonymous Session

```swift
import Blaize

func anonymousSession() {
    BlaizePublic.client.anonymousSession() { result in
        switch result {
        case .success(let blaizeSessionId):
            // persist blaizeSessionId
            print("Anonymous session created")
        case .failure
            print("Something went wrong")
        }
    }
}
```

###

Logout

```swift
import Blaize

func logout() {
    BlaizePublic.client.logout(sessionId: "sessionId") { result in
        switch result {
        case .success:
            print("Logged out")
        case .failure
            print("Something went wrong")
        }
    }
}
```

###

Forget me

```swift
import Blaize

func forgetMe() {
    BlaizePublic.client.forgetMe(sessionId: "sessionId") { result in
        switch result {
        case .success:
            print("User deleted")
        case .failure
            print("Something went wrong")
        }
    }
}
```

###

Get User Profile

```swift
import Blaize

func getUserProfile() {
    BlaizePublic.client.getUserProfile(sessionId: "sessionId") { result in
        switch result {
        case .success(let profileResult):
            // do something with profileResult
        case .failure
            print("Something went wrong")
        }
    }
}
```

###

Update User Profile

```swift
import Blaize

func updateUserProfile() {
    // Set whether to merge or overwrite attributes
    let merge = true
    let attributes = \["first-name": "Jane"\]

    BlaizePublic.client.updateUserProfile(sessionId: "sessionId", attributes: attributes, merge: merge) { result in
        switch result {
        case .success:
            print("User profile updated successfully")
        case .failure
            print("Something went wrong")
        }
    }
}
```

###

Get Extended Profile

```swift
import Blaize

func getExtendedProfile() {
    BlaizePublic.client.getExtendedProfile(sessionId: "sessionId", appId: "appId") { result in
        switch result {
        case .success(let extendedProfile):
            // do something with extendedProfile
        case .failure
            print("Something went wrong")
        }
    }
}
```

###

Update Extended Profile

```swift
import Blaize

func entitlementChallenge() {
    let entitlementIds =  \["entId1", "entId2"\]
    BlaizePublic.client.entitlementChallenge(sessionId: "sessionId", entitlementIds: entitlementIds) { result in
        switch result {
        case .success(let entitlementChallenge):
            // do something with entitlementChallenge
            // if entitlementChallenge\["entId1"\] == true { ... }
        case .failure
            print("Something went wrong")
        }
    }
}
```

###

Entitlement challenge

```swift
import Blaize

func checkEntitlements() {
    let articleEntitlementId = "5341dc17-f91b-4311-b9ee-6906024c87a2"
    let videoEntitlementId = "2b7fa1f5-795d-459e-84eb-8e0c62fb018f"
    let response = BlaizePublic.client.challenge(\[articleEntitlementId, videoEntitlementId\])

    if response\[articleEntitlementId\] == nil {
        print("You cannot view articles")
    }

    if response\[videoEntitlementId\] == nil {
        print("You cannot view videos")
    }

}
```

###

Access Decision

```swift
import Blaize

func accessDecision() {
    BlaizePublic.client.accessDecision(
        sessionId: "sessionId",                     //required
        path: "/",                                  //optional
        httpMethod: .get,                           //optional
        requestHeaders: \["X-Custom": "true"\],       //optional
        contentMetadata: \["content\_id": "1234"\],    //optional
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6Ik..."    //optional
    ) { decision in
        // do something with decision
        // decision.status
        // decision.headers
        // decision.body
    }
}
```
