const bcrypt = require('bcryptjs');

async function encrypt_password(password) {
    try {
        console.log(password)
        const salt = await bcrypt.genSalt(10);
        const encrypted_password = await bcrypt.hash(password, salt);
        console.log(encrypted_password)

        return encrypted_password;
    } catch(error) {
        console.error(`Error: ${error}`);
        throw err;
    };
};

module.exports = encrypt_password;