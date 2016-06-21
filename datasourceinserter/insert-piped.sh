#!/bin/bash
cd $(dirname "$0")
while read line; do
    ./insert-dynamic.sh | tee ../logs/publish.txt
done <&0
