var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/json"
};

exports.collectData = function(request, cb){
  var data = "";
  request.on("data", function(chunk){
    data += chunk;
  });
  request.on("end", function(){
    cb(null, JSON.parse(data));
  });
};

exports.sendResponse = function(response, obj, status){
  status = status || 200;
  response.writeHead(status, headers);
  var string = JSON.stringify(obj);
  console.log("Sending: %s", string);
  response.end(string);
};
