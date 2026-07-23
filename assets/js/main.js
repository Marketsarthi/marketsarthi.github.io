!(function(){
  'use strict';
  var n=document.querySelector('.nav');
  window.addEventListener('scroll',function(){if(n)n.classList.toggle('on',window.scrollY>60)});

  var b=document.getElementById('burger'),l=document.getElementById('navLinks');
  if(b&&l){b.addEventListener('click',function(){b.classList.toggle('on');l.classList.toggle('open')});
    l.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){b.classList.remove('on');l.classList.remove('open')})})}

  var r=document.querySelectorAll('.reveal');
  if(r.length){var o=new IntersectionObserver(function(e){e.forEach(function(en){if(en.isIntersecting)en.target.classList.add('on')})},{threshold:.1,rootMargin:'0px 0px -30px 0px'});r.forEach(function(el){o.observe(el)})}

  var c=document.querySelectorAll('.stat-num[data-target]');
  if(c.length){var co=new IntersectionObserver(function(e){e.forEach(function(en){if(en.isIntersecting){var el=en.target,t=parseInt(el.getAttribute('data-target')),s=el.getAttribute('data-suffix')||'',st=t/125,cur=0;
    function tk(){cur+=st;if(cur<t){el.textContent=Math.floor(cur)+s;requestAnimationFrame(tk)}else{el.textContent=t+s}}tk();co.unobserve(el)}})},{threshold:.4});c.forEach(function(el){co.observe(el)})}

  document.querySelectorAll('.faq-i').forEach(function(it){it.querySelector('.faq-q').addEventListener('click',function(){var w=it.classList.contains('open');
    document.querySelectorAll('.faq-i.open').forEach(function(o){o.classList.remove('open')});if(!w)it.classList.add('open')})});

  var f=document.getElementById('contactForm');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();
    var name=f.querySelector('#name').value.trim();
    var email=f.querySelector('#email').value.trim();
    var phone=f.querySelector('#phone').value.trim();
    var org=f.querySelector('#org').value.trim();
    var svc=f.querySelector('#service');
    var service=svc.options[svc.selectedIndex].text;
    var msg=f.querySelector('#msg').value.trim();
    var subject='MarketSarthi Enquiry — '+name+' | '+org;
    var body='Full Name: '+name+'\nEmail: '+email+'\nPhone: '+phone+'\nOrganisation: '+org+'\nService: '+service+'\n\nProject Details:\n'+msg;
    window.location.href='mailto:psingh8000@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  })}

  var btt=document.querySelector('.btt');
  if(btt){window.addEventListener('scroll',function(){btt.classList.toggle('on',window.scrollY>600)});btt.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})})}

  var pg=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(a){if(a.getAttribute('href')===pg)a.classList.add('active')});
})();
