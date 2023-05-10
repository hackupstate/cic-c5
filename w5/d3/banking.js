//Making a new array (because of the [square brackets])
//We need an array because we are storing multiple values. It's like a list of accounts.
let accounts = [
	//making a new object with keys of id, type, and balance and values that come after the :
	{ id: 1, type: "checking", balance: 100 },
	{ id: 2, type: "savings", balance: 50 },
	{ id: 3, type: "savings", balance: 350 },
	{ id: 4, type: "checking", balance: 350 },
];

//Start the sum at 0 so we have something to add to.
let sum = 0;

//Loop through eahc of the accounts in the accounts array so we can get access to each one individually
for (const account of accounts) {
	//check the account from the loop type (which is a key from the object) to see if it equals "checking"
	if (account.type === "checking") {
		//if the account type is checking, then add this accounts balance to the running sum
		sum = sum + account.balance;
	}
} //end of the loop, we've processed all four accounts

//Output out the sum we calculated in the loop above
console.log(sum);
