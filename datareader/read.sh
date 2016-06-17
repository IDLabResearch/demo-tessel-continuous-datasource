#!/bin/bash
# Emits a json object with temperature and humidity every five seconds
. ../.properties
tessel run consolereader.js $intervalsize 2> /dev/null

