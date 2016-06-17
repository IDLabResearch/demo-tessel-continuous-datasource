#!/bin/bash
# Starts an LDF-server that supports data insertion on a different port.
export TYPE="graphs"
export SERVER="$(pwd)/node_modules/ldf-server/bin/ldf-server"

cd $QS_LOCATION/bin
node ldf-server-http-inserter config_citybench.json 3000 1

