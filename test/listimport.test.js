var should = require("should");

describe("listimport", function() {

  it("recognizes @import", function() {
    var imports = require("!./helpers/stylus-import-loader.js!./fixtures/imports/import.styl");
    imports.should.be.eql(['local-file.styl']);
  });

  it("recognizes @require", function() {
    var imports = require("!./helpers/stylus-import-loader.js!./fixtures/imports/require.styl");
    imports.should.be.eql(['local-file.styl']);
  });

  it("recognizes use()", function() {
    var imports = require("!./helpers/stylus-import-loader.js!./fixtures/imports/use.styl");
    imports.should.be.eql(['neat-functions.js']);
  });

  it("recognizes block-level imports", function() {
    var imports = require("!./helpers/stylus-import-loader.js!./fixtures/imports/block-level.styl");
    imports.should.be.eql(['outside-block.styl', 'inside-block.styl', 'nested-inside-block.styl'])
  })

});
