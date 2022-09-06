Vue.component('myerror', {

    template: `<span v-show="$parent.error">Ошибка</span>`
});