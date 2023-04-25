//sudo /home/usuario/mongodb/bin/mongod --dbpath /home/usuario/mongodb-data/ -> terminal 1
// mongosh  -> terminal 2
// mejor , vuelve a mirar el primer apartado de los apuntes, se explica mejor que tu

// import { MongoClient } from 'mongodb';

// const dbURL = 'mongodb://127.0.0.1:27017';
// const dbName = 'notes-app';

// interface NoteInterface {
//   title: string,
//   body: string,
//   color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// MongoClient.connect(dbURL).then((client) => {
//   const db = client.db(dbName);

//   return db.collection<NoteInterface>('notes').insertMany([
//     {
//       title: 'Yellow note',
//       body: 'This is a yellow note',
//       color: 'yellow',
//     },
//     {
//       title: 'Magenta note',
//       body: 'This is a magenta note',
//       color: 'magenta',
//     },
//   ]);
// }).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// import { MongoClient, ObjectId } from 'mongodb';

// const dbURL = 'mongodb://127.0.0.1:27017';
// const dbName = 'notes-app';

// interface NoteInterface {
//   title: string,
//   body: string,
//   color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// MongoClient.connect(dbURL).then((client) => {
//   const db = client.db(dbName);

//   return db.collection<NoteInterface>('notes').findOne({
//     _id: new ObjectId('64485190fddd32986f7bf1a1'),
//   });
// }).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// import { MongoClient } from 'mongodb';

// const dbURL = 'mongodb://127.0.0.1:27017';
// const dbName = 'notes-app';

// interface NoteInterface {
//   title: string,
//   body: string,
//   color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// MongoClient.connect(dbURL).then((client) => {
//   const db = client.db(dbName);

//   return db.collection<NoteInterface>('notes').find({
//     title: 'Red note',
//   }).toArray();
// }).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

import { MongoClient, ObjectId } from 'mongodb';

const dbURL = 'mongodb://127.0.0.1:27017';
const dbName = 'notes-app';

interface NoteInterface {
  title: string,
  body: string,
  color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
}

MongoClient.connect(dbURL).then((client) => {
  const db = client.db(dbName);

  return db.collection<NoteInterface>('notes').updateOne({
    _id: new ObjectId('643e3e6bc3f2b7301dc9a974'),
  }, {
    $set: {
      title: 'Green note',
      body: 'This is a green note',
      color: 'green',
    },
  });
}).then((result) => {
  console.log(result.modifiedCount);
}).catch((error) => {
  console.log(error);
});