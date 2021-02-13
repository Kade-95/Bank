const jwt = require('jsonwebtoken');

function setToken(user) {
    const token = jwt.sign(
        user, process.env.SECRET, { expiresIn: '7d' }
    );

    return token;
}

async function validateToken(authentication) {
    const [auth, token] = authentication.split(' ');
    if (auth == 'Creeper') {
        try {
            const {id, username, roles} = await jwt.verify(token, process.env.SECRET);
            return {id, username, roles};
        } catch (error) {            
        }
    }
}

module.exports = {
    setToken, validateToken
}