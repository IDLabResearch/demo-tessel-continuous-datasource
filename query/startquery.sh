#!/bin/bash
cd $(dirname "$0")

export QUERY="$(cat temphumid.sparql)"
export TARGET="http://localhost:3000/citybench"
export CACHING="true"
export INTERVAL="false"
export DEBUG="true"

../datasourceinserter/node_modules/tpf-querystreamer/bin/querymeta graphs

