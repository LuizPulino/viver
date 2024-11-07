// app object
const app = {
    name: 'Caminhar',
};
// set titles
$("head>title, header>h1").text(app.name);

// hash change handler
$(window).on("hashchange", function () {
    showSection(window.location.hash);
});
// show section
const showSection = (hash) => {
    if (!hash) {
        hash = "#" + $("section")[0].id;
        window.location.hash = hash;      
    }
    if($(hash)[0]){
        $("section").hide()
        $(hash).show()
    }else{
        $("section").hide()
        $("#notfound").show()
        $("#hash").text(hash)
    }
}

showSection(window.location.hash);
