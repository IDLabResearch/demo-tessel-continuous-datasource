#!/bin/bash

echo "" > read.txt
echo "" > map.txt
echo "" > publish.txt
echo "" > error.txt

tmux source-file windows.tmux
