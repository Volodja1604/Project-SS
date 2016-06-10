// ab669e2b74baccd831a6742323cbee47

$(document).ready(function(){

	$('.tabs_control-link').on('click', function(e){
    
   e.preventDefault();
    var item=$(this).closest('.tabs_controls-item');
    var contentItem=$('.tabs_item');
    var  itemPosition=item.index();
   
    contentItem.eq(itemPosition).addClass('active')
    .siblings().removeClass('active');
     item.addClass('active').siblings().removeClass('active');
	});

});

$(function() {


	var APPID = "ab669e2b74baccd831a6742323cbee47";
	
	$('.btn-secondary').click(function() {
		var cityname = $('#city_name').val();
         $('.table_weather').css("display", "block");
		$.get('http://api.openweathermap.org/data/2.5/forecast?q=' + cityname + '&APPID=' + APPID, function(data) {

       for(var i=0;i<5;i++)
               {
       
   
       
	    
      	$('tr:eq('+(i+1)+')').children('#day').html(data.list[i].dt_txt);
	 	$('tr:eq('+(i+1)+')').children('#wheather_day').html(data.list[i].weather[0].description);
	    $('tr:eq('+(i+1)+')').find('#cloudimg').attr('src', 'http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png');
		$('tr:eq('+(i+1)+')').children('#temp').html(Math.round(data.list[i].main.temp - 273.15));
		$('tr:eq('+(i+1)+')').children('#press').html(data.list[i].main.pressure);
		$('tr:eq('+(i+1)+')').children('#humidity').html(data.list[i].main.humidity);
		$('tr:eq('+(i+1)+')').children('#wind').html(data.list[i].wind.speed); 
		  
               }
		}, 'json').done(function() {
			console.log('Request completed successfully');
		}).fail(function() {
			console.log('Request is failure');
		});
	});
});


$(function() {


	var APPID = "ab669e2b74baccd831a6742323cbee47";

	$('.forte').click(function() {
		var cityname = $('#city_name').val();
         $('.table_weather1').css("display", "block");

		$.get('http://api.openweathermap.org/data/2.5/forecast?q=' + cityname + '&APPID=' + APPID, function(data) {
           
                 for(var i=0,j=1;i<data.list.length;i=i+8,j++)
               {
             
             
            
       
	    
      	$('.table_weather1').find('tr:eq('+(j)+')').children('#day').html(data.list[i].dt_txt);
	 	$('.table_weather1').find('tr:eq('+(j)+')').children('#wheather_day').html(data.list[i].weather[0].description);
	    $('.table_weather1').find('tr:eq('+(j)+')').find('#cloudimg').attr('src', 'http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png');
		$('.table_weather1').find('tr:eq('+(j)+')').children('#temp').html(Math.round(data.list[i].main.temp - 273.15));
		$('.table_weather1').find('tr:eq('+(j)+')').children('#press').html(data.list[i].main.pressure);
		$('.table_weather1').find('tr:eq('+(j)+')').children('#humidity').html(data.list[i].main.humidity);
		$('.table_weather1').find('tr:eq('+(j)+')').children('#wind').html(data.list[i].wind.speed);  
		
		
               }
		}, 'json').done(function() {
			console.log('Request completed successfully');
		}).fail(function() {
			console.log('Request is failure');
		});
	});
});