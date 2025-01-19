# Gym Membership Management System.

This document provides UML diagrams for a Gym Membership Management System. The system is designed to manage gym memberships, track member activities, and handle payments. The following UML diagrams illustrate the structure and behavior of the system:

## Features:

 ** Member Management:**
   * Register new members.
   * Renew memberships.
   * View and update member profiles.
   * Track member attendance and activity logs.
   * Manage member suspensions and cancellations.

 ** Membership Management:**
   * Create and manage different membership plans (e.g., Basic, Premium, VIP).
   * Define membership benefits and pricing.

 ** Transaction Management:**
   * Process membership fees, activity fees, and other payments.
   * Generate invoices and receipts.
   * Track payment history and refunds.

 ** Activity Tracking:**
   * Schedule and manage group classes and personal training sessions.
   * Track member attendance in classes and activities.
   * Maintain equipment inventory and usage logs.

 ** Reporting:**
   * Generate reports on membership sales, revenue, member activity, and other key metrics.
<br>

## UML Class Case Diagram
The Class Diagram shows the static structure of the system, including the classes, their attributes, methods, and relationships.

## **Here are the classes and methods for our system:**

```plaintext
class Member {
    - memberID: int
    - firstName: string
    - lastName: string
    - email: string
    - phone: string
    - membershipType: string
    - registrationDate: Date
    - membershipExpiryDate: Date
    - status: string
    - {static} nextMemberId: int = 1

    + Member(firstName: string, lastName: string, email: string, phone: string, membershipType: string)
    + register(): void
    + renewMembership(): void
    + updateProfile(): void
    + static getNextMemberId(): int
}

class Membership {
    - membershipID: int
    - membershipType: string 
    - description: string
    - monthlyFee: decimal
    - benefits: list<string>
    - {static} membershipTypes: list<string> = ["Basic", "Premium", "VIP"] 

    + Membership(membershipType: string, description: string, monthlyFee: decimal, benefits: list<string>)
    + getBenefits(): list<string>
    + static getMembershipTypes(): list<string>
}

class Transaction {
    - transactionID: int
    - memberID: int
    - transactionDate: Date
    - amount: decimal
    - transactionType: string
    - description: string
    - {static} nextTransactionId: int = 1

    + Transaction(memberID: int, amount: decimal, transactionType: string, description: string)
    + getTransactionDetails(): string
    + static getNextTransactionId(): int
}

class Activity {
    - activityID: int
    - activityName: string
    - description: string
    - equipmentUsed: list<string>
    - {static} nextActivityId: int = 1

    + Activity(activityName: string, description: string, equipmentUsed: list<string>)
    + getActivityDetails(): string
    + static getNextActivityId(): int
}

Member "1" --> "*" Transaction
Member "1" --> "*" Activity 
```
<br>
# Attached is the Link to Lucidchart for UMl Class Diagram and UMl UseCase Diagram.
i. https://lucid.app/lucidchart/7fccaa90-21f7-4791-9506-6b9c8146a1f1/edit?viewport_loc=80%2C-1780%2C940%2C669%2CRC9J8Qj_Aj0r&invitationId=inv_62cdb4af-50c0-410b-a9c1-d1980665b1a1
<br>
# The Link to Medium for My Article on UMl Versions, Tools, and My findings Using Lucidchart as the Tool.
https://medium.com/@okoyechukwunonso17/uml-versions-modeling-tools-and-lucidchart-3f128cfb393e