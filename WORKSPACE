workspace(name = "angular_vn")

# Add nodejs rules
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "a672bbb4eb8c49363942fe9a491f35214b5d7a0000c86e0152ea8cd3261b1c12",
    strip_prefix = "rules_nodejs-0.8.0",
    urls = ["https://github.com/bazelbuild/rules_nodejs/archive/0.8.0.tar.gz"],
)

# NOTE: this rule installs nodejs, npm, and yarn, but does NOT install
# your npm dependencies. You must still run the package manager.
load("@build_bazel_rules_nodejs//:defs.bzl", "check_bazel_version", "node_repositories")

check_bazel_version("0.13.0")

node_repositories(package_json = ["//:package.json"])

# http_archive(
#     name = "io_bazel_rules_go",
#     sha256 = "c1f52b8789218bb1542ed362c4f7de7052abcf254d865d96fb7ba6d44bc15ee3",
#     urls = ["https://github.com/bazelbuild/rules_go/releases/download/0.12.0/rules_go-0.12.0.tar.gz"],
# )

http_archive(
    name = "io_bazel_rules_go",
    sha256 = "1868ff68d6079e31b2f09b828b58d62e57ca8e9636edff699247c9108518570b",
    urls = ["https://github.com/bazelbuild/rules_go/releases/download/0.11.1/rules_go-0.11.1.tar.gz"],
)

load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()

go_register_toolchains()

# Load rules_webtesting at master for example purposes only. You should specify
# a specific version in your project.
http_archive(
    name = "io_bazel_rules_webtesting",
    strip_prefix = "rules_webtesting-master",
    urls = ["https://github.com/bazelbuild/rules_webtesting/archive/master.tar.gz"],
)

load(
    "@io_bazel_rules_webtesting//web:repositories.bzl",
    "browser_repositories",
    "web_test_repositories",
)

web_test_repositories()

# Load repositories for example browser definitions.
# You should create your own browser definitions and link
# to the specific browser versions you are interested in
# testing with.
browser_repositories(
    chromium = True,
    firefox = True,
)

# Add TypeScript rules
http_archive(
    name = "build_bazel_rules_typescript",
    sha256 = "8f2767ff56ad68c80c62e9a1cdc2ba2c2ba0b19d350f713365e5333045df02e3",
    strip_prefix = "rules_typescript-0.13.0",
    urls = ["https://github.com/bazelbuild/rules_typescript/archive/v0.13.0.zip"],
)

# Setup TypeScript Bazel workspace
load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()
