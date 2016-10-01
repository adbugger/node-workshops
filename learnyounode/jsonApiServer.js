var url = require('url')
var http = require('http')
var server = http.createServer(function(request, response){
	if (request.method == 'GET') {
		var urlObj = url.parse(request.url, true)
		if (urlObj.pathname == '/api/parsetime'){
			var d = new Date(urlObj.query.iso)
			var time = {
				hour: d.getHours(),
				minute: d.getMinutes(),
				second: d.getSeconds()
			}
			response.writeHead(200, {'Content-Type': 'application/json'}) 
			response.write(JSON.stringify(time))
			response.end()
		}
		else if (urlObj.pathname == '/api/unixtime'){
			response.writeHead(200, {'Content-Type': 'application/json'})
			response.write(JSON.stringify({
				unixtime: new Date(urlObj.query.iso).getTime()
			}))
			response.end()
		}
	}  
})
server.listen(process.argv[2])