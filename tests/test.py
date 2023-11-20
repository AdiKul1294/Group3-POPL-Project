import requests
import time

def get_note_rs():
    url = "http://10.30.29.221:8000/note"

    payload = {}
    headers = {}

    start_time = time.time()
    for i in range(500):
        response = requests.request("GET", url, headers=headers, data=payload)
        print(i)
    end = time.time()
    print(end - start_time)

def mem_load_rs():
    url = "http://10.30.29.221:8000/mem_load"

    payload = {}
    headers = {}

    start_time = time.time()
    response = requests.request("GET", url, headers=headers, data=payload)
    end = time.time()
    print(end - start_time)

def get_note_js():
    url = "http://10.30.29.221:5000/note?title=testing"

    payload = {}
    headers = {}

    start_time = time.time()
    for i in range(500):
        response = requests.request("GET", url, headers=headers, data=payload)
        print(i)
    end = time.time()
    print(end - start_time)

def mem_load_js():
    url = "http://10.30.29.221:5000/mem_load"

    payload = {}
    headers = {}

    start_time = time.time()
    response = requests.request("GET", url, headers=headers, data=payload)   
    end = time.time()
    print(end - start_time)
