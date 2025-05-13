"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_json_1 = __importDefault(require("koa-json"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_req_validation_1 = require("koa-req-validation");
const app = new koa_1.default();
const router = new koa_router_1.default();
const customErrorMessage = (_ctx, value) => {
    return (`The name must be between 3 and 20 ` +
        `characters long but received length ${value.length}`);
};
const validatorName = [
    (0, koa_req_validation_1.body)("name").isLength({ min: 3
    }).withMessage(customErrorMessage).build(),
    (0, koa_req_validation_1.body)("id").isInt({ min: 10000, max: 20000 }).build()
];
const films = [
    { film_title: 'Hello article', description: 'some text to fill the body' },
    { film_title: 'another article', description: 'again here is some text here to fill' },
    { film_title: 'coventry university', description: 'some news about coventry university' },
    { film_title: 'smart campus', description: 'smart campus is coming to IVE' }
];
//get & post with validation
router.get('/', (0, koa_req_validation_1.query)("name").isLength({ min: 3 }).optional().withMessage(customErrorMessage).build(), (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = (0, koa_req_validation_1.validationResults)(ctx);
    if (result.hasErrors()) {
        ctx.status = 422;
        ctx.body = { err: result.mapped() };
    }
    else {
        ctx.body = { msg: `Hello world! ${ctx.query.name}` };
    }
    yield next();
}));
router.post('/', ...validatorName, (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = (0, koa_req_validation_1.validationResults)(ctx);
    if (result.hasErrors()) {
        ctx.status = 422;
        ctx.body = { err: result.mapped() };
    }
    else {
        const data = ctx.request.body;
        ctx.body = data;
    }
    yield next();
}));
// get, post, getById and Put of end point /films  
router.get('/films', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = films;
    yield next();
}));
router.post('/films', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newFilm = ctx.request.body;
    films.push(newFilm);
    ctx.status = 201;
    ctx.body = newFilm;
    yield next();
}));
//by ID
router.get('/films/:id([0-9]{1,})', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = +ctx.params.id;
    console.log('id= ' + id);
    if ((id < films.length + 1) && (id > 0)) {
        ctx.body = films[id - 1];
    }
    else {
        ctx.status = 404;
    }
    yield next();
}));
router.put('/films/:id([0-9]{1,})', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = +ctx.params.id;
    const updateFilm = ctx.request.body;
    if ((id < films.length + 1) && (id > 0)) {
        films[id - 1].film_title = updateFilm.film_title;
        films[id - 1].description = updateFilm.description;
        ctx.status = 200;
        ctx.body = films;
    }
    else {
        ctx.status = 404;
    }
    yield next();
}));
app.use((ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield next();
        if (ctx.status === 404) {
            ctx.status = 404;
            ctx.body = { err: "No such endpoint existed" };
        }
    }
    catch (err) {
        ctx.body = { err: err };
    }
}));
app.use((0, koa_json_1.default)());
app.use((0, koa_logger_1.default)());
app.use((0, koa_bodyparser_1.default)());
app.use(router.routes()).use(router.allowedMethods());
app.listen(10888, () => {
    console.log("Koa Started");
});
