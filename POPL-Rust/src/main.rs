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

use rocket::Build;
use rocket::figment::Figment;
use rocket::Config;

#[launch]
fn rocket() -> rocket::Rocket<Build> {
    let config = Figment::from(Config::default())
        .merge(("profile", "Dev"))
        .merge(("address", "0.0.0.0"))
        .merge(("port", 8000));

    rocket::custom(config)
        .mount("/", routes![index, welcome, get_note, post_data, retrieve_file, ])
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
struct Note {
    title: String,
    content: String,
}

use std::time::{Duration, SystemTime};

#[get("/welcome")]
async fn welcome() -> String {

    let start = SystemTime::now();
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
        Box::new(note);
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
    let end = SystemTime::now();
    let duration = end.duration_since(start).unwrap();
    println!("Time elapsed: {:?}", duration);
    
    response_data.to_string()
}


#[derive(Debug, Deserialize, FromForm)]
struct MyData {
    str1: String,
    str2: String,
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

#[post("/note", data = "<data>")]
async fn post_data(data: Form<Note>) -> Status {
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

#[get("/<file_name>")]
async fn retrieve_file(file_name: &str) -> Option<File> {
    let upload_dir = concat!(env!("CARGO_MANIFEST_DIR"), "/", "upload");
    let filename = Path::new(upload_dir).join(file_name);
    File::open(&filename).await.ok()
}