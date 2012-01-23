getUserByUsername('karboh', function(user){
	getAccountsByUserId(user.Id, function(accounts){
		getTransactions(accounts.filter( isPrimaryAccount )[0], function(transactions){
			transactionView.setModel(transactions);
		});
	});
});

waterfall(
	getUserByUsername.bind(null, 'karboh'),
	function(user, cb){ cb(user.id); },
	getAccountsByUserId,
	function(accounts, cb){
		getTransactions(accounts.filter( isPrimaryAccount )[0], cb);
	},
	function(transactions){
		transactionView.setModel(transactions);
	}
);