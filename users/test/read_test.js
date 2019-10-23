const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the databse', () => {
    let shiv;

    beforeEach(() => {
        shiv = new User({ name: 'Shiv' });
        shiv.save()
            .then(() => done());
    });

    it('finds all users with a name of shiv', (done) => {
        User.find({ name: 'Shiv' })
            .then((users) => {
                assert(users[0]._id.toString() === shiv._id.toString())
                done();
            })
    });
});