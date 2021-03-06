const http = require('http');

const fourohfour = (res) => {
	res.statusCode = 404;
	res.end('404 Not Found');
};

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'application/javascript'});

	let parts = req.url.split('/');
	parts.shift();

	if (parts.length != 3
		|| parseInt(parts[0]) != parts[0]
		|| parseInt(parts[1]) != parts[1]
	) {
		return fourohfour(res);
	}

	let array = [],
		start = parseInt(parts[0]),
		end = parseInt(parts[1]),
		cb = parts[2];

	if (start >= end) {
		return fourohfour(res);
	}

	for (var i = start;i <= end; i++) {
		array.push(i);
	}

	res.end(`${cb}(${JSON.stringify(array)});`);
}).listen(8080);
