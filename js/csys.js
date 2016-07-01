 function Csys(bw, bh, tw, th) {   //随机坐标
        var boxwidth = bw || 500,
            boxheight = bh || 500,
            tagwidth = tw || 110,
            tagheight = th || 50;
        var lenx = Math.floor(boxwidth / tagwidth),
            leny = Math.floor(boxheight / tagheight);
        var csys = new Array();
        this.csylist = new Array();
        this.modlist = new Array();
        for (var i = 0; i < lenx; i++) {
            csys[i] = new Array();
            for (var j = 0; j < leny; j++) {
                csys[i][j] = {
                    "left": tagwidth * i,
                    "top": tagheight * j,
                    "hold": false
                };
                this.csylist.push(csys[i][j]);
                this.modlist = this.csylist.slice(0); //深复制
            }
        }
        if (typeof this.gps != "function") {
            Csys.prototype.gps = function () {
                if (!this.modlist.length) {
                    this.modlist = this.csylist.slice(0); //深复制
                }
                var lenm = this.modlist.length;
                var r = Math.random() * (lenm - 1);
                return this.modlist.splice(r, 1)[0];

            }
        }
    }