var app = new Vue({
    el: "#app",
    data: {
        product: "Socks",
        image: "./assets/vmSocks-green-onWhite.jpg",
        inStock: true, // Vue's if/else conditional binding looks at this prop to determine rendering
        inventory: 100, // Evald in an expression to determine which el to render
        onSale: true // Used by v-show expression
    }
})