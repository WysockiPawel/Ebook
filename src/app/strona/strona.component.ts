import { Component, Input } from '@angular/core';


/*
const MAX = 50;

var canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null;
var count = 0;
var points: any[][] = [];

window.onload = function () {
    canvas = document.getElementsByTagName("canvas")[0];
    ctx = canvas.getContext("2d");
    canvas.width = canvas.height = 400;
    ctx!.fillRect(0, 0, 400, 400);

    var r = 0;
    for (var a = 0; a < MAX; a++) {
        points.push([Math.cos(r), Math.sin(r), 0]);
        r += (Math.PI * 2) / MAX;
    }

    for (var a = 0; a < MAX; a++) {
        points.push([0, points[a][0], points[a][1]]);
    }

    for (var a = 0; a < MAX; a++) {
        points.push([points[a][1], 0, points[a][0]]);
    }

    rus();
};

function rus() {
    ctx!.globalCompositeOperation = "source-over";
    ctx!.fillStyle = "rgba(0,0,0,0.03)";
    ctx!.fillRect(0, 0, canvas.width, canvas.height);
    ctx!.globalCompositeOperation = "lighter";

    var tim = count / 5;

    for (var e = 0; e < 3; e++) {
        tim *= 1.7;
        var s = 1 - e / 3;
        a = tim / 59;
        var yp = Math.cos(a);
        var yp2 = Math.sin(a);
        a = tim / 23;
        var xp = Math.cos(a);
        var xp2 = Math.sin(a);
        var p2 = [];

        for (var a = 0; a < points.length; a++) {
            var x = points[a][0];
            var y = points[a][1];
            var z = points[a][2];

            var y1 = y * yp + z * yp2;
            var z1 = y * yp2 - z * yp;
            var x1 = x * xp + z1 * xp2;

            z = x * xp2 - z1 * xp;
            z1 = Math.pow(2, z * s);
            x = x1 * z1;
            y = y1 * z1;
            p2.push([x, y, z]);
        }

        s *= 120;
        for (var d = 0; d < 3; d++) {
            for (var a = 0; a < MAX; a++) {
                const b = p2[d * MAX + a];
                const c = p2[((a + 1) % MAX) + d * MAX];
                ctx!.beginPath();
                ctx!.strokeStyle = "hsla(" + (((a / MAX) * 360) | 0) + ",70%,60%,0.15)";
                ctx!.lineWidth = Math.pow(6, b[2]);
                ctx!.lineTo(b[0] * s + 200, b[1] * s + 200);
                ctx!.lineTo(c[0] * s + 200, c[1] * s + 200);
                ctx!.stroke();
            }
        }
    }
    count++;
    requestAnimationFrame(rus);
}
*/
@Component({
  selector: './strona.component',
  templateUrl: './strona.component.html',
  styleUrls: ['./strona.component.css']
})


export class StronaComponent {
  pages: string[] = ['Strona 1', 'Strona 2', 'Strona 3']; 
  currentPage: number = 0; 
  visibility: number = 0;
  visibilitylast: number = 0;
  isCardRotated = true;
  isAnimationActive!: boolean;
  visibilityQR: number = 0;
  Okladka: number =  0;
  
  Zmiana() {
      this.Okladka = 1;

  }
  Zmiana1() {
    this.Okladka = 2;
  }

  ChangeVisibility() {
    this.visibility = 2;
    console.log('pyklo', this.visibility);
  }
  isChanging: boolean = false;

  VisibilityLast() {
    if (this.isChanging) {
      return; // Zablokuj wywołanie, jeśli zmiana jest w trakcie
    }
  
    this.isChanging = true;
  
    if (this.visibilitylast === 2) {
      this.visibilitylast = 1;
      console.log('udalo2', this.visibilitylast);
    } else {
      this.visibilitylast = 2;
      console.log('udalo', this.visibilitylast);
    }
  
    setTimeout(() => {
      this.isChanging = false; 
    }, 3000);
  }
  VisibilityLast2() {
    this.visibilitylast = 1;
    console.log('udalo', this.visibilitylast);
  }
  Pow() {
    this.visibilityQR = 2;

  }
  Pow1() {
    this.visibilityQR = 1; 

  }
  

  rotateCard() {
    this.isCardRotated = !this.isCardRotated;
  }
  isCardRotated1 = true;

  rotateCard1() {
    this.isCardRotated1 = !this.isCardRotated1;
  }
  isCardRotated2 = true;

  rotateCard2() {
    this.isCardRotated2 = !this.isCardRotated2;
  }

  isCardRotated3 = false;
  isCardRotated4 = false;
  isCardRotated5 = true;
  isCardRotated6 = true;
  isCardRotated7 = true;
  isCardRotated8 = true;
  isCardRotated9 = true;
  isCardRotated10 = true;
  isCardRotated11 = true;
  isCardRotated12 = true;
  isCardRotated13 = true;
  isCardRotated14 = true;
  isCardRotated15 = true;
  isCardRotated16 = true;
  isCardRotated17 = true;
  isCardRotated18 = true;
  isCardRotated20 = true;
  isCardRotated22 = false;
  rotateCard3() {
    this.isCardRotated3 = !this.isCardRotated3;
    setTimeout(() => {
      this.isCardRotated4 = true;
    }, 4000);
  }

  rotateCard5() {
    this.isCardRotated5 = !this.isCardRotated5;
  }

  rotateCard6() {
    this.isCardRotated6 = !this.isCardRotated6;
  }
  rotateCard7() {
    this.isCardRotated7 = !this.isCardRotated7;
  }
  rotateCard8() {
    this.isCardRotated8 = !this.isCardRotated8;
  }
  rotateCard9() {
    this.isCardRotated9 = !this.isCardRotated9;
    this.visibility = 0;
    this.visibilityQR = 0;
  }
  rotateCard10() {
    this.isCardRotated10 = !this.isCardRotated10;

  }
  rotateCard11() {
    this.isCardRotated11 = !this.isCardRotated11;
  }
  rotateCard12() {
    this.isCardRotated12 = !this.isCardRotated12;
  }
  rotateCard13() {
    this.isCardRotated13 = !this.isCardRotated13;
  }
  rotateCard14() {
    this.isCardRotated14 = !this.isCardRotated14;
  }
  rotateCard15() {
    this.isCardRotated15 = !this.isCardRotated15;
    this.visibilitylast = 0;
  }
  rotateCard16() {
    this.isCardRotated16 = !this.isCardRotated16;
    this.isCardRotated3 = !this.isCardRotated3;
  }
  rotateCard17() {
    this.isCardRotated17 = !this.isCardRotated17;
  }
  rotateCard20() {
    this.isCardRotated20 = !this.isCardRotated20;
    this.visibilitylast = 0;
  }
  rotateCard22() {
    this.isCardRotated22 = !this.isCardRotated22;

  }

  showCustomImage = false;

  toggleImage() {
    this.showCustomImage = !this.showCustomImage;
  }

  startAnimation() {
    this.isAnimationActive = true;
  }
  
  scrollNext() {
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage++;
    }
  }
  scrollback() {
    if(this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
