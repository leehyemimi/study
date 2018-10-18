<?php require_once "../inc/header.php"; ?>
<?php require_once "./nav.php"; ?>
<div class="inner">
	<div class="guide_tit">
		<h3>layer</h3>
		<p>&lt;a href="javascript:layer_open('layer');"&gt;레이어열기&lt;/a&gt;</p>
	</div>

	<a href="javascript:layer_open('layer');">레이어열기</a>

	<div class="layer-wrap" id="layer">
		<div class="bg"></div>
		<div class="layer-inner">
			<h3>결제내역 상세정보</h3>
			<div class="layer-content">
				<h4 class="tc-brand">주문정보 및 결제금액</h4>
				테이블
				<p class="t-c"><button class="btn-m js_layer_close">닫기</button></p>
			</div>
			<button type="button" class="icon-layer-close js_layer_close"><span class="hidden">닫기</span></button>
		</div>
	</div>
</div>