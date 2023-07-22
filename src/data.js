import tourImage1 from "./images/tour-1.jpeg"
import tourImage2 from "./images/tour-2.jpeg"
import tourImage3 from "./images/tour-3.jpeg"
import tourImage4 from "./images/tour-4.jpeg"

export const pageLinks = [
    {id: 1, href: '#home', text: 'home'},
    {id: 2, href: '#about', text: 'about'},
    {id: 3, href: '#services', text: 'services'},
    {id: 4, href: '#tours', text: 'tours'},
]

export const socialLinks = [
    {id: 1, href: 'https://twitter.com', icon: 'fab fa-twitter'},
    {id: 2, href: 'https://twitter.com', icon: 'fab fa-facebook'},
    {id: 3, href: 'https://twitter.com', icon: 'fab fa-squarespace'}
]

export const services = [
    {id:1, icon:'fas fa-wallet fa-fw', title:'saving money', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:2, icon:'fas fa-tree fa-fw', title:'endless hiking', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:3, icon:'fas fa-socks fa-fw', title:'amazing comfort', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:4, icon:'fas fa-wallet fa-fw', title:'saving money', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
]

export const tours = [
    {id:1, image:tourImage1, date: 'august 26th, 2023', title: 'Tibet Adventure', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location: 'china', duration: 6, cost: 2100},
    {id:2, image:tourImage2, date: 'october 1th, 2023', title: 'best of java', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location: 'indonesia', duration: 11, cost: 1400},
    {id:3, image:tourImage3, date: 'september 15th, 2023', title: 'explore hong kong', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location: 'hong kong', duration: 8, cost: 5000},
    {id:4, image:tourImage4, date: 'december 5th, 2023', title: 'kenya highlights', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location: 'kenya', duration: 20, cost: 3300}
]