const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb://localhost:27017/'
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect(err => {
  if (err) {
    console.error(err)
  } else {
    const collection = client.db('deneme1').collection('2.collection')
    collection.insertMany(
      [
        { text: 'This is the first paragraph.', paragraph_order: 1 },
        { text: 'This is the second paragraph.', paragraph_order: 2 },
        { text: 'This is the third paragraph.', paragraph_order: 3 },
      ],
      function () {
        console.log('Inserted documents into the collection')
        client.close()
      }
    )
  }
})
