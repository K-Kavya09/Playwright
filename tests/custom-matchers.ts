import { expect as baseExpect, test as baseTest } from '@playwright/test';

// Add our own custom matcher

export const expect = baseExpect.extend({
    toHaveTextLength(received: string, expectedLength: number){

        const actualLength = received.length;
        const pass = actualLength === expectedLength;
        return {
            pass,
            message: () =>
                `Expected text length to be ${expectedLength}, but got ${actualLength}`
        };
    }
});

export const test = baseTest;