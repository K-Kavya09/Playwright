import { test, expect } from '@playwright/test';

test('API chaining - create, update, read and delete', async ({ request }) => {
    // CREATE
    const createResponse = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data: {
                title: 'original Title',
                body: 'Original content',
                userId: 1
            }
        }
    );
    expect(createResponse.status()).toBe(201);
    const createdPost = await createResponse.json();
    const postId = createdPost.userId;

    // UPDATE the same post.

    const updateResponse = await request.put(
        `https://jsonplaceholder.typicode.com/users/${postId}`,
        {
            data: {
                id: postId,
                title: 'Updated Title',
                body: 'Updated content',
                userid: 1
            }
        }
    );
    expect(updateResponse.status()).toBe(200);
    // READ again and verify the update.
    const getResponse = await request.get(
        `https://jsonplaceholder.typicode.com/users/${postId}`
    );

    expect(getResponse.status()).toBe(200);
    // DELETE the same post.
    const deleteResponse = await request.delete(
        `https://jsonplaceholder.typicode.com/users/${postId}`
    );
    expect(deleteResponse.status()).toBe(200);
});