// 修改下载的文件名和说明，每个文件一行。file 为源文件名，zw 为中文文件名（可省略），title 为文件说明。相关文件都放在 media 目录
var g_aList1 = [
	//{file:"zhenxiang.zip",zw:"真相.zip",title:"打包下载：包括翻墙软件、电子书、图片等。zip 格式"},
	{file:"rar-android.apk",zw:"RAR 安卓版.apk",title:"解压软件：RAR 安卓版，可解压 zip 文件"},
	{file:"zym-win.zip",zw:"自由门 - 电脑版.zip",title:"翻墙软件：自由门 - 电脑版"},
	{file:"wjll-win.zip",zw:"无界浏览 - 电脑版.zip",title:"翻墙软件：无界浏览 - 电脑版"},
//	{file:"fg.apk",zw:"自由门 - 安卓版.apk",title:"翻墙软件：自由门 - 安卓版"},
	{file:"um.apk",zw:"无界一点通 - 安卓版.apk",title:"翻墙软件：无界一点通 - 安卓版"},
//	{file:"iNTD_TV.apk",zw:"新唐人电视 - 安卓版.apk",title:"翻墙软件：新唐人电视 - 安卓版"},
	{file:"vlc.apk",zw:"VLC 媒体播放器 - 安卓版.apk",title:"媒体播放器：VLC 安卓版，支持各种格式的音频和视频文件"},
	{file:"lithium.apk",zw:"锂 EPUB 阅读器 - 安卓版.apk",title:"阅读软件：锂 EPUB 阅读器安卓版，可看 ePub 格式电子书"},
	{file:"9ping.epub",zw:"九评共产党.epub",title:"电子书：《九评共产党》ePub 格式"},
	{file:"zjmd.epub",zw:"共产主义的终极目的.epub",title:"电子书：《共产主义的终极目的》ePub 格式"},
	{file:"jtdwh.epub",zw:"解体党文化.epub",title:"电子书：《解体党文化》ePub 格式"},
	{file:"fytdx.epub",zw:"风雨天地行.epub",title:"电子书：《风雨天地行》ePub 格式"},
	{file:"jzmqr.epub",zw:"江泽民其人.epub",title:"电子书：《江泽民其人》ePub 格式"},
	{file:"mksdcmzl.epub",zw:"马克思的成魔之路.epub",title:"电子书：《马克思的成魔之路》ePub 格式"},	
	{file:"jkemdms.epub",zw:"揭开恶魔的面纱.epub",title:"电子书：《揭开恶魔的面纱》ePub 格式"},
	{file:"mro.epub",zw:"死刑犯遮不住器官市场的蘑菇云.epub",title:"电子书：《死刑犯遮不住器官市场的蘑菇云》ePub 格式"},
	{file:"gczydzjmd.zip",zw:"共产主义的终极目的.zip",title:"电子书：《共产主义的终极目的》zip 格式"},
];

// 修改图片的文件名和说明，每行可多个文件（用英文逗号分隔）
var g_aList2 = [
	{file:"jbzxxl1.jpg,jbzxxl2.jpg,jbzxxl3.jpg,jbzxxl4.jpg,jbzxxl5.jpg",title:"基本真相"},
	{file:"fldfhcsj1.jpg,fldfhcsj2.jpg,fldfhcsj3.jpg,fldfhcsj4.jpg,fldfhcsj5.jpg,fldfhcsj6.jpg",title:"法轮大法弘传世界"},
	{file:"czsjm1.jpg,czsjm2.jpg,czsjm3.jpg",title:"藏字石揭秘"},
	{file:"zcswwq1.jpg,zcswwq2.jpg",title:"走出思维误区"},
	{file:"ysnbjhp1.jpg,ysnbjhp2.jpg,ysnbjhp3.jpg,ysnbjhp4.jpg,ysnbjhp5.jpg,ysnbjhp6.jpg,ysnbjhp7.jpg,ysnbjhp8.jpg,ysnbjhp9.jpg",title:"一生能被几回骗"},
	{file:"wsmqntd1.jpg,wsmqntd2.jpg",title:"为什么劝你退党"},
	{file:"nbdsfgls1.jpg,nbdsfgls2.jpg",title:"您把毒誓发给了谁"},
	{file:"bjmh15.jpg",title:"宝镜漫画"},
];

// 修改视频的文件名，中文文件名（可省略）和说明，每个文件一行。要不使用一行，可在行首加 //
var g_aList3 = [
	{file:"zgbszg.mp4",zw:"中共不是中共退出中共才有未来.mp4",title:"中共不是中共 退出中共才有未来"},
	{file:"zf-dsp.mp4",zw:"是自焚还是骗局.mp4",title:"是自焚还是骗局？"},
	{file:"425.mp4",zw:"四二五上访真相.mp4",title:"“四·二五”上访真相"},
	{file:"jx1400li-dsp.mp4",zw:"解析1400例.mp4",title:"解析“1400例”"},
	{file:"tmzg.mp4",zw:"天灭中共.mp4",title:"天灭中共（2亿）"},
	{file:"weihuo.mp4",zw:"伪火 - 天安门自焚事件真相.mp4",title:"伪火:“天安门自焚”真相"},
	{file:"hcym.mp4",zw:"红朝阴谋 - 这个星球上从未有过的邪恶.mp4",title:"红朝阴谋 - 这个星球上从未有过的邪恶"},	
	{file:"hzxc.mp3",zw:"活摘现场持枪警卫证词.mp3",title:"活摘现场持枪警卫证词（音频）"},
	{file:"bxls.mp3",zw:"薄熙来说：江主席下的命令.mp3",title:"薄熙来说：江主席下的命令（音频）"},
	{file:"lccs.mp3",zw:"李长春说：周永康具体管这个事.mp3",title:"李长春说：周永康具体管这个事（音频）"},
	{file:"jzzjfy.mp3",zw:"锦州中级法院刑一厅警察说.mp3",title:"锦州中级法院刑一厅警察说（音频）"},
];