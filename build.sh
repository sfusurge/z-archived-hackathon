#!/bin/bash

# example usage: ./build.sh . ../sfusurge.github.io/

# the root directory of the code ('.' if in the same folder)
SRC=$1
# the dist folder to put the build into.
DIST=$2

rm -rf $SRC/build
npm run build --prefix $SRC

rm -rf $DIST/static/
rm -rf $DIST/404.html

cp -R $SRC/build/* $DIST/
cp $DIST/index.html $DIST/404.html