const describe = require("mocha").describe;
const mongoose = require("mongoose");
const request = require("supertest");
const databaseURL = require("../config/config").databaseURL
const router  = require("../router/customerRouter")

// Customer Logic \\

describe("should test if ecommerce logic works", () => {
    let server; 

    before( (done) => {
        mongoose.connect(databaseURL, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
            server = router.listen(8002, () => console.log(`App testing on 8002!`));
            done();
        }); 
    })

    it("should reach main page /", (done) => {
        request(server)
        .get("/")
        .expect(200, done)
    })

    after( (done) => {
        server.close()
        mongoose.disconnect()
        console.log("Finished testing, server is closed")
        done();
    });
});