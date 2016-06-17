#!/bin/bash
# Pushes the contents of 'tmp.ttl' to the live LDF server and removes that file afterwards.

node insert.js 5000 http://localhost:4000 tmp.ttl
rm tmp.ttl

