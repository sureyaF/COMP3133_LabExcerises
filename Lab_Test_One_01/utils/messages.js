const moment = require(`moment`)

function formatMessage(username, text) {
    return {
        username,
        text,
        time: moment().format(`MM-DD-YYYY h:m a`)
    }
}

module.exports = formatMessage;