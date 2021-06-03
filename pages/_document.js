import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
					<script id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js?id=JKh4xVzhOmDgths3&ck=JKh4xVzhOmDgths3"></script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
