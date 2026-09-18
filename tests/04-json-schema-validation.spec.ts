import { test, expect, request } from '@playwright/test';
import Ajv from 'ajv';
const ajv = new Ajv();

// Expected structure of one user.

const userSchema = {
    type: 'object',
    properties: {
        id : { type: 'number'},
        name: { type: 'string'},
        email: { type: 'string'}
    },
    required: ['id', 'name', 'email']
};

  test('validtae API response using json schema', async({request}) =>
    {
        const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
        const body = await response.json();
        console.log(body);
        const validate = ajv.compile(userSchema);
        const isValid = validate(body);
        expect (isValid).toBe(true);
});
/*
 * JSON Schema:
 * Describes the expected structure and data types of an API response.
 * Schema = a blueprint that defines the expected structure, fields, and data types of API data.
 *
 * AJV:
 * A library that validates real JSON data against a JSON Schema.
 *
 * Why use schema validation?
 * Checking many fields one by one becomes repetitive.
 * A schema lets us describe the expected structure once.
 */
 
//npm install --save-dev ajv