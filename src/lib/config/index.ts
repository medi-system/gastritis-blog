import type { Link } from "../types";

export const SITE = {
  title: "위염 환자를 위한 음식 가이드",
  description: "위염 환자가 알아야 할 음식별 위장 자극도와 소화 영향 정보",
  author: "MediInfo",
  url: "https://gastritis.mediinfo.blog",
  locale: "ko-KR",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 10,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/",
    text: "홈",
  },
  {
    href: "/about",
    text: "소개",
  },
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "소개",
  },
];

export const SOCIAL_LINKS: Link[] = [];