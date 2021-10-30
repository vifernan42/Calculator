// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   calc.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: vifernan <vifernan@42.fr>                  +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/10/30 17:18:00 by vifernan          #+#    #+#             //
//   Updated: 2021/10/30 23:55:05 by vifernan         ###   ########.fr       //
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
 
function principal(value){
	if (m > 0 || d > 0 || l > 0 || p > 0)
	{
		if (flag2 != 0)
			global2 *= 10;
		flag2++;
		global2 += value;
		document.getElementById("principal").value = global2;
	}
	else
	{
		if (flag != 0)
			global *= 10;
		global += value;
		document.getElementById("principal").value = global;
		flag++;
	}
	console.log(global);
}

function menus(value){
	p = 0;
	m = 0;
	d = 0;
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
	m++;
	if (m == 2)
	{
		document.getElementById("principal").value = global2 * global;
		m = 1;
		global *= global2;
		global2 = 0;
	}
}

function del(){
	global = 0;
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
	global = result;
	global2 = 0;
	document.getElementById("principal").value = result;
}
