(function() {
  var WebSocket, ws;

  WebSocket = require("ws").Server;

  ws = new WebSocket({
    port: 4000
  });

  ws.broadcast = function(data) {
    var client, _i, _len, _ref, _results;
    _ref = this.clients;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      client = _ref[_i];
      _results.push(client.send(data));
    }
    return _results;
  };

  ws.on("connection", function(client) {
    client.on('message', function(message) {
      console.log('received: %s', message);
      return ws.broadcast("广播消息：" + message);
    });
    client.send("欢迎使用websocket");
    return client.on("close", function() {
      console.log("一个客户端断开连接");
      return ws.broadcast("客户端断开连接");
    });
  });

}).call(this);
