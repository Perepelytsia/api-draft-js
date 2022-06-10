const request = require("supertest")("http://localhost:8736");
const expect = require("chai").expect;


describe("digits", function() {
   it("comparison", function() {
      expect(100).to.equal(100);
      expect(200).to.equal(200);
      expect(300).to.equal(300);
   });
});

describe("api", function() {
   it("username=Flavio", async function () {
      const response = await request.get("/");
      expect(response.status).to.eql(200);
      //console.log(response.body)
      expect(response.body).to.eql({ username: 'Flavio' });
   });
});
