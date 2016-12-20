const get = (function get() {
    'use strict';

    function byId(id) {
        return document.getElementById(id);
    }

    function byClass(clss) {
        return document.getElementsByClassName(clss);
    }

    function byTag(tag) {
        return document.getElementsByTagName(tag);
    }

    function byName(nm) {
        return document.getElementsByTagName(nm);
    }

    function bySelector(qs) {
        return document.querySelectorAll(qs);
    }

    return {
        byId,
        byClass,
        byTag,
        byName,
        bySelector
    };
}());

module.exports = get;
