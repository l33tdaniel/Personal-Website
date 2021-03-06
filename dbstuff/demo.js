const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://discovandal:'insertpasswordhere'@cluster0.l7wvm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try{
        await client.connect();

        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}

// THIS WORKSSSSS this was all taken from a youtube vidoe to initially connect to the database