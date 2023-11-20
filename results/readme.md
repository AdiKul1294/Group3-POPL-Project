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

