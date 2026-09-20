// AppCommon v1.0 — Gulp Build System Minimal & Efficace

import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import gulpAutoPrefixer from 'gulp-autoprefixer';
import gulpEslint from 'gulp-eslint-new';
import gulpHeader from 'gulp-header';
import gulpRename from 'gulp-rename';
import archiver from 'archiver';
import { globSync } from 'glob';
import { deleteSync } from 'del';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

// Dossiers AppCommon v1.0
const dirs = {
  src: 'src',
  dist: 'dist',
  archive: 'archive'
};

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

// Créer le dossier archive/
gulp.task('archive:create_dir', done => {
  if (!fs.existsSync(dirs.archive)) {
    fs.mkdirSync(path.resolve(dirs.archive), '0755');
  }
  done();
});

// Créer un ZIP de dist/
gulp.task('archive:zip', done => {
  const archiveName = path.resolve(
    dirs.archive,
    `${pkg.name}_v${pkg.version}.zip`
  );

  const zip = archiver('zip');
  const output = fs.createWriteStream(archiveName);

  const files = globSync('**/*.*', {
    cwd: dirs.dist,
    ignore: ['**/node_modules/**', '**/.cache/**'],
    dot: true
  });

  zip.on('error', error => {
    done();
    throw error;
  });

  output.on('close', done);

  files.forEach(file => {
    const filePath = path.resolve(dirs.dist, file);
    zip.append(fs.createReadStream(filePath), {
      name: file,
      mode: fs.statSync(filePath).mode
    });
  });

  zip.pipe(output);
  zip.finalize();
});

// Nettoyer dist/ et archive/
gulp.task('clean', done => {
  deleteSync([dirs.dist, dirs.archive]);
  done();
});

// ---------------------------------------------------------------------
// | Copy tasks                                                        |
// ---------------------------------------------------------------------

// Copier index.html
gulp.task('copy:index', () =>
  gulp.src(`${dirs.src}/index.html`).pipe(gulp.dest(dirs.dist))
);

// Copier LICENSE
gulp.task('copy:license', () =>
  gulp.src('LICENSE').pipe(gulp.dest(dirs.dist))
);

// Copier CSS avec autoprefixer + header
gulp.task('copy:css', () => {
  const banner = `/*! AppCommon v${pkg.version} | ${pkg.license} */\n\n`;

  return gulp
    .src(`${dirs.src}/css/appcommon.css`)
    .pipe(gulpHeader(banner))
    .pipe(gulpAutoPrefixer({ cascade: false }))
    .pipe(gulpRename({ basename: 'appcommon' }))
    .pipe(gulp.dest(`${dirs.dist}/css`));
});

// Copier JS
gulp.task('copy:js', () =>
  gulp.src(`${dirs.src}/js/appcommon.js`).pipe(gulp.dest(`${dirs.dist}/js`))
);

// Copier tout le reste
gulp.task('copy:misc', () =>
  gulp
    .src(
      [
        `${dirs.src}/**/*`,
        `!${dirs.src}/index.html`,
        `!${dirs.src}/css/appcommon.css`,
        `!${dirs.src}/js/appcommon.js`,
        '!**/.DS_Store'
      ],
      { dot: true }
    )
    .pipe(gulp.dest(dirs.dist))
);

// ---------------------------------------------------------------------
// | Lint                                                              |
// ---------------------------------------------------------------------

gulp.task('lint:js', () =>
  gulp
    .src([`${dirs.src}/js/*.js`, `${dirs.src}/*.js`])
    .pipe(gulpEslint())
    .pipe(gulpEslint.failOnError())
);

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

gulp.task(
  'copy',
  gulp.series('copy:index', 'copy:license', 'copy:css', 'copy:js', 'copy:misc')
);

gulp.task('build', gulp.series(gulp.parallel('clean', 'lint:js'), 'copy'));

gulp.task(
  'archive',
  gulp.series('build', 'archive:create_dir', 'archive:zip')
);

gulp.task('default', gulp.series('build'));
