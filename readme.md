# MODERN JS DEVELOPMENT

- We ussually divide our code into modules for easy management.
- There even 3rd party modules existing in the internet (found in the npm repo)
- Once development is done, the code should then be converted into one javascript bundle(through a build process) which is then taken to production.
- To create the javascript bundle, there are a few processes entailed:

## Bundling

- Joining all our modules into one big file.
- It eliminates unused code and compress our code as well.
- `This process is important since:`
- Browsers dont support modules at all, and thus if not bundled, browsers may find it hard to executed the code in the modules.
- It better for perfomance to sell less code to the server for execution.

## Transpilling / Polyfilling

- This is basically converting all modern js back to ES5 for older browsers to understand code without breaking.
- This is ussualy done using a tool called `babel`.

- To do the build process, we dont do it ourselves, instead, we use a special tool which does it for us.
- The most common build tools are `webpack` and `parcel`. These tools take our raw code and convert it to a js bundle.
- `webpack` is the most popular but difficult to configure.
- `parcel` - zero config bundler that works out of the box. We dont write any setup code.
- These tools are also on npm.

## Modules

- A module is a reusable piece of code that encapuslates implimentation details of a certain part of a our project.
- Its a standalone file, but not always the case.
- We can import of export some values in a module.
- The exported values are referred to as a public API.
- Dependancies are those imported.
- Modules are important building blocks which can be put together to build complex apps.
- Modules can be developed in complete isolation.
- They make it easy to abstract our code.
- Lead to a more organized code.
- Allows us to reuse same code across multiple projects.
