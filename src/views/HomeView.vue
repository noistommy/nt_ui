<template>
  <div>

    <div class="section">
      <div class="section-header">
        <h1 class="section-title">제목</h1>
        <div class="section-tags">
          <span class="ga-tag label green">Vue 3.0</span>
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">label</div>
          제목
        </div>
        <div class="contents-wrapper">
          <h4 class="type-title">기본</h4>
          <div class="type-wrapper"></div>
        </div>
      </div>
    </div>
    <div class="section" id="foundation">
      <div class="section-header">
        <h1 class="section-title">기초</h1>
        <div class="section-tags">
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="contents-wrapper">
          <h4 class="type-title">
            <div class="ga-tag label primary">main font</div>
            대표 글꼴 - Spoqa HanSans Neo
          </h4>
          <div class="type-wrapper">
            <div class="ga-grid">
              <div class="column col-2 mainWord">Aa</div>
              <div class="column col-8 mainWord">가나다</div>
              <div class="column col-10">
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p>abcdefghijklmnopqrstuvwxyz</p>
                <p>1234567890 ,./(){}[]|:;"'?</p>
                <p>가나다라마바사 맑은 고딕</p>
              </div>
            </div>
          </div>
          <h4 class="type-title">
            <div class="ga-tag label secondary">Heading</div>
            제목
          </h4>
          <div class="type-wrapper">
            <h1>[H1]가비아 UI 시스템 (28px)</h1>
            <h2>[H2]가비아 UI 시스템 (24px)</h2>
            <h3>[H3]가비아 UI 시스템 (18px)</h3>
            <h4>[H4]가비아 UI 시스템 (16px)</h4>
            <h5>[H5]가비아 UI 시스템 (14px)</h5>
          </div>
          <h4 class="type-title">
            <div class="ga-tag label secondary">size</div>
            크기
          </h4>
          <div class="type-wrapper">
            <div class="massive">[Massive]가비아 UI 시스템 (22px)</div>
            <div class="huge">[Huge]가비아 UI 시스템 (20px)</div>
            <div class="large">[Large]가비아 UI 시스템 (18px)</div>
            <div class="medium">[Medium]가비아 UI 시스템 (14px)</div>
            <div class="small">[Small]가비아 UI 시스템 (12px)</div>
            <div class="tiny">[Tiny]가비아 UI 시스템 (10px)</div>
          </div>
          <div class="type-wrapper">
            <button class="ga-button secondary massive">Massive</button>
            <button class="ga-button secondary huge">Huge</button>
            <button class="ga-button secondary large">Large</button>
            <button class="ga-button secondary medium">Medium</button>
            <button class="ga-button secondary small">Small</button>
            <button class="ga-button secondary tiny">Tiny</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h1 class="section-title">색상 정의</h1>
        <div class="section-tags">
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">colods</div>
          색상
        </div>
        <div class="contents-wrapper">
          <h4 class="type-title">브랜드</h4>
          <div class="type-wrapper">
            <div class="color-chip primary">
              <div class="label">메인</div>
            </div>
            <div class="color-chip primary dark">
              <div class="label">어두운 메인</div>
            </div>
            <div class="color-chip primary darker">
              <div class="label">더 어두운 메인</div>
            </div>
          </div>
          <div class="type-wrapper">
            <div class="color-chip secondary">
              <div class="label">강조</div>
            </div>
            <div class="color-chip secondary dark">
              <div class="label">어두운 강조</div>
            </div>
            <div class="color-chip secondary darker">
              <div class="label">더 어두운 강조</div>
            </div>
          </div>
          <div class="type-wrapper">
            <div class="color-chip black">
              <div class="label">검정</div>
            </div>
            <div class="color-chip white">
              <div class="label">흰</div>
            </div>
          </div>
          <div class="type-wrapper">
            <div class="color-chip gray light">
              <div class="label">밝은 회색</div>
            </div>
            <div class="color-chip gray">
              <div class="label">회색</div>
            </div>
            <div class="color-chip gray dark">
              <div class="label">짙은 회색</div>
            </div>
          </div>
          <h4 class="type-title">바탕색</h4>
          <div class="type-wrapper">
            <div class="color-chip surface1 text">
              <div class="label">바탕 1</div>
            </div>
            <div class="color-chip surface2 text">
              <div class="label">바탕 2</div>
            </div>
            <div class="color-chip surface3 text">
              <div class="label">바탕 3</div>
            </div>
          </div>
          <h4 class="type-title">상태</h4>
          <div class="type-wrapper">
            <div class="color-chip ga-success">
              <div class="label">성공</div>
            </div>
            <div class="color-chip ga-info">
              <div class="label">정보</div>
            </div>
            <div class="color-chip ga-danger">
              <div class="label">위험</div>
            </div>
            <div class="color-chip ga-attention">
              <div class="label">경고</div>
            </div>
            <div class="color-chip ga-importance">
              <div class="label">중요</div>
            </div>
          </div>
          <h4 class="type-title">타입</h4>
          <div class="type-wrapper">
            <div class="color-chip ga-success text">
              <div class="label">기본</div>
            </div>
            <div class="color-chip ga-success-text text">
              <div class="label">글자색</div>
            </div>
            <div class="color-chip ga-success-bg text">
              <div class="label">배경</div>
            </div>
            <div class="color-chip ga-success-border text">
              <div class="label">테두리</div>
            </div>
          </div>
          <h4 class="type-title">색상표</h4>
          <div class="type-wrapper">
            <div
                v-for="color in pColors"
                :key="color.name"
                class="color-chip"
                :class="`ga-${color.name}`"
                v-ga-tooltip="color.name"
            >
              <div class="label">{{ color.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h1 class="section-title">버튼</h1>
        <div class="section-tags">
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">button</div>
          버튼
        </div>
        <div class="contents-wrapper">
          <h4 class="type-title">기본</h4>
          <div class="type-wrapper">
            <button class="ga-button">기본</button>
          </div>
          <h4 class="type-title">태그 또는 클레스</h4>
          <div class="type-wrapper">
            <button class="ga-button primary">태그</button>
            <div class="ga-button">클래스</div>
          </div>
          <h4 class="type-title">브랜드</h4>
          <div class="type-wrapper">
            <button v-for="button in buttonType" :key="button.type" :class="`ga-button ${button.type}`">
              {{ button.label }}
            </button>
          </div>
          <h4 class="type-title">비활성 :: Disabled</h4>
          <div class="type-wrapper">
            <button class="ga-button primary disabled">disabled</button>
            <button class="ga-button secondary" disabled>disabled(attribute)</button>
          </div>
          <h4 class="type-title">지정 버튼 :: Equal</h4>
          <div class="type-wrapper">
            <button class="ga-button primary equal">저장</button>
            <button class="ga-button primary circle equal">저장</button>
            <button class="ga-button secondary equal">취소</button>
            <button class="ga-button outline equal">보기</button>
            <button class="ga-button equal">가비아 UI 시스템</button>
          </div>
          <div class="type-wrapper">
            <button class="ga-button large primary equal">저장</button>
            <button class="ga-button large primary circle equal">저장</button>
            <button class="ga-button large secondary equal">취소</button>
            <button class="ga-button large outline equal">보기</button>
            <button class="ga-button large equal">가비아 UI 시스템</button>
          </div>
          <h4 class="type-title">꽉차게 :: Fluid</h4>
          <div class="type-wrapper">
            <button class="ga-button primary fluid">꽉차게</button>
          </div>
          <div class="type-wrapper">
            <button class="ga-button secondary fluid">꽉차게</button>
          </div>
          <h4 class="type-title">조그맣게 :: Compact</h4>
          <div class="type-wrapper">
            <button class="ga-button compact">조그맣게</button>
            <button v-for="button in buttonType" :key="button.type" :class="`ga-button compact ${button.type}`">
              {{ button.label }}
            </button>
          </div>
          <h4 class="type-title">테두리 :: Outline</h4>
          <div class="type-wrapper">
            <button class="ga-button outline">테두리</button>
            <button class="ga-button primary outline">메인</button>
            <button class="ga-button success outline">성공</button>
          </div>
          <h4 class="type-title">아이콘 :: Icon (Awesome Font 6)</h4>
          <div class="type-wrapper">
            <button class="ga-button icon">
              <i class="fa fa-bird"></i>
            </button>
            <button class="ga-button icon outline">
              <i class="fa fa-bolt-lightning"></i>
            </button>
            <button class="ga-button icon circle">
              <i class="fa fa-sun-bright"></i>
            </button>
          </div>
          <h4 class="type-title">동그랗게 :: Circle</h4>
          <div class="type-wrapper">
            <button class="ga-button icon circle">
              <i class="fa fa-crown"></i>
            </button>
            <button class="ga-button circle">동그랗게</button>
            <button class="ga-button circle">A</button>
            <button class="ga-button icon circle">
              <i class="fa fa-a"></i>
            </button>
          </div>
          <h4 class="type-title">아이콘 라벨 :: Icon Label</h4>
          <div class="type-wrapper">
            <button class="ga-button">
              <i class="icon left fa fa-chevron-left"></i>
              왼쪽
            </button>
            <button class="ga-button">
              오른쪽
              <i class="icon right fa fa-chevron-right"></i>
            </button>
          </div>
          <h4 class="type-title">크기 :: Size</h4>
          <div class="type-wrapper">
            <button class="ga-button secondary tiny">Tiny</button>
            <button class="ga-button secondary small">Small</button>
            <button class="ga-button secondary medium">Medium</button>
            <button class="ga-button secondary large">Large</button>
            <button class="ga-button secondary huge">Huge</button>
            <button class="ga-button secondary massive">Massive</button>
          </div>
          <h4 class="type-title">뱃지 :: Badge</h4>
          <div class="type-wrapper">
            <button class="ga-button badge">
              베스트
              <span class="in-badge primary">Best</span>
            </button>
            <button class="ga-button badge">
              신규
              <span class="in-badge ga-red">New</span>
            </button>
            <button class="ga-button badge">
              세일
              <span class="in-badge secondary">Sale</span>
            </button>
          </div>
          <h4 class="type-title">텍스트 :: Text</h4>
          <div class="type-wrapper">
            <button class="ga-button text">텍스트</button>
            <button class="ga-button primary text">텍스트</button>
            <button class="ga-button text">
              텍스트
              <i class="icon left fa fa-text"></i>
            </button>
          </div>
          <h4 class="type-title">버튼 그룹 :: Button Group</h4>
          <div class="type-wrapper">
            <div class="ga-buttons">
              <div
                  v-for="btn in buttonGroup"
                  :key="btn"
                  :class="{ selected: btn === selectedButton }"
                  class="ga-button"
                  @click="selectedButton = btn"
              >
                {{ btn }}
              </div>
            </div>
          </div>
          <div class="type-wrapper">
            <div class="ga-buttons">
              <div
                  v-for="btn in 3"
                  :key="btn"
                  :class="{ orange: btn === selectedButton1 }"
                  class="ga-button outline"
                  @click="selectedButton1 = btn"
              >
                {{ `Button ${btn}` }}
              </div>
            </div>
          </div>
          <div class="type-wrapper">
            <div class="ga-buttons outline">
              <div
                  v-for="btn in 3"
                  :key="btn"
                  :class="{ brown: btn === selectedButton1 }"
                  class="ga-button"
                  @click="selectedButton1 = btn"
              >
                {{ `Button ${btn}` }}
              </div>
            </div>
          </div>
          <div class="type-wrapper">
            <div class="ga-buttons round">
              <div
                  v-for="btn in 3"
                  :key="btn"
                  :class="{ lightblue: btn === selectedButton1 }"
                  class="ga-button"
                  @click="selectedButton1 = btn"
              >
                {{ `Button ${btn}` }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h1 class="section-title">태그</h1>
        <div class="section-tags">
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">tag</div>
          태그
        </div>
        <div class="contents-wrapper">
          <h4 class="type-title">라벨 타입</h4>
          <div class="type-wrapper">
            <div class="ga-tag label primary">기본 태그</div>
            <div class="ga-tag label secondary rect">사각 태그 :: Rect</div>
            <div class="ga-tag label lightgreen">
              <i class="fa fa-star"></i>
            </div>
            <div class="ga-tag label lightblue">
              <i class="fa fa-user"></i>
            </div>
            <div class="ga-tag label yellow">
              <i class="fa fa-crown"></i>
            </div>
          </div>
          <h4 class="type-title">선 타입</h4>
          <div class="type-wrapper">
            <div class="ga-tag line secondary"></div>
            <div class="ga-tag line lightgreen"></div>
            <div class="ga-tag line lightblue"></div>
            <div class="ga-tag line yellow"></div>
          </div>
          <h4 class="type-title">점 타입</h4>
          <div class="type-wrapper">
            <div class="ga-tag dot secondary"></div>
            <div class="ga-tag dot lightgreen"></div>
            <div class="ga-tag dot lightblue"></div>
            <div class="ga-tag dot yellow"></div>
          </div>
          <h4 class="type-title">아이콘 라벨:: Icon (라벨 타입 전용)</h4>
          <div class="type-wrapper">
            <div class="ga-tag label teal">
              <i class="icon left fa fa-tag"></i>
              태그
            </div>
            <div class="ga-tag label red rect">
              <i class="icon left fa fa-n"></i>
              신규
            </div>
            <div class="ga-tag label blue">
              <i class="icon left fa fa-user"></i>
              사용자
            </div>
            <div class="ga-tag label secondary rect">
              <i class="icon left fa fa-arrow-up"></i>
              업데이트
            </div>
          </div>
          <div class="type-wrapper">
            <div class="ga-tag label teal" v-ga-tooltip="`태그(아이콘)에 기능 설정`">
              링크 테그
              <i class="link icon right fa fa-xmark" @click="closeTag"></i>
            </div>
          </div>
          <h4 class="type-title">호버 효과 :: one-of-a-kind</h4>
          <div class="type-wrapper">
            <div class="ga-tags one-of-a-kind">
              <div
                  v-for="tag in ['rose', 'cyan', 'blue', 'teal']"
                  :key="tag"
                  class="ga-tag label"
                  :class="[tag]"
              >
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h1 class="section-title">뱃지</h1>
        <div class="section-tags">
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">badge</div>
          뱃지
        </div>
        <div class="contents-wrapper">
          <h4 class="type-title">기본</h4>
          <div class="type-wrapper">
            <button class="ga-button outline">
              컨텐츠
              <span class="ga-badge float">1</span>
            </button>
            <button class="ga-button outline">
              컨텐츠
              <span class="ga-badge float primary">G</span>
            </button>
            <button class="ga-button outline">
              컨텐츠
              <span class="ga-badge float secondary">100</span>
            </button>
            <button class="ga-button outline">
              컨텐츠
              <span class="ga-badge float green">
                <i class="fa fa-arrow-up"></i>
              </span>
            </button>
            <button class="ga-button outline">
              컨텐츠
              <span class="ga-badge mark red"></span>
            </button>
          </div>
          <h4 class="type-title">타입</h4>
          <div class="type-wrapper">
            <button class="ga-button outline">
              타입: Float
              <span class="ga-badge float green">10</span>
            </button>
            <button class="ga-button outline">
              타입: Mark
              <span class="ga-badge mark red"></span>
            </button>
          </div>
          <h4 class="type-title">그림자</h4>
          <div class="type-wrapper">
            <button class="ga-button outline">
              그림자 O
              <span class="ga-badge float teal shadow">O</span>
            </button>
            <button class="ga-button outline">
              그림자 X
              <span class="ga-badge float secondary">X</span>
            </button>
          </div>
          <h4 class="type-title">정렬 :: Align { Left | Center | Right }</h4>
          <div class="type-wrapper">
            <button class="ga-button outline">
              왼쪽 정렬
              <span class="ga-badge float secondary shadow align-left">30000</span>
            </button>
            <button class="ga-button outline">
              가운데 정렬
              <span class="ga-badge float secondary shadow align-center">30000</span>
            </button>
            <button class="ga-button outline">
              오른쪽 정렬
              <span class="ga-badge float secondary shadow align-right">30000</span>
            </button>
          </div>
          <h4 class="type-title">색상</h4>
          <div class="type-wrapper">
            <button class="ga-button outline">
              Red
              <span class="ga-badge float red shadow">R</span>
            </button>
            <button class="ga-button outline">
              Orange
              <span class="ga-badge float orange shadow">O</span>
            </button>
            <button class="ga-button outline">
              Blue
              <span class="ga-badge float blue shadow">B</span>
            </button>
            <button class="ga-button outline">
              (D)Purple
              <span class="ga-badge float teal shadow">DP</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h3 class="section-title">체크박스 / 라디오 버튼</h3>
        <div class="section-tags">
          <span class="ga-tag label green">Vue 3.0</span>
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <h5 class="content-title">
          <div class="ga-tag label secondary">checkbox</div>
          체크박스
        </h5>
        <div class="contents-wrapper">
          <div class="type-wrapper">
            <h4 class="type-title">기본</h4>
            <template v-for="checkbox in checkboxes" :key="checkbox.label">
              <GaCheckbox :label="checkbox.label" v-model="checkbox.value" />
            </template>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">라벨 없음</h4>
            <template v-for="checkbox in checkboxes1" :key="checkbox.label">
              <GaCheckbox v-model="checkbox.value" />
            </template>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">버튼 타입: 라디오</h4>
            <template v-for="checkbox in checkboxes2" :key="checkbox.label">
              <GaCheckbox type="radio" :label="checkbox.label" v-model="checkbox.value" />
            </template>
          </div>
        </div>
        <h5 class="content-title">
          <div class="ga-tag label secondary">radio</div>
          라디오 버튼
        </h5>
        <div class="contents-wrapper">
          <div class="type-wrapper">
            <h4 class="type-title">기본({{ radioValue }})</h4>
            <template v-for="r in radio" :key="r">
              <GaRadio :label="r" v-model="radioValue" />
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h3 class="section-title">스위치</h3>
        <div class="section-tags">
          <span class="ga-tag label green">Vue 3.0</span>
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">switch</div>
          스위치
        </div>
        <div class="contents-wrapper">
          <div class="type-wrapper">
            <h4 class="type-title">기본</h4>
            <div class="type-body">
              <GaSwitch />
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">동그랗게</h4>
            <div class="type-body">
              <GaSwitch :round="true" />
              <GaSwitch :round="true" :inside="true" />
              <GaSwitch :round="true" type="button" />
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">내부/외부 버튼</h4>
            <div class="type-body">
              <GaSwitch :inside="true" />
              <GaSwitch />
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">버튼 타입 (기본)</h4>
            <div class="type-body">
              <GaSwitch type="button" />
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">버튼 타입 (결과 값 지정)</h4>
            <div class="type-body">
              <GaSwitch v-model="switchValueT" type="button" on-value="Y" off-value="N" />
              결과: {{ switchValueT }}
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">버튼 타입 (사용자 라벨)</h4>
            <div class="type-body">
              <GaSwitch v-model="switchValue" type="button">
                <template v-slot:on>사용</template>
                <template v-slot:off>사용안함</template>
              </GaSwitch>
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">버튼 타입 (사용자 라벨)</h4>
            <div class="type-body">
              <GaSwitch v-model="switchValue" type="button">
                <template v-slot:on>
                  <i class="fa fa-check"></i>
                </template>
                <template v-slot:off> </template>
              </GaSwitch>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h3 class="section-title">달력</h3>
        <div class="section-tags">
          <span class="ga-tag label green">Vue 3.0</span>
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">calendar</div>
          달력
        </div>
        <div class="contents-wrapper">
          <div class="type-wrapper">
            <h4 class="type-title">기본</h4>
            <div class="type-body">
              <GaCalendar />
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">테두리</h4>
            <div class="type-body">
              <GaCalendar :grid-border="true" />
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">선택 가능</h4>
            <div class="type-body">
              <GaCalendar class="selection" @select-day="setSelectDate" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h3 class="section-title">날짜 선택기</h3>
        <div class="section-tags">
          <span class="ga-tag label green">Vue 3.0</span>
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">date picker</div>
          날짜 선택기
        </div>
        <div class="contents-wrapper">
          <div class="type-wrapper">
            <h4 class="type-title">기본</h4>
            <div class="type-body">
              <GaDatePicker v-model:date="cusDate" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h3 class="section-title">툴팁</h3>
        <div class="section-tags">
          <span class="ga-tag label green">Vue 3.0</span>
          <span class="ga-tag label teal">ga-ui-css</span>
          <span class="ga-tag label purple">direction</span>
          <span class="ga-tag label yellow">plugin</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">tooltip</div>
          툴팁
        </div>
        <div class="contents-wrapper">
          <div class="type-wrapper">
            <h4 class="type-title">기본</h4>
            <div class="type-body">
              <button class="ga-button secondary" v-ga-tooltip="`this is tooltip test`">Tooltip</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h3 class="section-title">모달</h3>
        <div class="section-tags">
          <span class="ga-tag label green">Vue 3.0</span>
          <span class="ga-tag label teal">ga-ui-css</span>
          <span class="ga-tag label yellow">plugin</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">modal</div>
          모달
        </div>
        <div class="contents-wrapper">
          <div class="type-wrapper">
            <h4 class="type-title">기본</h4>
            <div class="type-body">
              <button class="ga-button primary" @click="showModal">Show Modal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h3 class="section-title">페이지네이션</h3>
        <div class="section-tags">
          <span class="ga-tag label green">Vue 3.0</span>
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">pagination</div>
          페이지네이션
        </div>
        <div class="contents-wrapper">
          <div class="type-wrapper">
            <h4 class="type-title">기본</h4>
            <div class="type-body">
              <GaPagination :length="5" :current-page="currentPage" :last-page="10" @page-change="onPageChange" />
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">위치 정렬 (기본: center) [ left | center | right ]</h4>
            <div class="type-body">
              <GaPagination :length="5" justify="left" :current-page="1" :last-page="10" />
              <GaPagination :length="5" justify="center" :current-page="1" :last-page="10" />
              <GaPagination :length="5" justify="right" :current-page="1" :last-page="10" />
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">표출 페이지 지정</h4>
            <div class="type-body">
              <GaPagination :length="10" justify="left" :current-page="1" :last-page="10" />
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">전체 페이지 지정(마지막 페이지)</h4>
            <div class="type-body">
              <GaPagination :length="10" justify="left" :current-page="1" :last-page="50" />
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">간단하게 표시</h4>
            <div class="type-body">
              <GaPagination type="page" justify="left" :current-page="1" :last-page="10" />
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">버튼 타입</h4>
            <div class="type-body">
              <GaPagination :border="true" justify="left" :current-page="1" :last-page="10" />
              <br />
              <GaPagination :border="true" justify="left" type="page" :current-page="1" :last-page="10" />
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">조그맣게</h4>
            <div class="type-body">
              <GaPagination :compact="true" justify="left" :current-page="1" :last-page="10" />
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">동그랗게</h4>
            <div class="type-body">
              <GaPagination
                  :circle="true"
                  justify="left"
                  :border="true"
                  :length="5"
                  :current-page="1"
                  :last-page="10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h1 class="section-title">Input</h1>
        <div class="section-tags">
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">input</div>
          Input
        </div>
        <div class="contents-wrapper">
          <h4 class="type-title">기본</h4>
          <div class="type-wrapper">
            <div class="ga-input">
              <input type="text" placeholder="입력하세요" />
            </div>
          </div>
          <h4 class="type-title">비활성 :: Disabled</h4>
          <div class="type-wrapper">
            <div class="ga-input disabled">
              <input type="text" placeholder="입력하세요" />
            </div>
          </div>
          <h4 class="type-title">읽기 가능 :: Read Only</h4>
          <div class="type-wrapper">
            <div class="ga-input">
              <input type="text" readonly placeholder="입력하세요" />
            </div>
            <div class="ga-input readonly">
              <input type="text" placeholder="입력하세요" />
            </div>
          </div>
          <h4 class="type-title">밑줄 :: Underline</h4>
          <div class="type-wrapper">
            <div class="ga-input underline">
              <input type="text" placeholder="입력하세요" />
            </div>
          </div>
          <h4 class="type-title">투명하게 :: Transparent</h4>
          <div class="type-wrapper">
            <div class="ga-input transparent">
              <input type="text" placeholder="입력하세요" />
            </div>
          </div>
          <h4 class="type-title">조그맣게 :: Compact</h4>
          <div class="type-wrapper">
            <div class="ga-input compact">
              <input type="text" placeholder="입력하세요" />
            </div>
          </div>
          <h4 class="type-title">꽉차게 :: Fluid</h4>
          <div class="type-wrapper">
            <div class="ga-input fluid">
              <input type="text" placeholder="입력하세요" />
            </div>
          </div>
          <h4 class="type-title">편집모드 :: Edit</h4>
          <div class="type-wrapper">
            <div class="ga-input labeled right edit" :class="{ editable: isEdit }">
              <input type="text" placeholder="입력하세요" value="편집 대상" />
              <label class="ga-blue">원</label>
            </div>
            <button class="ga-button icon circle" @click="isEdit = !isEdit">
              <i v-if="isEdit" class="fa fa-check"></i>
              <i v-else class="fa fa-pen"></i>
            </button>
          </div>
          <h4 class="type-title">단위 표시 :: Unit</h4>
          <div class="type-wrapper">
            <div class="ga-input unit" data-unit="대">
              <input class="align-right" type="text" placeholder="0" />
            </div>
          </div>
          <h4 class="type-title">정렬 :: Align</h4>
          <div class="type-wrapper">
            <div class="ga-input">
              <input class="align-left" type="text" placeholder="왼쪽부터 입력" />
            </div>
            <div class="ga-input">
              <input class="align-center" type="text" placeholder="가운데부터 입력" />
            </div>
            <div class="ga-input">
              <input class="align-right" type="text" placeholder="오른쪽부터 입력" />
            </div>
          </div>
          <h4 class="type-title">뱃지 :: Badge</h4>
          <div class="type-wrapper">
            <div class="ga-input badge">
              <input type="text" :value="counterValue" placeholder="이름을 입력" @input="setCounter" />
              <div class="ga-badge secondary" :class="[`ga-${checkCounter}`]">
                {{ checkCounter === 'success' ? maxLength - counterValue.length : 'ERROR' }}
              </div>
            </div>
          </div>
          <h4 class="type-title">아이콘 :: Icon</h4>
          <div class="type-wrapper">
            <div class="ga-input icon left">
              <input type="text" placeholder="검색어를 입력" />
              <i class="icon fa fa-magnifying-glass"></i>
            </div>
            <div class="ga-input icon both">
              <i class="icon fal fa-magnifying-glass"></i>
              <input type="text" placeholder="검색어를 입력" />
              <i class="icon fa fa-chevron-down"></i>
            </div>
            <div class="ga-input icon right">
              <input type="text" placeholder="검색어를 입력" />
              <i class="icon fal fa-magnifying-glass"></i>
            </div>
          </div>
          <h4 class="type-title">아이콘 링크 :: Linked Icon</h4>
          <div class="type-wrapper">
            <div class="ga-input icon right link">
              <input type="text" placeholder="검색어를 입력" />
              <i class="icon circle fal fa-magnifying-glass"></i>
            </div>
          </div>
          <h4 class="type-title">라벨 :: Label</h4>
          <div class="type-wrapper">
            <div class="ga-input labeled right">
              <input type="text" placeholder="가격를 입력" />
              <label class="ga-purple">원</label>
            </div>
            <div class="ga-input labeled left">
              <input type="text" placeholder="이름을 입력" />
              <label>이름</label>
            </div>
            <div class="ga-input labeled right">
              <input type="text" :value="counterValue" placeholder="이름을 입력" @input="setCounter" />
              <label class="outline">{{ counterValue.length }}/{{ maxLength }}</label>
            </div>
          </div>
          <h4 class="type-title">버튼 :: Button</h4>
          <div class="type-wrapper">
            <div class="ga-input button right">
              <input type="text" placeholder="입력하세요" />
              <div class="ga-button icon">
                <i class="fal fa-copy"></i>
              </div>
            </div>
            <div class="ga-input button left">
              <input type="text" placeholder="입력하세요" />
              <div class="ga-button primary">저장</div>
            </div>
          </div>
          <h4 class="type-title">글상자 :: Textarea</h4>
          <div class="type-wrapper">
            <div class="ga-input fluid">
              <textarea placeholder="입력하세요"></textarea>
            </div>
            <div class="ga-input short fluid">
              <textarea placeholder="입력하세요"></textarea>
            </div>
          </div>
          <h4 class="type-title">Vue Input</h4>
          <div class="type-wrapper">
            <GaInput v-model="inputValue" />
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h1 class="section-title">셀렉트 박스</h1>
        <div class="section-tags">
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">select box</div>
          셀렉트 박스
        </div>
        <div class="contents-wrapper">
          <h4 class="type-title">기본</h4>
          <div class="type-wrapper">
            <div class="ga-select-box">
              <select>
                <option value="">선택</option>
                <option v-for="item in [1, 2, 3, 4, 5]" :key="item" :value="item">{{ item }}번 옵션</option>
              </select>
              <i class="icon fa fa-chevron-down"></i>
            </div>
          </div>
          <h4 class="type-title">조그맣게 :: Compact</h4>
          <div class="type-wrapper">
            <div class="ga-select-box compact">
              <select>
                <option value="">선택</option>
                <option v-for="item in [1, 2, 3, 4, 5]" :key="item" :value="item">{{ item }}번 옵션</option>
              </select>
              <i class="icon fa fa-chevron-down"></i>
            </div>
          </div>
          <h4 class="type-title">드롭다운 :: Dropdown</h4>
          <div class="type-wrapper">
            <div class="ga-select-box dropdown" :class="{open: isOpen}" @click="isOpen = !isOpen">
              <div class="selected-item ga-input icon right">
                <input type="text" placeholder="선택하세요">
                <i class="icon fa fa-chevron-down"></i>
              </div>
              <div class="select-menu">
                <div class="ga-list selection">
                  <div class="item option-item icon" v-for="item in [1, 2, 3, 4, 5]" :key="item" :value="item">{{ item }}번 옵션</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h1 class="section-title">목록</h1>
        <div class="section-tags">
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">list</div>
          목록
        </div>
        <div class="contents-wrapper">
          <h4 class="type-title">기본</h4>
          <div class="type-wrapper">
            <div class="ga-list">
              <div v-for="item in [1, 2, 3, 4, 5]" :key="item" class="item">{{ item }}번 아이템</div>
            </div>
          </div>
          <h4 class="type-title">목록 스타일 :: Ul</h4>
          <div class="type-wrapper">
            <div class="ga-list ul">
              <div v-for="item in [1, 2, 3, 4, 5]" :key="item" class="item">{{ item }}번 아이템</div>
            </div>
          </div>
          <h4 class="type-title">제목 아이템 :: Header Title</h4>
          <div class="type-wrapper">
            <div class="ga-list icon selection">
              <div class="header-item item">
                <i class="list-icon icon fa fa-t"></i>
                기본
              </div>
              <div v-for="item in [1, 2, 3, 4, 5]" :key="item" class="item">{{ item }}번 아이템</div>
            </div>
          </div>
          <h4 class="type-title">선택된 아이템 :: Selection</h4>
          <div class="type-wrapper">
            <div class="ga-list selection">
              <template v-for="item in [1, 2, 3, 4, 5]" :key="item">
                <div class="item" :class="{ selected: item === selectedItem }" @click="selectedItem = item">
                  {{ item }}번 아이템
                </div>
              </template>
            </div>
          </div>
          <h4 class="type-title">구분선 :: Bordered</h4>
          <div class="type-wrapper">
            <div class="ga-list bordered">
              <template v-for="item in [1, 2, 3, 4, 5]" :key="item">
                <div class="item">{{ item }}번 아이템</div>
              </template>
            </div>
          </div>
          <h4 class="type-title">아이콘 :: Icon</h4>
          <div class="type-wrapper">
            <div class="ga-list icon">
              <template v-for="item in ['car', 'bus', 'truck-front']" :key="item">
                <div class="item">
                  <i class="list-icon icon far" :class="`fa-${item}`"></i>
                  <div class="item-title">{{ item }} 아이템</div>
                </div>
              </template>
            </div>
          </div>
          <h4 class="type-title">이미지 :: Image</h4>
          <div class="type-wrapper">
            <div class="ga-list">
              <template v-for="item in [1, 2, 3, 4, 5]" :key="item">
                <div class="item">
                  <div class="item-img">
                    <img src="" alt="" />
                  </div>
                  <div class="item-title">{{ item }}번 아이템</div>
                </div>
              </template>
            </div>
          </div>
          <h4 class="type-title">사용자 스타일 추가</h4>
          <div class="type-wrapper">
            <div id="list" class="ga-list selection bordered">
              <div v-for="item in [1, 2, 3, 4, 5]" :key="item" class="item">{{ item }}번 아이템</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h1 class="section-title">탭</h1>
        <div class="section-tags">
          <span class="ga-tag label green">Vue 3.0</span>
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">tabs</div>
          탭
        </div>
        <div class="contents-wrapper">
          <h4 class="type-title">기본</h4>
          <div class="type-wrapper">
            <div class="ga-tabs">
              <div class="tab-menu">
                <template v-for="item in [1, 2, 3, 4, 5]" :key="item">
                  <div class="tab tab-item" :class="{ active: item === activeTab }" @click="activeTab = item">
                    아이템 {{ item }}
                  </div>
                </template>
              </div>
            </div>
          </div>
          <h4 class="type-title">기본 :: Vertical</h4>
          <div class="type-wrapper">
            <div class="ga-tabs vertical">
              <div class="tab-menu">
                <template v-for="item in [1, 2, 3, 4, 5]" :key="item">
                  <div class="tab tab-item" :class="{ active: item === activeTab }" @click="activeTab = item">
                    아이템 {{ item }}
                  </div>
                </template>
              </div>
            </div>
          </div>
          <h4 class="type-title">라인 :: Line</h4>
          <div class="type-wrapper">
            <div class="ga-tabs line">
              <div class="tab-menu">
                <template v-for="item in [1, 2, 3, 4, 5]" :key="item">
                  <div class="tab tab-item" :class="{ active: item === activeTab }" @click="activeTab = item">
                    아이템 {{ item }}
                  </div>
                </template>
              </div>
            </div>
          </div>
          <h4 class="type-title">버튼 :: Button</h4>
          <div class="type-wrapper">
            <div class="ga-tabs button">
              <div class="tab-menu">
                <template v-for="item in [1, 2, 3, 4, 5]" :key="item">
                  <div class="tab tab-item" :class="{ active: item === activeTab }" @click="activeTab = item">
                    아이템 {{ item }}
                  </div>
                </template>
              </div>
              <div class="tab-contents">{{ activeTab }}</div>
            </div>
          </div>
          <h4 class="type-title">브라우저 :: Browser</h4>
          <div class="type-wrapper">
            <div class="ga-tabs browser">
              <div class="tab-menu">
                <template v-for="item in [1, 2, 3, 4, 5]" :key="item">
                  <div class="tab tab-item" :class="{ active: item === activeTab }" @click="activeTab = item">
                    <div class="tabText ellipsis">아이템 {{ item }}</div>
                    <div class="ga-button icon tiny circle btn-close">
                      <i class="fa fa-xmark"></i>
                    </div>
                  </div>
                </template>
              </div>
              <div class="tab-contents">{{ activeTab }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h1 class="section-title">테이블</h1>
        <div class="section-tags">
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">table</div>
          테이블
        </div>
        <div class="contents-wrapper">
          <h4 class="type-title">기본</h4>
          <div class="type-wrapper">
            <table class="ga-table">
              <thead>
              <tr>
                <th v-for="col in tableColumn" :key="col.name">{{ col.title }}</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(row, index) in tableValue" :key="index">
                <td v-for="col in tableColumn" :key="col.name">{{ row[col.name] }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <h4 class="type-title">단일 열</h4>
          <div class="type-wrapper">
            <table class="ga-table single">
              <thead>
              <tr>
                <th v-for="col in tableColumn" :key="col.name">{{ col.title }}</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(row, index) in tableValue" :key="index">
                <td v-for="col in tableColumn" :key="col.name">{{ row[col.name] }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <h4 class="type-title">정렬(행) :: Row Align</h4>
          <div class="type-wrapper">
            <table class="ga-table">
              <thead>
              <tr>
                <th v-for="col in tableColumn" :key="col.name">{{ col.title }}</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td v-for="col in tableColumn" :key="col.name">{{ tableValue[0][col.name] }}</td>
              </tr>
              <tr class="align-center">
                <td v-for="col in tableColumn" :key="col.name">{{ tableValue[1][col.name] }}</td>
              </tr>
              <tr class="align-right">
                <td v-for="col in tableColumn" :key="col.name">{{ tableValue[2][col.name] }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <h4 class="type-title">정렬(열) :: Column Align</h4>
          <div class="type-wrapper">
            <table class="ga-table">
              <thead>
              <tr>
                <th v-for="col in tableColumn" :key="col.name" :class="`align-${col.align}`">{{ col.title }}</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(row, index) in tableValue" :key="index">
                <td v-for="col in tableColumn" :key="col.name" :class="`align-${col.align}`">{{ row[col.name] }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <h4 class="type-title">테이블 제목</h4>
          <div class="type-wrapper">
            <div class="table-title">제목</div>
            <table class="ga-table labeled">
              <thead>
              <tr>
                <th v-for="col in tableColumn" :key="col.name">{{ col.title }}</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(row, index) in tableValue" :key="index">
                <td v-for="col in tableColumn" :key="col.name">{{ row[col.name] }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <h4 class="type-title">푸터 영역 지정</h4>
          <div class="type-wrapper">
            <div class="table-title">제목</div>
            <table class="ga-table labeled">
              <thead>
              <tr>
                <th v-for="col in tableColumn" :key="col.name">{{ col.title }}</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(row, index) in tableValue" :key="index">
                <td v-for="col in tableColumn" :key="col.name">{{ row[col.name] }}</td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td :colspan="tableColumn.length">푸터 영역 지정</td>
              </tr>
              </tfoot>
            </table>
          </div>
          <h4 class="type-title">컬럼 균등 분할</h4>
          <div class="type-wrapper">
            <table class="ga-table column three">
              <thead>
              <tr>
                <th v-for="col in tableColumn" :key="col.name">{{ col.title }}</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(row, index) in tableValue" :key="index">
                <td v-for="col in tableColumn" :key="col.name">{{ row[col.name] }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <h4 class="type-title">컬럼 지정 분할</h4>
          <div class="type-wrapper">
            <table class="ga-table">
              <thead>
              <tr>
                <th v-for="col in tableColumn" :key="col.name" :class="`col-${col.width}`">
                  {{ col.title }} ({{ col.width }}칸 지정)
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(row, index) in tableValue" :key="index">
                <td v-for="col in tableColumn" :key="col.name">{{ row[col.name] }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h1 class="section-title">패널</h1>
        <div class="section-tags">
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">panel</div>
          패널
        </div>
        <div class="contents-wrapper">
          <h4 class="type-title">기본</h4>
          <div class="type-wrapper">
            <div class="ga-panel">
              <div class="panel-header">제목</div>
              <div class="panel-content">
                <div class="content-wrapper">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
                  incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
                  labore laboriosam laudantium quasi.
                </div>
              </div>
            </div>
          </div>
          <h4 class="type-title">접기</h4>
          <div class="type-wrapper">
            <div class="ga-panel collapse" :class="{ open: isCollapse }">
              <div class="panel-header">
                <div class="title">제목</div>
                <button class="panel-toggle-btn ga-button icon outline" @click="isCollapse = !isCollapse">
                  <i class="fa fa-caret-up"></i>
                </button>
              </div>
              <div class="panel-content">
                <div class="content-wrapper">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore, earum eum eveniet facilis
                  incidunt ipsum necessitatibus neque nisi reiciendis repudiandae, sapiente! A, consequuntur ex illum
                  labore laboriosam laudantium quasi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="grid">
      <div class="section-header">
        <h1 class="section-title">그리드 :: Grid - flex</h1>
        <div class="section-tags">
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">grid</div>
          그리드
        </div>
        <div class="contents-wrapper">
          <h4 class="type-title">기본</h4>
          <div class="type-wrapper">
            <div class="ga-grid divide">
              <div class="column" v-for="col in 12" :key="col"></div>
            </div>
          </div>
          <h4 class="type-title">균등 분할 :: Divide</h4>
          <div class="type-wrapper">
            <div class="ga-grid divide half">
              <div class="column" v-for="col in 2" :key="col"></div>
            </div>
            <div class="ga-grid divide quarter">
              <div class="column" v-for="col in 4" :key="col"></div>
            </div>
            <div class="ga-grid divide-6">
              <div class="column" v-for="col in 6" :key="col"></div>
            </div>
          </div>
          <h4 class="type-title">분할 구성 :: Col</h4>
          <div class="type-wrapper">
            <div class="ga-grid">
              <div class="column" v-for="col in [2, 4, 1, 5]" :key="col" :class="`col-${col}`"></div>
            </div>
          </div>
          <div class="type-wrapper">
            <div class="ga-grid left-side">
              <div class="column"></div>
              <div class="column col-1"></div>
            </div>
            <div class="ga-grid right-side">
              <div class="column col-1"></div>
              <div class="column"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h1 class="section-title">토스트 테스트</h1>
        <div class="section-tags">
          <span class="ga-tag label green">Vue 3.0</span>
          <span class="ga-tag label teal">ga-ui-css</span>
        </div>
      </div>
      <div class="section-body">
        <div class="content-title">
          <div class="ga-tag label secondary">label</div>
          제목
        </div>
        <div class="contents-wrapper">
          <h4 class="type-title">기본</h4>
          <div class="type-wrapper">
            <div class="ga-button success" @click="showToast('success')">성공</div>
            <div class="ga-button danger" @click="showToast('danger')">위험</div>
            <div class="ga-button info" @click="showToast('info')">정보</div>
            <div class="ga-button attention" @click="showToast('attention')">주의</div>
            <div class="ga-button importance" @click="showToast('importance')">중요</div>
            <div class="ga-button" @click="$gaToast.clearToast()">Toast clear</div>
          </div>
          <div class="type-wrapper">
            <template v-for="color in pColors" :key="color.name">
              <div class="ga-button" :class="color.name" @click="showToast(color.name)">{{ color.label }}</div>
            </template>
          </div>
          <div class="type-wrapper">
            <h4>동그랗게 :: Round</h4>
            <GaSwitch v-model="toastSet.round" type="button">
              <template v-slot:on>사용</template>
              <template v-slot:off>사용안함</template>
            </GaSwitch>
            <h4>제목 사용 :: Title</h4>
            <GaSwitch v-model="toastSet.useTitle" type="button">
              <template v-slot:on>사용</template>
              <template v-slot:off>사용안함</template>
            </GaSwitch>
            <h4>아이콘 사용 :: Icon</h4>
            <GaSwitch v-model="toastSet.useIcon" type="button">
              <template v-slot:on>사용</template>
              <template v-slot:off>사용안함</template>
            </GaSwitch>
            <h4>닫기 버튼 사용 :: Close Button</h4>
            <GaSwitch v-model="toastSet.closeButton" type="button">
              <template v-slot:on>사용</template>
              <template v-slot:off>사용안함</template>
            </GaSwitch>
            <h4>Freeze</h4>
            <GaSwitch v-model="toastSet.freeze" type="button">
              <template v-slot:on>사용</template>
              <template v-slot:off>사용안함</template>
            </GaSwitch>
            <h4>위로 쌓기 :: Display on Top</h4>
            <GaSwitch v-model="toastSet.displayOnTop" type="button">
              <template v-slot:on>사용</template>
              <template v-slot:off>사용안함</template>
            </GaSwitch>
            <h4>스낵바 모드 ::Snackbar mode</h4>
            <GaSwitch v-model="toastSet.snackbar" type="button">
              <template v-slot:on>사용</template>
              <template v-slot:off>사용안함</template>
            </GaSwitch>
          </div>
          <div class="type-wrapper">
            <div class="type-title">유지 시간 :: Timeout</div>
            <div class="ga-input labeled right">
              <input type="text" v-model="toastSet.timeout" class="align-right" />
              <label class="outline">ms</label>
            </div>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">토스트 스타일 :: Theme</h4>
            <template v-for="t in themeList" :key="t">
              <GaRadio :label="t" v-model="toastSet.theme" />
            </template>
          </div>
          <div class="type-wrapper">
            <h4 class="type-title">위치 :: Positions</h4>
            <template v-for="p in positions" :key="p">
              <GaRadio :label="p" v-model="toastSet.position" />
            </template>
          </div>
          <div class="type-wrapper">
            <h4>사용자 테스트</h4>
            <div class="ga-grid right-side">
              <div class="column col-2">
                <div class="ga-input">
                  <input type="text" v-model="toastMsg.title" placeholder="타이틀 입력" />
                </div>
              </div>
              <div class="column col-8">
                <div class="ga-input fluid">
                  <input type="text" v-model="toastMsg.description" placeholder="내용 입력" />
                </div>
              </div>
              <div class="column">
                <div class="ga-button secondary" @click="toastStart">토스트</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TestModal from '@/components/TestModal'
export default {
  name: 'HomeView',
  data() {
    return {
      fontWeight: [
        { name: 'light', value: '100', label: 'Light' },
        { name: 'regular', value: '400', label: 'Regular' },
        { name: 'bold', value: '700', label: 'Bold' }
      ],
      pColors: [
        { name: 'red', label: '빨강' },
        { name: 'orange', label: '주황' },
        { name: 'yellow', label: '노랑' },
        { name: 'lightgreen', label: '밝은 초록' },
        { name: 'green', label: '초록' },
        { name: 'lightblue', label: '밝은 파랑' },
        { name: 'blue', label: '파랑' },
        { name: 'deepblue', label: '짙은 파랑' },
        { name: 'deeppurple', label: '짙은 보라' },
        { name: 'purple', label: '보라' },
        { name: 'brown', label: '팥색' },
        { name: 'gray', label: '회색' }
      ],
      checkboxes: [
        { label: '체크박스 1', value: true },
        { label: '체크박스 2', value: false },
        { label: '체크박스 3', value: false }
      ],
      checkboxes1: [
        { label: '체크박스 4', value: true },
        { label: '체크박스 5', value: false },
        { label: '체크박스 6', value: false }
      ],
      checkboxes2: [
        { label: '체크박스 7', value: true },
        { label: '체크박스 8', value: false },
        { label: '체크박스 9', value: false }
      ],
      buttonType: [
        { type: 'primary', label: '메인' },
        { type: 'secondary', label: '강조' },
        { type: 'success', label: '성공' },
        { type: 'danger', label: '위험' },
        { type: 'attention', label: '주의' },
        { type: 'importance', label: '중요' }
      ],
      tableColumn: [
        { name: 'name', title: '이름', width: 2, align: 'left' },
        { name: 'age', title: '나이', width: 2, align: 'center' },
        { name: 'job', title: '직업', width: 8, align: 'right' }
      ],
      tableValue: [
        { name: '김아무개', age: 11, job: '학생' },
        { name: '이아무개', age: 17, job: '대학생' },
        { name: '박아무개', age: 31, job: '대학원생' }
      ],
      buttonGroup: ['재생', '정지', '일시정지', '재시작', '종료'],
      selectedButton: '재생',
      selectedButton1: 1,
      radio: ['라디오1', '라디오2', '라디오3', '라디오4'],
      radioValue: '라디오1',
      checkboxValue: [],
      switchValue: false,
      switchValueT: 'NO',
      selectedD: new Date().toLocaleDateString(),
      openCal: false,
      direct: 'down',
      position: {},
      cusDate: new Date('2022-12-25'),
      returnData: '',
      //selectbox
      isOpen: false,
      //input
      isEdit: false,
      maxLength: 10,
      counterValue: '',
      errorMsg: '',
      inputValue: 'vue data',
      //pagination
      currentPage: 1,
      currentPage1: 1,
      selectedItem: 1,
      activeTab: 1,
      isCollapse: false,
      themeList: ['기본', 'light', 'icon', 'icon-bg', 'line'],
      positions: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'top-full-width',
        'bottom-full-width'
      ],
      toastSet: {
        round: false,
        useTitle: true,
        useIcon: true,
        closeButton: true,
        theme: '',
        position: 'top-right',
        displayOnTop: true,
        snackbar: false,
        freeze: false,
        timeout: 5000
      },
      toastMsg: {
        title: '',
        description: ''
      }
    }
  },
  computed: {
    checkCounter() {
      return this.maxLength - this.counterValue.length < 0 ? 'danger' : 'success'
    }
  },
  mounted() {
    document.addEventListener('click', () => {
      this.setOpen(false)
    })
  },
  methods: {
    setSelectDate(payload) {
      this.selectedD = payload.toLocaleDateString()
      this.setOpen(false)
    },
    setOpen(value = true) {
      this.setPosition(event)
      // if (!this.$el.contains(event.target)) return
      if (this.openCal) this.openCal = false
      this.openCal = value
      // this.emitter.emit('show-modal', 'test event bus')
    },
    setPosition(e) {
      // console.log(e.target.getBoundingClientRect())
      const { height, top, left } = e.target.getBoundingClientRect()
      const wh = window.innerHeight
      this.direct = 400 < wh - (height + top) ? 'down' : 'up'
      this.position = {
        top: this.direct === 'down' ? `${height + top}px` : `${top - 400}px`,
        left: `${left}px`
      }
    },
    dateToObject(date) {
      return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      }
    },
    returnTestMethod(data) {
      this.returnData = data
      alert(this.returnData)
    },
    setCounter(e) {
      this.counterValue = e.target.value
      if (e.target.value.length > this.maxLength) {
        this.counterValue = this.counterValue.slice(0, -1)
      }
    },
    showModal() {
      const modalProps = {
        title: '모달 테스트',
        description: '모달 테스트 입니다.',
        pText: '저장',
        testFunc: this.returnTestMethod
      }
      this.$gaModal.show({
        comp: TestModal,
        props: modalProps,
        options: {
          clickToClose: false
        }
      })
    },
    onPageChange(page) {
      this.currentPage = page
    },
    onPageChange1(page) {
      this.currentPage1 = page
    },
    closeTag() {
      alert('close tag')
    },
    showToast(type) {
      const contents = {
        title: type.toUpperCase(),
        description: `this is ${type} Toast Test`
      }
      this.$gaToast.show(type, contents, this.toastSet)
    },
    toastStart() {
      const typeIndex = parseInt((Math.random() * 1000) % 12)
      const contents = this.toastMsg
      this.$gaToast.show(this.pColors[typeIndex].name, contents, this.toastSet)
      setTimeout(this.toastStart, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  max-width: 1024px;
  padding: 30px;
  border: 1px solid #909090;
  margin-bottom: 10px;
  .section-header {
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #909090;
    .section-title {
      margin-bottom: 10px;
    }
  }
  .section-body {
    .contents-title {
      margin: 10px 0 20px;
    }
    .contents-wrapper {
      margin-bottom: 30px;
      .type-wrapper {
        padding: 10px;
        .type-title {
          margin-bottom: 10px;
        }
      }
    }
  }
}

.datepicker-wrapper {
  position: relative;
  margin-top: 10px;
  .datepicker {
    position: absolute;
    left: 0;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.16);
    transform-origin: top;
    &.up {
      margin-bottom: 10px;
      bottom: 100%;
    }
    &.down {
      margin-top: 10px;
      top: 100%;
    }
  }
}
.ga-checkbox.checked {
  color: #3c79b8;
}

#list {
  max-width: 400px;
  border: 1px solid #d6d6d6;
  .item {
    padding: 10px;
  }
}
.table-title {
  background-color: #f6f7fb;
  padding: 10px 20px;
}
.color-chip {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
  padding: 10px;
  border-radius: 50%;
  margin: 10px;
  border: 1px solid transparent;
  .label {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 5px;
    color: #909090;
    text-align: center;
    width: 100%;
  }
  &.text {
    &:after {
      content: '텍스트';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: inherit;
      font-size: 0.8em;
    }
  }
}
#grid .ga-grid:not(.tabled) > .column {
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #f2f2f2;
    display: block;
    box-shadow: 0 0 0 1px #efefef inset;
    min-height: 50px;
  }
}
#foundation {
  .mainWord {
    font-size: 6em;
  }
  p {
    letter-spacing: 5px;
    font-weight: 500;
  }
}
.style-guide {
  padding: 30px;
}
</style>
