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
