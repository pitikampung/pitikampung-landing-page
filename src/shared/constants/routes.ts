export const homeRoute = "/";

export const aboutUsRoute = "/about-us";

const article = "/article";
export const articleRoute = {
  index: article,
  detail: (seoKey: string) => `${article}/${seoKey}`,
};

export const contactUsRoute = "/contact-us";

const product = "/product";
export const productRoute = {
  index: product,
  detail: (seoKey: string) => `${product}/${seoKey}`,
};

const helpCenter = "/help-center";
export const helpCenterRoute = {
  index: helpCenter,
  detail: (seoKey: string) => `${helpCenter}/${seoKey}`,
};
