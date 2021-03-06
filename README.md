# React Test Project: Selective Rendering based on window sizing

I wanted to experiment with monitoring both the current window size and listening for any resizing of the browser in React in order to build a UI that would feature 3 panels in desktop mode, and switch to a one panel display with button selectors for the other 2 panels. I found this website that has a great explanation of using window.innerWidth:<br>[Different mobile and desktop layouts with React](https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/)<br>
The blog post describes using class components and traditional state; I decided I would try playing around with displaying mobile and desktop layouts using functional components and making use of useState and useEffect.<br>
*Demo*: [Layout/Panel Test](https://clockwerkz.github.io/reactLayouts/)
