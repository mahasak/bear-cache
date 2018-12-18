"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var MemoryCache_1 = require("../MemoryCache");
var cache = new MemoryCache_1.MemoryCache();
var userId = "USER_1";
var person = {
    firstname: "Person",
    lastname: "1",
    age: 98
};
var personUpdated = {
    firstname: "Person",
    lastname: "1 (Update)",
    age: 99
};
test('MemoryCache type test', function () { return __awaiter(_this, void 0, void 0, function () {
    var size;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expect(cache).toBeInstanceOf(MemoryCache_1.MemoryCache);
                return [4 /*yield*/, cache.size()];
            case 1:
                size = _a.sent();
                expect(size).toEqual(0);
                return [2 /*return*/];
        }
    });
}); });
test('MemoryCache should set and maintain a valid value', function () { return __awaiter(_this, void 0, void 0, function () {
    var sizeBefore, sizeAfter;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cache.size()];
            case 1:
                sizeBefore = _a.sent();
                expect(sizeBefore).toEqual(0);
                cache.set(userId, person);
                return [4 /*yield*/, cache.size()];
            case 2:
                sizeAfter = _a.sent();
                expect(sizeAfter).toEqual(1);
                return [2 /*return*/];
        }
    });
}); });
test('MemoryCache should get a valid value', function () { return __awaiter(_this, void 0, void 0, function () {
    var obj;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cache.get(userId)];
            case 1:
                obj = _a.sent();
                expect(obj.firstname).toBe(person.firstname);
                expect(obj.lastname).toBe(person.lastname);
                expect(obj.age).toBe(person.age);
                return [2 /*return*/];
        }
    });
}); });
test('MemoryCache should delete a value', function () { return __awaiter(_this, void 0, void 0, function () {
    var before, after;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cache.get(userId)];
            case 1:
                before = _a.sent();
                expect(before).not.toBeUndefined();
                return [4 /*yield*/, cache["delete"](userId)];
            case 2:
                _a.sent();
                return [4 /*yield*/, cache.get(userId)];
            case 3:
                after = _a.sent();
                expect(after).toBeUndefined();
                return [2 /*return*/];
        }
    });
}); });
test('MemoryCache should update existing cache properly', function () { return __awaiter(_this, void 0, void 0, function () {
    var before, after;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cache.set(userId, person)];
            case 1:
                _a.sent();
                return [4 /*yield*/, cache.get(userId)];
            case 2:
                before = _a.sent();
                expect(before).toBe(person);
                return [4 /*yield*/, cache.set(userId, personUpdated)];
            case 3:
                _a.sent();
                return [4 /*yield*/, cache.get(userId)];
            case 4:
                after = _a.sent();
                expect(after).toBe(personUpdated);
                return [2 /*return*/];
        }
    });
}); });
test('MemoryCache should clear properly', function () { return __awaiter(_this, void 0, void 0, function () {
    var size, sizeAfter;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cache.set("USER_2", person)];
            case 1:
                _a.sent();
                return [4 /*yield*/, cache.set("USER_3", person)];
            case 2:
                _a.sent();
                return [4 /*yield*/, cache.size()];
            case 3:
                size = _a.sent();
                expect(size).toEqual(3);
                return [4 /*yield*/, cache.clear()];
            case 4:
                _a.sent();
                return [4 /*yield*/, cache.size()];
            case 5:
                sizeAfter = _a.sent();
                expect(sizeAfter).toEqual(0);
                return [2 /*return*/];
        }
    });
}); });
