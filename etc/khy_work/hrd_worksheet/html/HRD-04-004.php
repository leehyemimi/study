<?php require_once "../inc/header.php"; ?>

<div id="container" class="container">
	<div id="nav-left" class="nav-left">
		<div class="nav-left-tit"> 
			<span>일반직무</span>
		</div>
		<ul class="nav-left-lst">
			<li class="on"><a href="#">경제일반<i class="icon-nav-arr"></i></a></li>
			<li><a href="#">경제일반<i class="icon-nav-arr"></i></a></li>
			<li><a href="#">경제일반<i class="icon-nav-arr"></i></a></li>
			<li><a href="#">경제일반<i class="icon-nav-arr"></i></a></li>
			<li><a href="#">경제일반<i class="icon-nav-arr"></i></a></li>
			<li><a href="#">경제일반<i class="icon-nav-arr"></i></a></li>
		</ul>
	</div>

	<div id="content" class="content">
		<div class="tit-box-h3">
			<h3 class="tit-h3">경제일반</h3>
			<div class="sub-depth">
				<i class="icon-home"><span class="hidden">홈</span></i><i class="icon-arr"></i>
				<span>일반직무</span><i class="icon-arr"></i>
				<strong>경제일반</strong>
			</div>
		</div>

		<ul class="tab-list tab3">
			<li><a href="#">근로자카드</a></li>
			<li class="on"><a href="#">사업주지원</a></li>
			<li><a href="#">일반</a></li>
		</ul>

		<div class="search-box">
			<div class="search-top">맞춤 강의 찾기<button type="button" class="search-refresh">검색 초기화<i class="icon-refresh"><span class="hidden">새로고침</span></i></button></div>
			<ul class="lst-search">
				<li>
					<strong class="search-tit">직급별 강의 추천</strong>
					<ul class="lst-search-chk">
						<li>
							<span class="input-control js_chk">
								<input type="checkbox" id="chk01"/>
								<i class="icon-chk"></i>
							</span>
							<label for="chk01">신입</label>
						</li>
						<li>
							<span class="input-control js_chk">
								<input type="checkbox" id="chk02"/>
								<i class="icon-chk"></i>
							</span>
							<label for="chk02">대리급</label>
						</li>
						<li>
							<span class="input-control js_chk">
								<input type="checkbox" id="chk03"/>
								<i class="icon-chk"></i>
							</span>
							<label for="chk03">과장/차장급</label>
						</li>
						<li>
							<span class="input-control js_chk">
								<input type="checkbox" id="chk04"/>
								<i class="icon-chk"></i>
							</span>
							<label for="chk04">신입 팀장급</label>
						</li>
						<li>
							<span class="input-control js_chk">
								<input type="checkbox" id="chk05"/>
								<i class="icon-chk"></i>
							</span>
							<label for="chk05">부장/팀장급</label>
						</li>
						<li>
							<span class="input-control js_chk">
								<input type="checkbox" id="chk06"/>
								<i class="icon-chk"></i>
							</span>
							<label for="chk06">임원급</label>
						</li>
					</ul>
					<li>
						<strong class="search-tit">난이도</strong>
						<ul class="lst-search-chk">
							<li>
								<span class="input-control js_chk">
									<input type="checkbox" id="chk07"/>
									<i class="icon-chk"></i>
								</span>
								<label for="chk07">상</label>
							</li>
							<li>
								<span class="input-control js_chk">
									<input type="checkbox" id="chk08"/>
									<i class="icon-chk"></i>
								</span>
								<label for="chk08">중</label>
							</li>
							<li>
								<span class="input-control js_chk">
									<input type="checkbox" id="chk09"/>
									<i class="icon-chk"></i>
								</span>
								<label for="chk09">하</label>
							</li>
						</ul>
					</li>
				</li>
			</ul>
		</div>

		<div class="search-info">
			<div class="f-l">총 <strong class="tc-brand">30개</strong>의 강의가 검색되었습니다.</div>
			<div class="search-form f-r"><label>빠른검색<input type="text" class="input-text" placeholder="강의명을 입력하세요." style="width:158px"/></label><button type="button" class="btn-s-dark">검색</button></div>
		</div>

		<table border="0" cellpadding="0" cellspacing="0" class="tbl-lecture-list">
			<caption class="hidden">강의정보</caption>
			<colgroup>
				<col style="width:166px" />
				<col style="*" />
				<col style="width:170px" />
				<col style="width:110px" />
			</colgroup>

			<tbody>
				<tr>
					<td>
						<a href="#" class="sample-lecture">
							<img src="http://via.placeholder.com/144x101" alt="" width="144" height="101" />
							<span class="tc-brand">샘플강의 ▶</span>
						</a>
					</td>
					<td class="lecture-txt">
						<strong class="tit">Beyond Trouble, 조직을 감동시키는 관계의 기술</strong>
						<p class="tc-gray mt10">조직 내 갈등을 최소화하고 원만한 관계를 만들어주는 방법을 제시한다! 더 나아가 즐거운 업무 분위기를 만들고 성과를 창출할 수 있는 조직 문화가 되도록...</p>
					</td>
					<td>
						<div class="price-box">
							<dl>
								<dt>정가</dt>
								<dd>100,000원</dd>
							</dl>
							<strong class="tc-brand">환급액</strong>
							<dl class="tc-brand">
								<dt>대기업</dt>
								<dd>30,400원</dd>
								<dt>중견기업</dt>
								<dd>32,400원</dd>
								<dt>우선지원기업</dt>
								<dd>77,760원</dd>
							</dl>
						</div>
					</td>
					<td class="t-r"><a href="#" class="btn-m">수강<br/>신청</a></td>
				</tr>
				<tr>
					<td>
						<a href="#" class="sample-lecture">
							<img src="http://via.placeholder.com/144x101" alt="" width="144" height="101" />
							<span class="tc-brand">샘플강의 ▶</span>
						</a>
					</td>
					<td class="lecture-txt">
						<strong class="tit">Beyond Trouble, 조직을 감동시키는 관계의 기술</strong>
						<p class="tc-gray mt10">조직 내 갈등을 최소화하고 원만한 관계를 만들어주는 방법을 제시한다! 더 나아가 즐거운 업무 분위기를 만들고 성과를 창출할 수 있는 조직 문화가 되도록...</p>
					</td>
					<td>
						<div class="price-box">
							<dl>
								<dt>정가</dt>
								<dd>100,000원</dd>
							</dl>
							<strong class="tc-brand">환급액</strong>
							<dl class="tc-brand">
								<dt>대기업</dt>
								<dd>30,400원</dd>
								<dt>중견기업</dt>
								<dd>32,400원</dd>
								<dt>우선지원기업</dt>
								<dd>77,760원</dd>
							</dl>
						</div>
					</td>
					<td class="t-r"><a href="#" class="btn-m">수강<br/>신청</a></td>
				</tr>
				<tr>
					<td>
						<a href="#" class="sample-lecture">
							<img src="http://via.placeholder.com/144x101" alt="" width="144" height="101" />
							<span class="tc-brand">샘플강의 ▶</span>
						</a>
					</td>
					<td class="lecture-txt">
						<strong class="tit">Beyond Trouble, 조직을 감동시키는 관계의 기술</strong>
						<p class="tc-gray mt10">조직 내 갈등을 최소화하고 원만한 관계를 만들어주는 방법을 제시한다! 더 나아가 즐거운 업무 분위기를 만들고 성과를 창출할 수 있는 조직 문화가 되도록...</p>
					</td>
					<td>
						<div class="price-box">
							<dl>
								<dt>정가</dt>
								<dd>100,000원</dd>
							</dl>
							<strong class="tc-brand">환급액</strong>
							<dl class="tc-brand">
								<dt>대기업</dt>
								<dd>30,400원</dd>
								<dt>중견기업</dt>
								<dd>32,400원</dd>
								<dt>우선지원기업</dt>
								<dd>77,760원</dd>
							</dl>
						</div>
					</td>
					<td class="t-r"><a href="#" class="btn-m">수강<br/>신청</a></td>
				</tr>
				<tr>
					<td>
						<a href="#" class="sample-lecture">
							<img src="http://via.placeholder.com/144x101" alt="" width="144" height="101" />
							<span class="tc-brand">샘플강의 ▶</span>
						</a>
					</td>
					<td class="lecture-txt">
						<strong class="tit">Beyond Trouble, 조직을 감동시키는 관계의 기술</strong>
						<p class="tc-gray mt10">조직 내 갈등을 최소화하고 원만한 관계를 만들어주는 방법을 제시한다! 더 나아가 즐거운 업무 분위기를 만들고 성과를 창출할 수 있는 조직 문화가 되도록...</p>
					</td>
					<td>
						<div class="price-box">
							<dl>
								<dt>정가</dt>
								<dd>100,000원</dd>
							</dl>
							<strong class="tc-brand">환급액</strong>
							<dl class="tc-brand">
								<dt>대기업</dt>
								<dd>30,400원</dd>
								<dt>중견기업</dt>
								<dd>32,400원</dd>
								<dt>우선지원기업</dt>
								<dd>77,760원</dd>
							</dl>
						</div>
					</td>
					<td class="t-r"><a href="#" class="btn-m">수강<br/>신청</a></td>
				</tr>
			</tbody>
		</table>

		<div class="box-paging">
			<a href="#"><i class="icon-first"><span class="hidden">첫페이지</span></i></a>
			<a href="#"><i class="icon-prev"><span class="hidden">이전페이지</span></i></a>
			<a href="#" class="active">1</a>
			<a href="#">2</a>
			<a href="#">3</a>
			<a href="#">4</a>
			<a href="#">5</a>
			<a href="#">6</a>
			<a href="#"><i class="icon-next"><span class="hidden">다음페이지</span></i></a>
			<a href="#"><i class="icon-last"><span class="hidden">마지막페이지</span></i></a>
		</div>
	</div>
</div>


<?php require_once "../inc/footer.php"; ?>