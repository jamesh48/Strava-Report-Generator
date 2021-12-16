"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertRefresh = exports.upsertAccess = void 0;
require("./config");
const upsertAccess = async (Model, values, condition) => {
    const obj = await Model.findOne({ where: condition });
    if (obj) {
        console.log("updating access token");
        await obj.update(values);
        return;
    }
    console.log("creating access token");
    await Model.create(values);
    return;
};
exports.upsertAccess = upsertAccess;
const upsertRefresh = async (Model, values, condition) => {
    const obj = await Model.findOne({ where: condition });
    if (obj) {
        console.log("updating refresh token");
        await obj.update(values);
        return;
    }
    console.log("creating refresh token");
    await Model.create(values);
    return;
};
exports.upsertRefresh = upsertRefresh;
//# sourceMappingURL=utils.js.map