var ecru = {};

ecru.data = new RestAPI('/api');

function RestAPI(basePath){
	this.basePath = basePath;
}

