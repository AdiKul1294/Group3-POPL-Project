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
## POPL Aspects
This Rust program is a web application that integrates with MongoDB. It uses the Rocket web framework for routing and asynchronous programming. Below are explanations of key principles and features used in this Rust code:

### 1. Ownership and Borrowing

Rust's ownership system ensures memory safety by enforcing rules at compile time. References and borrowing are used in function parameters as shown below:
```
#[post("/note", data = "<data>")]
async fn post_data(data: Form<Note>) -> Status {
    . . .
}
``` 

```
#[put("/note?title=<old_title>"), data = "<data>")]
async fn update_document(old_title: &str, data: Form<Note>) -> Status {
    . . .
}
```

### 2. Traits

The `Serialize` and `Deserialize` traits from the `serde` crate are implemented for the `User` and `Note` structs. These traits enable conversion between Rust data structures and data interchange formats. 
```
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
```

### 3. Lifetime Specifiers

Lifetimes are specified in function signatures, such as `async fn post_data(data: Form<Note>) -> Status`, implicitly managing the lifetime of the `Form<Note>` data.
```
#[derive(Debug, Serialize, Deserialize, FromForm)]
struct Note<'a> {
    title: &'a str,
    content: &'a str,
}

#[post("/note", data = "<data>")]
async fn post_data<'a>(data: Form<Note<'a>>) -> Status {
    . . .
}

```

### 4. Structs

Rust's struct and enum types define structured data. For example, `User`, `Note`, and `MyData` are defined as structs.

### 5. Concurrency and Async/Await

The `tokio` crate is employed for asynchronous programming. The `async` keyword and `await` expressions are used in functions like `welcome()` and asynchronous routes (e.g., `post_data`).

### 6. Functional Programming

Functional programming concepts are used in data processing. Functions like `map`, `unwrap`, and closures are used in combination with iterators.

### 7. Error Handling

The `expect` method is used for error handling, providing a custom error message if the code fails. The `unwrap` method is used to extract values from `Result` or `Option`, panicking if an error occurs.

### 8. External Dependencies

External dependencies like `rocket`, `mongodb`, `serde`, and `tokio` showcase Rust's ability to integrate seamlessly with external libraries.

### 9. Pattern Matching

The `match` keyword is used for pattern matching, as seen in `match` blocks in functions like `get_note()`.

### 10. Module System

The code is organized into modules, as indicated by the `mod` keyword. For example, MongoDB-related code is encapsulated within its module.

### 11. String Handling

Various methods for string handling are demonstrated, such as using the `String` type, the `to_string()` method, and string literals.

These principles and features highlight Rust's focus on memory safety, ownership, and zero-cost abstractions, making it suitable for systems programming and web development.
## Results

*For load testing-JavaScript*
![load_js_memory](https://github.com/AdiKul1294/Group3-POPL-Project/assets/101890168/3340aaa5-3826-4829-aaee-7a1603fbee2e)
*For load testing-Rust*
![note_js_memory](https://github.com/AdiKul1294/Group3-POPL-Project/assets/101890168/bf24e7b2-59fb-42ed-9427-538b5c47cece)


**We see, as above, that Rust performs much better in load testing, taking much less memory.**

*Reading note from database-JavaScript*
![load_rs_memory](https://github.com/AdiKul1294/Group3-POPL-Project/assets/101890168/78c4b161-0549-420b-bfac-fa69e4b7d758)
*Reading Note from database-Rust*
![note_rs_memory](https://github.com/AdiKul1294/Group3-POPL-Project/assets/101890168/18e43d33-3c9e-4fb9-9d31-9920da9d994e)

**Rust consumes  less percentage of memory than JavaScript because of better memory management. It happens because the heap memory gets deallocated as soon as the lifetime of the element is over or the scope of the function is over.**
## Potential for future Works.
