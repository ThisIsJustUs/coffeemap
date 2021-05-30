#!/bin/bash

echo What should the version be?
read VERSION

# Dokku relevant
echo What environment, e.g. api or api-dev?
read API

# Docker relevant
echo What is the .env file?
read env_file

docker build -t thisisjustus/coffeemap:$VERSION . --build-arg env_file=$env_file
docker push thisisjustus/coffeemap:$VERSION
ssh root@167.71.45.102 "docker pull thisisjustus/coffeemap:$VERSION && docker tag thisisjustus/coffeemap:$VERSION dokku/$API:$VERSION && dokku deploy $API $VERSION"