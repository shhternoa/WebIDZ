var arrLang ={
	'eng':{
		'h':'Home',
		'search':'Search',
		'popular-places':'Popular places',
		'gallery':'Gallery',
		'contact':'Contact',
		'slider1h2':'Your Dream Vacation is here!',
		'slider1h5':'Visit the most popular places in London!',
		'lm':'Learn More',
		'slider2h2':'You can make this even from your phone',
		'slider2h5':'Booking is the easier when it"s in the pocket',
		'slider3h2':'Multiculturalism',
		'slider3h5':'People from all world living in the London! LGBTQ+ is very welcome :)',
	},
	'uk':{
		'h':'Домашня',
		'search':'Пошук',
		'popular-places':'Популярні місця',
		'gallery':'Галерея',
		'contact':'Контакти',
		'slider1h2':'Відпустка вашої мрії вже тут!',
		'slider1h5':'Відвідайте найпопулярніші місця Лондона!',
		'lm':'Дізнайтеся більше',
		'slider2h2':'Ви можете зробити це навіть з телефону',
		'slider2h5':'Бронювання стає простішим, коли воно в кишені',
		'slider3h2':'Мультикультуралізм',
		'slider3h5':'Люди з усього світу живуть у Лондоні! LGBTQ + дуже вітається :)',
	}
}











$(function(){
	$('.translate').click(function(){
		var lang = $(this).attr('id');

		$('.lang').each(function(index,item){
			$(this).text(arrLang[lang][$(this).attr('key')]);
		});
	});
});

