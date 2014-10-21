# Kickstart Switches

## Install in your project

### Gulp/Node.js

Let's install this as a git submodule.

- In your project, `cd` to `lib/sass/vendor`
- `git submodule add git://github.com/ajkochanowicz/Kickstart-Switch.git`
  - As a submodule, this won't grow in your repository but it will allow you to
    keep it up to date. [Read more about submodules](http://git-scm.com/book/en/Git-Tools-Submodules)
- In `lib/sass/vendor/_index.sass`, add

    @import switch/switch
