const express = require('express');
const request = require('supertest'); //test web apis

const app = express(); //fake express app
app.use('/api', require('../routes/router.js'));


/*jest.mock("../database/person-names.json", () => {
    "persons": [
      {
      "name": "Annemette P.",
      "surname": "Nilsson",
      "gender": "female"
    },
    {
      "name": "Freja O.",
      "surname": "Thygesen",
      "gender": "female"
    },
    {
      "name": "Anna S.",
      "surname": "Jespersen",
      "gender": "female"
    },
    {
      "name": "Søren M.",
      "surname": "Kjær",
      "gender": "male"
    },
    {
      "name": "Elias A.",
      "surname": "Svendsen",
      "gender": "male"
    },
    {
      "name": "Mathias E.",
      "surname": "Lassen",
      "gender": "male"
    }]
  
}) //mock data
TODO: mock the json data - cannot make it work for now
*/

describe("server-routes", () => {
  it("GET /api/cpr-name-gender - success", async () => {
    const {body} = await request(app).get("/api/cpr-name-gender"); //use the request function that we can use the app// save the response
    expect(Object.keys(body).sort()).toEqual(['cpr', 'gender', 'name', 'surname']); //test all necessary keys
    expect(body.gender).toEqual(Number(body.cpr)%2 === 0 ? 'female' : 'male');//test match gender and cpr
  });

  it("GET /api/name-gender-dob - success", async () => {
    const {body} = await request(app).get("/api/name-gender-dob"); //use the request function that we can use the app// save the response
    expect(Object.keys(body).sort()).toEqual(['dob', 'gender', 'name', 'surname']); //test all necessary keys
  });

  it("GET /api/cpr-name-gender-dob - success", async () => {
    const {body} = await request(app).get("/api/cpr-name-gender-dob"); //use the request function that we can use the app// save the response
    expect(Object.keys(body).sort()).toEqual(['cpr', 'dob', 'gender', 'name', 'surname']);
  });

  it("GET /api/all - success", async () => {
    const {body} = await request(app).get("/api/all"); //use the request function that we can use the app// save the response
    expect(Object.keys(body).sort()).toEqual(['address', 'cpr', 'dob', 'gender', 'name', 'phoneNumber', 'surname']);
  });

  it("GET /api/all/bulk - success", async () => {
    testAmount = [-1, 1, 2, 3, 50, 99, 100, 101, 1000000, '', 'test', 5.5]; // cover edge cases and different types 

    for (value in testAmount) {
      const {body} = await request(app).get(`/api/all/bulk?amount=${value}`);
      const condition = body.length >= 2 && body.length <= 100;
      expect(condition).toEqual(true);  
    }
  });
});