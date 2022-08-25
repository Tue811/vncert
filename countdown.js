// Set the date we're counting down to
var countDownDate = new Date("Sep 30, 2022 15:37:25").getTime();

// For remember old datetime
var old_days, old_hours, old_minutes, old_seconds;

// Update the count down every 1 second
var x = setInterval(function() {
  
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(days < 0) days = 0;
  if(hours < 0) hours = 0;
  if(minutes < 0) minutes = 0;
  if(seconds < 0) seconds = 0;
  
  // if(old_days != days)
  //   $('.countdown .flip-days').removeClass('play');
  if(old_days != days)
    $('.countdown .flip-days').removeClass('play');
  
  if(old_hours != hours)
    $('.countdown .flip-hours').removeClass('play');
  
  if(old_minutes != minutes)
    $('.countdown .flip-minutes').removeClass('play');
  
  if(old_seconds != seconds)
    $('.countdown .flip-seconds').removeClass('play');

  var y = setInterval(function() {
    $('.countdown .flip-days .flip-clock-active .up .counter').text(('0' + days).slice(-2));
    $('.countdown .flip-days .flip-clock-active .down .counter').text(('0' + days).slice(-2));
    
    if(old_days != days)
      $('.countdown .flip-days').addClass('play');
    
    $('.countdown .flip-hours .flip-clock-active .up .counter').text(('0' + hours).slice(-2));
    $('.countdown .flip-hours .flip-clock-active .down .counter').text(('0' + hours).slice(-2));
    
    if(old_hours != hours)
      $('.countdown .flip-hours').addClass('play');
    
    $('.countdown .flip-minutes .flip-clock-active .up .counter').text(('0' + minutes).slice(-2));
    $('.countdown .flip-minutes .flip-clock-active .down .counter').text(('0' + minutes).slice(-2));
    
    if(old_minutes != minutes)
      $('.countdown .flip-minutes').addClass('play');
    
    $('.countdown .flip-seconds .flip-clock-active .up .counter').text(('0' + seconds).slice(-2));
    $('.countdown .flip-seconds .flip-clock-active .down .counter').text(('0' + seconds).slice(-2));
    if(old_seconds != seconds)
      $('.countdown .flip-seconds').addClass('play');
    
    old_days = days;
    old_hours = hours;
    old_minutes = minutes;
    old_seconds = seconds;
    clearInterval(y);
  }, 100);
  
  
  $('.countdown .flip-days .flip-clock-before .up .counter').text(('0' + (days + 1)).slice(-2));
  $('.countdown .flip-days .flip-clock-before .down .counter').text(('0' + (days + 1)).slice(-2));
  
  $('.countdown .flip-hours .flip-clock-before .up .counter').text(('0' + (hours + 1)).slice(-2));
  $('.countdown .flip-hours .flip-clock-before .down .counter').text(('0' + (hours + 1)).slice(-2));
  
  $('.countdown .flip-minutes .flip-clock-before .up .counter').text(('0' + (minutes + 1)).slice(-2));
  $('.countdown .flip-minutes .flip-clock-before .down .counter').text(('0' + (minutes + 1)).slice(-2));
  
  $('.countdown .flip-seconds .flip-clock-before .up .counter').text(('0' + (seconds + 1)).slice(-2));
  $('.countdown .flip-seconds .flip-clock-before .down .counter').text(('0' + (seconds + 1)).slice(-2));
  
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    $('.countdown .flip .counter').text('--');
  }
}, 1000);