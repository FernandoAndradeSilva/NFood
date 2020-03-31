const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://nofoodadmin:nofood@cluster0-vdded.gcp.mongodb.net/nofood?retryWrites=true&w=majority'
    },
    Security: {
        secretKey: '62506be34d574da4a0d158a67253ea99'
    }
}
module.exports = variables;