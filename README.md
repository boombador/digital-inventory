
A tool for managing personal data. Has the secondary objective of serving as a
coding project for educational purposes.

# Getting Started

Install your dependencies and run the script named 'start' to kick off the
development server:

    npm install  # only needed on first run
    npm start

The server should be available at: http://localhost:8080

## Notes on Development

When you run `npm start` you are using [Webpack Dev Server] to dynamically
rebuild the project when known resources are modified. Javascript and other
resource types under `src/` can be used with the `require` or `import` syntax.

In this mode the dev server won't bother writing generated files to disk,
additionally files under a `public/` directory will be served at that subpath,
but any other path will return the index resource.

The [HtmlWebpackPartialsPlugin] allows you to include blocks of html. Currently
the configuration in `webpack.config.js` injects `src/partials/basic-body.html`
into the generated `index.html` resource.

Any import paths starting with `@/` are relative to the `src/` directory,
configured at the property `resolve.alias`.

[Webpack Dev Server]: https://github.com/webpack/webpack-dev-server
[HtmlWebpackPlugin]: https://webpack.js.org/plugins/html-webpack-plugin/
[HtmlWebpackPartialsPlugin]: https://github.com/colbyfayock/html-webpack-partials-plugin
