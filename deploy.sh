#!/bin/bash

echo 'removing existing master branch...'
#git push origin :master; 
git branch -D master

echo 'creating master branch...'
git checkout --orphan master

echo 'compiling latest...'
harp compile

echo 'removing unnecessary files...'
find . -maxdepth 1 ! -name 'www' ! -name '.*' | xargs rm -rf

echo 'moving build files to root...'
rm -rf www/www; mv www/* .; rm -rf www .sass-cache .idea .gitignore config.rb

echo 'install npm modules...'
npm install

echo 'create nojekyll file'
touch .nojekyll

echo 'committing build...'
git add -A; git commit -m "latest build"

echo 'pushing to master...'
git push origin master -f

echo 'It lives...'