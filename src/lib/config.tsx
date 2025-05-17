import { FirstBentoAnimation } from "@/components/first-bento-animation";
import { FourthBentoAnimation } from "@/components/fourth-bento-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Xtend",
  description: "Xtend Agency",
  cta: "Get Started",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "AI Calendar",
    "Smart Scheduling",
    "Productivity",
    "Time Management",
  ],
  links: {
    email: "support@calai.app",
    twitter: "https://twitter.com/calaiapp",
    discord: "https://discord.gg/calaiapp",
    github: "https://github.com/calaiapp",
    instagram: "https://instagram.com/calaiapp",
  },
  nav: {
    links: [
      { id: 1, name: "Home", href: "#hero" },
      { id: 2, name: "How it Works", href: "#bento" },
      { id: 3, name: "Features", href: "#features" },
      { id: 4, name: "Testimonials", href: "#testimonials" },
    ],
  },
  hero: {
    badgeIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-white fill-[#364153]"
      >
        <path d="M7.62758 1.09876C7.74088 1.03404 7.8691 1 7.99958 1C8.13006 1 8.25828 1.03404 8.37158 1.09876L13.6216 4.09876C13.7363 4.16438 13.8316 4.25915 13.8979 4.37347C13.9642 4.48779 13.9992 4.6176 13.9992 4.74976C13.9992 4.88191 13.9642 5.01172 13.8979 5.12604C13.8316 5.24036 13.7363 5.33513 13.6216 5.40076L8.37158 8.40076C8.25828 8.46548 8.13006 8.49952 7.99958 8.49952C7.8691 8.49952 7.74088 8.46548 7.62758 8.40076L2.37758 5.40076C2.26287 5.33513 2.16753 5.24036 2.10123 5.12604C2.03492 5.01172 2 4.88191 2 4.74976C2 4.6176 2.03492 4.48779 2.10123 4.37347C2.16753 4.25915 2.26287 4.16438 2.37758 4.09876L7.62758 1.09876Z" />
        <path d="M2.56958 7.23928L2.37758 7.34928C2.26287 7.41491 2.16753 7.50968 2.10123 7.624C2.03492 7.73831 2 7.86813 2 8.00028C2 8.13244 2.03492 8.26225 2.10123 8.37657C2.16753 8.49089 2.26287 8.58566 2.37758 8.65128L7.62758 11.6513C7.74088 11.716 7.8691 11.75 7.99958 11.75C8.13006 11.75 8.25828 11.716 8.37158 11.6513L13.6216 8.65128C13.7365 8.58573 13.8321 8.49093 13.8986 8.3765C13.965 8.26208 14 8.13211 14 7.99978C14 7.86745 13.965 7.73748 13.8986 7.62306C13.8321 7.50864 13.7365 7.41384 13.6216 7.34828L13.4296 7.23828L9.11558 9.70328C8.77568 9.89744 8.39102 9.99956 7.99958 9.99956C7.60814 9.99956 7.22347 9.89744 6.88358 9.70328L2.56958 7.23928Z" />
        <path d="M2.37845 10.5993L2.57045 10.4893L6.88445 12.9533C7.22435 13.1474 7.60901 13.2496 8.00045 13.2496C8.39189 13.2496 8.77656 13.1474 9.11645 12.9533L13.4305 10.4883L13.6225 10.5983C13.7374 10.6638 13.833 10.7586 13.8994 10.8731C13.9659 10.9875 14.0009 11.1175 14.0009 11.2498C14.0009 11.3821 13.9659 11.5121 13.8994 11.6265C13.833 11.7409 13.7374 11.8357 13.6225 11.9013L8.37245 14.9013C8.25915 14.966 8.13093 15 8.00045 15C7.86997 15 7.74175 14.966 7.62845 14.9013L2.37845 11.9013C2.2635 11.8357 2.16795 11.7409 2.10148 11.6265C2.03501 11.5121 2 11.3821 2 11.2498C2 11.1175 2.03501 10.9875 2.10148 10.8731C2.16795 10.7586 2.2635 10.6638 2.37845 10.5983V10.5993Z" />
      </svg>
    ),
    badge: "Let's Skyrocket your Business!",
    title: "Design that resonates with your audience.",
    description:
      "Try an award-winning full-service web growth agency, specializing in strategy, design and development, content marketing and more, to find and engage customers and drive revenue across all your channels.",
    cta: {
      primary: {
        text: "Book a call",
        href: "http://wa.me/16827104736",
      },
      secondary: {
        text: "Portfolio",
        href: "https://www.behance.net/xtend-agency",
      },
    },
  },
  companyShowcase: {
    companyLogos: [
      {
        id: 1,
        name: "Company 1",
        logo: "/images/logos/empire.svg",
        width: 839,
        height: 292,
      },
      {
        id: 2,
        name: "Company 2",
        logo: "/images/logos/lvls.avif",
        width: 839,
        height: 292,
      },
      {
        id: 3,
        name: "Company 3",
        logo: "/images/logos/hera.webp",
        width: 839,
        height: 292,
      },
      {
        id: 4,
        name: "Company 4",
        logo: "/images/logos/top1.webp",
        width: 839,
        height: 292,
      },
      {
        id: 5,
        name: "Company 5",
        logo: "/images/logos/monevis.webp",
        width: 839,
        height: 292,
      },
      {
        id: 6,
        name: "Company 6",
        logo: "/images/logos/fusion.png",
        width: 839,
        height: 292,
      },
      {
        id: 7,
        name: "Company 7",
        logo: "/images/logos/tradealgo.png",
        width: 839,
        height: 292,
      },
      {
        id: 8,
        name: "Company 8",
        logo: "/images/logos/hunters.svg",
        width: 839,
        height: 292,
      },
    ],
  },
  featureSection: {
    title: "Who is this for?",
    description:
      "Xtend is tailor-made for those who want to take their Business presence to the next level! We're here to help :",
    items: [
      {
        id: 1,
        title: "Early Startups",
        content:
          "Have a product but no brand or a landing page? We'll work our butts off to bring your vision to life and make a splash in the startup world.",
        image: "/images/early.webp",
      },
      {
        id: 2,
        title: "Online Creators",
        content:
          "Need a little design touch-up to transform your online presence? I got you covered with designs that reflect your unique style.",
        image: "/images/online.webp",
      },
      {
        id: 3,
        title: "Finance/FinTech",
        content:
          "Bring your trust to the next level with our professional, trustworthy and spicy brand and online presence development.",
        image: "/images/finance.webp",
      },
      {
        id: 4,
        title: "Web3 Projects",
        content:
          "Take your project to the moon by boosting your online presence and brand with us, leaving your competitors in the dust!",
        image: "/images/web3.webp",
      },
    ],
  },
  bentoSection: {
    title: "Strategically crafted designs that narrate your unique brand",
    description:
      "Let our designs weave the magic of storytelling, bringing your brand to life in vibrant colors and captivating visuals. From pixel to perfection.",
    items: [
      {
        id: 1,
        content: <FirstBentoAnimation />,
        title: "Real-time Collaboration",
        description:
          "Keep your projects moving with clear communication and seamless teamwork. We work closely with you at every step—from design drafts to final launches—ensuring everyone stays aligned and nothing slips through the cracks.",
      },
      {
        id: 2,
        content: <SecondBentoAnimation />,
        title: "Seamless Integrations",
        description:
          "We bring together your favorite platforms, tools, and systems to create smooth, efficient workflows. Whether it's a new website, a marketing funnel, or a rebrand, everything connects effortlessly.",
      },
      {
        id: 3,
        content: (
          <ThirdBentoAnimation
            data={[20, 30, 25, 45, 40, 55, 75]}
            toolTipValues={[
              1234, 1678, 2101, 2534, 2967, 3400, 3833, 4266, 4700, 5133,
            ]}
          />
        ),
        title: "Instant Insight Reporting",
        description:
          "Track performance with clarity. From website traffic to campaign metrics, we provide clean, easy-to-understand reporting so you always know what’s working—and where to grow ne",
      },
      {
        id: 4,
        content: <FourthBentoAnimation once={false} />,
        title: "From Idea to Launch",
        description:
          "Whether it's a website, brand refresh, or marketing campaign, we manage every phase from concept to completion—with clarity, speed, and care.",
      },
    ],
  },
  benefits: [
    {
      id: 1,
      text: "Save hours each week with AI-optimized scheduling.",
      image: "/Device-6.png",
    },
    {
      id: 2,
      text: "Reduce scheduling conflicts and double-bookings.",
      image: "/Device-7.png",
    },
    {
      id: 3,
      text: "Improve work-life balance with smart time allocation.",
      image: "/Device-8.png",
    },
    {
      id: 4,
      text: "Increase productivity with AI-driven time management insights.",
      image: "/Device-1.png",
    },
  ],
  growthSection: {
    title: "Crafted for Confident Growth",
    description:
      "We build secure, scalable digital solutions that grow with you. From robust websites to data-safe marketing systems, every touchpoint is designed to protect what matters while driving results.",
    items: [
      {
        id: 1,
        content: (
          <div
            className="relative flex size-full items-center justify-center overflow-hidden transition-all duration-300 hover:[mask-image:none] hover:[webkit-mask-image:none]"
            style={{
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              maskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          >
            <div className="absolute top-[55%] md:top-[58%] left-[55%] md:left-[57%] -translate-x-1/2 -translate-y-1/2  size-full z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="227"
                height="244"
                viewBox="0 0 227 244"
                fill="none"
                className="size-[90%] md:size-[85%] object-contain fill-background"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M104.06 3.61671C106.656 1.28763 110.017 0 113.5 0C116.983 0 120.344 1.28763 122.94 3.61671C148.459 26.5711 180.325 41.2118 214.322 45.6008C217.66 46.0312 220.736 47.6398 222.999 50.1383C225.262 52.6369 226.563 55.862 226.67 59.2357C227.947 96.7468 218.612 133.854 199.744 166.267C180.877 198.68 153.248 225.074 120.052 242.398C118.028 243.454 115.779 244.003 113.498 244C111.216 243.997 108.969 243.441 106.948 242.379C73.7524 225.055 46.1231 198.661 27.2556 166.248C8.38807 133.835 -0.947042 96.7279 0.329744 59.2168C0.441295 55.8464 1.74484 52.6258 4.00715 50.1311C6.26946 47.6365 9.34293 46.0306 12.6777 45.6008C46.6725 41.2171 78.5389 26.5832 104.06 3.63565V3.61671Z"
                />
              </svg>
            </div>
            <div className="absolute top-[58%] md:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2  size-full z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="245"
                height="282"
                viewBox="0 0 245 282"
                className="size-full object-contain fill-accent"
              >
                <g filter="url(#filter0_dddd_2_33)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M113.664 7.33065C116.025 5.21236 119.082 4.04126 122.25 4.04126C125.418 4.04126 128.475 5.21236 130.836 7.33065C154.045 28.2076 183.028 41.5233 213.948 45.5151C216.984 45.9065 219.781 47.3695 221.839 49.6419C223.897 51.9144 225.081 54.8476 225.178 57.916C226.339 92.0322 217.849 125.781 200.689 155.261C183.529 184.74 158.4 208.746 128.209 224.501C126.368 225.462 124.323 225.962 122.248 225.959C120.173 225.956 118.13 225.45 116.291 224.484C86.0997 208.728 60.971 184.723 43.811 155.244C26.6511 125.764 18.1608 92.015 19.322 57.8988C19.4235 54.8334 20.6091 51.9043 22.6666 49.6354C24.7242 47.3665 27.5195 45.906 30.5524 45.5151C61.4706 41.5281 90.4531 28.2186 113.664 7.34787V7.33065Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dddd_2_33"
                    x="0.217041"
                    y="0.0412598"
                    width="244.066"
                    height="292.917"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="12" />
                    <feGaussianBlur stdDeviation="6" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_2_33"
                      result="effect2_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="27" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_dropShadow_2_33"
                      result="effect3_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="48" />
                    <feGaussianBlur stdDeviation="9.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_dropShadow_2_33"
                      result="effect4_dropShadow_2_33"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect4_dropShadow_2_33"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="80"
                viewBox="0 0 81 80"
                className="fill-background"
              >
                <g filter="url(#filter0_iiii_2_34)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5 36V28C20.5 22.6957 22.6071 17.6086 26.3579 13.8579C30.1086 10.1071 35.1957 8 40.5 8C45.8043 8 50.8914 10.1071 54.6421 13.8579C58.3929 17.6086 60.5 22.6957 60.5 28V36C62.6217 36 64.6566 36.8429 66.1569 38.3431C67.6571 39.8434 68.5 41.8783 68.5 44V64C68.5 66.1217 67.6571 68.1566 66.1569 69.6569C64.6566 71.1571 62.6217 72 60.5 72H20.5C18.3783 72 16.3434 71.1571 14.8431 69.6569C13.3429 68.1566 12.5 66.1217 12.5 64V44C12.5 41.8783 13.3429 39.8434 14.8431 38.3431C16.3434 36.8429 18.3783 36 20.5 36ZM52.5 28V36H28.5V28C28.5 24.8174 29.7643 21.7652 32.0147 19.5147C34.2652 17.2643 37.3174 16 40.5 16C43.6826 16 46.7348 17.2643 48.9853 19.5147C51.2357 21.7652 52.5 24.8174 52.5 28Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_iiii_2_34"
                    x="12.5"
                    y="8"
                    width="56"
                    height="70"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_innerShadow_2_34"
                      result="effect2_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_innerShadow_2_34"
                      result="effect3_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_innerShadow_2_34"
                      result="effect4_innerShadow_2_34"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="size-full"
            >
              <FlickeringGrid
                className="size-full"
                gridGap={4}
                squareSize={2}
                maxOpacity={0.5}
              />
            </motion.div>
          </div>
        ),

        title: "Reliable Project Security",
        description:
          "Your work stays safe with us. From initial briefs to final assets, we protect your data with top-tier encryption and secure workflows—so you can focus on creating, not worrying.",
      },
      {
        id: 2,
        content: (
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_50%)] -translate-y-20">
            <Globe className="top-28" />
          </div>
        ),

        title: "Ready to Scale with You",
        description:
          "Whether you're a solo founder or a growing team, our systems adapt to your needs. Easily manage tasks, track progress, and collaborate across projects—all in one streamlined space.",
      },
    ],
  },
  quoteSection: {
    quote:
      "You guys did a awesome job on the website and how easy it is to navigate… hats off you guys!👏🏻",
    author: {
      name: "Euan",
      role: "CEO FYT",
      image: "https://avatar.vercel.sh/rauchg?rounded=60",
    },
  },
  pricing: {
    title: "Pricing that scales with you",
    description:
      "Whichever plan you pick, it's free until you love your docs. That's our promise.",
    pricingItems: [
      {
        name: "Free",
        href: "#",
        price: "$0",
        period: "month",
        yearlyPrice: "$0",
        features: [
          "Custom domain",
          "SEO-optimizations",
          "Auto-generated API docs",
          "Built-in components library",
        ],
        description: "Perfect for individual users",
        buttonText: "Start Free",
        buttonColor: "bg-accent text-primary",
        isPopular: false,
      },
      {
        name: "Startup",
        href: "#",
        price: "$12",
        period: "month",
        yearlyPrice: "$120",
        features: [
          "Custom domain",
          "SEO-optimizations",
          "Auto-generated API docs",
          "Built-in components library",
          "E-commerce integration",
          "User authentication system",
          "Multi-language support",
          "Real-time collaboration tools",
        ],
        description: "Ideal for professionals and small teams",
        buttonText: "Upgrade to Pro",
        buttonColor: "bg-secondary text-white",
        isPopular: true,
      },
      {
        name: "Enterprise",
        href: "#",
        price: "$24",
        period: "month",
        yearlyPrice: "$240",
        features: [
          "Custom domain",
          "SEO-optimizations",
          "Auto-generated API docs",
          "Built-in components librarys",
          "Real-time collaboration tools",
        ],
        description: "Best for large teams and enterprise-level organizations",
        buttonText: "Contact Sales",
        buttonColor: "bg-primary text-primary-foreground",
        isPopular: false,
      },
    ],
  },
  testimonials: [
    {
      id: "1",
      name: "Euan",
      role: "CEO FYT",
      img: "https://avatar.vercel.sh/42?rounded=60",
      description: (
        <p>
          You guys did a
          <Highlight>
            awesome job on the website and how easy it is to navigate…
          </Highlight>{" "}
          hats off you guys!👏🏻
        </p>
      ),
    },
    {
      id: "2",
      name: "Mark",
      role: "CEO Empire Prop Trading",
      img: "https://avatar.vercel.sh/40?rounded=60",
      description: (
        <p>
          Prajwal that&apos;s fucking amazing 💀 Seriously,
          <Highlight>
            I haven&apos;t even gone past hero section and I&apos;m already
            impressed I feel like we underpaid you
          </Highlight>{" "}
          This is insane man
        </p>
      ),
    },
    {
      id: "3",
      name: "Kilian",
      role: "CEO Levels Funding",
      img: "https://avatar.vercel.sh/20?rounded=60",
      description: (
        <p>
          Thanks guys, great quality of work,
          <Highlight>
            its good to work with the team who works 24/7,
          </Highlight>{" "}
          no days off!
        </p>
      ),
    },
    {
      id: "4",
      name: "Ashish",
      role: "GM Global Prime",
      img: "https://avatar.vercel.sh/25?rounded=60",
      description: (
        <p>
          Mate this honestly looks really good,
          <Highlight>it&apos;s better than our competitors,</Highlight> with our
          brand colours it looks perfect!
        </p>
      ),
    },
    {
      id: "5",
      name: "Xavier",
      role: "GM Fusion Markets",
      img: "https://avatar.vercel.sh/15?rounded=60",
      description: (
        <p>
          Hey team, happy easter,
          <Highlight>you guys did a fabulous job, Im very happy</Highlight>with
          the special details you added to dashboard as briefed👏🏻
        </p>
      ),
    },
    {
      id: "6",
      name: "Zac",
      role: "CEO Hera Trading Capital",
      img: "https://avatar.vercel.sh/10?rounded=60",
      description: (
        <p>
          You guys are crazy,
          <Highlight>the website is all done in 2 weeks,</Highlight>the
          animations look great guys, love y&apos;all!
        </p>
      ),
    },
    {
      id: "7",
      name: "Milos",
      role: "CEO Monevis",
      img: "https://avatar.vercel.sh/5?rounded=60",
      description: (
        <p>
          It is great to see we went from
          <Highlight>40k in revenue to 110k revenue in just 6 weeks,</Highlight>
          let&apos;s scale this more guys!
        </p>
      ),
    },
    {
      id: "8",
      name: "Samuel",
      role: "HyroTrader",
      img: "https://avatar.vercel.sh/50?rounded=60",
      description: (
        <p>
          Love the designs,
          <Highlight>
            you guys deliver all the social media graphics in all ratios
            superfast,
          </Highlight>
          I have a few friends who would love to work with you guys, Aditya
          I&apos;ll send them your contact soon.
        </p>
      ),
    },
  ],
  faqSection: {
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about Xtend and its workflow. If you have any other questions, please don't hesitate to contact us.",
    faQitems: [
      {
        id: 1,
        question: "What types of businesses does Xtend collaborate with?",
        answer:
          "Xtend partners with a diverse range of clients, including early-stage startups, Web3 projects, and fintech companies. Whether you’re launching a new venture or seeking to enhance your digital presence, we're equipped to support your growth.",
      },
      {
        id: 2,
        question: "What services does Xtend provide?",
        answer: `We offer a comprehensive suite of services encompassing:
	•	Strategic brand development and identity creation
	•	Custom website design and development
	•	Content marketing and social media management
	•	Performance-driven advertising on platforms like Meta and YouTube
	•	Search Engine Optimization (SEO) and UI/UX optimization
	•	Utilization of advanced web technologies such as Next.js, Webflow, and Shopify`,
      },
      {
        id: 3,
        question: "How long does a typical project with Xtend take?",
        answer:
          "Project timelines vary based on complexity and scope. However, most full-service projects are completed within 3 to 6 weeks. We prioritize transparency and keep you informed at every stage of the process.",
      },
      {
        id: 4,
        question: "Can Xtend assist if I only have a business idea?",
        answer:
          "Absolutely! Xtend specializes in transforming raw ideas into fully-fledged businesses. From initial brand strategy to web development and digital marketing, we provide end-to-end solutions to bring your vision to life.",
      },
      {
        id: 5,
        question: "What distinguishes Xtend from other agencies?",
        answer:
          "With a portfolio of over 117 completed projects, Xtend combines creative design, strategic planning, and cutting-edge technology to deliver results that not only look impressive but also drive business growth. Our commitment to understanding your unique needs ensures tailored solutions that resonate with your target audience.",
      },
      {
        id: 6,
        question: "How can I initiate a project with Xtend?",
        answer:
          "Starting your journey with Xtend is straightforward. Simply book a free discovery call through our website. During this session, we'll discuss your goals, challenges, and how we can assist in achieving your business objectives.",
      },
      {
        id: 7,
        question: "How much do Xtend Co.'s services cost?",
        answer: `Our pricing is flexible based on the scope and complexity of your project. Here's a starting point for our core services:  
- Social Media Graphics: Starts at $300
- UI/UX Design: Starts at $700  
- Custom Website Design & Development: Starts at $2,000 
- Performance Marketing (Meta & YouTube Ads): Starts at $1,000/month

We tailor every package based on your goals and business needs. During our discovery call, we'll provide a detailed quote that fits your vision and budget.`,
      },
    ],
  },
  ctaSection: {
    id: "cta",
    title: "Collaborate. Create. Complete.",
    backgroundImage: "/agent-cta-background.png",
    button: {
      text: "Book a 30-min Call",
      href: "#",
    },
    subtext: "Cancel anytime, no questions asked",
  },
  footerLinks: [
    {
      title: "Company",
      links: [
        { id: 1, title: "About", url: "#" },
        { id: 2, title: "Contact", url: "#" },
        { id: 3, title: "Blog", url: "#" },
        { id: 4, title: "Story", url: "#" },
      ],
    },
    {
      title: "Products",
      links: [
        { id: 5, title: "Company", url: "#" },
        { id: 6, title: "Product", url: "#" },
        { id: 7, title: "Press", url: "#" },
        { id: 8, title: "More", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: 9, title: "Press", url: "#" },
        { id: 10, title: "Careers", url: "#" },
        { id: 11, title: "Newsletters", url: "#" },
        { id: 12, title: "More", url: "#" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
