const container = document.querySelector('#container');
const btn = document.querySelector('#reset');

function createGrid(size)
{
    const content = document.createElement('div');
    content.classList.add('content');
    content.setAttribute('id','content');
    content.style.cssText= "width: 400px; height: 400px; display:grid; grid-template-columns:repeat("+size+",1fr); grid-template-rows:repeat("+size+",1fr);border:solid; border-color:black; border-left:0; border-bottom:0;";
    container.append(content);
    const co = document.querySelector('.content');
    for(var i=0;i<=(size*size)-1;i++)
    {  
        var id = "div"+(i+1);
        const div1 = document.createElement('div');
        div1.setAttribute("id",id);
        div1.classList.add('divs');
        div1.style.cssText="border-style:solid; border-color:black; border-right:0; border-top:0;";
        co.append(div1);
    }
}

window.addEventListener('load',createGrid(16));
const divs = document.querySelectorAll('.divs');
divs.forEach((div)=>{
    div.addEventListener('mouseenter',()=>{
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        div.style.cssText="border-style:solid; border-color:black; border-right:0; border-top:0; background-color:" + bgColor+";";
    });
});

btn.addEventListener('click',()=>{
    divs.forEach(div=>{
        div.style.cssText="border-style:solid; border-color:black; border-right:0; border-top:0;";
    });
    var size = parseInt(prompt('Enter size (between 1 to 64)')); 
    while((isNaN(size)|| (size>64)))
    {
        size = parseInt(prompt('Enter a valid number'));
    }

    var myobj = document.getElementById('content');
    myobj.remove();
    createGrid(size);
    const newDiv = document.querySelectorAll('.divs');
    newDiv.forEach((div)=>{
        div.addEventListener('mouseenter',()=>{
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            div.style.cssText="border-style:solid; border-color:black; border-right:0; border-top:0; background-color:" + bgColor+";";
        });    
    })    
});





