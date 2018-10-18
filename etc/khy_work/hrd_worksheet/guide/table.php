<?php require_once "../inc/header.php"; ?>
<?php require_once "./nav.php"; ?>
<div class="inner" style="width:780px;margin:0 auto">
	<div class="guide_tit">
		<h3>table - col</h3>
	</div>

	<table border="0" cellpadding="0" cellspacing="0" class="tbl-col">
		<caption class="hidden">강의정보</caption>
		<colgroup>
			<col style="width:15%" />
			<col style="*" />
		</colgroup>

		<tbody>
			<tr>
				<th scope="col">제목</th>
				<td>내용</td>
			</tr>
			<tr>
				<th scope="col">제목</th>
				<td>내용</td>
			</tr>
			<tr>
				<th scope="col">제목</th>
				<td>내용</td>
			</tr>
		</tbody>
	</table>

	<div class="guide_tit">
		<h3>table - row - left</h3>
	</div>
	
	<table border="0" cellpadding="0" cellspacing="0" class="tbl-row">
		<caption class="hidden">강의정보</caption>
		<colgroup>
			<col style="width:60%" />
			<col style="*" />
		</colgroup>

		<thead>
			<tr>
				<th scope="col">기관명</th>
				<th scope="col">기간</th>
			</tr>
		</thead>
 
		<tbody>
			<tr>
				<td>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</td>
				<td>내용</td>
			</tr>
		</tbody>
	</table>

	<div class="guide_tit">
		<h3>table - row - center</h3>
	</div>
	
	<table border="0" cellpadding="0" cellspacing="0" class="tbl-row-c">
		<caption class="hidden">강의정보</caption>
		<colgroup>
			<col style="width:15%" />
			<col style="*" />
			<col style="width:30%" />
			<col style="width:20%" />
		</colgroup>

		<thead>
			<tr>
				<th scope="col">유형</th>
				<th scope="col">강의명</th>
				<th scope="col">학습현황</th>
				<th scope="col">학습하기</th>
			</tr>
		</thead>
 
		<tbody>
			<tr>
				<td><span class="tc-gray">일반</span></td>
				<td class="sbj">
					<span class="txt-icon mb10">수강중</span>
					<strong class="tit mb10">Beyond Trouble, 조직을 감동시키는 관계의 기술</strong>
					<span class="tc-gray">학습기간 : 2017.07.01 ~ 2017.07.31</span>
				</td>
				<td>
					<span class="tc-gray">4/10강</span>
					<span class="bar-graph"><span class="graph-inner" style="width:80%"></span></span>
					<strong>40%</strong>
				</td>
				<td><a href="#" class="btn-m">강의실 입장</a></td>
			</tr>
		</tbody>
	</table>

	<div class="guide_tit">
		<h3>tab - bbs</h3>
	</div>

	<table border="0" cellpadding="0" cellspacing="0" class="tbl-bbs">
		<caption class="hidden">수강후기</caption>
		<colgroup>
			<col style="width:10%" />
			<col style="*" />
			<col style="width:15%" />
			<col style="width:12%" />
		</colgroup>

		<thead>
			<tr>
				<th scope="col">번호</th>
				<th scope="col">제목</th>
				<th scope="col">강좌평점</th>
				<th scope="col">작성자</th>
			</tr>
		</thead>
 
		<tbody>
			<!-- set -->
			<tr class="bbs-sbj on">
				<td><span class="txt-icon-line">BEST</span></td>
				<td><a href="#content1" class="js_bbs_sbj"><strong>제목제목제목제목제목제목제목제목제목제목제목제목제목제목</strong></a></td>
				<td>
					<span class="star-rating">
						<span class="star-inner" style="width:80%"></span>
					</span>
				</td>
				<td class="last">이름</td>
			</tr>

			<tr class="bbs-con on" id="content1">
				<td colspan="4">
					<p class="txt">
						후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력
					</p>
				</td>
			</tr>
			<!-- //set -->
			<!-- set -->
			<tr class="bbs-sbj">
				<td>1</td>
				<td><a href="#content2" class="js_bbs_sbj">제목제목제목제목제목제목제목제목제목제목제목제목제목제목</a></td>
				<td>
					<span class="star-rating">
						<span class="star-inner" style="width:80%"></span>
					</span>
				</td>
				<td class="last">이름</td>
			</tr>

			<tr class="bbs-con" id="content2">
				<td colspan="4">
					<p class="txt">
						후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력
					</p>
				</td>
			</tr>
			<!-- //set -->
			<!-- set -->
			<tr class="bbs-sbj">
				<td>2</td>
				<td><a href="#content3" class="js_bbs_sbj">제목제목제목제목제목제목제목제목제목제목제목제목제목제목</a></td>
				<td>
					<span class="star-rating">
						<span class="star-inner" style="width:80%"></span>
					</span>
				</td>
				<td class="last">이름</td>
			</tr>

			<tr class="bbs-con" id="content3">
				<td colspan="4">
					<p class="txt">
						후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력후기내용 출력
					</p>
				</td>
			</tr>
			<!-- //set -->
		</tbody>
	</table>

</div>