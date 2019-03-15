# Vue Style Guide

##### Component names should be multi-word
------

Component names, except for root App components, should consist of several words to prevent conflict with HTML elements (which are single words).

###### Bad
```
Vue.component('todo', {
  // …
})

export default {
  name: 'Todo',
  // …
}
```
###### Good
```
Vue.component('todo-item', {
  // …
})

export default {
  name: 'TodoItem',
  // …
}
```
Component data
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
// It's OK to use an object directly in a root
// Vue instance, since only a single instance
// will ever exist.
new Vue({
  data: {
    foo: 'bar'
  }
})
```
Prop definitions
Prop definitions should be as detailed as possible rather than shorthand, at least specifying type(s).
 
Example
 
###### Bad
// OK when prototyping, not in production
props: ['status']
###### Good
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
Keyed v-for
Always use key with v-for to maintain internal component state down the subtree.
 
Example
 
###### Bad

<ul>
  <li v-for="item in items">
    {{ item.text }}
  </li>
</ul>
Good
<ul>
  <li
    v-for="item in items"
    :key="item.id"
  >
    {{ item.text }}
  </li>
</ul>
Avoid v-if with v-for
Never use v-if and v-for on the same element.
There are two common cases where this can be tempting:
To filter items in a list (e.g., v-for="user in users" v-if="user.isActive"). In these cases, replace users with a new computed property that returns your filtered list (e.g., activeUsers).
To avoid rendering a list if it should be hidden (e.g., v-for="user in users" v-if="shouldShowUsers"). In these cases, move the v-if to a container element (e.g., ul, ol).
 
Example
 
Bad
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

Good
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
Component style scoping
Styles can be global in a top-level App component and in layout components, but for all other components, they must have scoped.
This makes overriding internal styles easier, with human-readable class names that don’t have too high specificity, but are still very unlikely to result in a conflict.
 
Example
 
Bad
<template>
  <button class="btn btn-close">X</button>
</template>

<style>
.btn-close {
  background-color: red;
}
</style>
Good
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
Geoffs section
Private property names
Always use the $_ prefix for custom private properties in a plugin, mixin, etc. Then to avoid conflicts with code by other authors, also include a named scope (e.g., $_yourPluginName_). 
Bad
var myGreatMixin = {
  // ...
  methods: {
    update: function () {
      // ...
    }
  }
}
Good
var myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function () {
      // ...
    }
  }
}
Component files
Each component should be in its own file.
This helps to more quickly find a component when you need to edit it or review how to use it.
Bad
Vue.component('TodoList', {
  // ...
})
Good
components/
|- TodoList.js
Single-file component filename casing
Filenames of single-file components should either be always PascalCase or always kebab-case.
Bad
components/
|- mycomponent.vue


components/
|- myComponent.vue
Good
components/
|- MyComponent.vue


components/
|- my-component.vue
Tightly coupled component names
Child components that are tightly coupled with their parent should include the parent component name as a prefix.
If a component only makes sense in the context of a single parent component, that relationship should be evident in its name. Since editors typically organize files alphabetically, this also keeps these related files next to each other.
 
Example
 
Bad
components/
|- SearchSidebar.vue
|- NavigationForSearchSidebar.vue
Good
components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
Order of words in component names
Component names should start with the highest-level (often most general) words and end with descriptive modifying words.
 
Example
 
Bad
components/
|- ClearSearchButton.vue
|- SearchInput.vue
Good
components/
|- SearchButtonClear.vue
|- SearchInputQuery.vue
Self-closing components
Components with no content should be self-closing in single-file components, string templates, and JSX, but never in DOM templates.
Components that self-close communicate that they not only have no content, but are meant to have no content. It’s the difference between a blank page in a book and one labeled “This page intentionally left blank.” Your code is also cleaner without the unnecessary closing tag.
Bad
<!-- In single-file components, string templates, and JSX -->
<MyComponent></MyComponent>
<!-- In DOM templates -->
<my-component/>
Good
<!-- In single-file components, string templates, and JSX -->
<MyComponent/>
<!-- In DOM templates -->
<my-component></my-component>

Component name casing in templates
Component names should always be PascalCase in single-file components and string templates but kebab-case in DOM templates.
Bad
<!-- In single-file components and string templates -->
<mycomponent/>
<!-- In single-file components and string templates -->
<myComponent/>
<!-- In DOM templates -->
<MyComponent></MyComponent>
Good
<!-- In single-file components and string templates -->
<MyComponent/>
<!-- In DOM templates -->
<my-component></my-component>
=========================Jeremy section
Component name casing in JS/JSX
Component names in JS/JSX should always be PascalCase, though they may be kebab-case inside strings for simpler applications that only use global component registration through Vue.component.
 
Example
 
Bad
Vue.component('myComponent', {
  // ...
})
import myComponent from './MyComponent.vue'
export default {
  name: 'myComponent',
  // ...
}

export default {
  name: 'my-component',
  // ...
}
Good
Vue.component('MyComponent', {
  // ...
})


Vue.component('my-component', {
  // ...
})
import MyComponent from './MyComponent.vue'
export default {
  name: 'MyComponent',
  // ...
}
Full-word component names
Component names should prefer full words over abbreviations.
The autocompletion in editors make the cost of writing longer names very low, while the clarity they provide is invaluable. Uncommon abbreviations, in particular, should always be avoided.
Bad
components/
|- SdSettings.vue
|- UProfOpts.vue
Good
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
Prop name casing
Prop names should always use camelCase during declaration, but kebab-case in templates and JSX.
We’re simply following the conventions of each language. Within JavaScript, camelCase is more natural. Within HTML, kebab-case is.
Bad
props: {
  'greeting-text': String
}
<WelcomeMessage greetingText="hi"/>
Good
props: {
  greetingText: String
}
<WelcomeMessage greeting-text="hi"/>
Multi-attribute elements

Elements with multiple attributes should span multiple lines, with one attribute per line.
In JavaScript, splitting objects with multiple properties over multiple lines is widely considered a good convention, because it’s much easier to read. Our templates and JSX deserve the same consideration.
Bad
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">
<MyComponent foo="a" bar="b" baz="c"/>
Good
<img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
>

<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>
Simple expressions in templates

Component templates should only include simple expressions, with more complex expressions refactored into computed properties or methods.
Complex expressions in your templates make them less declarative. We should strive to describe what should appear, not how we’re computing that value. Computed properties and methods also allow the code to be reused.
Bad
{{
  fullName.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}}
Good
<!-- In a template →
{{ normalizedFullName }}
// The complex expression has been moved to a computed property
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
Simple computed properties

Complex computed properties should be split into as many simpler properties as possible.
 
Example
 
Bad
computed: {
  price: function () {
    var basePrice = this.manufactureCost / (1 - this.profitMargin)
    return (
      basePrice -
      basePrice * (this.discountPercent || 0)
    )
  }
}
Good
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


========= jacks section =========
Quoted attribute values
Attribute values should always be inside quotes (single or double).
Bad
<input type=text>
Good
<input type="text">
Directive shorthands
Shorthands should be used ( : for v-bind: and @ for v-on:).
Bad
<input
  v-on:input="onInput"
  @focus="onFocus"
>
Good
<input
  :value="newTodoText"
  :placeholder="newTodoInstructions"
>

<input
  @input="onInput"
  @focus="onFocus"
>
Empty lines in component/instance options
Add one empty line between multi-line properties.
Good
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
Single-file component top-level element order
We will have our own convention 
<template>
<script>
<style>
v-if/v-else-if/v-else without key
Use key with v-if + v-else if they are the same element type (e.g., both <div> elements).
Bad
<div v-if="error">
  Error: {{ error }}
</div>
<div v-else>
  {{ results }}
</div>
Good
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
Element selectors with scoped
Element selectors should be avoided with scoped. Prefer class selectors over element selectors in scoped styles.
Bad
<template>
  <button>X</button>
</template>

<style scoped>
button {
  background-color: red;
}
</style>
Good
<template>
  <button class="btn btn-close">X</button>
</template>

<style scoped>
.btn-close {
  background-color: red;
}
</style>
