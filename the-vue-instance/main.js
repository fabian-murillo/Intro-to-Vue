// We want to link our data (JS) to our HTML (our view):
// We want to connect our data (JS) to our view (HTML)
// So we start by creating a variable:
var product = "Socks";

// We then create our new Vue instance, which is passed an options obj:
var app = new Vue({
    el: '#app', // The 'el' property points to the el we want connect our instance of Vue w/
    data: { // The 'data' prop is where we define data used by the Vue instance
        product: "Socks", // This data can be accessed from the el connected to the vue instance
        description: "A pair of warm, fuzzy socks."
    }
})