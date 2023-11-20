## Code Explanation

![flowchart](https://github.com/AdiKul1294/Group3-POPL-Project/assets/101890168/755f1fd0-35d2-43eb-b7d7-08e94609ef70)

In this project, we are showing performance difference between JavaScript and Rust on factors Memory utilisation, CPU Utilisation, Time taken per request, Network Traffic, and other factors which form the bedrock of any principles of programming language. Below we show some snippets of code, for both languages and show how we implemented this in both langauges.
**JavaScript is a high level and dynamically typed language, which means that variables are determined at the runtime. We don't need to specify type explicitly.**

It acn lead to runtime errors, lack of type safety, documentation challenges, tooling limitations and profiling overhead.

We are using ExpressJS microservice framework to define a route for handling the get operation for login credentials of the user.

```
let express = require("express");
let router = express.Router();

//GET
router.get("/login", (req, res) => {
    if(!req.query.email || !req.query.password) {
        return res.status(400).send("Missing URL parameter: email or password");
    }
```
Now we show four CRUD(Create, Read, Update, Delete) operations below, using API calls. Our databse MongoDB stores all these Notes, and server acts as the communication channel between end-user and database.

1. Creating a new note
   We create a new instance of note using the NoteModel object and return code 201 if the code is created successfully. 
```
router.post("/note", (req, res) => {
    if(!req.body) {
        return res.status(400).send("Request body is missing");
    }

    let model = new NoteModel(req.body);
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0) {
                return res.status(500).send(doc);
            }
            res.status(201).send(doc); // 201: Created resource successfully 
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
});
```

2. Read Notes
   We use findOne function to read note and display error code 500 in case of error.
```
router.get("/note", (req, res) => {
    if(!req.query.title) {
        return res.status(400).send("Missing URL parameter: title");
    }

    NoteModel.findOne({
        title: req.query.title
    })
        .then(doc => {
            let note = doc;
            res.send(doc);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});
```

3. Write Notes
We use post operation using findOneAndUpdate function to write a note from scratch or update existing note.
```
router.put("/note", (req, res) => {
    if(!req.query.title) {
        return res.status(400).send("Missing URL parameter: title");
    }

    NoteModel.findOneAndUpdate({
        title: req.query.title
    }, req.body, {
        new: true
    })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});
```

4. Delete Notes
We sue findOneAndDelete function here.
```
router.delete("/note", (req, res) => {
    if(!req.query.title) {
        return res.status(400).send("Missing URL parameter: note");
    }

    NoteModel.findOneAndDelete({
        title: req.query.title
    })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});
```

Now we focus on Rust. For rust we use Rocket microservice architecture. Hence all below functions are defined in Rocket.


We first connect server with MongoDB to maintain channel of communication for note CRUD operation.
```
 let client = Client::with_uri_str(MONGODB_URI).await.expect("Failed to connect to MongoDB");
    let db = client.database(DATABASE_NAME);
    let collection = db.collection(COLLECTION_NAME);
```

**Rust also uses fewer line of code, as we show below for all CRUD operations.**

1. Creating Notes
   Using collection defined above, we use insert_one fucntion to create a new note.
```
let document = doc! {
        "title": title,
        "content": note,
    };
    let _ = collection.insert_one(document, None).await.expect("Failed to insert document into MongoDB");

```
2. Read Notes
   We use find_one function to read node.
```
 let doc = collection.find_one(filter.clone(), None).await.unwrap();
    let note = Note {
        title: doc.clone().unwrap().get("title").unwrap().to_string(),
        content: doc.clone().unwrap().get("content").unwrap().to_string(),
    };
```
3. Update Notes
   We use update_one function to update the note, as per title given by user.
```
let filter = doc! {
        "title": old_title,
    };
let document = doc! {
        "title": title,
        "content": note,
    };
let _ = collection.update_one(filter, document, None).await.expect("Failed to update document from MongoDB");
```
4. Delete Notes
    We use delete_one function to delete the note, as per the title given by user.
```
let filter = doc! {
        "title": title_to_delete,
    };
let _ = collection.delete_one(filter, None).await.expect("Failed to delete document from MongoDB");
```

**Hence, we can see that how rust uses much less code to implement same features. In next section, we see how rust is better in memory utilisation, cpu utilisation and network traffic.**
