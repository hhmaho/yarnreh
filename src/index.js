import tabletop from 'tabletop'
// import render from './render'

tabletop.init({
 key: 'https://docs.google.com/spreadsheets/d/1vE_wYxs9uZdlB8xMZFJz_xVLyPfK3ihTJtoRJ6KvBhQ/edit?usp=sharing',
 callback: function (data, tabletop) {
   console.log(data)
   // var view = render(data)
   // document.body.appendChild(view)
 },
 simpleSheet: false,
})