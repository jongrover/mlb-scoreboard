$(function(){

  $.getJSON('api/mlb.json', function(data){

    var events = data.sports[0].leagues[0].events;

    $.each(events, function(i, event){

      var competitor = event.competitions[0].competitors;
      
      console.log(competitor[0].team.location+
                  " "+competitor[0].team.name+
                  " vs "+
                  competitor[1].team.location+
                  " "+competitor[1].team.name+
                  "\n"+
                  competitor[0].score+
                  " - "+
                  competitor[1].score);
    });
  });
});