function Csys(bw, bh, tw, th) {
	var bw = bw || 500,
		bh = bh || 500,
		tw = tw || 110,
		th = th || 50,
		unit = 10;
	var lenx = Math.floor((bw - tw) / unit),
		leny = Math.floor((bh - th) / unit);

	this.csyslist = new Array();
	this.modlist = new Array();
	for (var j = 0; j < leny; j++) {
		for (var i = 0; i < lenx; i++) {
			this.csyslist[j * lenx + i] = j * lenx + i;
			this.modlist.push(this.csyslist[j * lenx + i]);
		}
	}
	if (typeof this.gps != "function") {
		Csys.prototype.gps = function(iw, ih) {
			var tw = iw || tw,
				th = ih || th;
			var tx = Math.ceil(tw / unit),
				ty = Math.ceil(th / unit);
			if (!this.modlist.length) {
				for (var j = 0; j < leny; j++) {
					for (var i = 0; i < lenx; i++) {
						this.csyslist[j * lenx + i] = j * lenx + i;
						this.modlist.push(this.csyslist[j * lenx + i]);
					}
				}
			}
			var lenm = this.modlist.length;
			var r = Math.floor(Math.random() * (lenm - 1));
			var ox = this.modlist[r] % lenx,
				oy = Math.floor(this.modlist[r] / lenx);
			var minx = ox - tx > 0 ? ox - tx : 0,
				maxx = ox + tx < lenx ? ox + tx : lenx,
				miny = oy - ty > 0 ? oy - ty : 0,
				maxy = oy + ty < leny ? oy + ty : leny;
			for (var j = miny; j < maxy; j++) {
				for (var i = minx; i < maxx; i++) {
					this.csyslist[j * lenx + i] = false;
				}
			}
			this.modlist = [];
			for (var j = 0; j < leny; j++) {
				for (var i = 0; i < lenx; i++) {
					if (typeof(this.csyslist[j * lenx + i]) == "number") {
						this.modlist.push(this.csyslist[j * lenx + i]);
					}
				}
			}
			return {
				"left": ox * unit,
				"top": oy * unit
			};

		}
	}
}