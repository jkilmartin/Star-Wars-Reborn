# Contributing Guide

Thanks for checking out our Star Wars project! :star:

The following is a set of guidelines for contributing and use. Please follow them as best you can, asking about any changes you wish to make in an [issue](https://github.com/jkilmartin/StarwarsVueStyleGuide/issues) first (including to this document).

## Issues, Branching, Development, and Pull Requests

### Issues
Before forking and contributing, please open an [issue](https://github.com/jkilmartin/StarwarsVueStyleGuide/issues) with a relevant title and description of intentions.

### Branching and Development
- Development is done using the `dev` branch. The `master` branch is the latest stable version. 
**Please do not open pull requests against the `master` branch.**

- Create your own topic branch after forking and open pull requests to `dev`. 
Your topic branch should follow this syntax: *`issue-number/short-description`*.

- After cloning, run `npm install` to install dependencies.

- Please work in the `src` folder and avoid `dist`.

### Pull Requests
1. Ensure your topic branch is up to date with the latest version in this repository, and ensure all changes are committed.
2. Ensure you are merging to the `dev` branch in this repository.
3. If there are any pending pull requests in `dev`, check the *Files Changed* section to address conflicts.
4. If there are no conflicts, go ahead and open your [Pull Request](https://github.com/jkilmartin/StarwarsVueStyleGuide/pulls).
5. Enter a title and description. The description should include the keyword `resolve` and the `issue number`.
6. Submit and we'll get to work!

### Git Commits
As much as possible ensure only one logical change per commit is made.
Commit messages should describe the original issue, why a change was made, and how the change addresses the issue.

## JavaScript/Vue.js/CSS Styleguide

#### ES5/6
- Use `let` and `const` rather than `var`.
- We avoid arrow functions because of scope issues when using `this`.
- Use ES6 syntax to import/export: 
```
  export default TestModule;

  import TestModule from './TestModule';
  ```
- Use Promises as async functions.

#### Within-component naming
- Functions and variables use camelCase.
- Constants should be named as CONSTANT_VALUE.

#### Semicolons
Always use semicolons to close statements.

#### Commenting
Functions should be commented.
All third-party code should also be acknowledged with comments.
Comments should follow the syntax:
```
/** 
  * A concise description of what the function does.
  * @param {number} num1
  * @return {number} num2
  */
```

#### Component names should be multi-word
Component names, except for root App components, should consist of several words to prevent conflict with HTML elements (which are single words).

###### Bad
```
Vue.component('Todo', {
  // ...
})

export default {
  name: 'Todo',
  // ...
}
```
###### Good
```
Vue.component('TodoItem', {
  // ...
})

export default {
  name: 'TodoItem',
  // ...
}
```

#### Component data
Component data must be a function that returns an object (except on a new Vue instance).
 
###### Bad
```
Vue.component('some-comp', {
  data: {
    foo: 'bar'
  }
})

export default {
  data: {
    foo: 'bar'
  }
}
```
###### Good
```
Vue.component('some-comp', {
  data: function () {
    return {
      foo: 'bar'
    }
  }
})

// In a .vue file
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}

// It's fine to use an object directly in a root
// Vue instance, because only one instance
// will ever exist
new Vue({
  data: {
    foo: 'bar'
  }
})
```

#### Prop definitions
Prop definitions should be as detailed as possible rather than shorthand, at least specifying type(s).
 
###### Bad
```
// OK when prototyping, not in production
props: ['status']
```
###### Good
```
props: {
  status: String
}

// Best!
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

#### Keyed *v-for*
Always use *key* with *v-for* to maintain internal component state down the subtree.
 
###### Bad
```
<ul>
  <li v-for="item in items">
    {{ item.text }}
  </li>
</ul>
```
###### Good
```
<ul>
  <li
    v-for="item in items"
    :key="item.id"
  >
    {{ item.text }}
  </li>
</ul>
```

#### Avoid *v-if* with *v-for*
Never use *v-if* and *v-for* on the same element.
There are two common cases where this can be tempting:
- To filter items in a list (e.g., *v-for="user in users" v-if="user.isActive"*). In these cases, replace *users* with a new computed property that returns your filtered list (e.g., *activeUsers*).
- To avoid rendering a list if it should be hidden (e.g., *v-for="user in users" v-if="shouldShowUsers"*). In these cases, move the *v-if* to a container element (e.g., *ul* or *ol*).
 
###### Bad
```
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  <li>
</ul>

<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id"
  >
    {{ user.name }}
  <li>
</ul>
```
###### Good
```
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  <li>
</ul>

<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  <li>
</ul>
```

#### Component style scoping
Styles can be global in a top-level *App* component and in layout components, but for all other components, they must be scoped.
This makes overriding internal styles easier using human-readable class names with lower specificity and that are unlikely to result in a conflict.
 
###### Bad
```
<template>
  <button class="btn btn-close">X</button>
</template>

<style>
.btn-close {
  background-color: red;
}
</style>
```
###### Good
```
<template>
  <button class="button button-close">X</button>
</template>

<!-- Using the `scoped` attribute -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>
```

#### Private property names
Always use the *\$_* prefix for custom private properties in a plugin, mixin, etc. Then to avoid conflicts with code by other authors, also include a named scope (e.g., *\$\_yourPluginName\_*). 

###### Bad
```
let myGreatMixin = {
  // ...
  methods: {
    update: function () {
      // ...
    }
  }
}
```
###### Good
```
let myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function () {
      // ...
    }
  }
}
```

#### Component files
Each component should be in its own file.
This helps when searching for a component to edit or review how to use it.
###### Bad
```
Vue.component('TodoList', {
  // ...
})
```
###### Good
```
components/
|- TodoList.js
```

#### Single-file component filename casing
Filenames of single-file components should always be PascalCase.
###### Bad
```
components/
|- mycomponent.vue

components/
|- myComponent.vue
```
###### Good
```
components/
|- MyComponent.vue
```

#### Tightly coupled component names
Child components that are tightly coupled with their parent should include the parent component name as a prefix.
If a component only makes sense in the context of a single parent component, that relationship should be evident in its name. Since editors typically organize files alphabetically, this also keeps these related files next to each other.

###### Bad
```
components/
|- SearchSidebar.vue
|- NavigationForSearchSidebar.vue
```
###### Good
```
components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
```

#### Order of words in component names
Component names should start with the highest-level (often most general) words and end with descriptive modifying words.
 
###### Bad
```
components/
|- ClearSearchButton.vue
|- SearchInput.vue
```
###### Good
```
components/
|- SearchButtonClear.vue
|- SearchInputQuery.vue
```

#### Self-closing components
Components with no content should be self-closing in single-file components and string templates but never in DOM templates.
Components that self-close communicate that they not only have no content, but are meant to have no content. It is akin to the difference between a blank page in a book and one labeled “This page intentionally left blank.” The code is also cleaner without the unnecessary closing tag.

###### Bad
```
<!-- In single-file components and string templates -->
<MyComponent></MyComponent>

<!-- In DOM templates -->
<my-component/>
```
###### Good
```
<!-- In single-file components and string templates -->
<MyComponent/>

<!-- In DOM templates -->
<my-component></my-component>
```

#### Component name casing in templates
Component names should always be PascalCase in single-file components and string templates but kebab-case in DOM templates.

###### Bad
```
<!-- In single-file components and string templates -->
<mycomponent/>

<!-- In single-file components and string templates -->
<myComponent/>

<!-- In DOM templates -->
<MyComponent></MyComponent>
```
###### Good
```
<!-- In single-file components and string templates -->
<MyComponent/>

<!-- In DOM templates -->
<my-component></my-component>
```

#### Full-word component names
Component names should prefer full words over abbreviations. Uncommon abbreviations should always be avoided.

###### Bad
```
components/
|- SdSettings.vue
|- UProfOpts.vue
```
###### Good
```
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```

#### Prop name casing
Prop names should always use camelCase during declaration but kebab-case in templates.
This follows the conventions of each language. Within JavaScript, camelCase is more natural; withing HTML, kebab-case is used.

###### Bad
```
props: {
  'greeting-text': String
}

<WelcomeMessage greetingText="hi"/>
```
###### Good
```
props: {
  greetingText: String
}

<WelcomeMessage greeting-text="hi"/>
```

#### Multi-attribute elements
Elements with multiple attributes should span multiple lines with one attribute per line.

###### Bad
```
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">

<MyComponent foo="a" bar="b" baz="c"/>
```
###### Good
```
<img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
>

<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>
```

#### Simple expressions in templates
Component templates should only include simple expressions; more complex expressions should be refactored into computed properties or methods. This is to make expressions declarative and allow for reuse of code.

###### Bad
```
{{
  fullName.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}}
```
###### Good
```
<!-- In a template -->
{{ normalizedFullName }}

// The complex expression has been moved to a computed property
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```

#### Simple computed properties
Complex computed properties should be split into as many simpler properties as possible.
 
###### Bad
```
computed: {
  price: function () {
    let basePrice = this.manufactureCost / (1 - this.profitMargin)
    return (
      basePrice -
      basePrice * (this.discountPercent || 0)
    )
  }
}
```
###### Good
```
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },

  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },

  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```

#### Quoted attribute values
Attribute values should always be inside double quotes.

###### Bad
```
<input type=text>
```
###### Good
```
<input type="text">
```

#### Directive shorthands
Shorthands should be used ( : for *v-bind:* and @ for *v-on:*).

###### Bad
```
<input
  v-on:input="onInput"
  @focus="onFocus"
