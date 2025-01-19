class Member {
    static nextMemberId = 1; 
  
    constructor(firstName, lastName, email, phone, membershipType) {
      this.memberID = Member.nextMemberId++;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phone = phone;
      this.membershipType = membershipType;
      this.registrationDate = new Date();
      this.membershipExpiryDate = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days from registration
      this.status = "Active"; 
    }
  
    register() {
      console.log(`${this.firstName} ${this.lastName} registered successfully.`); 
    }
  
    renewMembership() {
      this.membershipExpiryDate = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days from today
      console.log(`${this.firstName} ${this.lastName} membership renewed.`); 
    }
  
    static getNextMemberId() {
      return Member.nextMemberId;
    }
  }
  
  class Membership {
    static membershipTypes = ["Basic", "Premium", "VIP"];
  
    constructor(membershipType, description, monthlyFee, benefits) {
      this.membershipID = Membership.membershipTypes.indexOf(membershipType) + 1; // Simple ID assignment
      this.membershipType = membershipType;
      this.description = description;
      this.monthlyFee = monthlyFee;
      this.benefits = benefits;
    }
  
    getBenefits() {
      return this.benefits;
    }
  
    static getMembershipTypes() {
      return Membership.membershipTypes;
    }
  }
  
  class Transaction {
    static nextTransactionId = 1;
  
    constructor(memberID, amount, transactionType, description) {
      this.transactionID = Transaction.nextTransactionId++;
      this.memberID = memberID;
      this.transactionDate = new Date();
      this.amount = amount;
      this.transactionType = transactionType;
      this.description = description;
    }
  
    getTransactionDetails() {
      return `Transaction ID: ${this.transactionID}, Amount: ${this.amount}, Type: ${this.transactionType}`;
    }
  
    static getNextTransactionId() {
      return Transaction.nextTransactionId;
    }
  }
  
  class Activity {
    static nextActivityId = 1;
  
    constructor(activityName, description, equipmentUsed) {
      this.activityID = Activity.nextActivityId++;
      this.activityName = activityName;
      this.description = description;
      this.equipmentUsed = equipmentUsed;
    }
  
    getActivityDetails() {
      return `${this.activityName} - ${this.description}`;
    }
  
    static getNextActivityId() {
      return Activity.nextActivityId;
    }
  }
  
  // Example usage
  const basicMembership = new Membership(
    "Basic",
    "Basic gym access",
    50,
    ["Gym access", "Free towel"]
  );
  
  const member1 = new Member("Chukwunonso", "Sylva", "chukwunonsosylva@gmail.com", "081-456-7890", "Basic");
  member1.register();
  member1.renewMembership(); 
  
  const paymentTransaction = new Transaction(member1.memberID, 50, "Payment", "Membership Fee");
  console.log(paymentTransaction.getTransactionDetails());
  
  console.log("Available Membership Types:", Membership.getMembershipTypes());