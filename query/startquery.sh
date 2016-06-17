#!/bin/bash
cd $(dirname "$0")

export QUERY="$(cat rfid.sparql)"
export TARGET="http://localhost:3000/citybench"
export CACHING="true"
export INTERVAL="false"
export DEBUG="false"

../datasourceinserter/node_modules/tpf-querystreamer/bin/querymetajson graphs | node visualize.js

