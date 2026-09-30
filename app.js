/* Gravel Rocks wireframe site — shared behaviour */
(function(){
  var CTA = '<a class="btn primary only-pre" href="index.html#notify">Notify me</a>'
          + '<a class="btn primary only-open" href="index.html#enter">Enter now <span class="arw">&rarr;</span></a>';

  var rideMenu = '<ul class="menu">'
    + '<li><a href="ride.html">Overview<small>The enduro-style, timed-segment format</small></a></li>'
    + '<li><a href="ride-format.html">Format &amp; stages</a></li>'
    + '<li><a href="ride-entries.html">Distances &amp; entries</a></li>'
    + '<li><a href="ride-essentials.html">Rider essentials</a></li></ul>';

  var runMenu = '<ul class="menu">'
    + '<li><a href="run.html">Overview<small>Trail running, raced or just enjoyed</small></a></li>'
    + '<li><a href="run-format.html">Format &amp; stages</a></li>'
    + '<li><a href="run-entries.html">Distances &amp; entries</a></li>'
    + '<li><a href="run-essentials.html">Runner essentials</a></li></ul>';

  var festMenu = '<ul class="menu">'
    + '<li><a href="festival.html">Overview<small>Camping, food and entertainment, included</small></a></li>'
    + '<li><a href="festival-weekend.html">The weekend</a></li>'
    + '<li><a href="festival-camping.html">Camping &amp; accommodation</a></li>'
    + '<li><a href="festival.html#food">Food, bar &amp; coffee</a></li>'
    + '<li><a href="festival.html#expo">Event village &amp; expo</a></li>'
    + '<li><a href="festival-family.html">Bring the family</a></li></ul>';

  var header = ''
    + '<div class="wmark">Wireframe prototype · Gravel Rocks · greyscale with placeholder content · use the toggle below to switch launch state</div>'
    + '<div class="demobar"><b>Prototype state:</b>'
    +   '<span class="seg"><button data-s="pre" class="on">Before entries open</button>'
    +   '<button data-s="open">Entries open</button></span>'
    +   '<span>flips the whole site, as a CMS setting would</span></div>'
    + '<header class="site-hdr"><div class="wrap hdr-in">'
    +   '<a class="logo" href="index.html">Gravel Rocks<small>A Focal Events production</small></a>'
    +   '<ul class="nav">'
    +     '<li data-nav="ride"><a href="ride.html">Ride <span class="cv">&#9662;</span></a>' + rideMenu + '</li>'
    +     '<li data-nav="run"><a href="run.html">Run <span class="cv">&#9662;</span></a>' + runMenu + '</li>'
    +     '<li data-nav="festival"><a href="festival.html">The Festival <span class="cv">&#9662;</span></a>' + festMenu + '</li>'
    +     '<li data-nav="location"><a href="location.html">Location</a></li>'
    +     '<li data-nav="results"><a href="results.html">Results</a></li>'
    +     '<li data-nav="news"><a href="news.html">News</a></li>'
    +     '<li data-nav="about"><a href="about.html">About</a></li>'
    +   '</ul>'
    +   '<span class="spacer"></span>'
    +   CTA
    +   '<button class="hamb" id="hambBtn">&#9776;</button>'
    + '</div>'
    + '<div class="wrap mnav" id="mnav">'
    +   '<div class="grp">Ride</div><div class="sub"><a href="ride.html">Overview</a><a href="ride-format.html">Format &amp; stages</a>'
    +     '<a href="ride-entries.html">Distances &amp; entries</a><a href="ride-essentials.html">Rider essentials</a></div>'
    +   '<div class="grp">Run</div><div class="sub"><a href="run.html">Overview</a><a href="run-format.html">Format &amp; stages</a>'
    +     '<a href="run-entries.html">Distances &amp; entries</a><a href="run-essentials.html">Runner essentials</a></div>'
    +   '<div class="grp">The Festival</div><div class="sub"><a href="festival.html">Overview</a><a href="festival-weekend.html">The weekend</a><a href="festival-camping.html">Camping &amp; accommodation</a>'
    +     '<a href="festival.html#food">Food, bar &amp; coffee</a><a href="festival.html#expo">Event village &amp; expo</a><a href="festival-family.html">Bring the family</a></div>'
    +   '<a href="location.html">Location</a><a href="results.html">Results</a><a href="news.html">News</a><a href="about.html">About</a>'
    + '</div></header>';

  var footer = '<footer class="site-ftr"><div class="wrap">'
    + '<div class="fcols">'
    +   '<div class="fcol"><h4>Explore</h4><a href="ride.html">Ride</a><a href="run.html">Run</a><a href="festival.html">The Festival</a>'
    +     '<a href="location.html">Location</a><a href="results.html">Results</a><a href="news.html">News</a><a href="about.html">About</a></div>'
    +   '<div class="fcol"><h4>Info</h4><a href="#">Terms and conditions</a><a href="#">Refund policy</a>'
    +     '<a href="#">Privacy policy</a><a href="#">Cookie policy</a><a href="#">Other events</a></div>'
    +   '<div class="fcol"><h4>Follow</h4><a href="#">Instagram</a><a href="#">Facebook</a></div>'
    +   '<div class="fcol"><h4>Take part</h4>'
    +     '<a class="btn primary only-pre" href="index.html#notify">Notify me</a>'
    +     '<a class="btn primary only-open" href="index.html#enter">Enter now</a></div>'
    + '</div>'
    + '<div class="fbot"><span>&copy; 2026 Focal Events · Gravel Rocks</span>'
    +   '<span>Wireframe prototype · Alexander Marketing</span></div>'
    + '</div></footer>';

  function ready(fn){ if(document.readyState!='loading'){fn();} else {document.addEventListener('DOMContentLoaded',fn);} }

  ready(function(){
    var top = document.getElementById('site-top'); if(top) top.innerHTML = header;
    var foot = document.getElementById('site-foot'); if(foot) foot.innerHTML = footer;

    var page = document.body.getAttribute('data-page');
    var li = document.querySelector('.nav li[data-nav="'+page+'"]');
    if(li) li.classList.add('active');

    var segBtns = document.querySelectorAll('.seg button');
    for(var i=0;i<segBtns.length;i++){
      segBtns[i].addEventListener('click', function(){
        var s = this.getAttribute('data-s');
        document.body.className = document.body.className.replace(/state-(pre|open)/,'state-'+s);
        var all = document.querySelectorAll('.seg button');
        for(var j=0;j<all.length;j++){ all[j].classList.toggle('on', all[j].getAttribute('data-s')===s); }
      });
    }

    var hb = document.getElementById('hambBtn'), mn = document.getElementById('mnav');
    if(hb && mn){ hb.addEventListener('click', function(){ mn.style.display = (mn.style.display==='block')?'none':'block'; }); }

    // Illustrative countdown — real date set in the CMS once confirmed
    var target = new Date('2026-12-01T12:00:00+00:00').getTime();
    function pad(n){ return (n<10?'0':'')+n; }
    function setTxt(id,v){ var el=document.getElementById(id); if(el) el.textContent=v; }
    function tick(){
      var d = document.getElementById('cd-d'); if(!d) return;
      var diff = target - Date.now();
      if(diff<=0){ diff=0; }
      d.textContent = Math.floor(diff/86400000);
      setTxt('cd-h', pad(Math.floor(diff%86400000/3600000)));
      setTxt('cd-m', pad(Math.floor(diff%3600000/60000)));
      setTxt('cd-s', pad(Math.floor(diff%60000/1000)));
    }
    tick(); setInterval(tick,1000);
  });
})();
