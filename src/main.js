$(function () {
    var origen = [0, 300];
    var limiteA = [0, 0];
    var limiteL = [600, 300];
    var xDiana = Math.floor(Math.random() * 470) + 100;
    var yDiana = Math.floor(Math.random() * 100) + 60;
    //var xDiana = 300;
    //var yDiana = 200;
    var lastC = true;
    var corimeinto = 30;
    var opotunidades = 5;
    var intendos = 0;
    //console.log(xDiana);
    //console.log(yDiana);
    var yDianaC = limiteL[1] - yDiana
    var xDianaG = xDiana + corimeinto;
    //var xDianaC = xDiana + 30;
    incremn = 100;
    pos = 30;
    incremn2 = 50;
    pos2 = 300;
    $('#mymodal').modal('show');
    //$("#lienzo1").drawQuadratic({
    //    strokeStyle: "black",
    //    strokeWidth: 3,
    //    x1: 30, y1: 300,
    //    cx1: 200, cy1: 150,
    //    x2: 430, y2: 300
    //});

    $('#lienzo1').drawLine({
        strokeStyle: '#000',
        strokeWidth: 2,
        x1: 30, y1: 0,
        x2: 30, y2: 300,
        x3: 630, y3: 300
    });

    for (i = 0; i < 7; i++) {

        $('#lienzo1').drawLine({
            strokeStyle: '#6e6f72',
            strokeWidth: 1,
            strokeDash: [5],
            strokeDashOffset: 0,
            x1: pos, y1: 0,
            x2: pos, y2: 330
        });

        $("#lienzo1").drawText({
            fillStyle: "black",
            x: (pos + incremn) - 10, y: 315,
            fontSize: 10,
            fontFamilly: 'Verdama, sans-serif',
            text: pos + 70,
        });
        $("#lienzo1").drawText({
            fillStyle: "black",
            x: ((pos - 50) + incremn), y: 315,
            fontSize: 9,
            fontFamilly: 'Verdama, sans-serif',
            text: pos + 20,
        });

        pos = pos + incremn;
    }
    var inCy = 0;
    for (i = 0; i < 4; i++) {
        inCy = inCy + incremn;
        $('#lienzo1').drawLine({
            strokeStyle: '#6e6f72',
            strokeWidth: 1,
            strokeDash: [5],
            strokeDashOffset: 0,
            x1: 0, y1: pos2,
            x2: 630, y2: pos2
        });

        $("#lienzo1").drawText({
            fillStyle: "black",
            x: 10, y: (pos2 - incremn) + 10,
            fontSize: 10,
            fontFamilly: 'Verdama, sans-serif',
            text: inCy
        });

        $("#lienzo1").drawText({
            fillStyle: "black",
            x: 10, y: ((pos2 + 50) - incremn) + 5,
            fontSize: 10,
            fontFamilly: 'Verdama, sans-serif',
            text: inCy - 50
        });

        pos2 = pos2 - incremn;
    }
    pos = 30;
    pos2 = 300;
    var inCy = 0;
    for (i = 0; i < 13; i++) {

        $('#lienzo1').drawLine({
            strokeStyle: '#9da0a5',
            strokeWidth: 1,
            strokeDash: [5],
            strokeDashOffset: 0,
            x1: pos, y1: 0,
            x2: pos, y2: 330
        });
        pos = pos + incremn2;
    }
    for (i = 0; i < 7; i++) {

        $('#lienzo1').drawLine({
            strokeStyle: '#9da0a5',
            strokeWidth: 1,
            strokeDash: [5],
            strokeDashOffset: 0,
            x1: 0, y1: pos2,
            x2: 630, y2: pos2
        });
        pos2 = pos2 - incremn2;
    }

    $("#lienzo1").drawArc({
        fillStyle: "blue",
        strokeStyle: '#013ADF',
        strokeWidth: 4,
        shadowColor: '#000',
        shadowBlur: 10,
        x: xDianaG, y: yDianaC,
        radius: 30
    });
    $("#lienzo1").drawArc({
        fillStyle: "red",
        strokeStyle: '#FE2E2E',
        strokeWidth: 5,
        x: xDianaG, y: yDianaC,
        radius: 15
    });
    $("#lienzo1").drawArc({
        fillStyle: "white",
        strokeStyle: '#FE2E2E',
        strokeWidth: 3,
        x: xDianaG, y: yDianaC,
        radius: 5
    });
    $("#lienzo1").drawText({
        fillStyle: "black",
        x: xDianaG, y: yDianaC + 40,
        fontSize: 12,
        fontFamilly: 'Verdama, sans-serif',
        text: xDiana + ", " + yDiana,
    });
    //$("#lienzo1").drawText({
    //    fillStyle: "black",
    //    x: limiteA[0]+10, y: limiteA[1]+10,
    //    fontSize: 12,
    //    fontFamilly: 'Verdama, sans-serif',
    //    text: "300",
    //});
    //$("#lienzo1").drawText({
    //    fillStyle: "black",
    //    x: 610, y: 320,
    //    fontSize: 12,
    //    fontFamilly: 'Verdama, sans-serif',
    //    text: "600",
    //});    
    $("#lienzo1").drawText({
        fillStyle: "black",
        x: origen[0] + 10, y: 315,
        fontSize: 12,
        fontFamilly: 'Verdama, sans-serif',
        text: "0,0",
    });

    //console.log("punto:" + xDiana + ", " + yDiana);
    //console.log("punto:" + xDiana + ", " + yDianaC);

    $("#btn1").click(function () {
        largo = limiteL[0];
        coefA = parseFloat($("#coefA").val());
        coefA = coefA * -1;
        coefB = parseFloat($("#coefB").val());
        coefC = parseFloat($("#coefC").val());
        var flag1, flag2, flag3;
        $("#perRes1").empty();
        //console.log("a,b,c " + coefA + "," + coefB + "," + coefC);
        if (coefA > -1 && coefA < 0) {
            $("#perRes2").empty();
            //console.log(coefA);
            flag1 = true;
        } else {
            $("#perRes2").html("<small class='text-danger dg-danger'>El coeficiente debe tener un valor entre -1 y 0.</small>");
            flag1 = false;
        }
        if (coefB > 0 && coefB < largo) {
            $("#perRes3").empty();
            //console.log(coefB);
            flag2 = true;
        } else {
            $("#perRes3").html("<small class='text-danger dg-danger'>Coeficiente debe ser menor al largo del campo(menor de " + largo + ").</small>");
            flag2 = false;
        }
        if (coefC > 0 && coefC < 300) {
            $("#perRes4").empty();
            //console.log(coefC);
            flag3 = true;
        } else {
            $("#perRes4").html("<small class='text-danger dg-danger'>Coeficiente debe ser menor al largo del campo(menor de " + 300 + ").</small>");
            flag3 = false;
        }

        if (flag1 && flag2 && flag3) {
            //console.log("TRUE");
            if (opotunidades > 0) {
                calculo(coefA, coefB, coefC, largo);
            }
            else {
                if (lastC == true) {
                    $("#perRes5").after("<small class='tiro text-danger dg-danger'>Agotaste tus oportunidades. </small></br>");
                    $("#btn1").addClass("disabled")
                    $("#btn1").attr("disabled");
                    lastC = false;
                }
            }

        }
        else {
            //console.log("false");
        }

    });

    function calculo(a, b, c, l) {
        var x1i, x2i, x1g, x1n, x1d, x2n, x2d, maxTx, maxTy;
        var x1ibool, x2ibool;
        //console.log("calcula");
        //console.log("a,b,c " + a + "," + b + "," + c);

        x1g = Math.pow(b, 2);
        x1n = x1g - ((4 * a) * (c - yDiana));
        x1n = Math.sqrt(x1n);
        x1d = 2 * a;
        x1n = -b + x1n;
        x1i = (x1n / x1d);

        x2n = Math.pow(b, 2) - ((4 * a) * (c - yDiana));
        x2n = Math.sqrt(x2n);
        x2d = 2 * a;
        x2n = -b - x2n;
        x2i = x2n / x2d;
        //x2i = (x2i - 60) + corimeinto;
        maxTx = -b / (2 * a);
        maxTy = (-(Math.pow(b, 2)) / (4 * a)) + c;

        //console.log("maxTx: " + maxTx);
        //console.log("maxTy: " + maxTy);

        if (x1i > 0) {
            x1ibool = true;
            //console.log("x1: " + x1i + "Esta dentro del intervalo");
        }
        else {
            x1ibool = false;
            //console.log("x1: " + x1i + " Ingresa otros valores");
            //$("#perRes2").html("<small class='text-danger dg-danger'>Ingresa otros valores.</small>");
            //$("#perRes3").html("<small class='text-danger dg-danger'>Ingresa otros valores.</small>");
            //$("#perRes4").html("<small class='text-danger dg-danger'>Ingresa otros valores.</small>");
        }

        if (x2i > 0) {
            x2ibool = true;
            //console.log("x2: " + x2i + "Esta dentro del intervalo");
        }
        else {
            x2ibool = false;
            //console.log("x2: " + x2i + " Ingresa otros valores");
            //$("#perRes2").html("<small class='text-danger dg-danger'>Ingresa otros valores.</small>");
            //$("#perRes3").html("<small class='text-danger dg-danger'>Ingresa otros valores.</small>");
            //$("#perRes4").html("<small class='text-danger dg-danger'>Ingresa otros valores.</small>");
        }
        var curva1=[];
        var curva2 = [];
        //curva1.push(x1i);
        //curva2.push(yDiana);
        var espacio = (x2i - x1i)/30;
        if (x1ibool && x2ibool) {
            intendos++;
            //console.log("maxTy: " + maxTy + " Esta dentro del intervalo");
            var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            var color2 = '#' + Math.floor(Math.random() * 16777215).toString(16);

            for (i = x1i; i <= x2i; i += espacio) {
                ye = (a * (Math.pow(i, 2))) + (b * i) + c;
                //console.log(i + "," + ye)
                curva1.push(i);
                curva2.push(ye);

            }
            curva1.push(x2i);
            curva2.push(yDiana);
            var obj = {
                strokeStyle: color2,
                strokeWidth: 3,
                rounded: true
            };
            for (p = 0; p < curva1.length; p++) {
                //console.log("curva " + curva1[p] + "," + curva2[p]);
                obj['x' + (p + 1)] = curva1[p] + corimeinto;
                obj['y' + (p + 1)] = 300 - curva2[p];
            }
            $('canvas').drawLine(obj);
            //$("#lienzo1").drawQuadratic({
            //    strokeStyle: color,
            //    strokeWidth: 3,
            //    x1: x1i + corimeinto, y1: yDianaC,
            //    cx1: maxTx+corimeinto, cy1: -((maxTy-200)+corimeinto),
            //    x2: x2i + corimeinto, y2: yDianaC
            //});
            //$("#lienzo1").drawQuadratic({
            //    strokeStyle: color,
            //    strokeWidth: 3,
            //    x1: x1i + corimeinto, y1: yDianaC,
            //    cx1: 0, cy1: 0, // Control point
            //    //cx2: 25, cy2: 150, // Control point
            //    x2: maxTx + corimeinto, y2:300 -maxTy,
            //    cx2: 0, cy2: 0, // Control point
            //    //cx4: 125, cy4: 1, // Control point
            //    x3: x2i + corimeinto, y3: yDianaC
            //});
            if (x2i < xDiana + 30 && x2i > xDiana - 30) {
                $("#ganador").html("<small class='tiro'>Tu tiro " + intendos + " estuvo muy cerca, Inicio de disparo: (" + parseInt(x1i) + ", " + yDiana + ") y el punto final es: (" + parseInt(x2i) + ", " + yDiana + ") con una altura máxima de " + parseInt(maxTy) + ".</small></br>"); $('#mymodal').modal('show');
            }
            $("#perRes5").after("<small style='color:" + color2 + ";background-color:" + color2 + ";'class='tiro'>&nbsp;&nbsp;&nbsp;</small><small class='tiro'>Tiro número " + intendos + " Inicio de disparo: (" + parseInt(x1i) + ", " + yDiana + ") y el punto final es: (" + parseInt(x2i) + ", " + yDiana + ") con una altura máxima de " + parseInt(maxTy) + ".</small></br>");
            opotunidades--;
            }else
            {
            $("#perRes2").html("<small class='text-danger dg-danger'>Ingresa otros valores.</small>");
            $("#perRes3").html("<small class='text-danger dg-danger'>Ingresa otros valores.</small>");
            $("#perRes4").html("<small class='text-danger dg-danger'>Ingresa otros valores.</small>");
        }
    };
});