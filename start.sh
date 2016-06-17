#!/bin/bash
# Starts the complete pipeline

# Start live LDF server
datasourceinserter/startserver.sh &

# Read, map insert
datareader/read.sh | mapper/map.sh | datasourceinserter/insert-piped.sh

