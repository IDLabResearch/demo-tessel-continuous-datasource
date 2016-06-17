#!/bin/bash
# Pushes the contents of 'tmp.ttl' to the live LDF server as static data and removes that file afterwards.
node insert.js 0 http://localhost:4000 ../mapper/triples.ttl

