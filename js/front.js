//myshop
var gears=(function(){
	var ios='',ll='',UI='',NP='',ledge='',CW='',PB='',UO={},lso={},sli={},wdo={},fro={},UL={},CP={},PA=['security pass','recovery pin'],F1=['username','security pass'],F2=['enter username','enter security pass'],M1=('home,products,livestock,more,orders,wallet').split(','),Mx=('sign up,login,refresh').split(','),M1b=('shopping list,contact us,about us,logout,refresh').split(','),M2=('products,livestock,orders,shopping list,wallet,contact us,about us').split(','),MI=('house,house,cart,cartdf,activity,phone,people').split(','),MC=('address,email,phone no.').split(','),LZ=('customer,waiter,amount,date').split(','),M4=['name','owner','address','description','phone number','logo','email','products','cover','orders'],M3=['name','logo','description','shops'],sho={},M5=['name','description','logo','items','cdate'],mpo={},wol='',A6=['name','description','product','shop','items','logo'],cko={},M7=['image','name','description','price','availability','shop','product','category','cdate'],M8=['image','name','description','age','breed','price','family','cdate'],M9=['name','description','age','breed','price'],M10=('name,description,product,price,quantity,status').split(','),M11=('name,description,family,breed,age,price,quantity,status').split(','),A3=['in stock','out of stock','out of stock but i can get it'],G1=('gwap,date').split(','),F3=['username','email','phone number','security pass','recovery pin'],FY=['username','email','phone number','security pass','Security Pass','recovery pin'],F4=['bd','img','userID','orders','cart','verified'],F5=['username','email','phone number'],F6=['name','items','cdate'],F8=['individual','business'],Xx=['entity','img','name','description','product','price'],X2=['product','item','livestocks','livestock'],mso={},mdo={},grl='https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp',sho={},ito={},mpo={},slo={},sno={},shd={},sha={},sco={},spr={},prn={},prd={},sxa={},ctn={},ctd={},sit={},cti={},IV=false,nod={},dlo={},kaya={},O1=('customer,item,quantiy,total,date,status').split(','),OZ=('tag,customer,items,charges,total,date,status').split(','),F7=['pending','picked','paid','delivered','canceled'],O2=('customer name,phone number').split(','),O3=('product,livestock').split(','),O4=('pending,charged,paid,delivered,aborted').split(','),PZ=('customer,walletID,balance,transactions,topup,payments,share,date,wallet points').split(','),bets=('a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z').split(','),LX=('type,customer,order,total,gwap avail,new balance,date').split(','),LY=('order payment,list payment').split(','),L1=('fid,shagal,balance').split(','),L2=('balance,rewards,used').split(','),L3=('online payment,cash').split(','),L5=['bank','cash'],L6=('type,amount,medium,reciept,date').split(','),L7=['add funds','transfer','share'],L8=('topup,payment').split(','),C1=('name,email,comment,date').split(','),C2=('name,email,comment').split(','),C3=('name,email').split(','),W1=('entity,name,description,parent,price,img').split(','),W2=('item,price,quantity,total').split(','),N1=('user,unread,read,deleted').split(','),N2=('type,reciever,sender,message,date,more').split(','),N3=('shopping list activity,order activity,product alert,user message,adnin message').split(','),N4=('system,admin,subscriber').split(','),Q1=('image,text').split(','),SO={s1:'sounds/score 1.mp3',s2:'sounds/score 6.mp3',s3:'sounds/score 7.mp3',s4:'sounds/score 8.mp3',s5:'sounds/score 9.mp3',s6:'sounds/score 10.mp3',s7:'sounds/score 11.mp3',s8:'sounds/score 12.mp3',s9:'sounds/score 13.mp3'},P1={Wallet:'This will allow you to pay for the order from your wallet. Make sure Your wallet balance is sufficient.','One Time Pay':'This will allow You to pay for the order using or online payment gateway using your ATM Card, USSD or any other payment method available.'},hiw={'Create Account':{i:'img/location.png',p:'To recieve our services, You need to Create a user account. Click the "sign up" above to create your Account.'},'Topup wallet':{i:'img/pay.png',p:'Once You create an account, You need to topup your wallet using your ATM Card, USSD or other available payment methods to be able to place an order cause you can only pay for recieved services using your wallet. It\'s Quick, Safe and simple'},'Place Order':{i:'img/order.png',p:'Go through our catalogue of foods and lifestock products and place your order instantly. You will recieve a call from our cutomer care to proccess the order after which You will need to pay for the order to initialize the delivery of your order.'},'Recieve Order':{i:'img/location.png',p:'Once your order has been proccesed, You should recieve the order at the agreed drop point within the agreed period of time. Delivery charges and time may vary pending on the drop point.'}},abt='FOODPLUS9JA is an online platform Designed to help you sell your foodstuffs livestock and livestock products from the comfort of your phone or PC. FOODPLUS9JA is has an embedded wallet whre you can save your funds to make purchases in the app, You can Topup your Wallet using any of the payment methods made available by PAYSTACK (which is the payment gateway the app uses). We have a vast catalogue of almost all the products and livestock you wish to purchase anywhere and anytime.';
	
	
	
	
	
	
	function init(){
		notiplay();socket.on('ios',(o)=>{
			ios=o.i;
			if(UI)socket.emit('who',{s:ios,i:ll.users[UI].userID,cus:true});
			
		});
		socket.emit('frshop');
		socket.on('shop',function(o){
			ll=o.ll;ledge=o.lg;UO=o.uo;clg(o);if(!ll.livestocks)ll.livestocks={};
			callweldome();
		});
		socket.on('mylogo',function(o){
			ll[M4[5]]=o.p;
			sho={}
			callshop();
			slo.sm();
		});
		socket.on('usernew',usernew);
		socket.on('neworder',neworder);socket.on('loopipay',ipayinfo);socket.on('pickorder',pickorder);socket.on('chargelist',chargelist);
	
	}
	function retrieveshopid(){
	var a,b,c;
		a=prompt('Enter your shop name');
		b=(cleaname(a)==ll[M4[0]]);
		if(!b){alert('no be the shop name be this.');return;}
		socket.emit('resendshopid');
		alert('Your shopID has been sent to your email.');
		
	}
	function packmykaya(o){if(kaya[o.u]){o.fn();return;};
		callwaiter('Fetching Customer Data, please wait a bit...');socket.emit('mykaya',{u:o.u});loopkick1(o);socket.on('kayana',myf1);function myf1(v){kaya[o.u]=true;if(!ledge.cashpass)ledge.cashpass={};ledge[L1[1]][v.w]=v.wl;for(var i in v.od)ll[M4[9]][i]=v.od[i];for(var i in v.cp)ledge.cashpass[i]=v.cp[i];o.fn();};
	}
	function loopkick1(o){
		var tt=setInterval(()=>{
			if(kaya[o.u]){clearInterval(tt);return;};myf1();
		},12000);
		
		function myf1(){
			if(kaya[o.u]){clearInterval(tt);}else{socket.emit('mykaya',{u:o.u});}
		}
		
	}
	function checkpass(o){if(kaya[o.u]){(ll.users[o.u].bd[F3[3]]==o.s)?o.fn({}):o.fn({s:true});return;};
		socket.emit('checkpass',{u:o.u,s:o.s});socket.on('passcheck',myf1);function myf1(v){if(v.o)ll.users[v.u]=v.o;(v.o)?o.fn({}):o.fn({s:true});};
	}
	function callfront(u){
		if(!fro[u])front(u);
		bringup(fro[u].e);socket.emit('who',{s:ios,i:ll.users[u].userID,cus:true});UI=u;
		
	}
	function callwaiter(t){
		CW=waiter(t);
		bringup(CW.e);
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
		var a=weldome();UI='';bringup(a.e);
	}
	function ordergwap(o){
		var x=datemap(),a=mrgar(G1,[o.gp,x]);ll[M4[9]][o.k].charges=a;o.gp=a;socket.emit('ordergwap',o);
	}
	function newiteminfo(o){if(!ll.popular)ll.popular={};
		var a=ll.popular;ll[M4[7]][o.p][M5[3]][o.i][o.k]=o.nv;if(o.k==M7[1]){if(a[o.i]){ll.popular[o.i][M7[1]]=o.nv;ll.popular=sio(a,o.i,o.nv);};fixinoac(o);ll[M4[7]][o.p][M5[3]]=sio(ll[M4[7]][o.p][M5[3]],o.i,o.nv);};socket.emit('itmfix',{p:o.p,i:o.i,d:o.k,k:o.k,v:o.nv,nv:o.nv});
	}
	function fixinoac(o){
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
	function newpopular(o){
		var a=ll[M4[7]],b={};for(var i in o)if(!ll.popular[i]){ll.popular[i]=a[o[i].p][M5[3]][i];b[i]=o[i];};if(ocn(b)){socket.emit('newpopular',b);flashbox('new items added to popular successfully...');};
	}
	function userinfo(o){
		var a=UO,b={},c=F3,d;if(a[o[c[0]]])b.n=true;for(var i in a)if(a[i]){d=a[i];if(d[c[1]]==o[c[1]])b.e=true;if(d[c[2]]==o[c[2]])b.p=true;};return b;
	}
	function usercred(o){
		var a=ll.users,b={},c=F3;
		if(!isinob(a,o[c[0]]))b.n=true;
		if(a[o[c[0]]]&&a[o[c[0]]].bd[c[3]]!=o[c[3]])b.s=true;
		if(a[o[c[0]]]&&!a[o[c[0]]][F4[3]])b.v=a[o[c[0]]][F4[2]];
		return b;
	}
	function usernew(o){
		ll.users[o.n]=o.a;if(kaya[o.n]){kaya[o.n]();kaya[o.n]=true;};
	}
	function newcomment(o){
		if(!ll.comments)ll.comments={};ll.comments[o.k]=o.o;socket.emit('newcomment',o);flashbox('Your Comment was submited successfully...');
	}
	function placeneworder(o){
		var x=(o.ani)?ll.livestocks[o.p]:ll[M4[7]][o.p],y=x[M5[3]][o.k],tg='Order-'+(ocn(ll.users[o.u][F4[3]])+1),d=datemap(),tt=parse(y[M7[3]])*parse(o.q),u=ll.users[o.u][F4[3]],v=ll[F4[3]],x=O1,k='order-'+d.key+((ocn(u)+2)*(ocn(v)+2)),t='ORDER '+(ocn(u)+1),a=mrgar(x,[o.u,y,o.q,tt,d,O4[0]]);if(o.ani)a.animal=true;a.key=k;ll.users[o.u][F4[3]][k]=true;a.tag=tg;ll[M4[9]][k]=a;o.a=a;o.k=k;socket.emit('neworder',o);
	}//('customer,item,quantiy,total,date,status')
	function myoutstanding(u){
		var a=ll.users[u][M4[9]],c=ll[M4[9]],b=0;for(var i in a)if(c[i][O1[11]]==O2[3])b+=parse(c[i][O1[8]]);return b;
	}
	function onitempayment(o,fn){
		PB=fn;var x=ll.users[o.u].bd[F3[1]];o.e=x;o.dt=datemap();socket.emit('onlinegwap',o);loopay(o);
	}
	function ipayinfo(o){
		if(o.io&&o.io.data&&o.io.data.authorization_url&&!o.pi&&!UL[o.u]){PB.f2(o.io.data.authorization_url);UL[o.u]={a:o.a,u:o.io.data.authorization_url};};if(o.pi){newgwap(o);if(PB)PB.f3();delete CP[o.u];delete UL[o.u]};if(o.failed||(o.io&&o.io.errno)){if(PB)PB.f4();delete CP[o.u];delete UL[o.u]};
	}
	function newgwap(o){
		var d=o.dt,wk=ll.users[o.u][L1[1]][PZ[1]],y=ledge[L1[1]][wk],a=mrgar(L6,[o.u,o.a,o.m,o.pi,d]),b='topup-'+d.key;if(o.m==L3[1])a.waiter=o.wt;a.key=b;y[PZ[4]][b]=a;y[PZ[2]]=parse(y[PZ[2]])+parse(o.a);
	};
	function loopay(o,tx){
		CP[o.u]='on';
		var tt;
		tt=setInterval(()=>{
			myf1();
		},3000);
		
		function myf1(){
			if(!CP[o.u]||CP[o.u]!='on'){clearInterval(tt);clg('result generated');}else{if(tx)flashbox(tx,true);socket.emit('ipayloop',o);}
		}
		
	}
	function passorder(o,fn){
		var d=datemap(),a={status:'delivered',date:d};ll[M4[9]][o.k][O1[5]]=a;o.a=a;socket.emit('passorder',o);fn.f2(o.k);flashbox("Item delivery was confirmed successfully. Thank You for patronising FLEXGRILLZ.");
	}
	function fetchwallet(o){
		socket.emit('fetchwallet',{k:o.k});socket.on('walletfetch',myf1);function myf1(v){ledge[L1[1]][v.k]=v.o;balancewallet(o.k,()=>{if(o.fn)o.fn();});flashbox('wallet refreshed successfully...');};
	}
	function balancewallet(w,fn){
		if(!ledge[L1[1]][w])return;var a=ledge[L1[1]][w],b=a[PZ[3]],c=a[PZ[4]],d=a[PZ[5]],e=0,f=0,g;for(var i in c)e+=parse(b[i][LZ[2]]);for(var i in d)f+=parse(b[i][LX[3]]);g=e-f;if(a[PZ[2]]){a[PZ[2]]=g;};if(fn)fn();
	}
	function topupsum(w){
		var x=L6b,y=ledge[L1[1]][w][PZ[3]],a=revob(ledge[L1[1]][w][PZ[4]]),b={p:{},tl:{}},c,d,e,f;for(var i in a){c=y[i][O1[9]];d=CC2[c.m];if(!b.tl[d])b.tl[d]=0;b.tl[d]+=parse(y[i][L6[1]]);if(!b.p[d])b.p[d]={};b.p[d][i]=mrgar(x,[y[i][x[0]],'N'+barme(y[i][x[1]]),y[i][x[2]].f]);};return b;
	}
	function paysum(w){
		var x=LXb,y=ledge[L1[1]][w][PZ[3]],a=revob(ledge[L1[1]][w][PZ[5]]),b={p:{},tl:{}},c,d,e,f;for(var i in a){c=y[i][O1[9]];d=CC2[c.m];if(!b.tl[d])b.tl[d]=0;b.tl[d]+=parse(y[i][x[1]]);if(!b.p[d])b.p[d]={};b.p[d][i]=mrgar(x,[ll[M4[9]][y[i][x[0]]][O1[1]],'N'+barme(y[i][x[1]]),'N'+barme(y[i][x[2]]),'N'+barme(y[i][x[3]]),y[i][x[4]].f]);};return b;
	}
	function pickorder(o){if(ll[M4[9]][o.k][O1[5]]!=F7[0])return;
		ll[M4[9]][o.k].dropoint=o.d;ll[M4[9]][o.k].charges=o.c;ll[M4[9]][o.k][O1[5]]=F7[1];if(mdo[ll[M4[9]][o.k][O1[0]]])mdo[ll[M4[9]][o.k][O1[0]]].f5(o.k);flashbox(ll[M4[9]][o.k].tag+' has been picked successfully..');
	}
	function mypendings(u){
		var a=ll[M4[9]],b={};for(var i in a)if(a[i][O1[0]]==u&&a[i][O1[5]]==F7[0])b[i]=a[i];return b;
	}
	function mypicked(u){
		var a=ll[M4[9]],b={};for(var i in a)if(a[i][O1[0]]==u&&a[i][O1[5]]==F7[1])b[i]=a[i];return b;
	}
	function mypaids(u){
		var a=ll[M4[9]],b={};for(var i in a)if(a[i][O1[0]]==u&&a[i][O1[5]]==F7[2])b[i]=a[i];return b;
	}
	function mydeli(u){
		var a=ll[M4[9]],b={};for(var i in a)if(a[i][O1[0]]==u&&a[i][O1[5]]==F7[3])b[i]=a[i];return b;
	}
	function myxed(u){
		var a=ll[M4[9]],b={};for(var i in a)if(a[i][O1[0]]==u&&a[i][O1[5]]==F7[4])b[i]=a[i];return b;
	}
	function cancelorder(o,fn){if(ll[M4[9]][o.k][O1[5]]==F7[2]||ll[M4[9]][o.k][O1[5]]==M7[3]||ll[M4[9]][o.k][O1[5]]==M7[4])return;
		ll[M4[9]][o.k][O1[5]]=F7[4];socket.emit('xorder',o);flashbox(ll[M4[9]][o.k].tag+' was canceled successfully...');fn.f2(o.k);
	}
	function confirmorder(o,fn){if(ll[M4[9]][o.k][O1[5]]!=F7[2])return;
		ll[M4[9]][o.k][O1[5]]=F7[3];socket.emit('delorder',o);flashbox(ll[M4[9]][o.k].tag+' was delivered successfully...');fn.f2(o.k);
	}
	function pay4order(v,fn){if(fn.f4)fn.f4(v);
		var o=cloneo(v),a=ll[M4[9]][o.k];o.tl=parse(a[O1[3]])+parse(a.charges);o.dt=datemap();o.key='payment-'+o.dt.key;o.ok=o.k;o.ty=LY[0];o.wk=ll.users[o.u][L1[1]][PZ[1]];socket.emit('pay4order',o);socket.on('orderpaid',()=>{makepayment(o,()=>{fn.fx();});});
	}
	function dempay(o){
		var a=ledge[L1[1]][o.p][PZ[3]],b=ledge[L1[1]][o.p][PZ[5]],c=false,d,e,f;for(var i in b)if(a[i][LX[2]]&&a[i][LX[2]]==o.k){c=true;break;};return c;
	}
	function makepayment(o,fn){if(o.ok&&dempay({k:o.ok,p:o.wk})){ll[M4[9]][o.ok][O1[5]]=F7[2];if(fn)fn();return;};if(o.lk&&dempay({k:o.lk,p:o.wk})){ll.users[o.u][o.ok][OZ[6]]=O4[2];if(fn)fn();return;}
		var wb=parse(ledge[L1[1]][o.wk][PZ[2]]),y=parse(o.tl),x=wb-y,a=mrgar(LX,[o.ty,o.u,(o.ok)?o.ok:'',y,wb,x,o.dt]);a.key=o.key;if(y>wb)return;ledge[L1[1]][o.wk][PZ[2]]=x;ledge[L1[1]][o.wk][PZ[3]][o.key]=a;ledge[L1[1]][o.wk][PZ[5]][o.key]=true;if(o.ok)ll[M4[9]][o.ok][O1[5]]=F7[2];if(o.lk)ll.shoplists[o.lk][OZ[6]]=O4[2];if(fn)fn();flashbox('payment was made successfully...');
	}
	function mypics(o,lv){
		var a=((lv)?ll.livestocks:ll[M4[7]])[o.p][M5[3]][o.k],b={},c=(a.more_pix)?a.more_pix:{};if(ocn(a[M7[0]]))b['pix-'+datemap().key]=a[M7[0]];for(var i in c)b[c[i].key]=c[i];return b;
	}
	function searchindex(s){
		s=s.toLowerCase();
		var u=ll[M4[7]],y=ll.livestocks,sp={'product':{},'item':{},'livestock':{},lives:{}},a,b,c,d,p,ct=0,k=0,z=0,zz=0;
		for(var i in u){ct++;p=(ocn(u[i][M5[2]]))?u[i][M5[2]].off:'img/shop.png';if(i.toLowerCase().indexOf(s)>(-1))sp.product['index-'+ct]=mrgar(Xx,[X2[0],p,i,u[i][M5[1]],'','']);a=u[i][M5[3]];if(ocn(a))for(var v in a){k++;b=(ocn(a[v][M7[0]]))?a[v][M7[0]].off:'img/bag2.jpeg';if(v.toLowerCase().indexOf(s)>(-1))sp.item['index-'+k]=mrgar(Xx,[X2[1],b,v,a[v][M5[1]],i,a[v][M7[3]]]);};};for(var i in y){ct++;p=(ocn(y[i][M5[2]]))?y[i][M5[2]].off:'img/bag2.jpeg';if(i.toLowerCase().indexOf(s)>(-1))sp.livestock['index-'+ct]=mrgar(Xx,[X2[2],p,i,y[i][M5[1]],y[i][M7[3]],'']);a=y[i][M5[3]];if(ocn(a))for(var v in a){k++;b=(ocn(a[v][M7[0]]))?a[v][M7[0]].off:'img/bag2.jpeg';if(v.toLowerCase().indexOf(s)>(-1))sp.lives['index-'+k]=mrgar(Xx,[X2[3],b,v,a[v][M5[1]],i,a[v][M5[1]]]);};};return {'item':sp.item,'product':sp.product,livestock:sp.livestock,lives:sp.lives};
	}//['entity','img','name','shop','product','price']
	function itemstray(){
		var a=ll[M4[7]],b=ll.livestocks,c={},d,e,f;for(var i in a){d=a[i][M5[3]];for(var v in d)c[v]=mrgar(W1,[O3[0],v,d[v][M3[2]],i,d[v][M7[3]],(d[v][M7[0]])?d[v][M7[0]].off:'img/bag2.jpeg']);};for(var i in b){d=b[i][M5[3]];for(var v in d)c[v]=mrgar(W1,[O3[1],v,d[v][M3[2]],i,d[v][M7[3]],(d[v][M7[0]])?d[v][M7[0]].off:'img/bag2.jpeg']);};return c;
	}//('entity,name,description,parent,price,img')
	function listindex(k){clg(k);
		k=k.toLowerCase();var a=itemstray(),b={};for(var i in a)if(i.toLowerCase().indexOf(k)>(-1))b[i]=a[i];return b;
	}
	function validitem(s){
		var a=itemstray();return (!a[cleaname(s)])?false:true;
	}
	function newlist(o){clg(o);
		var id=ll.users[o.u].userID,a=mrgar(OZ,[o.tg,{u:id,n:o.u},o.o,'',o.ttl,datemap(),O4[0]]);a.key=o.k;ll.users[o.u].shoplists[o.k]=true;ll.shoplists[o.k]=a;socket.emit('newlist',{u:o.u,o:a,k:o.k});
	}//('tag,customer,items,charges,total,date,status')
	function passlist(o){
		ll.shoplists[o.k][OZ[6]]=O4[3];flashbox('shopping List Confirmed Successfully...');socket.emit('passlist',o);
	}
	function xlist(o){
		ll.shoplists[o.k][OZ[6]]=O4[4];flashbox('shopping List Aborted Successfully...');socket.emit('xlist',o);
	}
	function pay4mylist(v,fn){if(fn.f4)fn.f4(v);
		var o=cloneo(v),a=ll.shoplists[o.k];o.tl=parse(a[OZ[4]])+parse(a.charges);o.dt=datemap();o.key='payment-'+o.dt.key;o.lk=o.k;o.ty=LY[1];o.wk=ll.users[o.u][L1[1]][PZ[1]];socket.emit('pay4list',o);socket.on('listpaid',()=>{makepayment(o,()=>{fn.fx();});});
	}
	function chargelist(o){if(!ll.shoplists||!ll.shoplists[o.k])return;if(kaya[o.u])if(!ll.users[o.u].messages)ll.users[o.u].messages=mrgar(N1,[o.id.u,{},{},{}]);ll.users[o.u].messages[N1[1]][o.mk]=mrgar(N2,[N3[0],o.id,N4[1],o.ms,o.dt,o]);fro[o.u].fn();NP.f1(SO.s8);
		var wk=false,y={},a=ll.shoplists[o.k];for(var i in o.o){if(i==OZ[3]){if(!a[OZ[3]]||(parse(a[OZ[3]])!=parse(o.o[i]))){ll.shoplists[o.k][OZ[3]]=o.o[i];if(!wk)wk=true;};}else if(o.o[i]!=a[i]){ll.shoplists[o.k][i]=o.o[i];if(!wk)wk=true;};};ll.shoplists[o.k][OZ[6]]=O4[1];if(sli[o.k])sli[o.k].f1();flashbox(a[OZ[0]]+"'s Charges was just updated..");
	}
	function username(o){
		var a=ll.users,b=o.n;for(var i in a)if(a[i].userID==o.u)b=a[i].bd[F1[0]];return b;
	}
	async function amread(o){
		if(ll.users[o.u].messages[N1[2]][o.m])return;ll.users[o.u].messages[N1[2]][o.m]=cloneo(cloneo(ll.users[o.u].messages[N1[1]][o.m]));delete ll.users[o.u].messages[N1[1]][o.m];socket.emit('amread',o);
	}
	
	
	
	
	
	
	
	
	var homemarq=(o,fn)=>{if(!ll.updates)ll.updates={};
		var a=ll.updates,ws=marq('widthun','d-flex',{scrollamount:3,behavior:'scroll',direction:'left'}),rd=sect('widthun','ohidden my-4','',[ws.e]),eo={e:rd};for(var i in a)APP(ws.e,myboy(i));function myboy(v){var v1=(v.split('-')[0]=='par')?colbox('pad1',3,3,3,3,[par([small(a[v].o,'grey6','font15').e],'wrap')],'lfloat card mt-2 mx-1'):colbox('nopad',3,3,3,3,[img(a[v].o.off,'','img-fluid my-2')],'lfloat mx-2');addEvent(ws.e,'end',()=>{clg(eo);});addEvent(v1,'click',()=>{myf1(v);});return v1;};function myf1(v){};return eo;
	}
	var messagebox=(o,fn)=>{
		var a=ll.users[o.u].messages[o.k][o.m],hd=pah('head',[xbut('xmsg'),hea(5,[strong(a[N2[0]],'green').e],'nomargin'),hea(6,[small(a[N2[4]].f,'grey6').e],'nomargin','fw-light')]),bw='',wb=(()=>{switch(a[N2[0]]){case N3[0]:bw='open shopping list';break;case N3[1]:bw='open order';break;};})(),kk=(bw)?center([but(bw,'button','mkey1','btn btn-sm btn-warning px-5 py-1 mt-4')]):center(),ws=sect('','py-4','',[par([small(a[N2[3]],'grey6').e])]),rd=colbox('neuboy',5,6,7,11,[hd,ws,kk.e]),eo={e:rd};myf1();function myf1(){if(o.k!=N1[1])return;amread(o);fro[o.u].fn();};function myf2(){if(a[N2[0]]==N3[0])fro[o.u].f10({u:o.u,k:a.more.k});if(a[N2[0]]==N3[1])fro[o.u].f10({u:o.u,k:a.more.k});};function myfx(){fn.f5();};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmsg')myfx();if(e.id=='mkey1')myf2();});return eo;
	}
	var unreadmessages=(u,fn)=>{
		var x=revob(ll.users[u].messages[N1[1]]),hd=pah('head',[par([strong('Unread Messages','green').e])]),ua=sect(),ws=sect('','','',[sect('','my-3','',[ua])]),rd=sect('','bshadow2 pt-2 pb-5','',[hd,ws]),eo={e:rd};if(!ocn(x))APP(ua,center([small('you currently have no unread messages').e]).e);for(var i in x)APP(ua,myboy(i,N1[1]));function myf1(v){fn.f4(v);};function myboy(v,k){var v1=(k==N1[1])?x[v]:y[v],v2=sect('','pt-2 px-2 bborder hov2','',[par([strong(v1[N2[0]],'blue','font12').e],'nomargin'),par([small(v1[N2[3]],'grey6','font10').e],'nomargin','mt-1 line1'),par([small(v1[N2[4]].f,'','font10').e],'nomargin','mb-1 line1 blue')]);addEvent(v2,'click',()=>{myf1({u:u,p:k,k:k,m:v});});return v2;};return eo;
	}
	var readmessages=(u,fn)=>{
		var x=revob(ll.users[u].messages[N1[2]]),hd=pah('head',[par([strong('Read Messages','blue').e])]),ua=sect(),ws=sect('','','',[sect('','my-3','',[ua])]),rd=sect('','pt-2 pb-5','',[hd,ws]),eo={e:rd};if(!ocn(x))APP(ua,center([small('you currently have no read messages').e]).e);for(var i in x)APP(ua,myboy(i,N1[2]));function myf1(v){fn.f4(v);};function myboy(v,k){var v1=x[v],v2=sect('','pt-2 px-2 bborder hov2','',[par([strong(v1[N2[0]],'grey','font12').e],'nomargin'),par([small(v1[N2[3]],'grey6','font10').e],'nomargin','mt-1 line1'),par([small(v1[N2[4]].f,'','font10').e],'nomargin','mb-1 line1 blue')]);addEvent(v2,'click',()=>{myf1({u:u,p:k,k:k,m:v});});return v2;};return eo;
	}
	var messagehome=(u,fn)=>{
		var x=revob(ll.users[u].messages[N1[1]]),y=revob(ll.users[u].messages[N1[2]]),hd=pah('head',[hea(5,[strong('All Messages','green').e])]),ua=sect(),ub=sect(),ws=sect('','','',[sect('','mt-3 mb-5 p-2 pb-5 bshadow2','',[hea(6,[strong('Unread Messages','grey').e],''),ua]),sect('','my-3','',[hea(6,[strong('Read Messages','grey').e],''),ub])]),rd=sect('','','',[hd,ws]),eo={e:rd};if(!ocn(x))APP(ua,center([small('you currently have no unread messages').e]).e);if(!ocn(y))APP(ub,center([small('you currently have no read messages').e]).e);for(var i in x)APP(ua,myboy(i,N1[1]));for(var i in y)APP(ub,myboy(i,N1[2]));function myf1(v){fro[u].fn();fn.f4(v);};function myboy(v,k){var v1=(k==N1[1])?x[v]:y[v],v2=sect('','pt-2 px-2 bborder hov2','',[par([strong(v1[N2[0]],(k==N1[1])?'green':'grey','font12').e],'nomargin'),par([small(v1[N2[3]],'grey6','font10').e],'nomargin','mt-1 line1'),par([small(v1[N2[4]].f,'','font10').e],'nomargin','mb-1 line1 blue')]);addEvent(v2,'click',()=>{myf1({u:u,p:'',k:k,m:v});});return v2;};return eo;
	}
	var messages=(u,fn)=>{if(!ll.users[u].messages)ll.users[u].messages=mrgar(N1,[o.u,{},{},{}]);
		var x=['all messages','unread messages','read messages'],mn=popmenu({id:'nopad',a:x,k:[but('Tools','button','','btn btn-sm btn-warning py-0 noline mb-3')],fnc:myfm}),hd=pah('head',[xbut('xmp'),hea(5,[strong('Messages','grey6','underline').e]),mn.e]),ws=sect(),rd=sect('','p-2 pt-4 ohidden','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,f6:myf6,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;mso[u]=eo;myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf1();if(v==x[1])myf2();if(v==x[2])myf3();};function myf0(v,k){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v,k:k};if(v==ar[1])ec={e:x2.e,v:v,k:k};if(v==ar[2])ec={e:x3.e,v:v,k:k};if(v==ar[3])ec={e:x4.e,v:v,k:k};if(v==ar[4])ec={e:x5.e,v:v,k:k};if(v==ar[5])ec={e:x6.e,v:v,k:k};if(v==ar[6])ec={e:x7.e,v:v,k:k};if(v==ar[7])ec={e:x8.e,v:v,k:k};APP(ws,ec.e);};function myf1(){x1=messagehome(u,eo);myf0(ar[0]);};function myf2(){x2=unreadmessages(u,eo);myf0(ar[1]);};function myf3(){x3=readmessages(u,eo);myf0(ar[2]);};function myf4(v){x4=messagebox(v,eo);myf0(ar[3],v.p);};function myf5(){if(ec.k){myf3();}else{myf1();};};function myf6(v){if(ec.v==ar[0])myf1();if(ec.v==ar[1])myf2();};function myf7(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmp')myfx();});return eo;
		
	}
	var notiplay=()=>{
		var pl=$$$('audio'),eo={e:pl,f1:myf1,f2:myf2};
		NP=eo;
		
		function myf1(v){
			pl.src=v;
			pl.play();
		}
		function myf2(v){
			
		}
		
	}
	var try2cancelist=(o,fn)=>{
		var w=ll.shoplists[o.k],hd=pah('head',[xbut('xtp'),hea(5,[small('Abort Shopping List','grey6').e])]),ws=sect('','','',[par('You are trying to abort '+w.tag+', which means this order\'s proccess will be deactivated')]),rd=colbox('neuboy',10,11,12,12,[hd,ws,center([but('Abort','button','tkey1','btn btn-sm btn-danger px-5 mt-4')]).e]),eo={e:rd},val=true;function myfx(){fn.f1();};function myf1(v){xlist(o);myfx();};function myf2(){};addEvent(rd,'keydown',(v)=>{var e=v.key,ev=v.code;if(e=='Enter'||ev=='Enter')myf1();if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='tkey1')myf1();if(e.id=='xtp')myfx();});return eo;
	}
	var confirmlist=(o,fn)=>{
		var w=ll.shoplists[o.k],hd=pah('head',[xbut('xtp'),hea(5,[small('Confirm Shopping List Delivery','purple').e])]),ws=sect('','','',[par('You are trying to Confirm the delivery of '+w.tag+', which means You have recieved and confirm the package. Please Make sure you properly inspect your delivery before confirming...','grey6')]),rd=colbox('neuboy',10,11,12,12,[hd,ws,center([but('Confirm','button','tkey1','btn btn-sm btn-success px-5 mt-4')]).e]),eo={e:rd},val=true;function myfx(){fn.f1();};function myf1(v){passlist(o);myfx();};function myf2(){};addEvent(rd,'keydown',(v)=>{var e=v.key,ev=v.code;if(e=='Enter'||ev=='Enter')myf1();if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='tkey1')myf1();if(e.id=='xtp')myfx();});return eo;
	}
	var wait4listpay=(o)=>{
		var rd=colbox('neuboy',5,6,7,12,[center([hea(1,[icon2('command','blue','mb-2',{style:'font-size:3em;'})]),small('Payment for '+ll.shoplists[o.k].tag+' in progress, please wait a bit...','blue').e]).e]),eo={e:rd};return eo;
	}
	var paylistaddgwap3=(o,fn)=>{
		 var hd=pah('head',[xbut('xag3'),hea(5,[strong('Online Payment','grey6').e])]),ws=sect('','p-2'),rd=sect('','p-2','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0={u:o.u};myf1();function myfx(){fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=agwap1(eo);myf0(ar[0]);(UL[o.u])?myf2(UL[o.u]):onitempayment(o,eo);};function myf2(v){x2=agwap2(v,eo);myf0(ar[1]);};function myf3(){fn.f3();};function myf4(){x4=gwapfail(()=>{fn.fx();},'Your One Time Payment Failed!!!');myf0(ar[3]);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xag3')myfx();});return eo;
	}
	var donatelist=(o,fn)=>{
		var a=ll.shoplists[o.k],u=o.u,x=ll.users[u][L1[1]][PZ[1]],z=parse(a.charges)+parse(a[O1[3]]),hd=pah('head',[hea(3,[strong('Confirm Details','blue').e])]),ub=sect('','','',[sect('','mb-3','',[par('You are about to make a One Time Payment of N'+barme(z)+' for '+a.tag+'. Gateway CHARGES may Apply.','grey6')])]),ws=sect('','p-2','',[ub]),rd=colbox('neuboy',7,8,9,12,[hd,ws,center([butgroup(1,[but('back','button','key1','btn btn-md btn-danger px-5'),but('proceed','button','key2','btn btn-md btn-warning white px-3')],'','','mt-3')]).e]),eo={e:rd};function myf1(){fn.fx();};function myf2(){fn.f2();};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='key1')myf1();if(e.id=='key2')myf2();});return eo;
	}
	var pay4list3=(o,fn)=>{
		var a=ll.shoplists[o.k],u=o.u,x=ll.users[u][L1[1]][PZ[1]],z=parse(a.charges)+parse(a[O1[3]]),hd=pah('head',[xbut('xagwap'),hea(4,[strong('One Time Payment','green').e])]),ws=sect('','pt-3'),rd=sect('','p-2 pt-3','',[hd,ws]),eo={e:rd,fx:myfx,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,f6:myf6},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0={u:u,k:x,lk:o.k};myf1();function myfx(){if(!UL[u])socket.emit('xpay',{u:u});fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=donatelist(o,eo);myf0(ar[0]);};function myf2(){x0.a=z;x0.m=L3[0];x3=paylistaddgwap3(x0,eo);myf0(ar[2]);};function myf3(){pay4mylist(o,fn);};function myf4(v){};function myf5(v){x5=gwapenter(()=>{myfx();myf1();});myf0(ar[4]);};function myf6(v){x6=gwapfail(()=>{myfx();},'Your One-Time  Failed!!!');myf0(ar[5]);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xagwap')myfx();});return eo;
	}
	var pay4list2=(o,fn)=>{
		var a=ll.shoplists[o.k],u=o.u,x=ll.users[o.u][L1[1]][PZ[1]],y=parse(ledge[L1[1]][x][PZ[2]]),z=parse(a.charges)+parse(a[OZ[4]]),tx=(z>y)?('you currently have insufficient funds in your wallet to pay for '+a.tag+'. You need additional N'+barme(z-y)+' to make payment.'):('N'+barme(z)+' is about to be deducted from your wallet to pay for '+a.tag+'. Your remaining balance will be N'+barme(y-z)),hd=pah('head',[xbut('xp2'),hea(5,[strong('Pay From Wallet.','purple').e],'nomargin')]),ws=sect('','py-5','',[par(tx,((y>z)?'green':'red'))]),rd=colbox('neuboy',6,7,8,12,(y>z)?[hd,ws,center([but('make payment','button','pkey3','btn btn-sm btn-success py-1 px-5')]).e]:[hd,ws]),eo={e:rd};function myfx(){fn.f1();};function myf1(){pay4mylist(o,fn)};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xp2')myfx();if(e.id=='pkey3')myf1();});return eo;
	}
	var pay4list1=(o,fn)=>{
		var x=P1,y=cta(P1),hd=pah('head',[hea(5,[small('choose payment method','grey6').e])]),ws=sect('','pt-4'),rd=colbox('neuboy',6,7,9,12,[hd,ws]),eo={e:rd};for(var i in x)APP(ws,myboy(i));function myf1(v){(v==y[0])?fn.f2():fn.f3();};function myboy(v){var v1=sect('bblack','p-3 pb-4 mb-2','',[hea(4,[strong(v,'white').e],'nomargin'),par(x[v],'white')]);addEvent(v1,'click',()=>{myf1(v);});return v1;};return eo;
	}
	var pay4list=(o,fn)=>{
		var a=ll.shoplists[o.k],hd=pah('head',[xbut('xp4m'),hea(4,[small('pay for '+a.tag,'purple').e])]),ws=sect(),rd=sect('','p-2 pt-4 ohidden','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,fx:myfx},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfx(){fn.f3(o);};function myf0(v,k){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v,k:k};if(v==ar[1])ec={e:x2.e,v:v,k:k};if(v==ar[2])ec={e:x3.e,v:v,k:k};if(v==ar[3])ec={e:x4.e,v:v,k:k};if(v==ar[4])ec={e:x5.e,v:v,k:k};if(v==ar[5])ec={e:x6.e,v:v,k:k};if(v==ar[6])ec={e:x7.e,v:v,k:k};if(v==ar[7])ec={e:x8.e,v:v,k:k};APP(ws,ec.e);};function myf1(){x1=pay4list1(o,eo);myf0(ar[0]);};function myf2(v){x2=pay4list2(o,eo);myf0(ar[1],v);};function myf3(v){x3=pay4list3(o,eo);myf0(ar[2]);};function myf4(v){x4=wait4listpay(v);};function myf5(){if(ec.v==ar[0])myf1();if(ec.k&&ec.k==v)myf2(v);};function myf6(){};function myf7(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xp4m')myfx();});return eo;
	}
	var shoplistab=(o)=>{
		var x=ll.shoplists[o.k][OZ[2]],ub=tbod(),ws=sect('','xflow py-3','',[ctab('widthun','',[thed3('','',W2),ub])]),rd=sect('','','',[ws]),eo={e:rd};for(var i in x)APP(ub,myboy(i));function myboy(v){var v1=x[v],v2=$$$('tr','bborder1','animated zoomIn','',[$$$('td','mnwidth10','py-0 px-2','',[sect('','d-flex','',[img(v1.o.img,'width2','',{style:'margin-right:.4em;'}),sect('','','',[par([small(v1.k,'grey6').e],'nomargin'),par([small(v1.o[W1[2]],'purple').e],'nomargin')])])]),$$$('td','mnwidth5','py-0 px-2','',[small('N'+barme(v1.o[W1[4]]),'grey6').e]),$$$('td','mnwidth5','py-0 px-2','',[small(v1.qty,'grey6').e]),$$$('td','mnwidth5','py-0 px-2','',[small('N'+barme(v1.ttl),'grey6').e])]);return v2;};return eo;
	}//('entity,name,description,parent,price,img')
	var shoplistinfo=(o)=>{
		var x=ll.shoplists[o.k],xc=(x[OZ[3]])?(parse(x[OZ[3]])+parse(x[OZ[4]])):parse(x[OZ[4]]),ax={'pick point':(x.pickpoint)?x.pickpoint:'still pending','drop point':(x.dropoint)?x.dropoint:'still pending',status:x[OZ[6]],charges:(!x[OZ[3]])?'still pending':('N'+x[OZ[3]]),total:('N'+barme(x[OZ[4]])),'gross total':('N'+barme(xc))},ub=tbod(),ws=sect('','xflow py-3','',[ctab('widthun','',[ub])]),rd=sect('','mt-3','',[hea(6,[strong('List Details.','grey').e],'nomargin'),ws]),eo={e:rd};for(var i in ax)APP(ub,myboy(i));function myboy(v){var v1=ax[v],v2=$$$('tr','bborder1','animated zoomIn','',[$$$('td','mnwidth10','py-0 tleft pt-2','',[small(v,'grey6').e]),$$$('td','tright','py-0 pt-2','',[small(v1,'grey6').e])]);return v2;};return eo;
	}//('entity,name,description,parent,price,img')
	var shoplist1=(o,fn)=>{
		var x=ll.shoplists[o.k],x1=shoplistab(o),x2=shoplistinfo(o),x3=sect(),x4=(()=>{switch(x[OZ[6]]){case O4[0]:x3=sect('','','',[par([but('Abort List','button','abkey','btn btn-sm btn-danger px-5 mt-1')])]);break;case O4[1]:x3=sect('','','',[par([but('Make Payment','button','pkey','btn btn-sm btn-success px-5 mt-3')])]);break;case O4[2]:x3=sect('','','',[par([but('Confirm Delivery','button','ckey','btn btn-sm btn-warning px-5 mt-3')])]);break;};})(),ws=sect('','ohidden pt-3','',[x1.e,x2.e]),rd=sect('','ohidden my-1','',[ws,center([x3]).e]),eo={e:rd};function myf1(){fn.f5();};function myf2(){fn.f3();};function myf3(){fn.f2();};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='pkey')myf1();if(e.id=='abkey')myf2();if(e.id=='ckey')myf3();});return eo;
	}
	var shoplist=(o,fn)=>{
		var x=ll.shoplists[o.k],hd=pah('head',[xbut('xnewlist'),hea(5,[strong(x[OZ[0]],'green').e],'nomargin'),par([small(x[OZ[5]].f,'grey6').e])]),ws=sect('','pt-2'),rd=colbox('neuboy',6,7,9,12,[hd,ws],'bshadow2 rad-5 p-2 py-5 mt-3'),eo={e:rd,fx:myfx,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,f6:myf6,f7:myf7,f8:myf8,f9:myf9,f10:myf10,f11:myf11,f12:myf12,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;sli[o.k]=eo;rd.style.minHeight='30em';myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf2();if(v==x[1])myf3();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};if(v==ar[8])ec={e:x9.e,v:v};if(v==ar[9])ec={e:x10.e,v:v};if(v==ar[10])ec={e:x0.e,v:v};APP(ws,ec.e);};function myf1(){x1=shoplist1(o,eo);myf0(ar[0]);};function myf2(){x2=confirmlist(o,eo);myf0(ar[1]);};function myf3(v){x3=try2cancelist(o,eo);myf0(ar[2]);};function myf4(v){};function myf5(){fn.f4(o);};function myf6(){if(ec.v==ar[0])myf1();};function myf7(){};function myf8(v){};function myf9(v){};function myf10(){};function myf11(){};function myf12(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xnewlist')myfx();});return eo;
	}
	var findresult2=(o,fn)=>{
		var a=o,d=sect(),rd=sect('','','',[d]),eo={e:rd};for(var i in a)APP(d,mybox(i));function myf1(v){fn.f2({k:v,o:a[v]});d.innerHTML='';};function mybox(g){var x1=a[g],x2=colbox('nopad',1,1,1,3,[par([img(x1[W1[5]],'width2','img-fluid animated zoomIn')],'findbox-ip')],'lfloat'),x3=colbox('pad2',10,10,10,9,[par([small(x1[W1[1]],'grey6').e],'nomargin','line1 animated zoomIn'),par([small(x1[W1[2]],'grey6').e],'nomargin','animated zoomIn'),par([strong((x1[W1[4]])?('N'+barme(x1[W1[4]])):'','grey6').e],'nomargin','animated zoomIn'),hea(6,[small(cleaname(x1[W1[0]]),'grey').e],'nomargin','line1 animated zoomIn')],'py-2 lfloat'),x4=sect('','bshadow1 mb-2 mt-1 p-2 ohidden','',[x2,x3]),x5=clonetxt(g);addEvent(x4,'click',()=>{myf1(g);});return x4;};return eo;
	}//('entity,name,description,parent,price,img')
	var listinput=(fn)=>{
		var ss=input('widthun','form-control noborder',{placeholder:'enter item name'}),sb=sect('',''),rd=sect('','animated zoomIn gradeback2 ohidden','',[ss,sb]),eo={e:rd,i:ss,f1:myf1,f2:myf2},kv='';function myf1(v){sb.innerHTML='';if(!ss.value)return;var a=listindex(ss.value),b=findresult2(a,eo);APP(sb,b.e);};function myf2(v){ss.value=v.k;fn.f1(v,true);};function myf3(){if(ss.value&&validitem(ss.value))return;fn.f6();};addEvent(ss,'input',()=>{myf1();myf3();});return eo;
	}
	var listrow=(o,fn)=>{
		 var rd=$$$('tr','bborder1','animated zoomIn'),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,f6:myf6},yx=strong(o.c+'. ','grey6'),y1='',y2=small('','purple'),x1=listinput(eo),x2=small('','grey6'),x3=input('width4','form-control',{type:'number'}),x4=small('','');feedme(rd,[$$$('td','mnwidth10','nopad','',[sect('','d-flex','',[yx.e,x1.e]),par([y2.e],'nomargin','',{style:'margin-left:1.7em;'}),par([but('delete item','button','poprow','btn font10 btn-sm btn-danger py-0 px-2')],'nomargin')]),$$$('td','mnwidth5','px-3 nopad','',[x2.e]),$$$('td','mnwidth5','nopad','',[x3]),$$$('td','mnwidth5','px-2 nopad','',[x4.e])]);function myf1(v,vv){y1=v;y2.e.textContent=v.o[W1[2]];x2.e.textContent='N'+barme(v.o[W1[4]]);x3.value=1;myf2(v,vv);};function myf2(v,vv,vx){if(x3.value<1){y1.qty=1;y1.ttl=parse(y1.o[W1[4]]);x4.e.textContent='N'+barme(y1.ttl);fn.f2('',vv);return;};if(!x3.value||!y1)return;x3.value=parseInt(x3.value);y1.qty=parseInt(x3.value);y1.ttl=parse(y1.o[W1[4]])*y1.qty;x4.e.textContent='N'+barme(y1.ttl);fn.f2('',vv);};function myf3(v,vv,xv){if(!y1&&!v&&!vv)flashbox('invalid item '+o.c,'',true);return y1;};function myf4(){fn.f3(o.k);};function myf5(v){yx.e.textContent=v+'. ';o.c=v;};function myf6(){if(y1)y1='';fn.f4();if(x3.value)x3.value='';if(x2.e.textContent)x2.e.textContent='';if(x4.e.textContent)x4.e.textContent='';if(y2.e.textContent)y2.e.textContent='';};addEvent(x3,'input',()=>{myf2('',true,true);});addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='poprow')myf4();});return eo;
	}
	var newshoplist1=(o,fn)=>{
		var x=0,x1=strong('N0.00','grey6').e,ub=tbod(),ut=sect('','mb-5','',[hea(6,[small('Total').e],'nomargin'),hea(5,[x1],'nomargin')]),tu=sect('','ohidden py-2 xflow',{style:'min-height:20em;'},[ctab('widthun','',[thed3('','',W2),ub])]),ws=sect('','ohidden','',[ut,tu]),rd=sect('','ohidden','',[ws,center([par([but('add item','button','akey','btn btn-sm btn-warning px-5 mt-4 mb-2')]),but('submit','button','nskey','btn btn-sm btn-success px-5 mt-2 mb-4')]).e]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4},oe={};myf1();function myf1(){x++;var v1='item-'+datemap().key,v2=listrow({k:v1,c:x},eo);oe[v1]=v2;APP(ub,v2.e);};function myf2(v,vv){var v1=0,v2,v3;for(var i in oe){v2=oe[i].f3(v,vv);if(v2)v1+=parse(v2.ttl);};x1.textContent='N'+barme(v1);if(v){x=0;for(var i in oe){x++;oe[i].f5(x);};};};function myf3(k){if(!oe[k])return;X(oe[k].e);delete oe[k];myf2(true);};function myf4(){var v1=oe,v2=false;for(var i in v1)if(v1[i].f3('',true)){v2=true;myf2(true);break;};if(!v2)x1.textContent='N0.00';};function myf5(){var v1={},vx=false,vy,v2=0,v3='';if(!ocn(oe)){flashbox('Please add at least one item to continue!!!','',true);return;};for(var i in oe){v3=oe[i].f3();if(!v3){vx=true;break;};v2+=parse(v3.ttl);v1[i]=v3;};if(vx)return;vy={o:v1,u:o.k,tg:o.x,ttl:v2,k:'list-'+datemap().key};newlist(vy);fn.f2(vy);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='nskey')myf4();if(e.id=='akey')myf1();if(e.id=='nskey')myf5();});return eo;
	}//('item,price,quantity,total')
	var newshoplisthail=(o,fn)=>{
		var tx=o.tg+' was created successfully. You will Recieve a call from our customer care as soon as possible to complete the proccessing of your Shopping List. Thank You for Shopping with Us, We do hope You are enjoying our services.',hd=pah('head',[hea(5,[strong('List Created...','grey6').e])]),ws=sect('','ohidden p-2 mb-5','',[par([small(tx,'grey6').e],'parag')]),rd=colbox('neuboy',10,11,12,12,[hd,ws,center([but('continue','button','xkey','btn btn-sm btn-warning px-5 mt-2')]).e]),eo={e:rd};function myfx(){fn.fx();};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xkey')myfx();});return eo;
	}
	var newshoplist=(k,fn)=>{
		var x='List '+(ocn(ll.users[k].shoplists)+1),hd=pah('head',[xbut('xnewlist'),hea(5,[strong(x,'green').e])]),ws=sect('','pt-2'),rd=colbox('neuboy',6,7,9,12,[hd,ws],'bshadow2 rad-5 p-2 py-5 mt-3'),eo={e:rd,fx:myfx,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,f6:myf6,f7:myf7,f8:myf8,f9:myf9,f10:myf10,f11:myf11,f12:myf12,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;rd.style.minHeight='30em';myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf2();if(v==x[1])myf3();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};if(v==ar[8])ec={e:x9.e,v:v};if(v==ar[9])ec={e:x10.e,v:v};if(v==ar[10])ec={e:x0.e,v:v};APP(ws,ec.e);};function myf1(){x1=newshoplist1({x:x,k:k},eo);myf0(ar[0]);};function myf2(v){x2=newshoplisthail(v,eo);myf0(ar[1]);};function myf3(v){};function myf4(v){};function myf5(){};function myf6(){};function myf7(){};function myf8(v){};function myf9(v){};function myf10(){};function myf11(){};function myf12(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xnewlist')myfx();});return eo;
	}
	var shopinglistshome=(k,fn)=>{
		var x=revob(ll.users[k].shoplists),xx=ll.shoplists,x1=but([hea(3,[icon2('plnode','addkey','grey')],'addkey','nomargin pt-4'),par([small('New Shopping List','addkey','font12 grey6').e],'addkey','nomargin')],'button','addkey','p-3 text-center bshadow2 rad-5 bgrey ohidden mt-3 mb-5 rad1'),hd=pah('head',[hea(5,[small('Shopping Lists','grey6').e])]),ws=sect('','ohidden py-2'),rd=sect('','ohidden','',[x1,hd,ws]),eo={e:rd};if(!ocn(x))APP(ws,center([small('you currently have no list.','grey').e]).e);for(var i in x)APP(ws,myboy(i));function myf1(){fn.f2();};function myf2(v){fn.f3({u:k,k:v});};function myboy(v){var v1=colbox('pad1',2,3,3,5,[hea(2,[icon2('cartdf','grey6')]),par([strong(xx[v].tag,'grey6').e],'nomargin'),par([strong('N'+barme(xx[v].total),'grey6').e]),par([small(xx[v][OZ[6]],'grey6').e])],'lfloat mx-2 mb-5 bshadow2 rad-5');addEvent(v1,'click',()=>{myf2(v);});return v1};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='addkey')myf1();});return eo;
	}
	var shopinglists=(k,fn)=>{if(!ll.users[k].shoplists)ll.users[k].shoplists={};if(!ll.shoplists)ll.shoplists={};
		var x=('new exam scores').split(','),mn=popmenu({id:'nopad',a:x,k:[but('Tools','button','nopad','btn btn-sm btn-warning px-4 noline')],fnc:myfm}),hd=pah('head',[xbut('xshoplists'),hea(5,[strong('Shopping Lists','green').e])]),ws=sect('','pt-2'),rd=sect('','ohidden p-2 pt-5 mt-3','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,f6:myf6,f7:myf7,f8:myf8,f9:myf9,f10:myf10,f11:myf11,f12:myf12,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;rd.style.minHeight='30em';myf1();lso[k]=eo;function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf2();if(v==x[1])myf3();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};if(v==ar[8])ec={e:x9.e,v:v};if(v==ar[9])ec={e:x10.e,v:v};if(v==ar[10])ec={e:x0.e,v:v};APP(ws,ec.e);};function myf1(){x1=shopinglistshome(k,eo);myf0(ar[0]);scrollup();};function myf2(){x2=newshoplist(k,eo);myf0(ar[1]);};function myf3(v){x3=shoplist(v,eo);myf0(ar[2]);};function myf4(v){x4=pay4list(v,eo);myf0(ar[3]);};function myf5(){};function myf6(){};function myf7(){};function myf8(v){};function myf9(v){};function myf10(){};function myf11(){};function myf12(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xshoplists')myfx();});return eo;
	}
	var newpro=(u,k,fn)=>{
		var x=clonetxt(ll.users[u].bd[k]),y=['current '+k,'new '+k],z='',q=(()=>{switch(k){case FX[0]:z='username';break;case FX[1]:z='email';break;case FX[2]:z='number';break;case F3[3]:z='password';break;case F3[4]:z='number';break;};})(),ul=phul(y,y,[z,z]),hd=pah('hea',[xbut('xnewpro'),hea(3,[small('change '+k,'blue').e])]),ws=sect('','p-2 mt-3','',[ul.e]),rd=colbox('neuboy',8,9,10,12,[hd,ws,center([but('submit','button','nkey1','btn btn-md btn-success px-5')]).e]),eo={e:rd},val=true;function myfx(){fn.f1();};function myf1(v){val=v;if(!v)return;var v1=fetchvalu(ul.o),v2={k:k,x:v1[y[0]],n:v1[y[1]],u:u};if((k==FX[2]&&parse(v2.x)!=parse(x))||(k!=FX[2]&&v2.x!=x)){redtxt(ul.a[y[0]],'invalid '+k+'!!');val=false;return;};newbio(v2);if(k!=FX[0]||(k==FX[0]&&v2.n!=v2.x))myfx();};function myf2(){if(val)return;resetkeys(ul.a,mrgar(y,y));val=true;};addEvent(rd,'keydown',(v)=>{var e=v.key,ev=v.code;if(!val)myf2();if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf1);if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(!val)myf2();if(e.id=='nkey1')validate(ul.o,ul.a,myf1);if(e.id=='xnewpro')myfx();});return eo;
	}
	var proinfo=(u,fn)=>{
		var a=ll.users[u].bd,b=FX,hd=pah('proinfo-hd',[hea(4,[strong('Your Information.').e],'proinfo-h1','text-success')]),ul=$$$('ul','nopad','form'),ia=['cperson','send','teleif','command'],ws=colbox('nopad',12,12,12,12,[ul]),rd=sect('','mt-5 pt-3','',[ws]),eo={e:rd,o:{}},x1,x2,x3,x4,x5;for(var i in b)APP(ul,probox(i));function myf1(v){fn.f2(v);};function probox(v){y0=hea(6,[strong([icon2(ia[v],'probox-ic')],'','').e,strong(cleaname(b[v])).e],'probox-tg','text-success'),y1=small(a[b[v]],'probox-sp',''),x1=par([y1.e],'probox-p','btn-group',{role:'group',title:b[v]}),x2=colbox('probox',12,12,12,12,[y0,par([x1,but('edit','button','proboxkey','btn btn-sm btn-warning rfloat nopad px-2')],'widthun')]);eo.o[b[v]]=y1;addEvent(x2,'click',(e)=>{e=ee(e);if(e.id=='proboxkey')myf1(b[v]);});return x2;};addEvent(rd,'click',(e)=>{e=ee(e);});return eo;
	}
	var profilebox=(s,fn)=>{
		var a=ll.users,em=linkbg(PA,myf2),sr=(ocn(a[s].img))?a[s].img.off:'img/user.png',im=img(sr,'width10'),ip=par([par([im],'box10','rad100'),but([strong([icon2('persons','dpkeyic','white')]).e],'button','dpkey','btn btn-md btn-success')],'profilebox-ip'),pi=proinfo(s,fn),hd=pah('head',[center([ip,em.e]).e]),ws=colbox('nopad',12,12,12,12,[pi.e]),rd=colbox('neuboy',8,9,9,11,[hd,ws]),eo={e:rd},fk=input('','',{type:'file'});
		
		
		
		function myf1(){
			var v1=this.files[0],v2=fileinfo(v1),v3=v2.type.split('/')[0],v4={off:URL.createObjectURL(v1),fi:v2,u:s,name:v2.name,io:ios};
			if(v3!='image'){flashbox(v2.name+' is not a picture!!');return;}
			sho[s].dp(v4.off);
			flashbox('Uploading image please wait...');
			profilepic(v1,v4,()=>{delete pof[s];callprofile(s);})
			
		}
		function myf2(v){
			fn.f2(v);
		}
		function myf3(){
			pof[s].f2(F3[3]);
		}
		function myf4(){
			pof[s].f2(F3[4]);
		}
		
		
		addEvent(fk,'change',myf1);
		addEvent(rd,'click',(e)=>{
			e=ee(e);
			if(e.id=='dpkey'||fada(e).id=='dpkey'||e.id=='dpkeyic')fk.click();
		});
		
		return eo;
	}
	var profile=(s,fn)=>{
		var hd=pah('head',[xbut('xprofile'),hea(3,[strong('Profile','orange').e],'nomargin')]),fw=colbox('profile-fw',12,12,12,12),ws=colbox('nopad',12,12,12,12),rd=colbox('pad1',12,12,12,12,[hd,ws]),pi=img('','profile-img'),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5},ar=['ovd','minf'],ec,x1,x2,x3,x4,x5,x6,y1,y2,y3,y4,y5,y6,w1,w2,w3,w4,w5;
		myf1();
		function myf0(v){
			if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:w1.e,v:v};APP(ws,ec.e);
		}
		function myfx(){
			if(Mng)return;
			fn.f9();
		}
		function myf1(){if(!ll.users[s])return;
			x1=profilebox(s,eo);myf0(ar[0]);scrollup();
		}
		function myf2(v){
			w1=newpro(s,v,eo);
			myf0(ar[1]);
		}
		function myf3(d,v){
			
		}
		function myf4(){
			fw.innerHTML='';w2='';myf1();
		}
		function myf5(){
			
		}
		
		
		addEvent(rd,'click',(e)=>{
			e=ee(e);
			if(e.id=='xprofile')myfx();
		});
		return eo;
	}
	var newcart=(u,fn)=>{
		var a=['enter cart name'],b=ll.users[u][F4[4]],ul=phul(a,a,['username']),hd=pah('head',[xbut('xnewcart'),hea(3,[strong('New Cart','orange').e])]),ws=colbox('pad2',12,12,12,12,[ul.e]),rd=colbox('neuboy',4,5,6,11,[hd,ws,par('','mabot'),center([but('submit','button','key1','btn btn-lg width12 btn-success bwhite green')]).e]),eo={e:rd},val=true;function myfx(){fn.f1();};function myf1(v){val=v;if(!v)return;var v1=fetchvalu(ul.o),v2=v1[a[0]],v3=mrgar(F6,[v2,{},datemap()]);if(b[v2]){redtxt(ul.a[a[0]],'this cart already exist!!');val=false;return;};ll.users[u][F4[4]][v2]=v3;socket.emit('newcart',{o:v3,u:u,c:v2});myfx();};function myf2(){if(val)return;resetkeys(ul.a,mrgar(a,a));val=true;};addEvent(rd,'keydown',(v)=>{var e=v.key,ev=v.code;if(!val)myf2();if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf1);if(e=='Escspe'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(!val)myf2();if(e.id=='xnewcart')myfx();if(e.id=='key1')validate(ul.o,ul.a,myf1);});return eo;
	}
	var mycart=(g,fn)=>{
		var xu=ll.users[g.u],ux=xu[F4[3]],o=xu[F4[4]][g.k][F6[1]][g.c],u=o[O1[1]],a=M7,m,w=g.u,x=O1,a=M7,hd=pah('head',[colbox('nopad',12,12,12,12,[xbut('xodm','dblock'),hea(3,[strong('Cart Item','orange','dblock').e],'nomargin')])]),ic=colbox('pad2',5,8,9,10,[par('','mabot2'),par([img(((u[a[0]]&&u[a[0]][0])?u[a[0]][0].off:'img/bag2.jpeg'),'widthun','rad5')],'nomargin')],'nofloat'),bu=order2(o),ub=colbox('pad2',12,12,12,12,[bu.e]),cg=(!ux[g.c])?center([but('place order','button','key1','btn btn-md btn-success btn-block bwhite green'),par('','mabot1'),but('delete item','button','key2','btn btn-md btn-block btn-danger bwhite red')]):center([but('delete item','button','key2','btn btn-md btn-block btn-danger bwhite red')]),ws=colbox('nopad',12,12,12,12,[ub,cg.e]),rd=colbox('neuboy',5,6,7,11,[hd,center([ic]).e,ws]),eo={e:rd};function myfx(){fn.f2(g.k);};function myf1(){ordercart(g);fn.f3(g);flashbox('Item has been ordered successfully, thank you for your patronage...');};function myf2(){var v1=prompt('Enter "YES" to delete this Item!!');if(!v1||v1!='YES')return;popcarti(g);myfx();flashbox('Item has been deleted successfully...');};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xodm')myfx();if(e.id=='key1')myf1();if(e.id=='key2')myf2();});return eo;
	}
	var mycarts2=(o,fn)=>{
		var a=ll.users[o.u][F4[4]][o.k][F6[1]],hd=pah('head',[par('','mabot2'),xbut('xmyc2'),hea(4,[strong(o.k,'orange').e])]),ub=DIV('','row',''),ws=colbox('nopad',12,12,12,12,[ub]),rd=colbox('pad2',12,12,12,12,[hd,ws]),eo={e:rd};if(!ocn(a))APP(ub,center([small('you currently have 0 items in this cart','grey').e]).e);for(var i in a)APP(ub,mybox(i));function mybox(v){var v1=a[v],va=v1[O1[1]],vx,v2=(va[M7[0]])?va[M7[0]][0].off:'img/bag2.png',v3=DIV('pad2','col-sm','',[DIV('','card text-light bg-dark','',[DIV('mwidthun','card-title','',[img(v2,'mwidthun')]),DIV('pad2','card-body','',[hea(5,[small(va[M7[1]],'').e],'margin-2','line1'),hea(5,[small('N'+barme(v1[O1[3]]),'').e],'margin-2','line1')])])]);addEvent(v3,'click',()=>{myf1(v);});return v3;};function myf1(v){o.c=v;fn.f3(o);};function myfx(){fn.f1();};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmyc2')myfx();});return eo;
	}
	var mycarts1=(u,fn)=>{
		var a=ll.users[u][F4[4]],f1=sect('','pt-5 d-md-flex text-center text-md-start','',[img('img/sign.jpg','rad1','w-50 img-fluid d-none d-md-block d-sm-none p-2'),img('img/sign.jpg','rad1','w-100 img-fluid d-lg-none d-md-none d-sm-block'),DIV('','pb-5 p-2','',[hea(1,[strong('Cart and Items.','red').e]),par('To add Items to CART, First you will have to first create a CART with any name of your choice. After that you can add as meany items as you see fit to the CART and Order those Items anytime any day and we will get it to any drop point.','grey6','lead')])]),ub=DIV('','row',''),ws=colbox('nopad',12,12,12,12,[f1,par('','height5'),hea(4,[strong('Carts','grey').e]),par('','mabot1'),ub]),rd=colbox('pad2',12,12,12,12,[ws]),eo={e:rd};if(!ocn(a))APP(ub,center([small('you currently have 0 orders','grey').e]).e);for(var i in a)APP(ub,mybox(i));function mybox(v){var v1=a[v],va=ocn(v1[F6[1]]),vx,v2=DIV('','col-sm text-start mb-5','',[DIV('pad1','card bg-dark text-light','',[hea(2,[strong([icon2('cart4','orange')]).e],'','card-title'),DIV('','card-body','',[hea(5,[small(v,'orange').e],'nomargin'),hea(6,[small(va+' item(s).','').e])])])]);addEvent(v2,'click',()=>{myf1(v);});return v2;};function myf1(v){fn.f2(v);};return eo;
	}
	var mycarts=(u)=>{
		var hd=pah('head',[xbut('xmyod'),hea(5,[strong('My Carts','orange').e]),butgroup(2,[but('new cart','button','addcart','btn btn-success btn-md bwhite green'),but('delete cart','button','popcart','btn btn-danger btn-sm bwhite red')])]),ws=colbox('topad2',12,12,12,12),rd=colbox('pad2',12,12,12,12,[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x10;myf1();function myfx(){sho[u].f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};if(v==ar[8])ec={e:x9.e,v:v};if(v==ar[9])ec={e:x10.e,v:v};APP(ws,ec.e);};function myf1(){x1=mycarts1(u,eo);myf0(ar[0]);};function myf2(v){x2=mycarts2({k:v,u:u},eo);myf0(ar[1]);};function myf3(v){x3=mycart(v,eo);myf0(ar[2]);};function myf4(){x4=newcart(u,eo);myf0(ar[3]);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmyod')myfx();if(e.id=='addcart')myf4();});return eo;
	}
	var wait4pay=(o)=>{
		var rd=colbox('neuboy',5,6,7,12,[center([hea(1,[icon2('command','blue','mb-2',{style:'font-size:3em;'})]),small('Payment for '+ll[M4[9]][o.k].tag+' in progress, please wait a bit...','blue').e]).e]),eo={e:rd};return eo;
	}
	var payaddgwap3=(o,fn)=>{
		 var hd=pah('head',[xbut('xag3'),hea(5,[strong('Online Payment','grey6').e])]),ws=sect('','p-2'),rd=sect('','p-2','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0={u:o.u};myf1();function myfx(){fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=agwap1(eo);myf0(ar[0]);(UL[o.u])?myf2(UL[o.u]):onitempayment(o,eo);};function myf2(v){x2=agwap2(v,eo);myf0(ar[1]);};function myf3(){fn.f3();};function myf4(){x4=gwapfail(()=>{fn.fx();},'Your One Time Payment Failed!!!');myf0(ar[3]);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xag3')myfx();});return eo;
	}
	var donate3=(k,fn)=>{
		var a=ll[M4[9]][k],u=a[O1[0]],x=ll.users[u][L1[1]][PZ[1]],z=parse(a.charges)+parse(a[O1[3]]),hd=pah('head',[hea(3,[strong('Confirm Details','blue').e])]),ub=sect('','','',[sect('','mb-3','',[par('You are about to make a One Time Payment of N'+barme(z)+' for '+a.tag+'. Gateway CHARGES may Apply.','grey6')])]),ws=sect('','p-2','',[ub]),rd=colbox('neuboy',7,8,9,12,[hd,ws,center([butgroup(1,[but('back','button','key1','btn btn-md btn-danger px-5'),but('proceed','button','key2','btn btn-md btn-warning white px-3')],'','','mt-3')]).e]),eo={e:rd};function myf1(){fn.fx();};function myf2(){fn.f2();};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='key1')myf1();if(e.id=='key2')myf2();});return eo;
	}
	var pay4me3=(k,fn)=>{
		var a=ll[M4[9]][k],u=a[O1[0]],x=ll.users[u][L1[1]][PZ[1]],z=parse(a.charges)+parse(a[O1[3]]),hd=pah('head',[xbut('xagwap'),hea(4,[strong('One Time Payment','green').e])]),ws=sect('','pt-3'),rd=sect('','p-2 pt-3','',[hd,ws]),eo={e:rd,fx:myfx,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,f6:myf6},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0={u:u,k:x,ok:k};myf1();function myfx(){if(!UL[u])socket.emit('xpay',{u:u});fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=donate3(k,eo);myf0(ar[0]);};function myf2(){x0.a=z;x0.m=L3[0];x3=payaddgwap3(x0,eo);myf0(ar[2]);};function myf3(){pay4order({u:u,k:k},fn);};function myf4(v){};function myf5(v){x5=gwapenter(()=>{myfx();myf1();});myf0(ar[4]);};function myf6(v){x6=gwapfail(()=>{myfx();},'Your Cash Topup Failed!!!');myf0(ar[5]);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xagwap')myfx();});return eo;
	}
	var pay4me2=(k,fn)=>{
		var a=ll[M4[9]][k],u=a[O1[0]],x=ll.users[u][L1[1]][PZ[1]],y=parse(ledge[L1[1]][x][PZ[2]]),z=parse(a.charges)+parse(a[O1[3]]),tx=(z>y)?('you currently have insufficient funds in your wallet to pay for '+a.tag+'. You need additional N'+barme(z-y)+' to make payment.'):('N'+barme(z)+' is about to be deducted from your wallet to pay for '+a.tag+'. Your remaining balance will be N'+barme(y-z)),hd=pah('head',[xbut('xp2'),hea(5,[strong('Pay From Wallet.','purple').e],'nomargin')]),ws=sect('','py-5','',[par(tx,((y>z)?'green':'red'))]),rd=colbox('neuboy',6,7,8,12,(y>z)?[hd,ws,center([but('make payment','button','pkey3','btn btn-sm btn-success py-1 px-5')]).e]:[hd,ws]),eo={e:rd};function myfx(){fn.f1();};function myf1(){pay4order({u:u,k:k},fn)};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xp2')myfx();if(e.id=='pkey3')myf1();});return eo;
	}
	var pay4me1=(k,fn)=>{
		var x=P1,y=cta(P1),hd=pah('head',[hea(5,[small('choose payment method','grey6').e])]),ws=sect('','pt-4'),rd=colbox('neuboy',6,7,9,12,[hd,ws]),eo={e:rd};for(var i in x)APP(ws,myboy(i));function myf1(v){(v==y[0])?fn.f2():fn.f3();};function myboy(v){var v1=sect('bblack','p-3 pb-4 mb-2','',[hea(4,[strong(v,'white').e],'nomargin'),par(x[v],'white')]);addEvent(v1,'click',()=>{myf1(v);});return v1;};return eo;
	}
	var pay4me=(k,fn)=>{
		var a=ll[M4[9]][k],hd=pah('head',[xbut('xp4m'),hea(4,[small('pay for '+a.tag,'purple').e])]),ws=sect(),rd=sect('','p-2 pt-4 ohidden','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,fx:myfx},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfx(){fn.f2(k);};function myf0(v,k){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v,k:k};if(v==ar[1])ec={e:x2.e,v:v,k:k};if(v==ar[2])ec={e:x3.e,v:v,k:k};if(v==ar[3])ec={e:x4.e,v:v,k:k};if(v==ar[4])ec={e:x5.e,v:v,k:k};if(v==ar[5])ec={e:x6.e,v:v,k:k};if(v==ar[6])ec={e:x7.e,v:v,k:k};if(v==ar[7])ec={e:x8.e,v:v,k:k};APP(ws,ec.e);};function myf1(){x1=pay4me1(k,eo);myf0(ar[0]);};function myf2(v){x2=pay4me2(k,eo);myf0(ar[1],v);};function myf3(v){x3=pay4me3(k,eo);myf0(ar[2]);};function myf4(v){x4=wait4pay(v);};function myf5(){if(ec.v==ar[0])myf1();if(ec.k&&ec.k==v)myf2(v);};function myf6(){};function myf7(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xp4m')myfx();});return eo;
	}
	var order3=(k)=>{if(!ll[M4[9]][k].charges&&!ll[M4[9]][k].dropoint)return {e:par()};
		var a=ll[M4[9]][k],x=parse(a[O1[3]])+parse(a.charges),b=['dropoint','charges','total'],c=mrgar(b,[a[b[0]],'N'+barme(a[b[1]]),'N'+barme(x)]),ub=sect(),ws=sect('','','',[ub]),rd=sect('','pt-2','',[ws]),eo={e:rd};for(var i in c)APP(ub,sect('','mb-3','',[hea(6,[strong(i,'purple').e],'nomargin','line1'),par(c[i],'grey6')]));return eo;
	}
	var order2=(u)=>{
		var a=ll.users[u].bd,x=['username','email','phone number'],b=mrgar(x,[a[x[0]],a[x[1]],a[x[2]]]),hd=pah('head',[hea(6,[strong('Customer Details','white').e],'','mb-3')]),ub=sect(),ws=sect('','','',[ub]),rd=sect('','p-3 bpurple','',[hd,ws]),eo={e:rd};for(var i in b)APP(ub,sect('','mb-3','',[hea(6,[strong(i,'white').e],'nomargin','line1'),par(b[i],'white')]));return eo;
	}
	var order1=(k)=>{
		var x1=order3(k),x=ll[M4[9]][k],xx=x[O1[1]],a=(x.animal)?mrgar(M11,[xx[M11[0]],xx[M11[1]],xx[M11[2]],xx[M11[3]],xx[M11[4]],'N'+barme(xx[M11[5]]),(x[O1[2]])?x[O1[2]]:1,x[O1[5]]]):mrgar(M10,[xx[M10[0]],xx[M10[1]],xx[M10[2]],'N'+barme(xx[M10[3]]),(x[O1[2]])?x[O1[2]]:1,x[O1[5]]]),hd=pah('head',[hea(5,[small('Order Details','purple').e],'nomargin','mt-3 mb-3')]),ub=sect(),ws=sect('','','',[ub,x1.e]),rd=sect('','pt-2','',[hd,ws]),eo={e:rd};for(var i in a)APP(ub,sect('','mb-3','',[hea(6,[strong(i,'purple').e],'nomargin','line1'),par(a[i],'grey6')]));return eo;
	}
	var order=(u,k,fn)=>{
		var x=ll[M4[9]][k],a=x[O1[1]],is=(ocn(a[M7[0]]))?a[M7[0]].off:'img/bag2.jpeg',bn='',b=(()=>{switch(x[O1[5]]){case F7[2]:bn=center([par([but('confirm delivery','button','pkey4','btn btn-sm py-2 px-5 btn-success widthun mb-3')],'widthun')]).e;break;case F7[0]:bn=center([par([but('cancel order','button','pkey1','btn btn-danger btn-sm py-2 px-5 widthun mb-3')])]).e;break;case F7[1]:bn=center([par([but('cancel order','button','pkey1','btn btn-danger btn-sm py-2 px-5 widthun mb-1 dblock'),but('pay for order','button','pkey2','btn btn-success btn-sm py-2 px-5 widthun dblock')])]).e;break;};})(),im=img(is,'','img-fluid mb-2'),hd=pah('head',[xbut('xorder'),hea(3,[strong(x.tag,'grey6').e]),im]),ub=order1(k),ws=sect('','mb-4','',[ub.e]),rd=colbox('neuboy',6,7,8,12,(bn)?[hd,ws,bn]:[hd,ws]),eo={e:rd};function myfx(){fn.f1();};function myf1(){fn.f4(k);};function myf2(){fn.f3(k);};function myf3(v){fn.f6(k);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xorder')myfx();if(e.id=='pkey1')myf2();if(e.id=='pkey2')myf1();if(e.id=='pkey4')myf3();});return eo;
	}
	var try2cancel=(u,k,fn)=>{
		var w=ll[M4[9]][k],hd=pah('head',[xbut('xtp'),hea(4,[strong('Cancel Order','purple').e]),hea(5,[small(w.tag,'blue').e])]),ws=sect('','','',[par('You are trying to cancel '+w.tag+', which means this order\'s proccess will be deactivated')]),rd=colbox('neuboy',6,7,8,12,[hd,ws,center([but('deactivate','button','tkey1','btn btn-lg btn-danger px-5')]).e]),eo={e:rd},val=true;function myfx(){fn.f2(k);};function myf1(v){cancelorder({k:k},fn);};function myf2(){};addEvent(rd,'keydown',(v)=>{var e=v.key,ev=v.code;if(e=='Enter'||ev=='Enter')myf1();if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='tkey1')myf1();if(e.id=='xtp')myfx();});return eo;
	}
	var passdeliver=(k,fn)=>{
		var w=ll[M4[9]][k],hd=pah('head',[xbut('xtp'),hea(4,[strong('Confirm Order Delivery','purple').e]),hea(5,[small(w.tag,'blue').e])]),ws=sect('','','',[par('You are trying to Confirm the delivery of '+w.tag+', which means You have recieved and confirm the package. Please Make sure you properly inspect your delivery before confirming...','grey6')]),rd=colbox('neuboy',6,7,8,12,[hd,ws,center([but('Confirm','button','tkey1','btn btn-sm btn-success px-5')]).e]),eo={e:rd},val=true;function myfx(){fn.f2(k);};function myf1(v){confirmorder({k:k},fn);};function myf2(){};addEvent(rd,'keydown',(v)=>{var e=v.key,ev=v.code;if(e=='Enter'||ev=='Enter')myf1();if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='tkey1')myf1();if(e.id=='xtp')myfx();});return eo;
	}
	var orders3=(u,fn)=>{
		var x=myxed(u),uv=sect('','pt-5'),hd=pah('head',[hea(4,[small('canceled Orders','grey6').e])]),ws=sect('','','',[uv]),rd=sect('','','',[hd,ws]),eo={e:rd};if(!ocn(x))APP(uv,center([small('no canceled orders').e]).e);for(var i in x)APP(uv,myboy(i));function myf1(v){fn.f2(v);};function myboy(v){var v1=colbox('pad1',2,3,4,12,[hea(1,[icon2('cartf','purple')]),hea(5,[small(x[i].tag,'purple').e],'nomargin'),hea(6,[small((x[i].animal)?'Livestock':'Product','grey6').e],'nomargin')],'dinline');addEvent(v1,'click',()=>{myf1(v);});return v1;};return eo;
	}
	var orders2=(u,fn)=>{
		var x=mypicked(u),uv=sect('','pt-5'),hd=pah('head',[hea(4,[small('Picked Orders','grey6').e])]),ws=sect('','','',[uv]),rd=sect('','mb-5','',[hd,ws]),eo={e:rd};if(!ocn(x))APP(uv,center([small('no picked orders').e]).e);for(var i in x)APP(uv,myboy(i));function myf1(v){fn.f2(v);};function myboy(v){var v1=colbox('pad1',2,3,4,12,[hea(1,[icon2('cartf','purple')]),hea(5,[small(x[i].tag,'purple').e],'nomargin'),hea(6,[small((x[i].animal)?'Livestock':'Product','grey6').e],'nomargin')],'dinline');addEvent(v1,'click',()=>{myf1(v);});return v1;};return eo;
	}
	var orders1=(u,fn)=>{
		var x=mypendings(u),uv=sect('','pt-5'),hd=pah('head',[hea(4,[small('Pending Orders','grey6').e])]),ws=sect('','','',[uv]),rd=sect('','mb-5','',[hd,ws]),eo={e:rd};if(!ocn(x))APP(uv,center([small('no pending orders').e]).e);for(var i in x)APP(uv,myboy(i));function myf1(v){fn.f2(v);};function myboy(v){var v1=colbox('pad1',2,3,4,12,[hea(1,[icon2('cartf','purple')]),hea(5,[small(x[i].tag,'purple').e],'nomargin'),hea(6,[small((x[i].animal)?'Livestock':'Product','grey6').e],'nomargin')],'dinline');addEvent(v1,'click',()=>{myf1(v);});return v1;};return eo;
	}
	var orders4=(u,fn)=>{
		var x=mypaids(u),uv=sect('','pt-5'),hd=pah('head',[hea(4,[small('Paid Orders','grey6').e])]),ws=sect('','','',[uv]),rd=sect('','mb-5','',[hd,ws]),eo={e:rd};if(!ocn(x))APP(uv,center([small('no paid orders','grey').e]).e);for(var i in x)APP(uv,myboy(i));function myf1(v){fn.f2(v);};function myboy(v){var v1=colbox('pad1',2,3,4,12,[hea(1,[icon2('cartf','purple')]),hea(5,[small(x[i].tag,'purple').e],'nomargin'),hea(6,[small((x[i].animal)?'Livestock':'Product','grey6').e],'nomargin')],'dinline');addEvent(v1,'click',()=>{myf1(v);});return v1;};return eo;
	}
	var orders5=(u,fn)=>{
		var x=mydeli(u),uv=sect('','pt-5'),hd=pah('head',[hea(4,[small('Delivered Orders','grey6').e])]),ws=sect('','','',[uv]),rd=sect('','mb-5','',[hd,ws]),eo={e:rd};if(!ocn(x))APP(uv,center([small('no delivered orders','grey').e]).e);for(var i in x)APP(uv,myboy(i));function myf1(v){fn.f2(v);};function myboy(v){var v1=colbox('pad1',2,3,4,12,[hea(1,[icon2('cartf','purple')]),hea(5,[small(x[i].tag,'purple').e],'nomargin'),hea(6,[small((x[i].animal)?'Livestock':'Product','grey6').e],'nomargin')],'dinline');addEvent(v1,'click',()=>{myf1(v);});return v1;};return eo;
	}
	var ordershome=(u,fn)=>{
		var x1=orders1(u,fn),x2=orders2(u,fn),x3=orders3(u,fn),x4=orders4(u,fn),x5=orders5(u,fn),ws=sect('','pt-3','',[x1.e,par('','height2'),x2.e,par('','height2'),x4.e,par('','height2'),x5.e,par('','height2'),x3.e,par('','height')]),rd=sect('','pt-5','',[ws]),eo={e:rd};return eo;
	}
	var myorders=(u,fn)=>{
		var hd=pah('head',[xbut('xmp'),hea(5,[strong('Orders','grey6','underline').e])]),ws=sect(),rd=sect('','p-2 pt-4 ohidden','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,f6:myf6,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;mdo[u]=eo;myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf2();if(v==x[1])myf3();};function myf0(v,k){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v,k:k};if(v==ar[1])ec={e:x2.e,v:v,k:k};if(v==ar[2])ec={e:x3.e,v:v,k:k};if(v==ar[3])ec={e:x4.e,v:v,k:k};if(v==ar[4])ec={e:x5.e,v:v,k:k};if(v==ar[5])ec={e:x6.e,v:v,k:k};if(v==ar[6])ec={e:x7.e,v:v,k:k};if(v==ar[7])ec={e:x8.e,v:v,k:k};APP(ws,ec.e);};function myf1(){x1=ordershome(u,eo);myf0(ar[0]);scrollup();
		};function myf2(v){x2=order(u,v,eo);myf0(ar[1],v);};function myf3(v){x3=try2cancel(u,v,eo);myf0(ar[2]);};function myf4(v){x4=pay4me(v,eo);myf0(ar[3]);};function myf5(v){if(ec.v==ar[0])myf1();if(ec.k&&ec.k==v)myf2(v);};function myf6(v){x6=passdeliver(v,eo);myf0(ar[5]);};function myf7(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmp')myfx();});return eo;
		
	}
	var orderhail=(o,fn)=>{
		var nm=o.u,tx='Thank You '+nm+' for odering '+o.k+'. You will recieve a call from us to complete your Order proccess and initialize delivery. We hope you are enjoying our services, feel free to drop your comments, sujestions or complain at anytime.',hd=pah('noterbox-hd',[hea(2,[small('Order Taken.','green').e],'noterbox-h1'),par([small('order taken successfully.','grey6').e],'noterbox-hp')]),tp=par([small(tx,'grey6').e],'parag','nomargin'),ws=sect('','mb-5','',[tp]),rd=colbox('neuboy',8,9,11,12,[center([par([img('img/logo.png','width13','rad2 img-fluid')]),hd]).e,ws,center([but('continue','button','xkey','px-3 btn btn-md btn-success')]).e]),eo={e:rd};function myfx(){fn.fx();};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xkey')myfx();});return eo;
	}
	var placeorder2=(o,fn)=>{
		var x=M9,a=ll.livestocks[o.p][M5[3]][o.k],ls=(a.least)?parse(a.least):1,bar=par('N'+barme(parse(ls)*parse(a[x[4]])),'grey6 mb-3'),im=img(((ocn(a[M7[0]]))?a[M7[0]].off:'img/sign.jpg'),'','img-fluid p-2 mb-3'),ip=inputpar({k:'width5',t:'enter quantity',i:'grey6',v:(a.least)?a.least:1,ty:'number',fn:{f:myf2},v:ls}),hd=pah('head',[im]),ub=sect('','p-2','',[sect('','mb-2','',[par([strong(x[0],'grey6').e],'nomargin'),hea(5,[small(o.k,'purple').e],'nomargin','fw-bold text-truncate'),hea(4,[small(a[x[1]],'grey6').e],'nomargin','mb-3')]),sect('','mb-2','',[par([small(x[2],'grey6').e],'nomargin'),hea(4,[small(a[x[2]],'grey6').e])]),sect('','','',[par([strong(x[3],'grey6').e],'nomargin'),hea(5,[small(a[x[3]],'grey6').e],'nomarhin','line1 mb-2')]),hea(3,[small('N'+barme(a[x[4]])).e],'grey6','mb-3')]),ws=sect('','py-3','',[ub,par((a.least)?('you can only order at least '+a.least):'','pirple'),ip.e,bar]),rd=sect('bshadow2','p-3 pb-5','',[hd,ws,center([but('place order','button','pkey1','btn btn-md fw-light btn-success px-5')]).e]),eo={e:rd};function myf1(){var v1=cloneo(o);v1.ani=true;v1.q=(ip.s.value)?ip.s.value:1;if(!ip.s.value){flashbox('please enter quantity!!!','',true);return;};if(a.least&&parse(ip.s.value)<parse(a.least)){flashbox('You can only order at least '+a.least,'',true);return;};placeneworder(v1);fn.f2();};function myf2(v){bar.innerHTML='N'+barme(parse(v)*parse(a[x[4]]))};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='pkey1')myf1();});return eo;
	}//['name','description','age','breed','price']
	var makeorder2=(o,fn)=>{
		var x=ll.livestocks[o.p][M5[3]],hd=pah('head',[xbut('xpodr'),hea(4,[strong('New Order','green').e])]),ws=sect('','pt-3'),rd=colbox('neuboy',7,8,9,12,[hd,ws],'pt-5 mt-5'),eo={e:rd,fx:myfx,f1:myf1,f1b:myf1b,f2:myf2,f3:myf3},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();rd.style.minHeight='25em';function myfx(){fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=placeorder2(o,eo);myf0(ar[0]);};function myf1b(){myf0(ar[0]);}function myf2(v){x2=orderhail(o,eo);myf0(ar[1]);};function myf3(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xpodr')myfx();});return eo;
	}
	var placeorder1=(o,fn)=>{
		var x=M7,a=ll[M4[7]][o.p][M5[3]][o.k],ls=(a.least)?parse(a.least):1,bar=par('N'+barme(parse(ls)*parse(a[M9[4]])),'grey6','mb-3'),im=img(((ocn(a[x[0]]))?a[x[0]].off:'img/sign.jpg'),'','img-fluid p-2 mb-3'),ip=inputpar({v:ls,fn:{f:myf2},k:'width5',t:'enter quantity',i:'grey6',ty:'number'}),hd=pah('head',[im]),ub=sect('','p-2','',[sect('','mb-5','',[par([strong(x[1],'grey6').e],'nomargin'),hea(5,[small(o.k,'purple').e],'nomargin','fw-bold text-truncate line1'),hea(6,[small(a[x[2]],'grey6').e],'nomargin line1','mb-2')]),sect('','mb-2','',[par([strong(x[3],'grey6').e],'nomargin'),hea(3,[small('N'+barme(a[x[3]])).e],'grey6','mb-3')])]),ws=sect('','py-3','',[ub,par((a.least)?('you can only order at least '+a.least):'','pirple'),ip.e,bar]),rd=sect('bshadow2','p-3 pb-5','',[hd,ws,center([but('place order','button','pkey1','btn btn-md fw-light btn-success px-5')]).e]),eo={e:rd};myf2(ls);function myf1(){var v1=cloneo(o);v1.q=(ip.s.value)?ip.s.value:1;if(!ip.s.value){flashbox('please enter quantity!!!','',true);return;};if(a.least&&parse(ip.s.value)<parse(a.least)){flashbox('You can only order at least '+a.least,'',true);return;};placeneworder(v1);fn.f2();};function myf2(v){bar.innerHTML='N'+barme(parse(v)*parse(a[M9[4]]))}addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='pkey1')myf1();});return eo;
		
	}
	var makeorder=(o,fn)=>{
		var x=ll[M4[7]][o.p][M5[3]],hd=pah('head',[xbut('xpodr'),hea(4,[strong('New Order','green').e])]),ws=sect('','pt-3'),rd=colbox('neuboy',7,8,9,12,[hd,ws],'pt-5 mt-5'),eo={e:rd,fx:myfx,f1:myf1,f1b:myf1b,f2:myf2,f3:myf3},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();rd.style.minHeight='25em';function myfx(){fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=placeorder1(o,eo);myf0(ar[0]);};function myf1b(){myf0(ar[0]);}function myf2(v){x2=orderhail(o,eo);myf0(ar[1]);};function myf3(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xpodr')myfx();});return eo;
	}
	var tranz3c=(k,o)=>{
		var x,a=o.p[k],b=mrgar(['total'],['N'+barme(o.tl[k])]),hd=pah('head',[hea(5,[small(k.toUpperCase(),'grey').e])]),bd1=tbod(),bd2=tbod(),th=thed2('bblue','white',LXb),tb1=etab('widthun','',[th,bd1],'mb-2'),tb2=etab('widthun','',[bd2],'mt-2'),ub=sect('','mt-3','',[tb1,tb2]),ws=sect('','','',[ub]),rd=sect('','mt-5 mb-5','',[hd,ws]),eo={e:rd};for(var i in b)APP(bd2,$$$('tr','','bborder','',[$$$('td','nopad','pt-3','',[par([small(i,'grey6').e],'nomargin','tleft')]),$$$('td','nopad','pt-3','',[par([strong(b[i],'grey6').e],'nomargin','tright')])]));for(var i in a)APP(bd1,$$$('tr','','bborder','',[$$$('td','nopad','borderb font11 text-center pt-3','',a[i][LXb[0]]),$$$('td','nopad','borderb font11 text-center pt-3','',a[i][LXb[1]]),$$$('td','nopad','borderb font11 text-center pt-3','',a[i][LXb[2]]),$$$('td','nopad','borderb font11 text-center pt-3','',a[i][LXb[3]]),$$$('td','nopad','borderb font11 text-center pt-3','',a[i][LXb[4]])]));return eo;
	}
	var tranz3b=(k,o)=>{
		var a=o.p[k],hd=pah('head',[hea(5,[strong(k,'grey6').e])]),ws=sect('','pt-2'),rd=sect('','p-3 bshadow2 mb-5 mt-2','',[hd,ws]),eo={e:rd};if(ocn(a))APP(ws,tranz3c(k,o).e);return eo;
	}
	var tranz3=(w,fn)=>{
		var x=paysum(w),ws=sect('','p-2'),rd=sect('','mt-5 pt-5 p-3 bshadow2','',[hea(4,[strong('Payments','blue').e]),ws]),eo={e:rd};for(var i in x.p)APP(ws,tranz3c(i,x).e);if(!ocn(x.p))APP(ws,center([small('you neva make any payment.','grey').e]).e);return eo;
	}
	var tranz2c=(k,o)=>{
		var x,a=o.p[k],b=mrgar(['total'],['N'+barme(o.tl[k])]),hd=pah('head',[hea(5,[small(k.toUpperCase(),'grey').e])]),bd1=tbod(),bd2=tbod(),th=thed2('bgreen','white',L6b),tb1=etab('widthun','',[th,bd1],'mb-2'),tb2=etab('widthun','',[bd2],'mt-2'),ub=sect('','mt-3','',[tb1,tb2]),ws=sect('','','',[ub]),rd=sect('','mb-5 mt-5 pt-3','',[hd,ws]),eo={e:rd};for(var i in b)APP(bd2,$$$('tr','','bborder','',[$$$('td','nopad','pt-3','',[par([small(i,'grey6').e],'nomargin','tleft')]),$$$('td','nopad','pt-3','',[par([strong(b[i],'grey6').e],'nomargin','tright')])]));for(var i in a)APP(bd1,$$$('tr','','bborder','',[$$$('td','nopad','borderb font11 text-center pt-3','',a[i][L6b[0]]),$$$('td','nopad','borderb font11 text-center pt-3','',a[i][L6b[1]]),$$$('td','nopad','borderb font10 text-center pt-3','',a[i][L6b[2]])]));return eo;
	}
	var tranz2b=(k,o)=>{
		var a=o.p[k],hd=pah('head',[hea(5,[strong(k,'grey6').e])]),ws=sect('','pt-5'),rd=sect('','p-3 bshadow2 mb-5 mt-5','',[ws]),eo={e:rd};if(ocn(a))APP(ws,tranz2c(k,o).e);return eo;
	}
	var tranz2=(w,fn)=>{
		var x=topupsum(w),ws=sect('','p-2'),rd=sect('','mt-5 pt-5 p-3 bshadow2','',[hea(3,[strong('TopUps','green').e],''),ws]),eo={e:rd};for(var i in x.p)APP(ws,tranz2c(i,x).e);if(!ocn(x.p))APP(ws,center([small('you neva top up your wallet.','grey').e]).e);return eo;
	}
	var tranz1=(w,fn)=>{
		var x1=tranz2(w,fn),x2=tranz3(w,fn),ws=sect('','','',[x1.e,x2.e]),rd=sect('','pt-3','',[ws]),eo={e:rd};return eo;
	}
	var transreport=(u,fn)=>{
		var w=ll.users[u][L1[1]][PZ[1]],hd=pah('head',[xbut('xtr'),hea(3,[small('Transactions Report.','brown').e])]),ws=sect(),rd=sect('','p-2 pt-5','',[hd,ws]),eo={e:rd,fm:myfm,f1:myf1,f2:myf2},ec,ar=('0,1,2,3,4,5,6,7,8').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9;myf1();function myfx(){fn.f1();};function myfm(v){if(v==x[0])myf2();if(v==x[1])myf3();if(v==x[2])myf4();if(v==x[3])myf5();if(v==x[4])myf6();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};if(v==ar[8])ec={e:x9.e,v:v};APP(ws,ec.e);};function myf1(){x1=tranz1(w,eo);myf0(ar[0]);};function myf2(){};function myf3(){};function myf4(){};function myf5(){callweldome();wdo.f2();fn.f1();};function myf6(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xtr')myfx();});return eo;
	}
	var morehome=(fn)=>{
		var x1=icontray2({a:M1x,b:M1y,fnc:fn.fm}),ws=sect('','p-2','',[x1.e]),rd=sect('','p-2','',[ws]),eo={e:rd};return eo;
	}
	var morer=(u,fn)=>{
		var x=M1x,hd=pah('head',[xbut('xmr'),hea(3,[small('More','brown').e])]),ws=sect(),rd=sect('','p-2 pt-5','',[hd,ws]),eo={e:rd,fm:myfm,f1:myf1,f2:myf2},ec,ar=('0,1,2,3,4,5,6,7,8').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9;myf1();function myfx(){fn.f1();};function myfm(v){if(v==x[0])myf2();if(v==x[1])myf3();if(v==x[2])myf4();if(v==x[3])myf5();if(v==x[4])myf6();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};if(v==ar[8])ec={e:x9.e,v:v};APP(ws,ec.e);};function myf1(){x1=morehome(eo);myf0(ar[0]);scrollup();};function myf2(){x2=contactus(u,eo);myf0(ar[1]);};function myf3(){x3=transreport(u,eo);myf0(ar[2]);};function myf4(){};function myf5(){callweldome();wdo.f2();fn.f1();};function myf6(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmr')myfx();});return eo;
	}//('profile,order reports,how to use,logout')
	var gwaplogshome=(u,fn)=>{
		var x=L8,w=('fplnode,fminode').split(','),a=revob(ledge[L1[1]][u.k][PZ[3]]),q1=['bg-light',''],q2=q1[0],bd=tbod(),tb=etab('widthun','',[bd]),ws=colbox('pad2',12,12,12,12,[tb]),rd=sect('','','',[ws]),eo={e:rd};for(var i in a)APP(bd,myboy(i));function myf1(v){};function myboy(v){var vx=v.split('-')[0],v1,v2,v3,v4;switch(vx){case x[0]:v2='NGN'+barme(a[v][L6[1]]);break;case x[1]:v2='NGN'+barme(a[v][O1[3]]);break;};v1=$$$('tr','','bborder3 p-2','',[$$$('td','nopad','width2 px-2 tright pt-3 pb-2','',[hea(1,[(vx==x[0])?icon2(w[0],'green'):icon2(w[1],'grey6')],'nomargin')]),$$$('td','nopad','tleft pt-3 pb-2','',[par([small(vx,'grey','font10').e],'nomargin','tleft line1'),par([small(a[v].date.f,'grey6','font8').e],'nomargin','tleft line1')]),$$$('td','nopad','tright pt-3 pb-2','',[par([small(v2,'green','font9').e],'nomargin','line1')])]);q2=(q2==q1[0])?q1[1]:q1[0];return v1;};return eo;
	}
	var gwaplogs=(u,fn)=>{
		var hd=pah('head',[hea(6,[strong('Recent Transactions','grey').e],'nomargin')]),ws=sect('','p-1'),rd=sect('','mt-5','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfx(){fro[u].f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=gwaplogshome(u,eo);myf0(ar[0]);};function myf2(){x2=addgwap(u,eo);myf0(ar[1]);};function myf3(){};function myf4(){};function myf5(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmwall')myfx();});return eo;
	}
	var delivered=(o,fn)=>{
		var hd=pah('head',[xbut('xpman'),hea(4,[strong('Confirm Delivery','brown').e]),hea(5,[strong(o.t,'grey6').e],'nomargin')]),ws=sect('','p-3','',[par([small('You are about to confirm the delivery of '+o.t+' by '+o.w+'. Click "delivered" to continue or the exit button above to cancel release.','red').e])]),rd=colbox('neuboy',7,8,9,12,[hd,ws,center([but('delivered','button','key1','btn btn-lg btn-success px-3')]).e]),eo={e:rd};function myfx(){fn.f4(o);};function myf1(){o.k=o.ok;isdelivered(o);myfx();};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='key1')myf1();if(e.id=='xpman')myfx();});return eo;
	}
	var gwapfail=(fnc,tx)=>{
		var bg=center([but('close','button','fkey1','btn btn-lg btn-danger px-4')]).e,rd=colbox('neuboy',5,6,7,12,[center([hea(1,[icon2('fxcircle','red','mb-2',{style:'font-size:5em;'})]),small((tx)?tx:'Payment process failed!!!','red').e]).e,bg]),eo={e:rd};function myf1(){if(fnc)fnc();};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='fkey1')myf1();});return eo;
	}
	var gwapenter=(fnc)=>{
		var bg=center([but('close','button','key1','btn btn-lg btn-success px-4')]).e,rd=colbox('neuboy',5,6,7,12,[center([hea(1,[icon2('cfshield','green','mb-2',{style:'font-size:5em;'})]),small('Payment was processed successfully...','green').e]).e,bg]),eo={e:rd};function myf1(){if(fnc)fnc();};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='key1')myf1();});return eo;
	}
	var addgwap4=(o,fn)=>{
		var hd=pah('head',[par([xbut('xag4')]),hea(5,[strong('Waiter and Amount','blue').e],'nomargin')]),su=select(((ll.waiters)?ll.waiters:{}),'','form-control mb-3'),ws=sect('','p-3','',[par('select the name of the Waiter you are issuing the Topup cash to, to continue the proccess.','grey6'),su.e]),rd=colbox('neuboy',8,9,10,12,[hd,ws,center([but('submit','button','akey4','btn btn-md btn-success px-3')]).e]),eo={e:rd};function myfx(){fn.f1();};function myf1(){var v1=cloneo(o);v1.w=su.e.value;fn.f4(v1);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xag4')myfx();if(e.id=='akey4')myf1();});return eo;
	}
	var agwap1=(fn)=>{
		var w=waiter('Generating Payment Link, Please wait a bit...'),rd=sect('','','',[w.e]),eo={e:rd};return eo;
	}
	var agwap2=(k,fn)=>{
		var w=iframe('widhun','',{src:k,style:'width:100%;min-height:42em;'}),rd=sect('','','',[pah('head',[but('reload','button','key1','btn btn-sm btn-warning bpurple px-4'),hea(6,[small('click the "reload" button above should the payment page not load within 60 seconds or should the page fail to load.','grey6').e],'nomargin')]),w.e]),eo={e:rd};function myf1(){fn.f2(k);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='key1')myf1();});return eo;
	}
	var addgwap3=(o,fn)=>{
		 var hd=pah('head',[xbut('xag3'),hea(5,[strong('Online Payment','grey6').e])]),ws=sect('','p-2'),rd=sect('','p-2','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0={u:o.u};myf1();function myfx(){fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=agwap1(eo);myf0(ar[0]);(UL[o.u])?myf2(UL[o.u]):onitempayment(o,eo);};function myf2(v){x2=agwap2(v,eo);myf0(ar[1]);};function myf3(){x3=gwapenter(()=>{fn.fx();},'Your Cash Topup was successful!!!');myf0(ar[2]);};function myf4(){x4=gwapfail(()=>{fn.fx();},'Your Cash Topup Failed!!!');myf0(ar[3]);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xag3')myfx();});return eo;
	}
	var addgwap2=(m,fn)=>{
		var a=['amount'],ul=phul(a,a,['number']),hd=pah('head',[hea(5,[strong('Enter Amount','grey6').e])]),ub=sect('','p-2 mb-3','',[par([strong('Payment Medium','grey').e],'nomargin','line1'),hea(6,[small(m,'grey6').e],'nomargin')]),ws=sect('','p-2','',[ub,ul.e]),rd=colbox('neuboy',6,7,7,12,[hd,ws,center([butgroup(1,[but('proceed','button','akey2','btn btn-md btn-success')])]).e],'bshadow2'),eo={e:rd},val=true;function myf1(v){val=v;if(!v)return;var v1=fetchvalu(ul.o)[a[0]];fn.f2b(v1);};function myf2(){fn.f1();};function myf3(){if(val)return;resetkeys(ul.a,mrgar(a,a));val=true;};addEvent(rd,'keydown',(v)=>{var e=v.key,ev=e.code;if(!val)myf3();if(e=='Enter'||'Enter'==ev)validate(ul.o,ul.a,myf1);if(e=='Escape'||ev=='Escape')myf2();});addEvent(rd,'click',(e)=>{e=ee(e);if(!val)myf3();if(e.id=='akey1')myf2();if(e.id=='akey2')validate(ul.o,ul.a,myf1);});return eo; 
	}//but('previous page','button','akey1','btn btn-md btn-primary'),
	var addgwap1=(fn)=>{
		var x=L3,y=L4,b=['bg-dark','bpurple'],z=L5,hd=pah('head',[hea(5,[small('Please Select payment Medium','brown').e])]),ub=sect('','p-2'),ws=sect('','pt-3','',[ub]),rd=colbox('neuboy',12,12,12,12,[hd,ws]),eo={e:rd};for(var i in x)APP(ub,myboy(i));function myf1(v){fn.f2(v);};function myboy(v){var u=x[v],v1=colbox('pad1',5,5,5,12,[hea(1,[icon2(z[v],'white','',{style:'font-size:1.5em;'})],''),hea(5,[strong(u,'white').e]),par([small(y[v],'white').e],'parag')],'m-2 pb-5 dinline '+b[v]);addEvent(v1,'click',()=>{myf1(u);});return v1;};return eo;
	}
	var donate2=(k,fn)=>{
		var hd=pah('head',[hea(3,[strong('Confirm Details','blue').e]),par('please take a minute to confirm your details before proceeding.','grey')]),ub=sect('','','',[sect('','mb-3','',[hea(6,[strong('Funds','green').e],'nomargin'),par('N'+barme(k),'grey6')])]),ws=sect('','p-2','',[ub]),rd=colbox('neuboy',7,8,9,12,[hd,ws,center([butgroup(1,[but('back','button','key1','btn btn-md btn-danger px-5'),but('proceed','button','key2','btn btn-md btn-warning white px-3')],'','','mt-3')]).e]),eo={e:rd};function myf1(){fn.f1();};function myf2(){fn.f3(k);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='key1')myf1();if(e.id=='key2')myf2();});return eo;
	}
	var addgwap=(k,fn)=>{
		var u=k.u,hd=pah('head',[xbut('xagwap'),hea(4,[strong('Add Funds To Wallet','green').e])]),ws=sect('','pt-3'),rd=sect('','p-2 pt-3','',[hd,ws]),eo={e:rd,fx:myfx,f1:myf1,f2:myf2,f2b:myf2b,f3:myf3,f4:myf4,f5:myf5,f6:myf6},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0={u:u,k:k.k};myf1();function myfx(){if(!UL[u])socket.emit('xpay',{u:u});fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){myf2(L3[0]);};function myf2(v){x0.m=v;if(v==L3[0]&&UL[u]){myf3(UL[u].a);return;};x2=addgwap2(v,eo);myf0(ar[1]);};function myf2b(v){x1=donate2(v,eo);myf0(ar[0])};function myf3(v){x0.a=v;x3=(x0.m==L3[0])?addgwap3(x0,eo):addgwap4(x0,eo);myf0(ar[2]);};function myf4(v){x4=addgwap5(v,eo);myf0(ar[3]);};function myf5(v){x5=gwapenter(()=>{myfx();myf1();});myf0(ar[4]);};function myf6(v){x6=gwapfail(()=>{myfx();},'Your Cash Topup Failed!!!');myf0(ar[5]);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xagwap')myfx();});return eo;
	}
	var wallet1=(uo,fn)=>{
		var u=uo.u,ot=myoutstanding(u),r=L7,q=['fplnode','people','fpeople'],x=ll.users[u][L1[1]][PZ[1]],z=ledge[L1[1]][x][PZ[8]][L2[0]],y=ledge[L1[1]][x],b1=sect('','py-2','',[par([but([hea(4,[icon2('rparrow','rkey1','white')],'rkey1','nomargin')],'button','rkey1','btn btn-sm nopad btn-link noline')]),par([small('WalletID','white').e],'nomargin'),par([strong(x,'white').e])]),b2=sect('','','',[par([small('Balance','white').e],'nomargin'),hea(5,[strong('N'+barme(y[PZ[2]]),'white').e],'nomargin')]),b3=sect('','mt-3 py-2','',[par([small('Wallet Points','white').e],'nomargin'),hea(6,[strong((z)?z:'0','white').e],'nomargin','line1')]),b4=sect('','mt-3','',[par([small('Outstandings','white').e],'nomargin'),hea(6,[strong('N'+barme(ot),'white').e],'nomargin')]),bw=sect('','p-3','',[b1,b2,b3,b4]),bg=butgroup(1),gw=sect('','mt-4','',[bg]),bc=sect('','','',[bw,gw]),ws=colbox('pad2',12,12,12,12,[bc,par([but('Wallet Logs','button','lkey',' white btn btn-sm btn-link px-4')],'','mt-3')]),rd=sect('bimg6','','',[sect('bred3','py-4','',[ws])]),eo={e:rd};for(var i in r)APP(bg,myboy(i));function myf1(v){if(v==r[0])fn.f2();};function myf2(){fetchwallet({k:uo.k,fn:fn.fr});};function myboy(v){var f=r[v],v1=but([par([strong([icon2(q[v],'white')]).e],'nomargin','line1'),par([small(f,'white').e],'nomargin','line1')],'button','','btn btn-md btn-link noline px-4');addEvent(v1,'click',()=>{myf1(f);});return v1;};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='rkey1')myf2();});return eo;
	}
	var wallethome=(u,fn)=>{
		var x1=wallet1(u,fn),x2=gwaplogs(u,fn),ws=sect('','pt-3','',[x1.e,par('','heaight2'),x2.e]),rd=sect('','','',[ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3};function myf1(v){};function myf2(){fn.f2();};function myf3(v){};return eo;
	}
	var mywallet=(u)=>{
		var kw=ll.users[u][L1[1]][PZ[1]],hd=pah('head',[xbut('xmwall'),hea(5,[strong('Wallet','grey6').e],'nomargin')]),ws=sect('',''),rd=sect('','','',[hd,ws]),eo={e:rd,fr:myfr,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfr(){if(ec.v==ar[0])myf1();};function myfx(){fro[u].f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=wallethome({k:kw,u:u},eo);myf0(ar[0]);scrollup();};function myf2(){x2=(x2)?x2:addgwap({k:kw,u:u},eo);myf0(ar[1]);};function myf3(){};function myf4(){};function myf5(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmwall')myfx();});return eo;
	}
	var dropcomment=()=>{
		var a=C3,b=['enter name','enter email'],ul=phul(a,b,['username','email'],'','','','white'),tx=txtareapar({t:'enter comment',i:'white',h:'4em'}),hd=pah('head',[hea(5,[strong('Drop a Comment','white').e])]),ws=sect('','','',[ul.e,tx.e]),rd=sect('','','',[hd,ws,but('submit','button','dkey1','btn btn-sm btn-success px-5 mt-3')]),eo={e:rd},val=true;function myf1(v){val=v;if(!v)return;if(!tx.s.value){flashbox('please enter comment to submit','',true);return};var v1=fetchvalu(ul.o),v2=tx.s.value,v3=datemap(),v4=mrgar(C2,[v1[a[0]],v1[a[1]],v2,v3]),v5='comment-'+v3.key;v4.key=v5;newcomment({k:v5,o:v4,d:v3});myfx();};function myf2(){if(val)return;resetkeys(ul.a,mrgar(a,b));val=true;};function myfx(){tx.s.value='';ul.o[a[0]].value='';ul.o[a[1]].value='';};addEvent(rd,'keydown',(v)=>{var e=v.key,ev=v.code;if(!val)myf2();if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf1);if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(!val)myf2();if(e.id=='gkey')validate(ul.o,ul.a,myf1);});return eo;
	}
	var dropcomment2=(u)=>{
		var a=ll.users[u].bd,tx=txtareapar({t:'enter comment',i:'white',h:'4em'}),hd=pah('head',[hea(5,[strong('Drop a Comment','white').e])]),ws=sect('','','',[tx.e]),rd=sect('','','',[hd,ws,but('submit','button','dkey1','btn btn-sm btn-success px-5 mt-3')]),eo={e:rd},val=true;function myf1(v){val=v;if(!v)return;if(!tx.s.value){flashbox('please enter comment to submit','',true);return};var v1,v2=tx.s.value,v3=datemap(),v4=mrgar(C2,[a[F3[0]],a[F3[1]],v2,v3]),v5='comment-'+v3.key;v4.key=v5;newcomment({k:v5,o:v4,d:v3});myfx();};function myf2(){if(val)return;resetkeys(ul.a,mrgar(a,b));val=true;};function myfx(){tx.s.value='';};addEvent(rd,'keydown',(v)=>{var e=v.key,ev=v.code;if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf1);if(e=='Escape'||ev=='Escape')myfx();});addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='gkey')validate(ul.o,ul.a,myf1);});return eo;
	}
	var footinfo=(u)=>{
		var a=mrgar(MC,[ll[M4[2]],ll[M4[6]],ll[M4[4]]]),b=mrgar(MC,['house','sendf','phone']),ub=tbod(),bu=etab('widthun','',[ub]),ws=sect('','','',[bu]),x1=colbox('nopad',5,5,12,12,[ws],'mt-5 animated zoomIn dinline'),x2=colbox('nopad',6,6,12,12,[(u)?dropcomment2(u).e:dropcomment().e],'mt-5 animated zoomIn'),rd=sect('','row','',[x2,x1]),eo={e:rd};APP(ub,$$$('tr','underline','','',[$$$('td','','tright','',[strong('Our ','white').e]),$$$('td','','tleft px-1','',[strong(' Contacts','white').e])]));for(var i in a)APP(ub,$$$('tr','','','',[$$$('td','','py-2 tright px-1',{style:'padding-left:2em;'},[icon2(b[i],'white'),small(i+' - ','white').e]),$$$('td','','tleft px-1','',[strong(a[i],'white').e])]));return eo;
	}
	var about1=(u)=>{
		var x1=sect('','mb-4 text-center','',[hea(4,[strong('About Us','white','underline').e],'','mb-4 pt-5 animated zoomIn'),par(abt,'white','lead parag font15 animated zoomIn')]),x2=footinfo(u),rd=sect('','bblack py-5 italic-1 px-4','',[x1,x2.e]),eo={e:rd};return eo;
	}
	var recentitems=(fn)=>{if(!ll.new_items)ll.new_items={};
		var x=0,a=revob(ll.new_items),ub=sect('','p-0'),ws=sect('','pt-3','',[ub]),hd=pah('head',[hea(4,[strong('Recent Items','grey6').e])]),rd=sect('','p-2 pt-3 ohidden','',[hd,ws]),eo={e:rd};if(ocn(a))for(var i in a)if(x<11){APP(ub,popuitem2((typeof a[i]=='string')?{p:a[i],k:i}:a[i]).e);x++;}else{break;};return eo;
	}
	var recentlives=(fn)=>{if(!ll.new_lives)ll.new_lives={};
		var x=0,a=revob(ll.new_lives),ub=sect('','p-0'),ws=sect('','pt-3','',[ub]),hd=pah('head',[hea(4,[strong('Recent Livestocks','grey6').e])]),rd=sect('','p-2 pt-3 ohidden','',[hd,ws]),eo={e:rd};if(ocn(a))for(var i in a)if(x<11){APP(ub,livecover1((typeof a[i]=='string')?{p:a[i],k:i}:a[i]).e);}else{break;};return eo;
	}
	var recentitems2=(u,fn)=>{if(!ll.new_items)ll.new_items={};
		var x=0,a=revob(ll.new_items),ub=sect('','p-0'),ws=sect('','pt-3','',[ub]),hd=pah('head',[hea(4,[strong('Recent Items','grey6').e])]),rd=sect('','p-2 pt-3 ohidden','',[hd,ws]),eo={e:rd};if(ocn(a))for(var i in a)if(x<11){var k=cloneo((typeof a[i]=='string')?{p:a[i],k:i}:a[i]);k.u=u;APP(ub,popuitem6(k,fn).e,fn);x++;}else{break;};return eo;
	}
	var recentlives2=(u,fn)=>{if(!ll.new_lives)ll.new_lives={};
		var x=0,a=revob(ll.new_lives),ub=sect('','p-0'),ws=sect('','pt-3','',[ub]),hd=pah('head',[hea(4,[strong('Recent Livestocks','grey6').e])]),rd=sect('','p-2 pt-3 ohidden','',[hd,ws]),eo={e:rd};if(ocn(a))for(var i in a)if(x<11){var k=cloneo((typeof a[i]=='string')?{p:a[i],k:i}:a[i]);k.u=u;APP(ub,livecover2(k,fn).e);}else{break;};return eo;
	}
	var livecover1=(o,fn)=>{
		var w=M9,x=M8,a=ll.livestocks[o.p][M5[3]][o.k],ix=a[x[0]],vv=(a.more_pix&&ocn(a.more_pix))?mypics(o,true):'',is=(ocn(ix))?ix.off:'img/sign.jpg',im=(vv)?itemsel({o:vv,id:'livecover1'},fn).e:img(is,'','img-fluid rounded-2'),rd=colbox('nopad',3,4,5,5,[im,DIV('','p-2 px-3 mb-2','',[sect('','py-1','',[par([strong(cleaname(w[0]),'grey6').e],'nomargin'),hea(5,[small(o.k,'grey6').e],'nomargin','text-truncate'),hea(6,[small(a[w[1]],'grey6').e],'nomargin')]),sect('','py-1','',[par([strong(cleaname(w[2]),'grey6').e],'nomargin'),hea(6,[small(a[w[2]],'grey6').e])]),sect('','py-1','',[par([strong(cleaname(w[3]),'grey6').e],'nomargin'),hea(6,[small(a[w[3]],'grey6',).e],'nomargin')]),sect('','py-1','',[par([strong(cleaname(w[4]),'grey6').e],'nomargin'),par('N'+barme(a[w[4]]),'purple','fw-bold text-1000')])])],'m-3 mb-5 bwhite pb-4 mb-4 dinline mb-5 h-100 animated zoomIn'),eo={e:rd};return eo;
	}
	var livecover3=(o,fn)=>{
		var w=M9,x=M8,a=ll.livestocks[o.p][M5[3]][o.k],ix=a[x[0]],vv=(a.more_pix&&ocn(a.more_pix))?mypics(o,true):'',is=(ocn(ix))?ix.off:'img/sign.jpg',im=(vv)?itemsel({o:vv,id:'livecover3'},fn).e:img(is,'','img-fluid rounded-2'),rd=colbox('nopad',3,4,5,5,[im,DIV('','p-2 px-3 mb-2','',[sect('','py-1','',[par([strong(cleaname(w[0]),'grey6').e],'nomargin'),hea(5,[small(o.k,'grey6').e],'nomargin','text-truncate'),hea(6,[small(a[w[1]],'grey6').e],'nomargin')]),sect('','py-1','',[par([strong(cleaname(w[2]),'grey6').e],'nomargin'),hea(6,[small(a[w[2]],'grey6').e])]),sect('','py-1','',[par([strong(cleaname(w[3]),'grey6').e],'nomargin'),hea(6,[small(a[w[3]],'grey6',).e],'nomargin')]),sect('','py-1','',[par([strong(cleaname(w[4]),'grey6').e],'nomargin'),par('N'+barme(a[w[4]]),'purple','fw-bold text-1000')])])],'m-3 mb-5 bwhite pb-4 mb-4 dinline mb-5 h-100 animated zoomIn'),eo={e:rd};function myf1(v){(o.f)?fn.f9(o):fn.f2(o.k);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='pkey1')myf1();});return eo;
	}
	var livecover2=(o,fn)=>{
		var w=M9,x=M8,a=ll.livestocks[o.p][M5[3]][o.k],ix=a[x[0]],vv=(a.more_pix&&ocn(a.more_pix))?mypics(o,true):'',is=(ocn(ix))?ix.off:'img/sign.jpg',im=(vv)?itemsel({o:vv,id:'livecover2'},fn).e:img(is,'','img-fluid rounded-2'),rd=colbox('nopad',3,4,5,5,[im,DIV('','p-2 px-3 mb-2','',[sect('','py-1','',[par([strong(cleaname(w[0]),'grey6').e],'nomargin'),hea(5,[small(o.k,'grey6').e],'nomargin','text-truncate'),hea(6,[small(a[w[1]],'grey6').e],'nomargin')]),sect('','py-1','',[par([strong(cleaname(w[2]),'grey6').e],'nomargin'),hea(6,[small(a[w[2]],'grey6').e])]),sect('','py-1','',[par([strong(cleaname(w[3]),'grey6').e],'nomargin'),hea(6,[small(a[w[3]],'grey6',).e],'nomargin')]),sect('','py-1','',[par([strong(cleaname(w[4]),'grey6').e],'nomargin'),par('N'+barme(a[w[4]]),'purple','fw-bold text-1000')])]),center([but([small('proceeed to order','pkey1','px-2').e,icon2('rarrow','pkey1','white')],'button','pkey1','btn btn-sm btn-warning bpurple widthun white py-1 noline mt-3')]).e],'m-3 mb-5 bwhite pb-4 mb-4 dinline mb-5 h-100 animated zoomIn'),eo={e:rd};function myf1(v){(o.f)?fn.f9(o):fn.f2(o.k);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='pkey1')myf1();});return eo;
	}
	var popuitem2=(o)=>{
		var x=M7,a=ll[M4[7]][o.p][M5[3]][o.k],ix=a[x[0]],vv=(a.more_pix&&ocn(a.more_pix))?mypics(o):'',is=(ocn(ix))?ix.off:'img/sign.jpg',im=(vv)?itemsel({o:vv,id:'popuitem2'}).e:img(is,'','img-fluid rounded-2'),rd=colbox('nopad',2,3,3,12,[im,DIV('','p-2 px-3 mb-2','',[hea(6,[small(o.k,'grey6').e],'','fw-bold font15 text-truncate'),hea(6,[small(a[x[2]],'grey6','font10').e]),par('N'+barme(a[x[3]]),'purple','fony10 fw-bold text-1000 mt-3')])],'m-3 mb-5 bwhite pb-4 mb-4 ohidden dinline mb-5 h-100 animated zoomIn'),eo={e:rd};return eo;
	}
	var popuitem6=(o,fn)=>{
		var x=M7,a=ll[M4[7]][o.p][M5[3]][o.k],ix=a[x[0]],is=(ocn(ix))?ix.off:'img/sign.jpg',im=img(is,'','img-fluid rounded-2'),rd=colbox('nopad',2,3,3,12,[im,DIV('','p-2 px-3 mb-2','',[hea(6,[small(o.k,'grey6').e],'','fw-bold font15 text-truncate'),hea(6,[small(a[x[2]],'grey6','font10').e]),par('N'+barme(a[x[3]]),'purple','fony10 fw-bold text-1000 mt-3')]),center([but([small('proceeed to order','pkey1','px-2').e,icon2('rarrow','pkey1','white')],'button','pkey1','btn btn-sm btn-warning bpurple widthun white py-1 noline mt-3')]).e],'m-3 mb-5 bwhite pb-4 mb-4 ohidden dinline mb-5 h-100 animated zoomIn'),eo={e:rd};function myf1(v){fn.f8(o);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='pkey1')myf1();});return eo;
	}
	var popuitem5=(o)=>{
		var cc=(o.c)?' '+o.c:'',x=M7,a=ll[M4[7]][o.p][M5[3]][o.k],ix=a[x[0]],is=(ocn(ix))?ix.off:'img/sign.jpg',im=img(is,'','widthun img-fluid'),ub=sect('bred3','pb-5 pabsolute bot0 widthun h-100 text-justify text-center','',[DIV('pabsolute','widthun p-2 pb-5 px-3',{style:'bottom:20%'},[hea(1,[small(o.k,'white').e],'','fw-bold text-truncate'),hea(3,[small(a[x[2]],'white','lead').e]),hea(1,[strong('N'+barme(a[x[3]])).e],'white','fw-bold text-1000 mt-3'),center([but([small('proceeed to order','pkey1','px-2').e,icon2('rarrow','pkey1','white')],'button','pkey1','btn btn-sm btn-warning bpurple widthun white py-3 noline mt-3')]).e])]),bu=colbox('nopad',12,12,12,12,[im,ub]),rd=DIV('','animated fadeIn white '+cc,'',[bu]),eo={e:rd};function myf1(v){o.fn.f8({p:o.p,k:o.k,u:o.u});};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='pkey1')myf1();});return eo;
	}
	var popuitem4=(o)=>{
		var cc=(o.c)?' '+o.c:'',x=M7,a=ll.livestocks[o.p][M5[3]][o.k],ix=a[x[0]],is=(ocn(ix))?ix.off:'img/sign.jpg',im=img(is,'','widthun img-fluid'),ub=sect('bred3','pb-5 pabsolute bot0 widthun h-100 text-justify text-center','',[DIV('pabsolute','widthun p-2 pb-5 px-3',{style:'bottom:15%'},[hea(1,[small(o.k,'white').e],'','fw-bold text-truncate'),hea(3,[small(a[M9[2]],'white','lead').e]),hea(3,[small(a[M9[3]],'white','lead').e]),hea(3,[small(a[x[2]],'white','lead').e]),hea(1,[strong('N'+barme(a[x[3]])).e],'white','fw-bold text-1000 mt-3'),center([but([small('proceeed to order','pkey1','px-2').e,icon2('rarrow','pkey1','white')],'button','pkey1','btn btn-sm btn-warning bpurple widthun white py-3 noline mt-3')]).e])]),bu=colbox('nopad',12,12,12,12,[im,ub]),rd=DIV('','animated fadeIn white '+cc,'',[bu]),eo={e:rd};function myf1(v){o.fn.f9({p:o.p,k:o.k,u:o.u});};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='pkey1')myf1();});return eo;
	}
	var popuitem=(o)=>{
		var cc=(o.c)?' '+o.c:'',x=M7,a=ll[M4[7]][o.p][M5[3]][o.k],ix=a[x[0]],is=(ocn(ix))?ix.off:'img/sign.jpg',im=img(is,'','widthun img-fluid'),ub=sect('bred3','pb-5 pabsolute bot0 widthun h-100 text-justify text-center','',[DIV('pabsolute','widthun p-2 pb-5 px-3',{style:'bottom:30%'},[hea(1,[small(o.k,'white').e],'','fw-bold text-truncate'),hea(3,[small(a[x[2]],'white','lead').e]),hea(1,[strong('N'+barme(a[x[3]])).e],'white','fw-bold text-1000 mt-3')])]),bu=colbox('nopad',12,12,12,12,[im,ub]),rd=DIV('','animated fadeIn white '+cc,'',[bu]),eo={e:rd};return eo;
	}
	var popuitem3=(o)=>{
		var cc=(o.c)?' '+o.c:'',x=M7,a=ll.livestocks[o.p][M5[3]][o.k],ix=a[x[0]],is=(ocn(ix))?ix.off:'img/sign.jpg',im=img(is,'','widthun img-fluid'),ub=sect('bred3','pb-5 pabsolute bot0 widthun h-100 text-justify text-center','',[DIV('pabsolute','widthun p-2 pb-5 px-3',{style:'bottom:15%'},[hea(1,[small(o.k,'white').e],'','fw-bold text-truncate'),hea(3,[small(a[M9[2]],'white','lead').e]),hea(3,[small(a[M9[3]],'white','lead').e]),hea(3,[small(a[x[2]],'white','lead').e]),hea(1,[strong('N'+barme(a[x[3]])).e],'white','fw-bold text-1000 mt-3')])]),bu=colbox('nopad',12,12,12,12,[im,ub]),rd=DIV('','animated fadeIn white '+cc,'',[bu]),eo={e:rd};return eo;
	}
	var popularsel=(fn)=>{if(!ll.popular)ll.popular={};
		var x=revob(ll.popular),u=cta(x),ux=true,ub=DIV('','carousel-inner'),pk=but([span('','','carousel-control-prev-icon',{'aria-hidden':'true'}),span('Previous','','visually-hidden')],'button','','carousel-control-prev',{'data-bs-target':'#header-carousel','data-bs-slide':'prev'}),nk=but([span('','','carousel-control-next-icon',{'aria-hidden':'true'}),span('Next','','visually-hidden')],'button','','carousel-control-next',{'data-bs-target':'#header-carousel','data-bs-slide':'next'}),ws=DIV('header-carousel','carousel slide',{'data-bs-ride':'carousel'},[ub,pk,nk]),rd=DIV('','p-0 mb-5 mt-4 ohidden','',[ws]),eo={e:rd};APP(ub,myboy(0,'carousel-item active'));for(var i=1;i<ocn(u);i++)APP(ub,myboy(i,'carousel-item'));function myboy(v,k){var vx={c:k,k:x[u[v]][M5[0]],p:(x[u[v]].animal)?x[u[v]][M8[6]]:x[u[v]][A6[2]],lt:ux},v1=(x[u[v]].animal)?popuitem3(vx,fn):popuitem(vx,fn);ux=(ux)?false:true;return v1.e;};return eo;
	}
	var popularse2=(u,fn)=>{if(!ll.popular)ll.popular={};
		var x=revob(ll.popular),u=cta(x),ux=true,ub=DIV('','carousel-inner'),pk=but([span('','','carousel-control-prev-icon',{'aria-hidden':'true'}),span('Previous','','visually-hidden')],'button','','carousel-control-prev',{'data-bs-target':'#header-carousel','data-bs-slide':'prev'}),nk=but([span('','','carousel-control-next-icon',{'aria-hidden':'true'}),span('Next','','visually-hidden')],'button','','carousel-control-next',{'data-bs-target':'#header-carousel','data-bs-slide':'next'}),ws=DIV('header-carousel','carousel slide',{'data-bs-ride':'carousel'},[ub,pk,nk]),rd=DIV('','p-0 mb-5 mt-4 ohidden','',[ws]),eo={e:rd};APP(ub,myboy(0,'carousel-item active'));for(var i=1;i<ocn(u);i++)APP(ub,myboy(i,'carousel-item'));function myboy(v,k){var vx={u:u,c:k,k:x[u[v]][M5[0]],p:(x[u[v]].animal)?x[u[v]][M8[6]]:x[u[v]][A6[2]],lt:ux,fn:fn},v1=(x[u[v]].animal)?popuitem4(vx,fn):popuitem5(vx,fn);ux=(ux)?false:true;return v1.e;};return eo;
	}
	var popularfront=()=>{if(!ll.popular)ll.popular={};
		var hd=pah('head',[center([hea(3,[strong('Popular Items','purple').e])]).e]),ws=sect('','','',(ocn(ll.popular))?[popularsel().e]:[center([small('you neva add popular Items.','grey').e]).e]),rd=sect('','mt-5','',[colbox('neuboy',7,9,10,12,[hd,ws],'px-0')]),eo={e:rd};rd.style.minHeight='25em';return eo;
	}
	var popularfront2=(u,fn)=>{if(!ll.popular)ll.popular={};
		var hd=pah('head',[center([hea(3,[strong('Popular Items','purple').e])]).e]),ws=sect('','','',(ocn(ll.popular))?[popularse2(u,fn).e]:[center([small('you neva add popular Items.','grey').e]).e]),rd=sect('','mt-5','',[colbox('neuboy',7,9,10,12,[hd,ws],'px-0')]),eo={e:rd};rd.style.minHeight='25em';return eo;
	}
	var livestockhome=(k,fn,f)=>{
		var o=ll.livestocks[k],a=M5,x=o[a[3]],sr=(o[a[2]])?o[a[2]].off:'img/bag2.jpeg',im=img(sr,'','img-fluid width5'),hd=pah('head',[im,par(o[a[1]],'grey6')]),ub=sect('','widthun bg-light pt-3'),ws=sect('','ohidden','',[ub]),rd=sect('','ohidden animated slideInUp','',[hd,ws]),eo={e:rd};ub.style.minHeight='20em';for(var i in x)APP(ub,livecover2({p:k,k:i,f:f},fn).e);return eo;
	}
	var livestockhome2=(k,fn,f)=>{
		var o=ll.livestocks[k],a=M5,x=o[a[3]],sr=(o[a[2]])?o[a[2]].off:'img/bag2.jpeg',im=img(sr,'','img-fluid width5'),hd=pah('head',[im,par(o[a[1]],'grey6')]),ub=sect('','widthun bg-light pt-3'),ws=sect('','ohidden','',[ub]),rd=sect('','ohidden animated slideInUp','',[hd,ws]),eo={e:rd};ub.style.minHeight='20em';for(var i in x)APP(ub,livecover3({p:k,k:i,f:f},fn).e);return eo;
	}
	var livestockbox=(o,fn)=>{
		var k=o.p,hd=pah('head',[xbut('xpbx'),hea(5,[strong(k,'grey6','underline').e],'nomargin')]),ws=sect(),rd=sect('','p-2 mt-5 shadow','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f5:myf5,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf2();if(v==x[1])fk.click();if(v==x[2])myf3(M5[0]);if(v==x[3])myf3(M5[1]);};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=livestockhome(k,eo);myf0(ar[0]);};function myf2(v){o.k=v;x2=makeorder2(o,eo);myf0(ar[1]);};function myf3(v){};function myf4(){};function myf5(v){};function myf6(){};function myf7(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xpbx')myfx();});return eo;
		
	}
	var livecover=(o,fn)=>{
		var a=M5,sr=(o[a[2]])?o[a[2]].off:'img/bag2.jpeg',hp=img(sr,'','img-fluid w-100'),hd=sect('bred3','p-3 pt-4 pabsolute bot0 widthun','',[sect('','mnheight6 widthun','',[hea(3,[small(o[a[0]],'white').e],'','text-1000'),par([small(o[a[1]],'white').e],'nomargin','line1')])]),rd=colbox('nopad',3,4,5,12,[hp,hd],'bshadow2 bg-image prelate dinline m-2 animated zoomIn',{style:'max-height:18em;overflow:hidden'}),eo={e:rd};function myf1(){fn.f4(o[a[0]]);};addEvent(rd,'click',myf1);return eo;
	}
	var livestockshome=(u,fn)=>{
		var a=ll.livestocks,f1=sect('','p-3 pt-5 page-header-inner bred3 d-md-flex text-center text-md-start','',[img('img/bimg7.jpg','rad1','w-100 mwidth50 img-fluid d-lg-none d-md-none d-sm-block animated zoomIn'),DIV('','pb-5 p-2','',[hea(1,[strong('Let\'s be your Livestocks Plug.','white').e],'','animated slideInUp'),par([small('Let us help You find any animal available in the Market as well as deliver it to any destination of your choice','white','lead').e],'','animated slideInUp')]),img('img/bimg7.jpg','rad1','w-50 ip-2 mg-fluid d-none d-md-block mwidth50 d-sm-none animated zoomIn')]),ub=sect('','p-2'),ws=sect('','','',[sect('','mb-3 bimg7','',[f1]),ub]),rd=sect('','','',[ws]),eo={e:rd};for(var i in a)APP(ub,livecover(a[i],fn).e);return eo;
	}
	var productbox5=(k,fn)=>{
		var hd=pah('head',[hea(5,[strong(k,'grey6','underline').e],'nomargin')]),ws=sect(),rd=sect('','p-2 pb-5 mt-5 shadow','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f5:myf5},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfx(){fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=livestockhome2(k,fn,true);myf0(ar[0]);};function myf2(){};function myf3(v){};function myf4(){};function myf5(v){};function myf6(){};function myf7(){};return eo;
		
	}
	var productbox4=(k,fn)=>{
		var hd=pah('head',[hea(5,[strong(k,'grey6','underline').e],'nomargin')]),ws=sect(),rd=sect('','p-2 pb-5 mt-5 shadow','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f5:myf5},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfx(){fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=livestockhome(k,fn,true);myf0(ar[0]);};function myf2(){};function myf3(v){};function myf4(){};function myf5(v){};function myf6(){};function myf7(){};return eo;
		
	}
	var mylivestocks=(u,fn)=>{if(!ll.livestocks)ll.livestocks={};
		var hd=pah('head',[xbut('xmp'),hea(5,[strong('Livestocks','grey6','underline').e])]),ws=sect(),rd=sect('','p-2 pt-4 ohidden','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfx(){fn.f1();};function myfm(v,k){if(v==x[0])myf2();if(v==x[1])myf3();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=livestockshome(u,eo);myf0(ar[0]);scrollup();};function myf2(){o.k=v;x2=makeorder2(o,eo);myf0(ar[1]);};function myf3(){};function myf4(v,k){x4=livestockbox({p:v,u:u},eo);myf0(ar[3]);if(k)x4.f2(k);};function myf5(v){myf4(v.p,v.k);};function myf6(){};function myf7(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmp')myfx();});return eo;
		
	}
	var itemcover1=(o,fn)=>{
		var x=M7,a=ll[M4[7]][o.p][M5[3]][o.k],ix=a[x[0]],vv=(a.more_pix&&ocn(a.more_pix))?mypics(o):'',is=(ocn(ix))?ix.off:'img/sign.jpg',im=(vv)?itemsel({o:vv,id:'itemcover1'},fn).e:img(is,'','img-fluid rounded-2'),rd=colbox('nopad',2,3,3,5,[im,DIV('','p-2 px-3 mb-2','',[hea(6,[small(o.k,'grey6').e],'','fw-bold font15 text-truncate'),hea(6,[small(a[x[2]],'grey6','font10').e]),par('N'+barme(a[x[3]]),'purple','fony10 fw-bold text-1000 mt-3')]),center([but([small('proceeed to order','pkey1','px-2').e,icon2('rarrow','pkey1','white')],'button','pkey1','btn btn-sm btn-warning bpurple widthun white py-3 noline mt-3')]).e],'m-3 mb-5 bwhite pb-4 mb-4 dinline mb-5 h-100'),eo={e:rd};function myf1(v){fn.f2(o.k);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='pkey1')myf1();});return eo;
	}
	var itemsel=(xx,fn)=>{
		var o=xx.o,x=o,u=cta(x),ux=true,ub=DIV('','carousel-inner'),ic=DIV('','carousel-indicators',{style:'margin-bottom:0;'}),px=1,pk=but([span('','','carousel-control-prev-icon',{'aria-hidden':'true'}),span('Previous','','visually-hidden')],'button','','carousel-control-prev',{'data-bs-target':'#'+xx.id,'data-bs-slide':'prev'}),nk=but([span('','','carousel-control-next-icon',{'aria-hidden':'true'}),span('Next','','visually-hidden')],'button','','carousel-control-next',{'data-bs-target':'#'+xx.id,'data-bs-slide':'next'}),ws=DIV(xx.id,'carousel slide',{'data-bs-ride':'carousel'},[ub,ic]),rd=DIV('','p-0 ohidden','',[ws]),eo={e:rd};APP(ub,myboy(0,'carousel-item active'));APP(ic,myboy2(0,'active'));for(var i=1;i<ocn(u);i++){APP(ub,myboy(i,'carousel-item'));APP(ic,myboy2(i));};function myboy(v,k){var vx=x[u[v]].off,v1=DIV('',k,'',[img(vx,'','rounded-2 img-fluid w-100')]);return v1;};function myboy2(v,c){var v1=but('','button','mwidth5 bwhite',c,{'data-bs-target':'#'+xx.id,'data-bs-slide-to':v});return v1;};return eo;
	}
	var itemcover2=(o,fn)=>{
		var x=M7,a=ll[M4[7]][o.p][M5[3]][o.k],ix=a[x[0]],vv=(a.more_pix&&ocn(a.more_pix))?mypics(o):'',is=(ocn(ix))?ix.off:'img/sign.jpg',im=(vv)?itemsel({o:vv,id:'itemcover2'},fn).e:img(is,'','img-fluid rounded-2'),rd=colbox('nopad',2,3,3,5,[im,DIV('','p-2 px-3 mb-2','',[hea(6,[small(o.k,'grey6').e],'','fw-bold font15 text-truncate'),hea(6,[small(a[x[2]],'grey6','font10').e]),par('N'+barme(a[x[3]]),'purple','fony10 fw-bold text-1000 mt-3')])],'m-3 mb-5 bwhite pb-4 mb-4 dinline mb-5 h-100'),eo={e:rd};return eo;
	}
	var itemcover3=(o,fn)=>{
		var x=M7,a=ll[M4[7]][o.p][M5[3]][o.k],ix=a[x[0]],vv=(a.more_pix&&ocn(a.more_pix))?mypics(o):'',is=(ocn(ix))?ix.off:'img/sign.jpg',im=(vv)?itemsel({o:vv,id:'itemcover3'},fn).e:img(is,'','img-fluid rounded-2'),rd=colbox('nopad',2,3,3,5,[im,DIV('','p-2 px-3 mb-2','',[hea(6,[small(o.k,'grey6').e],'','fw-bold font15 text-truncate'),hea(6,[small(a[x[2]],'grey6','font10').e]),par('N'+barme(a[x[3]]),'purple','fony10 fw-bold text-1000 mt-3'),center([but([small('proceeed to order','pkey1','px-2').e,icon2('rarrow','pkey1','white')],'button','pkey1','btn btn-sm btn-warning bpurple widthun white py-3 noline mt-3')]).e])],'m-3 mb-5 bwhite pb-4 mb-4 dinline mb-5 h-100'),eo={e:rd};function myf1(v){fn.f8(o);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='pkey1')myf1();});return eo;
	}
	var producthome=(u,fn)=>{
		var o=ll[M4[7]][u.p],a=M5,x=o[a[3]],sr=(o[a[2]])?o[a[2]].off:'img/bag2.jpeg',im=img(sr,'','img-fluid width5'),hd=pah('head',[im,par(o[a[1]],'grey6')]),ub=sect('','widthun bg-light pt-3'),ws=sect('','ohidden','',[ub]),rd=sect('','ohidden animated slideInUp','',[hd,ws]),eo={e:rd};ub.style.minHeight='20em';for(var i in x)APP(ub,itemcover1({u:u.u,p:u.p,k:i},fn).e);return eo;
	}
	var producthome2=(k,fn)=>{
		var o=ll[M4[7]][k],a=M5,x=o[a[3]],sr=(o[a[2]])?o[a[2]].off:'img/bag2.jpeg',im=img(sr,'','img-fluid width5'),hd=pah('head',[im,par(o[a[1]],'grey6')]),ub=sect('','widthun bg-light pt-3'),ws=sect('','ohidden','',[ub]),rd=sect('','ohidden animated slideInUp','',[hd,ws]),eo={e:rd};ub.style.minHeight='20em';for(var i in x)APP(ub,itemcover2({p:k,k:i},fn).e);return eo;
	}
	var producthome3=(k,fn)=>{
		var o=ll[M4[7]][k],a=M5,x=o[a[3]],sr=(o[a[2]])?o[a[2]].off:'img/bag2.jpeg',im=img(sr,'','img-fluid width5'),hd=pah('head',[im,par(o[a[1]],'grey6')]),ub=sect('','widthun bg-light pt-3'),ws=sect('','ohidden','',[ub]),rd=sect('','ohidden animated slideInUp','',[hd,ws]),eo={e:rd};ub.style.minHeight='20em';for(var i in x)APP(ub,itemcover3({p:k,k:i},fn).e);return eo;
	}
	var productbox=(o,fn)=>{
		var k=o.p,hd=pah('head',[xbut('xpbx'),hea(5,[strong(k,'grey6','underline').e],'nomargin')]),ws=sect(),rd=sect('','p-2 mt-5 shadow','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f5:myf5},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfx(){fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=producthome(o,eo);myf0(ar[0]);scrollup();};function myf2(v){o.k=v;x2=makeorder(o,eo);myf0(ar[1]);};function myf3(v){};function myf4(){};function myf5(v){};function myf6(){};function myf7(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xpbx')myfx();});return eo;
		
	}
	var productbox2=(k,fn)=>{
		var hd=pah('head',[hea(5,[strong(k,'grey6','underline').e],'nomargin')]),ws=sect(),rd=sect('','p-2 pb-5 mt-5 shadow','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f5:myf5},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfx(){fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=producthome2(k,eo);myf0(ar[0]);};function myf2(){};function myf3(v){};function myf4(){};function myf5(v){};function myf6(){};function myf7(){};return eo;
		
	}
	var productbox3=(k,fn)=>{
		var hd=pah('head',[hea(5,[strong(k,'grey6','underline').e],'nomargin')]),ws=sect(),rd=sect('','p-2 pb-5 mt-5 shadow','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f5:myf5},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfx(){fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=producthome3(k,fn);myf0(ar[0]);};function myf2(){};function myf3(v){};function myf4(){};function myf5(v){};function myf6(){};function myf7(){};return eo;
		
	}
	var procover=(o,fn)=>{
		var a=M5,sr=(o[a[2]])?o[a[2]].off:'img/bag2.jpeg',hp=img(sr,'','img-fluid w-100'),hd=sect('bred3','p-3 pt-4 pabsolute bot0 widthun','',[sect('','mnheight6 widthun','',[hea(3,[small(o[a[0]],'white').e],'nomargin','text-1000'),par([small(o[a[1]],'white').e],'nomargin')])]),rd=colbox('nopad',3,4,5,12,[hp,hd],'bshadow2 bg-image prelate dinline m-2 animated zoomIn',{style:'max-height:18em;overflow:hidden'}),eo={e:rd};function myf1(){fn.f4(o[a[0]]);};addEvent(rd,'click',myf1);return eo;
	}
	var productshome=(fn)=>{
		var a=ll[M4[7]],f1=sect('','p-3 pt-5 page-header-inner bred3 d-md-flex text-center text-md-start','',[img('img/item.png','rad1','w-100 mwidth50 img-fluid d-lg-none d-md-none d-sm-block animated zoomIn'),DIV('','pb-5 p-2','',[hea(1,[strong('Let\'s Be Your Food/Farm Products Plug.','white').e],'','animated slideInUp'),par([small('You can buy any Food Or Farm Products From FOODPLUS9JA and we will deliver it to any destination of your choice, you can pay for orders using your wallet or Card.','white','lead').e],'','animated slideInUp')]),img('img/item.png','rad1','w-50 ip-2 mg-fluid d-none d-md-block mwidth50 d-sm-none animated zoomIn')]),ub=sect('','p-2'),ws=sect('','','',[sect('','mb-3 bimg2','',[f1]),ub]),rd=sect('','','',[ws]),eo={e:rd};for(var i in a)APP(ub,procover(a[i],fn).e);return eo;
	}
	var myproducts=(u,fn)=>{
		var hd=pah('head',[xbut('xmp'),hea(5,[strong('Products','grey6','underline').e])]),ws=sect(),rd=sect('','p-2 pt-4','',[hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;myf1();function myfx(){fn.f1();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=productshome(eo);myf0(ar[0]);scrollup();};function myf2(){};function myf3(){};function myf4(v,k){x4=productbox({u:u,p:v},eo);myf0(ar[3]);if(k)x4.f2(k);};function myf5(v){myf4(v.p,v.k);};function myf6(){};function myf7(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='xmp')myfx();});return eo;
		
	}
	var icontray=(o)=>{
		var a=(o)?o.a:M2,b=(o)?o.b:MI,ws=sect('','p-1 pt-3'),rd=sect('',(o)?'p-2 py-3 my-5 ohidden':'p-1 pt-5 my-3 ohidden','',[ws]),eo={e:rd};for(var i in a)APP(ws,myboy(i));function myf1(v){o.fn(v);};function myboy(v){var vi=a[v],v1=colbox('pad1',2,3,4,5,[center([hea(1,[icon2(b[v])],'nomargin','line5 fw-bold text-1000 purple',{style:'font-size:2em;'}),par([small(vi,'grey6','font12').e],'nomargin')]).e],' mx-2 mb-4 bshadow2 dinline animated zoomIn');addEvent(v1,'click',()=>{myf1(vi);});return v1;};return eo;
	}
	var findresult=(o,u,fnc,fn)=>{
		var a=o[X2[2]],b=o[X2[1]],c=o[X2[0]],c2=o[X2[3]],f={a:a,b:b,c:c,d:c2},d=sect(),rd=sect('','p-2','',[d]),eo={e:rd};
		if(!ocn(a)&&!ocn(b)&&!ocn(c)&&!ocn(c2))APP(d,center([small('a match was not found...','grey').e]).e);
		for(var i in f)for(var v in f[i])APP(d,mybox(i,v));
		function myf1(x,y){
			var y1=f[x][y];
			if(u){if(y1[Xx[0]]==X2[0])fn.f2(y1[Xx[2]]);if(y1[Xx[0]]==X2[1])fn.f2(y1[Xx[4]],y1[Xx[2]]);if(y1[Xx[0]]==X2[2])fn.f3(y1[Xx[2]]);if(y1[Xx[0]]==X2[3])fn.f3(y1[Xx[4]],y1[Xx[2]]);}else{WQ.bootfind=cloneo(y1);wdo.f6();};if(fnc)fnc('');
		}
		function mybox(g,h){
			var x1=f[g][h],x2=colbox('nopad',1,1,1,3,[par([img(x1[Xx[1]],'width2','img-fluid animated zoomIn')],'findbox-ip')],'lfloat'),x3=colbox('pad2',10,10,10,9,[par([small(x1[Xx[2]],'grey6').e],'nomargin','line1 animated zoomIn'),par([small(x1[Xx[3]],'grey6').e],'nomargin','animated zoomIn'),par([strong((x1[Xx[5]])?('N'+barme(x1[Xx[5]])):'','grey6').e],'nomargin','animated zoomIn'),hea(6,[small(cleaname(x1[Xx[0]]),'grey').e],'nomargin','line1 animated zoomIn')],'py-2 lfloat'),x4=sect('','bshadow1 mb-2 mt-1 p-2 ohidden','',[x2,x3]),x5=clonetxt(g),x6=clonetxt(h);
			addEvent(x4,'click',()=>{myf1(x5,x6);});
			return x4;
		}
		return eo;
	}//['entity','img','name','shop','product','price']
	var searchman=(u,fn)=>{
		var ss=searchbox('',{ph:'search our catalogue...',fnc:myf1,u:u},''),sb=colbox('nopad',12,12,12,12),rd=sect('','pb-4 animated zoomIn pt-2 gradeback2 ohidden','',[ss.e,sb]),eo={e:rd};
		
		function myf1(v){
			sb.innerHTML='';if(!v)ss.f1();
			var a=searchindex(v),b=findresult(a,u,myf1,fn);
			if(v)APP(sb,b.e);
		}
		
		return eo;
	}
	var home=(u,fn)=>{
		var f3=searchman(u,fn),f2=icontray({a:M2,b:MI,fn:fn.fm}),x2=popularfront2(u,fn),x3=recentitems2(u,fn),x4=weldome1(),x5=recentlives2(u,fn),x6=homemarq({u:u},fn),f1=sect('','bimg3 text-center text-md-start','',[sect('','p-3 pt-5 d-md-flex page-header-inner bred3','',[img('img/logo.png','rad1','w-100 mwidth50 img-fluid d-lg-none d-md-none d-sm-block animated zoomIn'),DIV('','pb-5 p-2','',[hea(1,[strong('Buy Your Food/Livestock Products and Livestock.','white','italic-1').e],'','animated slideInUp'),par([small('You can Order for any food product, livestock or livestock products from the comfort of your phone or PC and we will deliver it anywhere you want. Do MAke Sure You have enough funds in your wallet before placing an order to ensure smooth and quick service proccess.','white','lead italic-1').e],'','animated slideInUp')]),img('img/logo.png','rad1','w-50 ip-2 mg-fluid d-none d-md-block mwidth50 d-sm-none animated zoomIn')])]),ws=sect('','ohidden pt-3','',[f3.e,x6.e,x4.e,f1,f2.e,x2.e,x3.e,x5.e,par('','height3'),productrack2(u,fn).e,productrack3(u,fn).e,about1(u).e]),rd=sect('','ohidden','',[ws]),eo={e:rd};return eo;
	}
	var frontnav=(o)=>{
		var a=M1,b=M1b,ub=DIV('','navbar-nav ms-auto p-1 p-lg-0'),pr=profboy(o.u,o.fn),ws=DIV('navrig','collapse navbar-collapse','',[ub]),rd=$$$('nav','','navbar navbar-expand-lg bg-white navbar-light shadow stickytop p-0','',[anc('',[pr.e],'navbar-brand d-flex align-items-center px-2'),but([span('','','navbar-toggler-icon')],'button','','navbar-toggler',{'data-bs-toggle':'collapse','data-bs-target':'#navrig'}),ws]),eo={e:rd};for(var i=0;i<ocn(a);i++){(i==3)?APP(ub,myboy(i,true)):APP(ub,myboy(i));};function myboy(v,k){var v1=(k)?myboy2(v):anc('',a[v],'animated zoomIn font13 nav-item nav-link nopad mb-2 mx-2');if(!k)addEvent(v1,'click',()=>{myf1(a[v]);});return v1;};function myboy2(){var vx=DIV('rig2','dropdown-menu fade-up m-0'),v1=DIV('','nav-item dropdown','',[anc('',a[3],'animated zoomIn nopad mb-2 mx-2 font12 nav-link dropdown-toggle','',{'data-bs-toggle':'collapse','data-bs-target':'#rig2'}),vx]);for(var i in b)APP(vx,myboy3(i));return v1;};function myboy3(v){var v1=anc('',b[v],'dropdown-item');addEvent(v1,'click',()=>{myf1(b[v]);});return v1;};function myf1(v){o.fn(v);myf2();};function myf2(){ws.className='collapse navbar-collapse';};return eo;
	}//('home,products,livestock,orders,more,wallet')('contact us,about us,logout,refresh')
	var front=(u)=>{if(!ll.users[u].messages)ll.users[u].messages=mrgar(N1,[ll.users[u].userID,{},{},{}]);
		var mz=sup('0','msgkey','dinline'),ms=sect('','tright px-2 pt-2 ohidden','',[anc('',[strong('Messages','msgkey','font11').e,mz.e],'noline btn-warning pt-2 px-3 mt-2 rad1','msgkey')]),mn=frontnav({u:u,fn:myfm}),hd=mn.e,ws=colbox('topad2',12,12,12,12),rd=colbox('nopad',12,12,12,12,[ms,hd,ws]),eo={e:rd,f1:myf1,f2:myf2,f8:myf8,f9:myf9,f10:myf10,f11:myf11,f12:myf12,fm:myfm,fn:myfn},ec,ar=('0,1,2,3,4,5,6,7,8,9,10,11,12,13,14').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0,x10,x11,x2,x13;fro[u]=eo;rd.style.minHeight='30em';myf1();myfn();function myfn(){if(ec&&ec.k&&ec.k=='msg')x11.f6();mz.e.textContent=ocn(ll.users[u].messages[N1[1]]);};function myfm(v,k){if(v==M1[0])myf1();if(v==M1[1])myf2();if(v==M1[2])myf3();if(v==M1[4])myf4();if(v==M1[5])myf5();if(v==M1b[1])myf6();if(v==M1b[2])myf7();if(v==M2[3])myf10();if(v==M1b[3])callweldome();if(v==M1b[4])relo();};function myf0(v,k){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};if(v==ar[8])ec={e:x9.e,v:v};if(v==ar[9])ec={e:x10.e,v:v};if(v==ar[10])ec={e:x11.e,v:v};if(v==ar[11])ec={e:x12.e,v:v};if(v==ar[12])ec={e:x13.e,v:v};if(k)ec.k=k;APP(ws,ec.e);};function myf1(){x1=home(u,eo);myf0(ar[0]);scrollup();};function myf2(v,k){x2=myproducts(u,eo);myf0(ar[1]);if(v)x2.f4(v,k);};function myf3(v,k){x3=mylivestocks(u,eo);myf0(ar[2]);if(v)x3.f4(v,k);};function myf4(){x4=myorders(u,eo);myf0(ar[3]);};function myf5(){x5=mywallet(u,eo);myf0(ar[4]);};function myf6(){x6=contactus(u,eo);myf0(ar[5]);};function myf7(){x7=aboutus(u,eo);myf0(ar[6]);};function myf8(v){myf2(v);};function myf9(v){myf3(v);};function myf10(v){x10=shopinglists(u,eo);myf0(ar[9]);if(v)x10.f3(v);};function myf11(){x11=messages(u,eo);myf0(ar[10],'msg')};function myf12(){};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='msgkey')myf11();});
		
	}
	var howido=()=>{
		var a=hiw,hd=pah('head',[hea(2,[strong('How does it work','purple').e])]),ws=sect('','row pt-4'),rd=sect('','ohidden mt-5 text-center','',[hd,ws]),eo={e:rd};for(var i in a)APP(ws,myboy(i));function myboy(v){var v1=colbox('pad1',3,3,5,12,[img(a[v].i,'','img-fluid'),hea(3,[strong(v,'purple').e]),hea(6,[small(a[v].p,'grey6').e],'nomargin')],'text-center animated slideInUp');return v1;};return eo;
	}
	var productrack=()=>{
		var a=revob(ll[M4[7]]),ws=sect('','pt-3'),rd=sect('','mb-5','',[ws]),eo={e:rd};for(var i in a)APP(ws,productbox2(i,eo).e);return eo;
	}
	var productrackv=()=>{
		var a=revob(ll.livestocks),ws=sect('','pt-3'),rd=sect('','mb-5','',[ws]),eo={e:rd};for(var i in a)APP(ws,productbox5(i,eo).e);return eo;
	}
	var productrack2=(u,fn)=>{
		var a=revob(ll[M4[7]]),ws=sect('','pt-3'),rd=sect('','mb-5','',[ws]),eo={e:rd};for(var i in a)APP(ws,productbox3(i,fn).e);return eo;
	}
	var productrack3=(u,fn)=>{
		var a=revob(ll.livestocks),ws=sect('','pt-3'),rd=sect('','mb-5','',[ws]),eo={e:rd};for(var i in a)APP(ws,productbox4(i,fn).e);return eo;
	}
	var marquee=(o)=>{
		var ub=marq('','',{direction:'right'},[o.cl]),ws=sect('','ohidden','',[ub.e]),rd=sect('widthun','mb-2','',[ws]),eo={e:rd};return eo;
	}
	var weldome1=()=>{
		var ws=sect('','py-5 page-header-inner bred3','',[DIV('','my-5 pt-5 pb-5','',[center([hea(1,[strong('FOODPLUS9JA','white','head2 d-lg-none d-md-none d-sm-block').e],'nomargin','line1 animated slideInUp'),hea(1,[strong('FOODPLUS9JA','white','head1 d-none d-md-block d-sm-none').e],'nomargin','line1 animated slideInUp'),hea(5,[small('Highest Quality at the most affordable price','white','italic-1').e],'nomargin','pb-5,mb-5 animated zoomIn px-2')]).e])]),rd=sect('','bimg1 mb-5','',[ws]),eo={e:rd};return eo;
	}
	var welhome=(fn)=>{
		var x1=howido(),x2=popularfront(),x3=recentitems(),x4=weldome1(),x5=recentlives(),x6=homemarq({},fn),f1=sect('','bimg3 text-center text-md-start','',[sect('','p-3 pt-5 d-md-flex page-header-inner bred3','',[img('img/logo.png','rad1','w-100 mwidth50 img-fluid d-lg-none d-md-none d-sm-block animated zoomIn'),DIV('','pb-5 p-2','',[hea(1,[strong('Buy Your Food/Livestock Products and Livestock.','white','italic-1').e],'','animated slideInUp'),par([small('You can Order for any food product, livestock or livestock products from the comfort of your phone or PC and we will deliver it anywhere you want. Do MAke Sure You have enough funds in your wallet before placing an order to ensure smooth and quick service proccess.','white','lead italic-1').e],'','animated slideInUp')]),img('img/logo.png','rad1','w-50 p-2 img-fluid d-none d-md-block mwidth50 d-sm-none animated zoomIn')])]),ws=sect('','pt-3','',[x4.e,x6.e,f1,x1.e,x2.e,x3.e,x5.e,par('','height3'),productrack().e,par('','height2'),productrackv().e]),rd=sect('','','',[ws]),eo={e:rd};return eo;
	}
	var welnav=(fn)=>{
		var a=Mx,ub=DIV('','navbar-nav ms-auto p-4 p-lg-0'),ws=DIV('navrig','collapse navbar-collapse','',[ub]),rd=$$$('nav','','navbar navbar-expand-lg bg-white navbar-light stickytop p-0','',[anc('',[img('img/logo2.png','welimg','width2 img-fluid')],'navbar-brand nomargin box3 d-flex align-items-center px-2','box2'),but([span('','','navbar-toggler-icon')],'button','','navbar-toggler',{'data-bs-toggle':'collapse','data-bs-target':'#navrig'}),ws]),eo={e:rd};for(var i=0;i<ocn(a);i++)APP(ub,myboy(i));function myboy(v,k){var v1=anc('',a[v],'animated zoomIn pb-2 nav-item nav-link font14');addEvent(v1,'click',()=>{myf1(a[v]);});return v1;};function myf1(v){fn(v);myf2();};function myf2(){ws.className='collapse navbar-collapse';};function myf3(){if(fn)fn(M1[0]);};addEvent(rd,'click',(e)=>{e=ee(e);if(e.id=='welimg')myf3();});return eo;
	}
	var weldome=()=>{
		var mn=welnav(myfm),hd=mn.e,ws=colbox('nopad',12,12,12,12),rd=colbox('nopad',12,12,12,12,[hd,ws,par('','height5'),about1().e]),eo={e:rd,f1:myf1,f2:myf2,f3:myf3,f4:myf4,f5:myf5,fm:myfm},ec,ar=('0,1,2,3,4,5,6,7,8,9').split(','),x1,x2,x3,x4,x5,x6,x7,x8,x9,x0;rd.style.minHeight='30em';wdo=eo;myf1();function myfm(v,k){if(v==M1[0])myf1();if(v==Mx[0])myf2();if(v==Mx[1])myf3();if(v==Mx[2])relo();};function myf0(v){if(ec)X(ec.e);if(v==ar[0])ec={e:x1.e,v:v};if(v==ar[1])ec={e:x2.e,v:v};if(v==ar[2])ec={e:x3.e,v:v};if(v==ar[3])ec={e:x4.e,v:v};if(v==ar[4])ec={e:x5.e,v:v};if(v==ar[5])ec={e:x6.e,v:v};if(v==ar[6])ec={e:x7.e,v:v};if(v==ar[7])ec={e:x8.e,v:v};APP(ws,ec.e);};function myf1(){x1=welhome();myf0(ar[0]);scrollup();};function myf2(){x2=newform(eo);myf0(ar[1]);};function myf3(){x3=login(eo);myf0(ar[2]);};function myf4(v){x4=userhail(v,eo);myf0(ar[3]);};function myf5(){x5=waiter('Creating Profile, please wait a bit...');myf0(ar[4]);};function myf6(){};function myf7(){};return eo;
		
	}
	var userhail=(o,fn)=>{
		var dp=par([img('img/logo2.png','width12','img-fluid rad2')],'widthun','my-5'),h1=hea(3,[strong('HEY '+o[F3[0]].toUpperCase(),'purple').e],''),h2=par([small('Welcome to the FOODPLUS9JA WHERE QUALITY IS KEY, you can strart placing your Order INSTANTLY. You can login right away.Once more WELCOME..','grey6').e],'parag'),ws=colbox('teamhail-ws',12,12,12,12,[h1,h2]),bg=par([but('continue','button','xteamhail','btn btn-block btn-success bwhite green font14 btn-lg')],'teamhail-bg'),rd=colbox('neuboy',8,9,10,12,[center([hea(3,[strong('YOUR ACCOUNT WAS CREATED SUCCESSFULLY...','grey6').e]),dp,ws,par('','mabot2'),bg]).e]),eo={e:rd};rootstyle(h2,'line-height:1.6;');
		
		function myf1(){
			fn.f1();
		}
		
		addEvent(rd,'click',(e)=>{
			e=ee(e);
			if(e.id=='xteamhail')myf1();
		});
		
		return eo;
	}
	var login=()=>{
		var a=F1,ul=phul(a,F2,['username','password']),bp=par([img('img/logo.png','width12','animated zoomIn')],'box12','dinline'),hd=pah('head',[bp,hea(1,[strong('Login.','purple').e],'nomargin','animated zoomIn'),par([small('enter User Credentials.').e],'login-hp','animated zoomIn')]),bg=center([but('login','button','loginkey','btn btn-lg btn-success bwhite green animated zoomIn px-5 font14'),par('','mabot1'),but('create account','button','lognewsign','btn btn-lg btn-danger bwhite animated zoomIn red norad px-5 font14'),par('','mabot2'),but('recover security pass','button','getpass','btn btn-md btn-link blue animated zoomIn')]).e,ws=colbox('pad2',12,12,12,12,[ul.e,par('','mabot1'),bg]),rd=colbox('neuboy',7,9,9,11,[hd,ws]),val=true,eo={e:rd},x1,x2;
		
		function myf1(v){
			val=v;
			if(!v)return;
			var v1=fetchvalu(ul.o),v2=usercred(v1),v3,v4={u:v1[a[0]],s:v1[a[1]],fn:myf1b};
			if(v2.n){redtxt(ul.a[a[0]],'invalid '+a[0]);val=false;return;};ul.a[a[1]].textContent='confirming security pass';checkpass(v4);function myf1b(u){if(u.s){redtxt(ul.a[a[1]],'incorrect '+a[1]);val=false;}else{v4.fn=myf1c;(kaya[v4.u])?myf1c():packmykaya(v4);}};function myf1c(){clrvalu(ul.o);callfront(v1[a[0]]);};
		}
		function myf2(){
			if(val)return;
			resetkeys(ul.a,mrgar(a,F2));
			val=true;
			
		}
		function myf3(){
			wdo.f1();
		}
		function myf4(){
			wdo.f3();
		}
		
		addEvent(rd,'keydown',(v)=>{
			var e=v.code,ev=v.key;
			if(!val)myf2();if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf1);
			
		});
		addEvent(rd,'click',(e)=>{
			e=ee(e);
			if(!val)myf2();
			if(e.id=='login-bal'||e.id=='login-bp')myf3();
			if(e.id=='lognewsign')myf4();
			if(e.id=='loginkey')validate(ul.o,ul.a,myf1);
			if(e.id=='getpass')wdo.f5();
		});
		return eo;
	}
	var newform=(fn)=>{
		var a=FY,b=['enter username','enter email','enter phone number','enter security pass','re-enter security pass','enter recovery pin'],up=par([img('img/logo2.png','','img-fluid animated zoomIn')],'','mb-2'),se=selectpar({a:cto(F8),t:'select account type'}),ul=phul(a,b,['username','email','number','password','password','number']),fh=pah('head',[hea(2,[strong('Create Account','purple').e],'regform-h1','animated slideInUp'),par([small('fill in Your details and we can start taking your Orders.').e],'regform-hp','animated zoomIn')]),rw=colbox('nopad',12,12,12,12,[ul.e,se.e]),rg=colbox('regform',6,6,7,11,[fh,rw,par('','mabot2'),center([but('create account','button','regformkey','btn btn-md btn-success animated zoomIn bwhite green px-5'),par('','mabot1'),but('already have account','button','xregform','btn btn-md animated zoomIn btn-danger bwhite red px-5 norad'),par('','height5')]).e]),rr=colbox('pad1',4,4,4,11,[up,hea(4,[strong('ORDER AND PAY FROM YOUR PHONE..','purple').e],'','animated slideInUp'),par([small('Become a part of FOODPLUS by creating a user account, fill the form with valid informations as it will be used to contact you at anytime.','grey6','lead').e],'parag','animated fadeIn')]),ws=DIV('pad1','d-sm-flex','',[rr,rg]),rd=colbox('pad2',12,12,12,12,[ws]),eo={e:rd},val=true,x1,x2,x3,x4;
		
		
		function myf1(){
			fn.f1();
		}
		function myf2(){
			fn.f3();
		}
		function myf3(v){
			val=v;if(!v)return;
			var vd=datemap(),v1=fetchvalu(ul.o),vw=se.s.value,vx=namecode(v1[a[0]])+''+(ocn(ll.users)+1),vu=(ocn(vx<5))?(vx+''+vd.key.slice(0,8)):vx,v3=userinfo(v1),k='FP9JA-'+vu,vk=mrgar(PZ,[v1[a[0]],k,0,{},{},{},{},vd,mrgar(L2,[0,{},{}])]),v5=mrgar(F3,[v1[F3[0]],v1[F3[1]],v1[F3[2]],v1[F3[3]],v1[F3[4]]]),v4=mrgar(F4,[v5,'','',{},{},false]);v4.shagal=vk;v4.account_type=vw;
			if(v1[a[3]]!=v1[a[4]]){redtxt(ul.a[a[4]],'security pass does not match!!');val=false;return;};
			if(v3.n){redtxt(ul.a[a[0]],'this username has been taken!!');val=false;return;}
			if(v3.e){redtxt(ul.a[a[1]],'this email has been taken!!');val=false;return;}
			if(v3.p){redtxt(ul.a[a[2]],'this phone number has been taken!!');val=false;};ll.users[v1[a[0]]]=v4;ledge[L1[1]][k]=vk;
			socket.emit('newuser',{wk:k,pz:vk,i:ios,o:v5,n:v1[a[0]]});fn.f4(v1);if(val)return;myf4();
		}
		function myf4(){if(val)return;
			resetkeys(ul.a,mrgar(a,b));val=true;
		}
		
		addEvent(ul.e,'keydown',(v)=>{
			var e=v.code,ev=v.key;
			if(e!='Enter'&&ev!='Enter'&&!val)myf4();
			if(e=='Enter'||ev=='Enter')validate(ul.o,ul.a,myf3);
			
		});
		addEvent(rd,'click',(e)=>{
			e=ee(e);
			if(!val)myf4();
			if(e.id=='regicon'||fada(e).id=='register-hp')myf1();
			if(e.id=='xregform')myf2();
			if(e.id=='regformkey')validate(ul.o,ul.a,myf3);
			
		});
		
		return eo;
		
	}
	var profboy=(u,fn)=>{
		var x=ll.users[u],y=u.split(' ')[0],b=(ocn(x.img))?x.img.off:'img/user.png',im=img(b,'width2'),hd=par([im],'box2','bborder nomargin'),ws=par([small(y,'font11').e],'nomargin','pt-2 mx-2'),rd=DIV('nomargin','ohidden nopad rad1 text-light bpurple d-flex line1',{style:'padding-right:.8em;'},[hd,ws]),eo={e:rd,f1:myf1};function myf1(v){im.src=v;};addEvent(rd,'click',()=>{fn('prof');});return eo;
	}
	
	

	return {
		spin:function(){
			init();
			
		}
	}
})();