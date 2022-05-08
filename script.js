// BANK ACCOUNT

// Start by creating the object and the properties. You can leave the functions empty for now if you want.
// You'll find all the information about what properties the object should have in the readme file.

// In the deposit and withdrawal function use this code to show the prompt
//parseFloat(prompt("Put some proper message here"));
// You need to change the message of course. You should also do some research why parseFloat() is used here
// answer by making a comment in the code.

// Parsefloat is used to accept a string and convert it to a floating-point number. If the input does not contain a numeral value or if the first character of the string is not a number then it returns to NaN i.e not a number

// Be aware of that you need to add some code to this so you can display the actual input.

// the object properties should work as folowin:
// - the account holder name
// In the deposit and withdrawal function you also need to handle som potential errors.
// To handle one of the potential error you can use this piece of code
//isNaN(variableName);
// you need to change the variableName to your actual variable.
// you also need to check some other conditions here and use a logical operator.
// try to say the sentece out loud or think it:
// "A user should not be able to put 0 or negative numbers or empty string or a type that is not a number"
// Do you know what operator you should use?

// In the accountError and accountExit function you can use this to show a message to the user:
//alert("your code here and maybe properties");
// of course you need to put a proper message and you might need to display some of the properties.

// STARTER FUNCTION
var balance = 100.0; //set initial balance.

	function get_balance() {
		alert('Your current balance is: '+balance);
		atm();
	}

	function make_deposit() {
		var deposit = parseFloat(prompt('How much would you like to deposit?'));
		if (isNaN(deposit) || deposit === '') {
			alert('Error: please enter a number!');
			make_deposit();
		} else {
			balance += deposit;
			get_balance();
		}
	}

	function make_withdrawal() {
		var withdrawal = parseFloat(prompt('How much would you like to withdraw?'));
		if (isNaN(withdrawal) || withdrawal === '') {
			alert('Error: please enter a number!');
			make_withdrawal();
		} else {
      if(withdrawal>balance)
      alert("Not enough funds")
      else
			balance -= withdrawal;
			get_balance();
		}
	}

	function show_accountholder() {
		alert('Account holder is Sarah Nakalembe');
		atm();
	}

	function error() {
		alert('Error: accepted choices are 1 through 5');
		atm();
	}

	function exit() {
		var confirm_leave = confirm('You have selected to exit.');
		if (confirm_leave) {
			window.close();
		} else {
			atm();
		}
	}

	function atm() {

		var choice = parseInt(prompt('Select a choice 1) Balance 2) Deposit 3) Withdrawal 4) Accountholder 5) Exit')); //prompt user for choice.

		if (choice === 1) {
			get_balance();
		} else if (choice === 2) {
			make_deposit();
		} else if (choice === 3) {
			make_withdrawal();
    } else if (choice === 4) {
			show_accountholder();	
    } else if (choice === 5) {
			exit();
		} else {
			error();
		}
	}

	atm();
