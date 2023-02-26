import myAxios from "./axios";

//获得所有页面列表
export const getListAPI = query => {
	return myAxios({
		url: './page.json',
		method: 'get',
		params: query,
		// headers: {
		// 	'Content-Type': 'application/x-www-form-urlencoded'
		// },
		//transformRequest允许向服务器发送前，修改请求数据 PUT POST PATCH
		// transformRequest:[

		// ]
	})
}

export const getResume = query => {
	return myAxios({
		url: './assets/markdown/resume.md?raw',
		method: 'get',
		params: query,
		// headers: {
		// 	'Content-Type': 'application/x-www-form-urlencoded'
		// },
		//transformRequest允许向服务器发送前，修改请求数据 PUT POST PATCH
		// transformRequest:[

		// ]
	})
}