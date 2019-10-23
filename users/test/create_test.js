const assert = require('assert');
const User = require('../src/user')

describe('Creating records', () => {
    it('saves a user', (done) => {
        const shiv = new User({ name: 'Shiv' });

        shiv.save()
            .then(() => {
                assert(!shiv.isNew);
                done();
            });
    });
});