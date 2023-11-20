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








## Results
## Potential for future Works.
