# Demo for build with bazel

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
