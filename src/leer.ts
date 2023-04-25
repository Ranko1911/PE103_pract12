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
//     _id: new ObjectId('643e3e6bc3f2b7301dc9a973'),
//   });
// }).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });