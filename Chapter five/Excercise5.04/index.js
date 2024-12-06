function isEligibleForFreeDelivery(distance, hasMembership) {
    // Customers within 1 mile are not eligible
    if (distance < 1) {
        return false;
    }
    // Customers within 5 miles are eligible
    if (distance <= 5) {
        return true;
    }
    // Customers within 10 miles are eligible only if they have a membership
    if (distance <= 10 && hasMembership) {
        return true;
    }
    // Otherwise, customers are not eligible
    return false;
}

// Example usage:
console.log(isEligibleForFreeDelivery(0.5, true)); // false
console.log(isEligibleForFreeDelivery(3, false)); // true
console.log(isEligibleForFreeDelivery(7, true)); // true
console.log(isEligibleForFreeDelivery(7, false)); // false
console.log(isEligibleForFreeDelivery(12, true)); // false
