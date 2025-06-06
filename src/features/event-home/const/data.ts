import { EventPerson } from '@/features/event/const/data';

export const HUBO_COLOR = {
	이재명: { bg: 'bg-[#152484]', icon: '#7EA7FF', group: 'group-hover:bg-[#152484]' },
	김문수: { bg: 'bg-[#E61E2B]', icon: '#FF9CA7', group: 'group-hover:bg-[#E61E2B]' },
	이준석: { bg: 'bg-[#FF7210]', icon: '#FFC48F', group: 'group-hover:bg-[#ff7210]' },
} as const;

export const EVENT_HOME_CARD_DATA = {
	이재명: {
		party: '더불어민주당',
		light: {
			keyword: { first: '이제부터는 진짜 대한민국', second: '이제는 이재명' },
			comment: '약속은 지켜야 하니까',
			info: ['AI 100조', 'K콘텐츠 50조 수출', '주 4.5일제', '부동산 개혁', '청년 기회'],
			label: [
				{ text: '💡 정책실현력', color: 'text-[#4F29E5]', bg: 'bg-[#4F29E5]/9' },
				{ text: '👥 민생중심', color: 'text-[#00BF40]', bg: 'bg-[#00BF40]/9' },
				{ text: '🚀 미래전환', color: 'text-[#0066FF]', bg: 'bg-[#0066FF]/9' },
			],
		},
		dark: {
			keyword: { first: '정책적으로 가장', second: '극단적이신 분 이재명' },
			comment: 'AI 100조 투자 공약',
			bad: { name: '이준석', text: '세부적으로 계획도 없는데 AI산업 100조 원 넣겠다는 말씀 잘 들었다.' },
			label: ['커피원가120원', '거북섬', '호텔경제학'],
		},
	},
	김문수: {
		party: '국민의힘',
		light: {
			keyword: { first: '새롭게 대한민국, 정정당당', second: '알고보니 진짜는 김문수' },
			comment: '말이 아닌 실적입니다',
			info: ['감세 + 자율경제', 'GTX 전국 확대', '노조 개혁', '안보 강화', '저출산 대책'],
			label: [
				{ text: '🔧 실적강조', color: 'text-[#4F29E5]', bg: 'bg-[#4F29E5]/9' },
				{ text: '🇰🇷 정통가치', color: 'text-[#0066FF]', bg: 'bg-[#0066FF]/9' },
				{ text: '🧱 실용행정', color: 'text-[#A35D00]', bg: 'bg-[#A35D00]/9' },
			],
		},
		dark: {
			keyword: { first: '서민과 동떨어진', second: '국정철학 김문수' },
			comment: '사전투표제 폐지 공약',
			bad: { name: '이준석', text: '사전투표를 독려하던 정당이 이제 와서 폐지를 말하니, 유권자들은 혼란스럽고 코미디 같습니다.' },
			label: ['보수의침묵', '믿음은개인', '기억거부'],
		},
	},
	이준석: {
		party: '개혁신당',
		light: {
			keyword: { first: '미래를 여는 선택', second: '새로운 대통령, 이준석' },
			comment: '정치는 정답이어야 한다',
			info: ['규제 기준국가', '지방법인세 자율화', '30대 총리제', 'AI투명성법', '탈진영'],
			label: [
				{ text: '🧠 시스템중심', color: 'text-[#FF9200]', bg: 'bg-[#FF9200]/9' },
				{ text: '🔄 정치해체', color: 'text-[#A35D00]', bg: 'bg-[#A35D00]/9' },
				{ text: '👟 청년·실용', color: 'text-[#0041A3]', bg: 'bg-[#0041A3]/9' },
			],
		},
		dark: {
			keyword: { first: '기준 없는 정치로', second: '혼란만 키운 이준석' },
			comment: '청년얼굴, 자기 정치',
			bad: {
				name: '이재명',
				text: '정치 시스템을 바꾸겠다면서 결국은 본인 중심의 정당 만들고, 모든 갈등을 ‘내가 맞다’로 수렴시키는 건 정치 교체가 아니라 정치 사유화입니다.',
			},
			label: ['당적유목민', '정당셀프탈퇴', '내가공천한다'],
		},
	},
};

