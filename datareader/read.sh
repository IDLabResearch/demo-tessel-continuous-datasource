#!/bin/bash
# Emits a json object with temperature and humidity every five seconds
cd $(dirname "$0")
. ../.properties
tessel run consolereader.js $intervalsize $modules 2> /dev/null

