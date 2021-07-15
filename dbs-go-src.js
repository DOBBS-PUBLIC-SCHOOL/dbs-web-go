// style
var style = document.createElement('style');
var stl_cotent=".background { position: fixed; top: 0; right: 0; bottom: 0; left: 0; } iframe { border: 0ch; } .foreground, .background iframe { position: absolute; width: 100%; height: 100%; }"

style.appendChild(document.createTextNode(stl_cotent));
document.head.appendChild(style);
// style

//body
div1=document.createElement("div")
div1.className="background"
div1.id="d1"
document.body.appendChild(div1)

div2=document.createElement("div")
div2.className="foreground"
div2.id="d2"
document.getElementById("d1").appendChild(div2)

frame=document.createElement("iframe")
frame.id="frm"
document.getElementById("d2").appendChild(frame)
//body

//script
var p = location.search.substring().split('');
p.splice(0,1)
p=str(p);
document.getElementById('frm').src="https://dobbs-public-school.github.io/dbs-website-go/html-src-contents" + p + ".html";

function str(q) {
  var a = '';
  for (let i = 0; i < q.length; i++) {
    a = a.concat(q[i]);
  }
  return a;
}
//script
