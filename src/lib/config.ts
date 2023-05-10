import {dev} from "$app/environment";

import Image1 from '$lib/assets/images/me/Tobi_1.jpg?w=500'
import Image1SrcSet from '$lib/assets/images/me/Tobi_1.jpg?w=300;400;500;900;1200&format=webp&as=srcset'

import Image2 from '$lib/assets/images/me/Tobi_2.jpg?w=500'
import Image2SrcSet from '$lib/assets/images/me/Tobi_2.jpg?w=300;400;500;900;1200&format=webp&as=srcset'

import Image3 from '$lib/assets/images/stock/pexels-daria-obymaha-1684151.jpg?w=500'
import Image3SrcSet from '$lib/assets/images/stock/pexels-daria-obymaha-1684151.jpg?w=300;400;500;900;1200&format=webp&as=srcset'

import Image4 from '$lib/assets/images/stock/pexels-negative-space-160107.jpg?w=500'
import Image4SrcSet from '$lib/assets/images/stock/pexels-negative-space-160107.jpg?w=300;400;500;900;1200&format=webp&as=srcset'

import Image5 from '$lib/assets/images/stock/workplace-plants.jpg?w=500'
import Image5SrcSet from '$lib/assets/images/stock/workplace-plants.jpg?w=300;400;500;900;1200&format=webp&as=srcset'

import FormatD from '$lib/assets/images/companies/FormatD.jpg?w=32&h=32&format=webp'
import KPFamily from '$lib/assets/images/companies/KPFamily.jpg?w=32&h=32&format=webp'
import LinksDerIsar from '$lib/assets/images/companies/LinksDerIsar.jpg?w=32&h=32&format=webp'
import Check24 from '$lib/assets/images/companies/Check24.png?w=32&h=32&format=webp'
import Arrabiata from '$lib/assets/images/companies/Arrabiata.jpg?w=32&h=32&format=webp'
import RaMicro from '$lib/assets/images/companies/RaMicro.svg?w=32&h=32&format=webp'
import Ico from '$lib/assets/images/companies/ICO.png?w=32&h=32&format=webp'


export const title = "Bitbench"
export const description = "Bitbench is the Blog of Tobias Hettler"
export const url: string = dev ? 'http://localhost:5173/' : 'https://bitbench.dev/'
export const navigation = [
    {
        label: 'About',
        href: '/about',
    },
    {
        label: 'Articles',
        href: '/articles',
    },
    {
        label: 'Projects',
        href: '/projects',
    },
    {
        label: 'Uses',
        href: '/uses',
    }
];
export const galerie = [
    {
        src: Image3,
        alt: "ich",
        srcset: Image3SrcSet,
    },
    {
        src: Image1,
        alt: "ich",
        srcset: Image1SrcSet,
    },
    {
        src: Image5,
        alt: "ich",
        srcset: Image5SrcSet,
    },
    {
        src: Image2,
        alt: "ich",
        srcset: Image2SrcSet,
    },


    {
        src: Image4,
        alt: "ich",
        srcset: Image4SrcSet,
    },
];
export const work = [
    {
        name: 'ICO-Cert',
        position: 'Freelancer',
        src: Ico,
        from: 'Jun 2022',
        until: 'present'
    },
    {
        name: 'RA-MICRO',
        position: 'Freelancer',
        src: RaMicro,
        from: 'Feb 2022',
        until: 'Aug 2022'
    },
    {
        name: 'FormatD GmbH',
        position: 'Full Stack Developer',
        src: FormatD,
        from: 'Aug 2021',
        until: 'Jan 2022'
    },
    {
        name: 'KP Family International GmbH',
        position: 'Full Stack Developer',
        src: KPFamily,
        from: 'Mar 2021',
        until: 'Jul 2021'
    },
    {
        name: 'Links Der Isar GmbH',
        position: 'Full Stack Developer',
        src: LinksDerIsar,
        from: 'Sep 2018',
        until: 'Feb 2021'
    },
    {
        name: 'Check24 Vergleichsportal',
        position: 'Junior PHP-Developer',
        src: Check24,
        from: 'Nov 2016',
        until: 'Sep 2018'
    },
    {
        name: 'Arrabiata Solutions GmbH',
        position: 'Trainee',
        src: Arrabiata,
        from: 'Jul 2016',
        until: 'Oct 2018'
    },
    {
        name: 'Arrabiata Solutions GmbH',
        position: 'Apprentice application development',
        src: Arrabiata,
        from: 'Sep 2013',
        until: 'Jun 2016'
    }
]
