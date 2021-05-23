var arrLang ={
	'eng':{
		'h':'Home',
		'search':'Search',
		'popular-places':'Popular places',
		'gallery':'Gallery',
		'contact':'Contact',
	},
	'uk':{
		'h':'Домашня',
		'search':'Пошук',
		'popular-places':'Популярні місця',
		'gallery':'Галерея',
		'contact':'Контакти',
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