export default {
    fetch: function (name) {
        try {
            return window.JSON.parse(window.localStorage.getItem(name))
        } catch (err) {
            return {};
        }
    },
    save: function (name, items) {
        window.localStorage.setItem(name, window.JSON.stringify(items))
    },
    clear_all:function () {
        localStorage.clear()
    },
    clear_one:function (key){
        localStorage.removeItem(key)
    }
}
