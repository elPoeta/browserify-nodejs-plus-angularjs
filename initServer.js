const Hapi = require('hapi');


class InitServer{
    constructor(args){
        this.server = Hapi.server(args);
    }

    async init(){
        try{
        
            
            await this.server.register([
              {
                plugin: require('inert')
              },
              
            ]);
            await this.routing();
            await this.server.start();
            console.log(`Server Hapi running on: ${this.server.info.uri}`);
        }catch (err){
            console.error(`Hapi error starting server ${err.message}`);
            process.exit(1);
        }
    }
    
    async routing(){
        this.server.route({
            method: 'GET',
            path: '/{param*}',
            handler: {
                directory: {
                    path: './',
                    listing: true
                }                
            }
    }); 
}
}
module.exports = InitServer; 
