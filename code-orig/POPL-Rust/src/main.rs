#[macro_use]
extern crate rocket;
use mongodb::bson::Document;
use rocket::{
    get, post, routes, form::Form, http::Status, Request, Data,
};
use rocket::tokio::fs::File;
use serde::{Deserialize, Serialize};
use serde_json::json;
use std::path::Path;
use mongodb::{bson::doc, options::FindOptions, Client, Collection};

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index, welcome, post_data, retrieve_file])
}

// Your MongoDB database configuration
const MONGODB_URI: &str = "mongodb+srv://adikul3007:popl1294@rest-api.lbyvfkv.mongodb.net/";
const DATABASE_NAME: &str = "test";
const COLLECTION_NAME: &str = "notes";

#[get("/")]
fn index() -> &'static str {
    "WELCOME TO NOTE APP"
}

#[derive(Debug, Serialize, Deserialize)]
struct User {
    name: String,
    email: String,
    password: String,
}

#[derive(Debug, Serialize, Deserialize, FromForm)]
struct Note<'a> {
    title: &'a str,
    content: &'a str,
}

#[get("/welcome")]
async fn welcome() -> String {
    // Connect to the MongoDB database
    let client = Client::with_uri_str(MONGODB_URI).await.expect("Failed to connect to MongoDB");
    let db = client.database(DATABASE_NAME);
    let collection: Collection<Document> = db.collection(COLLECTION_NAME);

    let filter = doc! {"title": "testing"};    
    for i in 1..1000000 {
        println!("{}", i);
        let note = Note {
            title: "title".to_string(),
            content: "content".to_string(),
        };
    }

    // Create a new document and insert it into the MongoDB collection
    let doc = collection.find_one(filter.clone(), None).await.unwrap();
    let note = Note {
        title: doc.clone().unwrap().get("title").unwrap().to_string(),
        content: doc.clone().unwrap().get("content").unwrap().to_string(),
    };
    let response_data = json!({
        "title": note.title,
        "content": note.content,
    });
    response_data.to_string()
}

#[derive(Debug, Deserialize, FromForm)]
struct MyData {
    str1: String,
    str2: String,
}

// #[post("/login", data = "<data>")]
// fn login(data: Form<MyData>) -> Status {
//     let _response_data = json!({
//         "str1": data.str1,
//         "str2": data.str2,
//     });
//     Status::Ok
// }

// #[post("/sign_up", data = "<data>")]
// fn sign_up(data: Form<MyData>) -> Status {
//     let _response_data = json!({
//         "str1": data.str1,
//         "str2": data.str2,
//     });
//     Status::Ok
// }

#[post("/note", data = "<data>")]
async fn post_data<'a>(data: Form<Note<'a>>) -> Status {
    let title = &data.title;
    let note = &data.content;

    // Connect to the MongoDB database
    let client = Client::with_uri_str(MONGODB_URI).await.expect("Failed to connect to MongoDB");
    let db = client.database(DATABASE_NAME);
    let collection = db.collection(COLLECTION_NAME);

    // Create a new document and insert it into the MongoDB collection
    let document = doc! {
        "title": title,
        "content": note,
    };
    let _ = collection.insert_one(document, None).await.expect("Failed to insert document into MongoDB");

    Status::Ok
}

#[delete("/note")]
async fn delete_document() -> Status {
    // Connect to the MongoDB database
    let client = Client::with_uri_str(MONGODB_URI).await.expect("Failed to connect to MongoDB");
    let db = client.database(DATABASE_NAME);
    let collection = db.collection(COLLECTION_NAME);
    
    // Specify the filter criteria to identify the document to be deleted
    let filter = doc! {
        "title": title_to_delete,
    };

    // Perform the delete operation
    let _ = collection.delete_one(filter, None).await.expect("Failed to delete document from MongoDB");
    Status::Ok
}

#[put("/note?title=<old_title>"), data = "<data>")]
async fn update_document(old_title: &str, data: Form<Note>) -> Status {
    let title = &data.title;
    let note = &data.content;

    // Connect to the MongoDB database
    let client = Client::with_uri_str(MONGODB_URI).await.expect("Failed to connect to MongoDB");
    let db = client.database(DATABASE_NAME);
    let collection = db.collection(COLLECTION_NAME);
    
    // Specify the filter criteria to identify the document to be updated
    let filter = doc! {
        "title": old_title,
    };

    // Create updated document and insert it into the MongoDB collection
    let document = doc! {
        "title": title,
        "content": note,
    };

    // Perform the delete operation
    let _ = collection.delete_one(filter, document, None).await.expect("Failed to update document from MongoDB");
    Status::Ok
}

#[get("/note")]
async fn get_note() -> String {

    // Connect to the MongoDB database
    let client = Client::with_uri_str(MONGODB_URI).await.expect("Failed to connect to MongoDB");
    let db = client.database(DATABASE_NAME);
    let collection: Collection<Document> = db.collection(COLLECTION_NAME);

    let filter = doc! {"title": "testing"};    

    // Create a new document and insert it into the MongoDB collection
    let doc = collection.find_one(filter.clone(), None).await.unwrap();
    let note = Note {
        title: doc.clone().unwrap().get("title").unwrap().to_string(),
        content: doc.clone().unwrap().get("content").unwrap().to_string(),
    };
    let response_data = json!({
        "title": note.title,
        "content": note.content,
    });
    Box::new(note);
    response_data.to_string()
}


#[get("/<file_name>")]
async fn retrieve_file(file_name: &str) -> Option<File> {
    let upload_dir = concat!(env!("CARGO_MANIFEST_DIR"), "/", "upload");
    let filename = Path::new(upload_dir).join(file_name);
    File::open(&filename).await.ok()
}
