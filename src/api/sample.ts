import {getProductIdSortIndex} from "util/manageRecentProduct";

export enum SortType {
  RECENT = "recnet",
  PRICE = "price",
}

export interface IProductData {
  title: string;
  brand: string;
  price: number;
  id?: number;
}

const responseData = [
  {title: "중고 나이키 테아 흰검 245 30000원", brand: "나이키", price: 30000},
  {title: "거의새것 정품 구찌 보스턴백 토트백", brand: "구찌", price: 380000},
  {
    title: "중고 스톤아일랜드 쉐도우와팬 봄니트 95",
    brand: "스톤아일랜드",
    price: 350000,
  },
  {
    title: "중고 루이비통 장지갑 백화점 풀구성",
    brand: "루이비통",
    price: 400000,
  },
  {title: "나이키 윈드러너 블랙 L", brand: "나이키", price: 60000},
  {title: "나이키바람막이", brand: "나이키", price: 68000},
  {title: "구찌 정품 카드지갑 (급처)", brand: "구찌", price: 100000},
  {title: "나이키 트레이닝 바람막이", brand: "나이키", price: 75000},
  {title: "구찌 정품 스니커즈 운동화", brand: "구찌", price: 120000},
  {
    title: "나이키 올드스쿨 빅로고 카키 바람막이 자켓 바막 웜업 아노락 블루종",
    brand: "나이키",
    price: 35000,
  },
  {title: "구찌 스트랩 클러치 판매합니다.", brand: "구찌", price: 30000},
  {title: "나이키 테크 후드 집업", brand: "나이키", price: 40000},
  {title: "스톤아일랜드 다크그레이 니트", brand: "스톤아일랜드", price: 250000},
  {title: "구찌 클러치", brand: "구찌", price: 500000},
  {title: "스톤아일랜드 니트 스웨터", brand: "스톤아일랜드", price: 360000},
  {
    title: "나이키 아디다스 반팔티 2xl 3xl 새상품",
    brand: "나이키",
    price: 45000,
  },
  {
    title: "[xl] 나이키 nba 파이널 레이커스 챔피언쉽 티셔츠",
    brand: "나이키",
    price: 60000,
  },
  {title: "구찌 GG마몽 가죽 카드 지갑", brand: "구찌", price: 330000},
  {title: "구찌카드지갑", brand: "구찌", price: 270000},
  {title: "스톤아일랜드", brand: "스톤아일랜드", price: 550000},
  {title: "나이키 nrg 스우시 팬츠", brand: "나이키", price: 299000},
  {
    title: "스톤아일랜드 반집업 브라운 S사이즈",
    brand: "스톤아일랜드",
    price: 120000,
  },
  {title: "정품 스톤아일랜드 니트", brand: "스톤아일랜드", price: 250000},
  {
    title: "20FW 스톤아일랜드 와펜 울 니트 네이비 L사이즈 새상품",
    brand: "스톤아일랜드",
    price: 400000,
  },
  {title: "구찌 장지갑이용 ~~~^^", brand: "구찌", price: 280000},
  {
    title: "[M] 나이키 acg 자수로고 반팔 하바네로 레드",
    brand: "나이키",
    price: 40000,
  },
  {
    title: "[L]스톤아일랜드 맨투맨 20ss 판매합니다",
    brand: "스톤아일랜드",
    price: 229000,
  },
  {title: "거의새것 구찌 반지갑", brand: "구찌", price: 360000},
  {title: "구찌 여성 지갑", brand: "구찌", price: 180000},
  {
    title: "정품 나이키 사이드 스우시 우븐 팬츠 블랙 XL",
    brand: "나이키",
    price: 186000,
  },
  {
    title: "정품 나이키 박스로고 낫어샘플 후드 그레이 L 사이즈",
    brand: "나이키",
    price: 72000,
  },
  {
    title: "정품 나이키 ACG 고어텍스 자켓 레드 검빨 빨검 S",
    brand: "나이키",
    price: 328000,
  },
  {
    title: "정품 루이비통 한정판 반팔티 새상품 판매 (마지막 가격내림)",
    brand: "루이비통",
    price: 1980000,
  },
  {title: "14k gucci 목걸이 + 팔찌", brand: "구찌", price: 1680000},
  {
    title: "[s] 나이키 스투시 인슐레이티드 팬츠 패딩 블랙",
    brand: "나이키",
    price: 279000,
  },
  {title: "나이키 nrg트랙자켓 S", brand: "나이키", price: 180000},
  {
    title: "스톤아일랜드 밀리터리 카모 조거팬츠",
    brand: "스톤아일랜드",
    price: 80000,
  },
  {title: "중고 구찌 킹스네이크 메탈 시계줄", brand: "구찌", price: 50000},
  {
    title: "루이비통 모노그램 코알라 지갑(정품)",
    brand: "루이비통",
    price: 550000,
  },
  {title: "나이키 스포츠 브라", brand: "나이키", price: 30000},
  {
    title: "피스워커 Stone worker DS Greyish 31",
    brand: "스톤아일랜드",
    price: 35000,
  },
  {title: "스톤아일랜드 맨투맨 백화점판", brand: "스톤아일랜드", price: 170000},
  {title: "루이비통 멀티벨트", brand: "루이비통", price: 220000},
  {
    title:
      "나이키 오버핏 올드스쿨 빅로고 배색 바람막이 XL 바막 웜업 아노락 자켓",
    brand: "나이키",
    price: 35000,
  },
  {title: "나이키 스투시 아노락 라임 L", brand: "나이키", price: 180000},
  {
    title: "20ss 스톤아일랜드 카고팬츠 와펜 블랙 33 7215318wa",
    brand: "스톤아일랜드",
    price: 470000,
  },
  {title: "나이키 정품 우븐플로우 쇼츠 M사이즈", brand: "나이키", price: 40000},
  {title: "나이키 트랙자켓 (s)", brand: "나이키", price: 175000},
  {title: "(풀구성, 정품M)구찌 로고 후드티", brand: "구찌", price: 123456},
  {title: "정품)구찌 꿀벌 지퍼장지갑", brand: "구찌", price: 480000},
  {
    title: "$압도적$나이키 빅스우시 메쉬 포인트 5부셋트",
    brand: "나이키",
    price: 89000,
  },
  {
    title: "(한정판) 나이키 빅스우시 아노락 우븐 세트",
    brand: "나이키",
    price: 550000,
  },
  {
    title: "새상품 나이키 아트모스 270싸이즈 맥스 나코탭새상품팝니다.",
    brand: "나이키",
    price: 160000,
  },
  {title: "나이키 맨투맨", brand: "나이키", price: 30000},
  {title: "스톤아일랜드 맨투맨", brand: "스톤아일랜드", price: 160000},
  {title: "구찌 스네이크 반지갑 팔아요.", brand: "구찌", price: 160000},
  {title: "나이키 에어조던1 다크모카", brand: "나이키", price: 490000},
  {
    title: "[3종] 나이키X사카이 반집업 아노락 바람막이",
    brand: "나이키",
    price: 45000,
  },
  {title: "나이키X사카이 반집업 아노락 (3색깔)", brand: "나이키", price: 45000},
  {title: "<3종> 나이키 사카이 반집업 아노락!", brand: "나이키", price: 45000},
  {title: "정품)구찌 자수 청바지 블랙 진", brand: "구찌", price: 440000},
  {title: "구찌벨트~(남녀 공용)", brand: "구찌", price: 250000},
  {title: "나이키 윈드러너", brand: "나이키", price: 30000},
  {
    title: "스톤아일랜드 맨투맨 (가격내림)",
    brand: "스톤아일랜드",
    price: 199000,
  },
  {
    title: "정품 스톤아일랜드 프린팅 로고 블랙 브이넥 반팔티 L XL",
    brand: "스톤아일랜드",
    price: 70000,
  },
  {title: "클럽모나코 트위드 스커트", brand: "나이키", price: 35000},
  {
    title:
      "스톤아일랜드 맨투맨/아미맨투맨/메종키츠네/톰브라운/구찌/cp컴퍼니/스투시",
    brand: "스톤아일랜드",
    price: 280000,
  },
  {title: "스톤아일랜드메탈오버셔츠롱", brand: "스톤아일랜드", price: 690000},
  {title: "나이키 테크 플리스 조거 팬츠", brand: "나이키", price: 80000},
  {
    title: "정품 스톤아일랜드 PK 폴로 카라넥 연민트 반집업 반팔티 L M",
    brand: "스톤아일랜드",
    price: 70000,
  },
  {
    title: "정품 스톤아일랜드 와펜 블루 네이비 카라넥 PK반팔티 슬림 105 110",
    brand: "스톤아일랜드",
    price: 60000,
  },
  {
    title: "구찌 Rhyton라이톤 글리터 레더 스니커즈 (여성용)",
    brand: "구찌",
    price: 500000,
  },
  {title: "스톤아일랜드 반집업 맨투맨", brand: "스톤아일랜드", price: 160000},
  {
    title: "(새상품)나이키 윈드러너 후디재킷 바람막이 s",
    brand: "나이키",
    price: 98000,
  },
  {
    title: "(개인)[정품] 스톤아일랜드 올드이펙트 오버셔츠 판매",
    brand: "스톤아일랜드",
    price: 450000,
  },
  {
    title: "(개인)[정품] 스톤아일랜드 더스트 컬러 코튼 후드 판매",
    brand: "스톤아일랜드",
    price: 340000,
  },
  {
    title:
      "(개인)[정품] 스톤아일랜드 쉐도우프로젝트 스트라이프 나일론 메탈 자켓 판매",
    brand: "스톤아일랜드",
    price: 550000,
  },
  {title: "나이키 후드티", brand: "나이키", price: 35000},
  {title: "나이키 줌X인빈서블 런 280사이즈", brand: "나이키", price: 135000},
  {title: "까멜리아 샤넬 슬리퍼(36.5)", brand: "샤넬", price: 350000},
  {
    title: "정품 루이비통 베티놀즈 호리즌탈 빈티지 숄더백 쇼퍼백",
    brand: "루이비통",
    price: 420000,
  },
  {title: "루이비통 페이보릿 다미에 pm", brand: "루이비통", price: 780000},
  {
    title: "나이키 x 스투시 빅로고 커스텀 스우시 에센셜 후디 후드티 올드스쿨",
    brand: "나이키",
    price: 45000,
  },
  {
    title: "스톤아일랜드 와펜패치 라미플록포켓 맨투맨 블랙!",
    brand: "스톤아일랜드",
    price: 310000,
  },
  {title: "나이키 바람막이", brand: "나이키", price: 81000},
  {
    title: "나이키 대한민국 농구 국가대표팀 숏슬리브 반팔 티셔츠 드라이핏",
    brand: "나이키",
    price: 50000,
  },
  {
    title: "나이키 드라이핏 라운드넥 긴팔 티셔츠 러닝 런닝 헬스 운동",
    brand: "나이키",
    price: 45000,
  },
  {
    title: "나이키 드라이핏 기능성 반집업 롱슬리브 긴팔티셔츠 러닝 운동 헬스",
    brand: "나이키",
    price: 55000,
  },
  {
    title: "스톤아일랜드 패딩조끼(상태 최상)네이비",
    brand: "스톤아일랜드",
    price: 400000,
  },
  {title: "(정품) 구찌 마몬트 카드지갑", brand: "구찌", price: 270000},
  {title: "루이비통 반바지 판매합니다", brand: "루이비통", price: 700000},
  {title: "나이키 카브엠트 자켓", brand: "나이키", price: 80000},
  {
    title: "스톤 아일랜드 테크웨어 조끼960E1 BIG LOOM CAMO-TC",
    brand: "스톤아일랜드",
    price: 380000,
  },
  {
    title: "스톤아일랜드 19fw 와펜맨투맨 블랙 L",
    brand: "스톤아일랜드",
    price: 230000,
  },
  {
    title: "스톤아일랜드 18fw 나일론메탈 오버셔츠 블랙 M",
    brand: "스톤아일랜드",
    price: 600000,
  },
  {title: "구찌 홀스빗 로퍼 (정품)", brand: "구찌", price: 120000},
  {title: "나이키더블스우시조거팬츠s", brand: "나이키", price: 100000},
  {
    title: "스톤아일랜드 18fw 나일론메탈맨투맨 블랙 M",
    brand: "스톤아일랜드",
    price: 430000,
  },
  {title: "나이키(정품) 맨투맨 XL", brand: "나이키", price: 50000},
  {
    title: "스톤아일랜드 나일론메탈 셔츠 18ss 정품m사이즈",
    brand: "스톤아일랜드",
    price: 390000,
  },
];

