#!/bin/bash
# Starts the complete pipeline

# Start live LDF server
datasourceinserter/startserver.sh &

# Insert RML statements


# Read, map insert
datareader/read.sh | mapper/map.sh | datasourceinserter/insert-piped.sh

