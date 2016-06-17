#!/bin/bash
cd $(dirname "$0")

. ../.properties
export QUERY="$(cat $modules.sparql)"
export TARGET="http://localhost:3000/citybench"
export CACHING="true"
export INTERVAL="false"
export DEBUG="false"

../datasourceinserter/node_modules/tpf-querystreamer/bin/querymetajson graphs | node visualize.js

