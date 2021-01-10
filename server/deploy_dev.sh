#!/bin/bash

echo What should the version be?
read VERSION

docker build -t thisisjustus/coffeemap:$VERSION .
docker push thisisjustus/coffeemap:$VERSION
ssh root@64.227.13.208 "docker pull thisisjustus/coffeemap:$VERSION && docker tag thisisjustus/coffeemap:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"