import {test, expect} from '@playwright/test';
import * as path from "path";
import { readCSV } from "../utils/readCSV";

let user: any;
const baseURL = 'https://automationexercise.com/api/';
const registerPath = 'createAccount';
const checkUserByMail = 'getUserDetailByEmail';
const verifyLogin = 'verifyLogin';
const deletUser = 'deleteAccount'
const fullURLWithRegisterPath = baseURL + registerPath;
const fullURLWithUserMail = baseURL + checkUserByMail;
const fullURLWithLogin = baseURL + verifyLogin;
const fullURLWithDelete = baseURL + deletUser;

test.beforeAll(async() =>
{
    // Reading CSV file
    const csvPath = path.join(__dirname, "../testData/testData.csv");
    const users = await readCSV(csvPath);
    
    // pointing to the 1st row
    user = users[0]; 
});


test('Create/Register User Account', async({request}) =>
{
    const response = await request.post(fullURLWithRegisterPath, 
        {
            multipart:
            {
                ...user
            }
        })

    let responseBody = await response.json();
    console.log(responseBody);
    console.log("\n");

    // Check response
    expect(responseBody.responseCode).toBe(201);
    expect(responseBody.message).toContain("User created!");
});


test('GET user account detai by email', async({request}) =>
{
    const response = await request.get(fullURLWithUserMail,
        {
            params:
            {
                email: user.email
            }
        })

    let responseBody = await response.json();
    console.log(responseBody);
    console.log("\n");

    // Check response
    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.user.name).toContain(user.name);
    expect(responseBody.user.email).toContain(user.email);
});


test('Verify Login with valid details', async({request}) =>
{
    const body =
    {
        email       : user.email,
        password    : user.password
    };

    const response = await request.post(fullURLWithLogin, 
        {
            multipart: body
        })

    let responseBody = await response.json();
    console.log(responseBody);
    console.log("\n");

    // Check response
    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.message).toContain("User exists!");
});


test('Verify Login without email parameter', async({request}) =>
{
    const body =
    {
        password    : user.password
    };

    const response = await request.post(fullURLWithLogin, 
        {
            multipart: body
        })

    let responseBody = await response.json();
    console.log(responseBody);
    console.log("\n");

    // Check response
    expect(responseBody.responseCode).toBe(400);
    expect(responseBody.message).toContain("Bad request, email or password parameter is missing in POST request.");
});


test('Verify Login with invalid details', async({request}) =>
{
    const body =
    {
        email       : "valid@valid.com",
        password    : "00"
    };

    const response = await request.post(fullURLWithLogin, 
        {
            multipart: body
        })

    let responseBody = await response.json();
    console.log(responseBody);
    console.log("\n");

    // Check response
    expect(responseBody.responseCode).toBe(404);
    expect(responseBody.message).toContain("User not found!");
});


test('Delete User Account', async({request}) =>
{
    const body =
    {
        email       : user.email,
        password    : user.password
    };

    const response = await request.delete(fullURLWithDelete, 
        {
            multipart: body
        })

    let responseBody = await response.json();
    console.log(responseBody);
    console.log("\n");

    // Check response
    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.message).toContain("Account deleted!");
});