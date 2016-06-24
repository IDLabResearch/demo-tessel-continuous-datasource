#!/usr/bin/tmux source-file

new-session -d
split-window -d -t 0 -v
split-window -d -t 0 -v
split-window -d -t 2 -v
split-window -d -t 2 -h
split-window -d -t 4 -h

# LDF server output
send-keys -t 0 './start.sh' enter
# Query output
send-keys -t 1 'sleep 10 && cd query && ./startquery.sh' enter
# Mapper logs
send-keys -t 2 'tail -f logs/map.txt' enter
# Error logs
send-keys -t 3 'tail -f logs/error.txt' enter
# Raw input from sensor
send-keys -t 4 'tail -f logs/read.txt' enter
# Publish logs
send-keys -t 5 'tail -f logs/publish.txt' enter

select-pane -t 1

attach