>
```
###### Good
```
<input
  :value="newTodoText"
  :placeholder="newTodoInstructions"
>

<input
  @input="onInput"
  @focus="onFocus"
>
```

#### Empty lines in component/instance options
Add one empty line between multi-line properties.

###### Good
```
props: {
  value: {
    type: String,
    required: true
  },

  focused: {
    type: Boolean,
    default: false
  },

  label: String,
  icon: String
},

computed: {
  formattedValue: function () {
    // ...
  },

  inputClasses: function () {
    // ...
  }
}
```

#### Single-file component top-level element order
The following hierarchy is used in .vue files:

```
<template>
  // ...
</template>

<script>
  import ...
  export ...
  // ...
</script>

<style>
  // ...
</style>
```

#### Using *v-if/v-else-if/v-else* without *key*
Use *key* with *v-if* + *v-else* if they are the same element type (e.g., both \<div> elements).

###### Bad
```
<div v-if="error">
  Error: {{ error }}
</div>

<div v-else>
  {{ results }}
</div>
```
###### Good
```
<div
  v-if="error"
  key="search-status"
>
  Error: {{ error }}
</div>

<div
  v-else
  key="search-results"
>
  {{ results }}
</div>
```

#### Element selectors with *scoped*
Prefer class selectors over element selectors when styling with *scoped*.

###### Bad
```
<template>
  <button>X</button>
</template>

<style scoped>
button {
  background-color: red;
}
</style>
```
###### Good
```
<template>
  <button class="btn btn-close">X</button>
</template>

<style scoped>
.btn-close {
  background-color: red;
}
</style>
```

#### Class/ID selector names (styling)
- CSS class selector names use `kebab-case`.
- ID selector names use camelCase.

### May the force be with you.