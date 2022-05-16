
const Home = {
    template: '<h1>Home</h1>',
    name: 'Home'
}
const UserSettings = {
    template: '<h1>UserSettings</h1>',
    name: 'UserSettings'
}
const WishList = {
    template: '<h1>WishList</h1>',
    name: 'WishList'
}
const ShoppingCart = {
    template: '<h1>ShoppingCart</h1>',
    name: 'ShoppingCart'
}

//router voir index.html
const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/user-settings', component: UserSettings? namd : 'UserSettings' }, //name pas obligé mais au cas où
        { path: '/wish-list', component: WishList, name: 'WishList' },
        { path: '/shopping-cart', component: ShoppingCart, name: 'ShoppingCart' },
    ]
})


const vue = new Vue({
    router
}).$mount('#app')