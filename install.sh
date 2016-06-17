#!/bin/bash

wd=$(pwd)
# Init npm modules
cd $wd/datareader && npm install
cd $wd/mapper && npm install
cd $wd/datasourceinserter && npm install

# Save RML mapper in the mapper module
if [ ! -f "$wd/mapper/RML-Mapper.jar" ]; then
    cd $wd/mapper && curl -OL https://github.com/RMLio/RML-Mapper/releases/download/v0.3/RML-Mapper.jar
fi

