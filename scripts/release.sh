#!/bin/bash

# Release branch
master="master"
prefix="stable-v"
release="minor"

git pull origin $master
echo "Current pull origin $master."

# Auto generate version number and tag
standard-version -r $release --tag-prefix $prefix

git push --follow-tags origin $master

echo "Git push origin $master"
echo "Release finished."