export const getProducts = async (): Promise<IProductData[]> => {
  return responseData.map((data, idx) => ({...data, id: idx}));
};

export const getProductDetail = async (idx: number): Promise<IProductData> => {
  return responseData[idx];
};

export const getBrandLists = async (): Promise<string[]> => {
  const brands = responseData.map((data) => {
    return data.brand;
  });
  const brandList: string[] = [];
  const brandSet = new Set(brands);
  brandSet.forEach((brandName) => {
    brandList.push(brandName);
  });
  return brandList;
};

export const getBrandFilterdProducts = async (
  brandNames: string[],
  sortType: SortType,
): Promise<IProductData[]> => {
  const brandNameMap: Record<string, boolean> = {};
  brandNames.forEach((brandName) => {
    brandNameMap[brandName] = true;
  });
  const products = await getProducts();
  const sortIndex = getProductIdSortIndex();

  const filteredProducts = products
    .filter((product) => {
      console.log(product.brand, brandNameMap[product.brand]);
      return brandNameMap[product.brand];
    })
    .sort((a, b) => {
      if (sortType === SortType.RECENT) {
        // RECENT
        return sortIndex[`${a.id}`] - sortIndex[`${b.id}`];
      }
      if (sortType === SortType.PRICE) {
        // PRICE
        return a.price - b.price;
      }
      return 0;
    });
  return filteredProducts;
};
