#!/bin/bash
cd $(dirname "$0")
node index.js | while read line; do
    cat triples.ttl >> ../logs/map.txt
    echo $line
done

