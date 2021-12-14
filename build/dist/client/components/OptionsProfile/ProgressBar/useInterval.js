import React from "react";
var useInterval = function (callback, delay) {
    var savedCallback = React.useRef();
    React.useEffect(function () {
        savedCallback.current = callback;
    }, [callback]);
    React.useEffect(function () {
        function tick() {
            savedCallback.current();
        }
        if (delay === -1) {
            tick();
            return;
        }
        if (delay !== null) {
            var id_1 = setInterval(tick, delay);
            return function () { return clearInterval(id_1); };
        }
    }, [delay]);
};
export { useInterval };
//# sourceMappingURL=useInterval.js.map