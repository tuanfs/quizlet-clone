const userRouter = require('./userRouter');
const classRouter = require('./classRouter');
const folderRouter = require('./folderRouter');
const courseRouter = require('./courseRouter');

function route(app) {
  app.use('/api', userRouter);
  app.use('/api/class', classRouter);
  app.use('/api/folder', folderRouter);
  app.use('/api/course', courseRouter);
}

module.exports = route;
