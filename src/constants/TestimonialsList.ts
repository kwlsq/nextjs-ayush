export interface TESTIMONIALS {
    id: number;
    description: string;
    photoSource: string;
    alt: string;
    name: string;
    position: string;
}

export const testimonialsList: TESTIMONIALS[] = [
    {
        id: 1,
        description: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur."`,
        photoSource: "/pp1.webp",
        alt: "photo of ayus raj",
        name: "Ayush Raj",
        position: "VP of Marketing @ Webflow",
    },
    {
        id: 2,
        description: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur."`,
        photoSource: "/pp2.webp",
        alt: "photo of Alex Cattoni",
        name: "Alex Cattoni",
        position: "Founder @ CopyPossy",
    },
]

