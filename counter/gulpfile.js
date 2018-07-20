'use strict';

const gulp 					= require('gulp');
const	sass 					= require('gulp-sass');
const	browserSync   = require('browser-sync');
const	concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');
const cssnano       = require('gulp-cssnano');
const rename        = require('gulp-rename');
const del           = require('del');
const imagemin      = require('gulp-imagemin');
const pngquant      = require('imagemin-pngquant');
const cache         = require('gulp-cache');
const autoprefixer  = require('gulp-autoprefixer');
const	babel 			  = require('gulp-babel');
const	spritesmith   = require('gulp.spritesmith');
const	pixrem 			  = require('gulp-pixrem');


gulp.task('sass', () =>
     gulp.src(['app/sass/src/**/*.+(scss|sass)']) // Берем источник
				.pipe(concat('main.sсss'))
        .pipe(sass().on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
				.pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
);

//BROWSER SYNC

gulp.task('browser-sync', () =>
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
);

//WATCH

gulp.task('watch', ['browser-sync', 'sass', 'combine'], () =>
	{
    gulp.watch('app/sass/**/*.sass', ['sass']);
		gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', ['combine']);
	}
);

//Concat js files

gulp.task('combine', () => {
    gulp.src('app/js/src/**/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('app/js'))
				.pipe(browserSync.reload({stream: true}))
        // .on('error', gutil.log)
});

gulp.task('minify', () => {
    gulp.src('js/script.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'))
});

//BABEL   не перевіряв

gulp.task('convert', () => {
    gulp.src('app/js/src/script.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

//CLEAN

gulp.task('clean', () =>
    del.sync('dist')
);

//IMG

gulp.task('img', () => {
    gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});

//SPRITE

gulp.task('sprite', () => {
  let spriteData = gulp.src('app/img/sprite/*.+(png|jpg)').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss'
	}));
  spriteData.pipe(gulp.dest('app/sprites'));
});

//BUILD

gulp.task('build', ['clean', 'img', 'sass', 'minify'], () => {

		// let buildSprite = gulp.src('app/sprites/*')
		// .pipe(gulp.dest('dist/sprites'))

    let buildCss = gulp.src('app/css/main.css')

		// .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))

    let buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    let buildJs = gulp.src('app/js/script.js')
    .pipe(gulp.dest('dist/js'))

    let buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

});

gulp.task('default', ['watch']);

gulp.task('clear', () => {
    cache.clearAll();
});
