import create from "zustand";
export var useProgressBarProgressStore = create(function (set) { return ({
    progressBarProgress: 0,
    incrementProgressBarProgress: function (progressBarProgress) {
        return set(function (state) { return ({
            progressBarProgress: state.progressBarProgress === 95 ? 95 : state.progressBarProgress + 1
        }); });
    },
    completeProgressBarProgress: function (progressBarProgress) {
        return set(function () { return ({ progressBarProgress: 100 }); });
    },
    resetProgressBarProgress: function (progressBarProgress) {
        return set(function () { return ({ progressBarProgress: 0 }); });
    }
}); });
//# sourceMappingURL=useProgressBarProgress.js.map