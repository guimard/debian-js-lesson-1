# Debian packaging lesson 1

This step will show how to update a simple node package in Debian.

Before trying this, take a look to [our documentation](https://wiki.debian.org/Javascript/Tutorial)

Steps:
 * clone it: `salsa co --group js-team node-debian-js-lesson-1`
 * go to it: `cd node-debian-js-lesson-1`
 * update it:
   * download last version: `uscan`
   * import it: `gbp import-orig --pristine-tar ../node-debian-js-lesson-1_0.0.2.orig.tar.gz`
   * update changelog version: `dch -v 0.0.2-1` _(keep version "UNRELEASED" for now)_
   * try to build it using for example: `gbp buildpackage --git-ignore-branch --git-builder="sbuild -j5 --no-apt-update -d unstable --no-clean-source --run-lintian --lintian-opts='--color always --display-info --display-experimental --pedantic'" --git-export=WC`
   * Examine lintian reports to see what has to be changed and try to fix it _(solution [here](Solution.md) but try to fix it by yourself)_
   * commit your changes step by step _(never commit debian/changelog else next step will be incomplete)_
   * update debian/changelog: `gbp dch`
   * fix it
   * when you're happy, prepare push: `dch -r --force-save-on-release`
   * save debian/changelog and commit result

In real life, you've then to push result using `salsa --group js-team push` then ask for a Debian Developer review.

**PLEASE NEVER PUSH YOUR RESULT**
