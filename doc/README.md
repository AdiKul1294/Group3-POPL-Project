# Group3-POPL-Project

## Qualitative Analysis of microservices written in Rust and Javascript

For understanding how same microservices behave when written in two different langauges- Rust and Javascript. For Undergraduate Students.



## Problem Statement
Ensuring memory safety is a critical concern in the development of microservices. 
Rust's memory architecture, characterised by ownership, borrowing, and lifetimes, 
offers strong safety and control without a garbage collector. This minimises the risk 
of issues like dangling pointers and segmentation faults. In contrast, languages like 
JavaScript, commonly used in microservices, lack these safety mechanisms, 
potentially leading to runtime crashes and memory-related problems. Our project 
aims to compare the memory safety mechanisms of Rust and JavaScript in the 
context of microservices development and hopefully show that Rust is more reliable 
when it comes to memory management.
## Software Architecture

Within our software architecture, we have embraced a client-server paradigm, harnessing the inherent capabilities of Express.js in the realm of JavaScript. Notably, we make use of Express.js functionalities such as findOneAndUpdate for the seamless updating of notes and findOneAndDelete for the efficient removal of notes. To rigorously evaluate our system, we conduct testing in a local environment, simulating the concurrent activity of multiple users on our individual machines.

Furthermore, our server is self-hosted, and its accessibility is facilitated through the utilization of a broadcast IP address. This approach provides us with a robust and controlled testing environment. The cornerstone of our data storage infrastructure is MongoDB, a choice made with a primary focus on ensuring the secure and reliable housing of all our notes. This combination of client-server architecture, Express.js features, and MongoDB database integration forms the bedrock of our software architecture, supporting the development and maintenance of a scalable and secure note-taking application.
## Code Explanation

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

Now we focus on Rust. 

**Rust, in comparison with JavaScript, provides high level abstarction at runtime, ensuring efficient execution of code, as most of the errors are caught at compile time.Also, memory allocation on heap is much more efficient, and uses ownership system ensuring memory safety. It uses lifetime concept, which deallocates memory as soon as function's scope is over, which helps in memory management, and we can service multiple users with faster spped**, as we show below. We show in next section how Rust is better, using graphs in next section.

We first connect server with MongoDB to maintain channel of communication for note CRUD operation.
```
 let client = Client::with_uri_str(MONGODB_URI).await.expect("Failed to connect to MongoDB");
    let db = client.database(DATABASE_NAME);
    let collection = db.collection(COLLECTION_NAME);
```

**Rust also uses fewer line of code, as we show below for all CRUD operations.**

1. Creating Notes
```
let document = doc! {
        "title": title,
        "content": note,
    };
    let _ = collection.insert_one(document, None).await.expect("Failed to insert document into MongoDB");

```
2. Read Notes
```
 let doc = collection.find_one(filter.clone(), None).await.unwrap();
    let note = Note {
        title: doc.clone().unwrap().get("title").unwrap().to_string(),
        content: doc.clone().unwrap().get("content").unwrap().to_string(),
    };
```
3. Update Notes
```
let filter = doc! {
        "title": old_title,
    };
let document = doc! {
        "title": title,
        "content": note,
    };
let _ = collection.delete_one(filter, document, None).await.expect("Failed to update document from MongoDB");
```
4. Delete Notes
```
let filter = doc! {
        "title": title_to_delete,
    };
let _ = collection.delete_one(filter, None).await.expect("Failed to delete document from MongoDB");
```

**Hence, we can see that how rust uses much less code to implement same features. In next section, we see how rust is better in memory utilisation, cpu utilisation and network traffic.**







## Results
## Potential for future Works.
