// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   calc.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: vifernan <vifernan@42.fr>                  +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/10/30 17:18:00 by vifernan          #+#    #+#             //
//   Updated: 2021/10/31 00:25:50 by vifernan         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var global = 0;
var global2 = 0;
var flag = 0;
var flag2 = 0;
var result = 0;
var m = 0;
var d = 0;
var l = 0;
var p = 0;
var eq = 0;
var po = 0;
var per = 0;

function keyhook(e){
	console.log(e.which);
	if (e.which == 49)
	{
		document.getElementById("botton_1").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_1')", 90);
		principal(1);
	}
	if (e.which == 50)
	{
		document.getElementById("botton_2").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_2')", 90);
		principal(2);
	}
	if (e.which == 51)
	{
		document.getElementById("botton_3").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_3')", 90);
		principal(3);
	}
	if (e.which == 52)
	{
		document.getElementById("botton_4").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_4')", 90);
		principal(4);
	}
	if (e.which == 53)
	{
		document.getElementById("botton_5").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_5')", 90);
		principal(5);
	}
	if (e.which == 54)
	{
		document.getElementById("botton_6").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_6')", 90);
		principal(6);
	}
	if (e.which == 55)
	{
		document.getElementById("botton_7").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_7')", 90);
		principal(7);
	}
	if (e.which == 56)
	{
		document.getElementById("botton_8").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_8')", 90);
		principal(8);
	}
	if (e.which == 57)
	{
		document.getElementById("botton_9").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_9')", 90);
		principal(9);
	}
	if (e.which == 48)
	{
		document.getElementById("botton_0").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_0')", 90);
		principal(0);
	}
	if (e.which == 43)
	{
		document.getElementById("botton_mas").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_mas')", 90);
		plus(0);
	}
	if (e.which == 45)
	{
		document.getElementById("botton_menos").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_menos')", 90);
		menus(0);
	}
	if (e.which == 37)
	{
		document.getElementById("botton_percent").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_percent')", 90);
		perc(1);
	}
	if (e.which == 42)
	{
		document.getElementById("botton_multi").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_multi')", 90);
		multi(1);
	}
	if (e.which == 46)
	{
		document.getElementById("botton_point").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
		setTimeout("Color('botton_point')", 90);
		point();
	}
	if (e.which == 47)
	{
		document.getElementById("botton_divi").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
		setTimeout("Color('botton_divi')", 90);
		divi(1);
	}
	if (e.which == "Escape")
	{
		document.getElementById("botton_del").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_del')", 90);
		del();
	}
	if (e.which == 13)
	{
		document.getElementById("botton_equal").style.backgroundColor = "rgba(190, 190, 190, 0.678)";  
        setTimeout("Color('botton_equal')", 90);
		equal();
	}
}

function Color(clr)   
{  
    document.getElementById(clr).style.backgroundColor = 'transparent';  
} 

function principal(value){
	console.log(document.getElementById("principal").value);
	if (m > 0 || d > 0 || l > 0 || p > 0 || per > 0)
	{
		if (flag2 != 0 && po == 0)
			global2 *= 10;
		if (flag2 != 0 && po > 0)
		{
			for (let i = 0; i < po; i++) {
				value /= 10;
				console.log("VALUE" + value);
			}
			po++;
		}
		flag2++;
		global2 += value;
		if (po > 0)
			document.getElementById("principal").value = Number(global2).toFixed(po - 1);
		else
			document.getElementById("principal").value = global2;
	}
	else
	{
		if (flag != 0 && po == 0)
			global *= 10;
		if (flag != 0 && po > 0)
		{
			for (let i = 0; i < po; i++) {
				value /= 10;
				console.log("VALUE" + value);
			}
			po++;
		}
		global += value;
		flag++;
		if (po > 0)
			document.getElementById("principal").value = Number(global).toFixed(po - 1);
		else
			document.getElementById("principal").value = global;
	}
	console.log("PO:" + po);
	console.log("GLOBAL:" + global);
}

function masme(value){
	if (m > 0 || d > 0 || l > 0 || p > 0 || per > 0)
	{
		global2 *= -1;
		document.getElementById("principal").value = global2;
	}
	else
	{
		global *= -1;
		document.getElementById("principal").value = global;
	}
}

function perc(value){
	p = 0;
	m = 0;
	d = 0;
	po = 0;
	l = 0;
	per++;
}

function menus(value){
	p = 0;
	m = 0;
	d = 0;
	po = 0;
	per = 0;
	l++;
	if (l == 2)
	{
		document.getElementById("principal").value = global2 - global;
		l = 1;
		global -= global2;
		global2 = 0;
	}
}

function plus(value){
	l = 0;
	m = 0;
	d = 0;
	po = 0;
	per = 0;
	p++;
	if (p == 2)
	{
		document.getElementById("principal").value = global2 + global;
		p = 1;
		global += global2;
		global2 = 0;
	}
}

function divi(value){
	p = 0;
	l = 0;
	m = 0;
	po = 0;
	per = 0;
	d++;
	if (d == 2)
	{
		document.getElementById("principal").value = global2 / global;
		d = 1;
		global /= global2;
		global2 = 0;
	}
}

function multi(value){
	d = 0;
	l = 0;
	p = 0;
	po = 0;
	per = 0;
	m++;
	if (m == 2) /* replica para todos los casos */
	{
		document.getElementById("principal").value = global2 * global;
		m = 1;
		global *= global2;
		global2 = 0;
	}
}

function point(value)
{
	po = 1;
	document.getElementById("principal").value = global + ".";
}

function del(){
	d = 0;
	l = 0;
	m = 0;
	p = 0;
	po = 0;
	per = 0;
	global = 0;
	global2 = 0; 
	po = 0;
	document.getElementById("principal").value = global;
}

function equal(){
	if (m > 0)
	{
		result = global * global2;
		m = 0;
	}
	if (d > 0)
	{
		result = global / global2;
		d = 0;
	}
	if (p > 0)
	{
		result = global + global2;
		p = 0;
	}
	if (l > 0)
	{
		result = global - global2;
		l = 0;
	}
	if (per > 0)
	{
		console.log("2---" + global2);
		console.log("1---" + global);
		result = ((global2 * global) / 100).toFixed(2);
		per = 0;
	}
	global = result;
	global2 = 0;
	po = 0;
	document.getElementById("principal").value = result;
}
