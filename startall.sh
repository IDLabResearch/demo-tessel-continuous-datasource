#!/bin/bash

echo "" > logs/read.txt
echo "" > logs/map.txt
echo "" > logs/publish.txt
echo "" > logs/error.txt

tmux source-file windows.tmux
