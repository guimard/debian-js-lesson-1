# Lintian tag fix solutions

 * `package-uses-old-debhelper-compat-version`:
   * in `debian/control`, replace `debhelper (>= 11~)` by `debhelper-compat (= 12)` and remove `debian/compat`
 * `ancient-standards-version`:
   * in `debian/control`, replace `Standards-Version: 3.9.6` by `Standards-Version: 4.4.1`
 * `upstream-metadata-file-is-missing`:
   * launch `github-debian-upstream`, verify output and commit _(github-debian-upstream says how to do it)_
 * `rules-requires-root-missing`:
   * Add "Rules-Requires-Root: no" in `debian/control` _(in source part)_
 * `nodejs-module-installed-in-usr-lib`:
   * pkg-js-tools provides an easy way to do this:
     * Add `pkg-js-tools (>= 0.9.12~)` in debian/control build dependencies
     * Replace `dh $@` by `dh $@ --with nodejs` in debian/rules
     * Remove `debian/install`

Time to test a new build here to see lintian output differences

 * `testsuite-autopkgtest-missing`: use pkg-js-tools to launch test during build and autopkgtest
   * add `Testsuite: autopkgtest-pkg-nodejs` in `debian/control` _(in source part)_
   * remove the whole `override_dh_auto_test` in `debian/rules`
   * create `debian/tests/pkg-js` dir
   * create `debian/tests/pkg-js/test` file and insert just "mocha" in it

Test a new build.

 * `debian-watch-does-not-check-gpg-signature`: no way to fix this: upstream doesn't sign its releases
 * `extended-description-is-probably-too-short`: update package description

**PLEASE NEVER PUSH YOUR RESULT**
