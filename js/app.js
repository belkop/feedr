


$.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results){
  console.log(results);
  results.data.feed.forEach(function(result){
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {
      title: result.content.title,
      body: "This is my first post!",
      image: result.content.media.images[0].url,
      shares:result.fb_shares.count
    };
    var html = template(context);
      console.log(result.fb_shares)


    // $("#main").append("<li>"+result.content.title+"</li>")
    $("#main").append(html)
  })
})
