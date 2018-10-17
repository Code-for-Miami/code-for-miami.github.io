## Getting started

1. sudo npm install -g harp
2. in project directory: npm install
3. in project directory: harp server --port 9000

## Dependencies

- IA: https://docs.google.com/a/codeforamerica.org/document/d/1ac8lH9SU6Mz4QhkUoHOeRwUWqXrSnHM34pKIHSKYG70/edit#heading=h.j1uw506am9e9
- HarpJs: http://harpjs.com/docs
- Jade Lang: http://jade-lang.com/
- Zurb Foundation: http://foundation.zurb.com/docs

## Adding a page

1. Add page to _data.json
2. Add jade template in root directory

## Writing a Blog Post

1. Create Markdown (.md) file in /posts
2. Add post's metadata to /posts/_data.json (as first object in object)
    - metadata object key is the name of the Markdown file

## Deploying
1. Make sure to compile css by running `harp compile`
2. Create a commit in the `dev` branch
3. run `./deploy.sh`
4. All done

## Contribute
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.
Please note we have a [Code of Conduct](https://github.com/Code-for-Miami/codeofconduct), please follow it in all your interactions with the project.

## Pull Request Process
1 - Ensure any install or build dependencies are removed before the end of the layer when doing a build. 

2 - Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters. 

3 - Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).

4 - You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Thanks and Attribution

### Icons
- Data | Created by Piotrek Chuchla | http://thenounproject.com/term/diagram/21548/
- Cube | Created by Gregor Črešnar | https://thenounproject.com/term/cube/174072/
- Arrow | Created by Zlatko Najdenovski | http://thenounproject.com/term/pointer/63453/
- Firefighter | Created by Patrick McDonnell | https://thenounproject.com/icon/77719
- Palm Tree | Created by Vlad Likh | https://thenounproject.com/search/?q=palm-tree&i=108603
- Talk Bubble | Created by Joanna Giansanti | https://thenounproject.com/search/?q=talk-bubble&i=15816
- Console | Created by Arthur Shlain, RU | https://thenounproject.com/term/console/59654/
