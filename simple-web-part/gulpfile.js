'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
var merge = require('webpack-merge');
const { VueLoaderPlugin } = require('vue-loader');

build.configureWebpack.mergeConfig({
    additionalConfiguration: (config) => {
        return merge(config, {
            plugins: [
                new VueLoaderPlugin()
            ],
            resolve: {
                alias: {
                    'vue$': 'vue/dist/vue.esm.js'
                }
            },
            module: {
                rules: [{
                    test: /\.vue$/,
                    use: [{
                        loader: 'vue-loader',
                        options: {
                            esModule: true,
                        }
                    }]
                }]
            }
        });
    }
});


let copyVueFiles = build.subTask('copy-vue-files', function (gulp, buildOptions, done) {
    return gulp.src(['src/**/*.vue'])
        .pipe(gulp.dest(buildOptions.libFolder))
});
build.rig.addPostTypescriptTask(copyVueFiles);

build.initialize(gulp);
