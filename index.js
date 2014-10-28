appAPI.ready(function($) {

  if (!document.location.href.match("npmjs.org")) return

  var url = document.location.href
    .replace("www.npmjs.org", "preview.npmjs.com")
    .replace("npmjs.org", "preview.npmjs.com")

  $("body").prepend("<a class=\"go-to-newww\" href=\"" + url + "\">View this page on newww</a>")

  $('.go-to-newww').css({
    position: 'absolute',
    top: '15px',
    left: '15px'
  })

})
