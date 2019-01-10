const Path = require('path');
const InitServer = require('./initServer');
console.log(Path.join(__dirname,'./project'));
const initServer = new InitServer({
        port: parseInt(process.env.PORT) || 3000,
        host: process.env.HOST || '0.0.0.0',
        routes: {
                files: {
                    relativeTo: Path.join(__dirname, './project')
                }
        },
        app: {}
});

initServer.init();