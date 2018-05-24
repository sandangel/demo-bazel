# Demo for build with bazel
This is the Demo source code for [my talk (in Vietnamese)](https://www.youtube.com/watch?v=RCYrXpTcP8g) introducing Bazel Build, a powerful build toolchains using at Google

### Get started:
Install bazel for your machine

### Windows:

Run

```bash
docker run -it --rm -v ${PWD}:/home/circleci/project -w /home/circleci/project angular/container
```

to mount your current folder to docker container.

> Remember to set PWD = . in your environment variable

### Windows + MacOS + Linux

Run

```bash
npm i
bazel run @yarn//:yarn # like yarn install but for bazel
npx ibazel run src:devserver
```