export type PolicyCategory = '정치·행정' | '경제' | '교육' | '외교·안보' | '복지·사회';
type PolicyData = Record<PolicyCategory, { keywordList: string[]; info: { title: string; detailList: string[] }[] }>;

export const EVENT_HOME_POLICY_DATA: Record<EventPerson, PolicyData> = {
	이재명: {
		'정치·행정': {
			keywordList: ['검찰개혁', '행정수도', '불체포특권폐지', '권력분산'],
			info: [
				{
					title: '정치 개혁',
					detailList: ['강력한 검찰·사법개혁 추진', '국회의 특권 폐지 추진', '권력 분산 개헌 검토 중'],
				},
				{
					title: '검찰·사법',
					detailList: ['검찰 수사·기소권 분리', '검사 탄핵·징계제도 도입', '공수처 유지·중립성 강화'],
				},
				{
					title: '국회 개혁',
					detailList: ['불체포특권 제한 추진', '국회의원 국민소환제 도입 검토'],
				},
				{
					title: '선거 제도',
					detailList: ['연동형 비례대표제 개선', '청년·여성 정치 진입 완화'],
				},
				{
					title: '개헌',
					detailList: ['4년 중임제 개헌 검토', '대통령 권한 분산 추진'],
				},
				{
					title: '행정 분권',
					detailList: ['세종시 행정수도 완성', '제2집무실·국회 이전', '부처 이전·균형발전 추진'],
				},
				{
					title: '공직 사회',
					detailList: ['고위공직자 부패 처벌 강화', '공정·투명 인사제도 개편'],
				},
			],
		},
		경제: {
			keywordList: ['AI100조', '기본주택', '디지털경제', '균형성장'],
			info: [
				{
					title: '경제 기조',
					detailList: ['성장과 분배의 균형', '민생 중심 실용경제', '잘사는 대한민국 비전'],
				},
				{
					title: '성장 전략',
					detailList: ['AI·반도체·K콘텐츠 육성', '100조 민관 AI펀드 조성', '문화·방산 수출 확대'],
				},
				{
					title: '재정 방향',
					detailList: ['확장적 재정 기조 유지', '부유층 증세 가능성 시사', '성장 기반 복지 지출 확대'],
				},
				{
					title: '민생 경제',
					detailList: ['상병수당 전국 확대', '청년·저소득층 금융 지원', '1인 가구 복지·자립 지원'],
				},
				{
					title: '부동산',
					detailList: ['기본주택·공공임대 확대', '무주택 청년 주거 지원', '전월세 시장 안정화 추진'],
				},
				{
					title: '노동 정책',
					detailList: ['포괄임금제 폐지', '주 4.5일제 도입 검토', '공공일자리 확대·노동권 강화'],
				},
				{
					title: '산업 전략',
					detailList: ['GPU·데이터센터 등 인프라 투자', 'K-방산·문화 컨트롤타워 설치', '탄소중립·전환산업 동시 지원'],
				},
			],
		},
		교육: {
			keywordList: ['무상교육', '교육복지', '기초학력', '지방대지원'],
			info: [
				{
					title: '교육 철학',
					detailList: ['교육 기회 평등 강화', '무상교육 지속·확대', '지역 격차 해소 교육복지'],
				},
				{
					title: '교육 복지',
					detailList: ['고교 무상교육 유지', '무상교복·급식 확대', '사교육비 절감 공교육 강화'],
				},
				{
					title: '대학 정책',
					detailList: ['대학 서열 완화', '지방대 특성화 지원', '등록금 완화·교육 질 제고'],
				},
				{
					title: '초·중 교육',
					detailList: ['기초학력 국가책임 강화', '입시제도 보완 중심 접근', '공교육 내 학습 격차 해소'],
				},
				{
					title: '교원 정책',
					detailList: ['교육복지 중심 기조 강조', '교권보다 책임·지원 중시', '교사 충원·처우 개선은 제한'],
				},
				{
					title: '직업·평생',
					detailList: ['청년 직업훈련 강화', '공공일자리 연계 교육 기획', '기초·취업교육 공공성 조화'],
				},
				{
					title: '의대·전문',
					detailList: ['의대정원 확대 정책 유지', '공공의료 중심 인력 확충'],
				},
			],
		},
		'외교·안보': {
			keywordList: ['균형외교', '첨단국방', '남북협력', '문민통제'],
			info: [
				{
					title: '외교 기조',
					detailList: ['실용 중심 외교 노선', '한미동맹 기반, 대중 협력', '국제 질서 변화에 유연 대응'],
				},
				{
					title: '한미 관계',
					detailList: ['기술 동맹·공급망 협력 강조', '국방·안보 협력 유지', '방위비 분담 현실화 검토'],
				},
				{
					title: '대중 관계',
					detailList: ['경제협력 유지·군사긴장 회피', '사드 문제 등 갈등 최소화 전략', '대중 무역·투자 균형 추구강조'],
				},
				{
					title: '대북 정책',
					detailList: ['남북 협력·평화체제 재추진', '개성공단 재개 조건부 추진', '군사 신뢰 회복·교류 확대'],
				},
				{
					title: '국방 전략',
					detailList: ['AI·드론 등 첨단무기 강화', '민간 국방장관 제도화', '국방 통제·투명성 강화'],
				},
				{
					title: '동맹·국제',
					detailList: ['미중 사이 균형외교 추진', '쿼드·IPEF 등 참여 유연 대응', '중견국 외교 위상 강화'],
				},
			],
		},
		'복지·사회': {
			keywordList: ['보편복지', '기초생활보장', '상병수당', '플랫폼노동권'],
			info: [
				{
					title: '복지 철학',
					detailList: ['보편·맞춤복지 조화 추구', '모두가 잘사는 나라 지향', '재정 여건 따라 유연 지원'],
				},
				{
					title: '청년 복지',
					detailList: ['청년 기본소득 유보', '중금리 금융 지원 확대', '공공일자리·주 4.5일제 검토'],
				},
				{
					title: '노인 복지',
					detailList: ['1인 고령가구 복지 확대', '상병수당 확대', '기초연금 강화·의료 접근성 향상'],
				},
				{
					title: '장애인 정책',
					detailList: ['탈시설→지역 돌봄 전환', '공공일자리 배정 확대', '장애인 이동·접근권 강화'],
				},
				{
					title: '출산·가족',
					detailList: ['육아휴직 확대', '공공보육 확충', '주거·돌봄·휴직 통합 지원'],
				},
				{
					title: '주거 복지',
					detailList: ['무주택 청년 지원 확대', '기본주택·공공임대 공급 확대', '주거비 절감형 구조 설계'],
				},
				{
					title: '의료 복지',
					detailList: ['상병수당 전국 확대', '필수·공공의료 강화', '의료접근권 보장 중심'],
				},
				{
					title: '노동·사회',
					detailList: ['포괄임금제 폐지', '노란봉투법 재추진', '플랫폼노동자 보호 강화'],
				},
				{
					title: '인권·젠더',
					detailList: ['성평등 정책 지속', '차별금지법 도입 검토', '1인가구·이주민 보호 강화'],
				},
			],
		},
	},
	김문수: {
		'정치·행정': {
			keywordList: ['특권타파', '공수처폐지', '보수복원', '사전투표폐지'],
			info: [
				{
					title: '정치 개혁',
					detailList: ['특권 철폐 정부 표방', '국회·정치권 기득권 해소', '보수원칙·정권 안정 유지'],
				},
				{
					title: '검찰·사법',
					detailList: ['공수처 폐지 추진', '간첩수사권 국정원 환원', '적국 개념 외국 전체로 확대'],
				},
				{
					title: '국회 개혁',
					detailList: ['불체포특권 폐지 1호 공약', '국회 간소화·책임 의정 강조'],
				},
				{
					title: '선거 제도',
					detailList: ['사전투표제 폐지 주장', '선관위 감사원 감사 추진', '선거 공정·투명성 강화 명분'],
				},
				{
					title: '개헌',
					detailList: ['대통령중심제 유지 원칙', '국정 일체성 전제 권한 조정'],
				},
				{
					title: '행정 분권',
					detailList: ['수도권·지방 균형 발전 계승', '수도 이전보다 체제 안정 강조', '행정구조 유지 선호'],
				},
				{
					title: '공직 사회',
					detailList: ['국정 철학·충성 강조 공직사회', '책임장관제보다 통일 지휘체계', '공무원 윤리 강화·기강 확립'],
				},
			],
		},
		경제: {
			keywordList: ['감세성장', '자유시장', '규제완화', '대기업투자유치'],
			info: [
				{
					title: '경제 기조',
					detailList: ['자유시장 중심 성장 노선', '규제 철폐·감세로 기업 활성화', '민간 투자 기반 성장 경제'],
				},
				{
					title: '성장 전략',
					detailList: ['삼성 반도체 유치 경험 강조', '대기업 유치 인센티브 확대', '신산업 규제프리존 지정'],
				},
				{
					title: '재정 방향',
					detailList: ['법인세 인하 추진', '상속세 폐지 또는 완화', '래퍼 곡선 기반 세수 증대'],
				},
				{
					title: '민생 경제',
					detailList: ['감세를 경제 활력 증대', '출산·양육 지원 경제 통합'],
				},
				{
					title: '부동산',
					detailList: ['종부세 개편, 양도세 중과 폐지', '재건축 초과이익 환수제 폐지', '부동산 규제 대폭 완화'],
				},
				{
					title: '노동 정책',
					detailList: ['공채 부활로 청년 고용 확대', '직무 기반 채용 중심 개편', '포괄임금제 유지·노동 유연성'],
				},
				{
					title: '산업 전략',
					detailList: ['원전 중심 에너지 확대', '제조업 첨단화 추진', '기술보호·인프라 투자 강화'],
				},
			],
		},
		교육: {
			keywordList: ['생애복지', '선별지원', '출산주택', '간병비건보적용'],
			info: [
				{
					title: '교육 철학',
					detailList: ['실용 교육 중심 강조', '보육·복지 연계 가족지원', '보수적 교육 질서 유지복'],
				},
				{
					title: '교육 복지',
					detailList: ['영유아 보육 강화', '국공립 어린이집 확충', '돌봄교실 확대 출산율 제고대응'],
				},
				{
					title: '대학 정책',
					detailList: ['이공계·AI 학과 확대', '연구자 대우 개선 추진', '기업수요 맞춤 인재 양성'],
				},
				{
					title: '초·중 교육',
					detailList: ['정서·인성교육 강조', '교과서 품질 개선', '교권 회복 중심 보수 교육 강화'],
				},
				{
					title: '교원 정책',
					detailList: ['교권확보 4법 지지', '학생 인권보다 교사 권한 강화', '학교 폭력·생활지도 권한 강화'],
				},
				{
					title: '직업·평생',
					detailList: ['고졸 취업 활성화', '공채 부활 유도', '기업 연계 실무 훈련 강화책'],
				},
				{
					title: '의대·전문',
					detailList: ['의대 정원 확대 재검토', '의료계 반발 의식 소극적'],
				},
			],
		},
		'외교·안보': {
			keywordList: ['핵억제', '한미일동맹', '반북노선', '보수안보주의'],
			info: [
				{
					title: '외교 기조',
					detailList: ['자유민주 진영 중심 외교', '반공·반중 강경외교 노선', '보수적 안보연합 중시'],
				},
				{
					title: '한미 관계',
					detailList: ['핵공유 동맹 격상 제안', '전술핵 재배치 협의 추진', '확장억제 강화강조'],
				},
				{
					title: '대중 관계',
					detailList: ['사드 추가배치 검토', '안보 중심 대중 견제', '안보 우선 경제협력 후순위'],
				},
				{
					title: '대북 정책',
					detailList: ['선제적 핵억제력 확보', '북한과 비타협 원칙', '핵무기 설계·연료 기술 확보'],
				},
				{
					title: '국방 전략',
					detailList: ['병력·예산 확충', '군 인센티브 강화', '간첩수사권 국정원 환원'],
				},
				{
					title: '동맹·국제',
					detailList: ['한미일 자유민주 3각 동맹 강화', '유엔·국제기구 대북 규탄 확대', '좌파 정부 외교 노선 전면 전환'],
				},
			],
		},
		'복지·사회': {
			keywordList: ['생애복지', '선별지원', '출산주택', '간병비건보적용'],
			info: [
				{
					title: '복지 철학',
					detailList: ['선별복지 강화', '생애주기 맞춤 실용복지', '감세 기반 성장·복지 병행조'],
				},
				{
					title: '청년 복지',
					detailList: ['3자녀 출산 9년 주거비 지원', '청년주거·출산 인센티브 확대'],
				},
				{
					title: '노인 복지',
					detailList: ['요양병원 간병비 건보 적용', '치매 국가책임제 강화', '고령자 생활밀착 의료복지 강화'],
				},
				{
					title: '장애인 정책',
					detailList: ['장애인 가족지원센터 설치', '이동권 보장 확대', '장애인 일상생활 보조 인프라 확대'],
				},
				{
					title: '출산·가족',
					detailList: ['출산비 국가부담제 도입', '난임 치료 지원 확대', '영유아 보육 강화·가족 회복'],
				},
				{
					title: '주거 복지',
					detailList: ['민간 공급 확대 중심', '청년·다자녀 가구 보조금 지원', '규제 완화형 시장 연동 설계'],
				},
				{
					title: '의료 복지',
					detailList: ['필수 예방접종 국가지원 확대', '미래의료위원회 신설', '의료인력 수급 원점 재검토'],
				},
				{
					title: '노동·사회',
					detailList: ['공채 부활 통한 일자리 창출', '고졸 취업 활성화', '직무 기반 채용 문화 정착'],
				},
				{
					title: '인권·젠더',
					detailList: ['여가부 폐지 공약 유지', '인구·가족 기능 복지부 이관', '국가보안법 등 사회기강 회복'],
				},
			],
		},
	},
	이준석: {
		'정치·행정': {
			keywordList: ['정치교체', '정당해체', '이원집정부제', '중대선거구'],
			info: [
				{
					title: '정치 개혁',
					detailList: ['정치 시스템 전면 교체 지향', '지역주의 타파·양당 해체', '젊은 정치인 중심 혁신 강조'],
				},
				{
					title: '검찰·사법',
					detailList: ['공수처 폐지 주장', '수사·기소 분리 실효성 문제', '판사·검사 평가제 일부 검토'],
				},
				{
					title: '국회 개혁',
					detailList: ['국회의원 정수 감축 제안', '국회 운영 효율화·상임위 조정', '회의 투명성 위해 회의록 공개'],
				},
				{
					title: '선거 제도',
					detailList: ['중대선거구제 도입 제안', '전자투표 시스템 확대 추진', '청년·신인 정치인 가산점 완화'],
				},
				{
					title: '개헌',
					detailList: ['이원집정부제 도입 제안', '집행·통치권 분리 책임정치', '당·정 분리 원칙 강조'],
				},
				{
					title: '행정 분권',
					detailList: ['지방행정 효율화 추진', '시·군·구 권한 개편', '지역주도 혁신 생태계 조성'],
				},
				{
					title: '공직 사회',
					detailList: ['실적 기반 평가 시스템 도입', '관료 정치화 방지', '디지털 성과 측정·부처 조정'],
				},
			],
		},
		경제: {
			keywordList: ['기술창업', '시장실용주의', '지출효율화', '생산성개혁'],
			info: [
				{
					title: '경제 기조',
					detailList: ['시장 기반 실용 경제', '민간 중심 생산성 향상', '복지보다 기회 제공 강조'],
				},
				{
					title: '성장 전략',
					detailList: ['스타트업 생태계 조성', '청년 창업·코딩 교육 확대', '지역 중심 기술산업 육성'],
				},
				{
					title: '재정 방향',
					detailList: ['현금성 복지 축소', '구조조정·지출 효율화', '세수 구조 합리화 제안'],
				},
				{
					title: '민생 경제',
					detailList: ['자산형성 교육 중점', '청년 부채 금융 교육 강조', '자립 기반 정책 추진'],
				},
				{
					title: '부동산',
					detailList: ['시장 중심 공급 전환 제안', '임대차 계약 투명성 제고', '세입자 보호 장치 강화 검토'],
				},
				{
					title: '노동 정책',
					detailList: ['유연근로제 도입 지지', '청년 중심 직무형 일자리 확대', '고용보험 확대·사각지대 해소'],
				},
				{
					title: '산업 전략',
					detailList: ['AI·모빌리티·에너지 스타트업 육성', '빅데이터 기반 산업 규제 완화', '민간투자 기반 디지털 인프라 확충'],
				},
			],
		},
		교육: {
			keywordList: ['능력중심', '코딩교육', 'AI교육', '직업연계'],
			info: [
				{
					title: '교육 철학',
					detailList: ['능력 중심 교육 지향', '창의력·기술 기반 학습 강화', '입시보다 미래 역량 강조'],
				},
				{
					title: '교육 복지',
					detailList: ['무상교육 직접 강조 적음', '교육 질 향상 우선', '현금성 교육복지 구조 혁신 집중'],
				},
				{
					title: '대학 정책',
					detailList: ['입시 없는 고등교육 실험 제안', '직업·창업 중심 대안대학 제시', '디지털 전문학과 지원'],
				},
				{
					title: '초·중 교육',
					detailList: ['공교육 AI·코딩 커리큘럼 확대', '온라인 수업 기반 강화', '이공계 진로 조기 설계 제안'],
				},
				{
					title: '교원 정책',
					detailList: ['교사 평가제 도입 제안', '디지털 역량 인증제 검토', '실적 기반 교사 리더십 제시'],
				},
				{
					title: '직업·평생',
					detailList: ['스타트업·창업 실무교육', '현장 적응형 청년 직무교육', '교육과 고용 연계 강조'],
				},
				{
					title: '의대·전문',
					detailList: ['의대 정원 확대 기본 찬성', '지역 불균형 해소 공공의료 인재 배치'],
				},
			],
		},
		'외교·안보': {
			keywordList: ['자율동맹', '기술안보', '사이버방위', '인권외교'],
			info: [
				{
					title: '외교 기조',
					detailList: ['기술동맹 중심 실용외교', '외교 자율성·원칙 중시', '청년 시각 반영 전략 외교'],
				},
				{
					title: '한미 관계',
					detailList: ['한미 전략동맹 재정비', '공급망·방산 협력 강화', '미국 의회·청년 교류 확대'],
				},
				{
					title: '대중 관계',
					detailList: ['기술·시장 분리 전략(리밸런싱)', '대중 경제 의존 완화', '기술 자립 강조'],
				},
				{
					title: '대북 정책',
					detailList: ['비핵화 원칙 대북정책', '북한 인권 중심 다자외교', '조건부 인도적 지원 검토'],
				},
				{
					title: '국방 전략',
					detailList: ['사이버안보 강화', 'AI 기반 전략군 전환', '국방혁신 4.0 디지털 방위 추진'],
				},
				{
					title: '동맹·국제',
					detailList: ['쿼드·IPEF 유연 참여', '중견국 외교역량 강화', '국익 우선 중립 외교 노선'],
				},
			],
		},
		'복지·사회': {
			keywordList: ['복지보다기회', '디지털접근성', '자산형성', '청년자립'],
			info: [
				{
					title: '복지 철학',
					detailList: ['복지보다 기회 강조', '자립 지원 중심', '지속 가능 복지 전환 제안'],
				},
				{
					title: '청년 복지',
					detailList: ['금융·자산 교육 강화', '창업·스타트업 교육 지원', '현금성 지원 축소·교육 연계'],
				},
				{
					title: '노인 복지',
					detailList: ['고령층 디지털 교육·재취업 지원', '세대 간 이동성 회복 전략 강조'],
				},
				{
					title: '장애인 정책',
					detailList: ['디지털 접근성 보장', '맞춤형 직업훈련 강화', '정책 수혜 자동화 검토'],
				},
				{
					title: '출산·가족',
					detailList: ['일·가정 양립 유연근무 확대', '현금성 대신 시스템 설계 집중'],
				},
				{
					title: '주거 복지',
					detailList: ['청년 주거 안정·자산 형성', '시장 중심 공급 구조 제시', '세입자 권리 제도화'],
				},
				{
					title: '의료 복지',
					detailList: ['공공의료 디지털화 강화', '데이터 기반 수급 조절', '필수 의료 접근 기술 활용'],
				},
				{
					title: '노동·사회',
					detailList: ['유연근로제·근로시간 자율성 강화', '청년 중심 직무 기반 일자리 확대', '고용보험 커버리지 확장'],
				},
				{
					title: '인권·젠더',
					detailList: ['개인 기반 복지 접근성 개선', '젠더 갈등 해소 중립 법안 설계', '청년·다문화 포용 사회제도 제안'],
				},
			],
		},
	},
};
