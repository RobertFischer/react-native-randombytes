"use strict";
module.exports = {
    branches: ["master"],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/npm",
        "@semantic-release/git",
        "@semantic-release/github",
    ],
    assets: ["CHANGELOG.md", "package.json", "yarn.lock"],
    preset: "conventionalcommits",
    linkCompare: true,
    linkReferences: true,
    assignees: ["RobertFischer"],
};
//# sourceMappingURL=release.config.js.map