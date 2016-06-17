#!/bin/bash
# Pushes the contents of 'tmp.ttl' to the live LDF server as dynamic data and removes that file afterwards.
. ../.properties
node insert.js $intervalsize http://localhost:4000 ../mapper/triples.ttl

