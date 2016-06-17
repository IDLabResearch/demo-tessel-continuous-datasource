#!/bin/bash
cd $(dirname "$0")
while read line; do
    ./insert-dynamic.sh
done <&0
