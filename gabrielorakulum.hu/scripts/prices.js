var percDij, percDijEuro, eurToHuf, mini, normal, maxi, extra, miniEuro, normalEuro, maxiEuro, extraEuro, kis, kozepes, nagy;

// Change this for base price:
percDij = 380;

// Change this for exchange rate:
eurToHuf = 0.0032;

// Change this for kis:
kis = 5000;

// Cgange this for kozepes:
kozepes = 10000;

// Cgange this for nagy:
nagy = 15000;

mini = percDij * 15;
normal = percDij * 30;
maxi = percDij * 45;
extra = percDij * 60;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

window.addEventListener("load", myInit, true); function myInit(){
    document.getElementById("miniHufTotal").innerHTML = numberWithCommas(mini) + ' Ft.';
    document.getElementById("miniHufCalc").innerHTML = '(15 x ' + percDij + ' Ft.)';

    document.getElementById("normalHufTotal").innerHTML = numberWithCommas(normal) + ' Ft.';
    document.getElementById("normalHufCalc").innerHTML = '(30 x ' + percDij + ' Ft.)';

    document.getElementById("maxiHufTotal").innerHTML = numberWithCommas(maxi) + ' Ft.';
    document.getElementById("maxiHufCalc").innerHTML = '(45 x ' + percDij + ' Ft.)';

    document.getElementById("extraHufTotal").innerHTML = numberWithCommas(extra) + ' Ft.';
    document.getElementById("extraHufCalc").innerHTML = '(60 x ' + percDij + ' Ft.)';

    document.getElementById("kisDij").innerHTML = numberWithCommas(kis) + ' Ft.';
    document.getElementById("kozepesDij").innerHTML = numberWithCommas(kozepes) + ' Ft.';
    document.getElementById("nagyDij").innerHTML = numberWithCommas(nagy) + ' Ft.';
}








