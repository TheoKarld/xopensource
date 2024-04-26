//myshop
var gears=(function(){
	var ios='',ledge='',lso={},fro={},M1=('home,products,orders,more,users,shopping lists,updates').split(','),M1b=('popular items,livestocks,suppliers,settings,logout,refresh').split(','),M2=('products,orders,users,settings,suppliers,livestocks,shopping lists,updates').split(','),MI=('cartf,cart,people,command,people,house,stack,server').split(','),M4=['name','owner','address','description','phone number','logo','email','products','cover','orders'],M9=['owner','description','address','phone number','email'],M3=['name','logo','description','shops'],sho={},M5=['name','description','logo','items','cdate'],mpo={},wol='',A6=['name','description','product','shop','items','logo'],cko={},M7=['image','name','description','price','availability','shop','product','category','cdate'],M8=['image','name','description','age','breed','price','family','cdate'],M9=['name','description','age','breed','price'],M10=('name,description,product,price,quantity,status').split(','),M11=('name,description,family,breed,age,price,quantity,status').split(','),A3=['in stock','out of stock','out of stock but i can get it'],G1=('gwap,date').split(','),F3=['username','email','phone number','security pass','recovery pin'],F4=['bd','img','userID','orders','cart','verified'],F5=['username','email','phone number'],F6=['name','items','cdate'],mso={},grl='https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp',sho={},ito={},mpo={},slo={},sno={},shd={},sha={},sco={},spr={},prn={},prd={},sxa={},ctn={},ctd={},sit={},cti={},IV=false,nod={},dlo={},O1=('customer,item,quantiy,total,date,status').split(','),OZ=('tag,customer,items,charges,total,date,status').split(','),O4=('pending,charged,paid,delivered,aborted').split(','),F7=['pending','picked','paid','delivered','canceled'],O2=('customer name,phone number').split(','),O3=['pending','picked','paid','delivered','canceled'],PZ=('customer,walletID,balance,transactions,topup,payments,share,date,wallet points').split(','),bets=('a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z').split(','),LX=('type,customer,order,total,gwap avail,new balance,date').split(','),LY=('order payment').split(','),L1=('fid,shagal,balance').split(','),L2=('balance,rewards,used').split(','),L3=('online payment,cash').split(','),L5=['bank','cash'],L6=('type,amount,medium,reciept,date').split(','),L7=['add funds','transfer','share'],L8=('topup,payment').split(','),W1=('entity,name,description,parent,price,img').split(','),W2=('item,price,quantity,total').split(','),N1=('user,unread,read,deleted').split(','),N2=('type,reciever,sender,message,date,more').split(','),N3=('shopping list activity,order activity,product alert,user message,adnin message').split(','),N4=('system,admin,subscriber').split(','),Q1=('image,text').split(','),Q2=('type,o,date').split(','),uid='admin-'+datemap().key;
	
	
	function init(){
		socket.on('ios',(o)=>{
			ios=o.i;
			socket.emit('who',{s:ios,i:uid,adm:true});
			
		});
		socket.emit('myshop');
		socket.on('shop',function(o){
			ledge=o.lg;ll=o.o;clg(o);if(!ll.livestocks)ll.livestocks={};
			callweldome();
			
		});
		socket.on('mylogo',function(o){
			ll[M4[5]]=o.p;
			sho={}
			callshop();
			slo.sm();
		});
		
		socket.on('neworder',neworder);socket.on('xorder',cancelorder);socket.on('pay4order',pay4order);socket.on('confirmorder',confirmorder);socket.on('newgwap',newgwap);socket.on('newlist',newlist)
	
	}
	function retrieveshopid(){
	var a,b,c;
		a=prompt('Enter your shop name');
		b=(cleaname(a)==ll[M4[0]]);
		if(!b){alert('no be the shop name be this.');return;}
		socket.emit('resendshopid');
		alert('Your shopID has been sent to your email.');
		
	}
	function callshop(){
		if(!sho.e)shagona();
		bringup(sho.e);
		
	}
	function callfront(){
		if(!fro.e)front();
		bringup(fro.e);
		
	}
	function brkorders(){
		var a=ll[M4[9]],b={},c={};
		for(var i in a)if(a[i].del){b[i]=a[i];}else{c[i]=a[i];}
		return {a:b,b:c};
		
	}
	function neworder(o){
		if(!ll[M4[9]])ll[M4[9]]={};
		ll[M4[9]][o.k]=o.o;
		if(nod.e)nod.rf();
	}
	function mynewods(){
		var a=ll[M4[9]],b={};for(var i in a)if(a[i].status=='pending')b[i]=a[i];return b;
	}
	function fixmyctimg(o){
		ll[M4[7]][o.p][M5[3]][o.c][A6[4]][o.it][M7[0]]=o.ar;sho.f6(o.it,o.ar[0]);if(!IV){callshop();}else{sho.f7(o.it,o.ar);}cti.sm();
	}
	function fixmyitimg(o){
		ll[M4[7]][o.p][M5[3]][o.c][A6[4]][o.it][M7[0]]=o.ar;sho.f6(o.it,o.ar[0]);if(!IV){callshop();}else{sho.f7(o.it,o.ar);}sit.sm();
	}
	function fixmyclogo(o){
		ll[M4[7]][o.p][M5[3]][o.c][A6[5]]=o.ar;sho.f5(o.c,o.o);callshop();sxa.sm();
	}
	function fixmycover(o){
		ll[M4[8]]=o.p;sho={};callshop();slo.sm();
	}
	function fixmyplogo(o){
		ll[M4[7]][o.p][M5[2]]=o.o;sho.pros[o.p].f2(o.o);callshop();spr.sm();
	}
	function fixmylogo(o){
		ll[M4[5]]=o.p;sho={};callshop();slo.sm();
	}
	function callweldome(){
		var a=logob();bringup(a.e);
	}
	function ordergwap(o){
		var x=datemap(),a=mrgar(G1,[o.gp,x]);ll[M4[9]][o.k].charges=a;o.gp=a;socket.emit('ordergwap',o);
	}
	function newiteminfo(o){if(!ll.popular)ll.popular={};
		var a=ll.popular;ll[M4[7]][o.p][M5[3]][o.i][o.k]=o.nv;if(o.k==M7[1]){if(a[o.i]){ll.popular[o.i][M7[1]]=o.nv;ll.popular=sio(a,o.i,o.nv);};fixinoac(o);ll[M4[7]][o.p][M5[3]]=sio(ll[M4[7]][o.p][M5[3]],o.i,o.nv);};socket.emit('itmfix',{p:o.p,i:o.i,d:o.k,k:o.k,v:o.nv,nv:o.nv});
	}
	function newlivesinfo(o){if(!ll.popular)ll.popular={};
		var a=ll.popular;ll.livestocks[o.p][M5[3]][o.i][o.k]=o.nv;if(o.k==M7[1]){if(a[o.i]){ll.popular[o.i][M7[1]]=o.nv;ll.popular=sio(a,o.i,o.nv);};fixinoac2(o);ll.livestocks[o.p][M5[3]]=sio(ll.livestocks[o.p][M5[3]],o.i,o.nv);};socket.emit('livesfix',{p:o.p,i:o.i,d:o.k,k:o.k,v:o.nv,nv:o.nv});
	}
	function fixinoac(o){
		var x=['product','category'],a=ll.users,b=ll[M4[9]],c,d,e,f,g;for(var i in b){c=b[i][O1[1]];if(c[x[0]]==o.p&&o.i==c[M7[1]])b[i][O1[1]][o.k]=o.nv;};for(var i in a){c=a[i][F4[4]];for(var v in c){d=c[v][F6[1]];for(var k in d){e=d[k][O1[1]];};if(e[x[0]]==o.p&&o.i==e[M7[1]])a[i][F4[4]][v][F6[1]][k][O1[1]][o.k]=o.nv};};
	}
	function fixinoac2(o){
		var x=['product','category'],a=ll.users,b=ll[M4[9]],c,d,e,f,g;for(var i in b){c=b[i][O1[1]];if(c[x[0]]==o.p&&o.i==c[M7[1]])b[i][O1[1]][o.k]=o.nv;};for(var i in a){c=a[i][F4[4]];for(var v in c){d=c[v][F6[1]];for(var k in d){e=d[k][O1[1]];};if(e[x[0]]==o.p&&o.i==e[M7[1]])a[i][F4[4]][v][F6[1]][k][O1[1]][o.k]=o.nv};};
	}
	function myolevel(u){
		var x=F4,y=ll[M4[9]],w=ll.users[u],a=w[x[3]],b=w[x[4]],c=mrgar(F7,[{},{},{}]),d,e,f,g,h;for(var i in a){if(!y[i])continue;d=y[i][O1[5]];if(d==F7[0]){c[F7[0]][i]=true;}else if(d&&typeof d=='object'&&d.status==F7[1]){c[F7[1]][i]=true;}else if(d&&typeof d=='object'&&d.status==F7[2]){c[F7[2]][i]=true;};};return c;
	}
	function checkshopbio(o){
		var x=M9,a=ll,b={};for(var i in o)if((i==x[3]&&parse(a[i])!=parse(o[i]))||a[i]!=o[i]){b[i]=o[i];ll[i]=o[i];};if(ocn(b))socket.emit('shopbio',b);
	}
	function newpass(o){
		if(ll.pass==o.p)return;ll.pass=o.p;socket.emit('newpass',o);flashbox('Security Pass was updated Successfully...')
	}
	function newproinfo(o,fn){if(!ll.popular)ll.popular={};
		var a=ll.popular;ll[M4[7]][o.p][o.k]=o.nv;if(o.k==M7[1]){for(var i in ll[M4[7]][o.p][M5[3]])ll[M4[7]][o.p][M5[3]][i][A6[2]]=o.nv;ll[M4[7]]=sio(ll[M4[7]],o.p,o.nv);for(var i in a)if(a[i][A6[2]]==o.p)ll.popular[i][A6[2]]=o.nv;fn.f4(o.nv);};socket.emit('profix',o);
	}
	function newliveinfo(o,fn){if(!ll.popular)ll.popular={};
		var a=ll.popular;ll.livestocks[o.p][o.k]=o.nv;if(o.k==M7[1]){for(var i in ll.livestocks[o.p][M5[3]])ll.livestocks[o.p][M5[3]][i][A6[2]]=o.nv;ll.livestocks=sio(ll.livestocks,o.p,o.nv);for(var i in a)if(a[i][A6[2]]==o.p)ll.popular[i][A6[2]]=o.nv;fn.f4(o.nv);};socket.emit('profix',o);
	}
	function newpopular(o){if(!ll.livestocks)ll.livestocks={};
		var a=ll[M4[7]],b={},c=ll.livestocks;for(var i in o)if(!ll.popular[i]){ll.popular[i]=((o[i].animal)?c[o[i].p]:a[o[i].p])[M5[3]][i];b[i]=o[i];};if(ocn(b)){socket.emit('newpopular',b);flashbox('new items added to popular successfully...');};
	}
	function mypendings(){
		var a=ll[M4[9]],b={};for(var i in a)if(a[i][O1[5]]==F7[0])b[i]=a[i];return b;
	}
	function mypicked(){
		var a=ll[M4[9]],b={};for(var i in a)if(a[i][O1[5]]==F7[1])b[i]=a[i];return b;
	}
	function mypaids(){
		var a=ll[M4[9]],b={};for(var i in a)if(a[i][O1[5]]==F7[2])b[i]=a[i];return b;
	}
	function mydeli(){
		var a=ll[M4[9]],b={};for(var i in a)if(a[i][O1[5]]==F7[3])b[i]=a[i];return b;
	}
	function myxed(){
		var a=ll[M4[9]],b={};for(var i in a)if(a[i][O1[5]]==F7[4])b[i]=a[i];return b;
	}
	function pickorder(v,fn){
		ll[M4[9]][v.k][O1[5]]=F7[1];ll[M4[9]][v.k].dropoint=v.d;ll[M4[9]][v.k].charges=v.c;socket.emit('pickorder',v);flashbox(ll[M4[9]][v.k][O1[0]]+"'s "+ll[M4[9]][v.k].tag+' has been picked successfully..');fn.f2(v.k);
	}
	function cancelorder(o){if(ll[M4[9]][o.k][O1[5]]==O3[2]||ll[M4[9]][o.k][O1[5]]==O3[3]||ll[M4[9]][o.k][O1[5]]==O3[4])return;
		ll[M4[9]][o.k][O1[5]]=F7[4];;flashbox(ll[M4[9]][o.k].tag+' was canceled, so do not stress your effort...');
	}
	function pay4order(v){
		makepayment(v);
	}
	function makepayment(o){if(o.ok&&dempay({k:o.ok,p:o.wk})){ll[M4[9]][o.ok][O1[5]]=F7[2];if(mdo.e)mdo.f5(o.k);return;};
		var wb=parse(ledge[L1[1]][o.wk][PZ[2]]),y=parse(o.tl),x=wb-y,a=mrgar(LX,[o.ty,o.u,(o.ok)?o.ok:'',y,wb,x,o.dt]);a.key=o.key;if(y>wb)return;ledge[L1[1]][o.wk][PZ[2]]=x;ledge[L1[1]][o.wk][PZ[3]][o.key]=a;ledge[L1[1]][o.wk][PZ[5]][o.key]=true;if(o.ok){ll[M4[9]][o.ok][O1[5]]=F7[2];flashbox(o.u+' just paid for '+ll[M4[9]][o.ok].tag);if(mdo.e)mdo.f5(o.k);};
	}
	function dempay(o){
		var a=ledge[L1[1]][o.p][PZ[3]],b=ledge[L1[1]][o.p][PZ[5]],c=false,d,e,f;for(var i in b)if(a[i][LX[2]]&&a[i][LX[2]]==o.k){c=true;break;};return c;
	}
	function confirmorder(o){if(ll[M4[9]][o.k][O1[5]]!=F7[2])return;
		ll[M4[9]][o.k][O1[5]]=F7[3];if(mdo.e)mdo.f5(o.k);flashbox(ll[M4[9]][o.k][O1[0]]+" just confirmed the delivery of "+ll[M4[9]][o.k].tag);
	}
	function myoutstanding(u){
		var a=ll.users[u][M4[9]],c=ll[M4[9]],b=0;for(var i in a)if(c[i][O1[11]]==O2[3])b+=parse(c[i][O1[8]]);return b;
	}
	function mybalance(u){
		var a=ll.users[u][L1[1]][PZ[1]],b=parse(ledge[L1[1]][a][PZ[2]]);return b;
	}
	function newgwap(o){
		var d=o.dt,wk=ll.users[o.u][L1[1]][PZ[1]],y=ledge[L1[1]][wk],a=mrgar(L6,[o.u,o.a,o.m,o.pi,d]),b='topup-'+d.key;if(o.m==L3[1])a.waiter=o.w;a.key=b;ledge[L1[1]][wk][PZ[4]][b]=true;ledge[L1[1]][wk][PZ[3]][b]=a;ledge[L1[1]][wk][PZ[2]]=parse(y[PZ[2]])+parse(o.a);
	}
	function sortorders(u){
		var a=ll[M4[9]],b={},c,d;for(var i in a){if(u&&u!=a[i][O1[0]])continue;c=a[i][O1[2]];d=a[i][O1[3]];if(!b[c])b[c]={};if(!b[c][d])b[c][d]={};b[c][d][i]=a[i];};return b;
	}
	function mypics(o,lv){
		var a=((lv)?ll.livestocks:ll[M4[7]])[o.p][M5[3]][o.k],b={},c=(a.more_pix)?a.more_pix:{};if(ocn(a[M7[0]]))b['pix-'+datemap().key]=a[M7[0]];for(var i in c)b[c[i].key]=c[i];return b;
	}
	function poproducts(o,fn){if(!ll.xproducts)ll.xproducts={};
		var a=ll[M4[7]],b,c=ll.new_items,d=ll.popular,e,f;for(var i in o)if(a[i]){ll.xproducts[i]=cloneo(a[i]);b=a[i][M5[3]];for(var v in b){if(c[v])delete ll.new_items[v];if(d[v])delete ll.popular[v];};delete ll[M4[7]][i];};socket.emit('poproducts',o);flashbox('Product(s) Removed Successfully...');fn.f1();
	}
	function poplives(o,fn){if(!ll.xlives)ll.xlives={};
		var a=ll.livestocks,b,c=ll.new_lives,d=ll.popular,e,f,wk=false;for(var i in o)if(a[i]){if(!wk)wk=true;ll.xlives[i]=cloneo(a[i]);b=a[i][M5[3]];for(var v in b){if(c[v])delete ll.new_lives[v];if(d[v])delete ll.popular[v];};delete ll.livestocks[i];};socket.emit('poplives',o);flashbox('Livestocks Families were Removed Successfully...');fn.f1();
	}
	function popitems(o,fn){if(!ll.xitems)ll.xitems={};clg(o);
		var a=ll[M4[7]][o.p][M5[3]],x=o.o,b,c=ll.new_items,d=ll.popular,e,f;for(var i in x)if(a[i]){ll.xitems[i]=cloneo(a[i]);if(c[i])delete ll.new_items[i];if(d[i])delete ll.popular[i];delete ll[M4[7]][o.p][M5[3]][i];};socket.emit('popitems',o);flashbox(o.k+' was Removed Successfully...');fn.f1();
	}
	function poplive(o,fn){if(!ll.xlive)ll.xlive={};
		var a=ll.livestocks[o.p][M5[3]],x=o.o,b,c=ll.new_lives,d=ll.popular,e,f;for(var i in x)if(a[i]){ll.xlive[i]=cloneo(a[i]);if(c[i])delete ll.new_lives[i];if(d[i])delete ll.popular[i];delete ll.livestocks[o.p][M5[3]][i];};socket.emit('poplive',o);flashbox(o.k+' was Removed Successfully...');fn.f1();
	}
	function allists(){
		var a=ll.shoplists,b={},c={};for(var i in a)if(a[i][OZ[6]]==O4[0]){b[v]=a[i];}else{c[v]=a[i].shoplists[v];};return {a:b,b:c};
	}
	function username(o){
		var a=ll.users,b=o.n;for(var i in a)if(a[i].userID==o.u)b=a[i].bd[F3[0]];return b;
	}
	function chargelist(o){
		var wk=false,y={},a=ll.shoplists[o.k];for(var i in o.o){if(i==OZ[3]){if(!a[OZ[3]]||(parse(a[OZ[3]])!=parse(o.o[i]))){ll.shoplists[o.k][OZ[3]]=o.o[i];y[i]=o.o[i];};}else if(o.o[i]!=a[i]){ll.shoplists[o.k][i]=o.o[i];y[i]=o.o[i];};};ll.shoplists[o.k][OZ[6]]=O4[1];if(ocn(y)){o.o=y;socket.emit('chargelist',o);flashbox('charges was updated successfully...');};
	}
	function pendinglists(){
		var a=ll.shoplists,b={};for(var i in a)if(a[i][OZ[6]]==O4[0])b[i]=a[i];return b;
	}
	function paidlists(){
		var a=ll.shoplists,b={};for(var i in a)if(a[i][OZ[6]]==O4[2])b[i]=a[i];return b;
	}
	function chargedlists(){
		var a=ll.shoplists,b={};for(var i in a)if(a[i][OZ[6]]==O4[1])b[i]=a[i];return b;
	}
	function abortedlists(){
		var a=ll.shoplists,b={};for(var i in a)if(a[i][OZ[6]]==O4[4])b[i]=a[i];return b;
	}
	function deliveredlists(){
		var a=ll.shoplists,b={};for(var i in a)if(a[i][OZ[6]]==O4[3])b[i]=a[i];return b;
	}
	function newlist(o){clg(o);if(!ll.shoplists)ll.shoplists={};
		if(!ll.users[o.u].shoplists)ll.users[o.u].shoplists={};ll.users[o.u].shoplists[o.k]=true;ll.shoplists[o.k]=o.o;flashbox('a new list was just created....');if(lso.e)lso.f5();
	}
	function xlist(o){
		ll.shoplists[o.k][OZ[6]]=O4[4];if(lso.e)lso.f5(o.k);flashbox(ll.shoplists[o.k].tag+' was aborted successfully...');
	}
	function passlist(o){
		ll.shoplists[o.k][OZ[6]]=O4[3];if(lso.e)lso.f5(o.k);flashbox(ll.shoplists[o.k].tag+' was confirmed successfully...');
	}
	function addmarqpar(t){
		var a=mrgar(Q2,[Q1[1],t,datemap()]),k='par-'+a.date.key;a.key=k;ll.updates[k]=a;socket.emit('newmarqpar',{k:k,o:a});flashbox('update was added Successfully..');
	}
	function changemarqpar(o){
		ll.updates[o.k].o=o.t;socket.emit('modmarqpar',o);
	}
	function rmvmarq(o){
		delete ll.updates[o.k];flashbox(((o.k.split('-')[0]=='pix')?'image':'paragraph')+' was deleted Successfully');socket.emit('deletemarq',o);
	}
	
	
	
	
	
	
	var popmarq=(k,fn)=>{
		var a=ll.updates[k],hd=pah('head',[xbut('xpopmaq'),hea(5,[small(((k.split('-')[0]=='pix')?'delete image':'delete paragraph'),'grey6').e])]),ul=(k.split('-')[0]=='pix')?img(a.o.off,'','img-fluid p-2'):par([small(a.o,'').e]),ws=sect('','my-2','',[ul]),rd=colbox('neuboy',6,9,10,12,[hd,ws,center([but('delete','button','pkey','btn btn-sm btn-danger')]).e]),eo={e:rd};function myfx(){fn.f1();};function myf1(){rmvmarq({k:k});myfx();};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xpopmaq')myfx();if(e.id=='pkey')myf1();});return eo;
	}
	var newmarqpar=(fn)=>{
		var ul=txtareapar({t:'Enter Text'}),hd=pah('head',[xbut('xnp'),hea(4,[small('New Paragraph','grey6').e])]),ws=sect('','','',[ul.e]),rd=colbox('neuboy',8,9,10,12,[hd,ws,center([but('submit','button','key1','btn btn-sm btn-success px-5 py-1 mt-5')]).e]),eo={e:rd},val=true;function myfx(){fn.f1();};function myf1(){var v1=ul.s.value;if(!v1){flashbox('please enter a text to continue...');return;};addmarqpar(v1);myfx();};function myf2(){if(val)return;resetkeys(ul.a,mrgar(a,b));val=true;};addEvent(rd,'keydown',(v)=>{var e=v.code,ev=v.key;if(!val)myf2();if(e=='Enter'||ev=='Enter')myf1();if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(!val)myf2();if(e.id=='key1')myf1();if(e.id=='xnp')myfx();});return eo;
	}
	var modmarqpar=(k,fn)=>{
		var a=ll.updates[k],ul=txtareapar({t:'Enter Text',v:a.o}),hd=pah('head',[xbut('xnp'),hea(4,[small('Modify Update Paragraph','grey6').e])]),ws=sect('','','',[ul.e]),rd=colbox('neuboy',8,9,10,12,[hd,ws,center([but('submit','button','key1','btn btn-sm btn-success px-5 py-1 mt-4')]).e]),eo={e:rd},val=true;function myfx(){fn.f1();};function myf1(){var v1=ul.s.value;if(!v1){flashbox('please enter a text to continue...');return;};changemarqpar({k:k,t:v1});myfx();};function myf2(){if(val)return;resetkeys(ul.a,mrgar(a,b));val=true;};addEvent(rd,'keydown',(v)=>{var e=v.code,ev=v.key;if(!val)myf2();if(e=='Enter'||ev=='Enter')myf1();if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(!val)myf2();if(e.id=='key1')myf1();if(e.id=='xnp')myfx();});return eo;
	}
	var marqshome=(fn)=>{
		var a=ll.updates,ws=sect('','ohidden py-2'),rd=sect('','mt-3 mb-5','',[ws]),eo={e:rd},fk=input('','',{type:'file'}),ak='';for(var i in a)APP(ws,myboy(i));function myf1(v){ak=v;(v.split('-')[0]=='pix')?fk.click():fn.f3(v);};function myf2(){if(!ak||ak.split('-')[0]!='pix')return;var v1=this.files[0],v2=fileinfo(v1),v3=v2.type.split('/')[0],v4={off:URL.createObjectURL(v1),info:v2,name:v2.name},v5,v6={k:ak,o:v4};if(v3!='image'){alert(v2.name+' is not a image!!');return;};ll.updates[ak].o=v4;uploadfile({f:{i:'pic',f:v1},o:{i:'ob',o:v6},fnc:'',call:'/modmarqpic'});myf1();};function myf3(v){fn.f4(v);};function myboy(v){var v1=a[v],v2=(v1[Q2[0]]==Q1[0])?img(v1.o.off,'','img-fluid my-3'):par([small(v1.o,'px-2').e]),v3=butgroup(1,[but(((v1[Q2[0]]==Q1[0])?'change':'edit'),'button','modme','btn btn-sm btn-warning px-3'),but('delete','button','delme','btn btn-sm btn-danger px-3')]),v4=sect('','my-5 bshadow1 py-3 ohidden','',[sect('','mb-2','',[v2]),v3]);addEvent(v4,'click',(e)=>{e=ee(e);if(e.id=='modme')myf1(v);if(e.id=='delme')myf3(v);});return v4;};addEvent(fk,'change',myf2);return eo;
	}
	var mymarqs=(fn)=>{if(!ll.updates)ll.updates={};
		var x=('new text,new image').split(','),mn=popmenu({id:'nopad',a:x,k:[but('Tools','button','nopad','btn btn-sm btn-warning px-4 noline')],fnc:myfm}),hd=pah('head',[xbut('xshoplists'),hea(5,[strong('Updates','blue').e]),mn.e]),ws=sect('','pt-2'),rd=sect('','ohidden p-2 pt-5 mt-3','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,f6:myf6,f7:myf7,f8:myf8,f9:myf9,f10:myf10,f11:myf11,f12:myf12,fm:myfm},fk=input('','',{type:'file'}),ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;rd.style.minHeight='30em';myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf5();if(v==x[1])fk.click();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};if(v==ar[8])ec={e:x9.e,v:v};if(v==ar[9])ec={e:x10.e,v:v};if(v==ar[10])ec={e:x0.e,v:v};APP(ws,ec.e);};function myf1(){x1=marqshome(eo);myf0(ar[0]);scrollup();};function myf2(){var v1=this.files[0],v2=fileinfo(v1),v3=v2.type.split('/')[0],v4={off:URL.createObjectURL(v1),info:v2,name:v2.name},v5=mrgar(Q2,[Q1[0],v4,datemap()]),v6={k:'pix-'+v5.date.key,a:v5,o:v4};if(v3!='image'){alert(v2.name+' is not a image!!');return;};v5.key=v6.k;ll.updates[v6.k]=v5;uploadfile({f:{i:'pic',f:v1},o:{i:'ob',o:v6},fnc:'',call:'/marqpic'});myf1();};;function myf3(v){x3=modmarqpar(v,eo);myf0(ar[2],v);};function myf4(v){x4=popmarq(v,eo);myf0(ar[3]);};function myf5(){x5=newmarqpar(eo);myf0(ar[4]);};function myf6(){};function myf7(){};function myf8(v){};function myf9(v){};function myf10(){};function myf11(){};function myf12(){};addEvent(fk,'change',myf2);addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xshoplists')myfx();});return eo;
	}
	var listcharge=(o,fn)=>{
		var a=ll.shoplists[o.k],hd=pah('head',[xbut('xlistcharge'),hea(5,[small('Service Charges','purple').e],'nomargin')]),x=('charges,pick point,drop point').split(','),xy=['charges','pickpoint','dropoint'],yx=mrgar(x,xy),y=fetchfromob(a,{charges:'num',pickpoint:true,dropoint:true}),ul=phul(x,x,['number','text','text'],ov2a(y)),ws=sect('','','',[ul.e]),rd=colbox('neuboy',10,11,12,12,[hd,ws,center([but('submit','button','lkey','btn btn-sm btn-success px-5 py-0 mt-4')]).e]),eo={e:rd},val=true;function myfx(){fn.f1();};function myf1(v){val=v;if(!v)return;var v1=fetchvalu(ul.o),v2=mrgar(xy,ov2a(v1));chargelist({k:o.k,o:v2});myfx();};function myf2(){if(val)return;resetkeys(ul.a,mrgar(x,x));val=true;};addEvent(rd,'click',(e)=>{e=ee(e);if(!val)myf2();if(e.id=='xlistcharge')myfx();if(e.id=='lkey')validate(ul.o,ul.a,myf1);});addEvent(rd,'keydown',(v)=>{var e=v.code,ev=v.key;if(!val)myf2();if(e=='Escape'||ev=='Escape')myfx();if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf1);});return eo;
	}
	var shoplistab=(o)=>{
		var x=ll.shoplists[o.k][OZ[2]],ub=tbod(),ws=sect('','xflow py-3','',[ctab('widthun','',[thed3('','',W2),ub])]),rd=sect('','','',[ws]),eo={e:rd};for(var i in x)APP(ub,myboy(i));function myboy(v){var v1=x[v],v2=$$$('tr','bborder1','animated zoomIn','',[$$$('td','mnwidth10','py-0 px-2','',[sect('','d-flex','',[img(v1.o.img,'width2','',{style:'margin-right:.4em;'}),sect('','','',[par([small(v1.k,'grey6').e],'nomargin'),par([small(v1.o[W1[2]],'purple').e],'nomargin')])])]),$$$('td','mnwidth5','py-0 px-2','',[small('N'+barme(v1.o[W1[4]]),'grey6').e]),$$$('td','mnwidth5','py-0 px-2','',[small(v1.qty,'grey6').e]),$$$('td','mnwidth5','py-0 px-2','',[small('N'+barme(v1.ttl),'grey6').e])]);return v2;};return eo;
	}//('entity,name,description,parent,price,img')
	var shoplistinfo=(o)=>{
		var x=ll.shoplists[o.k],u=username(x[OZ[1]]),xc=(x[OZ[3]])?(parse(x[OZ[3]])+parse(x[OZ[4]])):parse(x[OZ[4]]),ax={customer:username(x[OZ[1]]),contact:ll.users[u].bd[F3[2]],'pick point':(x.pickpoint)?x.pickpoint:'still pending','drop point':(x.dropoint)?x.dropoint:'still pending',status:x[OZ[6]],charges:(!x[OZ[3]])?'still pending':('N'+x[OZ[3]]),total:('N'+barme(x[OZ[4]])),'gross total':('N'+barme(xc))},ub=tbod(),ws=sect('','xflow py-3','',[ctab('widthun','',[ub])]),rd=sect('','mt-3','',[hea(6,[strong('List Details.','grey').e],'nomargin'),ws]),eo={e:rd};for(var i in ax)APP(ub,myboy(i));function myboy(v){var v1=ax[v],v2=$$$('tr','bborder1','animated zoomIn','',[$$$('td','mnwidth10','py-0 tleft pt-2','',[small(v,'grey6').e]),$$$('td','tright','py-0 pt-2','',[small(v1,'grey6').e])]);return v2;};return eo;
	}//('entity,name,description,parent,price,img')
	var shoplist1=(o,fn)=>{
		var x=ll.shoplists[o.k],x1=shoplistab(o),x2=shoplistinfo(o),x3=sect('','','',[(x[OZ[6]]!=O4[0]&&x[OZ[6]]!=O4[1])?small().e:par([but('charges','button','abkey','btn btn-sm btn-warning px-5 mt-1')])]),ws=sect('','ohidden pt-3','',[x1.e,x2.e]),rd=sect('','ohidden my-1','',[ws,center([x3]).e]),eo={e:rd};function myf1(){fn.f2();};function myf2(){};function myf3(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='abkey')myf1();});return eo;
	}
	var shoplist=(o,fn)=>{
		var x=ll.shoplists[o.k],hd=pah('head',[xbut('xnewlist'),hea(5,[strong(x[OZ[0]],'green').e],'nomargin'),par([small(x[OZ[5]].f,'grey6').e])]),ws=sect('','pt-2'),rd=colbox('neuboy',6,7,9,12,[hd,ws],'bshadow2 rad-5 p-2 py-5 mt-3'),eo={e:rd,fx:myfx,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,f6:myf6,f7:myf7,f8:myf8,f9:myf9,f10:myf10,f11:myf11,f12:myf12,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;rd.style.minHeight='30em';myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf2();if(v==x[1])myf3();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};if(v==ar[8])ec={e:x9.e,v:v};if(v==ar[9])ec={e:x10.e,v:v};if(v==ar[10])ec={e:x0.e,v:v};APP(ws,ec.e);};function myf1(){x1=shoplist1(o,eo);myf0(ar[0]);};function myf2(){x2=listcharge(o,eo);myf0(ar[1]);};function myf3(v){};function myf4(v){};function myf5(){fn.f4(o);};function myf6(){};function myf7(){};function myf8(v){};function myf9(v){};function myf10(){};function myf11(){};function myf12(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xnewlist')myfx();});return eo;
	}
	var shoplists5=(fn)=>{
		var x=abortedlists(),ub=sect('','ohidden py-3'),ws=accordian4({px:true,o:{list5:{e:ub}},h:sect(),ho:{list5:[hea(5,[small('Aborted Lists','grey6').e],'nomargin')]},x:5}),rd=sect('','ohidden bshadow2 my-5','',[ws.e]),eo={e:rd};for(var i in x)APP(ub,myboy(i));function myf2(v){fn.f3({k:v});};function myboy(v){var v1=colbox('pad1',2,3,3,5,[hea(2,[icon2('cartdf','grey6')]),par([small(x[v].tag,'grey6').e],'nomargin'),par([small('N'+barme(x[v].total),'grey6').e],'nomargin'),par([small(username(x[v][OZ[1]]),'grey6').e])],'lfloat mx-2 mb-5 bshadow2 rad-5');addEvent(v1,'click',()=>{myf2(v);});return v1};return eo;
	}
	var shoplists4=(fn)=>{
		var x=deliveredlists(),ub=sect('','ohidden py-3'),ws=accordian4({px:true,o:{list4:{e:ub}},h:sect(),ho:{list4:[hea(5,[small('Delivered Lists','grey6').e],'nomargin')]},x:4}),rd=sect('','ohidden bshadow2 my-5','',[ws.e]),eo={e:rd};for(var i in x)APP(ub,myboy(i));function myf2(v){fn.f3({k:v});};function myboy(v){var v1=colbox('pad1',2,3,3,5,[hea(2,[icon2('cartdf','grey6')]),par([small(x[v].tag,'grey6').e],'nomargin'),par([small('N'+barme(x[v].total),'grey6').e],'nomargin'),par([small(username(x[v][OZ[1]]),'grey6').e])],'lfloat mx-2 mb-5 bshadow2 rad-5');addEvent(v1,'click',()=>{myf2(v);});return v1};return eo;
	}
	var shoplists3=(fn)=>{
		var x=paidlists(),ub=sect('','ohidden py-3'),ws=accordian4({px:true,o:{list2:{e:ub}},h:sect(),ho:{list2:[hea(5,[small('Paid Lists','grey6').e],'nomargin')]},x:3}),rd=sect('','ohidden bshadow2 my-5','',[ws.e]),eo={e:rd};for(var i in x)APP(ub,myboy(i));function myf2(v){fn.f3({k:v});};function myboy(v){var v1=colbox('pad1',2,3,3,5,[hea(2,[icon2('cartdf','grey6')]),par([small(x[v].tag,'grey6').e],'nomargin'),par([small('N'+barme(x[v].total),'grey6').e],'nomargin'),par([small(username(x[v][OZ[1]]),'grey6').e])],'lfloat mx-2 mb-5 bshadow2 rad-5');addEvent(v1,'click',()=>{myf2(v);});return v1};return eo;
	}
	var shoplists2=(fn)=>{
		var x=chargedlists(),ub=sect('','ohidden py-3'),ws=accordian4({px:true,o:{list2:{e:ub}},h:sect(),ho:{list2:[hea(5,[small('Charged Lists','grey6').e],'nomargin')]},x:2}),rd=sect('','ohidden bshadow2 my-5','',[ws.e]),eo={e:rd};for(var i in x)APP(ub,myboy(i));function myf2(v){fn.f3({k:v});};function myboy(v){var v1=colbox('pad1',2,3,3,5,[hea(2,[icon2('cartdf','grey6')]),par([small(x[v].tag,'grey6').e],'nomargin'),par([small('N'+barme(x[v].total),'grey6').e],'nomargin'),par([small(username(x[v][OZ[1]]),'grey6').e])],'lfloat mx-2 mb-5 bshadow2 rad-5');addEvent(v1,'click',()=>{myf2(v);});return v1};return eo;
	}
	var shoplists1=(fn)=>{
		var x=pendinglists(),ub=sect('','ohidden py-3'),ws=accordian4({px:true,o:{list1:{e:ub}},h:sect(),ho:{list1:[hea(5,[small('Pending Lists','grey6').e],'nomargin')]},x:1}),rd=sect('','ohidden bshadow2 my-5','',[ws.e]),eo={e:rd};for(var i in x)APP(ub,myboy(i));function myf2(v){fn.f3({k:v});};function myboy(v){var v1=colbox('pad1',2,3,3,5,[hea(2,[icon2('cartdf','grey6')]),par([small(x[v].tag,'grey6').e],'nomargin'),par([small('N'+barme(x[v].total),'grey6').e],'nomargin'),par([small(username(x[v][OZ[1]]),'grey6').e])],'lfloat mx-2 mb-5 bshadow2 rad-5');addEvent(v1,'click',()=>{myf2(v);});return v1};return eo;
	}
	var shopinglistshome=(fn)=>{
		var x1=shoplists1(fn),x2=shoplists2(fn),x3=shoplists3(fn),x4=shoplists4(fn),x5=shoplists5(fn),ws=sect('','ohidden py-2','',[x1.e,x2.e,x3.e,x4.e,x5.e]),rd=sect('','ohidden','',[ws]),eo={e:rd};return eo;
	}
	var shopinglists=(fn)=>{if(!ll.shoplists)ll.shoplists={};
		var x=('new exam scores').split(','),mn=popmenu({id:'nopad',a:x,k:[but('Tools','button','nopad','btn btn-sm btn-warning px-4 noline')],fnc:myfm}),hd=pah('head',[xbut('xshoplists'),hea(5,[strong('Shopping Lists','green').e])]),ws=sect('','pt-2'),rd=sect('','ohidden p-2 pt-5 mt-3','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,f6:myf6,f7:myf7,f8:myf8,f9:myf9,f10:myf10,f11:myf11,f12:myf12,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;lso=eo;rd.style.minHeight='30em';myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf2();if(v==x[1])myf3();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};if(v==ar[8])ec={e:x9.e,v:v};if(v==ar[9])ec={e:x10.e,v:v};if(v==ar[10])ec={e:x0.e,v:v};APP(ws,ec.e);};function myf1(){x1=shopinglistshome(eo);myf0(ar[0]);scrollup();};function myf2(){x2=newshoplist(eo);myf0(ar[1]);};function myf3(v){x3=shoplist(v,eo);myf0(ar[2],v);};function myf4(v){x4=pay4list(v,eo);myf0(ar[3]);};function myf5(){if(ec.v==ar[0])myf1();if(ec.v==ar[2]&&ec.k&&v&&ec.k.k==v)myf3(v);};function myf6(){};function myf7(){};function myf8(v){};function myf9(v){};function myf10(){};function myf11(){};function myf12(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xshoplists')myfx();});return eo;
	}
	var myorders3=(o)=>{
		var y=O1,a=o.o,ub=DIV('','row d-flex'),ws=colbox('nopad',12,12,12,12,[ub]),rd=sect('','p-2 mt-3 mb-4','',[hea(6,[strong(o.k,'grey6').e]),par('','mabot1'),ws]),eo={e:rd};if(!ocn(a))APP(ub,center([small('you currently have 0 orders','grey').e]).e);for(var i in a)APP(ub,myboy(i));function myboy(v){var vn=a[v][y[1]],vt='N'+barme(a[v][y[8]]),v1=colbox('pad1',2,3,3,5,[hea(1,[icon2('cartf','white')]),par([small(vn,'orange').e],'nomargin'),par([strong(vt,'white').e])],'bshadow2 dinline m-2 bg-dark');addEvent(v1,'click',(e)=>{myf1(v);});return v1;};function myf1(v){var v1={u:y[O1[0]],dt:a[v].tkey,m:a[v].dkey,ok:v,s:a[v][y[2]],t:a[v][y[3]]};o.fn.f2(v1);};return eo;
	}
	var myorders2=(o)=>{
		var a=o.o,ub=DIV('','row'),ws=colbox('nopad',12,12,12,12,[ub]),rd=sect('','p-4 mb-2 bshadow2','',[hea(5,[strong(o.k,'orange').e]),ws]),eo={e:rd};if(!ocn(a))APP(ub,center([small('There are currently 0 orders','grey').e]).e);for(var i in a)APP(ub,myorders3({k:i,o:a[i],fn:o.fn}).e);return eo;
	}
	var myorders1=(fn,u)=>{
		var x=ll[M4[9]],a=ll.users[u][F4[3]],uv=sect('','pt-5'),hd=pah('head',[hea(4,[small('Paid Orders','grey6').e])]),ws=sect('','','',[uv]),rd=sect('','mb-5','',[ws]),eo={e:rd};if(!ocn(x))APP(uv,center([small('no orders').e]).e);for(var i in a)APP(uv,myboy(i));function myf1(v){fn.f2(v);};function myboy(v){var v1=colbox('pad1',2,3,4,12,[hea(1,[icon2('cartf','purple')]),hea(5,[small(x[i].tag,'purple').e],'nomargin'),hea(6,[small((x[i].animal)?'Livestock':'Product','grey6').e],'nomargin'),hea(6,[small(x[i][O1[0]],'grey6').e],'nomargin')],'dinline');addEvent(v1,'click',()=>{myf1(v);});return v1;};return eo;
	}
	var userorders=(u)=>{
		var hd=pah('head',[hea(6,[strong('Orders','grey6').e],'nomargin')]),ws=colbox('topad2',12,12,12,12),rd=sect('','mt-5 p-3','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x10;myf1();function myfx(){fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};if(v==ar[8])ec={e:x9.e,v:v};if(v==ar[9])ec={e:x10.e,v:v};APP(ws,ec.e);};function myf1(){x1=myorders1(eo,u);myf0(ar[0]);};function myf2(v){x2=myorder(v,eo);myf0(ar[1]);};function myf3(v){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmyod')myfx();});return eo;
	}
	var gwaplogshome=(u,fn)=>{//clg(u)
		var x=L8,w=('fplnode,fminode').split(','),a=revob(ledge[L1[1]][u.k][PZ[3]]),q1=['bg-light',''],q2=q1[0],bd=tbod(),tb=etab('widthun','',[bd]),ws=colbox('pad2',12,12,12,12,[tb]),rd=sect('','','',[ws]),eo={e:rd};for(var i in a)APP(bd,myboy(i));function myf1(v){};function myboy(v){var vx=v.split('-')[0],v1,v2,v3,v4;switch(vx){case x[0]:v2='NGN'+barme(a[v][L6[1]]);break;case x[1]:v2='NGN'+barme(a[v][O1[3]]);break;};v1=$$$('tr','','bborder3 p-2','',[$$$('td','nopad','width2 px-2 tright pt-3 pb-2','',[hea(1,[(vx==x[0])?icon2(w[0],'green'):icon2(w[1],'grey6')],'nomargin')]),$$$('td','nopad','tleft pt-3 pb-2','',[par([small(vx,'grey','font10').e],'nomargin','tleft line1'),par([small(a[v].date.f,'grey6','font8').e],'nomargin','tleft line1')]),$$$('td','nopad','tright pt-3 pb-2','',[par([small(v2,'green','font9').e],'nomargin','line1')])]);q2=(q2==q1[0])?q1[1]:q1[0];return v1;};return eo;
	}
	var gwaplogs=(u,fn)=>{
		var hd=pah('head',[hea(6,[strong('Recent Transactions','grey').e],'nomargin')]),ws=sect('','p-1'),rd=sect('','mt-5','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfx(){fro[u].f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=gwaplogshome(u,eo);myf0(ar[0]);};function myf2(){x2=addgwap(u,eo);myf0(ar[1]);};function myf3(){};function myf4(){};function myf5(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmwall')myfx();});return eo;
	}
	var wallet1=(u,fn)=>{
		var ot=myoutstanding(u.u),ka=gwaplogs(u,fn),r=L7,q=['fplnode','people','fpeople'],x=ll.users[u.u][L1[1]][PZ[1]],z=ledge[L1[1]][x][PZ[8]][L2[0]],y=ledge[L1[1]][x],b1=sect('','py-2','',[par([but([hea(4,[icon2('rparrow','rkey1','white')],'rkey1','nomargin')],'button','rkey1','btn btn-sm nopad btn-link noline')])]),b2=sect('','','',[par([small('Balance','white').e],'nomargin'),hea(5,[strong('N'+barme(y[PZ[2]]),'white').e],'nomargin')]),b3=sect('','mt-3 py-2','',[par([small('Wallet Points','white').e],'nomargin'),hea(6,[strong((z)?z:'0','white').e],'nomargin','line1')]),b4=sect('','mt-3','',[par([small('Outstandings','white').e],'nomargin'),hea(6,[strong('N'+barme(ot),'white').e],'nomargin')]),bw=sect('','p-3','',[b1,b2,b3,b4]),bc=sect('','','',[bw]),ws=colbox('pad2',12,12,12,12,[bc,par([but('Wallet Logs','button','lkey',' white btn btn-sm btn-link px-4')],'','mt-3')]),rd=sect('','','',[sect('bimg5','rad1','',[sect('bred3','rad1 py-4','',[ws])]),par('','height2'),ka.e,par('','height2')]),eo={e:rd},st='';myf3();function myf1(v){if(v==r[0])fn.f2();};function myf2(){fn.fr();};function myf3(){st=(st)?'':'none';ka.e.style.display=st;}addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='rkey1')myf2();if(e.id=='lkey')myf3();});return eo;
	}
	var wallethome=(u,fn)=>{
		var x1=wallet1(u,fn),x2,ws=sect('','pt-3','',[x1.e,par('','heaight2')]),rd=sect('','','',[ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3},st='';function myf1(){};function myf2(){fn.f2();};function myf3(v){};return eo;
	}
	var mywallet=(u)=>{
		var kw=ll.users[u][L1[1]][PZ[1]],hd=pah('head',[hea(5,[strong('Wallet','blue').e],'nomargin')]),ws=sect('','p-1'),rd=sect('','p-2 mt-5','',[hd,ws]),eo={e:rd,fr:myfr,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfr(){if(ec.v==ar[0])myf1();};function myfx(){fro[u].f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=wallethome({k:kw,u:u},eo);myf0(ar[0]);};function myf2(){x2=addgwap({k:kw,u:u},eo);myf0(ar[1]);};function myf3(){};function myf4(){};function myf5(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmwall')myfx();});return eo;
	}
	var user=(s,fn)=>{
		var hd=pah('head',[xbut('xprofile'),hea(5,[strong('User Profile','blue').e],'nomargin')]),fw=colbox('profile-fw',12,12,12,12),ws=colbox('nopad',12,12,12,12),rd=colbox('pad1',12,12,12,12,[hd,ws]),pi=img('','profile-img'),eo={e:rd,f1:myf1},ar=['ovd','minf'],ec,x1,x2,x3,x4,x5,x6,y1,y2,y3,y4,y5,y6,w1,w2,w3,w4,w5;myf1();function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};APP(ws,ec.e);};function myfx(){fn.f1();};function myf1(){x1=userfront(s);myf0(ar[0]);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xprofile')myfx();});return eo;
	}
	var userfront=(s)=>{
		var a=ll.users,sr=(ocn(a[s].img))?a[s].img.off:'img/user.png',im=img(sr,'box5','img-fluid rounded-circle'),pi=proinfo(s),hd=pah('head',[im]),ws=colbox('nopad',12,12,12,12,[DIV('','row','',[pi.e,mywallet(s).e,userorders(s).e])]),rd=colbox('neuboy',12,12,12,12,[hd,ws]),eo={e:rd};return eo;
	}
	var proinfo=(u)=>{
		var a=ll.users[u].bd,b=F5,hd=pah('proinfo-hd',[hea(4,[strong('Your Information.').e],'proinfo-h1','text-success')]),ul=$$$('ul','nopad','form'),ia=['cperson','send','teleif'],ws=colbox('nopad',12,12,12,12,[ul]),rd=sect('','','',[ws]),eo={e:rd,o:{}},x1,x2,x3,x4,x5;for(var i in b)APP(ul,probox(i));function probox(v){y0=hea(6,[strong([icon2(ia[v],'blue')],'','').e,small(b[v].toUpperCase(),'blue').e],'nomargin',''),y1=small(a[b[v]],'grey6',''),x1=hea(6,[y1.e],'nomargin','',{title:b[v]}),x2=colbox('probox',12,12,12,12,[y0,x1],'mb-3');eo.o[b[v]]=y1;addEvent(x2,'click',(e)=>{e=ee(e);if(e.id=='proboxkey'||fada(e).id=='proboxkey')myf1(b[v]);});return x2;};return eo;
	}
	var users1=(fn)=>{
		var x=F4,a=ll.users,ub=DIV('','row'),ws=colbox('pad2',12,12,12,12,[ub]),rd=colbox('nopad',12,12,12,12,[ws]),eo={e:rd};if(!ocn(a))APP(ub,center('you currently have no user').e);for(var i in a)APP(ub,mybox(i));function mybox(v){var v0=img(((a[v][x[1]])?a[v][x[1]].off:'img/user.png'),'box4','img-fluid rounded-circle'),v1=colbox('pad5',2,3,4,5,[DIV('','card p-1 bg-dark text-start text-light','',[DIV('','card-title','',[v0]),DIV('','card-body pt-0','',[par(v,'font9')])])]);addEvent(v1,'click',()=>{myf1(v);});return v1;};function myf1(v){fn.f2b(v);};return eo;
	}
	var users=(fn)=>{
		var hd=pah('head',[xbut('xusers'),hea(3,[strong('Users','orange').e])]),ws=colbox('pad2',12,12,12,12),rd=colbox('pad2',12,12,12,12,[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f2b:myf2b,f3:myf3},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x10;myf1();function myfx(){fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};if(v==ar[8])ec={e:x9.e,v:v};if(v==ar[9])ec={e:x10.e,v:v};APP(ws,ec.e);};function myf1(){x1=users1(eo);myf0(ar[0]);};function myf2(){};function myf2b(v){x2=user(v,eo);myf0(ar[1]);};function myf3(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xusers')myfx();});return eo;
	}
	var order3=(k)=>{if(!ll[M4[9]][k].charges&&!ll[M4[9]][k].dropoint)return {e:par()};
		var a=ll[M4[9]][k],x=parse(a[O1[3]])+parse(a.charges),b=['dropoint','charges','total'],c=mrgar(b,[a[b[0]],'N'+barme(a[b[1]]),'N'+barme(x)]),ub=sect(),ws=sect('','','',[ub]),rd=sect('','pt-2','',[ws]),eo={e:rd};for(var i in c)APP(ub,sect('','mb-3','',[hea(6,[strong(i,'purple').e],'nomargin','line1'),par(c[i],'grey6')]));return eo;
	}
	var try2pickorder=(k,fn)=>{
		var w=ll[M4[9]][k],x=['dropoint','charges'],ul=phul(x,x,['text','number']),hd=pah('head',[xbut('xtp'),hea(4,[strong('Pick Order','purple').e]),hea(5,[small(w.tag,'blue').e])]),ws=sect('','','',[par('You are trying to pick '+w.tag+', which means you communicated and negotiated the delivery charges and dropoint with the customer. Please enter both details to pick this order'),ul.e]),rd=colbox('neuboy',6,7,8,12,[hd,ws,center([but('submit','button','tkey1','btn btn-lg btn-success px-5')]).e]),eo={e:rd},val=true;function myfx(){fn.f2(k);};function myf1(v){val=v;if(!v)return;var v1=fetchvalu(ul.o);pickorder({k:k,d:v1[x[0]],c:v1[x[1]]},fn)};function myf2(){if(val)return;resetkeys(ul.a,mrgar(x,x));val=true;};addEvent(rd,'keydown',(v)=>{var e=v.key,ev=v.code;if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf1);if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='tkey1')validate(ul.o,ul.a,myf1);if(e.id=='xtp')myfx();});return eo;
	}
	var order2=(u)=>{
		var a=ll.users[u].bd,x=['username','email','phone number'],b=mrgar(x,[a[x[0]],a[x[1]],a[x[2]]]),hd=pah('head',[hea(6,[strong('Customer Details','white').e],'','mb-3')]),ub=sect(),ws=sect('','','',[ub]),rd=sect('','p-3 bpurple','',[hd,ws]),eo={e:rd};for(var i in b)APP(ub,sect('','mb-3','',[hea(6,[strong(i,'white').e],'nomargin','line1'),par(b[i],'white')]));return eo;
	}
	var order1=(k)=>{
		var x1=order3(k),x=ll[M4[9]][k],xx=x[O1[1]],a=(x.animal)?mrgar(M11,[xx[M11[0]],xx[M11[1]],xx[M11[2]],xx[M11[3]],xx[M11[4]],'N'+barme(xx[M11[5]]),(x[M11[6]])?x[M11[6]]:1,x[O1[5]]]):mrgar(M10,[xx[M10[0]],xx[M10[1]],xx[M10[2]],'N'+barme(xx[M10[3]]),(x[M10[4]])?x[M10[4]]:1,x[O1[5]]]),hd=pah('head',[hea(5,[small('Order Details','purple').e],'nomargin','mt-3 mb-3')]),ub=sect(),ws=sect('','','',[ub,x1.e]),rd=sect('','pt-2','',[hd,ws]),eo={e:rd};for(var i in a)APP(ub,sect('','mb-3','',[hea(6,[strong(i,'purple').e],'nomargin','line1'),par(a[i],'grey6')]));return eo;
	}
	var order=(k,fn)=>{
		var x=ll[M4[9]][k],a=x[O1[1]],is=(ocn(a[M7[0]]))?a[M7[0]].off:'img/bag2.jpeg',im=img(is,'','mt-2 img-fluid mb-2'),hd=pah('head',[xbut('xorder'),hea(3,[strong(x.tag,'grey6').e]),im]),ub=order1(k),bu=order2(x[O1[0]]),ws=sect('','mb-4','',[ub.e,bu.e]),rd=colbox('neuboy',6,7,8,12,(x[O1[5]]==F7[0])?[hd,ws,center([but('pick','button','pkey1','btn btn-success px-5')]).e]:[hd,ws]),eo={e:rd};function myfx(){fn.f1();};function myf1(){fn.f3(k);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xorder')myfx();if(e.id=='pkey1')myf1();});return eo;
	}
	var orders3=(fn)=>{
		var x=myxed(),uv=sect('','pt-5'),hd=pah('head',[hea(4,[small('canceled Orders','grey6').e])]),ws=sect('','','',[uv]),rd=sect('','','',[hd,ws]),eo={e:rd};if(!ocn(x))APP(uv,center([small('no canceled orders').e]).e);for(var i in x)APP(uv,myboy(i));function myf1(v){fn.f2(v);};function myboy(v){var v1=colbox('pad1',2,3,4,12,[hea(1,[icon2('cartf','purple')]),hea(5,[small(x[i].tag,'purple').e],'nomargin'),hea(6,[small((x[i].animal)?'Livestock':'Product','grey6').e],'nomargin'),hea(6,[small(x[i][O1[0]],'grey6').e],'nomargin')],'dinline');addEvent(v1,'click',()=>{myf1(v);});return v1;};return eo;
	}
	var orders5=(fn)=>{
		var x=mydeli(),uv=sect('','pt-5'),hd=pah('head',[hea(4,[small('Delivered Orders','grey6').e])]),ws=sect('','','',[uv]),rd=sect('','mb-5','',[hd,ws]),eo={e:rd};if(!ocn(x))APP(uv,center([small('no delivered orders').e]).e);for(var i in x)APP(uv,myboy(i));function myf1(v){fn.f2(v);};function myboy(v){var v1=colbox('pad1',2,3,4,12,[hea(1,[icon2('cartf','purple')]),hea(5,[small(x[i].tag,'purple').e],'nomargin'),hea(6,[small((x[i].animal)?'Livestock':'Product','grey6').e],'nomargin'),hea(6,[small(x[i][O1[0]],'grey6').e],'nomargin')],'dinline');addEvent(v1,'click',()=>{myf1(v);});return v1;};return eo;
	}
	var orders4=(fn)=>{
		var x=mypaids(),uv=sect('','pt-5'),hd=pah('head',[hea(4,[small('Paid Orders','grey6').e])]),ws=sect('','','',[uv]),rd=sect('','mb-5','',[hd,ws]),eo={e:rd};if(!ocn(x))APP(uv,center([small('no paid orders').e]).e);for(var i in x)APP(uv,myboy(i));function myf1(v){fn.f2(v);};function myboy(v){var v1=colbox('pad1',2,3,4,12,[hea(1,[icon2('cartf','purple')]),hea(5,[small(x[i].tag,'purple').e],'nomargin'),hea(6,[small((x[i].animal)?'Livestock':'Product','grey6').e],'nomargin'),hea(6,[small(x[i][O1[0]],'grey6').e],'nomargin')],'dinline');addEvent(v1,'click',()=>{myf1(v);});return v1;};return eo;
	}
	var orders2=(fn)=>{
		var x=mypicked(),uv=sect('','pt-5'),hd=pah('head',[hea(4,[small('Picked Orders','grey6').e])]),ws=sect('','','',[uv]),rd=sect('','mb-5','',[hd,ws]),eo={e:rd};if(!ocn(x))APP(uv,center([small('no picked orders').e]).e);for(var i in x)APP(uv,myboy(i));function myf1(v){fn.f2(v);};function myboy(v){var v1=colbox('pad1',2,3,4,12,[hea(1,[icon2('cartf','purple')]),hea(5,[small(x[i].tag,'purple').e],'nomargin'),hea(6,[small((x[i].animal)?'Livestock':'Product','grey6').e],'nomargin'),hea(6,[small(x[i][O1[0]],'grey6').e],'nomargin')],'dinline');addEvent(v1,'click',()=>{myf1(v);});return v1;};return eo;
	}
	var orders2=(fn)=>{
		var x=mypicked(),uv=sect('','pt-5'),hd=pah('head',[hea(4,[small('Picked Orders','grey6').e])]),ws=sect('','','',[uv]),rd=sect('','mb-5','',[hd,ws]),eo={e:rd};if(!ocn(x))APP(uv,center([small('no picked orders').e]).e);for(var i in x)APP(uv,myboy(i));function myf1(v){fn.f2(v);};function myboy(v){var v1=colbox('pad1',2,3,4,12,[hea(1,[icon2('cartf','purple')]),hea(5,[small(x[i].tag,'purple').e],'nomargin'),hea(6,[small((x[i].animal)?'Livestock':'Product','grey6').e],'nomargin'),hea(6,[small(x[i][O1[0]],'grey6').e],'nomargin')],'dinline');addEvent(v1,'click',()=>{myf1(v);});return v1;};return eo;
	}
	var orders1=(fn)=>{
		var x=mypendings(),uv=sect('','pt-5'),hd=pah('head',[hea(4,[small('Pending Orders','grey6').e])]),ws=sect('','','',[uv]),rd=sect('','mb-5','',[hd,ws]),eo={e:rd};if(!ocn(x))APP(uv,center([small('no pending orders').e]).e);for(var i in x)APP(uv,myboy(i));function myf1(v){fn.f2(v);};function myboy(v){var v1=colbox('pad1',2,3,4,12,[hea(1,[icon2('cartf','purple')]),hea(5,[small(x[i].tag,'purple').e],'nomargin'),hea(6,[small((x[i].animal)?'Livestock':'Product','grey6').e],'nomargin'),hea(6,[small(x[i][O1[0]],'grey6').e],'nomargin')],'dinline');addEvent(v1,'click',()=>{myf1(v);});return v1;};return eo;
	}
	var ordershome=(fn)=>{
		var x1=orders1(fn),x2=orders2(fn),x3=orders3(fn),x4=orders4(fn),x5=orders5(fn),ws=sect('','pt-3','',[x1.e,par('','height2'),x2.e,par('','height2'),x4.e,par('','height2'),x5.e,par('','height2'),x3.e]),rd=sect('','pt-5','',[ws]),eo={e:rd};return eo;
	}
	var myorders=(fn)=>{
		var x=('sales,more').split(','),mn=popmenu({id:'nopad',a:x,k:[but('Tools','button','','mb-3 btn btn-md btn-success bwhite green py-0 noline')],fnc:myfm}),hd=pah('head',[xbut('xmp'),hea(5,[strong('Orders','grey6','underline').e]),mn.e]),ws=sect(),rd=sect('','p-2 pb-5 mb-5 pt-4 ohidden','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;mdo=eo;myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf2();if(v==x[1])myf3();};function myf0(v,k){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};if(k)ec.k=k;APP(ws,ec.e);};function myf1(){x1=ordershome(eo);myf0(ar[0]);};function myf2(v){x2=order(v,eo);myf0(ar[1],v);};function myf3(v){x3=try2pickorder(v,eo);myf0(ar[2]);};function myf4(v){};function myf5(v){if(ec.v==ar[0])myf1();if(ec.k&&ec.k==v)myf2(v);};function myf6(){};function myf7(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmp')myfx();});return eo;
		
	}
	var alivepopular1=(k,fn)=>{
		var a=ll[M4[7]][k][M5[3]],z='apop1',ub=DIV('flush-collapse'+z,'accordion-collapse collapse p-3','',[]),co=DIV('','accordion accordion-flush','',[DIV('','accordion-item','',[hea(2,[but(k,'button','','accordion-button collapsed',{'data-bs-toggle':'collapse','data-bs-target':'#flush-collapse'+z})],'flush-heading'+z,'accordion-header'),ub])]),ws=cont('','','',[co]),rd=sect('','mb-3','',[ws]),eo={e:rd},o={};for(var i in a)APP(ub,myboy(i));function myboy(v){var vx=(ocn(a[v][M7[0]]))?a[v][M7[0]].off:'img/sign.jpg',v1=sect('','mb-2 p-2 widthun ohidden','',[figure('figure1','',{style:'width:3em;overflow:hidden;'},[img(vx,'','img-fluid w-100')]),DIV('','item-des-1 pt-1','',[hea(5,[small(v,'grey6').e],'nomargin')])]);addEvent(v1,'click',()=>{myf1(v1,v);});return v1;};function myf1(e,v){var v1='';if(!o[v]){v1='#e7dad0';o[v]=true;fn.f2({p:k,k:v});}else{delete o[v];v1='';fn.f3(v);};e.style.background=v1;};return eo;
	}
	var addlivepopular=(fn)=>{
		var a=revob(ll[M4[7]]),hd=pah('head',[xbut('xap'),hea(3,[small('add popular item','grey6').e])]),ws=sect('','pt-3'),rd=colbox('neuboy',8,9,10,12,[hd,ws,center([but('submit','button','akey1','btn btn-sm btn-warning white mt-4 px-5 py-1')]).e]),ap={},eo={e:rd,f2:myf2,f3:myf3};for(var i in a)APP(ws,apopular1(i,eo).e);function myfx(){fn.f1();};function myf1(){if(!ocn(ap)){flashbox('please select at least one item to submit!!!','',true);return;};newpopular(ap);myfx();};function myf2(v){if(!ap[v])ap[v.k]=v;};function myf3(v){if(ap[v])delete ap[v];};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xap')myfx();if(e.id=='akey1')myf1();});return eo;
	}
	var livepopularhome=()=>{
		var x=revob(ll.popular),ws=sect('','pt-3'),rd=sect('','','',[ws]),eo={e:rd};if(!ocn(x))APP(ws,center([small('you neva add popular item','grey').e]).e);for(var i in x)APP(ws,popuitem2({k:x[i][M5[0]],p:x[i][A6[2]]}).e);return eo;
	}
	var livepopularitems=(fn)=>{
		var x=('add item,delete item').split(','),mn=popmenu({id:'nopad',a:x,k:[but('Tools','button','','btn btn-md btn-success bwhite green py-0 noline mb-3')],fnc:myfm}),hd=pah('head',[xbut('xpop'),hea(5,[strong('Popular Items','grey6','underline').e],'nomargin'),mn.e]),ws=sect(),rd=sect('','p-2 mt-5 shadow','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f5:myf5,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0,fk=input('','',{type:'file'});rd.style.minHeight='25em';myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf2();if(v==x[1])fk.click();if(v==x[2])myf3(M5[0]);if(v==x[3])myf3(M5[1]);};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=popularhome(eo);myf0(ar[0]);};function myf2(){x2=addpopular(eo);myf0(ar[1]);};function myf3(){x3=rmvpopular();myf0(ar[2]);};function myf4(){};function myf5(v){};function myf6(){};function myf7(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xpop')myfx();});return eo;
		
	}
	var livepopuitem2=(o)=>{
		var x=M7,a=ll[M4[7]][o.p][M5[3]][o.k],ix=a[x[0]],is=(ocn(ix))?ix.off:'img/sign.jpg',im=img(is,'','img-fluid rounded-2'),rd=colbox('nopad',2,3,3,5,[im,DIV('','p-2 px-3 mb-2','',[hea(6,[small(o.k,'grey6').e],'','fw-bold font15 text-truncate'),hea(6,[small(a[x[2]],'grey6','font10').e]),par('N'+barme(a[x[3]]),'orange','fony10 fw-bold text-1000 mt-3')])],'m-3 mb-5 bwhite pb-4 mb-4 dinline mb-5 h-100'),eo={e:rd};return eo;
	}
	var livepopuitem=(o)=>{
		var cc=(o.c)?' '+o.c:'',x=M7,a=ll[M4[7]][o.p][M5[3]][o.k],ix=a[x[0]],is=(ocn(ix))?ix.off:'img/sign.jpg',im=img(is,'','widthun img-fluid'),ub=sect('maskbg','pb-5 pabsolute bot0 widthun h-100 text-justify text-center','',[DIV('pabsolute','widthun p-2 pb-5 px-3',{style:'bottom:30%'},[hea(1,[small(o.k,'white').e],'','fw-bold text-truncate'),hea(3,[small(a[x[2]],'white','lead').e]),hea(1,[strong('N'+barme(a[x[3]])).e],'white','fw-bold text-1000 mt-3')])]),bu=colbox('nopad',12,12,12,12,[im,ub]),rd=DIV('','white '+cc,'',[bu]),eo={e:rd};return eo;
	}
	var livepopularsel=(fn)=>{if(!ll.popular)ll.popular={};
		var x=revob(ll.popular),u=cta(x),ux=true,px=1,ub=DIV('','carousel-inner'),ic=DIV('','carousel-indicators'),pk=but([span('','','carousel-control-prev-icon',{'aria-hidden':'true'}),span('Previous','','visually-hidden')],'button','','carousel-control-prev',{'data-bs-target':'#header-carousel','data-bs-slide':'prev'}),nk=but([span('','','carousel-control-next-icon',{'aria-hidden':'true'}),span('Next','','visually-hidden')],'button','','carousel-control-next',{'data-bs-target':'#header-carousel','data-bs-slide':'next'}),ws=DIV('header-carousel','carousel slide',{'data-bs-ride':'carousel'},[ub,pk,nk,ic]),rd=DIV('','p-0 mb-5 mt-4 ohidden','',[ws]),eo={e:rd};APP(ub,myboy(0,'carousel-item active'));for(var i=1;i<ocn(u);i++){APP(ub,myboy(i,'carousel-item'));APP(ic,mybo2(i,'carousel-item'));};function myboy(v,k){var vx={c:k,k:x[u[v]][M5[0]],p:x[u[v]][A6[2]],lt:ux},v1=popuitem(vx,fn);ux=(ux)?false:true;return v1.e;};function myboy2(v){var vx=(ocn(x[v][M7[0]]))?x[v][M7[0]].off:'img/sign.jpg',v1=but([img(vx,'','d-block w-100 shadow-1-strong rounded')],'button','mwidth5','',{'data-mdb-target':'#header-carousel','data-mdb-slide-to':px});px++;return v1;};return eo;
	}
	var livepopularfront=()=>{if(!ll.popular)ll.popular={};
		var hd=pah('head',[center([hea(3,[strong('Popular Items','orange').e])]).e]),ws=sect('','','',(ocn(ll.popular))?[popularsel().e]:[center([small('you neva add popular Items.','grey').e]).e]),rd=sect('','mt-5','',[colbox('neuboy',7,9,10,12,[hd,ws],'px-0')]),eo={e:rd};rd.style.minHeight='25em';return eo;
	}
	var newlivei=(u,k,fn,ff)=>{
		var g=['name','description'],x=clonetxt(ll[M4[7]][u.p][k]),y=['current '+k,'new '+k],z='',q=(()=>{switch(k){case g[0]:z='username';break;case g[1]:z='text';break;};})(),ul=phul(y,y,[z,z]),hd=pah('hea',[xbut('xnewpro'),hea(5,[small(u.p+' Details Mod','orange').e],'nomargin'),hea(3,[small('change '+k,'blue').e])]),ws=sect('','p-2 mt-3','',[ul.e]),rd=colbox('neuboy',8,9,10,12,[hd,ws,center([but('submit','button','nkey1','btn btn-sm btn-success px-5')]).e]),eo={e:rd},val=true;function myfx(){fn.f1();};function myf1(v){val=v;if(!v)return;var v1=fetchvalu(ul.o),v2={k:k,x:v1[y[0]],nv:v1[y[1]],p:u.p};if((k==g[2]&&parse(v2.x)!=parse(x))||(k!=g[2]&&v2.x!=x)){redtxt(ul.a[y[0]],'invalid '+k+'!!');val=false;return;};if(v2.n==v2.x){redtxt(ul.a[y[0]],'you can\'t enter the same '+k);redtxt(ul.a[y[1]],'you can\'t enter the same '+k);val=false;return;};newproinfo(v2,ff);if(k!=g[0])myfx();};function myf2(){if(val)return;resetkeys(ul.a,mrgar(y,y));val=true;};addEvent(rd,'keydown',(v)=>{var e=v.key,ev=v.code;if(!val)myf2();if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf1);if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(!val)myf2();if(e.id=='nkey1')validate(ul.o,ul.a,myf1);if(e.id=='xnewpro')myfx();});return eo;
	}
	var newlivesi=(u,k,fn,ff)=>{
		var g=M9,x=clonetxt(ll.livestocks[u.p][M5[3]][u.k][k]),y=['current '+k,'new '+k],z='',q=(()=>{switch(k){case g[0]:z='username';break;case g[1]:z='text';break;case g[2]:z='number';break;case g[3]:z='username';break;case g[4]:z='number';break;};})(),ul=phul(y,y,[z,z]),hd=pah('head',[xbut('xnewpro'),hea(5,[small(u.k+' Details Mod','orange').e],'nomargin'),hea(3,[small('change '+k,'blue').e])]),ws=sect('','p-2 mt-3','',[ul.e]),rd=colbox('neuboy',8,9,10,12,[hd,ws,center([but('submit','button','nkey1','btn btn-sm btn-success px-5')]).e]),eo={e:rd},val=true;function myfx(){fn.f1();};function myf1(v){val=v;if(!v)return;var v1=fetchvalu(ul.o),v2={k:k,x:v1[y[0]],nv:v1[y[1]],p:u.p,i:u.k};if((k==g[2]&&parse(v2.x)!=parse(x))||(k!=g[2]&&v2.x!=x)){redtxt(ul.a[y[0]],'invalid '+k+'!!');val=false;return;};if(v2.n==v2.x){redtxt(ul.a[y[0]],'you can\'t enter the same '+k);redtxt(ul.a[y[1]],'you can\'t enter the same '+k);val=false;return;};newlivesinfo(v2,ff);if(k!=g[0]||(k==g[0]&&v2.n!=v2.x))myfx();};function myf2(){if(val)return;resetkeys(ul.a,mrgar(y,y));val=true;};addEvent(rd,'keydown',(v)=>{var e=v.key,ev=v.code;if(!val)myf2();if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf1);if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(!val)myf2();if(e.id=='nkey1')validate(ul.o,ul.a,myf1);if(e.id=='xnewpro')myfx();});return eo;
	}
	var livecover1=(o,fn)=>{
		var w=M9,g=['change image','edit name','edit description','edit age','edit breed','edit price','delete '+o.k,'more pictures'],mn=popmenu({id:'nopad',a:g,k:[but('Tools','button','','btn btn-sm btn-warning widthun white py-1 noline')],fnc:myfm}),x=M8,a=ll.livestocks[o.p][M5[3]][o.k],vv=(a.more_pix&&ocn(a.more_pix))?mypics(o,true):'',ix=a[x[0]],is=(ocn(ix))?ix.off:'img/sign.jpg',im=(vv)?itemsel(vv,fn).e:img(is,'','img-fluid rounded-2'),rd=colbox('nopad',4,4,5,5,[im,DIV('','p-2 px-3 mb-2','',[sect('','py-1','',[par([strong(cleaname(w[0]),'grey6').e],'nomargin'),hea(5,[small(o.k,'grey6').e],'nomargin','text-truncate'),hea(6,[small(a[w[1]],'grey6').e],'nomargin')]),sect('','py-1','',[par([strong(cleaname(w[2]),'grey6').e],'nomargin'),hea(6,[small(a[w[2]],'grey6').e])]),sect('','py-1','',[par([strong(cleaname(w[3]),'grey6').e],'nomargin'),hea(6,[small(a[w[3]],'grey6',).e],'nomargin')]),sect('','py-1','',[par([strong(cleaname(w[4]),'grey6').e],'nomargin'),par('N'+barme(a[w[4]]),'orange','fw-bold text-1000')])]),center([mn.e]).e],'m-3 mb-5 bwhite pb-4 mb-4 dinline mb-5 h-100'),eo={e:rd},fk=input('','',{type:'file'});function myfm(v){if(v==g[0])fk.click();;if(v==g[1])myf2(w[0]);if(v==g[2])myf2(w[1]);if(v==g[3])myf2(w[2]);if(v==g[4])myf2(w[3]);if(v==g[5])myf2(w[4]);if(v==g[6])myf3();if(v==g[7])myf4();};function myf1(){var v1=this.files[0],v2=fileinfo(v1),v3=v2.type.split('/')[0],v4={off:URL.createObjectURL(v1),info:v2,name:v2.name,ani_pic:true,p:o.p,i:o.k},v5,v6={k:o.k,p:o.p,o:v4};if(v3!='image'){alert(v2.name+' is not a image!!');return;};im.src=v4.off;ll.livestocks[o.p][M5[3]][o.k][M7[0]]=v4;uploadfile({f:{i:'pic',f:v1},o:{i:'ob',o:v6},fnc:'',call:'/animalpix'});};function myf2(v){clg(v);fn.f5({o:o,k:v});};function myf3(){fn.f7(o);};function myf4(){fn.f6(o.k)};addEvent(fk,'change',myf1);return eo;
	}
	var picturesbox=(o)=>{
		var a=cloneo(o.o),b=(()=>{if(o.k)a['pix-'+datemap().key]={off:o.k};})(),ws=sect('','pt-3'),rd=sect('','','',[ws]),eo={e:rd};for(var i in revob(a))APP(ws,myboy(i));function myboy(v){var v1=colbox('nopad',6,6,12,12,[img(a[v].off,'widthun','img-fluid mb-2')],'dinline p-2 mb-4');return v1;};return eo;
	}
	var morepixhome2=(o)=>{
		var a=ll.livestocks[o.p][M5[3]][o.k],x,x1=(ocn(a[M7[0]]))?a[M7[0]].off:'img/sign.jpg',x2=picturesbox({k:(ocn(a[M7[0]]))?x1:'',o:(a.more_pix&&ocn(a.more_pix))?a.more_pix:{}}),ws=sect('','pt-3','',[x2.e]),rd=sect('','','',[ws]),eo={e:rd};return eo;
	}
	var morepix2=(o,fn)=>{
		var x=('new picture,delete image').split(','),mn=popmenu({id:'nopad',a:x,k:[but('Tools','button','','btn btn-md btn-success bwhite green py-0 noline mb-3')],fnc:myfm}),hd=pah('head',[xbut('xmpbx'),hea(4,[small('More Pictures','grey6').e],'nomargin'),hea(5,[strong(o.k,'grey6','underline').e],'nomargin'),mn.e]),ws=sect(),rd=sect('','p-2 mt-5 shadow','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f5:myf5,f6:myf6,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0,fk=input('','',{type:'file'});myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf3();if(v==x[1])myf2()};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=morepixhome2(o,eo);myf0(ar[0]);};function myf2(){x2=popix(o,eo);myf0(ar[1]);};function myf3(v){var a=ll.livestocks[o.p][M5[3]][o.k];if(a.more_pix&&ocn(a.more_pix)>3)return;fk.click();};function myf4(){var v1=this.files[0],v2=fileinfo(v1),v3=v2.type.split('/')[0],v7='pix-'+datemap().key,v4={off:URL.createObjectURL(v1),info:v2,name:v2.name,item_pix:true,p:o.p,i:o.k,key:v7},v5,v6={p:o.p,i:o.k,pk:v7,o:v4,live:true};if(v3!='image'){alert(v2.name+' is not a image!!');return;};if(!ll.livestocks[o.p][M5[3]][o.k].more_pix)ll.livestocks[o.p][M5[3]][o.k].more_pix={};ll.livestocks[o.p][M5[3]][o.k].more_pix[v7]=v4;uploadfile({f:{i:'pic',f:v1},o:{i:'ob',o:v6},fnc:myf1,call:'/more_pix'});};function myf5(v){};function myf6(v){};function myf7(){};addEvent(fk,'change',myf4);addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmpbx')myfx();});return eo;
	}
	var newlives=(k,fn)=>{
		var a=M9,b=['Enter '+a[0],'Enter '+a[1],'Enter '+a[2],'Enter '+a[3],'Enter '+a[4]],at=inputpar({ty:'number',t:'enter least quatity',k:'pad1',i:'grey6'}),ul=phul(a,b,['username','text','text','username','number']),hd=pah('head',[xbut('xnitm'),hea(4,[strong('New Animal','grey6').e])]),ws=sect('','','',[ul.e,at.e]),rd=colbox('neuboy',8,9,10,12,[hd,ws,center([but('submit','button','key1','btn btn-sm btn-success px-5 py-1 mt-4')]).e]),eo={e:rd},val=true;function myfx(){fn.f1();};function myf1(v){val=v;if(!v)return;var v1=fetchvalu(ul.o),v2=mrgar(M8,['',v1[a[0]],v1[a[1]],v1[a[2]],v1[a[3]],v1[a[4]],k,datemap()]),v3=at.s.value;if(v3)v2.least=v3;v2.animal=true;if(ll.livestocks[k][M5[3]][v1[a[0]]]){redtxt(ul.a[a[0]],'Animal already exist!!!');val=false;return;};ll.livestocks[k][M5[3]][v1[a[0]]]=v2;socket.emit('newlives',{p:k,n:v1[a[0]],o:v2});flashbox('new Animal added successfully..');myfx();};function myf2(){if(val)return;resetkeys(ul.a,mrgar(a,b));val=true;};addEvent(rd,'keydown',(v)=>{var e=v.code,ev=v.key;if(!val)myf2();if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf1);if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(!val)myf2();if(e.id=='key1')validate(ul.o,ul.a,myf1);if(e.id=='xnitm')myfx();});return eo;
	}
	var livestockhome=(k,fn)=>{
		var o=ll.livestocks[k],a=M5,x=o[a[3]],sr=(o[a[2]])?o[a[2]].off:'img/bag2.jpeg',im=img(sr,'','img-fluid width5'),hd=pah('head',[im,par(o[a[1]],'grey6')]),ub=sect('','widthun bg-light pt-3'),ws=sect('','ohidden','',[ub]),rd=sect('','ohidden animated slideInUp','',[hd,ws]),eo={e:rd};ub.style.minHeight='20em';for(var i in x)APP(ub,livecover1({p:k,k:i},fn).e);return eo;
	}
	var livestockbox=(k,fn)=>{
		var x=('new animal,change image,edit name,edit description,delete '+k).split(','),mn=popmenu({id:'nopad',a:x,k:[but('Tools','button','','btn btn-md btn-success bwhite green py-0 noline mb-3')],fnc:myfm}),hd=pah('head',[xbut('xpbx'),hea(5,[strong(k,'grey6','underline').e],'nomargin'),mn.e]),ws=sect(),rd=sect('','p-2 mt-5 shadow','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f5:myf5,f6:myf6,f7:myf7,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0,fk=input('','',{type:'file'});myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf2();if(v==x[1])fk.click();if(v==x[2])myf3(M5[0]);if(v==x[3])myf3(M5[1]);};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=livestockhome(k,eo);myf0(ar[0]);};function myf2(){x2=newlives(k,eo);myf0(ar[1]);};function myf3(v){x3=newlivei({p:k},v,eo,fn);myf0(ar[2]);};function myf4(){var v1=this.files[0],v2=fileinfo(v1),v3=v2.type.split('/')[0],v4={off:URL.createObjectURL(v1),info:v2,name:v2.name,prod_pic:true,p:k},v5,v6={p:k,o:v4};if(v3!='image'){alert(v2.name+' is not a image!!');return;};ll.livestocks[k][M5[2]]=v4;uploadfile({f:{i:'pic',f:v1},o:{i:'ob',o:v6},fnc:myf1,call:'/livepic'});};function myf5(v){x5=newlivesi(v.o,v.k,eo,fn);myf0(ar[4]);};function myf6(v){x6=morepix2({p:k,k:v},eo);myf0(ar[5]);};function myf7(v){x7=check2pop(v,eo,true);myf0(ar[6]);};addEvent(fk,'change',myf4);addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xpbx')myfx();});return eo;
		
	}
	var livecover=(o,fn)=>{
		var a=M5,sr=(o[a[2]])?o[a[2]].off:'img/bag2.jpeg',hp=img(sr,'','img-fluid w-100'),hd=sect('maskbg','p-3 pt-4 pabsolute bot0 widthun','',[sect('','mnheight6 widthun','',[hea(3,[small(o[a[0]],'white').e],'','text-1000'),par([small(o[a[1]],'white').e],'nomargin','line1')])]),rd=colbox('nopad',3,4,5,12,[hp,hd],'bshadow2 bg-image prelate dinline m-2 animated zoomIn',{style:'max-height:18em;overflow:hidden'}),eo={e:rd};function myf1(){fn.f4(o[a[0]]);};addEvent(rd,'click',myf1);return eo;
	}
	var newlivestock=(fn)=>{
		var a=[M5[0],M5[1]],b=['Enter livestock name','Enter a brief livestock description'],ul=phul(a,b,['username','text']),hd=pah('head',[xbut('xnp'),hea(4,[strong('New Livestock','grey6').e])]),ws=sect('','','',[ul.e]),rd=colbox('neuboy',8,9,10,12,[hd,ws,center([but('submit','button','key1','btn btn-sm btn-success px-5 py-1')]).e]),eo={e:rd},val=true;function myfx(){fn.f1();};function myf1(v){val=v;if(!v)return;var v1=fetchvalu(ul.o),v2=mrgar(M5,[v1[a[0]],v1[a[1]],'',{},datemap()]);v2.animal=true;if(ll.livestocks[v1[a[0]]]){redtxt(ul.a[a[0]],'livestock already exist!!!');val=false;return;};ll.livestocks[v1[a[0]]]=v2;socket.emit('newlive',{p:v1[a[0]],k:v2});flashbox('new livestock added successfully..');myfx();};function myf2(){if(val)return;resetkeys(ul.a,mrgar(a,b));val=true;};addEvent(rd,'keydown',(v)=>{var e=v.code,ev=v.key;if(!val)myf2();if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf1);if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(!val)myf2();if(e.id=='key1')validate(ul.o,ul.a,myf1);if(e.id=='xnp')myfx();});return eo;
	}
	var rmvlivestock=(fn)=>{
		var a=ll.livestocks,ul=selul(a,'#f90600','#fff'),hd=pah('head',[xbut('rmvp'),hea(4,[strong('Remove Products','red').e],'nomargin'),par([small('select the product(s) You want to remove. But do note that deleting a product will delete all the items under the product as well and this cannot be undone.').e])]),ws=sect('','pt-3','',[ul.e]),rd=colbox('neuboy',6,7,9,11,[hd,ws,center([but('submit','button','dkey1','btn btn-md btn-danger fw-light px-5')]).e]),eo={e:rd};function myf1(){var v1=ul.f2();if(!ocn(v1)){flashbox('you did not select any product!!!','',true);return;};poplives(v1,fn);};function myfx(){fn.f1();};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xrmvp')myfx();if(e.id=='dkey1')myf1();});return eo;
	}
	var livestockshome=(fn)=>{
		var a=ll.livestocks,f1=sect('','p-3 pt-5 page-header-inner d-md-flex text-center text-md-start','',[img('img/item.png','rad1','w-100 mwidth50 img-fluid d-lg-none d-md-none d-sm-block animated zoomIn'),DIV('','pb-5 p-2','',[hea(1,[strong('Your Livestocks Catalogue.','white').e],'','animated slideInUp'),par([small('You can go straight to creating new Livestock Catalogues, the sytem format for adding what your selling is LIVESTOCK -->> ANIMAL, where livestock is the root catalogue and under the livestock is where you add the animal you are trying to sell..','white','lead').e],'','animated slideInUp')]),img('img/item.png','rad1','w-50 ip-2 mg-fluid d-none d-md-block mwidth50 d-sm-none animated zoomIn')]),ub=sect('','p-2'),ws=sect('','','',[sect('','mb-3 bimg2','',[f1]),ub]),rd=sect('','','',[ws]),eo={e:rd};for(var i in a)APP(ub,livecover(a[i],fn).e);return eo;
	}
	var mylivestocks=(fn)=>{if(!ll.livestocks)ll.livestocks={};
		var x=('new livestock,delete livestock').split(','),mn=popmenu({id:'nopad',a:x,k:[but('Tools','button','','mb-3 btn btn-md btn-success bwhite green py-0 noline')],fnc:myfm}),hd=pah('head',[xbut('xmp'),hea(5,[strong('Livestocks','grey6','underline').e]),mn.e]),ws=sect(),rd=sect('','p-2 pt-4 ohidden','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf2();if(v==x[1])myf3();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=livestockshome(eo);myf0(ar[0]);};function myf2(){x2=newlivestock(eo);myf0(ar[1]);};function myf3(){x3=rmvlivestock(eo);myf0(ar[2]);};function myf4(v){x4=livestockbox(v,eo);myf0(ar[3]);};function myf5(){};function myf6(){};function myf7(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmp')myfx();});return eo;
		
	}
	var apopular1=(k,fn)=>{
		var a=ll[M4[7]][k][M5[3]],z='apop1',ub=DIV('flush-collapse'+z+k,'accordion-collapse collapse p-3','',[]),co=DIV('','accordion accordion-flush','',[DIV('','accordion-item','',[hea(2,[but(k,'button','','accordion-button collapsed',{'data-bs-toggle':'collapse','data-bs-target':'#flush-collapse'+z+k})],'flush-heading'+z+k,'accordion-header'),ub])]),ws=cont('','','',[co]),rd=sect('','mb-3','',[ws]),eo={e:rd},o={};for(var i in a)APP(ub,myboy(i));function myboy(v){var vx=(ocn(a[v][M7[0]]))?a[v][M7[0]].off:'img/sign.jpg',v1=sect('','mb-2 p-2 widthun ohidden','',[figure('figure1','',{style:'width:3em;overflow:hidden;'},[img(vx,'','img-fluid w-100')]),DIV('','item-des-1 pt-1','',[hea(5,[small(v,'grey6').e],'nomargin')])]);addEvent(v1,'click',()=>{myf1(v1,v);});return v1;};function myf1(e,v){var v1='';if(!o[v]){v1='#e7dad0';o[v]=true;fn.f2({p:k,k:v,product:true});}else{delete o[v];v1='';fn.f3(v);};e.style.background=v1;};return eo;
	}
	var apopular2=(k,fn)=>{
		var a=ll.livestocks[k][M5[3]],z='apop1',ub=DIV('flush-collapse'+z+k,'accordion-collapse collapse p-3','',[]),co=DIV('','accordion accordion-flush','',[DIV('','accordion-item','',[hea(2,[but(k,'button','','accordion-button collapsed',{'data-bs-toggle':'collapse','data-bs-target':'#flush-collapse'+z+k})],'flush-heading'+z+k,'accordion-header'),ub])]),ws=cont('','','',[co]),rd=sect('','mb-3','',[ws]),eo={e:rd},o={};for(var i in a)APP(ub,myboy(i));function myboy(v){var vx=(ocn(a[v][M7[0]]))?a[v][M7[0]].off:'img/sign.jpg',v1=sect('','mb-2 p-2 widthun ohidden','',[figure('figure1','',{style:'width:3em;overflow:hidden;'},[img(vx,'','img-fluid w-100')]),DIV('','item-des-1 pt-1','',[hea(5,[small(v,'grey6').e],'nomargin')])]);addEvent(v1,'click',()=>{myf1(v1,v);});return v1;};function myf1(e,v){var v1='';if(!o[v]){v1='#e7dad0';o[v]=true;fn.f2({p:k,k:v,animal:true});}else{delete o[v];v1='';fn.f3(v);};e.style.background=v1;};return eo;
	}
	var addpopular=(fn)=>{if(!ll.livestocks)ll.livestocks={};
		var a=revob(ll[M4[7]]),b=revob(ll.livestocks),hd=pah('head',[xbut('xap'),hea(3,[small('add popular item','grey6').e])]),ws=sect('','pt-3'),rd=colbox('neuboy',8,9,10,12,[hd,ws,center([but('submit','button','akey1','btn btn-sm btn-warning white mt-4 px-5 py-1')]).e]),ap={},eo={e:rd,f2:myf2,f3:myf3};for(var i in a)APP(ws,apopular1(i,eo).e);for(var i in b)APP(ws,apopular2(i,eo).e);function myfx(){fn.f1();};function myf1(){if(!ocn(ap)){flashbox('please select at least one item to submit!!!','',true);return;};newpopular(ap);myfx();};function myf2(v){if(!ap[v])ap[v.k]=v;};function myf3(v){if(ap[v])delete ap[v];};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xap')myfx();if(e.id=='akey1')myf1();});return eo;
	}
	var popularhome=()=>{
		var x=revob(ll.popular),ws=sect('','pt-3'),rd=sect('','','',[ws]),eo={e:rd};if(!ocn(x))APP(ws,center([small('you neva add popular item','grey').e]).e);for(var i in x)(x[i].animal)?APP(ws,popuitem3({k:x[i][M5[0]],p:x[i][M8[6]]}).e):APP(ws,popuitem2({k:x[i][M5[0]],p:x[i][A6[2]]}).e);return eo;
	}
	var popularitems=(fn)=>{
		var x=('add item,delete item').split(','),mn=popmenu({id:'nopad',a:x,k:[but('Tools','button','','btn btn-md btn-success bwhite green py-0 noline mb-3')],fnc:myfm}),hd=pah('head',[xbut('xpop'),hea(5,[strong('Popular Items','grey6','underline').e],'nomargin'),mn.e]),ws=sect(),rd=sect('','p-2 mt-5 shadow','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f5:myf5,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0,fk=input('','',{type:'file'});rd.style.minHeight='25em';myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf2();if(v==x[1])fk.click();if(v==x[2])myf3(M5[0]);if(v==x[3])myf3(M5[1]);};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=popularhome(eo);myf0(ar[0]);};function myf2(){x2=addpopular(eo);myf0(ar[1]);};function myf3(){x3=rmvpopular();myf0(ar[2]);};function myf4(){};function myf5(v){};function myf6(){};function myf7(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xpop')myfx();});return eo;
		
	}
	var popuitem3=(o)=>{
		var x=M7,a=ll.livestocks[o.p][M5[3]][o.k],ix=a[x[0]],is=(ocn(ix))?ix.off:'img/sign.jpg',im=img(is,'','img-fluid rounded-2'),rd=colbox('nopad',3,4,5,5,[im,DIV('','p-2 px-3 mb-2','',[hea(6,[small(o.k,'grey6').e],'nomargin','fw-bold text-truncate'),hea(6,[small(a[x[2]],'grey6').e],'nomargin','mb-2'),hea(6,[small(a[M9[2]],'grey6','font10').e]),hea(6,[small(a[M9[3]],'grey6','font10').e]),par('N'+barme(a[x[3]]),'orange','fw-bold text-1000 mt-3')])],'m-3 mb-5 bwhite pb-4 mb-4 dinline mb-5 h-100 animated zoomIn'),eo={e:rd};return eo;
	}//['name','description','age','breed','price']
	var popuitem2=(o)=>{
		var x=M7,a=ll[M4[7]][o.p][M5[3]][o.k],ix=a[x[0]],is=(ocn(ix))?ix.off:'img/sign.jpg',im=img(is,'','img-fluid rounded-2'),rd=colbox('nopad',3,4,5,5,[im,DIV('','p-2 px-3 mb-2','',[hea(6,[small(o.k,'grey6').e],'','fw-bold text-truncate'),hea(6,[small(a[x[2]],'grey6').e],'nomargin','mb-2'),par('N'+barme(a[x[3]]),'orange','fw-bold text-1000 mt-3')])],'m-3 mb-5 bwhite pb-4 mb-4 dinline mb-5 h-100 animated zoomIn'),eo={e:rd};return eo;
	}
	var popuitem=(o)=>{
		var cc=(o.c)?' '+o.c:'',x=M7,a=ll[M4[7]][o.p][M5[3]][o.k],ix=a[x[0]],is=(ocn(ix))?ix.off:'img/sign.jpg',im=img(is,'','widthun img-fluid'),ub=sect('maskbg','pb-5 pabsolute bot0 widthun h-100 text-justify text-center','',[DIV('pabsolute','widthun p-2 pb-5 px-3',{style:'bottom:30%'},[hea(1,[small(o.k,'white').e],'','fw-bold text-truncate'),hea(3,[small(a[x[2]],'white','lead').e]),hea(1,[strong('N'+barme(a[x[3]])).e],'white','fw-bold text-1000 mt-3')])]),bu=colbox('nopad',12,12,12,12,[im,ub]),rd=DIV('','white '+cc,'',[bu]),eo={e:rd};return eo;
	}
	var popuitem4=(o)=>{
		var cc=(o.c)?' '+o.c:'',x=M7,a=ll.livestocks[o.p][M5[3]][o.k],ix=a[x[0]],is=(ocn(ix))?ix.off:'img/sign.jpg',im=img(is,'','widthun img-fluid'),ub=sect('maskbg','pb-5 pabsolute bot0 widthun h-100 text-justify text-center','',[DIV('pabsolute','widthun p-2 pb-5 px-3',{style:'bottom:15%'},[hea(1,[small(o.k,'white').e],'','fw-bold text-truncate'),hea(3,[small(a[M9[2]],'white','lead').e]),hea(3,[small(a[M9[3]],'white','lead').e]),hea(3,[small(a[x[2]],'white','lead').e]),hea(1,[strong('N'+barme(a[x[3]])).e],'white','fw-bold text-1000 mt-3')])]),bu=colbox('nopad',12,12,12,12,[im,ub]),rd=DIV('','white '+cc,'',[bu]),eo={e:rd};return eo;
	}
	var popularsel=(fn)=>{if(!ll.popular)ll.popular={};
		var x=revob(ll.popular),u=cta(x),ux=true,ub=DIV('','carousel-inner'),ic=DIV('','carousel-indicators'),px=1,pk=but([span('','','carousel-control-prev-icon',{'aria-hidden':'true'}),span('Previous','','visually-hidden')],'button','','carousel-control-prev',{'data-bs-target':'#header-carousel','data-bs-slide':'prev'}),nk=but([span('','','carousel-control-next-icon',{'aria-hidden':'true'}),span('Next','','visually-hidden')],'button','','carousel-control-next',{'data-bs-target':'#header-carousel','data-bs-slide':'next'}),ws=DIV('header-carousel','carousel slide',{'data-bs-ride':'carousel'},[ub,pk,nk,ic]),rd=DIV('','p-0 mb-5 mt-4 ohidden','',[ws]),eo={e:rd};APP(ub,myboy(0,'carousel-item active'));APP(ic,myboy2(0,'active'));for(var i=1;i<ocn(u);i++){APP(ub,myboy(i,'carousel-item'));APP(ic,myboy2(i));};function myboy(v,k){var vx={c:k,k:x[u[v]][M5[0]],p:(x[u[v]].animal)?x[u[v]][M8[6]]:x[u[v]][A6[2]],lt:ux},v1=(x[u[v]].animal)?popuitem4(vx,fn):popuitem(vx,fn);ux=(ux)?false:true;return v1.e;};function myboy2(v,c){var vx=(ocn(x[u[v]][M7[0]]))?x[u[v]][M7[0]].off:'img/sign.jpg',v1=but([img(vx,'','d-block w-100 shadow-1-strong rounded')],'button','mwidth5',c,{'data-bs-target':'#header-carousel','data-bs-slide-to':v});return v1;};return eo;
	}
	var popularfront=()=>{if(!ll.popular)ll.popular={};
		var hd=pah('head',[center([hea(3,[strong('Popular Items','orange').e])]).e]),ws=sect('','','',(ocn(ll.popular))?[popularsel().e]:[center([small('you neva add popular Items.','grey').e]).e]),rd=sect('','mt-5','',[colbox('neuboy',7,9,10,12,[hd,ws],'px-0')]),eo={e:rd};rd.style.minHeight='25em';return eo;
	}
	var newpri=(u,k,fn,ff)=>{
		var g=['name','description'],x=clonetxt(ll[M4[7]][u.p][k]),y=['current '+k,'new '+k],z='',q=(()=>{switch(k){case g[0]:z='username';break;case g[1]:z='text';break;};})(),ul=phul(y,y,[z,z]),hd=pah('hea',[xbut('xnewpro'),hea(5,[small(u.p+' Details Mod','orange').e],'nomargin'),hea(3,[small('change '+k,'blue').e])]),ws=sect('','p-2 mt-3','',[ul.e]),rd=colbox('neuboy',8,9,10,12,[hd,ws,center([but('submit','button','nkey1','btn btn-sm btn-success px-5')]).e]),eo={e:rd},val=true;function myfx(){fn.f1();};function myf1(v){val=v;if(!v)return;var v1=fetchvalu(ul.o),v2={k:k,x:v1[y[0]],nv:v1[y[1]],p:u.p};if((k==g[2]&&parse(v2.x)!=parse(x))||(k!=g[2]&&v2.x!=x)){redtxt(ul.a[y[0]],'invalid '+k+'!!');val=false;return;};if(v2.n==v2.x){redtxt(ul.a[y[0]],'you can\'t enter the same '+k);redtxt(ul.a[y[1]],'you can\'t enter the same '+k);val=false;return;};newproinfo(v2,ff);if(k!=g[0])myfx();};function myf2(){if(val)return;resetkeys(ul.a,mrgar(y,y));val=true;};addEvent(rd,'keydown',(v)=>{var e=v.key,ev=v.code;if(!val)myf2();if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf1);if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(!val)myf2();if(e.id=='nkey1')validate(ul.o,ul.a,myf1);if(e.id=='xnewpro')myfx();});return eo;
	}
	var newiti=(u,k,fn,ff)=>{
		var g=['name','description','price'],x=clonetxt(ll[M4[7]][u.p][M5[3]][u.k][k]),y=['current '+k,'new '+k],z='',q=(()=>{switch(k){case g[0]:z='username';break;case g[1]:z='text';break;case g[2]:z='number';break;};})(),ul=phul(y,y,[z,z]),hd=pah('hea',[xbut('xnewpro'),hea(5,[small(u.k+' Details Mod','orange').e],'nomargin'),hea(3,[small('change '+k,'blue').e])]),ws=sect('','p-2 mt-3','',[ul.e]),rd=colbox('neuboy',8,9,10,12,[hd,ws,center([but('submit','button','nkey1','btn btn-sm btn-success px-5')]).e]),eo={e:rd},val=true;function myfx(){fn.f1();};function myf1(v){val=v;if(!v)return;var v1=fetchvalu(ul.o),v2={k:k,x:v1[y[0]],nv:v1[y[1]],p:u.p,i:u.k};if((k==g[2]&&parse(v2.x)!=parse(x))||(k!=g[2]&&v2.x!=x)){redtxt(ul.a[y[0]],'invalid '+k+'!!');val=false;return;};if(v2.n==v2.x){redtxt(ul.a[y[0]],'you can\'t enter the same '+k);redtxt(ul.a[y[1]],'you can\'t enter the same '+k);val=false;return;};newiteminfo(v2,ff);if(k!=g[0]||(k==g[0]&&v2.n!=v2.x))myfx();};function myf2(){if(val)return;resetkeys(ul.a,mrgar(y,y));val=true;};addEvent(rd,'keydown',(v)=>{var e=v.key,ev=v.code;if(!val)myf2();if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf1);if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(!val)myf2();if(e.id=='nkey1')validate(ul.o,ul.a,myf1);if(e.id=='xnewpro')myfx();});return eo;
	}
	var itemcover1=(o,fn)=>{
		var w=['name','description','price'],g=['change image','edit name','edit description','edit price','delete '+o.k,'more pictures'],mn=popmenu({id:'nopad',a:g,k:[but('Tools','button','','btn btn-sm btn-warning widthun white py-1 noline')],fnc:myfm}),x=M7,a=ll[M4[7]][o.p][M5[3]][o.k],vv=(a.more_pix&&ocn(a.more_pix))?mypics(o):'',ix=a[x[0]],is=(ocn(ix))?ix.off:'img/sign.jpg',im=(vv)?itemsel(vv,fn).e:img(is,'','img-fluid rounded-2'),rd=colbox('nopad',2,3,3,5,[im,DIV('','p-2 px-3 mb-2','',[hea(6,[small(o.k,'grey6').e],'','fw-bold font15 text-truncate'),hea(6,[small(a[x[2]],'grey6','font10').e]),par('N'+barme(a[x[3]]),'orange','fony10 fw-bold text-1000 mt-3')]),center([mn.e]).e],'m-3 mb-5 bwhite pb-4 mb-4 dinline mb-5 h-100'),eo={e:rd},fk=input('','',{type:'file'});function myfm(v){if(v==g[0])fk.click();;if(v==g[1])myf2(w[0]);if(v==g[2])myf2(w[1]);if(v==g[3])myf2(w[2]);if(v==g[4])myf3();if(v==g[5])myf4();};function myf1(){var v1=this.files[0],v2=fileinfo(v1),v3=v2.type.split('/')[0],v4={off:URL.createObjectURL(v1),info:v2,name:v2.name,itm_pic:true,p:o.p,i:o.k},v5,v6={k:o.k,p:o.p,o:v4};if(v3!='image'){alert(v2.name+' is not a image!!');return;};im.src=v4.off;ll[M4[7]][o.p][M5[3]][o.k][M7[0]]=v4;uploadfile({f:{i:'pic',f:v1},o:{i:'ob',o:v6},fnc:'',call:'/itempix'});};function myf2(v){clg(v);fn.f5({o:o,k:v});};function myf3(){fn.f7(o);};function myf4(){fn.f6(o.k)};addEvent(fk,'change',myf1);return eo;
	}
	var itemsel=(o,fn)=>{
		var x=o,u=cta(x),ux=true,ub=DIV('','carousel-inner'),ic=DIV('','carousel-indicators',{style:'margin-bottom:0;'}),px=1,pk=but([span('','','carousel-control-prev-icon',{'aria-hidden':'true'}),span('Previous','','visually-hidden')],'button','','carousel-control-prev',{'data-bs-target':'#header-carousel','data-bs-slide':'prev'}),nk=but([span('','','carousel-control-next-icon',{'aria-hidden':'true'}),span('Next','','visually-hidden')],'button','','carousel-control-next',{'data-bs-target':'#header-carousel','data-bs-slide':'next'}),ws=DIV('header-carousel','carousel slide',{'data-bs-ride':'carousel'},[ub,ic]),rd=DIV('','p-0 ohidden','',[ws]),eo={e:rd};APP(ub,myboy(0,'carousel-item active'));APP(ic,myboy2(0,'active'));for(var i=1;i<ocn(u);i++){APP(ub,myboy(i,'carousel-item'));APP(ic,myboy2(i));};function myboy(v,k){var vx=x[u[v]].off,v1=DIV('',k,'',[img(vx,'','img-fluid w-100')]);return v1;};function myboy2(v,c){var v1=but('','button','mwidth5 bwhite',c,{'data-bs-target':'#header-carousel','data-bs-slide-to':v});return v1;};return eo;
	}
	var newitem=(k,fn)=>{
		var a=[M7[1],M7[2],M7[3]],b=['Enter '+M7[1],'Enter a short description','Enter '+M7[3]],ul=phul(a,b,['username','text','number']),hd=pah('head',[xbut('xnitm'),hea(4,[strong('New Item','grey6').e])]),at=inputpar({ty:'text',t:'enter least quatity'}),ws=sect('','','',[ul.e,at.e]),rd=colbox('neuboy',8,9,10,12,[hd,ws,center([but('submit','button','key1','btn btn-sm btn-success mt-5 px-5 py-1')]).e]),eo={e:rd},val=true;function myfx(){fn.f1();};function myf1(v){val=v;if(!v)return;var v1=fetchvalu(ul.o),v2=mrgar(M7,['',v1[a[0]],v1[a[1]],v1[a[2]],A3[0],'',k,'',datemap()]),v3=at.s.value;if(v3)v2.least=v3;if(ll[M4[7]][k][M5[3]][v1[a[0]]]){redtxt(ul.a[a[0]],'Item already exist!!!');val=false;return;};ll[M4[7]][k][M5[3]][v1[a[0]]]=v2;socket.emit('newitem',{p:k,n:v1[a[0]],o:v2});flashbox('new Item added successfully..');myfx();};function myf2(){if(val)return;resetkeys(ul.a,mrgar(a,b));val=true;};addEvent(rd,'keydown',(v)=>{var e=v.code,ev=v.key;if(!val)myf2();if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf1);if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(!val)myf2();if(e.id=='key1')validate(ul.o,ul.a,myf1);if(e.id=='xnitm')myfx();});return eo;
	}
	var morepixhome=(o)=>{
		var a=ll[M4[7]][o.p][M5[3]][o.k],x,x1=(ocn(a[M7[0]]))?a[M7[0]].off:'img/sign.jpg',x2=picturesbox({k:(ocn(a[M7[0]]))?x1:'',o:(a.more_pix&&ocn(a.more_pix))?a.more_pix:{}}),ws=sect('','pt-3','',[x2.e]),rd=sect('','pt-2','',[ws]),eo={e:rd};return eo;
	}
	var morepix=(o,fn)=>{
		var x=('new picture,delete image').split(','),mn=popmenu({id:'nopad',a:x,k:[but('Tools','button','','btn btn-md btn-success bwhite green py-0 noline mb-3')],fnc:myfm}),hd=pah('head',[xbut('xmpbx'),hea(4,[small('More Pictures','grey6').e],'nomargin'),hea(5,[strong(o.k,'grey6','underline').e],'nomargin'),mn.e]),ws=sect(),rd=sect('','p-2 mt-5 shadow','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f5:myf5,f6:myf6,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0,fk=input('','',{type:'file'});myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf3();if(v==x[1])myf2()};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=morepixhome(o,eo);myf0(ar[0]);};function myf2(){x2=popix(o,eo);myf0(ar[1]);};function myf3(v){var a=ll[M4[7]][o.p][M5[3]][o.k];if(a.more_pix&&ocn(a.more_pix)>3)return;fk.click();};function myf4(){var v1=this.files[0],v2=fileinfo(v1),v3=v2.type.split('/')[0],v7='pix-'+datemap().key,v4={off:URL.createObjectURL(v1),info:v2,name:v2.name,item_pix:true,p:o.p,i:o.k,key:v7},v5,v6={p:o.p,i:o.k,pk:v7,o:v4};if(v3!='image'){alert(v2.name+' is not a image!!');return;};if(!ll[M4[7]][o.p][M5[3]][o.k].more_pix)ll[M4[7]][o.p][M5[3]][o.k].more_pix={};ll[M4[7]][o.p][M5[3]][o.k].more_pix[v7]=v4;uploadfile({f:{i:'pic',f:v1},o:{i:'ob',o:v6},fnc:myf1,call:'/more_pix'});};function myf5(v){};function myf6(v){};function myf7(){};addEvent(fk,'change',myf4);addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmpbx')myfx();});return eo;
	}
	var producthome=(k,fn)=>{
		var o=ll[M4[7]][k],a=M5,x=o[a[3]],sr=(o[a[2]])?o[a[2]].off:'img/bag2.jpeg',im=img(sr,'','img-fluid width5'),hd=pah('head',[im,par(o[a[1]],'grey6')]),ub=sect('','widthun bg-light pt-3'),ws=sect('','ohidden','',[ub]),rd=sect('','ohidden animated slideInUp','',[hd,ws]),eo={e:rd};ub.style.minHeight='20em';for(var i in x)APP(ub,itemcover1({p:k,k:i},fn).e);return eo;
	}
	var check2pop=(o,fn,lv)=>{
		var a="You are about to delete "+o.p+"'s "+o.k+". Do note that it will be removed from items under "+o.p+", click 'delete' to procced or cancel to go back",hd=pah('head',[hea(3,[strong('Confirm Delete','red').e])]),ub=sect('','','',[sect('','mb-3','',[par(a,'red')])]),ws=sect('','p-2','',[ub]),rd=colbox('neuboy',7,8,9,12,[hd,ws,center([butgroup(1,[but('cancel','button','key1','btn btn-md btn-danger px-5'),but('proceed','button','key2','btn btn-md btn-warning white px-3')],'','','mt-3')]).e]),eo={e:rd};function myf1(){fn.f1();};function myf2(){(lv)?poplive({p:o.p,o:{[o.k]:true},k:o.k},fn):popitems({p:o.p,o:{[o.k]:true}},fn);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='key1')myf1();if(e.id=='key2')myf2();});return eo;
	}
	var productbox=(k,fn)=>{
		var x=('new item,change image,edit name,edit description').split(','),mn=popmenu({id:'nopad',a:x,k:[but('Tools','button','','btn btn-md btn-success bwhite green py-0 noline mb-3')],fnc:myfm}),hd=pah('head',[xbut('xpbx'),hea(5,[strong(k,'grey6','underline').e],'nomargin'),mn.e]),ws=sect(),rd=sect('','p-2 mt-5 shadow','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f5:myf5,f6:myf6,f7:myf7,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0,fk=input('','',{type:'file'});myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf2();if(v==x[1])fk.click();if(v==x[2])myf3(M5[0]);if(v==x[3])myf3(M5[1]);};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=producthome(k,eo);myf0(ar[0]);};function myf2(){x2=newitem(k,eo);myf0(ar[1]);};function myf3(v){x3=newpri({p:k},v,eo,fn);myf0(ar[2]);};function myf4(){var v1=this.files[0],v2=fileinfo(v1),v3=v2.type.split('/')[0],v4={off:URL.createObjectURL(v1),info:v2,name:v2.name,prod_pic:true,p:k},v5,v6={p:k,o:v4};if(v3!='image'){alert(v2.name+' is not a image!!');return;};ll[M4[7]][k][M5[2]]=v4;uploadfile({f:{i:'pic',f:v1},o:{i:'ob',o:v6},fnc:myf1,call:'/prodpic'});};function myf5(v){x5=newiti(v.o,v.k,eo,fn);myf0(ar[4]);};function myf6(v){x6=morepix({p:k,k:v},eo);myf0(ar[5]);};function myf7(v){x7=check2pop(v,eo);myf0(ar[6]);};addEvent(fk,'change',myf4);addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xpbx')myfx();});return eo;
		
	}
	var procover=(o,fn)=>{
		var a=M5,sr=(o[a[2]])?o[a[2]].off:'img/bag2.jpeg',hp=img(sr,'','img-fluid w-100'),hd=sect('maskbg','p-3 pt-4 pabsolute bot0 widthun','',[sect('','mnheight6 widthun','',[hea(3,[small(o[a[0]],'white').e],'nomargin','text-1000'),par([small(o[a[1]],'white').e],'nomargin')])]),rd=colbox('nopad',3,4,5,12,[hp,hd],'bshadow2 bg-image prelate dinline m-2 animated zoomIn',{style:'max-height:18em;overflow:hidden'}),eo={e:rd};function myf1(){fn.f4(o[a[0]]);};addEvent(rd,'click',myf1);return eo;
	}
	var rmvproducts=(fn)=>{
		var a=ll[M4[7]],ul=selul(a,'#f90600','#fff'),hd=pah('head',[xbut('rmvp'),hea(4,[strong('Remove Products','red').e],'nomargin'),par([small('select the product(s) You want to remove. But do note that deleting a product will delete all the items under the product as well and this cannot be undone.').e])]),ws=sect('','pt-3','',[ul.e]),rd=colbox('neuboy',6,7,9,11,[hd,ws,center([but('submit','button','dkey1','btn btn-md btn-danger fw-light px-5')]).e]),eo={e:rd};function myf1(){var v1=ul.f2();if(!ocn(v1)){flashbox('you did not select any product!!!','',true);return;};poproducts(v1,fn);};function myfx(){fn.f1();};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xrmvp')myfx();if(e.id=='dkey1')myf1();});return eo;
	}
	var newproduct=(fn)=>{
		var a=[M5[0],M5[1]],b=['Enter product name','Enter a brief product description'],ul=phul(a,b,['username','text']),hd=pah('head',[xbut('xnp'),hea(4,[strong('New Product','grey6').e])]),ws=sect('','','',[ul.e]),rd=colbox('neuboy',8,9,10,12,[hd,ws,center([but('submit','button','key1','btn btn-sm btn-success px-5 py-1')]).e]),eo={e:rd},val=true;function myfx(){fn.f1();};function myf1(v){val=v;if(!v)return;var v1=fetchvalu(ul.o),v2=mrgar(M5,[v1[a[0]],v1[a[1]],'',{},datemap()]);if(ll[M4[7]][v1[a[0]]]){redtxt(ul.a[a[0]],'product already exist!!!');val=false;return;};ll[M4[7]][v1[a[0]]]=v2;socket.emit('newpro',{p:v1[a[0]],k:v2});flashbox('new product added successfully..');myfx();};function myf2(){if(val)return;resetkeys(ul.a,mrgar(a,b));val=true;};addEvent(rd,'keydown',(v)=>{var e=v.code,ev=v.key;if(!val)myf2();if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf1);if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(!val)myf2();if(e.id=='key1')validate(ul.o,ul.a,myf1);if(e.id=='xnp')myfx();});return eo;
	}
	var productshome=(fn)=>{
		var a=ll[M4[7]],f1=sect('','p-3 pt-5 page-header-inner d-md-flex text-center text-md-start','',[img('img/item.png','rad1','w-100 mwidth50 img-fluid d-lg-none d-md-none d-sm-block animated zoomIn'),DIV('','pb-5 p-2','',[hea(1,[strong('Your Products Catalogue.','white').e],'','animated slideInUp'),par([small('You can go straight to creating new Product Catalogues, the sytem format for adding what your selling is PRODUCT -->> ITEM, where product is the root catalogue and under the product is where you add the item which is the package / item you are trying to sell..','white','lead').e],'','animated slideInUp')]),img('img/item.png','rad1','w-50 ip-2 mg-fluid d-none d-md-block mwidth50 d-sm-none animated zoomIn')]),ub=sect('','p-2'),ws=sect('','','',[sect('','mb-3 bimg2','',[f1]),ub]),rd=sect('','','',[ws]),eo={e:rd};for(var i in a)APP(ub,procover(a[i],fn).e);return eo;
	}
	var myproducts=(fn)=>{
		var x=('new product,delete product').split(','),mn=popmenu({id:'nopad',a:x,k:[but('Tools','button','','mb-3 btn btn-md btn-success bwhite green py-0 noline')],fnc:myfm}),hd=pah('head',[xbut('xmp'),hea(5,[strong('Products','grey6','underline').e]),mn.e]),ws=sect(),rd=sect('','p-2 pt-4','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf2();if(v==x[1])myf3();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=productshome(eo);myf0(ar[0]);};function myf2(){x2=newproduct(eo);myf0(ar[1]);};function myf3(){x3=rmvproducts(eo);myf0(ar[2]);};function myf4(v){x4=productbox(v,eo);myf0(ar[3]);};function myf5(){};function myf6(){};function myf7(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmp')myfx();});return eo;
		
	}
	var icontray=(o)=>{
		var a=(o)?o.a:M2,b=(o)?o.b:MI,ws=sect('','p-1 pt-3'),rd=sect('',(o)?'p-2':'p-1 pt-5','',[ws]),eo={e:rd};for(var i in a)APP(ws,myboy(i));function myf1(v){(o)?o.fnc(v):fro.fm(v,true);};function myboy(v){var vi=a[v],v1=colbox('pad1',2,3,4,5,[center([hea(1,[icon2(b[v])],'nomargin','line5 fw-bold text-1000',{style:'font-size:4em;color:#c1bbb4cf;'}),hea(6,[small(vi,'grey6','font11').e],'nomargin')]).e],'dinline animated zoomIn');addEvent(v1,'click',()=>{myf1(vi);});return v1;};return eo;
	}
	var home=()=>{
		var x1=icontray(),x2=popularfront(),x3=weldome1(),ws=sect('','pt-3','',[x3.e,x1.e,par('','height2'),x2.e]),rd=sect('','p-1','',[ws]),eo={e:rd};return eo;
	}
	var weldome1=()=>{
		var ws=sect('','py-5 page-header-inner','',[DIV('','my-5 pt-5','',[center([hea(1,[strong('FOODPLUS9JA','white','head2 d-lg-none d-md-none d-sm-block').e],'nomargin','line1 animated slideInUp'),hea(1,[strong('FOODPLUS9JA','white','head1 d-none d-md-block d-sm-none').e],'nomargin','line1 animated slideInUp'),hea(5,[small('Highest Quality at the most affordable price','white','italic-1').e],'nomargin','pb-5,mb-5 animated zoomIn')]).e])]),rd=sect('','bimg4 mb-5','',[ws]),eo={e:rd};return eo;
	}
	var frontnav=(fn)=>{
		var a=M1,b=M1b,ub=DIV('','navbar-nav ms-auto p-4 p-lg-0'),ws=DIV('navrig','collapse navbar-collapse','',[ub]),rd=$$$('nav','','navbar navbar-expand-lg bg-white navbar-light shadow stickytop p-0','',[anc('',[img('img/sign2.jpg','width2','img-fluid')],'navbar-brand d-flex align-items-center px-2'),but([span('','','navbar-toggler-icon')],'button','','navbar-toggler',{'data-bs-toggle':'collapse','data-bs-target':'#navrig'}),ws]),eo={e:rd};for(var i=0;i<ocn(a);i++){(i==3)?APP(ub,myboy(i,true)):APP(ub,myboy(i));};function myboy(v,k){var v1=(k)?myboy2(v):anc('',a[v],'nav-item nav-link');if(!k)addEvent(v1,'click',()=>{myf1(a[v]);});return v1;};function myboy2(){var vx=DIV('rig2','dropdown-menu fade-up m-0'),v1=DIV('','nav-item dropdown','',[anc('',a[3],'nav-link dropdown-toggle','',{'data-bs-toggle':'collapse','data-bs-target':'#rig2'}),vx]);for(var i in b)APP(vx,myboy3(i));return v1;};function myboy3(v){var v1=anc('',b[v],'dropdown-item');addEvent(v1,'click',()=>{myf1(b[v]);});return v1;};function myf1(v){fn(v);myf2();};function myf2(){ws.className='collapse navbar-collapse';};return eo;
	}
	var front=()=>{
		var mn=frontnav(myfm),hd=mn.e,ws=colbox('topad2',12,12,12,12,'','ohidden'),rd=colbox('nopad',12,12,12,12,[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;fro=eo;rd.style.minHeight='30em';myf1();function myfm(v,k){if(v==M1[0])myf1();if(v==M1[1])myf2();if(v==M1[2])myf3();if(v==M1[4])myf4();if(v==M1b[0])myf6();if(v==M1b[1])myf7();if(v==M1b[3])myf5();if(v==M1[5])myf8();if(v==M1[6])myf9();if(v==M1b[3])callweldome();if(v==M1b[5])relo();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};if(v==ar[8])ec={e:x9.e,v:v};APP(ws,ec.e);};function myf1(){x1=home();myf0(ar[0]);};function myf2(){x2=myproducts(eo);myf0(ar[1]);};function myf3(){x3=myorders(eo);myf0(ar[2]);};function myf4(){x4=users(eo);myf0(ar[3]);};function myf5(){x5=settings(eo);myf0(ar[4]);};function myf6(){x6=popularitems(eo);myf0(ar[5]);};function myf7(){x7=mylivestocks(eo);myf0(ar[6]);};function myf8(){x8=shopinglists(eo);myf0(ar[7]);};function myf9(){x9=mymarqs(eo);myf0(ar[8])};
		
	}
	var logob=function(){
		var a=['Security Pass'],b=['enter security pass'],hd=pah('head',[center([par([img('img/logo2.png','width10','img-fluid')],'nomargin'),hea(3,[strong('ADMIN CONSOLE','purple').e],'ino-h'),par([small('enter your login credentials','grey').e],'ino-h2')]).e]),ul=phul(a,b,['password']),ws=sect('','p-2','',[ul.e]),bg=butgroup(1,[but('login','button','inokey','btn btn-lg btn-success')],'ino-bg'),rd=colbox('neuboy',5,6,7,11,[hd,ws,center([bg]).e]),cd=colbox('ino-cd',12,12,12,12,[rd]),eo={e:cd,f1:myf1};rd.style.marginTop='8em';
		
		function c4lnch(){
			if((ll.pass&&ul.o[a[0]].value==ll.pass)||(!ll.pass&&ul.o[a[0]].value=='front'))callfront();
			clrvalu(ul.o);
		}
		function myf1(){
			ul.o[a[0]].value='';
		}
		
		addEvent(rd,'keydown',function(v){
			var e=v.code,ev=v.key;
			if(e=='Enter'||ev=='Enter')c4lnch();
		});
		addEvent(rd,'click',function(e){
			e=e || window.event;
			e=e.target || e.srcElement;
			if(e.id=='inokey'||fada(e).id=='inokey')c4lnch();
			
		});
		return eo;
	}
	

	return {
		spin:function(){
			init();
			
		}
	}
})();