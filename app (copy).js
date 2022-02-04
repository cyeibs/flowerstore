const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');

// Импортируем созданный в отдельный файлах рутеры.
const indexRouter = require('./routes/index');
// const entriesRouter = require('./routes/entries');
const userRouter = require('./routes/user');
const catalogRouter = require('./routes/catalog');
const { send } = require('process');

const productRouter = require('./routes/productRouter');

const aboutUsRouter = require('./routes/aboutUsRouter');

const contactRouter = require('./routes/contactRouter');

const binRouter = require('./routes/binRouter');

const app = express();
const PORT = 3000;

// Сообщаем express, что в качестве шаблонизатора используется "hbs".
app.set('view engine', 'hbs');
// Сообщаем express, что шаблона шаблонизаторая (вью) находятся в папке "ПапкаПроекта/views".
app.set('views', path.join(__dirname, 'views'));

// Подключаем middleware morgan с режимом логирования "dev", чтобы для каждого HTTP-запроса на сервер в консоль выводилась информация об этом запросе.
app.use(logger('dev'));
// Подключаем middleware, которое сообщает epxress, что в папке "ПапкаПроекта/public" будут находится статические файлы, т.е. файлы доступные для скачивания из других приложений.
app.use(express.static(path.join(__dirname, 'public')));
// Подключаем middleware, которое позволяет читать содержимое body из HTTP-запросов типа POST, PUT и DELETE.
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    store: new FileStore(),
    secret: 'fjhkfhgkjsdhfjknkjdsf',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
    name: 'authorization',
  })
);

app.use((req, res, next) => {
  res.locals.username = req.session?.user; // optional chaining operator
  next();
});

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/catalog', catalogRouter);

app.use('/product', productRouter);
app.use('/aboutUs', aboutUsRouter);
app.use('/contact', contactRouter);

app.use('/bin', binRouter);

// Если HTTP-запрос дошёл до этой строчки, значит ни один из ранее встречаемых рутов не ответил на запрос. Это значит, что искомого раздела просто нет на сайте. Для таких ситуаций используется код ошибки 404. Создаём небольшое middleware, которое генерирует соответствующую ошибку.
app.use((req, res) => {
  res.send('Что-то пошло не так');
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
