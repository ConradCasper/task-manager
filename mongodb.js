// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;


// vvvvvvvvv Destructured version of ^^^^^^^^^^^^^

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// ************ You can create your own IDs if you want to like here below *********

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);


    // **************************** Create *****************************************


    // db.collection('users').insertOne({
    //     name: 'Bikram',
    //     age: 68
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     };

    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert users')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'take out trash',
    //         completed: true
    //     },
    //     {
    //         description: 'walk dog',
    //         completed: false
    //     },
    //     {
    //         description: 'become senior dev',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // ********************************** Read ************************************


    // db.collection('users').findOne({ _id: ObjectID("5fbc206222c1decd4eb3fa92") },(error, user) => {
    //     if (error){
    //         return console.log('Unable to fetch user');
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     if (error) {
    //         return console.log('Unable to fetch documents');
    //     }
    //     console.log(count);
    // })

//     db.collection('tasks').findOne({ _id: ObjectID("5fbc1ad4dfa24fc3fca1020a") }, (error, task) => {
//         if (error) {
//             return console.log('Unable to fetch document');
//         }

//         console.log(task);
//     });

//     db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
//         if (error){
//             return console.log('Unable to fetch documents');
//         }

//         console.log(tasks);
//     });


// ************************* Update ********************************

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5fbc11091320fbb6cbfc09a9')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch(error => {
    //     console.log(error);
    // });

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });


    // ************************ Delete *************************


    


});