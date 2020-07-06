declare interface Window {
	wrappedJSObject: {
		fetch: Function;
		options: RequestInit;
	};
}

declare var cloneInto: Function;
