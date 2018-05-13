load("@build_bazel_rules_typescript//:defs.bzl", "ts_library", "ts_devserver")

ts_library(
    name = "src",
    srcs = ["index.ts"],
    tsconfig = "//:tsconfig.json",
    deps = [
        "//src/functions",
        "//src/utils",
    ],
)

ts_devserver(
    name = "devserver",
    serving_path = "/index.js",
    static_files = ["index.html"],
    deps = ["//src"],
)
