babel:
		babel $1.js -o $1-compiled.js --source-maps
		node $1-compiled.js