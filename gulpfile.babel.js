'use strict';

import {series, parallel, src, dest, watch} from 'gulp'; // Gulp
import gulpUtil from 'gulp-util'; // log 풀력을 위한 util 모듈
import sassGlob from 'gulp-sass-glob';
import sass from 'gulp-dart-sass';  // sass/scss -> css 빌드
import autoprefixer from 'gulp-autoprefixer';
import minifyCSS from 'gulp-clean-css'; // 최소화
import uglify from 'gulp-uglify'; // 난독화
import del from 'del';
import concat from 'gulp-concat';
import rename from 'gulp-rename';

const output_path = 'src/assets/css/'
// 빌드 전 이전 빌드 폴더 삭제
const clean = () => {
    // site();
    return del([output_path])
};



// scss 빌드
const build = () => {
    const baseFile = 'assets/style/index'
    return src([`src/${baseFile}.scss`], {base: 'src/', allowEmpty: true})
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(rename('ga_ui.css'))
        .pipe(dest(output_path, {sourcemaps: false}))
        .pipe(minifyCSS())
        .pipe(rename('ga_ui.min.css'))
        .pipe(dest(output_path, { sourcemaps: false }))

}


// 작업 중 변경 감지 -> 빌드
const watcher = () => {
    watch(['src/assets/style/**/*.scss','src/assets/style/theme/**/*.scss'], build)

}

exports.clean = clean; // $ gulp clean
exports.build = build; // $ gulp clean
exports.default = series(clean, build, watcher, () => {
    gulpUtil.log("Run gulp!!")
}); // $ gulp
