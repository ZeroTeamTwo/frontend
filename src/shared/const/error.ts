export class RefreshTokenError extends Error {
	constructor() {
		super('Token refresh failed');
		this.name = 'RefreshTokenError';
	}
}

export class ServerError extends Error {
	constructor() {
		super('server error');
		this.name = 'ServerError';
	}
}
