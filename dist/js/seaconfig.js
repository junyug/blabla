(function() {
  'use strict';
  var bathPath, controllerPath;

  bathPath = "/dist/js";

  controllerPath = "/dist/js/controller";

  seajs.config({
    bath: bathPath,
    charset: "utf-8",
    debug: true,
    alias: {
      main: "" + bathPath + "/main",
      messageController: "" + controllerPath + "/messageController",
      accountController: "" + controllerPath + "/accountController",
      userController: "" + controllerPath + "/userController"
    }
  });

}).call(this);
