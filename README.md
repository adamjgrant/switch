# Kickstart Switches

## Install in your project

### Gulp/Node.js

Let's install this as a git submodule.

In your project, `cd` to `lib/sass/vendor`

    git submodule add git://github.com/ajkochanowicz/switch.git

As a submodule, this won't grow in your repository but it will allow you to
keep it up to date. [Read more about submodules](http://git-scm.com/book/en/Git-Tools-Submodules)
In `lib/sass/vendor/_index.sass`, add

    @import switch/switch

In the very bottom of your theme file, instantiate the `switch()` mixin

    =switch($color: $primary-color)
      +switch-default($color)

Now that you have the mixin available, you just need to assign it to some class

    .switch
      +switch

To add a switch, use the following markup 

      <div>
        <div class="switch">
          <input id="switch-1" type="checkbox" />
          <label for="switch-1"></label>
        </div>
        <span>Let me know about future updates!</span>
      </div>

Note, the `switch-1` id is optional. Use whatever id you like.
The first `div` is just to contain anything. When stacking switches, you'll want
to make this div 'display: block' or use `form_group()`

At any time, you can update all the submodules in your project from your project root by running

    git submodule update
