Sunniesnow.Plugin.now.main = async function () {
	const text = await this.blobs['data.txt'].text();
	console.log(text);
};
