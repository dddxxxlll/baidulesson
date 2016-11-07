/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = document.getElementById("aqi-city-input").value;
	var air = document.getElementById("aqi-value-input").value;
	var table = document.getElementById("aqi-table");
	var trs = table.getElementsByTagName("tr");
	if (trs.length == 0) {
		var tr1 =document.createElement("tr");
		var tr2 =document.createElement("tr");
		tr1.innerHTML = "<td>城市</td><td>空气质量</td><td>操作</td>"
		tr2.innerHTML = "<td>" + city + "</td><td>" + air + "</td><td><button>删除</button></td>"
		table.appendChild(tr1);
		table.appendChild(tr2);
	}else {
		var tr2 =document.createElement("tr");
		tr2.innerHTML = "<td>" + city + "</td><td>" + air + "</td><td><button>删除</button></td>"
		table.appendChild(tr2);
	}
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table = document.getElementById("aqi-table");
	var trs = table.getElementsByTagName("tr");
	if (trs.length == 1) {
		table.removeChild(trs[0]);
	}
	init();
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
	addAqiData();
	renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
  var trrm = this.parentNode.parentNode;
  trrm.parentNode.removeChild(trrm);
	renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById("add-btn").onclick = addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  var btn2 = document.getElementById("aqi-table").getElementsByTagName("button")
  for (i = 0;i < btn2.length;i++) {
  	btn2[i].onclick = delBtnHandle
  }
}

init();