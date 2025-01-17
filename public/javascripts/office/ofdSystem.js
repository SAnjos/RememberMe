  // # ofdSystem.js
  // Descricao:
  //   Responsavel por funcoes de uso genério para qualquer sistema
  //   independente do framework.
  //   (camada mais baixa do OfficeDesk)
  // Dependencia:
  //   
  // -------------------



// Número único gerado, será uma das chaves primarias do sistema
function getUUID() {
    try{
      // http://www.ietf.org/rfc/rfc4122.txt
      var s = [];
      var hexDigits = "0123456789ABCDEF";
      for (var i = 0; i < 32; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[12] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
      s[16] = hexDigits.substr((s[16] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01

      var uuid = s.join("");
      return uuid;
      
    }catch(E){
      raiseException(E);
    }
}

// -------------
// Aguarda quantidade de tempo
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

// -----------
// Todas as excećões serão ecoadas por essa fnc
function raiseException(msg){

    if ( msg !== undefined ){
      alert(msg);
    }
}


function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

// -------------

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

// -------------

function eraseCookie(name) {
	createCookie(name,"",-1);
}

// -------------