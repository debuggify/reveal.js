
// tagcloud
[].forEach.call( document.querySelectorAll('[tagcloud]'), function(cloud){
    cloud.innerHTML = '<span style="font-weight:bold">' + cloud.innerHTML.split(/\n/).join('</span> <span style="font-weight:bold">') + '</span>';
    [].forEach.call( cloud.querySelectorAll('span'), function(elem){
        var prctnge = Math.random() * 60 + 140;
        elem.style.fontSize = prctnge + '%';
        elem.style.color = 'hsl('+ Math.random()*360 +', 70%, 60%)'
        elem.classList.add('clouditem')
    });
});


addEventListener('load', function(){
//return;
    [].forEach.call( document.querySelectorAll('section > section li') , function(elem){
        elem.classList.add('fragment')
    });

})

// screenshots
function url2png(url,size){
    var api_key = "P4EA9CF92E4F9C";
    var private_key = "S6DF6D2F1A4204";

    url = url.trim()

    var token = md5("" + private_key + '+' + url);

    size = size || "s1024x768-t650x650";

    return "http://api.url2png.com/v4/" + [api_key, token, size, url].join('/');
}
// screenshots
[].forEach.call( document.querySelectorAll('a[screenshot]'), function(elem){
    var img = document.createElement('img');
    img.src = url2png(elem.href, elem.getAttribute('screenshot'));
    elem.appendChild(img);
});

