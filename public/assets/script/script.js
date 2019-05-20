
//******************************************************************Article API*********************************************************************** */
var articleURL = 'https://newsapi.org/v2/everything?q=esports&sortBy=popularity&apiKey=f38cc49da4df4fd0b9ceea723e83cb15';

$.ajax({
  url: articleURL,
  method: "GET"
}).then(function (response) {
  var results = response.articles;
  for (var i = 0; i < 4; i++) {
    var title = results[i].title;
    var author = results[i].author;
    var image = results[i].urlToImage;
    var description = results[i].description;
    var content = results[i].content;
    var url = results[i].url;

    //varibles
    var articles = $("<div class='col-12 text-center art-div'>");
    //grabs rating and sets it to a paragraph tag
    if (title) {
      var h1 = $("<h2 id='art-head'>").text(title);
      articles.append(h1);
    }
    if (image) {
      var personImage = $("<img class='art-img'>");
      personImage.attr("src", image);
      articles.append(personImage);
    }
    if (author) {
      var p2 = $("<p class='art-info'>").html("<h4>Author: </h4> " + author);
      articles.append(p2);
    }
    if (description) {
      var p1 = $("<p class='art-info'>").html("<h4>Description: </h4> " + description);
      articles.append(p1);
    }
    if (content) {
      var p3 = $("<p class='art-info'>").html(
        "<h4>Article:</h4> " +
          content +
          " " +
          "<a href='" +
          url +
          "' target='_blank'> Read more </a>"
      );
      articles.append(p3);
    } else {
      var p1 = $("<p class='art-info'>").html(
        "<h3>Description:</h3> " +
          description +
          " " +
          "<a href='" +
          url +
          "' target='_blank'> Read more </a>"
      );
    }


    $(".mainArticles").append(articles);
  }
})


//******************************************************************NavBar jQuery*********************************************************************** */
function navBar(){


  if(href === "/leaderboards"){
    $('.hm').removeClass('active')
    $('.lb').addClass('active')
    $('.cm').removeClass('active')
    $('.to').removeClass('active')
    $('.con').removeClass('active')
    $('.hd').removeClass('active')
}
if(href === "/compete"){
    $('.hm').removeClass('active')
    $('.lb').removeClass('active')
    $('.cm').addClass('active')
    $('.to').removeClass('active')
    $('.con').removeClass('active')
    $('.hd').removeClass('active')
}

if(href === "/t"){
    $('.hm').removeClass('active')
    $('.lb').removeClass('active')
    $('.cm').removeClass('active')
    $('.to').addClass('active')
    $('.con').removeClass('active')
    $('.hd').removeClass('active')

}
$(".con").on("click", function (){
    $('.hm').removeClass('active')
    $('.lb').removeClass('active')
    $('.cm').removeClass('active')
    $('.to').removeClass('active')
    $('.con').addClass('active')
    $('.hd').removeClass('active')

})
$(".hd").on("click", function (){
    $('.hm').removeClass('active')
    $('.lb').removeClass('active')
    $('.cm').removeClass('active')
    $('.to').removeClass('active')
    $('.con').removeClass('active')
    $('.hd').addClass('active')
})

$(".hm").on("click", function (){
    $('.hm').addClass('active')
    $('.lb').removeClass('active')
    $('.cm').removeClass('active')
    $('.to').removeClass('active')
    $('.con').removeClass('active')
    $('.hd').removeClass('active')

})
}
navBar()

