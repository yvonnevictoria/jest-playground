import React from 'react';
import { QuestionList } from './QuestionList';

describe(`the question list component`, () => {
    // demonstrate beforeEach() and beforeAll() statements
    beforeAll(() => {
        console.log('before all tests')
    });

    beforeEach(() => {
        console.log('before each test');
    });

    // demonstrate skipping and isolating tests

    /*
    it.only(`should display a list of items`, () => {
        console.log('this will be isolated');
    });

    it.skip(`should display a list of items again`, () => {
        console.log('this will be skipped');
    });
    */

    // demonstrate multiple ways to create async tests
    it(`should run async test using callback`, callback => {
        setTimeout(callback, 100);
    });

    it(`should run async test using promise`, () => {
        return new Promise(resolve =>
            setTimeout(resolve, 100)
        )
    });

    it (`should run async test using delay`,
        async () => await delay(100)
    );
    // delay is a method that returns a promise
});
