function replace(data, var1, var2, var3, var4, var5, var6, speach){

	const mapObj = {
		'{var1}': var1,
		'{var2}': var2,
		'{var3}': var3,
		'{var4}': var4,
		'{var5}': var5,
		'{var6}': var6,
		'{speach}': speach};

	let final_text = [];
	for (str in data.text){
		text = data.text[str]
		re_text = text.replace(/{var1}|{var2}|{var3}|{var4}|{var5}|{var6}|{speach}/g, function(matched){
			return mapObj[matched];	
		});
		final_text.push(re_text);
	};
	return final_text
};

function addData(data){
	for (line in data){
		const story = `
		<p>${data[line]}</p>
		`
		$story = $(story);
		$story.appendTo('.story-container');
	console.log(data[line])
	}

};


$(document).ready(function(){
	$('.btn').click(function(){
		const var1 = $('input#var1').val();
		const var2 = $('input#var2').val();
		const var3 = $('input#var3').val();
		const var4 = $('input#var4').val();
		const var5 = $('input#var5').val();
		const var6 = $('input#var6').val();
		const speach = $('input#speach').val();

		$.getJSON('https://api.myjson.com/bins/jcmhn',
			function(data){
			addData(replace(data, var1, var2, var3, var4, var5, var6, speach));
	});
	})
});