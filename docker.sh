#!/bin/sh
docker run -e .env --rm -v $(pwd):/tmp/app gliderlabs/herokuish /bin/herokuish test
