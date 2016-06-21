#!/bin/bash
# Starts the complete pipeline

if [ ! -f .properties ]; then
    echo "No .properties has been found! Create one from the template."
    exit 1
fi

# Start live LDF server
datasourceinserter/startserver.sh &
sleep 1

# Read, map insert
datareader/read.sh | mapper/map.sh | datasourceinserter/insert-piped.sh > /dev/null

