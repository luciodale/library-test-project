'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./org-libname.cjs.prod.js");
} else {
  module.exports = require("./org-libname.cjs.dev.js");
}
