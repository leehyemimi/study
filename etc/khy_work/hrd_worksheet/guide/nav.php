	<style type="text/css">
		#header{display:none;}
		#sidebar{position:fixed;overflow:hidden;overflow-y:auto;height:100%;left:0;top:0;width:250px;background:#fff;border:1px solid #;box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.08);}
		#sidebar strong{background:#f7fafc;padding:20px 0;border-bottom:1px solid #ddd;color:#000;padding-left:35px;font-size:20px;letter-spacing:-1px;display:block;margin-bottom:20px;}
		#sidebar .nav li{border-bottom:1px solid #edeff0;}
		#sidebar .nav li a{position:relative;font-size:16px;color:#97999f;display:block;padding:15px 35px 15px 25px;}
		#sidebar .nav li a:after{content:">";color:#95a0ac;position:absolute;right:20px;top:20px;font-size:11px;font-weight:bold;font-family:helvetica}
		#sidebar .nav > li.on a,
		#sidebar .nav > li.on a:hover{padding-left:20px;font-weight:bold;color:#54667a;border-left:3px solid #01999a;}
		#sidebar .nav > li > a:hover{background:#ededed;}
		#sidebar .nav li ul{display:none;}
		#sidebar .nav li li{padding-left:20px;}
		#sidebar .nav li li.on a{font-weight:bold;padding:10px 35px 10px 20px;}
		#sidebar .nav li li a:hover{color:#41b3f9;}
		#sidebar .nav li li.on a:hover{color:#97999f;}

		.tit_hide{padding:20px 30px;font-size:15px;position:fixed;z-index:100;right:200px;top:100px;background:#fff;color:#000;border:1px solid #000;}
		.tit_hide li{margin-bottom:10px;}
		.tit_hide li a{font-weight:bold;}
		.guide_tit{
			position:relative;
			background:#fafafa;border:1px solid #d4d4d4;margin:40px 0 20px 0;border-bottom:1px solid #ddd;padding:2px 15px 2px 15px;color:#8d9ea7;font-size:13px;line-height:1.3;
			background-image: -moz-linear-gradient(top,#fff,#f2f2f2);
			background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#f2f2f2));
			background-image: -webkit-linear-gradient(top,#fff,#f2f2f2);
			background-image: -o-linear-gradient(top,#fff,#f2f2f2);
			background-image: linear-gradient(to bottom,#fff,#f2f2f2);
			background-repeat: repeat-x;
			filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff',endColorstr='#fff2f2f2',GradientType=0);
			*zoom:1;-webkit-box-shadow: 0 1px 4px rgba(0,0,0,0.065);
			-moz-box-shadow: 0 1px 4px rgba(0,0,0,0.065);
			box-shadow: 0 1px 4px rgba(0,0,0,0.065)
		}
		
		.guide_tit p{border-top:1px solid #d4d4d4;padding-top:10px;margin-bottom:15px;}
		.guide_tit h3{color:#313131;font-weight:bold;font-size:20px;margin:10px 0;}
		.guide_tit h3:before{content:"";display:block;position:absolute;top:-20px;left:0;border-top:1px solid #e6e6e6;width:100%;
			filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff',endColorstr='#fff2f2f2',GradientType=0);
			*zoom:1;-webkit-box-shadow: 0 1px 4px rgba(0,0,0,0.065);
			-moz-box-shadow: 0 1px 4px rgba(0,0,0,0.065);
			box-shadow: 0 1px 4px rgba(0,0,0,0.065)
		}
		.guide_tit h4{font-weight:bold;font-size:16px;color:#555;padding:10px 0;}
		.guide_tit h5{border:1px solid #000;background:#fff url("http://gscdn.hackers.co.kr/integration/images/common/sp_bul.png") no-repeat right -26px;font-weight:bold;font-size:17px;color:#555;margin:20px 0 7px;padding:5px 5px;cursor:pointer;}

		.inner{padding-bottom:200px}
	</style>

	<script type="text/javascript">
		$(document).ready(function(){
			var url = window.location.pathname
			$(".nav li a").each(function(){
				if(url == $(this).attr("href")){
					$(this).parent("li").siblings().removeClass("on");
					$(this).parent("li").addClass("on");
				}
			});
		});
	</script>

	<div id="sidebar">
		<strong>[해커스 HRD]<br />2017</strong>
		<ul class="nav">
			<li class="on">
				<a href="/khy_work/hrd_worksheet/guide/layout.php">layout</a>
			</li>
			<li>
				<a href="/khy_work/hrd_worksheet/guide/table.php">table</a>
			</li>
			<li>
				<a href="/khy_work/hrd_worksheet/guide/btn.php">btn</a>
			</li>
			<li>
				<a href="/khy_work/hrd_worksheet/guide/title.php">title</a>
			</li>
			<li>
				<a href="/khy_work/hrd_worksheet/guide/tab.php">tab</a>
			</li>
			<li>
				<a href="/khy_work/hrd_worksheet/guide/form.php">form</a>
			</li>
			<li>
				<a href="/khy_work/hrd_worksheet/guide/icon.php">icon</a>
			</li>
			<li>
				<a href="/khy_work/hrd_worksheet/guide/layer_layout.php">layer_layout</a>
			</li>
		</ul>
	</div>