


$.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results){
  console.log(results);
  results.data.feed.forEach(function(result){
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {
      title: result.content.title,
      body: "This is my first post!",
      image: result.content.media.images[0].url,
      shares:result.fb_shares.count,
      link:result.content.url
    };
    var html = template(context);
      console.log(result.fb_shares)


    // $("#main").append("<li>"+result.content.title+"</li>")
    $("#main").append(html)
  })
})
function fetchFromMashable(){
  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json", function(results){
    console.log(results.hot);
    results.hot.forEach(function(result){
      var source   = $("#entry-template").html();
      var template = Handlebars.compile(source);
      var context = {
        title: result.title,
        image: result.image,
        shares:result.shares.total,
        link:result.content.url
      };
      var html = template(context);

      // $("#main").append("<li>"+result.content.title+"</li>")
      $("#main").append(html)
    })
  })
}
