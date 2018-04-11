#! /bin/bash

chown -R 1000:1000 /code/app
cd /code/app

npm install

ionic serve -c --no-interactive