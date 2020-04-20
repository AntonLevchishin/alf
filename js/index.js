/* eslint-disable no-console */
/* eslint-disable no-alert */

import Router from './Router.js';

const router = new Router({
    mode: 'hash',
    root: '/'
});

router
    .add(/about/, () => {
    alert('welcome in about page');
    
})
.add(/news/, () => {
    $( "#app" ).load( "pages/main.html" ,function (){
        $( "#content" ).load( "pages/news.html",  function (){

        });
    })
})
.add(/products\/(.*)\/specification\/(.*)/, (id, specification) => {
    alert(`products: ${id} specification: ${specification}`);
    
    console.log("111");
})

.add(/n\/(.*)/, (id) => {

    $( "#app" ).load( "pages/main.html" ,function (){
        $( "#content" ).load( "pages/news/"+ id + ".html",  function (){

        });
    });
})  
.add('', () => {
    // general controller
    //console.log('welcome in catch all controller');

    $( "#app" ).load( "pages/main.html" ,function (){
        $( "#content" ).load( "pages/news.html",  function (){
            
        });
    });
});
