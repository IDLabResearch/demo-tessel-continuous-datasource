#!/bin/bash
# Starts the complete pipeline

# Start live LDF server
datasourceinserter/startserver.sh

# Start data reader
datareader/read.sh

# TODO: pipe to mapper

# TODO: datasourceinserter/
