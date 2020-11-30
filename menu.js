var g_nStyle = 0;	// 图片导航  0: 简捷  1: 安卓 4.0 及以下用简捷，以上用新式  2: 安卓 4.0 及以下用简捷，以上询问
var g_bDL = 'download' in document.createElement('a') && navigator.userAgent.indexOf('Lenovo') < 0;

function getDL(s) {return g_bDL ? (s ? "download='"+s+"'" : "download") : "";}

function loadMenu()
{
document.write('<table cellspacing=0 cellpadding=0 width=100% bgcolor=white style="position:fixed;top:0;z-index:1000;table-layout:fixed"><tr>\
<td class=menu><a href="index.html" class=w>首 页</a></td><td width=1></td>\
<td class=menu><a href="download.html" class=w>下 载</a></td><td width=1></td>\
<td class=menu><a href="javascript:goPic();" class=w>图 片</a></td><td width=1></td>\
<td class=menu><a href="player.html" class=w>视 频</a></td><td width=1></td>\
<td class=menu><a href="3tui.html" class=w>三 退</a></td></tr></table><div style="height:2em"></div>');

	var s = navigator.userAgent, n = s.indexOf("MSIE");
	if (n > 0)
	{	
		var c = s.charAt(n+5);
		if (c > '5' && c <= '9') g_nStyle = 0;
		return;
	}
	n = s.indexOf("Android");
	if (n > 0)
	{
		s = s.substr(n+7, 5);
		if (s.indexOf("2.3") >= 0 || s.indexOf("4.0") >= 0) g_nStyle = 0;
	}
}
loadMenu();

function goPic()
{
	window.location.href = g_nStyle == 0 || (g_nStyle == 2  && !confirm("新式图片导航请按确定\n简捷图片导航请按取消\n点击图片可浏览或返回")) ? "picture2.html" : "picture.html";
}