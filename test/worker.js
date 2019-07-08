self.addEventListener('connect', e => {
	const port = e.ports[0];
	console.log('connected');
	port.addEventListener('message', e => {
		console.log('message', e.data);
	});
});
