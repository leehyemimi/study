<?php require_once "../inc/header.php"; ?>
<?php require_once "./nav.php"; ?>
<div class="inner">
	<div class="guide_tit">
		<h3>form - radio</h3>
	</div>
	<p>
		<label class="input-control js_chk">
			<input type="radio" name="rdo" checked="checked"/>
			<i class="icon-rdo"><span class="hidden">상품 선택</span></i>
		</label>
		<label class="input-control js_chk">
			<input type="radio" name="rdo"/>
			<i class="icon-rdo"><span class="hidden">상품 선택</span></i>
		</label>
		<label class="input-control js_chk">
			<input type="radio" name="rdo"/>
			<i class="icon-rdo"><span class="hidden">상품 선택</span></i>
		</label>
	</p>
	<p>
		<label class="input-control js_chk">
			<input type="radio" name="rdo2"/>
			<i class="icon-rdo"><span class="hidden">상품 선택</span></i>
		</label>
		<label class="input-control js_chk">
			<input type="radio" name="rdo2" checked="checked"/>
			<i class="icon-rdo"><span class="hidden">상품 선택</span></i>
		</label>
		<label class="input-control js_chk">
			<input type="radio" name="rdo2"/>
			<i class="icon-rdo"><span class="hidden">상품 선택</span></i>
		</label>
	</p>

	<div class="guide_tit">
		<h3>form - checkbox</h3>
	</div>
	<p>
		<label class="input-control js_chk">
			<input type="checkbox" checked="checked"/>
			<i class="icon-chk"><span class="hidden">상품 선택</span></i>
		</label>
		<label class="input-control js_chk">
			<input type="checkbox"/>
			<i class="icon-chk"><span class="hidden">상품 선택</span></i>
		</label>
		<label class="input-control js_chk">
			<input type="checkbox"/>
			<i class="icon-chk"><span class="hidden">상품 선택</span></i>
		</label>
	</p>
	
	<div class="guide_tit">
		<h3>form - checkbox - radio</h3>
	</div>
	<p>
		<span class="input-control js_chk">
			<input type="checkbox" id="chk01"/>
			<i class="icon-chk"><span class="hidden">상품 선택</span></i>
		</span>
		<label for="chk01">상품 선택</label>
	</p>

	<div class="guide_tit">
		<h3>form - radio - text</h3>
	</div>
	<p>
		<span class="input-control js_chk">
			<input type="radio" name="rdo3" id="rdo01"/>
			<i class="icon-rdo"><span class="hidden">상품 선택</span></i>
		</span>
		<label for="rdo01">상품 선택</label>

		<span class="input-control js_chk">
			<input type="radio" name="rdo3" id="rdo02"/>
			<i class="icon-rdo"><span class="hidden">상품 선택</span></i>
		</span>
		<label for="rdo02">상품 선택</label>

		<span class="input-control js_chk">
			<input type="radio" name="rdo3" id="rdo03"/>
			<i class="icon-rdo"><span class="hidden">상품 선택</span></i>
		</span>
		<label for="rdo03">상품 선택</label>
	</p>

	<div class="guide_tit">
		<h3>form - select</h3>
	</div>
	<p>
		<select class="input-sel" style="width:200px">
			<option value="">전체보기</option>
			<option value="">전체보기</option>
			<option value="">전체보기</option>
			<option value="">전체보기</option>
			<option value="">전체보기</option>
		</select>
	</p>

	<div class="guide_tit">
		<h3>form - text</h3>
	</div>
	<p>
		<input type="text" class="input-text" style="width:200px"/>
	</p>
</div>
