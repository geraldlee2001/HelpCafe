import crypto from 'crypto'
import { nanoid } from 'nanoid'

// const { executeQuery } = require('./db');

async function createUser({ email, password,phoneNum }) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
        .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
        .toString('hex');
    const user = {
        id:nanoid(),    
        email,
        hash,
        phoneNum
    };

    try {
        const result = await excuteQuery({
            query: 'INSERT INTO users (userID,email,passwords,phoneNum) VALUES(?,?,?,?)',
            values: [user.id,user.email, user.hash,user.phoneNum],
        });
        console.log( result );
    } catch ( error ) {
        console.log( error );
    }

    return user;
}

// Here you should lookup for the user in your DB
async function findUser({ email }) {
    try {
        const result = await excuteQuery({
            query: 'SELECT * FROM users WHERE email = ?',
            values: [ email ],
        });
        return result[0];
    } catch (error) {
        console.log(error);
    }
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
async function validatePassword(user, inputPassword) {
    const inputHash = crypto
        .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
        .toString('hex');
    const passwordsMatch = user.hash === inputHash;
    return passwordsMatch;
}

export {
    createUser,
    findUser,
    validatePassword
};